const initialState = {
  recipes: [
    {
      id: "bce534f3-f016-4536-9f9c-b29662062265",
      name: "pepper rice",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: "523116fa-42f9-47c8-a8e5-032a91311db9",
      name: "pepper rice",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: "b4ebdcb8-1ae5-43e7-bca8-7a5e6c15066b",
      name: "pepper rice",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: "f141de44-1221-4f20-be68-4fefaa1525b7",
      name: "pepper rice",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: "136dd3a5-bf7b-41a5-b30e-ae7c39c74c3d",
      name: "pepper rice",
      img: "https://i.redd.it/t9y87m5f0pz41.jpg",
      healthScore: 5,
      diets: ["gluten free", "pescatarian"],
    },
    {
      id: 658277,
      name: "Rice Pilaf",
      img: "https://spoonacular.com/recipeImages/658277-312x231.jpg",
      healthScore: 3,
      diets: [],
    },
    {
      id: 658276,
      name: "Rice Pudding",
      img: "https://spoonacular.com/recipeImages/658276-312x231.jpg",
      healthScore: 6,
      diets: ["gluten free", "lacto ovo vegetarian"],
    },
    {
      id: 658290,
      name: "Rice with Fried Egg and Sausage",
      img: "https://spoonacular.com/recipeImages/658290-312x231.jpg",
      healthScore: 11,
      diets: ["gluten free"],
    },
    {
      id: 658295,
      name: "Rice-less Spicy Tuna Hand Rolls",
      img: "https://spoonacular.com/recipeImages/658295-312x231.jpg",
      healthScore: 29,
      diets: ["gluten free", "dairy free", "pescatarian"],
    },
    {
      id: 716364,
      name: "Rice and Peas with Coconut Curry Mackerel",
      img: "https://spoonacular.com/recipeImages/716364-312x231.jpg",
      healthScore: 52,
      diets: ["gluten free", "dairy free", "pescatarian"],
    },
    {
      id: 658269,
      name: "Rice noodle salad with sesame oil dressing",
      img: "https://spoonacular.com/recipeImages/658269-312x231.jpg",
      healthScore: 16,
      diets: ["dairy free", "pescatarian"],
    },
    {
      id: 658259,
      name: "Rice Krispie Treats with Maple Syrup and Brown Sugar",
      img: "https://spoonacular.com/recipeImages/658259-312x231.jpg",
      healthScore: 0,
      diets: [],
    },
    {
      id: 658287,
      name: "Rice Stuffed Bell Peppers (Zeytinyagli Biber Dolmasi)",
      img: "https://spoonacular.com/recipeImages/658287-312x231.jpg",
      healthScore: 30,
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    },
    {
      id: 658270,
      name: "Rice Noodles With Wonton/chinese Ravioli In Mushroom Sauce",
      img: "https://spoonacular.com/recipeImages/658270-312x231.jpg",
      healthScore: 14,
      diets: ["dairy free"],
    },
    {
      id: 665344,
      name: "Wild Rice With Bacon, Mushrooms & Green Onions",
      img: "https://spoonacular.com/recipeImages/665344-312x231.jpg",
      healthScore: 0,
      diets: ["gluten free", "ketogenic"],
    },
  ],
  diets: [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "paleolithic",
    "primal",
    "whole 30",
    "pescatarian",
    "ketogenic",
    "fodmap friendly",
  ],
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_RECIPES":
      return { ...state, recipes: [...action.payload] };
    case "SET_DIETS":
      return { ...state, diets: [...action.payload] };
    default:
      return state;
  }
}
