const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Found' : 'Missing');
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY ? 'Found' : 'Missing');

const { supabase } = require('../config/supabase');

async function checkDb() {
    console.log('Checking customers table...');
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .limit(1);

        if (error) {
            console.error('Error querying customers table:', error);
        } else {
            console.log('Customers table query successful. Data:', data);
        }
    } catch (e) {
        console.error('Exception:', e);
    }
}

checkDb();
