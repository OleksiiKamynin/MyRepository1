// user-details.js
const userDetails = document.getElementById('userDetails');
const viewPostsBtn = document.getElementById('viewPostsBtn');

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        const userName = document.createElement('h3');
        userName.textContent = user.name;

        const userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;

        const userPhone = document.createElement('p');
        userPhone.textContent = `Phone: ${user.phone}`;

        const userWebsite = document.createElement('p');
        userWebsite.textContent = `Website: ${user.website}`;

        userCard.appendChild(userName);
        userCard.appendChild(userEmail);
        userCard.appendChild(userPhone);
        userCard.appendChild(userWebsite);

        userDetails.appendChild(userCard);

        viewPostsBtn.addEventListener('click', () => {
            // При нажатии на кнопку "View Posts" переходим на страницу постов пользователя
            window.location.href = `user-posts.html?userId=${userId}`;
        });
    })
    .catch(error => console.error('Error fetching user data:', error));
