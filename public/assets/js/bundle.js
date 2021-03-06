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
  /*  console.log(state.containData);
    console.log(state.containData[0].author.name);*/

    /*getJSON('/api/categories/', (err, json) => {

      if (err) { return alert(err.message);}
      state.categories= json;
      //console.log(state.categories);
      const root = $("#root");
      render(root);

    });*/

    const root = $("#root");
    render(root);

  });

  getJSON('/api/categories/', (err, json) => {

    if (err) { return alert(err.message);}
    state.categories= json;
    //console.log(state.categories);
  const root = $("#root");
  render(root);

  });

});
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
'use strict';


const Contain = (update) => {
  const section = $('<section class="container"></section>');
  const main = $('<div class="bloques column-xs-12"></div>');
  const imagenMainPrincipal = $('<figure class="main-principal">' +
    '<img class="img-responsive" src="assets/img/news/' + state.containData[0].img + '" alt="news principal">' +
    '<figcation class="figcap-principal column-sm-9 top__padd"><h1>'+state.containData[0].title+'</h1><p>'+state.containData[0].brief+'</p></figcation></figure>');
  main.append(imagenMainPrincipal);

  let imageMain ='';
  //console.log(state.categories);
  for(let i=1; i<=4; i++){
    main.append(imageMain);
    let clase ='';
    if (i==1){
      clase = "column-sm-6";
    } else {
      clase = "column-sm-3";
    }
    imageMain=$('<div class="main"><figure class="'+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[i].img + '" alt="news">' +
      '<figcation class="figcap">'+state.containData[i].title+'</figcation></figure></div>');
  }

  const mundo = $('<div class="bloques column-xs-12"></div>');
  const titMundo = $('<h2 class="text-uppercase">'+state.categories[1].title+'</h2><hr class="hr-lab">');
  mundo.append(titMundo);
  let imageMundo = '';
  for(let j=4; j<=14; j++){
    mundo.append(imageMundo);
    let clase = '';
    if (j==8 || j ==9){
      clase = "column-sm-6";
    } else {
      clase = "column-sm-3";
    }
    imageMundo=$('<figure class="'+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[j].img + '" alt="news">' +
      '<figcation>'+state.containData[j].title+'</figcation></figure>');
  }

  const tecno = $('<div class="bloques column-xs-12"></div>');
  const titTecno = $('<h2 class="text-uppercase">'+state.categories[2].title+'</h2><hr class="hr-lab">');
  tecno.append(titTecno);
  let imageTecno = '';
  for(let k=14; k<=19; k++){
    tecno.append(imageTecno);
    let clase = '';
    if (k==14 || k==17 || k==18){
      clase = "column-sm-6";
    } else {
      clase = "column-sm-3"
    }
    imageTecno=$('<figure class="'+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="news">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const edu = $('<div class="bloques column-xs-12"></div>');
  const titEdu = $('<h2 class="text-uppercase">'+state.categories[3].title+'</h2><hr class="hr-lab">');
  edu.append(titEdu);
  let imageEdu = '';
  for(let k=19; k<=24; k++){
    edu.append(imageEdu);
    let clase = '';
    if (k==24){
      clase = "column-sm-6"
    } else {
      clase = "column-sm-3"
    }
    imageEdu=$('<figure class="'+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="news">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const opi = $('<div class="bloques column-xs-12"></div>');
  const titOpi = $('<h2 class="text-uppercase">'+state.categories[4].title+'</h2><hr class="hr-lab">');
  opi.append(titOpi);
  let imageOpi = '';
  for(let k=24; k<=28; k++){
    opi.append(imageOpi);
    imageOpi=$('<figure class="column-sm-3"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="news">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const carrousel = $('<div class="bloques column-xs-12"></div>');
  let slide = '';
  for(let k=28; k<=32; k++){
    carrousel.append(slide);
    slide=$('<figure class="column-sm-3"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }


  section.append(main);
  section.append(mundo);
  section.append(tecno);
  section.append(edu);
  section.append(opi);
  section.append(carrousel);


  return section;
};

'use strict';

const Footer = () => {
  const footer = $('<footer class=" container"></footer>');
  const divcon = $('<div class="container-fluid back-lab top__padd"></div>');
  const div = $('<div class="row"></div>');
  const div1 = $('<div class="col-xs-12 col-sm-4 top__flex top__flex--center-column"></div>');
  const logo = $('<img src="assets/img/logo-footer.png">');
  const p1 = $('<p>© Editado por Laboratoria <br> Av. José Pardo #601 Lima 1 Perú <br> Copyright © Laboratoria.la <br> Todos los derechos reservados.</p>');
  const div2 = $('<div class="col-xs-12 col-sm-4 visible-sm visible-md visible-lg"></div>');
  const p2 = $('<p>DIRECTOR GENERAL: <br>Francisco Miró Quesada Cantuarias</p><p>DIRECTOR PERIODÍSTICO: <br>Fernando Berckemeyer Olaechea</p><p>SUSCRIPCIONES: <br>suscriptores@comercio.com.pe</p><p>PUBLICIDAD ONLINE: <br>fonoavisos@comercio.com.pe</p><p>CLUB EL COMERCIO: <br>clubelcomercio@comercio.com.pe<br>Compromiso de Autorregulación Comercial</p>');
  const div3 = $('<div class="col-xs-12 col-sm-4 visible-sm visible-md visible-lg"></div>');
  const p3 = $('<p>TÉRMINOS Y CONDICIONES DE USO</p><p>TRABAJA CON NOSOTROS</p><p>LIBRO DE RECLAMACIONES</p><p>SEDES PRINCIPALES</p><p>POLÍTICAS DE PRIVACIDAD</p>');
  const footSocial = $('<ul class="list-inline">SÍGUENOS: </ul>');
  const fb= $('<li><a href="#"><img class="imagen__decolorada" src="assets/img/fb.png" alt="facebook"></a></li>');
  const tw = $('<li><a href=#><img class="imagen__decolorada" src="assets/img/tw.png" alt="twitter"></a></li>');
  const din = $('<li><a href="#"><img class="imagen__decolorada" src="assets/img/in.png" alt="linkedin"></a></li>');

  footer.append(divcon);
  divcon.append(div);
  div.append(div1);
  div.append(div2);
  div.append(div3);
  div1.append(logo);
  div1.append(p1);
  div2.append(p2);
  div3.append(p3);
  div3.append(footSocial);
  footSocial.append(fb);
  footSocial.append(tw);
  footSocial.append(din);


  return footer;
};
'use strict';

const Header = (update) => {

  //Fecha
  const months = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  const days = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  let f = new Date();
  let today= days[f.getDay()] + ", " + f.getDate() + " de " + months[f.getMonth()] + " de " + f.getFullYear();


  const header = $('<header class="container"></header>');

  const divTop = $('<div class="top top__border--bot top__marg visible-md visible-lg"></div>');
  const topSearch = $('<div class="pull-left"></div>');
  const menu = $('<div class="inline"><img class="inline" src="assets/img/menu.png" alt="menu"><p class="text-uppercase inline">sections</p></div>');
  const search = $('<div class="inline"><img class="inline" src="assets/img/search.png" alt="search"><p class="text-uppercase inline">search</p></div>');
  const topSocial = $('<ul class="list-inline pull-right"></ul>');
  const fb= $('<li><a href="#"><img src="assets/img/fb.png" alt="facebook"></a></li>');
  const tw = $('<li><a href=#><img src="assets/img/tw.png" alt="twitter"></a></li>');
  const din = $('<li><a href="#"><img src="assets/img/in.png" alt="linkedin"></a></li>');

  const divLogo = $('<div class="text-center"></div>');
  const logo = $('<img class="img-responsive center-block" src="assets/img/logoicon.png" alt="logo">');
  const date = $('<div class="top__padd visible-md visible-lg">'+today+' | <img src="assets/img/cloud.png" alt="weather"> 22°</div>');

  const nav = $('<ul class="list-inline back-lab top__padd text-center top__flex top__flex--around hidden-xs hidden-sm"></ul>');
  const details = $('<li class="">Lo último</li><li>Opinión</li><li>Cultura</li><li>Tecnología</li><li>Mundo</li><li>Economía</li><li>Lifestyle</li><li>Deporte</li>');

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


  //console.log(state.containData);


  return header;





};