'use strict';
const render = (root) => {

  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  const update = ()=> {
    render(root);
  };

  wrapper.append(Header(update));
  wrapper.append(Contain(update));
  wrapper.append(Footer(update));

  root.append(wrapper);

};

const state = {
  containData: null,
  news: null,
  categories: null
};

$(_ => {

  getJSON('/api/news/', (err, json) => {

    if (err) { return alert(err.message);}
    state.containData = json;
  });

  getJSON('/api/categories/', (err, json) => {

    if (err) { return alert(err.message);}
    state.categories= json;
  });
  const root = $("#root");
  render(root);
});
'use strict';


const Contain = (update) => {
  const section = $('<section></section>');
  const main = $('<div></div>');
  const image0 = $('<div><<img src="assets/img/' + + '" alt=""></div>');
  const image1 = $('<div></div>');
  const image2 = $('<div></div>');
  const image3 = $('<div></div>');

  const mundo = $('<div></div>');
  const image4 = $('<div></div>');
  const image5 = $('<div></div>');
  const image6 = $('<div></div>');
  const image7 = $('<div></div>');
  const image8 = $('<div></div>');
  const image9 = $('<div></div>');
  const image10 = $('<div></div>');
  const image11 = $('<div></div>');
  const image12 = $('<div></div>');
  const image13 = $('<div></div>');

  const tecno = $('<div></div>');

  const image14 = $('<div></div>');


  const edu = $('<div></div>');
  const opi = $('<div></div>');

  section.append(main);
  section.append(mundo);
  section.append(tecno);
  section.append(edu);
  section.append(opi);

  main.append(image0);
  main.append(image1);
  main.append(image2);
  main.append(image3);

  mundo.append(image4);
  mundo.append(image5);
  mundo.append(image6);
  mundo.append(image7);
  mundo.append(image8);
  mundo.append(image9);
  mundo.append(image10);
  mundo.append(image11);
  mundo.append(image12);
  mundo.append(image13);
  mundo.append(image14);



  console.log(state.containData);




  return section;
};

'use strict';

const Header = (update) => {
  const header = $('<header class="container-fluid"></header>');

  const divTop = $('<div class="top top__border--bot top__marg"></div>');
  const topSearch = $('<div class="pull-left"></div>');
  const menu = $('<div class="inline"><img class="inline" src="assets/img/menu.png" alt="menu"><p class="text-uppercase inline">sections</p></div>');
  const search = $('<div class="inline"><img class="inline" src="assets/img/search.png" alt="search"><p class="text-uppercase inline">search</p></div>');
  const topSocial = $('<ul class="list-inline pull-right"></ul>');
  const fb= $('<li><a href=""><img src="assets/img/fb.png" alt="facebook"></a></li>');
  const tw = $('<li><a href=""><img src="assets/img/tw.png" alt="twitter"></a></li>');
  const din = $('<li><a href=""><img src="assets/img/in.png" alt="linkedin"></a></li>');

  const divLogo = $('<div class="text-center"></div>');
  const logo = $('<img class="img-responsive center-block" src="assets/img/logoicon.png" alt="logo">');
  const date = $('<div class="top__padd">Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png" alt="weather"> 22°</div>');

  const nav = $('<ul class="list-inline back-lab top__padd text-center "></ul>');
  const details = $('<li>Lo último</li><li>Opinión</li><li>Cultura</li><li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li>');

  header.append(divTop);
  header.append(divLogo);
  header.append(nav);
  divTop.append(topSearch);
  divTop.append(topSocial);
  topSearch.append(menu);
  topSearch.append(search);
  topSocial.append(fb);
  topSocial.append(tw);
  topSocial.append(din);
  divLogo.append(logo);
  divLogo.append(date);
  nav.append(details);

  return header;
  update();

};
'use strict';

const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};