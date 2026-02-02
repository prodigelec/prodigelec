/**
 * Quote PDF Export Utility
 * Génération de devis professionnels au format PDF
 */

export const exportQuoteToPDF = async (quote, company) => {
    const html2pdf = (await import('html2pdf.js')).default;

    // Default Company Data (PRODIGELEC Identity)
    const companyData = {
        company_name: company?.company_name || 'PRODIGELEC',
        // If address is missing, use the intervention zone as a fallback for display
        address: company?.address || 'Intervention Eure (27) & Eure-et-Loir (28)',
        zip_code: company?.zip_code || '',
        city: company?.city || '',
        email: company?.email || 'contact@prodigelec.fr',
        phone: company?.phone || '06 38 19 47 52',
        website: company?.website || 'www.prodigelec.fr',
        siret: company?.siret || '',
        logo_url: company?.logo_url || null
    };

    const content = document.createElement('div');
    content.innerHTML = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.5;">
            <!-- Header: Logo & Company Info -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 50px;">
                <div>
                    ${companyData.logo_url ? `<img src="${companyData.logo_url}" style="max-height: 60px; margin-bottom: 15px;">` : `<h1 style="margin: 0; color: #c9a227; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">${companyData.company_name}</h1>`}
                    <div style="font-size: 12px; color: #64748b; margin-top: 5px;">
                        ${companyData.address}<br>
                        ${companyData.zip_code ? `${companyData.zip_code} ` : ''}${companyData.city}<br>
                        ${companyData.email} • ${companyData.phone}<br>
                        ${companyData.website ? `<a href="http://${companyData.website}" style="color: #c9a227; text-decoration: none;">${companyData.website}</a><br>` : ''}
                        ${companyData.siret ? `SIRET: ${companyData.siret}` : ''}
                    </div>
                </div>
                <div style="text-align: right;">
                    <h2 style="margin: 0; color: #0b1a2a; font-size: 32px; font-weight: 800; letter-spacing: -1px;">DEVIS</h2>
                    <div style="font-size: 14px; font-weight: 600; color: #0b1a2a; margin-top: 5px;">n° ${quote.quote_number}</div>
                    <div style="font-size: 12px; color: #64748b; margin-top: 5px;">Date: ${new Date(quote.issued_at).toLocaleDateString('fr-FR')}</div>
                    ${quote.valid_until ? `<div style="font-size: 11px; color: #ef4444; margin-top: 3px;">Valable jusqu'au: ${new Date(quote.valid_until).toLocaleDateString('fr-FR')}</div>` : ''}
                </div>
            </div>

            <!-- Addresses Section -->
            <div style="display: grid; grid-template-columns: ${quote.intervention_address ? '1fr 1fr 1fr' : '1fr 1fr'}; gap: 30px; margin-bottom: 40px;">
                <div>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Prestataire</div>
                    <div style="font-size: 13px; font-weight: 600; color: #0b1a2a;">${companyData.company_name}</div>
                    <div style="font-size: 12px; color: #475569;">${companyData.address}</div>
                    <div style="font-size: 12px; color: #475569;">${companyData.zip_code} ${companyData.city}</div>
                </div>
                <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9;">
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Client / Facturation</div>
                    <div style="font-size: 14px; font-weight: 700; color: #0f172a;">${quote.customer?.company_name || `${quote.customer?.first_name} ${quote.customer?.last_name}`}</div>
                    <div style="font-size: 12px; color: #475569; margin-top: 4px;">
                        ${quote.customer?.address || ''}<br>
                        ${quote.customer?.zip_code || ''} ${quote.customer?.city || ''}
                    </div>
                </div>
                ${quote.intervention_address ? `
                <div style="background: #fef3c7; padding: 20px; border-radius: 12px; border: 1px solid #fcd34d;">
                    <div style="font-size: 11px; font-weight: 700; color: #92400e; text-transform: uppercase; margin-bottom: 8px;">📍 Lieu d'intervention</div>
                    <div style="font-size: 12px; color: #78350f; margin-top: 4px;">
                        ${quote.intervention_address}<br>
                        ${quote.intervention_zip_code || ''} ${quote.intervention_city || ''}
                    </div>
                </div>
                ` : ''}
            </div>

            <!-- Items Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px;">
                <thead>
                    <tr style="background: #1e293b; color: white; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">
                        <th style="padding: 12px 15px; text-align: left;">Désignation</th>
                        <th style="padding: 12px 15px; text-align: center; width: 60px;">Qté</th>
                        <th style="padding: 12px 15px; text-align: center; width: 60px;">Unité</th>
                        <th style="padding: 12px 15px; text-align: right; width: 100px;">P.U. HT</th>
                        <th style="padding: 12px 15px; text-align: center; width: 70px;">TVA</th>
                        <th style="padding: 12px 15px; text-align: right; width: 110px;">Total HT</th>
                    </tr>
                </thead>
                <tbody style="font-size: 12px;">
                    ${quote.items.map((item, idx) => `
                        <tr style="border-bottom: 1px solid #f1f5f9; background: ${idx % 2 === 0 ? 'white' : '#fcfcfc'};">
                            <td style="padding: 15px;">
                                <div style="font-weight: 600; color: #1e293b;">${item.description}</div>
                                <div style="font-size: 10px; color: #94a3b8; margin-top: 2px;">${item.item_type === 'service' ? '🛠️ Prestation de service' : '📦 Vente de marchandise'}</div>
                            </td>
                            <td style="padding: 15px; text-align: center;">${item.quantity}</td>
                            <td style="padding: 15px; text-align: center; color: #64748b;">${item.unit || 'unité'}</td>
                            <td style="padding: 15px; text-align: right;">${item.unit_price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</td>
                            <td style="padding: 15px; text-align: center; color: #64748b;">${item.tva_rate}%</td>
                            <td style="padding: 15px; text-align: right; font-weight: 600;">${(item.quantity * item.unit_price).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- Footer Section: Totals & Signature Area -->
            <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px;">
                <div>
                    <div style="margin-bottom: 25px;">
                        <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 5px;">Notes & Conditions</div>
                        <div style="font-size: 10px; color: #64748b; font-style: italic; white-space: pre-line;">${quote.notes || 'Aucune note particulière.'}</div>
                        <div style="font-size: 10px; color: #64748b; margin-top: 10px; border-top: 1px dashed #e2e8f0; padding-top: 10px;">${quote.terms || ''}</div>
                    </div>

                    <!-- Indy-style Breakdown -->
                    <div style="background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #f1f5f9; margin-bottom: 25px;">
                        <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px;">Récapitulatif</div>
                        <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                            <span style="color: #64748b;">Total Prestations de service :</span>
                            <span style="font-weight: 600;">${quote.items.filter(i => i.item_type === 'service').reduce((acc, i) => acc + (i.quantity * i.unit_price), 0).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 11px;">
                            <span style="color: #64748b;">Total Ventes de marchandises :</span>
                            <span style="font-weight: 600;">${quote.items.filter(i => i.item_type === 'material').reduce((acc, i) => acc + (i.quantity * i.unit_price), 0).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                        </div>
                    </div>
                    
                    <!-- Signature Pad Area -->
                    <div style="border: 2px dashed #cbd5e1; border-radius: 12px; padding: 20px; height: 120px; position: relative; background: #fff;">
                        <div style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; position: absolute; top: 10px; left: 15px;">Bon pour accord (Signature)</div>
                        ${quote.signature_data ? `<img src="${quote.signature_data}" style="max-height: 100px; display: block; margin: 0 auto; filter: contrast(120%);">` : ''}
                        ${quote.signed_at ? `<div style="font-size: 9px; color: #94a3b8; position: absolute; bottom: 10px; right: 15px;">Signé électroniquement le ${new Date(quote.signed_at).toLocaleDateString()} via PRODIGELEC</div>` : ''}
                    </div>
                </div>

                <div style="background: #0f172a; color: white; border-radius: 20px; padding: 30px; height: fit-content;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 13px; color: #94a3b8;">
                        <span>Total Hors Taxes</span>
                        <span>${quote.total_ht.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 13px; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
                        <span>Montant TVA</span>
                        <span>${quote.total_tva.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 14px; font-weight: 500;">TOTAL TTC</span>
                        <span style="font-size: 24px; font-weight: 800; color: #1e293b;">${quote.total_ttc.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
                    </div>
                </div>
            </div>

            <!-- Legal Footer -->
            <div style="position: absolute; bottom: 40px; left: 40px; right: 40px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                <p style="font-size: 9px; color: #94a3b8; margin: 0;">
                    ${company?.company_name} • ${company?.legal_form || ''} ${company?.capital ? `au capital de ${company.capital} €` : ''} • SIRET ${company?.siret || '---'}<br>
                    TVA Intracommunautaire ${company?.vat_number || '---'} • ${company?.address}, ${company?.zip_code} ${company?.city}
                </p>
                ${company?.decennale_number ? `
                <p style="font-size: 9px; color: #64748b; margin: 8px 0 0 0; font-weight: 500;">
                    Assurance décennale n° ${company.decennale_number} • ${company.decennale_company || ''} 
                    ${company.decennale_validity ? `• Valable jusqu'au ${new Date(company.decennale_validity).toLocaleDateString('fr-FR')}` : ''}
                </p>
                ` : ''}
            </div>
        </div>
    `;

    const opt = {
        margin: 0,
        filename: `Devis_${quote.quote_number}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    return html2pdf().set(opt).from(content).save();
};
