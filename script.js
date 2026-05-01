// render projects
const container = document.getElementById("projects") || document.getElementById("projectList");

if (container) {
  projects.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.title}</h3>
      </div>
    `;
  });
}

// render gallery
const gallery = document.getElementById("gallery");
if (gallery) {
  projects.forEach(p => {
    gallery.innerHTML += `<img src="${p.image}" class="gallery-img">`;
  });
}