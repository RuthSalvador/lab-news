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