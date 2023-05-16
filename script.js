const url = "https://randomuser.me/api/?results=4"; // Fetch data for only 4 users by using " ?results=4 " in the end of url

//  Function to retrieve user data and distribute it to team cards

let getUsers = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const users = data.results; // Get the array of users
      
      const teamCards = document.querySelectorAll('.team-card');
      teamCards.forEach((teamCard, index) => {
        const user = users[index]; // Get the user for the current team card

        // Extract member details from the user object
        const member = {
          name: `${user.name.first} ${user.name.last}`,
          profileimg: user.picture.large,
          email: user.email,
          address: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
        };

        // Retrieve DOM elements for the current team card
        const nameElement = teamCard.querySelector('.name');
        const profileImgElement = teamCard.querySelector('.profile-pic img');
        const emailElement = teamCard.querySelector('.email');
        const addressElement = teamCard.querySelector('.address');

        // Populate the DOM elements with member data
        nameElement.innerText = member.name;
        profileImgElement.src = member.profileimg;
        emailElement.innerText = member.email;
        addressElement.innerText = member.address;
      });
    });
};

window.addEventListener('load', getUsers);