/**
 * Model file for working with data
 */

const model = {};

model.init = () => {
  model.updateLocalStore(jsonData);
};

model.getPosts = () => {
  let posts = model.getLocalStore();
  return posts;
};

model.getPost = (slug) => {
  let posts = model.getLocalStore();

  for (let i = 0; i < posts.length; i++) {
    if (slug === posts[i].slug) {
      return posts[i];
    }
  }
  return null;
};

model.getLocalStore = () => {
  return JSON.parse(localStorage.getItem("mySpa"));
};

model.updateLocalStore = (store) => {
  localStorage.setItem("mySpa", store);
};

model.removeLocalStore = () => {
  localStorage.removeItem("mySpa");
};
