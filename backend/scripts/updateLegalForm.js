
const { supabase } = require('../config/supabase');

async function updateLegalForm() {
    try {
        console.log('Updating legal form...');
        
        // Update all companies with legal_form 'SAS' to 'EI' (assuming there's only one or we want to fix all)
        // Or better, just update the one related to the user if we knew the ID.
        // Since this is a single-tenant/demo context likely, I'll update where legal_form is SAS.
        
        const { data, error } = await supabase
            .from('companies')
            .update({ legal_form: 'EI' })
            .eq('legal_form', 'SAS')
            .select();

        if (error) {
            console.error('Error updating legal form:', error);
        } else {
            console.log('Legal form updated successfully:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

updateLegalForm();
