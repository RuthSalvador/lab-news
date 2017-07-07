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