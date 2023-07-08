document
.querySelector('#currentYear')
.textContent = new Date().getFullYear();

let myAniLib = [];

function Anime(title, studio, episodes, watched) {
    this.title = title,
    this.studio = studio,
    this.episodes = episodes,
    this.watched = watched
};

Anime.prototype.info = function() {
    return `${this.title} by ${this.studio}, ${this.episodes} pages, ${this.watched}`;
};

function addAnimeToLibrary(anime) {
    myAniLib.push(anime);
};

const anime1 = new Anime("Attack on Titan", "Wit Studio", 75, true),
      anime2 = new Anime("One Piece", "Toei Animation", 1000, false),
      anime3 = new Anime("My Hero Academia", "Bones", 113, true),
      anime4 = new Anime("Death Note", "Madhouse", 37, true),
      anime5 = new Anime("Fullmetal Alchemist: Brotherhood", "Bones", 64, true),
      anime6 = new Anime("Demon Slayer", "ufotable", 26, true),
      anime7 = new Anime("Hunter x Hunter", "Madhouse", 148, true),
      anime8 = new Anime("Haikyuu!!", "Production I.G", 85, true),
      anime9 = new Anime("Steins;Gate", "White Fox", 24, true),
      anime10 = new Anime("Sword Art Online", "A-1 Pictures", 97, true);


