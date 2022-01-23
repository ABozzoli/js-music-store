// costanti
const url = 'https://flynn.boolean.careers/exercises/api/array/music';
const gallery = document.getElementById('gallery');

//API
axios
    .get(url) //prendi url e aspetta
    .then((value) => { // then, quando ricevi risposta fai
        const albumList = value.data.response;
        console.log(albumList);
        albumList.forEach(createItem);
    })
    .catch((error) => {
        console.log(error);
    });

// assembla oggetto
function createItem(item){
    let col = createCol();
        let card = createCard();
            let img = createImg(item);
            let cardBody = createCardBody(item);
            let cardFooter = createCardFooter(item);

    gallery.appendChild(col);
        col.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody); 
            card.appendChild(cardFooter);
}

// componenti
function createCol() {
    let col = document.createElement('div');
    col.className = 'col-4';
    return col;
}

function createCard(){
    let card = document.createElement('div');
    card.className = 'card';
    return card;
}

function createImg(item) {
    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = item.poster;
    return img;
}

function createCardBody(item) {
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.className = 'card-title';
    title.innerHTML = item.title;

    let author = document.createElement('p');
    author.className = 'card-text';
    author.innerHTML = item.author;

    cardBody.appendChild(title);
    cardBody.appendChild(author);

    return cardBody;
}

function createCardFooter(item) {
    let cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-between';

    let year = document.createElement('span');
    year.innerHTML = item.year;

    let genre = document.createElement('span');
    genre.innerHTML = item.genre;

    cardFooter.appendChild(year);
    cardFooter.appendChild(genre);

    return cardFooter;
}
