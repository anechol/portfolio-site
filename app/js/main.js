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
    <div>
      <h4>Title: ${el.title}</h4>
    </div>
    <img src=${el.image} alt=${el.imageAlt}>
    <div>
      <p>Description: ${el.description}</p>
    </div>
    <ul class='tags'>
      ${getListItem()}
    </ul>
    `
  });  

  markup += `</div></div>`

  document.getElementById("work").innerHTML = markup;
}

renderWork();