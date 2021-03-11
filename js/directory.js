let html = '';

for (let i = 0; i < plants.length; i ++) {
    let plants = plants[i];
    html += `
        <h2>${plants.name}</h2>
        <h3>${plants.type}</h3>
        <p>${plants.germination}</p>
        <img src="$plants.photo}"> 
        `;
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);