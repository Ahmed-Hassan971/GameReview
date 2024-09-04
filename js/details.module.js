import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    let btn = document.querySelector("#btnClose");
    let games = document.querySelector("#game");
    let details = document.querySelector(".details");
    btn.addEventListener("click", () => {
      games.classList.remove("d-none");
      details.classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(idGames) {
    let loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    let options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
      options
    );
    let response = await api.json();
    console.log(response);
    this.ui.displayDetails(response);
    console.log(this.ui.displayDetails(response));
    loading.classList.add("d-none");
  }
}
