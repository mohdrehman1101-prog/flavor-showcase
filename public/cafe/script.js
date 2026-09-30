/* =====================================================
   OPENING VIDEO
===================================================== */

const intro = document.getElementById("menuIntro");
const introVideo = document.getElementById("menuIntroVideo");
const introLoader = document.getElementById("introLoader");
const introVideoUrl = introVideo.canPlayType("video/webm; codecs=vp9")
  ? "/cafe/assets/bake-n-love-intro.webm"
  : "/cafe/assets/bake-n-love-intro.mp4";
let introObjectUrl = "";
let introFinished = false;

function finishIntro() {
  if (introFinished) return;
  introFinished = true;
  intro.classList.add("closing");

  window.setTimeout(() => {
    document.body.classList.remove("intro-active");
    document.querySelectorAll("img[data-src]").forEach(image => {
      image.src = image.dataset.src;
      image.removeAttribute("data-src");
    });
    intro.remove();
    if (introObjectUrl) URL.revokeObjectURL(introObjectUrl);
  }, 450);
}

async function playIntro() {
  const downloadTimeout = window.setTimeout(finishIntro, 60000);

  try {
    const response = await fetch(introVideoUrl, { cache: "force-cache" });
    if (!response.ok) throw new Error("Opening video unavailable");

    const videoBlob = await response.blob();
    if (introFinished) return;

    await new Promise((resolve, reject) => {
      introVideo.addEventListener("canplay", resolve, { once: true });
      introVideo.addEventListener("error", reject, { once: true });
      introObjectUrl = URL.createObjectURL(videoBlob);
      introVideo.src = introObjectUrl;
      introVideo.load();
      if (introVideo.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) resolve();
    });

    if (introFinished) return;
    window.clearTimeout(downloadTimeout);
    introVideo.classList.add("ready");
    introLoader.classList.add("hidden");
    introVideo.addEventListener("ended", finishIntro, { once: true });
    introVideo.addEventListener("error", finishIntro, { once: true });

    const playbackTimeout = window.setTimeout(finishIntro, 15000);
    introVideo.addEventListener("ended", () => window.clearTimeout(playbackTimeout), { once: true });
    await introVideo.play();
  } catch {
    window.clearTimeout(downloadTimeout);
    finishIntro();
  }
}

playIntro();

/* =====================================================
   FOOD DATA
===================================================== */

