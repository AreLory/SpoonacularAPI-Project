# 🥗 Veggie Vibes - Ricette Vegetariane

Un'applicazione web moderna e responsiva per scoprire e cucinare deliziose ricette vegetariane. Powered by React, TypeScript e Tailwind CSS.

## ✨ Caratteristiche

- 🔍 **Ricerca Avanzata**: Trova ricette per ingredienti, dieta e preferenze
- 🎨 **Design Responsivo**: Interfaccia ottimizzata per dispositivi mobile, tablet e desktop
- 🌱 **Filtri Intelligenti**: Filtra per diete vegane, senza glutine, senza latticini
- ⏱️ **Tempo di Preparazione**: Visualizza tempo di preparazione, cottura e totale
- 📝 **Ricette Dettagliate**: Ingredienti precisi e istruzioni passo dopo passo
- ⚡ **Performance**: Build veloce con Vite e HMR durante lo sviluppo
- 🔗 **API Integration**: Integrato con Spoonacular API per database ricette completo

## 🛠️ Stack Tecnologico

- **Frontend Framework**: React 19.2.0
- **Linguaggio**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17 + Styled Components 6.1.19
- **State Management**: Redux Toolkit 2.11.0
- **Routing**: React Router 7.9.6
- **HTTP Client**: Axios 1.13.2
- **Icons**: React Icons 5.5.0
- **Animazioni**: Anime.js 4.2.2
- **Sanitizzazione HTML**: DOMPurify 3.3.1

## 📋 Prerequisiti

- Node.js >= 16.0.0
- npm o yarn

## 🚀 Installazione e Setup

1. **Clona il repository**
```bash
git clone <repository-url>
cd SpoonacularAPI
```

2. **Installa le dipendenze**
```bash
npm install
```

3. **Configura le variabili d'ambiente**
Crea un file `.env.local` nella root del progetto:
```env
VITE_API_KEY2=your_spoonacular_api_key
```

4. **Avvia il server di sviluppo**
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

## 📦 Script Disponibili

```bash
# Avvia il server di sviluppo
npm run dev

# Build per la produzione
npm run build

# Verifica con ESLint
npm run lint

# Anteprima della build di produzione
npm run preview
```

## 🗂️ Struttura del Progetto

```
src/
├── components/          # Componenti React riutilizzabili
│   ├── Banner.tsx      # Sezione informazioni ricetta
│   ├── Hero.tsx        # Sezione hero page
│   ├── Navbar.tsx      # Barra di navigazione responsive
│   ├── RecipeCard.tsx  # Card ricetta con hover effect
│   ├── RecipesContainer.tsx  # Grid ricette
│   ├── SideBar.tsx     # Menu filtri mobile
│   ├── IngredientsList.tsx   # Lista ingredienti
│   ├── StepsList.tsx   # Istruzioni ricetta
│   ├── Input.tsx       # Input search
│   ├── Loader.tsx      # Loading spinner
│   ├── Switch.tsx      # Toggle switch
│   └── Section.tsx     # Componente sezione
├── pages/              # Pagine dell'applicazione
│   ├── Home.tsx       # Home page
│   ├── Recipe.tsx     # Dettagli ricetta
│   └── NotFound.tsx   # Pagina 404
├── context/           # Context API (per future implementazioni)
├── types/             # Interfacce TypeScript
├── assets/            # Immagini e risorse statiche
├── api/               # Utility API
├── index.css          # Stili globali
├── App.tsx            # Componente principale
└── main.tsx           # Entry point
```

## 📱 Responsive Design

L'applicazione è completamente responsiva con breakpoint Tailwind:

- **Mobile**: <640px (sm)
- **Tablet**: ≥640px (sm) - ≥768px (md)
- **Desktop**: ≥1024px (lg) - ≥1280px (xl)

Tutte le componenti si adattano fluidamente ai diversi schermi.

## 🎯 Funzionalità Principali

### 1. Home Page
- Hero section con call-to-action
- Barra di ricerca persistente
- Griglia ricette responsiva
- Filtri avanzati sidebar

### 2. Ricerca e Filtri
- Ricerca per nome ricetta
- Filtri per dieta (Vegan, Gluten-free, Dairy-free)
- Filtri per cucina internazionale
- Filtri per ingredienti inclusi/esclusi
- Tempo massimo di preparazione

### 3. Dettagli Ricetta
- Immagine ricetta con cornice elegante
- Informazioni timing cottura
- Riassunto ricetta
- Lista ingredienti con quantità
- Istruzioni passo dopo passo
- Ricette correlate

## 🎨 Design System

### Palette Colori
- **Primary**: #101517 (Nero profondo)
- **Secondary**: #151922 (Grigio scuro)
- **Tertiary**: #1F2934 (Blu scuro)
- **Quaternary**: #cafc05 (Verde lime)
- **White**: #fbfbfa (Bianco caldo)

### Tipografia
- Font principale: Roboto
- Effetti hover custom con border e shadow

## 🔄 Flusso Dati

```
Home/Recipe Pages
    ↓
Navbar (gestione query e filtri)
    ↓
RecipesContainer (fetch API)
    ↓
RecipeCard (visualizzazione singola ricetta)
    ↓
Recipe Page (dettagli completi)
```

## 🚀 Deployment

Per deployare l'applicazione in produzione:

1. Build la applicazione:
```bash
npm run build
```

2. Carica la cartella `dist/` sul tuo hosting

3. Assicurati che il server sia configurato per il routing client-side

## 🤝 Contributi

I contributi sono benvenuti! Per favore:

1. Fork il repository
2. Crea un branch per la tua feature (`git checkout -b feature/amazing-feature`)
3. Commit i tuoi cambiamenti (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📝 Licenza

Questo progetto è disponibile sotto la licenza MIT.

## 📞 Support

Per domande o segnalazioni di bug, apri un issue nel repository.

## 🙏 Ringraziamenti

- [Spoonacular API](https://spoonacular.com/food-api) - API ricette
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
