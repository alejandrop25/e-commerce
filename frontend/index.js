document.querySelectorAll('input[name="priceFilter"]').forEach(radio => {
    radio.addEventListener('change', function () {
      const order = this.value;
      const container = document.querySelector('.products-container__items');
      const cards = Array.from(container.querySelectorAll('.card'));

      cards.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        return order === 'asc' ? priceA - priceB : priceB - priceA;
      });

      container.innerHTML = '';
      cards.forEach(card => container.appendChild(card));
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const btnFavorite = document.querySelectorAll(".btn-favorite");
  
    btnFavorite.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const name = card.querySelector(".card-title").textContent;
        const price = card.querySelector(".card-text").textContent;
        const image = card.querySelector("img").getAttribute("src");
  
        const item = { id: `product-${index}`, name, price, image };
  
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
        const exists = favorites.some((fav) => fav.name === item.name && fav.price === item.price);
        if (!exists) {
          favorites.push(item);
          localStorage.setItem("favorites", JSON.stringify(favorites));
          Swal.fire("Added to favorites.");
        } else {
          Swal.fire("This item is already a favorite.");
        }
      });
    });
    const saveFavorite = (item) => {
      fetch("https://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      }).then(res => res.json());
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const btnCart = document.querySelectorAll(".btn-cart");
  
    btnCart.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const name = card.querySelector(".card-title").textContent;
        const price = card.querySelector(".card-text").textContent;
        const image = card.querySelector("img").getAttribute("src");
  
        const item = { id: `product-${index}`, name, price, image, quantity: 1 };
  
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        const exists = cart.find(prod => prod.name === item.name && prod.price === item.price);
  
        if (exists) {
          exists.quantity += 1;
        } else {
          cart.push(item);
        }
  
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire("Item added to cart.");
      });
    });
    const addToCart = (item) => {
      fetch("https://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      }).then(res => res.json());
    }
  });


document.addEventListener("DOMContentLoaded", function () {
  const btnSearch = document.getElementById("search-input");
  btnSearch.addEventListener("change", function() {
    const text = btnSearch.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const show = title.includes(text);
      card.style.display = show ? "block" : "none";
    })
  })
})