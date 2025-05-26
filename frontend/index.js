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
    const botoesFavorito = document.querySelectorAll(".btn-favorito");
  
    botoesFavorito.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const nome = card.querySelector(".card-title").textContent;
        const preco = card.querySelector(".card-text").textContent;
        const imagem = card.querySelector("img").getAttribute("src");
  
        const item = { id: `produto-${index}`, nome, preco, imagem };
  
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  
        const jaExiste = favoritos.some((fav) => fav.nome === item.nome && fav.preco === item.preco);
        if (!jaExiste) {
          favoritos.push(item);
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          alert("Produto adicionado aos favoritos!");
        } else {
          alert("Este produto já está nos favoritos.");
        }
      });
    });
  });