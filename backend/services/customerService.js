const { supabase } = require('../config/supabase');

const getAllCustomers = async (companyId) => {
    const { data, error } = await supabase
        .from('customers')
        .select('*')
        .eq('company_id', companyId)
        .order('created_at', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
};

const getCustomerById = async (id, companyId) => {
    const { data, error } = await supabase
        .from('customers')
        .select('*')
        .eq('id', id)
        .eq('company_id', companyId)
        .single();

    if (error) throw new Error(error.message);
    return data;
};

const createCustomer = async (customerData) => {
    const { data, error } = await supabase
        .from('customers')
        .insert([customerData])
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

const updateCustomer = async (id, companyId, customerData) => {
    const { data, error } = await supabase
        .from('customers')
        .update(customerData)
        .eq('id', id)
        .eq('company_id', companyId)
        .select()
        .single();

    if (error) throw new Error(error.message);
    return data;
};

const deleteCustomer = async (id, companyId) => {
    const { error } = await supabase
        .from('customers')
        .delete()
        .eq('id', id)
        .eq('company_id', companyId);

    if (error) throw new Error(error.message);
    return true;
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
