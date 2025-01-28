document.addEventListener('DOMContentLoaded', async function() {
    var gallery = document.getElementById("gallery");
    var characters = await fetch('https://api.disneyapi.dev/character?films=Aladdin').then((response) => response.json());
    characters.data.forEach(async character => {
        var card = document.createElement('div');
        card.className = 'card';

        var title = document.createElement('h2');
        title.className = 'title';
        title.innerHTML = character.name;

        var picture = document.createElement('img');
        picture.className = "artwork";
        picture.src = character.imageUrl;

        card.appendChild(picture);
        card.appendChild(title);
        gallery.appendChild(card);
    });
 });