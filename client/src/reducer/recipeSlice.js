const initialState = {
  recipes: [
    {
      id: "f0f58aea-dcd3-4afb-b98d-6ffa797102db",
      name: "TEST FROM FORM",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "whole 30"],
    },
    {
      id: "e9d91f5d-4045-4635-a685-8e777b5563d4",
      name: "asdasdasd",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: [
        "gluten free",
        "lacto ovo vegetarian",
        "primal",
        "pescatarian",
        "ketogenic",
        "dairy free",
        "vegan",
        "whole 30",
        "paleolithic",
        "fodmap friendly",
      ],
    },
    {
      id: "c8836df4-c432-4496-a3ac-4e54689068b7",
      name: "asdasdasd",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: [
        "gluten free",
        "lacto ovo vegetarian",
        "primal",
        "pescatarian",
        "ketogenic",
        "dairy free",
        "vegan",
        "whole 30",
        "paleolithic",
        "fodmap friendly",
      ],
    },
    {
      id: 716426,
      name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      img: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      healthScore: 76,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 715594,
      name: "Homemade Garlic and Basil French Fries",
      img: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
      healthScore: 77,
      diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 715497,
      name: "Berry Banana Breakfast Smoothie",
      img: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
      healthScore: 63,
      diets: ["lacto ovo vegetarian"],
    },
    {
      id: 644387,
      name: "Garlicky Kale",
      img: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      healthScore: 92,
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "whole 30",
        "vegan",
      ],
    },
    {
      id: 716268,
      name: "African Chicken Peanut Stew",
      img: "https://spoonacular.com/recipeImages/716268-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free", "dairy free"],
    },
    {
      id: 716381,
      name: "Nigerian Snail Stew",
      img: "https://spoonacular.com/recipeImages/716381-312x231.jpg",
      healthScore: 89,
      diets: ["gluten free", "dairy free", "paleolithic", "primal", "whole 30"],
    },
    {
      id: 782601,
      name: "Red Kidney Bean Jambalaya",
      img: "https://spoonacular.com/recipeImages/782601-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 794349,
      name: "Broccoli and Chickpea Rice Salad",
      img: "https://spoonacular.com/recipeImages/794349-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 715446,
      name: "Slow Cooker Beef Stew",
      img: "https://spoonacular.com/recipeImages/715446-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free", "dairy free"],
    },
    {
      id: 715415,
      name: "Red Lentil Soup with Chicken and Turnips",
      img: "https://spoonacular.com/recipeImages/715415-312x231.jpg",
      healthScore: 73,
      diets: ["gluten free", "dairy free"],
    },
    {
      id: 766453,
      name: "Hummus and Za'atar",
      img: "https://spoonacular.com/recipeImages/766453-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 716627,
      name: "Easy Homemade Rice and Beans",
      img: "https://spoonacular.com/recipeImages/716627-312x231.jpg",
      healthScore: 60,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 716408,
      name: "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
      img: "https://spoonacular.com/recipeImages/716408-312x231.jpg",
      healthScore: 65,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: 795751,
      name: "Chicken Fajita Stuffed Bell Pepper",
      img: "https://spoonacular.com/recipeImages/795751-312x231.jpg",
      healthScore: 75,
      diets: ["gluten free"],
    },
    {
      id: 640941,
      name: "Crunchy Brussels Sprouts Side Dish",
      img: "https://spoonacular.com/recipeImages/640941-312x231.jpg",
      healthScore: 100,
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
      ],
    },
    {
      id: 798400,
      name: "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
      img: "https://spoonacular.com/recipeImages/798400-312x231.jpg",
      healthScore: 87,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 756814,
      name: "Powerhouse Almond Matcha Superfood Smoothie",
      img: "https://spoonacular.com/recipeImages/756814-312x231.jpg",
      healthScore: 54,
      diets: ["gluten free", "dairy free", "whole 30"],
    },
    {
      id: 729366,
      name: "Plantain Salad",
      img: "https://spoonacular.com/recipeImages/729366-312x231.jpg",
      healthScore: 72,
      diets: ["gluten free", "primal", "pescatarian"],
    },
    {
      id: 715769,
      name: "Broccolini Quinoa Pilaf",
      img: "https://spoonacular.com/recipeImages/715769-312x231.jpg",
      healthScore: 74,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 782600,
      name: "Quinoa Salad with Vegetables and Cashews",
      img: "https://spoonacular.com/recipeImages/782600-312x231.jpg",
      healthScore: 66,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 642605,
      name: "Farro With Mushrooms and Asparagus",
      img: "https://spoonacular.com/recipeImages/642605-312x231.jpg",
      healthScore: 80,
      diets: ["dairy free", "lacto ovo vegetarian"],
    },
    {
      id: 715540,
      name: "Summer Berry Salad",
      img: "https://spoonacular.com/recipeImages/715540-312x231.jpg",
      healthScore: 95,
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "vegan",
      ],
    },
    {
      id: 636589,
      name: "Butternut Squash Frittata",
      img: "https://spoonacular.com/recipeImages/636589-312x231.jpg",
      healthScore: 100,
      diets: ["gluten free"],
    },
  ],
  // recipes: [{ diets: [] }],
  recipe: { diets: [], instructions: [] },
  diets: [],
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: [...state.recipes, ...action.payload] };
    case "GET_RECIPE":
      return { ...state, recipe: action.payload };
    case "SEARCH_RECIPES":
      return { ...state, recipes: [...state.recipes, ...action.payload] };
    case "SET_DIETS":
      return { ...state, diets: [...action.payload] };
    default:
      return state;
  }
}
