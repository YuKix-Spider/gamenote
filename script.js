fetch('reviews.json')
  .then(response => response.json())
  .then(reviews => {
    const container = document.getElementById('reviews');
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <h2>${review.title}</h2>
        <p class="rating">評価: ${'★'.repeat(review.rating)}</p>
        <p>${review.comment}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));
