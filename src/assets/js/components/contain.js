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
    imageMain=$('<div class="main"><figure class="column-xs-12 '+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[i].img + '" alt="news">' +
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
    imageMundo=$('<figure class="column-xs-12 '+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[j].img + '" alt="news">' +
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
    imageTecno=$('<figure class="column-xs-12 '+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="news">' +
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
    imageEdu=$('<figure class="column-xs-12 '+clase+'"><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="news">' +
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