const foods = [
  {
    "name": "Triple Cheese Pizza",
    "price": "199",
    "image": "/cafe/assets/Tripple Cheese Pizza.png",
    "description": "",
    "badge": "",
    "category": "pizza",
    "type": "veg",
    "available": true
  },
  {
    "name": "Vegetable Verona Pizza",
    "price": "249",
    "image": "/cafe/assets/Vegetable Verona Pizza.png",
    "description": "",
    "badge": "",
    "category": "pizza",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheese Corn Pizza",
    "price": "229",
    "image": "/cafe/assets/Cheese Corn Pizza.png",
    "description": "",
    "badge": "",
    "category": "pizza",
    "type": "veg",
    "available": true
  },
  {
    "name": "Tandoori Paneer Pizza",
    "price": "239",
    "image": "/cafe/assets/Tandoori Paneer Pizza.png",
    "description": "",
    "badge": "MUST TRY",
    "category": "pizza",
    "type": "veg",
    "available": true
  },
  {
    "name": "Peri Peri Paneer Pizza",
    "price": "249",
    "image": "/cafe/assets/Peri Peri Paneer Pizza.png",
    "description": "",
    "badge": "",
    "category": "pizza",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chicken Tikka Pizza",
    "price": "289",
    "image": "/cafe/assets/Chicken Tikka Pizza.png",
    "description": "",
    "badge": "",
    "category": "pizza",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Chicken Keema Pizza",
    "price": "299",
    "image": "/cafe/assets/Chicken Keema Pizza.png",
    "description": "",
    "badge": "MUST TRY",
    "category": "pizza",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Crispy Corn",
    "price": "149",
    "image": "/cafe/assets/Crispy Corn.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Honey Chilli Potato",
    "price": "159",
    "image": "/cafe/assets/Honey Chilli Potato.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Veg Noodles",
    "price": "169",
    "image": "/cafe/assets/Veg Noodles.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Hakka Noodles",
    "price": "179",
    "image": "/cafe/assets/Hakka Noodles.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Garlic Noodles",
    "price": "179",
    "image": "/cafe/assets/Garlic Noodles.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Fried Rice",
    "price": "169",
    "image": "/cafe/assets/Fried Rice.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chilli Paneer",
    "price": "199",
    "image": "/cafe/assets/Chilli Paneer.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chilli Chicken",
    "price": "209",
    "image": "/cafe/assets/Chilli Chicken.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Maggi Ramen Bowl",
    "price": "169",
    "image": "/cafe/assets/Maggi Ramen Bowl.png",
    "description": "",
    "badge": "CHEF CHOICE",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Asian Bowl",
    "price": "209",
    "image": "/cafe/assets/Asian Bowl.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Burrito Bliss Bowl",
    "price": "209",
    "image": "/cafe/assets/Burrito Bliss Bowl.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Lemon Pepper Chicken",
    "price": "209",
    "image": "/cafe/assets/Lemon Pepper Chicken.png",
    "description": "",
    "badge": "",
    "category": "chinese",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Dragon Paneer",
    "price": "209",
    "image": "/cafe/assets/Dragon Paneer.png",
    "description": "",
    "badge": "CHEF CHOICE",
    "category": "chinese",
    "type": "veg",
    "available": true
  },
  {
    "name": "Dragon Chicken",
    "price": "269",
    "image": "/cafe/assets/Dragon Chicken.png",
    "description": "",
    "badge": "CHEF CHOICE",
    "category": "chinese",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Tomato Garlic Basil Bruschetta",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bruschetta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mince Chicken Bruschetta",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bruschetta",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Veggie Sandwich (Cold Serve)",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Cheese & Corn Sandwich",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "veg",
    "available": true
  },
  {
    "name": "Sunrise Egg Sandwich",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Spinach Corn Sandwich",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "veg",
    "available": true
  },
  {
    "name": "Creamy Mushroom Sandwich",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "veg",
    "available": true
  },
  {
    "name": "Smoky Paneer Sandwich",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chicken Tikka Sandwich",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Crispy Chicken Sandwich",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Peri Peri Chicken Sandwich",
    "price": "219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Chicken Keema Sandwich",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "sandwich",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Classic Aloo Tikki Burger",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "veg",
    "available": true
  },
  {
    "name": "American Burger",
    "price": "139",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Mushroom Sloppy Joy Burger",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "veg",
    "available": true
  },
  {
    "name": "Peri Peri Paneer Burger",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "veg",
    "available": true
  },
  {
    "name": "Crispy Chicken Burger",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Smash Chicken Burger",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "burger",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Iced Black Coffee",
    "price": "129",
    "image": "",
    "description": "Pure black coffee served chilled",
    "badge": "",
    "category": "iced-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Citrus Spark Americano",
    "price": "149",
    "image": "",
    "description": "Refreshing iced Americano with citrus twist",
    "badge": "",
    "category": "iced-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Berry Blast Americano",
    "price": "149",
    "image": "",
    "description": "Fruity iced Americano with berry flavor",
    "badge": "",
    "category": "iced-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Minty Fresh Brew",
    "price": "149",
    "image": "",
    "description": "Cool coffee infused with refreshing mint",
    "badge": "",
    "category": "iced-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cold Brew",
    "price": "159",
    "image": "",
    "description": "Slow-steeped coffee with smooth flavor",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mocha Chilled Brew",
    "price": "159",
    "image": "",
    "description": "Chilled espresso with chocolate and milk",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Citrus Cold Brew",
    "price": "159",
    "image": "",
    "description": "Cold brew infused with fresh citrus notes",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cranberry Cold Brew",
    "price": "169",
    "image": "",
    "description": "Cold brew with a sweet-tart cranberry twist",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Citrus Mocha",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Pomegranate Cold Brew",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Tonic Cold Brew",
    "price": "199",
    "image": "",
    "description": "Cold brew with tonic water for a fizzy kick",
    "badge": "",
    "category": "cold-brew",
    "type": "veg",
    "available": true
  },
  {
    "name": "Creamy Frappuccino",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Classic Vanilla Cold Coffee",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Hazelnut Frappe",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Caramel Frappe",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Dark Mocha",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Choco Chip Frappe",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nutty Choco Frappe",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Almond Frappe",
    "price": "219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cold-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Virgin Mojito",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Green Apple",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Watermelon Hydration",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Strawberry Mojito",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Ginger Ale",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Tonic Water",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Fresh Lime Soda",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Passion Fruit",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Orange & Cranberry",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Pomegranate Fizz",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Redbull Mojito",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "coolers",
    "type": "veg",
    "available": true
  },
  {
    "name": "Morning Sunshine Egg White Bowl",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "The Bhurji Bowl",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "veg",
    "available": true
  },
  {
    "name": "Masala Egg Fold",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Royal Egg Affair",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Anda Dabang with Pav",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Chicken Keema Omelette",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "eggs",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Farmhouse Potato Bites",
    "price": "109",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bites",
    "type": "veg",
    "available": true
  },
  {
    "name": "Peri-Peri Potato Bites",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bites",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheesy Potato Bites",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bites",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chicken Loaded Potato Bites",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bites",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Chicken Pop Corn",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bites",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Hummus with Pita Bread",
    "price": "189/219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "platter",
    "type": "veg",
    "available": true
  },
  {
    "name": "Grilled Paneer",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "platter",
    "type": "veg",
    "available": true
  },
  {
    "name": "Grilled Fish",
    "price": "239",
    "image": "",
    "description": "",
    "badge": "",
    "category": "platter",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Grilled Chicken",
    "price": "239",
    "image": "",
    "description": "",
    "badge": "",
    "category": "platter",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Chicken Wings (5pc)",
    "price": "259",
    "image": "",
    "description": "",
    "badge": "MUST TRY",
    "category": "platter",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Creamy Cookie Shake",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Oreo Shakes",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Silky Strawberry Shake",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Kit-Kat Shake",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Dark Mocha Shake",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Blue Berry Shake",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nutella Shake",
    "price": "219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Biscoff Shake",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Belgium Chocolate Shake",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "shakes",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mint Blueberry Smoothie",
    "price": "249",
    "image": "",
    "description": "Refreshing blueberry smoothie with mint twist",
    "badge": "",
    "category": "smoothies",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nature Blend Smoothie",
    "price": "249",
    "image": "",
    "description": "Mixed fruit smoothie packed with natural goodness",
    "badge": "",
    "category": "smoothies",
    "type": "veg",
    "available": true
  },
  {
    "name": "Peanut Butter Dry Fruits Smoothie",
    "price": "249",
    "image": "",
    "description": "Nutty smoothie with peanut butter and dry fruits",
    "badge": "",
    "category": "smoothies",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nutty Protein Smoothie",
    "price": "249",
    "image": "",
    "description": "Protein-rich smoothie with nuts and energy boost",
    "badge": "",
    "category": "smoothies",
    "type": "veg",
    "available": true
  },
  {
    "name": "One serve of Waffle",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Two serve of Waffle",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Oreo",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Kit Kat Crunch",
    "price": "219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nutella Loaded",
    "price": "219",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Biscoff",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Death by Chocolate",
    "price": "229",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Double Delight",
    "price": "249",
    "image": "",
    "description": "",
    "badge": "",
    "category": "waffle",
    "type": "veg",
    "available": true
  },
  {
    "name": "Blueberry Cheese Cake",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cheesecake",
    "type": "veg",
    "available": true
  },
  {
    "name": "Biscoff Cheese Cake",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cheesecake",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nutella Cheese Cake",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "cheesecake",
    "type": "veg",
    "available": true
  },
  {
    "name": "Strawberry Swiss Roll",
    "price": "89",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Pineapple Pastry",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Choco Chip Pastry",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Choco Mini Ball Pastry",
    "price": "109",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Pista Kaju Pastry",
    "price": "109",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Doughnut",
    "price": "79",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chocolava",
    "price": "79",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Walnut Brownie",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Sizzling Brownie with Icecream",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "",
    "category": "dessert",
    "type": "veg",
    "available": true
  },
  {
    "name": "Veggie Momo",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "momos",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Kurkure Momo",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "momos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Butter Garlic Momo",
    "price": "199",
    "image": "",
    "description": "",
    "badge": "MUST TRY",
    "category": "momos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheese & Corn Momo",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "momos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Aloo Wrap Express",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mix Veg",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "veg",
    "available": true
  },
  {
    "name": "Paneer Bhurji",
    "price": "189",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "veg",
    "available": true
  },
  {
    "name": "Masala Keema",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Shawarma Chicken",
    "price": "209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Grilled Fajita Wrap",
    "price": "179/209",
    "image": "",
    "description": "",
    "badge": "",
    "category": "wraps",
    "type": "veg",
    "available": true
  },
  {
    "name": "Arrabiata Pasta",
    "price": "269",
    "image": "",
    "description": "",
    "badge": "",
    "category": "pasta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Alfredo Pasta",
    "price": "269",
    "image": "",
    "description": "",
    "badge": "",
    "category": "pasta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Aglio-e-Olio Pasta",
    "price": "269",
    "image": "",
    "description": "",
    "badge": "",
    "category": "pasta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Pink Sauce Pasta",
    "price": "269",
    "image": "",
    "description": "",
    "badge": "",
    "category": "pasta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mac & Cheese Pasta",
    "price": "299",
    "image": "",
    "description": "",
    "badge": "MUST TRY",
    "category": "pasta",
    "type": "veg",
    "available": true
  },
  {
    "name": "Mushroom Soup",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "soups",
    "type": "veg",
    "available": true
  },
  {
    "name": "Tomato Soup",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "soups",
    "type": "veg",
    "available": true
  },
  {
    "name": "Hot & Sour Soup",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "soups",
    "type": "veg",
    "available": true
  },
  {
    "name": "Crunchy Nachos Bites",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "nachos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Melty Cheese Nachos",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "nachos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Nachos Overload",
    "price": "179",
    "image": "",
    "description": "",
    "badge": "",
    "category": "nachos",
    "type": "veg",
    "available": true
  },
  {
    "name": "Classic Fries",
    "price": "119",
    "image": "",
    "description": "",
    "badge": "",
    "category": "fries",
    "type": "veg",
    "available": true
  },
  {
    "name": "Peri-Peri Fries",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "fries",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheesy Fries",
    "price": "139",
    "image": "",
    "description": "",
    "badge": "",
    "category": "fries",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chicken Cheesy Fries",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "fries",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Korean Bun",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bread",
    "type": "veg",
    "available": true
  },
  {
    "name": "Garlic Bread",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bread",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheesy Garlic Bread",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bread",
    "type": "veg",
    "available": true
  },
  {
    "name": "Chilly Garlic Bread",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bread",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cheese Corn Garlic Bread",
    "price": "139",
    "image": "",
    "description": "",
    "badge": "",
    "category": "bread",
    "type": "veg",
    "available": true
  },
  {
    "name": "Espresso (Coffee shot)",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Macchiato (Coffee shot with milk or foam)",
    "price": "99",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Americano (Black coffee)",
    "price": "109",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-black-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Affagatto (No milk)",
    "price": "139",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-black-coffee",
    "type": "nonveg",
    "available": true
  },
  {
    "name": "Cappuccino",
    "price": "129",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cafe Latte",
    "price": "139",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Cafe Mocha",
    "price": "149",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Caramel Macchiato",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Spanish Latte",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Hazelnut Latte",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Caramel Latte",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Irish Latte",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Vanilla Latte",
    "price": "169",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Kanpur Special Latte",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  },
  {
    "name": "Hot Chocolate",
    "price": "159",
    "image": "",
    "description": "",
    "badge": "",
    "category": "hot-milk-coffee",
    "type": "veg",
    "available": true
  }
];

const categoryNames = {
  "pizza": "PIZZERIA MODE",
  "chinese": "CHINESE",
  "bruschetta": "BRUSCHETTA",
  "sandwich": "SANDWICH",
  "burger": "BURGER",
  "iced-black-coffee": "ICED BLACK COFFEE",
  "cold-brew": "COLD BREW",
  "cold-coffee": "COLD COFFEE",
  "coolers": "COOLERS",
  "eggs": "EGGS",
  "bites": "BITES / SMALL PLATES",
  "platter": "PLATTER",
  "shakes": "SHAKE LABORATORY",
  "smoothies": "SMOOTHIES",
  "waffle": "WAFFLE",
  "cheesecake": "CHEESE CAKE — BNL SPECIAL",
  "dessert": "BAKERY & DESSERT",
  "momos": "MOMO'S",
  "wraps": "WRAPS",
  "pasta": "PASTA",
  "soups": "SOUPS",
  "nachos": "NACHOS",
  "fries": "FRIES",
  "bread": "BREAD & MORE",
  "hot-black-coffee": "HOT COFFEE (BLACK)",
  "hot-milk-coffee": "OT COFFEE (WITH MILK)"
};

const categoryExtras = {
  "pizza": [
    "Vegetable @ ₹30",
    "Cheese @ ₹50",
    "Extra Dip @ ₹29"
  ],
  "chinese": [
    "Chicken @ ₹80"
  ],
  "sandwich": [
    "Extra Dip @ ₹29"
  ],
  "platter": [
    "Rice @ ₹49",
    "Choice of Sauce: Barbeque, Chilly Garlic, Peri Peri, Butter Garlic"
  ],
  "pasta": [
    "Chicken @ ₹79",
    "Vegetable @ ₹49",
    "Choice of Pasta: Penne, Spaghetti"
  ],
  "fries": [
    "Extra Dip @ ₹29"
  ],
  "hot-milk-coffee": [
    "Extra Shot @ ₹49"
  ]
};

const drinkCategories = ["iced-black-coffee", "cold-brew", "cold-coffee", "coolers", "shakes", "smoothies", "hot-black-coffee", "hot-milk-coffee"];

const menuGroups = [
  { name: "FOOD", categories: ["pizza", "burger", "sandwich", "wraps", "pasta", "momos"] },
  { name: "STARTERS & SIDES", categories: ["chinese", "bruschetta", "bites", "platter", "soups", "nachos", "fries", "bread"] },
  { name: "COFFEE", categories: ["iced-black-coffee", "cold-brew", "cold-coffee", "hot-black-coffee", "hot-milk-coffee"] },
  { name: "COLD BEVERAGES", categories: ["coolers", "shakes", "smoothies"] },
  { name: "BREAKFAST", categories: ["eggs"] },
  { name: "DESSERTS & BAKERY", categories: ["waffle", "cheesecake", "dessert"] }
];

// Bread & More remains accessible under the closest existing group.
const menuGroupsElement = document.getElementById("menuGroups");
const menuSubcategoriesElement = document.getElementById("menuSubcategories");
let selectedGroup = null;
let selectedSubcategory = null;

function matchesType(food, filter) {
  return filter === "all" || food.type === filter ||
    (filter === "drinks" && drinkCategories.includes(food.category));
}

function renderMenuGroups() {
  menuGroupsElement.innerHTML = "";
  menuSubcategoriesElement.innerHTML = "";
  menuGroupsElement.hidden = selectedGroup !== null;
  menuSubcategoriesElement.hidden = selectedGroup === null;

  const makeTile = (name, items, onClick) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-tile";
    button.setAttribute("aria-label", name);
    const pictured = items.find(food => food.image);
    if (pictured) {
      button.classList.add("has-image");
      const image = document.createElement("img");
      image.alt = "";
      image.loading = "lazy";
      if (document.body.classList.contains("intro-active")) image.dataset.src = pictured.image;
      else image.src = pictured.image;
      button.appendChild(image);
    } else {
      button.classList.add("no-image");
    }
    const label = document.createElement("span");
    label.className = "menu-tile-label";
    label.textContent = name;
    const count = document.createElement("small");
    count.textContent = `${items.length} dishes`;
    label.appendChild(count);
    button.appendChild(label);
    const arrow = document.createElement("span");
    arrow.className = "menu-tile-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    button.appendChild(arrow);
    button.onclick = onClick;
    return button;
  };

  if (selectedGroup === null) {
    menuGroups.forEach((group, index) => {
      const items = foods.filter(food => group.categories.includes(food.category) && matchesType(food, currentCategory));
      if (!items.length) return;
      menuGroupsElement.appendChild(makeTile(group.name, items, () => {
        selectedGroup = index;
        selectedSubcategory = null;
        renderMenuGroups();
        catalogue.innerHTML = "";
      }));
    });
    return;
  }

  const back = document.createElement("button");
  back.type = "button";
  back.className = "menu-back";
  back.textContent = selectedSubcategory ? `← ${menuGroups[selectedGroup].name}` : "← Categories";
  back.onclick = () => {
    if (selectedSubcategory) selectedSubcategory = null;
    else selectedGroup = null;
    catalogue.innerHTML = "";
    renderMenuGroups();
  };
  menuSubcategoriesElement.appendChild(back);

  if (selectedSubcategory) return;

  const grid = document.createElement("div");
  grid.className = "menu-tile-grid";
  menuGroups[selectedGroup].categories.forEach(category => {
    const items = foods.filter(food => food.category === category && matchesType(food, currentCategory));
    if (!items.length) return;
    const name = category === "hot-milk-coffee" ? "HOT COFFEE (WITH MILK)" : categoryNames[category];
    grid.appendChild(makeTile(name, items, () => {
      selectedSubcategory = category;
      renderMenuGroups();
      renderCatalogue(category);
    }));
  });
  menuSubcategoriesElement.appendChild(grid);
}

