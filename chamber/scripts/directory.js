const gridButton = document.querySelector('#directoryGridButton');
const listButton = document.querySelector('#directoryListButton');
const directoryDiv = document.querySelector('#directory');

gridButton.addEventListener('click', () => {
    displayMembers('grid');
    gridButton.classList.add('directoryFilterActive');
    listButton.classList.remove('directoryFilterActive');
});
listButton.addEventListener('click', () => {
    displayMembers('list');
    gridButton.classList.remove('directoryFilterActive');
    listButton.classList.add('directoryFilterActive');
});

let members = [];

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();

   return data.members;
}

function displayMembers(style='grid') {
    directoryDiv.innerHTML = '';
    switch (style) {
        case 'grid':
            directoryDiv.style.display = 'grid';
            members.forEach(member => {
                const card = document.createElement('section');
                const logo = document.createElement('img');
                const address = document.createElement('p');
                const phone = document.createElement('p');
                const website = document.createElement('a');

                logo.setAttribute('src', member.image);
                logo.setAttribute('alt', `${member.name} Logo`);
                logo.setAttribute('loading', 'lazy');
                logo.setAttribute('width', 'auto');
                logo.setAttribute('height', '50rem');

                address.innerText = member.address;

                phone.innerText = member.phone;

                website.setAttribute('href', member.website);
                website.innerText = member.website;

                card.appendChild(logo);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);

                directoryDiv.appendChild(card);
            });
            break;
        case 'list':
            directoryDiv.style.display = 'unset';
            const table = document.createElement('table');
            directoryDiv.appendChild(table);
            members.forEach(member => {
                const tr = document.createElement('tr');
                const name = document.createElement('td');
                const address = document.createElement('td');
                const phone = document.createElement('td');
                const websiteLink = document.createElement('a');
                const website = document.createElement('td');
                
                name.innerText = member.name;
                
                address.innerText = member.address;
                
                phone.innerText = member.phone;
                
                websiteLink.setAttribute('href', member.website);
                websiteLink.innerText = member.website;
                website.appendChild(websiteLink);
                
                tr.appendChild(name);
                tr.appendChild(address);
                tr.appendChild(phone);
                tr.appendChild(website);
                
                table.appendChild(tr);
            });
            break;
    }
}

getMemberData().then(data => { members = data; displayMembers(); });