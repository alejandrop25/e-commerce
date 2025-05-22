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