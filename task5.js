document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const postList = document.querySelector('.post-list');
            posts.forEach(post => {
                const card = document.createElement('div');
                card.classList.add('post-card');
                card.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                    <a href="post.html?id=${post.id}">Read More</a>
                `;
                postList.appendChild(card);
            });
        });
});
