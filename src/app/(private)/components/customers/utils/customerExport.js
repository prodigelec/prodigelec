/**
 * Customer Export Utilities
 * Fonctions d'export CSV et PDF pour les clients
 */

// Helper functions for PDF badges
const getStatusBadge = (status) => {
  const styles = {
    active:
      "background: #dcfce7; color: #166534; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;",
    inactive:
      "background: #f1f5f9; color: #64748b; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;",
    lead: "background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;",
  };
  const labels = { active: "Actif", inactive: "Inactif", lead: "À relancer" };
  return `<span style="${styles[status] || styles.active}">${labels[status] || "Actif"}</span>`;
};

const getTypeBadge = (type) => {
  if (type === "professional") {
    return '<span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">Professionnel</span>';
  }
  return '<span style="background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">Particulier</span>';
};

/**
 * Export customers to CSV file
 */
export const exportCustomersToCSV = (customers, filename = "clients") => {
  const headers = [
    "Type",
    "Nom/Société",
    "Contact",
    "Email",
    "Téléphone",
    "Ville",
    "Tags",
    "Statut",
  ];
  const csvContent = [
    headers.join(","),
    ...customers.map((c) =>
      [
        c.type === "professional" ? "Pro" : "Particulier",
        c.type === "professional"
          ? c.company_name
          : `${c.first_name} ${c.last_name}`,
        c.type === "professional" ? `${c.first_name} ${c.last_name}` : "-",
        c.email || "-",
        c.phone || "-",
        c.city || "-",
        (c.tags || []).join(";"),
        c.status === "lead"
          ? "À relancer"
          : c.status === "inactive"
            ? "Inactif"
            : "Actif",
      ]
        .map((field) => `"${field}"`)
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
  link.click();
};

/**
 * Export customers to PDF file
 */
export const exportCustomersToPDF = async (
  customers,
  filename = "clients",
  title = "Liste des Clients",
  subtitle = "Gestion de la Relation Client",
) => {
  const html2pdf = (await import("html2pdf.js")).default;

  const stats = {
    total: customers.length,
    active: customers.filter((c) => c.status === "active").length,
    lead: customers.filter((c) => c.status === "lead").length,
    inactive: customers.filter((c) => c.status === "inactive").length,
  };

  const content = document.createElement("div");
  content.innerHTML = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 0;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px 40px; margin-bottom: 30px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">PRODIGELEC</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 14px;">${subtitle}</p>
                    </div>
                    <div style="text-align: right;">
                        <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 13px;">Exporté le ${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
                    </div>
                </div>
            </div>

            <!-- Title Section -->
            <div style="padding: 0 40px; margin-bottom: 25px;">
                <h2 style="color: #1e293b; margin: 0 0 8px 0; font-size: 22px; font-weight: 600;">${title}</h2>
                <p style="color: #64748b; margin: 0; font-size: 14px;">
                    <strong>${stats.total}</strong> client(s) • 
                    <span style="color: #166534;">${stats.active} actif(s)</span> • 
                    <span style="color: #1e40af;">${stats.lead} à relancer</span> • 
                    <span style="color: #64748b;">${stats.inactive} inactif(s)</span>
                </p>
            </div>

            <!-- Table -->
            <div style="padding: 0 40px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
                    <thead>
                        <tr style="background: #1e293b;">
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Type</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Nom / Société</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Contact</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Email</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Téléphone</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Ville</th>
                            <th style="padding: 14px 16px; text-align: left; color: white; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${customers
                          .map(
                            (c, idx) => `
                            <tr style="background: ${idx % 2 === 0 ? "#ffffff" : "#f8fafc"};">
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">${getTypeBadge(c.type)}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #1e293b;">${c.type === "professional" ? c.company_name : `${c.first_name} ${c.last_name}`}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #64748b;">${c.type === "professional" && c.first_name ? `${c.first_name} ${c.last_name}` : "-"}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #475569;">${c.email || "-"}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #475569;">${c.phone || "-"}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #475569;">${c.city || "-"}</td>
                                <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0;">${getStatusBadge(c.status)}</td>
                            </tr>
                        `,
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>

            <!-- Footer -->
            <div style="margin-top: 40px; padding: 20px 40px; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 11px; margin: 0; text-align: center;">
                    Document généré automatiquement par Prodigelec CRM • ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                </p>
            </div>
        </div>
    `;

  const opt = {
    margin: 0,
    filename: `${filename}_${new Date().toISOString().split("T")[0]}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf().set(opt).from(content).save();
};
