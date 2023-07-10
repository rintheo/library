const newEntryOverlay = document.querySelector('#newEntryOverlay'),
      newEntryForm = document.querySelector('#newEntryForm'),
      newEntryFormContainer = document.querySelector('.form-container'),
      newEntryButton = document.querySelector('#newEntryButton'),
      newEntrySubmitButton = document.querySelector('#newEntrySubmitButton'),
      cancelEntryButton = document.querySelector('#cancelEntryButton'),
      cardsContainer = document.querySelector('.cards-container'),
      newEntryTitle = document.querySelector('input[name="title"]'),
      newEntryStudio = document.querySelector('input[name="studio"]'),
      newEntryEpisodes = document.querySelector('input[name="episodes"]'),
      newEntryWatched = document.getElementsByName('watched'),
      newEntryImage = document.querySelector('input[name="image"]');

// Initial library of animes
let myAniLib = [
    new Anime("Attack on Titan", "Wit Studio", 75, true, 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'),
    new Anime("Naruto", "Pierrot", 220, false, 'https://cdn.myanimelist.net/images/anime/13/17405.jpg'),
    new Anime("One Piece", "Toei Animation", 1000, false, 'https://cdn.myanimelist.net/images/anime/6/73245.jpg'),
    new Anime("My Hero Academia", "Bones", 113, true, 'https://cdn.myanimelist.net/images/anime/10/78745.jpg'),
    new Anime("Death Note", "Madhouse", 37, true, 'https://cdn.myanimelist.net/images/anime/1001/121564.jpg'),
    new Anime("Fullmetal Alchemist: Brotherhood", "Bones", 64, true, 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg'),
    new Anime("Demon Slayer", "ufotable", 26, true, 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg'),
    new Anime("Hunter x Hunter", "Madhouse", 148, false, 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg'),
    new Anime("Haikyuu!!", "Production I.G", 85, false, 'https://cdn.myanimelist.net/images/anime/7/76014.jpg'),
    new Anime("Steins;Gate", "White Fox", 24, true, 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg'),
    new Anime("Sword Art Online", "A-1 Pictures", 97, true, 'https://cdn.myanimelist.net/images/anime/11/39717.jpg'),
    new Anime("Code Geass", "Sunrise", 50, true, 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg'),
    new Anime("Cowboy Bebop", "Sunrise", 26, true, 'https://cdn.myanimelist.net/images/anime/4/19644.jpg'),
    new Anime("One Punch Man", "Madhouse", 24, false, 'https://cdn.myanimelist.net/images/anime/12/76049.jpg'),
];

function Anime(title, studio, episodes, watched, image) {
    this.title = title,
    this.studio = studio,
    this.episodes = episodes,
    this.watched = watched,
    this.image = image
};

Anime.prototype.info = function() {
    return `${this.title} by ${this.studio}, ${this.episodes} pages, ${this.watched}`;
};

function generateList(animeArray) {
    animeArray.forEach(createCard);
    document
        .querySelectorAll('.card')
        .forEach(addCardHoverListeners);
}

function updateList() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
    generateList(myAniLib);
}

function addAnimeToLibrary(anime) {
    myAniLib.push(anime);
};

function createCard(anime, index) {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.setAttribute('data-card-index', `${index}`);
    if (anime.watched) {divCard.classList.add('watched')};

        const divPoster = document.createElement('div');
        divPoster.classList.add('poster');
        if (anime.image) {divPoster.style.backgroundImage = `url(${anime.image})`};

        const h2Title = document.createElement('h2');
        h2Title.classList.add('title');
        h2Title.textContent = anime.title;

        const h3Studio = document.createElement('h3');
        h3Studio.classList.add('studio');
        h3Studio.textContent = anime.studio;

        const divCardBottom = document.createElement('div');
        divCardBottom.classList.add('card-bottom');

            const h4Episodes = document.createElement('h4');
            h4Episodes.classList.add('episodes');
            h4Episodes.textContent = `${anime.episodes} episodes`;

            const buttonWatched = document.createElement('button');
            buttonWatched.classList.add('watched-button');

                const divWatched = document.createElement('div');
                const svgNotWatchedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-off-outline</title><path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" /></svg>`;
                const svgWatchedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Watch</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>`;

            const buttonRemove = document.createElement('button');
            buttonRemove.classList.add('remove-button');
            buttonRemove.addEventListener('click', removeCard);

                const divRemove = document.createElement('div');
                const svgDeleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;

    buttonWatched.appendChild(divWatched);
    buttonRemove.appendChild(divRemove);

    divCardBottom.appendChild(buttonWatched);
    divCardBottom.appendChild(h4Episodes);
    divCardBottom.appendChild(buttonRemove);

    divCard.appendChild(divPoster);
    divCard.appendChild(h2Title);
    divCard.appendChild(h3Studio);
    divCard.appendChild(divCardBottom);
    
    cardsContainer.appendChild(divCard);
    
    divWatched.outerHTML = (anime.watched) ? svgWatchedIcon : svgNotWatchedIcon ;
    divRemove.outerHTML = svgDeleteIcon;
}

function removeCard(e) {
    myAniLib.splice(getCardIndex(e), 1);
    updateList();
}

function getCardIndex(e) {
    let cardIndex;
    document
        .querySelectorAll('.card')
        .forEach(card => {
            if (card.contains(e.target)) {
                cardIndex = card.getAttribute('data-card-index');
            };
        });
    return cardIndex;
}

function newEntry() {
    newEntryOverlay.classList.remove('visibility-hidden');
    newEntryFormContainer.classList.remove('visibility-hidden');
    newEntryButton.classList.add('visibility-hidden');
}

function cancelEntryFromOverlay(e) {
    if (!isAllRequiredInputEmpty()) return;
    if (e.target !== this) {return};
    cancelEntry();
}

function cancelEntry(e){
    untouchInput()
    hideEntry();
    resetEntry();
}

function hideEntry(){
    newEntryOverlay.classList.add('visibility-hidden');
    newEntryFormContainer.classList.add('visibility-hidden');
    newEntryButton.classList.remove('visibility-hidden');
}

function submitEntry(e){
    if (isAnyRequiredInputEmpty()) return;
    if (newEntryEpisodes.value < 1) return;

    const entry = new Anime(newEntryTitle.value, 
                            newEntryStudio.value, 
                            newEntryEpisodes.value, 
                            newEntryWatchedValue(),
                            newEntryImage.value);
    myAniLib.push(entry);
    updateList();
    untouchInput()
    resetEntry();
    hideEntry();
    e.preventDefault();
}

function resetEntry() {
    newEntryForm.reset();
}

function newEntryWatchedValue() {
    for (let option in newEntryWatched) {
        if (newEntryWatched[option].checked) {
            return (newEntryWatched[option].value === "true") ? true : false;
        }
    }
}

function isAnyRequiredInputEmpty() {
    return (newEntryTitle.value === "") ||
           (newEntryStudio.value === "") ||
           (newEntryEpisodes.value === "") ? true : false;
}

function isAllRequiredInputEmpty() {
    return (newEntryTitle.value === "") &&
           (newEntryStudio.value === "") &&
           (newEntryEpisodes.value === "") ? true : false;
}

function touchInput(e) {
    e.target.classList.add('touched');
}

function untouchInput() {
    document
    .querySelectorAll('input')
    .forEach(input => {
        input.classList.remove('touched')
    });
}

function addCardHoverListeners(card) {
    card.addEventListener('mouseenter', mouseEnterCard);
    card.addEventListener('mouseleave', mouseLeaveCard);
}

function mouseEnterCard(e) {
    e.target.classList.add('hover');
}

function mouseLeaveCard(e) {
    e.target.classList.remove('hover');
}

newEntryButton.addEventListener('click', newEntry);
newEntrySubmitButton.addEventListener('click', submitEntry);
newEntryFormContainer.addEventListener('click', cancelEntryFromOverlay);
cancelEntryButton.addEventListener('click', cancelEntry);

document
    .querySelectorAll('input')
    .forEach(input => {
        input.addEventListener('blur', touchInput)
    });

document
    .querySelector('#currentYear')
    .textContent = new Date().getFullYear();
    
generateList(myAniLib);




