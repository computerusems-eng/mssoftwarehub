const searchInput = document.getElementById('search');
const osFilter = document.getElementById('osFilter');
const categoryFilter = document.getElementById('categoryFilter');
const products = document.querySelectorAll('.card');

function filterProducts() {
  const search = searchInput.value.toLowerCase();
  const os = osFilter.value;
  const category = categoryFilter.value;

  products.forEach(card => {
    const name = card.querySelector('h3').innerText.toLowerCase();
    const matchesSearch = name.includes(search);
    const matchesOS = os === 'all' || card.dataset.os === os;
    const matchesCategory = category === 'all' || card.dataset.category === category;

    if (matchesSearch && matchesOS && matchesCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProducts);
osFilter.addEventListener('change', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
