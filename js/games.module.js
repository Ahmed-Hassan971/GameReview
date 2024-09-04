import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");
    let lis = document.querySelectorAll(".nav-item a");
    lis.forEach((e) => {
      e.addEventListener("click", (e) => {
        let current = document.querySelector(".active");
        current.classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.textContent.toLowerCase());
      });
    });

    this.ui = new Ui();
  }

  
  async getGames(category) {
    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    let options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let response = await api.json();

    this.ui.displayGame(response);
    this.startEvent();
    loading.classList.add("d-none");
  }

  startEvent() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
      item.addEventListener("click", () => {
        let id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    let details = new Details(idGame);
    document.querySelector("#game").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
