fetch('reviews.json')
  .then(response => response.json())
  .then(reviews => {
    const container = document.getElementById('reviews');
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'review';

      // 星の生成
      const fullStars = Math.floor(review.rating);
      const halfStar = review.rating % 1 >= 0.5;
      let starsHtml = '★'.repeat(fullStars);
      if (halfStar) starsHtml += '½';

      div.innerHTML = `
        <div class="review-content">
          <img src="${review.image}" alt="${review.title}" class="review-img">
          <div class="review-text">
            <h2>${review.title}</h2>
            <p class="rating">${starsHtml}</p>
            <p>${review.comment}</p>
          </div>
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));
