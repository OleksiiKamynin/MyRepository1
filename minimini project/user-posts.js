// user-posts.js
const userPosts = document.getElementById('userPosts');

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';

            const postTitle = document.createElement('h3');
            postTitle.textContent = post.title;

            const postBody = document.createElement('p');
            postBody.textContent = post.body;

            const viewCommentsBtn = document.createElement('button');
            viewCommentsBtn.textContent = 'View Comments';
            viewCommentsBtn.className = "commBtn"

            viewCommentsBtn.addEventListener('click', () => {
                location.href = `post-comments.html?postId=${post.id}`;
            });

            postCard.appendChild(postTitle);
            postCard.appendChild(postBody);
            postCard.appendChild(viewCommentsBtn);

            userPosts.appendChild(postCard);
        });
    })
    .catch(error => console.error('Error fetching user posts:', error));
