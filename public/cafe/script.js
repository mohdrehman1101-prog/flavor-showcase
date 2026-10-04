/* Existing Bake ñ Love dishes and matching photos in the supplied menu format. */
const items=[
  {
    "id": 0,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Triple Cheese Pizza",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Tripple Cheese Pizza.png"
  },
  {
    "id": 1,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Vegetable Verona Pizza",
    "price": "249",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Vegetable Verona Pizza.png"
  },
  {
    "id": 2,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Cheese Corn Pizza",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Cheese Corn Pizza.png"
  },
  {
    "id": 3,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Tandoori Paneer Pizza",
    "price": "239",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "MUST TRY",
    "img": "/cafe/assets/Tandoori Paneer Pizza.png"
  },
  {
    "id": 4,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Peri Peri Paneer Pizza",
    "price": "249",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Peri Peri Paneer Pizza.png"
  },
  {
    "id": 5,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Chicken Tikka Pizza",
    "price": "289",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Chicken Tikka Pizza.png"
  },
  {
    "id": 6,
    "cat": "Food",
    "sub": "PIZZERIA MODE",
    "name": "Chicken Keema Pizza",
    "price": "299",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "MUST TRY",
    "img": "/cafe/assets/Chicken Keema Pizza.png"
  },
  {
    "id": 7,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Crispy Corn",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Crispy Corn.png"
  },
  {
    "id": 8,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Honey Chilli Potato",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Honey Chilli Potato.png"
  },
  {
    "id": 9,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Veg Noodles",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Veg Noodles.png"
  },
  {
    "id": 10,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Hakka Noodles",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Hakka Noodles.png"
  },
  {
    "id": 11,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Garlic Noodles",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Garlic Noodles.png"
  },
  {
    "id": 12,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Fried Rice",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Fried Rice.png"
  },
  {
    "id": 13,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Chilli Paneer",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Chilli Paneer.png"
  },
  {
    "id": 14,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Chilli Chicken",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Chilli Chicken.png"
  },
  {
    "id": 15,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Maggi Ramen Bowl",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "CHEF CHOICE",
    "img": "/cafe/assets/Maggi Ramen Bowl.png"
  },
  {
    "id": 16,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Asian Bowl",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Asian Bowl.png"
  },
  {
    "id": 17,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Burrito Bliss Bowl",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Burrito Bliss Bowl.png"
  },
  {
    "id": 18,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Lemon Pepper Chicken",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": "/cafe/assets/Lemon Pepper Chicken.png"
  },
  {
    "id": 19,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Dragon Paneer",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "CHEF CHOICE",
    "img": "/cafe/assets/Dragon Paneer.png"
  },
  {
    "id": 20,
    "cat": "Food",
    "sub": "CHINESE",
    "name": "Dragon Chicken",
    "price": "269",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "CHEF CHOICE",
    "img": "/cafe/assets/Dragon Chicken.png"
  },
  {
    "id": 21,
    "cat": "Food",
    "sub": "BRUSCHETTA",
    "name": "Tomato Garlic Basil Bruschetta",
    "price": "119",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 22,
    "cat": "Food",
    "sub": "BRUSCHETTA",
    "name": "Mince Chicken Bruschetta",
    "price": "129",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 23,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Veggie Sandwich (Cold Serve)",
    "price": "149",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 24,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Cheese & Corn Sandwich",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 25,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Sunrise Egg Sandwich",
    "price": "169",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 26,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Spinach Corn Sandwich",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 27,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Creamy Mushroom Sandwich",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 28,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Smoky Paneer Sandwich",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 29,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Chicken Tikka Sandwich",
    "price": "229",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 30,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Crispy Chicken Sandwich",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 31,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Peri Peri Chicken Sandwich",
    "price": "219",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 32,
    "cat": "Food",
    "sub": "SANDWICH",
    "name": "Chicken Keema Sandwich",
    "price": "229",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 33,
    "cat": "Food",
    "sub": "BURGER",
    "name": "Classic Aloo Tikki Burger",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 34,
    "cat": "Food",
    "sub": "BURGER",
    "name": "American Burger",
    "price": "139",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 35,
    "cat": "Food",
    "sub": "BURGER",
    "name": "Mushroom Sloppy Joy Burger",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 36,
    "cat": "Food",
    "sub": "BURGER",
    "name": "Peri Peri Paneer Burger",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 37,
    "cat": "Food",
    "sub": "BURGER",
    "name": "Crispy Chicken Burger",
    "price": "199",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 38,
    "cat": "Food",
    "sub": "BURGER",
    "name": "Smash Chicken Burger",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 39,
    "cat": "Coffee & Drinks",
    "sub": "ICED BLACK COFFEE",
    "name": "Iced Black Coffee",
    "price": "129",
    "desc": "Pure black coffee served chilled",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 40,
    "cat": "Coffee & Drinks",
    "sub": "ICED BLACK COFFEE",
    "name": "Citrus Spark Americano",
    "price": "149",
    "desc": "Refreshing iced Americano with citrus twist",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 41,
    "cat": "Coffee & Drinks",
    "sub": "ICED BLACK COFFEE",
    "name": "Berry Blast Americano",
    "price": "149",
    "desc": "Fruity iced Americano with berry flavor",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 42,
    "cat": "Coffee & Drinks",
    "sub": "ICED BLACK COFFEE",
    "name": "Minty Fresh Brew",
    "price": "149",
    "desc": "Cool coffee infused with refreshing mint",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 43,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Cold Brew",
    "price": "159",
    "desc": "Slow-steeped coffee with smooth flavor",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 44,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Mocha Chilled Brew",
    "price": "159",
    "desc": "Chilled espresso with chocolate and milk",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 45,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Citrus Cold Brew",
    "price": "159",
    "desc": "Cold brew infused with fresh citrus notes",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 46,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Cranberry Cold Brew",
    "price": "169",
    "desc": "Cold brew with a sweet-tart cranberry twist",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 47,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Citrus Mocha",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 48,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Pomegranate Cold Brew",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 49,
    "cat": "Coffee & Drinks",
    "sub": "COLD BREW",
    "name": "Tonic Cold Brew",
    "price": "199",
    "desc": "Cold brew with tonic water for a fizzy kick",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 50,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Creamy Frappuccino",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 51,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Classic Vanilla Cold Coffee",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 52,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Hazelnut Frappe",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 53,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Caramel Frappe",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 54,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Dark Mocha",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 55,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Choco Chip Frappe",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 56,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Nutty Choco Frappe",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 57,
    "cat": "Coffee & Drinks",
    "sub": "COLD COFFEE",
    "name": "Almond Frappe",
    "price": "219",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 58,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Virgin Mojito",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 59,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Green Apple",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 60,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Watermelon Hydration",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 61,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Strawberry Mojito",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 62,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Ginger Ale",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 63,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Tonic Water",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 64,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Fresh Lime Soda",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 65,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Passion Fruit",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 66,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Orange & Cranberry",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 67,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Pomegranate Fizz",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 68,
    "cat": "Coffee & Drinks",
    "sub": "COOLERS",
    "name": "Redbull Mojito",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 69,
    "cat": "Food",
    "sub": "EGGS",
    "name": "Morning Sunshine Egg White Bowl",
    "price": "119",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 70,
    "cat": "Food",
    "sub": "EGGS",
    "name": "The Bhurji Bowl",
    "price": "119",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 71,
    "cat": "Food",
    "sub": "EGGS",
    "name": "Masala Egg Fold",
    "price": "119",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 72,
    "cat": "Food",
    "sub": "EGGS",
    "name": "Royal Egg Affair",
    "price": "119",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 73,
    "cat": "Food",
    "sub": "EGGS",
    "name": "Anda Dabang with Pav",
    "price": "129",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 74,
    "cat": "Food",
    "sub": "EGGS",
    "name": "Chicken Keema Omelette",
    "price": "149",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 75,
    "cat": "Food",
    "sub": "BITES / SMALL PLATES",
    "name": "Farmhouse Potato Bites",
    "price": "109",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 76,
    "cat": "Food",
    "sub": "BITES / SMALL PLATES",
    "name": "Peri-Peri Potato Bites",
    "price": "119",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 77,
    "cat": "Food",
    "sub": "BITES / SMALL PLATES",
    "name": "Cheesy Potato Bites",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 78,
    "cat": "Food",
    "sub": "BITES / SMALL PLATES",
    "name": "Chicken Loaded Potato Bites",
    "price": "149",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 79,
    "cat": "Food",
    "sub": "BITES / SMALL PLATES",
    "name": "Chicken Pop Corn",
    "price": "149",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 80,
    "cat": "Food",
    "sub": "PLATTER",
    "name": "Hummus with Pita Bread",
    "price": "189/219",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 81,
    "cat": "Food",
    "sub": "PLATTER",
    "name": "Grilled Paneer",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 82,
    "cat": "Food",
    "sub": "PLATTER",
    "name": "Grilled Fish",
    "price": "239",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 83,
    "cat": "Food",
    "sub": "PLATTER",
    "name": "Grilled Chicken",
    "price": "239",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 84,
    "cat": "Food",
    "sub": "PLATTER",
    "name": "Chicken Wings (5pc)",
    "price": "259",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "MUST TRY",
    "img": ""
  },
  {
    "id": 85,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Creamy Cookie Shake",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 86,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Oreo Shakes",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 87,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Silky Strawberry Shake",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 88,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Kit-Kat Shake",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 89,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Dark Mocha Shake",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 90,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Blue Berry Shake",
    "price": "209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 91,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Nutella Shake",
    "price": "219",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 92,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Biscoff Shake",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 93,
    "cat": "Coffee & Drinks",
    "sub": "SHAKE LABORATORY",
    "name": "Belgium Chocolate Shake",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 94,
    "cat": "Coffee & Drinks",
    "sub": "SMOOTHIES",
    "name": "Mint Blueberry Smoothie",
    "price": "249",
    "desc": "Refreshing blueberry smoothie with mint twist",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 95,
    "cat": "Coffee & Drinks",
    "sub": "SMOOTHIES",
    "name": "Nature Blend Smoothie",
    "price": "249",
    "desc": "Mixed fruit smoothie packed with natural goodness",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 96,
    "cat": "Coffee & Drinks",
    "sub": "SMOOTHIES",
    "name": "Peanut Butter Dry Fruits Smoothie",
    "price": "249",
    "desc": "Nutty smoothie with peanut butter and dry fruits",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 97,
    "cat": "Coffee & Drinks",
    "sub": "SMOOTHIES",
    "name": "Nutty Protein Smoothie",
    "price": "249",
    "desc": "Protein-rich smoothie with nuts and energy boost",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 98,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "One serve of Waffle",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 99,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Two serve of Waffle",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 100,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Oreo",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 101,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Kit Kat Crunch",
    "price": "219",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 102,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Nutella Loaded",
    "price": "219",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 103,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Biscoff",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 104,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Death by Chocolate",
    "price": "229",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 105,
    "cat": "Food",
    "sub": "WAFFLE",
    "name": "Double Delight",
    "price": "249",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 106,
    "cat": "Food",
    "sub": "CHEESE CAKE — BNL SPECIAL",
    "name": "Blueberry Cheese Cake",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 107,
    "cat": "Food",
    "sub": "CHEESE CAKE — BNL SPECIAL",
    "name": "Biscoff Cheese Cake",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 108,
    "cat": "Food",
    "sub": "CHEESE CAKE — BNL SPECIAL",
    "name": "Nutella Cheese Cake",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 109,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Strawberry Swiss Roll",
    "price": "89",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 110,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Pineapple Pastry",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 111,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Choco Chip Pastry",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 112,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Choco Mini Ball Pastry",
    "price": "109",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 113,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Pista Kaju Pastry",
    "price": "109",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 114,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Doughnut",
    "price": "79",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 115,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Chocolava",
    "price": "79",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 116,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Walnut Brownie",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 117,
    "cat": "Food",
    "sub": "BAKERY & DESSERT",
    "name": "Sizzling Brownie with Icecream",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 118,
    "cat": "Food",
    "sub": "MOMO'S",
    "name": "Veggie Momo",
    "price": "129",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 119,
    "cat": "Food",
    "sub": "MOMO'S",
    "name": "Kurkure Momo",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 120,
    "cat": "Food",
    "sub": "MOMO'S",
    "name": "Butter Garlic Momo",
    "price": "199",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "MUST TRY",
    "img": ""
  },
  {
    "id": 121,
    "cat": "Food",
    "sub": "MOMO'S",
    "name": "Cheese & Corn Momo",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 122,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Aloo Wrap Express",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 123,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Mix Veg",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 124,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Paneer Bhurji",
    "price": "189",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 125,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Masala Keema",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 126,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Shawarma Chicken",
    "price": "209",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 127,
    "cat": "Food",
    "sub": "WRAPS",
    "name": "Grilled Fajita Wrap",
    "price": "179/209",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 128,
    "cat": "Food",
    "sub": "PASTA",
    "name": "Arrabiata Pasta",
    "price": "269",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 129,
    "cat": "Food",
    "sub": "PASTA",
    "name": "Alfredo Pasta",
    "price": "269",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 130,
    "cat": "Food",
    "sub": "PASTA",
    "name": "Aglio-e-Olio Pasta",
    "price": "269",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 131,
    "cat": "Food",
    "sub": "PASTA",
    "name": "Pink Sauce Pasta",
    "price": "269",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 132,
    "cat": "Food",
    "sub": "PASTA",
    "name": "Mac & Cheese Pasta",
    "price": "299",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "MUST TRY",
    "img": ""
  },
  {
    "id": 133,
    "cat": "Food",
    "sub": "SOUPS",
    "name": "Mushroom Soup",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 134,
    "cat": "Food",
    "sub": "SOUPS",
    "name": "Tomato Soup",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 135,
    "cat": "Food",
    "sub": "SOUPS",
    "name": "Hot & Sour Soup",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 136,
    "cat": "Food",
    "sub": "NACHOS",
    "name": "Crunchy Nachos Bites",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 137,
    "cat": "Food",
    "sub": "NACHOS",
    "name": "Melty Cheese Nachos",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 138,
    "cat": "Food",
    "sub": "NACHOS",
    "name": "Nachos Overload",
    "price": "179",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 139,
    "cat": "Food",
    "sub": "FRIES",
    "name": "Classic Fries",
    "price": "119",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 140,
    "cat": "Food",
    "sub": "FRIES",
    "name": "Peri-Peri Fries",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 141,
    "cat": "Food",
    "sub": "FRIES",
    "name": "Cheesy Fries",
    "price": "139",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 142,
    "cat": "Food",
    "sub": "FRIES",
    "name": "Chicken Cheesy Fries",
    "price": "159",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 143,
    "cat": "Food",
    "sub": "BREAD & MORE",
    "name": "Korean Bun",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 144,
    "cat": "Food",
    "sub": "BREAD & MORE",
    "name": "Garlic Bread",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 145,
    "cat": "Food",
    "sub": "BREAD & MORE",
    "name": "Cheesy Garlic Bread",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 146,
    "cat": "Food",
    "sub": "BREAD & MORE",
    "name": "Chilly Garlic Bread",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 147,
    "cat": "Food",
    "sub": "BREAD & MORE",
    "name": "Cheese Corn Garlic Bread",
    "price": "139",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 148,
    "cat": "Coffee & Drinks",
    "sub": "HOT COFFEE (BLACK)",
    "name": "Espresso (Coffee shot)",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 149,
    "cat": "Coffee & Drinks",
    "sub": "HOT COFFEE (BLACK)",
    "name": "Macchiato (Coffee shot with milk or foam)",
    "price": "99",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 150,
    "cat": "Coffee & Drinks",
    "sub": "HOT COFFEE (BLACK)",
    "name": "Americano (Black coffee)",
    "price": "109",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 151,
    "cat": "Coffee & Drinks",
    "sub": "HOT COFFEE (BLACK)",
    "name": "Affagatto (No milk)",
    "price": "139",
    "desc": "",
    "veg": 0,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 152,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Cappuccino",
    "price": "129",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 153,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Cafe Latte",
    "price": "139",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 154,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Cafe Mocha",
    "price": "149",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 155,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Caramel Macchiato",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 156,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Spanish Latte",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 157,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Hazelnut Latte",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 158,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Caramel Latte",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 159,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Irish Latte",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 160,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Vanilla Latte",
    "price": "169",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 161,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Kanpur Special Latte",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  },
  {
    "id": 162,
    "cat": "Coffee & Drinks",
    "sub": "OT COFFEE (WITH MILK)",
    "name": "Hot Chocolate",
    "price": "159",
    "desc": "",
    "veg": 1,
    "emoji": "",
    "best": "",
    "img": ""
  }
];
const N={"PIZZERIA MODE": "Vegetable @ ₹30 · Cheese @ ₹50 · Extra Dip @ ₹29", "CHINESE": "Chicken @ ₹80", "SANDWICH": "Extra Dip @ ₹29", "PLATTER": "Rice @ ₹49 · Choice of Sauce: Barbeque, Chilly Garlic, Peri Peri, Butter Garlic", "PASTA": "Chicken @ ₹79 · Vegetable @ ₹49 · Choice of Pasta: Penne, Spaghetti", "FRIES": "Extra Dip @ ₹29", "OT COFFEE (WITH MILK)": "Extra Shot @ ₹49"};
const FAV=["Triple Cheese Pizza", "Vegetable Verona Pizza", "Cheese Corn Pizza", "Tandoori Paneer Pizza", "Peri Peri Paneer Pizza"];
const BG=['#e8d5b5','#d9c3a0','#cfe0c0','#f0d5c0','#d8cfe0','#c9dbe0'];
const $=s=>document.querySelector(s);
const media=it=>it.img?`background-image:url(${encodeURI(it.img)})`:it.emoji?`background:${BG[it.id%BG.length]}`:'';
const inner=it=>it.img?'':it.emoji;

/* ---------- FILTERS + MENU ---------- */
let F={main:'All',sub:null,q:''};
const mains=['All','Coffee & Drinks','Food','Veg Only'];
$('#main').innerHTML=mains.map(m=>`<div class="chip${m==='All'?' on':''}" data-m="${m}">${m}</div>`).join('');
let AS='';
function renderSub(){const subs=[...new Set(items.filter(i=>F.main==='All'||F.main==='Veg Only'||i.cat===F.main).filter(i=>F.main!=='Veg Only'||i.veg).map(i=>i.sub))];
  $('#sub').innerHTML=subs.map(s=>`<div class="chip${AS===s?' on':''}" data-s="${s}">${s}</div>`).join('')}
function renderMenu(){
  let list=items.filter(i=>(F.main==='All'||F.main==='Veg Only'||i.cat===F.main)&&(F.main!=='Veg Only'||i.veg)&&(!F.q||(i.name+i.desc).toLowerCase().includes(F.q)));
  let h='',lc='',ls='';
  list.forEach(i=>{
    if(i.cat!==lc){h+=`${ls?'</div>':''}<div class="cat">${i.cat.toUpperCase()}</div>`;lc=i.cat;ls=''}
    if(i.sub!==ls){h+=`${ls?'</div>':''}<h3 class="sub" id="s-${i.sub.replace(/\W/g,'')}">${i.sub}</h3>${N[i.sub]?`<div class="note">${N[i.sub]}</div>`:''}<div class="grid">`;ls=i.sub}
    h+=`<div class="it" data-id="${i.id}"><span class="vb${i.veg?'':' nv'}"><i></i></span>
      <div class="im${i.img||i.emoji?'':' ph'}" style="${media(i)}">${i.img?'':i.emoji||'Photo coming soon'}</div>
      <div class="b"><div class="n"><span>${i.name}</span><span class="pr">₹${i.price}</span></div>${i.best?`<span class="bs">${i.best}</span>`:''}<p>${i.desc}</p></div></div>`;
  });
  $('#menu').innerHTML=h+(ls?'</div>':'')||'<p class="hint">Kuch nahi mila 🙈</p>';
}
$('#main').onclick=e=>{const m=e.target.dataset.m;if(!m)return;F.main=m;F.sub=null;
  document.querySelectorAll('#main .chip').forEach(c=>c.classList.toggle('on',c.dataset.m===m));
  renderSub();renderMenu();};
$('#sub').onclick=e=>{const s=e.target.dataset.s;if(!s)return;const t=document.getElementById('s-'+s.replace(/\W/g,''));
  if(t)scrollTo({top:t.getBoundingClientRect().top+scrollY-$('.head').offsetHeight-8,behavior:'smooth'})};
$('#sb').onclick=()=>{const s=$('#search');s.style.display=s.style.display==='block'?'none':'block';s.focus()};
$('#search').oninput=e=>{F.q=e.target.value.toLowerCase();renderMenu()};
$('#fb').onclick=()=>{const m=$('#main'),o=m.style.display==='flex';m.style.display=o?'none':'flex';$('#fb').classList.toggle('on',!o)};
$('#menu').onclick=e=>{const c=e.target.closest('.it');if(c)detail(items[c.dataset.id])};

/* ---------- MODALS ---------- */
const mo=$('#mo'),md=$('#md');
const close=()=>mo.classList.remove('on');
mo.onclick=e=>{if(e.target===mo||e.target.closest('.x')||e.target.id==='cl')close()};
function detail(it){
  md.innerHTML=`<button class="x">✕</button><div class="dt"><div class="im" style="${media(it)}">${inner(it)}</div><div class="bd">
  <div class="tg"><span>● ${it.veg?'Veg':'Non-veg'}</span><span>${it.sub}</span></div>
  <h2>${it.name}<span>₹${it.price}</span></h2><p>${it.desc}</p>
  <div class="st"><div><b>1</b><small>SERVES</small></div><div><b>3 MIN</b><small>PREP TIME</small></div><div><b>15 KCAL</b><small>CALORIES</small></div></div>
  <em>Calories are estimates and may vary — ask staff about allergens or exact ingredients.</em></div></div>`;
  mo.classList.add('on');
}
function surprise(){
  const it=items[Math.floor(Math.random()*items.length)];
  md.innerHTML=`<button class="x">✕</button><div class="pk"><small>✨ YOUR BAKE ñ LOVE PICK</small>
  <div class="c" style="${media(it)}">${inner(it)}</div><h2>${it.name}<span>₹${it.price}</span></h2><p>${it.desc}</p>
  <button class="btn" id="again">🎲 Pick Again</button><button class="lnk" id="cl">Perfect, Close</button></div>`;
  mo.classList.add('on');$('#again').onclick=surprise;
}
$('#surp').onclick=surprise;

/* ---------- SWIPE DECK ---------- */
const fav=FAV.map(n=>items.find(i=>i.name===n));
let idx=0;
function deck(){
  const d=$('#deck');d.innerHTML='';
  [idx+1,idx].forEach((k,z)=>{
    const it=fav[k%fav.length];const c=document.createElement('div');c.className='sc';
    c.innerHTML=`<div class="im" style="${media(it)}">${inner(it)}</div><div class="tx"><div class="r"><span>${it.name}</span><span>₹${it.price}</span></div><p>${it.desc}</p></div>${z?'<div class="next">NEXT</div>':''}`;
    if(!z){c.style.transform='scale(.95)';c.style.opacity='.9'}else drag(c,it);
    d.appendChild(c);
  });
  $('#dots').innerHTML=fav.map((_,i)=>`<i class="${i===idx%fav.length?'on':''}"></i>`).join('');
}
function drag(c,it){
  let sx=0,dx=0,on=0,moved=0;const nx=c.querySelector('.next');
  c.onpointerdown=e=>{on=1;moved=0;sx=e.clientX;c.style.transition='none';c.setPointerCapture(e.pointerId)};
  c.onpointermove=e=>{if(!on)return;dx=e.clientX-sx;if(Math.abs(dx)>5)moved=1;
    c.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`;nx.style.opacity=Math.min(Math.abs(dx)/100,1)};
  c.onpointerup=()=>{on=0;c.style.transition='';
    if(Math.abs(dx)>90)fly(dx>0?1:-1);else{c.style.transform='';nx.style.opacity=0;if(!moved)detail(it)}dx=0};
  c.onpointercancel=()=>{on=0;dx=0;c.style.transition='';c.style.transform='';nx.style.opacity=0};
  c.fly=fly;
  function fly(s){c.style.transform=`translateX(${s*500}px) rotate(${s*30}deg)`;c.style.opacity=0;setTimeout(()=>{idx++;deck()},280)}
}
const act=s=>{const c=$('#deck .sc:last-child');c&&c.fly(s)};
$('#no').onclick=()=>act(-1);$('#yes').onclick=()=>act(1);
deck();

/* ---------- MATCH THE MENU ---------- */
let mv,pairs,open,lock;
function memInit(){
  const em=['☕','🍕','🍝','🍰','🧊','🍟'];const a=[...em,...em].sort(()=>Math.random()-.5);
  mv=0;pairs=0;open=[];lock=0;$('#mv').textContent=0;$('#pr').textContent=0;
  $('#mg').innerHTML=a.map(e=>`<div class="mc" data-e="${e}"><div><span class="bk">क</span><span class="fr">${e}</span></div></div>`).join('');
}
$('#mg').onclick=e=>{const c=e.target.closest('.mc');
  if(!c||lock||c.classList.contains('f'))return;c.classList.add('f');open.push(c);
  if(open.length===2){mv++;$('#mv').textContent=mv;const[a,b]=open;
    if(a.dataset.e===b.dataset.e){a.classList.add('m');b.classList.add('m');pairs++;$('#pr').textContent=pairs;open=[];
      if(pairs===6)setTimeout(()=>alert('Sab pairs mil gaye! 🎉 Moves: '+mv),400)}
    else{lock=1;setTimeout(()=>{a.classList.remove('f');b.classList.remove('f');open=[];lock=0},800)}}};
$('#mr').onclick=memInit;memInit();

/* ---------- SLIDING PUZZLE ---------- */
const PB='linear-gradient(135deg,#c9a46a,#6b4a2c 40%,#1d5a63 70%,#f1e1c4)';
let T,pm;
function pzInit(){
  T=[0,1,2,3,4,5,6,7,8];pm=0;
  for(let i=0;i<150;i++){const e=T.indexOf(8),n=nb(e),r=n[Math.floor(Math.random()*n.length)];[T[e],T[r]]=[T[r],T[e]]}
  $('#pm').textContent=0;pzDraw();
}
function nb(i){const r=[],x=i%3,y=Math.floor(i/3);if(x>0)r.push(i-1);if(x<2)r.push(i+1);if(y>0)r.push(i-3);if(y<2)r.push(i+3);return r}
function pzDraw(){
  $('#pz').innerHTML=T.map((t,i)=>t===8?`<div class="pt e" data-i="${i}"></div>`:
   `<div class="pt" data-i="${i}" style="background-image:${PB};background-position:${(t%3)*50}% ${Math.floor(t/3)*50}%">${['☕','🍰','🥐','🍕','🧁','🍝','🍟','🥤'][t]}</div>`).join('');
}
$('#pz').onclick=e=>{const t=e.target.closest('.pt');if(!t)return;const i=+t.dataset.i,em=T.indexOf(8);
  if(nb(em).includes(i)){[T[i],T[em]]=[T[em],T[i]];pm++;$('#pm').textContent=pm;pzDraw();
    if(T.every((v,k)=>v===k))setTimeout(()=>alert('Puzzle complete! 🎉'),300)}};
$('#ps').onclick=pzInit;pzInit();

/* ---------- SCROLL TOP ---------- */
addEventListener('scroll',()=>{$('#top').style.display=scrollY>400?'block':'none';
  const hh=$('.head').offsetHeight+30;let cur='';document.querySelectorAll('h3.sub').forEach(h=>{if(h.getBoundingClientRect().top<hh)cur=h.textContent});
  if(cur&&cur!==AS){AS=cur;renderSub();const c=document.querySelector('#sub .chip.on');c&&c.scrollIntoView({inline:'center',block:'nearest'})}});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
renderSub();renderMenu();

/* ---------- FULL SITE PAGE ---------- */
const site=$('#site');
$('#vs').onclick=()=>{site.classList.add('on');site.scrollTop=0};
document.querySelectorAll('.tomenu').forEach(b=>b.onclick=()=>{site.classList.remove('on');scrollTo({top:0})});
$('#visit').onclick=()=>$('#about').scrollIntoView({behavior:'smooth'});
$('#tx').onclick=e=>{e.stopPropagation();$('#toast').style.display='none'};
$('#toast').onclick=()=>{site.classList.remove('on');scrollTo({top:0})};
