// post-comments.js
const postComments = document.getElementById('postComments');

const urlParams = new URLSearchParams(location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const commentCard = document.createElement('div');
            commentCard.className = 'comment-card';

            const commentName = document.createElement('h3');
            commentName.textContent = comment.name;

            const commentEmail = document.createElement('p');
            commentEmail.textContent = `Email: ${comment.email}`;

            const commentBody = document.createElement('p');
            commentBody.textContent = comment.body;

            commentCard.appendChild(commentName);
            commentCard.appendChild(commentEmail);
            commentCard.appendChild(commentBody);

            postComments.appendChild(commentCard);
        });
    })
    .catch(error => console.error('Error fetching post comments:', error));
