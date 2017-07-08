'use strict';


const Contain = (update) => {
  const section = $('<section class="container"></section>');
  const main = $('<div></div>');
  const imagenMainPrincipal = $('<figure>' +
    '<img class="img-responsive" src="assets/img/news/' + state.containData[0].img + '" alt="">' +
    '<figcation><p>'+state.containData[0].title+'</p><p>'+state.containData[0].brief+'</p></figcation></figure>');
  main.append(imagenMainPrincipal);

  let imageMain ='';
  //console.log(state.categories);
  for(let i=1; i<=4; i++){
    main.append(imageMain);
    imageMain=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[i].img + '" alt="">' +
      '<figcation>'+state.containData[i].title+'</figcation></figure>');
  }

  const mundo = $('<div></div>');
  const titMundo = $('<h2 class="text-uppercase">'+state.categories[1].title+'</h2><hr>');
  mundo.append(titMundo);
  let imageMundo = '';
  for(let j=4; j<=13; j++){
    mundo.append(imageMundo);
    imageMundo=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[j].img + '" alt="">' +
      '<figcation>'+state.containData[j].title+'</figcation></figure>');
  }

  const tecno = $('<div></div>');
  const titTecno = $('<h2 class="text-uppercase">'+state.categories[2].title+'</h2><hr>');
  tecno.append(titTecno);
  let imageTecno = '';
  for(let k=13; k<=18; k++){
    tecno.append(imageTecno);
    imageTecno=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const edu = $('<div></div>');
  const titEdu = $('<h2 class="text-uppercase">'+state.categories[3].title+'</h2><hr>');
  edu.append(titEdu);
  let imageEdu = '';
  for(let k=18; k<=24; k++){
    edu.append(imageEdu);
    imageEdu=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const opi = $('<div></div>');
  const titOpi = $('<h2 class="text-uppercase">'+state.categories[4].title+'</h2><hr>');
  opi.append(titOpi);
  let imageOpi = '';
  for(let k=24; k<=27; k++){
    opi.append(imageOpi);
    imageOpi=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="">' +
      '<figcation>'+state.containData[k].title+'</figcation></figure>');
  }

  const carrousel = $('<div></div>');
  let slide = '';
  for(let k=27; k<=32; k++){
    carrousel.append(slide);
    slide=$('<figure><img class="img-responsive" src="assets/img/news/' + state.containData[k].img + '" alt="">' +
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
