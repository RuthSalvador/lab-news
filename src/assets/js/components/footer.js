'use strict';

const Footer = () => {
  const footer = $('<footer class=" container"></footer>');
  const divcon = $('<div class="container-fluid back-lab"></div>');
  const div = $('<div class="row"></div>');
  const div1 = $('<div class="col-xs-12 col-sm-4"></div>');
  const logo = $('<img src="assets/img/logo-footer.png">');
  const p1 = $('<p>© Editado por Laboratoria</p><p>Av. José Pardo #601 Lima 1 Perú</p><p>Copyright © Laboratoria.la</p><p>Todos los derechos reservados.</p>');
  const div2 = $('<div class="col-xs-12 col-sm-4"></div>');
  const p2 = $('<p>DIRECTOR GENERAL: <br>Francisco Miró Quesada Cantuarias</p><p>DIRECTOR PERIODÍSTICO: <br>Fernando Berckemeyer Olaechea</p><p>SUSCRIPCIONES: <br>suscriptores@comercio.com.pe</p><p>PUBLICIDAD ONLINE: <br>fonoavisos@comercio.com.pe</p><p>CLUB EL COMERCIO: <br>clubelcomercio@comercio.com.pe<br>Compromiso de Autorregulación Comercial</p>');
  const div3 = $('<div class="col-xs-12 col-sm-4"></div>');
  const p3 = $('<p>TÉRMINOS Y CONDICIONES DE USO</p><p>TRABAJA CON NOSOTROS</p><p>LIBRO DE RECLAMACIONES</p><p>SEDES PRINCIPALES</p><p>POLÍTICAS DE PRIVACIDAD</p>')

  footer.append(divcon);
  divcon.append(div);
  div.append(div1);
  div.append(div2);
  div.append(div3);
  div1.append(logo);
  div1.append(p1);
  div2.append(p2);
  div3.append(p3);

  return footer;
};