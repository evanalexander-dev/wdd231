const timestampInput = document.getElementById('timestamp');
timestampInput.value = new Date().toISOString();

const membershipBenefits = {
    "NP Membership": "Free Membership<br><br>Provides access to Colorado Chamber of Commerce Events",
    "Bronze Membership": "$100 / month<br><br>Provides access to Colorado Chamber of Commerce Events and Training",
    "Silver Membership": "$250 / month<br><br>Provides access to Colorado Chamber of Commerce Events and Training<br>Provides Advertising, including featuring your organization on the Colorado Chamber of Commerce Home Page",
    "Gold Membership": "$1000 / month<br><br>Provides access to Colorado Chamber of Commerce Events and Training at a discount<br>Provides Advertising, including featuring your organization on the Colorado Chamber of Commerce Home Page",
};

const membershipDetails = document.querySelector('dialog');
function displayMembershipDetails(membershipLevel) {
    membershipDetails.innerHTML = '';
    membershipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${membershipLevel}</h2>
        <p>${membershipBenefits[membershipLevel]}</p>
    `;
    membershipDetails.showModal();

    let closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => membershipDetails.close());
}

const npButton = document.querySelector('#learnMore-NP');
const bronzeButton = document.querySelector('#learnMore-Bronze');
const silverButton = document.querySelector('#learnMore-Silver');
const goldButton = document.querySelector('#learnMore-Gold');
npButton.addEventListener('click', () => displayMembershipDetails("NP Membership"));
bronzeButton.addEventListener('click', () => displayMembershipDetails("Bronze Membership"));
silverButton.addEventListener('click', () => displayMembershipDetails("Silver Membership"));
goldButton.addEventListener('click', () => displayMembershipDetails("Gold Membership"));
