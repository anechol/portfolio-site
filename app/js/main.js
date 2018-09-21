const projects = [
  {
    title: "name",
    description: "description",
    image: "image",
    imageAlt: "imagealt",
    tags: ["tag1", "tag2", "tag3"]
  },
  {
    title: "name",
    description: "description",
    image: "image",
    imageAlt: "imagealt",
    tags: ["tag1", "tag2", "tag3", "tag4"]
  },
  {
    title: "name",
    description: "description",
    image: "image",
    imageAlt: "imagealt",
    tags: ["tag1", "tag2"]
  }
];

const renderWork = () => {
  let markup = `<div class='container'>
                  <div class='row'>
                    <div class='title twelve columns-sm'>
                      <h2>Projects</h2>
                    </div>`;
  
  projects.forEach(el => {

    function getListItem() {
      let markup = '';
      for (let i = 0; i < el.tags.length; i++) {
        markup+= "<li>" + el.tags[i] + "</li>";
      }
      return markup;
    }

    markup += `
    <div class="box">
      <h4>Title: ${el.title}</h4>
      <img src=${el.image} alt=${el.imageAlt}>
      <p>Description: ${el.description}</p>
      <ul class='tags'>
        ${getListItem()}
      </ul>
    </div>
    `
  });  

  markup += `</div></div>`

  document.getElementById("work").innerHTML = markup;
}

const getYear = () => {
  let currYear = new Date().getFullYear();
  document.getElementById('year').innerHTML = `&copy; ${currYear} Ashley Echols`;
}

function init() {
  renderWork();
  getYear();
}

init();
