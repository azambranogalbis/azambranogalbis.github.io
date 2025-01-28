document.addEventListener('DOMContentLoaded', async function() {
    var gallery = document.getElementById("gallery");
    var characters = await fetch('https://pokeapi.co/api/v2/pokemon/').then((response) => response.json());
    characters.results.forEach(async character => {
        var card = document.createElement('div');
        card.className = 'card';

        var title = document.createElement('h2');
        title.className = 'title';
        title.innerHTML = character.name;
        
        var details = await fetch(character.url).then((response) => response.json());
        var artworkURL = details.sprites.other["official-artwork"].front_default;
        var picture = document.createElement('img');
        picture.className = "artwork";
        picture.src = artworkURL;

        card.appendChild(picture);
        card.appendChild(title);
        gallery.appendChild(card);
    });
 });