const { supabase } = require('../config/supabase');

const getAllQuotes = async (companyId) => {
    const { data, error } = await supabase
        .from('quotes')
        .select(`
            *,
            customer:customers(first_name, last_name, company_name, email)
        `)
        .eq('company_id', companyId)
        .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
};

const getQuoteById = async (id, companyId) => {
    const { data, error } = await supabase
        .from('quotes')
        .select(`
            *,
            customer:customers(*),
            items:quote_items(*)
        `)
        .eq('id', id)
        .eq('company_id', companyId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

const createQuote = async (quoteData) => {
    const { items, ...mainQuoteData } = quoteData;

    // 1. Create main quote
    const { data: quote, error: quoteError } = await supabase
        .from('quotes')
        .insert([mainQuoteData])
        .select()
        .single();

    if (quoteError) throw new Error(quoteError.message);

    // 2. Create items with quote_id
    const itemsWithQuoteId = items.map(item => ({
        ...item,
        quote_id: quote.id
    }));

    const { error: itemsError } = await supabase
        .from('quote_items')
        .insert(itemsWithQuoteId);

    if (itemsError) {
        // Cleanup quote if items fail (basic transaction emulation)
        await supabase.from('quotes').delete().eq('id', quote.id);
        throw new Error(itemsError.message);
    }

    return await getQuoteById(quote.id, mainQuoteData.company_id);
};

const updateQuote = async (id, quoteData) => {
    const { items, customer, ...mainQuoteData } = quoteData;

    // 1. Update main quote
    const { error: quoteError } = await supabase
        .from('quotes')
        .update({ ...mainQuoteData, updated_at: new Date() })
        .eq('id', id);

    if (quoteError) throw new Error(quoteError.message);

    // 2. Refresh items (Delete then Insert)
    if (items) {
        // Delete existing items
        await supabase.from('quote_items').delete().eq('quote_id', id);

        // Insert new items
        const itemsWithQuoteId = items.map(item => {
            const { id: itemId, ...cleanItem } = item; // Remove old IDs if present
            return {
                ...cleanItem,
                quote_id: id
            };
        });

        const { error: itemsError } = await supabase
            .from('quote_items')
            .insert(itemsWithQuoteId);

        if (itemsError) throw new Error(itemsError.message);
    }

    return await getQuoteById(id, mainQuoteData.company_id);
};

const updateQuoteStatus = async (id, companyId, status, additionalData = {}) => {
    const { data, error } = await supabase
        .from('quotes')
        .update({ status, ...additionalData, updated_at: new Date() })
        .eq('id', id)
        .eq('company_id', companyId)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

const deleteQuote = async (id, companyId) => {
    const { error } = await supabase
        .from('quotes')
        .delete()
        .eq('id', id)
        .eq('company_id', companyId);

    if (error) throw new Error(error.message);
    return true;
};

module.exports = {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    updateQuoteStatus,
    deleteQuote
};