function displayPrice(price) { return price.split("/").map(value => "₹" + value).join("/"); }

function imageSource(image) {
  return document.body.classList.contains("intro-active")
    ? `data-src="${image}"`
    : `src="${image}"`;
}




/* =====================================================
   STATE
===================================================== */

let specialIndex = 0;

let currentFood = foods[0];

let currentCategory = "all";


/* =====================================================
   ELEMENTS
===================================================== */

const products =
  document.getElementById("products");

const catalogue =
  document.getElementById("catalogue");

const details =
  document.getElementById("details");


/* =====================================================
   NEW MENU
===================================================== */

function renderProducts(
  list = foods.slice(0, 6)
) {

  products.innerHTML = "";

  list.forEach(food => {

    const index =
      foods.indexOf(food);

    const card =
      document.createElement("div");

    card.className = "product";

    card.innerHTML = `

      <button
        class="heart"
        onclick="toggleHeart(this)">
        ♥
      </button>

      <div class="product-image">
        ${food.image ? `<img loading="lazy" ${imageSource(food.image)} alt="${food.name}">` : ""}
      </div>

      <h3>
        ${food.name}
      </h3>
      ${food.badge ? `<span class="highlight-tag">${food.badge}</span>` : ""}

      <div class="product-bottom">

        <span class="product-price">
          ${displayPrice(food.price)}
        </span>

        <button
          class="plus"
          ${!food.available ? "disabled" : ""}
          onclick="openDetails(${index})">

          ${food.available ? "→" : "×"}

        </button>

      </div>

    `;

    products.appendChild(card);

  });

}

