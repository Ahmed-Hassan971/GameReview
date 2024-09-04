export class Ui {
  displayGame(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
          
                  <div class="col-md-6 col-lg-4 col-xl-3">
                      <div data-id="${
                        data[i].id
                      }" class="card card h-100 bg-transparent">
                          <div class="card-body">
                              <img src="${
                                data[i].thumbnail
                              }" class="card-img-top w-100 mb-3" alt="...">
                              <div class="card-title d-flex justify-content-between align-items-center">
                                  <h3 class="h6 small mb-0 text-white">${
                                    data[i].title
                                  }</h3>
                                  <span class="badge text-bg-primary p-2">Free</span>
                              </div>
                              <div class="card-desc">
                                  <p class="card-text small text-center opacity-50">
                                  ${data[i].short_description.split(" ", 8)}
                                   </p>
                              </div>
                          </div>
                          <div class="card-footer d-flex justify-content-between">
                              <a href="#" class="badge  text-decoration-none">${
                                data[i].genre
                              }</a>
                              <a href="#" class="badge text-white text-decoration-none">${
                                data[i].platform
                              }</a>
                            </div>
                        </div>
                  </div>
              
          `;
    }

    document.getElementById("game-date").innerHTML = gamesBox;
  }

  displayDetails(data) {
    const content = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
       <h3>Title: ${data.title}</h3>
       <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
       <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
       <p class="small">${data.description}</p>
       <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
    </div>
       
       `;

    document.getElementById("detailsContent").innerHTML = content;
  }
}
