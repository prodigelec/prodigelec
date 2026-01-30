const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');

// Get all customers (Placeholder for actual table)
router.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*');

        if (error) {
            // If table doesn't exist yet, return empty array for demo
            if (error.code === '42P01') return res.json([]);
            throw error;
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a customer
router.post('/', async (req, res) => {
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
});

module.exports = router;
