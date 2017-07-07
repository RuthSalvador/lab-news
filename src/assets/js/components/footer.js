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