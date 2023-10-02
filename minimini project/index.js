// index.js
const userList = document.getElementById('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';

            const userName = document.createElement('h3');
            userName.textContent = user.name;

            const userId = document.createElement('p');
            userId.textContent = `ID: ${user.id}`;

            const userLink = document.createElement('a');
            userLink.textContent = 'View Details';
            userLink.href = `user-details.html?userId=${user.id}`;


            userCard.appendChild(userName);
            userCard.appendChild(userId);
            userCard.appendChild(userLink);

            userList.appendChild(userCard);
        });
    })
    .catch(error => console.error('Error fetching user data:', error));
