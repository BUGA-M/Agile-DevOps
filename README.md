# 🚀 DevOps Mastery — Interactive Learning Platform

Une plateforme d'apprentissage interactive sur le cycle DevOps, construite avec **Next.js 15** et **Framer Motion**.

> Vivez le flux complet DevOps, du commit d'un développeur jusqu'au déploiement en production.

---

## 📖 À propos du projet

Ce projet est une application web éducative couvrant les concepts clés de l'approche **Agile** et **DevOps** :

- **CI — Continuous Integration** : Comprendre l'automatisation des tests et du build.
- **CD — Continuous Delivery / Deployment** : Différencier livraison manuelle et déploiement automatique.
- **Infrastructure & Outils** : Docker, Kubernetes, Terraform et l'Infrastructure as Code.
- **Simulation Interactive** : Un pipeline DevOps simulé en temps réel, de `git push` à la production.

---

## 🗂️ Structure des Pages

| Route | Description |
|---|---|
| `/` | Page d'accueil avec la visualisation Infinity Loop du cycle DevOps |
| `/overview` | Vue d'ensemble du flux DevOps |
| `/ci` | Continuous Integration — Flux CI animé |
| `/cd` | Continuous Delivery vs Deployment |
| `/architecture` | Patterns d'architecture |
| `/tools` | Outils DevOps (Docker, Kubernetes, Terraform...) |
| `/simulation` | 🎮 Simulation Pipeline interactive |

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org) (App Router)
- **Langage** : TypeScript
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **UI** : [shadcn/ui](https://ui.shadcn.com/) + Tailwind CSS
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Diagrammes** : [Mermaid.js](https://mermaid.js.org/)

---

## ⚡ Démarrage

### Prérequis
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/BUGA-M/Agile-DevOps.git
cd Agile-DevOps

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production

```bash
npm run build
npm run start
```

---

## 🎮 Fonctionnalités Principales

- 🔄 **Infinity Loop animé** — Visualisation du cycle DevOps complet (Plan → Code → Build → Test → Release → Deploy → Operate → Monitor).
- 📊 **Flux CI interactif** — Timeline animée montrant chaque étape de la CI avec les scénarios de succès/échec.
- 🆚 **Comparaison CD** — Visualisation côte à côte de Continuous Delivery (approbation humaine) vs Continuous Deployment (automatique).
- 🎯 **Pipeline de Simulation** — Simulation en temps réel avec logs de terminal et métriques de production live.

---

## 📄 Licence

Ce projet est à usage éducatif dans le cadre de la formation **OFPPT**.