renderProducts();


/* =====================================================
   SEARCH
===================================================== */

document
  .getElementById("search")
  .addEventListener(
    "input",
    function () {

      const value =
        this.value
          .toLowerCase()
          .trim();

      if (!value) {

        renderProducts();

        menuGroupsElement.hidden = false;
        renderMenuGroups();
        if (selectedSubcategory) renderCatalogue(selectedSubcategory);
        else catalogue.innerHTML = "";

        return;

      }

      const filtered =
        foods.filter(food =>

          food.name
            .toLowerCase()
            .includes(value)

          ||

          food.description
            .toLowerCase()
            .includes(value)

        );

      renderProducts(
        filtered.slice(0, 6)
      );

      menuGroupsElement.hidden = true;
      menuSubcategoriesElement.hidden = true;
      renderCatalogue(
        "all",
        value
      );

    }
  );


/* =====================================================
   VIEW ALL
===================================================== */

function showAll() {

  document
    .getElementById("search")
    .value = "";

  renderProducts();

  currentCategory = "all";
  selectedGroup = null;
  selectedSubcategory = null;
  document.querySelectorAll("#categoryNav .category").forEach(btn => btn.classList.remove("active"));
  document.querySelector("#categoryNav .category").classList.add("active");
  menuGroupsElement.hidden = false;
  renderMenuGroups();
  catalogue.innerHTML = "";

  document
    .getElementById("menuSection")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================================
   CATEGORY
===================================================== */

function filterCategory(
  category,
  button
) {

  currentCategory =
    category;

  document
    .querySelectorAll("#categoryNav .category")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  button.classList.add("active");

  document
    .getElementById("search")
    .value = "";

  selectedGroup = null;
  selectedSubcategory = null;
  menuGroupsElement.hidden = false;
  renderMenuGroups();
  catalogue.innerHTML = "";

}


/* =====================================================
   CATALOGUE
===================================================== */

function renderCatalogue(
  filter = "all",
  searchValue = ""
) {

  catalogue.innerHTML = "";

  const list =
    foods.filter(food => {

      const categoryMatch =
        (filter === "all" || matchesType(food, filter) || food.category === filter) &&
        (searchValue || !selectedSubcategory || matchesType(food, currentCategory));

      const searchMatch =
        !searchValue
        ||
        food.name
          .toLowerCase()
          .includes(
            searchValue.toLowerCase()
          )
        ||
        food.description
          .toLowerCase()
          .includes(
            searchValue.toLowerCase()
          );

      return (
        categoryMatch &&
        searchMatch
      );

    });


  const grouped = {};


  list.forEach(food => {

    if (!grouped[food.category]) {

      grouped[food.category] = [];

    }

    grouped[food.category].push(food);

  });


  Object.keys(grouped)
    .forEach(category => {

      const section =
        document.createElement("div");

      section.className =
        "catalogue-category";

      section.innerHTML = `

        <h3>
          ${
            categoryNames[category]
            || category
          }
        </h3>

      `;


      grouped[category]
        .forEach(food => {

          const index =
            foods.indexOf(food);

          const item =
            document.createElement("div");

          item.className =
            "menu-item" +
            (
              !food.available
              ? " unavailable"
              : ""
            );


          item.onclick = () => {

            if (food.available) {

              openDetails(index);

            }

          };


          item.innerHTML = `

            <div class="menu-item-image">
              ${food.image ? `<img loading="lazy" ${imageSource(food.image)} alt="${food.name}">` : ""}
            </div>

            <div class="menu-item-info">

              <h4>
                ${food.name}
              </h4>

              ${food.description ? `<p>${food.description}</p>` : ""}
              ${food.badge ? `<span class="highlight-tag">${food.badge}</span>` : ""}

              <span
                class="food-tag
                ${
                  food.type === "nonveg"
                  ? "nonveg"
                  : ""
                }">

                ${
                  food.type === "nonveg"
                  ? "Non-Veg"
                  : "Veg"
                }

              </span>

              <span class="menu-price">

                ${displayPrice(food.price)}

              </span>

              ${
                !food.available
                ?
                `
                <span class="availability">
                  Currently Unavailable
                </span>
                `
                :
                ""
              }

            </div>

          `;

          section.appendChild(item);

        });


      if (categoryExtras[category]) {
        const extras = document.createElement("p");
        extras.className = "category-extras";
        extras.textContent = categoryExtras[category].join("  |  ");
        section.appendChild(extras);
      }

      catalogue.appendChild(section);

    });


  if (!list.length) {

    catalogue.innerHTML = `

      <div style="
        text-align:center;
        padding:35px 10px;
        color:#8e94a4;
      ">

        <div style="font-size:35px;">
          🔍
        </div>

        <h3 style="margin-top:10px;">
          No items found
        </h3>

        <p style="margin-top:5px;">
          Try another search or category.
        </p>

      </div>

    `;

  }

}

renderMenuGroups();


/* =====================================================
   DETAILS
===================================================== */

function openDetails(index) {

  currentFood =
    foods[index];

  if (!currentFood.available) {

    showToast(
      "This item is currently unavailable."
    );

    return;

  }


  document
    .getElementById("detailName")
    .textContent =
      currentFood.name;


  document
    .getElementById("detailImage")
    .src =
      currentFood.image || "";

  document.getElementById("detailImage").style.display = currentFood.image ? "" : "none";


  document
    .getElementById("detailDescription")
    .textContent =
      currentFood.description || currentFood.badge || "";


  document
    .getElementById("detailPrice")
    .textContent =
      displayPrice(currentFood.price);


  details.classList.add("show");

}


function closeDetails() {

  details.classList.remove("show");

}


/* =====================================================
   SPECIAL
===================================================== */

function special(index) {

  specialIndex =
    index;

  const food =
    foods[index];


  const specialImage = document.getElementById("specialImage");
  if (document.body.classList.contains("intro-active")) {
    specialImage.dataset.src = food.image;
  } else {
    specialImage.src = food.image;
  }


  document
    .getElementById("specialPrice")
    .textContent =
      displayPrice(food.price);


  document
    .getElementById("specialName")
    .innerHTML =
      food.name.replace(
        " ",
        "<br>"
      );

}


special(0);

/* =====================================================
   AUTOMATIC SPECIAL SLIDER
===================================================== */

setInterval(() => {

  specialIndex++;

  if (
    specialIndex >= 6
  ) {

    specialIndex = 0;

  }

  special(specialIndex);

}, 4000);


/* =====================================================
   HEART
===================================================== */

function toggleHeart(button) {

  button.textContent =
    button.textContent === "♥"
      ? "♡"
      : "♥";

}


function toggleFavourite() {

  showToast(
    "Added to favourites"
  );

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 1800);

}