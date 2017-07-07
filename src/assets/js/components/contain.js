'use strict';


const Contain = (update) => {
  const section = $('<section class="container"></section>');
  const main = $('<div></div>');
  let imageMain ='';
  //console.log(state.categories);
  for(let i=0; i<=4; i++){
    main.append(imageMain);
    imageMain=$('<div><img class="img-responsive" src="assets/img/news/' + state.containData[i].img + '" alt=""></div>');
  }

  const mundo = $('<div></div>');
  let imageMundo = '';
  for(let j=5; j<=14; j++){
    mundo.append(imageMundo);
    imageMundo=$('<div><img class="img-responsive" src="assets/img/news/' + state.containData[j].img + '" alt=""></div>');
  }

  const tecno = $('<div></div>');




  const edu = $('<div></div>');
  const opi = $('<div></div>');

  section.append(main);
  section.append(mundo);
  section.append(tecno);
  section.append(edu);
  section.append(opi);







  return section;
};
