document.addEventListener('DOMContentLoaded', async function() {
    var gallery = document.getElementById("gallery");
    var comics = await fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=30746f5c15167e1c3fc05817ad22468f&hash=ca9e18c5a725f5208111c7708ec1eedf').then((response) => response.json());
    comics.data.results.forEach(async comic => {
        var card = document.createElement('div');
        card.className = 'card';

        var title = document.createElement('h2');
        title.className = 'title';
        title.innerHTML = comic.title;

        var picture = document.createElement('img');
        picture.className = "artwork";
        picture.src = comic.thumbnail.path + '.' + comic.thumbnail.extension;

        card.appendChild(picture);
        card.appendChild(title);
        gallery.appendChild(card);
    });
 });