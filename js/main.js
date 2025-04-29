console.log('Food blog script loaded');

document.getElementById('category-filter').addEventListener('change', function(e) {
  const selectedCategory = e.target.value;
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  recipeCards.forEach(card => {
    const category = card.querySelector('p').textContent.toLowerCase();
    
    if (selectedCategory === 'all' || category.includes(selectedCategory)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

