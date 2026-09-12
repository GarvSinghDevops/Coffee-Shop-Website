// Edit this list to update the menu. Every product has its own image URL.
const products = [
  // Coffee — 7 items
  { category: "coffee", name: "House Espresso", description: "Double shot, dark chocolate, toasted almond.", price: "₹110", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "Flat White", description: "Double espresso with glossy microfoam.", price: "₹150", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "Cappuccino", description: "Classic, rich, and perfectly balanced.", price: "₹150", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "House Latte", description: "Velvety milk and our signature blend.", price: "₹160", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "Caramel Latte", description: "Buttery caramel, espresso, steamed milk.", price: "₹180", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "Mocha", description: "Espresso, Belgian cocoa, cloud-like foam.", price: "₹180", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=85" },
  { category: "coffee", name: "Long Black", description: "Bold espresso lengthened with hot water.", price: "₹130", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85" },

  // Cold drinks — 5 items
  { category: "cold", name: "Cloud Cold Brew", description: "Slow-steeped for 18 hours. Silky, never bitter.", price: "₹190", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85" },
  { category: "cold", name: "Iced Latte", description: "Double espresso, chilled milk, plenty of ice.", price: "₹175", image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=800&q=85" },
  { category: "cold", name: "Espresso Tonic", description: "Espresso over tonic, citrus, and orange zest.", price: "₹185", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85" },
  { category: "cold", name: "Affogato", description: "Vanilla bean gelato with a hot espresso pour-over.", price: "₹200", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85" },
  { category: "cold", name: "Berry Hibiscus Fizz", description: "Hibiscus, berries, lemon, sparkling water.", price: "₹150", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=85" },

  // Sandwiches — 6 items
  { category: "sandwiches", name: "Roasted Veg Pesto", description: "Charred vegetables, basil pesto, mozzarella, sourdough.", price: "₹260", vegetarian: true, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85" },
  { category: "sandwiches", name: "Three Cheese Melt", description: "Cheddar, mozzarella, cream cheese, chilli honey.", price: "₹250", vegetarian: true, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=85" },
  { category: "sandwiches", name: "Grilled Chicken Club", description: "Herb chicken, cheddar, tomato, mustard aioli.", price: "₹310", image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=85" },
  { category: "sandwiches", name: "Smoked Paneer Stack", description: "Smoked paneer, pickled onions, mint mayo.", price: "₹280", vegetarian: true, image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=800&q=85" },
  { category: "sandwiches", name: "Egg & Avocado Toastie", description: "Soft scrambled egg, avocado, chilli flakes.", price: "₹270", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=85" },
  { category: "sandwiches", name: "Tuna Lemon Melt", description: "Flaked tuna, lemon mayo, cheddar, greens.", price: "₹295", image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=800&q=85" },

  // Bakes and snacks — 7 items
  { category: "snacks", name: "Butter Croissant", description: "Golden, flaky, made fresh every morning.", price: "₹120", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Almond Chocolate Croissant", description: "Buttery pastry, dark chocolate, almond cream.", price: "₹160", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Banana Walnut Loaf", description: "Warm spice, ripe banana, toasted walnuts.", price: "₹130", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Double Chocolate Muffin", description: "Dark cocoa crumb with a molten centre.", price: "₹130", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Cinnamon Roll", description: "Soft, swirled, iced just enough.", price: "₹150", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Rosemary Potato Wedges", description: "Sea salt, rosemary, smoky house dip.", price: "₹180", vegetarian: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85" },
  { category: "snacks", name: "Loaded Nachos", description: "Cheese, salsa, jalapeños, guacamole.", price: "₹230", vegetarian: true, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=85" }
];

const categoryDetails = {
  coffee: { title: "Coffee", subtitle: "For the ritual" },
  cold: { title: "Cold drinks", subtitle: "Bright & refreshing" },
  sandwiches: { title: "Sandwiches", subtitle: "Made to linger over" },
  snacks: { title: "Bakes & snacks", subtitle: "A little something extra" }
};

const menuContainer = document.querySelector("#menu-container");
const filterButtons = document.querySelectorAll(".filter-button");

function createProductCard(product) {
  const vegetarianBadge = product.vegetarian
    ? '<span class="vegetarian-badge">Vegetarian</span>'
    : "";

  return `
    <article class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-content">
        <div>
          <h4>${product.name}</h4>
          <p>${product.description}</p>
          ${vegetarianBadge}
        </div>
        <strong>${product.price}</strong>
      </div>
    </article>
  `;
}

function renderMenu(selectedCategory = "all") {
  const visibleCategories = Object.keys(categoryDetails).filter((category) => {
    return selectedCategory === "all" || category === selectedCategory;
  });

  menuContainer.innerHTML = visibleCategories.map((category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const details = categoryDetails[category];

    return `
      <section class="menu-group">
        <div class="group-heading">
          <h3>${details.title}</h3>
          <p>${details.subtitle}</p>
        </div>
        <div class="product-grid">
          ${categoryProducts.map(createProductCard).join("")}
        </div>
      </section>
    `;
  }).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMenu(button.dataset.filter);
  });
});

renderMenu();
