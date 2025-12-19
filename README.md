# 🥗 Veggie Vibes - Vegetarian Recipes

A modern and responsive web app for discovering and cooking delicious vegetarian recipes. Powered by React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🔍 **Advanced Search**: Find recipes by ingredients, diet, and preferences
- 🎨 **Responsive Design**: Interface optimized for mobile, tablet and desktop devices
- 🌱 **Filter**: Filter by vegan, gluten-free, dairy-free diets
- ⏱️ **Preparation Time**: View preparation, cooking and total time
- 📝 **Detailed Recipes**: Precise ingredients and step-by-step instructions
- ⚡ **Performance**: Quick build with Vite and HMR during development
- 🔗 **API Integration**: Integrated with Spoonacular API for complete recipe database

## 🗂️ Project structure

```
src/
├── components/          
│   ├── Banner.tsx      
│   ├── Hero.tsx        
│   ├── Navbar.tsx      
│   ├── RecipeCard.tsx  
│   ├── RecipesContainer.tsx  
│   ├── SideBar.tsx     
│   ├── IngredientsList.tsx   
│   ├── StepsList.tsx   
│   ├── Input.tsx       
│   ├── Loader.tsx      
│   ├── Switch.tsx      
│   └── Section.tsx     
├── pages/              
│   ├── Home.tsx       
│   ├── Recipe.tsx     
│   └── NotFound.tsx   
├── context/           
├── types/             
├── assets/            
├── api/               
├── index.css          
├── App.tsx            
└── main.tsx           
```
## 🔄 Data flow
```
Home/Recipe Pages
    ↓
Navbar (query and filters managment)
    ↓
RecipesContainer (fetch API)
    ↓
RecipeCard
    ↓
Recipe Page (recipe datails)
```

## 🛠️ Packages Used

- **Frontend Framework**: React 19.2.0
- **Linguaggio**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17 + Styled Components 6.1.19
- **State Management**: Redux Toolkit 2.11.0
- **Routing**: React Router 7.9.6
- **HTTP Client**: Axios 1.13.2
- **Icons**: React Icons 5.5.0
- **Animation**: Anime.js 4.2.2
- **Sanitization HTML**: DOMPurify 3.3.1

##  Installation and Setup

1. **Clone repository**
```bash
git clone https://github.com/AreLory/SpoonacularAPI-Project.git
cd SpoonacularAPI
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure environment variables**
Configure environment variables Create a .env.local file in the project root:
```env
VITE_API_KEY=your_spoonacular_api_key
```

4. **Start development server**
```bash
npm run dev
```

Go to `http://localhost:5173`



## 🎯Main Features

### 1. Home Page
- Hero section with call-to-action
- Persistent search bar
- Responsive recipe grid
- Advanced sidebar filters
### 2. Search and filter
- Search by recipe name
- Filters by diet (Vegan, Gluten-free, Dairy-free)
- Filters by international cuisine
- Filters by included/excluded ingredients
- Maximum preparation time

### 3. Recipes Details
- Recipe image with elegant frame
- Cooking timing information
- Recipe summary
- List of ingredients with quantities
- Step-by-step instructions
- Related recipes

## 🙏 Thanks

- [Spoonacular API](https://spoonacular.com/food-api) - Recipes API
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

