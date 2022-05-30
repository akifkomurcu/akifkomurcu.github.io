import projects from "./projects.json" assert { type: "json" };

const main = document.querySelector('.Projects');

function set() {
    projects.map((project) => (
        main.innerHTML +=
        `<div class="card col-xs-6 col-sm-4 col-lg-4">
        <img
          class="card-img-top"
          src="${project.img}"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">
          ${project.title}
          </p>
          <a target="_blank"
            href="${project.link}"
            class="btn btn-primary"
            >Examine (live)</a>
        </div>`
    ))

}
set()
