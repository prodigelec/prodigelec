
const { supabase } = require('../config/supabase');

async function listCompanies() {
    try {
        console.log('Listing companies...');
        
        const { data, error } = await supabase
            .from('companies')
            .select('*');

        if (error) {
            console.error('Error listing companies:', error);
        } else {
            console.log('Companies found:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

listCompanies();
