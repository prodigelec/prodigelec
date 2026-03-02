# Cahier des Charges : Projet PRODIGELEC

Ce document récapitule les spécifications fonctionnelles et techniques du site vitrine PRODIGELEC, un site professionnel pour un artisan multiservices (Électricité & Serrurerie).

## 1. Présentation du Projet
*   **Nom du projet** : PRODIGELEC
*   **Objectif** : Créer un site vitrine moderne, performant et sécurisé pour attirer de nouveaux clients, permettre le téléchargement de coupons promotionnels (flyers) et assurer la mise en conformité légale de l'activité.
*   **Cible** : Particuliers et professionnels en Eure (27) et Eure-et-Loir (28).

## 2. Spécifications Fonctionnelles

### 2.1 Navigation & Structure
*   **Landing Page** : Présentation dynamique des services, de l'expertise et des zones d'intervention.
*   **Navbar** : Menu sticky avec design "glassmorphism", navigation fluide vers les sections clés.
*   **Footer** : Liens de navigation, informations de contact et accès aux pages légales.

### 2.2 Gestion des Services
*   **Électricité** : Mise en avant du dépannage, des remises aux normes et de la domotique.
*   **Serrurerie** : Focus sur l'ouverture de porte, le changement de serrure et la sécurisation.

### 2.3 Outil Flyer (Génération de Coupons)
*   **Prévisualisation** : Rendu dynamique d'un coupon A5 haute fidélité.
*   **Export PDF** : Génération vectorielle via `@react-pdf/renderer` pour une qualité d'impression optimale.
*   **Offre Limitée** : Mention "100 premiers clients" intégrée pour stimuler la conversion.
*   **Mode Impression** : CSS spécifique pour économiser l'encre (fond blanc forcé).

### 2.4 Conversion & Contact
*   **Formulaire de Contact** : Validation en temps réel, envoi sécurisé via EmailJS.
*   **Newsletter** : Inscription avec consentement RGPD, stockage sécurisé dans Supabase.
*   **Intervention Map** : Carte interactive affichant les zones couvertes.

## 3. Spécifications Techniques

### 3.1 Stack Technologique
*   **Framework** : Next.js 14+ (App Router).
*   **Styling** : Tailwind CSS (Système de design personnalisé).
*   **Animations** : Framer Motion (Transitions fluides et scroll reveals).
*   **Icônes** : Lucide React & React Icons (Uniformité visuelle).
*   **Backend / DB** : Supabase (Stockage newsletter, authentification).
*   **Mail Service** : EmailJS (Gestion des flux mails sans serveur backend complexe).

### 3.2 Sécurité & Performance
*   **Variables d'environnement** : Isolation stricte des clés API (Vercel/GitHub secrets).
*   **SEO** : Optimisation des meta-tags, structure de titres sémantique (H1-H6).
*   **Performance** : Chargement paresseux des composants lourds (Dynamic Imports pour le PDF).

## 4. Design & Identité Visuelle
*   **Palette de couleurs** : Bleu nuit profond (#0b1a2a), Or (Primary: #c9a227), Blanc pur pour les textes.
*   **Esthétique** : Style premium, usage de dégradés subtils, glassmorphism et micro-animations.
*   **Typographie** : Polices modernes sans-serif optimisées pour le web.

## 5. Aspects Légaux & Conformité
*   **RGPD** : Politique de confidentialité détaillée, durée de conservation des données, droits des utilisateurs.
*   **Mentions Légales** : Identification de l'éditeur, de l'hébergeur et informations d'assurance (Décennale).
*   **CGV** : Conditions de vente artisanales (Validité devis, acompte de 50%, clause de réserve de propriété).

## 6. Déploiement & Maintenance
*   **Hébergement** : Vercel (Connecté au dépôt GitHub `dev` / `main`).
*   **Nom de domaine** : `prodigelec.fr` (pointant via DNS Hostinger).
*   **Workflow Git** : Développement sur branche `dev`, production sur branch `main`.

## 7. Évolutions Futures
*   **E-commerce** : Possibilité de paiement direct d'acompte par lien sécurisé.
*   **Blog/Actu** : Section pour le conseil technique et les réalisations récentes.
*   **Google Search Console** : Optimisation continue de l'indexation.
