const { supabase } = require('../config/supabase');

exports.getAllCustomers = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*');

        if (error) {
            if (error.code === '42P01') return res.json([]);
            throw error;
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const { data, error } = await supabase
            .from('customers')
            .insert([{ name, email, phone, address }])
            .select();

        if (error) throw error;
        res.status(201).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
