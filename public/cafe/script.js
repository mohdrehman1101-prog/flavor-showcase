/* =====================================================
   FOOD DATA
===================================================== */

const foods = [

  {
    name: "Classic Coffee",
    price: 11,
    image: "https://i.ibb.co/6RMtN9g8/1788631707612.png",
    description: "Freshly prepared coffee with a rich aroma and smooth taste.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Flying Coffee",
    price: 13,
    image: "https://i.ibb.co/KczwKC4b/pngtree-flying-cup-of-coffee-with-splash-and-png-image-12831547.png",
    description: "A beautiful coffee creation with a smooth and refreshing taste.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Premium Coffee",
    price: 15,
    image: "https://i.ibb.co/s9Pb3PXV/1788629659554.png",
    description: "Premium coffee prepared with carefully selected ingredients.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Cafe Special",
    price: 17,
    image: "https://i.ibb.co/8QNGd7N/1788632069666.png",
    description: "Our special cafe drink with a rich flavour and creamy finish.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Signature Coffee",
    price: 19,
    image: "https://i.ibb.co/fYfH8j3F/1788629418028.png",
    description: "A signature coffee with a premium cafe-style presentation.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Chocolate Coffee",
    price: 21,
    image: "https://i.ibb.co/20B2pdG2/1788632202386.png",
    description: "A delicious chocolate coffee with a rich and smooth finish.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Paneer Tikka",
    price: 14,
    image: "https://i.ibb.co/s9Pb3PXV/1788629659554.png",
    description: "Soft paneer marinated with aromatic spices.",
    category: "starters",
    type: "veg",
    available: true
  },

  {
    name: "Veg Spring Roll",
    price: 10,
    image: "https://i.ibb.co/8QNGd7N/1788632069666.png",
    description: "Crispy rolls filled with fresh vegetables.",
    category: "starters",
    type: "veg",
    available: true
  },

  {
    name: "Chicken Tikka",
    price: 16,
    image: "https://i.ibb.co/fYfH8j3F/1788629418028.png",
    description: "Tender chicken pieces cooked with aromatic spices.",
    category: "starters",
    type: "nonveg",
    available: true
  },

  {
    name: "Chicken Biryani",
    price: 18,
    image: "https://i.ibb.co/20B2pdG2/1788632202386.png",
    description: "Aromatic basmati rice cooked with delicious chicken.",
    category: "biryani",
    type: "nonveg",
    available: true
  },

  {
    name: "Veg Biryani",
    price: 14,
    image: "https://i.ibb.co/6RMtN9g8/1788631707612.png",
    description: "Fragrant rice prepared with fresh vegetables and spices.",
    category: "biryani",
    type: "veg",
    available: true
  },

  {
    name: "Butter Naan",
    price: 6,
    image: "https://i.ibb.co/KczwKC4b/pngtree-flying-cup-of-coffee-with-splash-and-png-image-12831547.png",
    description: "Soft naan finished with butter.",
    category: "breads",
    type: "veg",
    available: true
  },

  {
    name: "Chicken Fried Rice",
    price: 15,
    image: "https://i.ibb.co/8QNGd7N/1788632069666.png",
    description: "Fried rice with chicken and fresh vegetables.",
    category: "chinese",
    type: "nonveg",
    available: true
  },

  {
    name: "Veg Hakka Noodles",
    price: 12,
    image: "https://i.ibb.co/fYfH8j3F/1788629418028.png",
    description: "Classic noodles tossed with fresh vegetables.",
    category: "chinese",
    type: "veg",
    available: true
  },

  {
    name: "Cold Coffee",
    price: 12,
    image: "https://i.ibb.co/20B2pdG2/1788632202386.png",
    description: "Cold and creamy cafe-style coffee.",
    category: "drinks",
    type: "veg",
    available: true
  },

  {
    name: "Fresh Lime Soda",
    price: 8,
    image: "https://i.ibb.co/6RMtN9g8/1788631707612.png",
    description: "Refreshing lime drink.",
    category: "drinks",
    type: "veg",
    available: false
  },

  {
    name: "Chocolate Brownie",
    price: 9,
    image: "https://i.ibb.co/KczwKC4b/pngtree-flying-cup-of-coffee-with-splash-and-png-image-12831547.png",
    description: "Rich chocolate brownie served as a sweet dessert.",
    category: "desserts",
    type: "veg",
    available: true
  }

];


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

        <img
          src="${food.image}"
          alt="${food.name}">

      </div>

      <h3>
        ${food.name}
      </h3>

      <div class="product-bottom">

        <span class="product-price">
          $${food.price.toFixed(2)}
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

        renderCatalogue(
          currentCategory,
          ""
        );

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

  renderCatalogue("all");

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
    .querySelectorAll(".category")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  button.classList.add("active");

  document
    .getElementById("search")
    .value = "";

  renderCatalogue(category);

}


/* =====================================================
   CATEGORY NAMES
===================================================== */

const categoryNames = {

  starters: "Starters",

  biryani: "Biryani & Rice",

  breads: "Breads",

  chinese: "Chinese",

  drinks: "Drinks",

  desserts: "Desserts"

};


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
        filter === "all"
        ||
        food.type === filter
        ||
        food.category === filter;

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

              <img
                src="${food.image}"
                alt="${food.name}">

            </div>

            <div class="menu-item-info">

              <h4>
                ${food.name}
              </h4>

              <p>
                ${food.description}
              </p>

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

                $${food.price.toFixed(2)}

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

renderCatalogue();


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
      currentFood.image;


  document
    .getElementById("detailDescription")
    .textContent =
      currentFood.description;


  document
    .getElementById("detailPrice")
    .textContent =
      "$" +
      currentFood.price.toFixed(2);


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


  document
    .getElementById("specialImage")
    .src =
      food.image;


  document
    .getElementById("specialPrice")
    .textContent =
      "$" +
      food.price.toFixed(2);


  document
    .getElementById("specialName")
    .innerHTML =
      food.name.replace(
        " ",
        "<br>"
      );

}


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