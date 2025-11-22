fetch('reviews.json')
  .then(response => response.json())
  .then(reviews => {
    const container = document.getElementById('reviews');
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'review';
      div.innerHTML = `
        <div class="review-content">
          <img src="${review.image}" alt="${review.title}" class="review-img">
          <div class="review-text">
            <h2>${review.title}</h2>
            <p class="rating">${'★'.repeat(review.rating)}</p>
            <p>${review.comment}</p>
          </div>
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));
