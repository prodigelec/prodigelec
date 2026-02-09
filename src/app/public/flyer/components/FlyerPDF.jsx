"use client";
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Enregistrement facultatif de polices si nécessaire, mais Helvetica est standard
// Font.register({ family: 'Helvetica-Bold', fontWeight: 'bold' });

const styles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#ffffff", // On reste sur fond blanc pour l'économie d'encre
    fontFamily: "Helvetica",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "rgba(201, 162, 39, 0.05)",
    paddingTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logoPlaceholder: {
    width: 120,
    height: 40,
    // Note: Pour le logo, on utilisera une URL ou un base64 si possible
  },
  badge: {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(201, 162, 39, 0.2)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  badgeText: {
    color: "#c9a227",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  heroCard: {
    marginTop: -30,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    borderLeft: "4px solid #c9a227",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    // Box shadow n'est pas supporté nativement de la même façon, on utilise des bordures subtiles
    border: "1px solid #f1f1f1",
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0b1a2a",
  },
  phoneNumber: {
    fontSize: 28,
    fontWeight: "ultrabold",
    color: "#c9a227",
    textAlign: "right",
  },
  promoBanner: {
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: "#dc2626",
    borderRadius: 8,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  promoPercent: {
    backgroundColor: "#ffffff",
    color: "#dc2626",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    borderRadius: 4,
  },
  promoText: {
    color: "#ffffff",
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  promoSub: {
    fontSize: 8,
    opacity: 0.9,
  },
  grid: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 20,
  },
  gridCol: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0b1a2a",
    marginBottom: 10,
    borderBottom: "1px solid #eee",
    paddingBottom: 4,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: "#c9a227",
    borderRadius: 4,
  },
  itemText: {
    fontSize: 9,
    color: "#4b5563",
  },
  zonesContainer: {
    marginHorizontal: 20,
    padding: 12,
    backgroundColor: "#f9fafb",
    borderRadius: 10,
    border: "1px solid #f1f1f1",
    marginBottom: 10,
  },
  zoneTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#0b1a2a",
    marginBottom: 6,
  },
  zonesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  zoneTag: {
    backgroundColor: "#ffffff",
    border: "1px solid #eee",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 8,
    color: "#4b5563",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTop: "1px solid #eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  contactInfo: {
    gap: 4,
  },
  footerLink: {
    fontSize: 10,
    color: "#0b1a2a",
  },
  footerLegal: {
    fontSize: 7,
    color: "#9ca3af",
    marginTop: 5,
  },
  qrCode: {
    width: 50,
    height: 50,
  },
  bottomStrip: {
    height: 6,
    backgroundColor: "#c9a227",
    width: "100%",
  },
});

const FlyerPDF = () => (
  <Document title="Flyer PRODIGELEC 2026">
    <Page size="A5" style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoPlaceholder}>
            {/* Note: Remplacer par l'image réelle si possible */}
            <Text
              style={{ color: "#0b1a2a", fontSize: 16, fontWeight: "bold" }}
            >
              PRODIGELEC
            </Text>
            <Text style={{ color: "#c9a227", fontSize: 8 }}>
              Expertise Technique
            </Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Artisan qualifié</Text>
          </View>
        </View>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.heroTitle}>DÉPANNAGE URGENT</Text>
            <Text style={{ fontSize: 8, color: "#9ca3af" }}>Appel direct</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Text style={{ fontSize: 10, color: "#4b5563" }}>
                Intervention rapide Lun-Ven
              </Text>
              <Text style={{ fontSize: 10, color: "#4b5563" }}>
                Eure (27) & Eure-et-Loir (28)
              </Text>
            </View>
            <Text style={styles.phoneNumber}>06 38 19 47 52</Text>
          </View>
        </View>

        {/* Promo */}
        <View style={styles.promoBanner}>
          <View style={styles.promoPercent}>
            <Text>-10%</Text>
          </View>
          <View style={styles.promoText}>
            <Text style={styles.promoTitle}>OFFRE DÉCOUVERTE</Text>
            <Text style={styles.promoSub}>
              Sur 1ère intervention (Main d&apos;œuvre & Déplacement)
            </Text>
            <Text
              style={{
                fontSize: 7,
                color: "#ffffff",
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              OFFRE LIMITÉE AUX 100 PREMIERS CLIENTS
            </Text>
            <Text style={{ fontSize: 9, fontWeight: "bold", marginTop: 2 }}>
              CODE : FLYER2026
            </Text>
          </View>
        </View>

        {/* Services */}
        <View style={styles.grid}>
          <View style={styles.gridCol}>
            <Text style={styles.serviceTitle}>Électricité</Text>
            {[
              "Dépannage toutes pannes",
              "Mise aux normes",
              "Remplacement tableau",
              "Domotique & Connectivité",
              "Éclairage LED",
            ].map((item, i) => (
              <View key={i} style={styles.serviceItem}>
                <View style={styles.bullet} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
          <View style={styles.gridCol}>
            <Text style={styles.serviceTitle}>Serrurerie</Text>
            {[
              "Ouverture de porte",
              "Changement de serrure",
              "Porte blindée",
              "Volet roulant",
              "Reproduction de clés",
              "Sécurisation",
            ].map((item, i) => (
              <View key={i} style={styles.serviceItem}>
                <View style={styles.bullet} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Zones */}
        <View style={styles.zonesContainer}>
          <Text style={styles.zoneTitle}>ZONES D&apos;INTERVENTION</Text>
          <View style={styles.zonesList}>
            {[
              "Broué",
              "Dreux",
              "Chartres",
              "Évreux",
              "Anet",
              "Nonancourt",
              "St-André",
            ].map((city) => (
              <View key={city} style={styles.zoneTag}>
                <Text>{city}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.contactInfo}>
            <Text style={styles.footerLink}>www.prodigelec.fr</Text>
            <Text style={styles.footerLink}>contact@prodigelec.fr</Text>
            <View>
              <Text style={styles.footerLegal}>
                SIRET : 80430489700023 • Décennale
              </Text>
              <Text style={styles.footerLegal}>Devis gratuit</Text>
            </View>
          </View>
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.prodigelec.fr"
            style={styles.qrCode}
            alt="QR Code"
          />
        </View>

        <View style={styles.bottomStrip} />
      </View>
    </Page>
  </Document>
);

export default FlyerPDF;
