import specimens1 from '../img/work/specimens1.png';
import specimens2 from '../img/work/specimens2.png';
import specimens3 from '../img/work/specimens3.png';
import kellogg1 from '../img/work/kellogg1.png';
import kellogg2 from '../img/work/kellogg2.png';
import pcbasics1 from '../img/work/pcbasics1.png';
import pcbasics2 from '../img/work/pcbasics2.png';
import pcbasics3 from '../img/work/pcbasics3.png';

const projects = [
  {
    title: "Specimens Monologues",
    info: "Winner of three awards at the Cannes Lions International Festival of Creativity 2018, Specimens Monologues was a project for the Chicago Field Museum of Natural History that emulated museum audio guides, but with a hilarious twist.",
    duties: "Under the guidance of a senior developer, I, with a fellow intern, was tasked with creating the entire application using Create React App. We teamed up with pair programming to ensure the app utilized HTML5 audio as well as seemlessly transitioned between views.",
    image: [
      specimens1,
      specimens2,
      specimens3
    ],
    imageAlt: [
      "Specimens Home Page",
      "List of Specimens",
      "Monologue Text Overlay"
    ],
    tags: ["HTML5/CSS3", "Sass", "JavaScript", "React"]
  },
  {
    title: "Kellogg's",
    info: "Kellogg's offers a variety of websites showcasing their products for kids and adults to enjoy and buy.",
    duties: "I was responsible for making content and styling updates to various Kellogg's websites through Adobe's CMS, Adobe Experience Manager. I've touched sites including: Eggo Waffles, Rice Krispies, Frosted Mini Wheats, Special K, and others.",
    image: [
      kellogg1,
      kellogg2
    ],
    imageAlt: [
      "Rice Krispies Home Page",
      "Eggo Waffles Home Page"
    ],
    tags: ["CSS3", "Sass", "CMS", "Adobe Experience Manager"]
  },
  {
    title: "Intel PC Basics",
    info: "This Intel project was created as a Vue microsite to help those new to PCs understand the basics of PC part usage.",
    duties: "I worked with a senior developer who built out the structure of the microsite. I was tasked with styling the entire project as well as handling the graph animations on the Processors page.",
    image: [
      pcbasics1,
      pcbasics2,
      pcbasics3
    ],
    imageAlt: [
      "Intel PC Basics Home Page",
      "PC Parts List",
      "Processor Comparison Graph",
    ],
    tags: ["HTML5/CSS3", "CSS Animations", "JavaScript", "Vue"]
  }
];

const renderWork = () => {
  let markup = `<div class='container'>
                  <div class='row'>
                    <div class='title twelve columns-sm'>
                      <h2>Projects</h2>
                    </div>
                    <div class='flexbox twelve columns-sm'>`;
  
  projects.forEach(el => {

    function getImages() {
      let markup = '';
      for (let i = 0; i < el.image.length; i++) {
        markup+= `<img src=${el.image[i]} alt='${el.imageAlt[i]}'/>`
      }
      return markup;
    }

    function getListItem() {
      let markup = '';
      for (let i = 0; i < el.tags.length; i++) {
        markup+= `<li>${el.tags[i]}</li>`;
      }
      return markup;
    }

    markup += `
    <div class="item">
      <h4>${el.title}</h4>
      ${getImages()}
      <div class='info'>
        <p><strong>The Project:</strong> ${el.info}</p>
        <p><strong>Responsibilities:</strong> ${el.duties}</p>
        <ul class='tags'>
          ${getListItem()}
        </ul>
      </div>
    </div>
    `
  });  

  markup += `</div></div></div>`

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
