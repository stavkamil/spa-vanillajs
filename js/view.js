/**
 * View file for displaying content
 */

const view = {};

// Call initial methods
view.init = () => {};

// Get blog posts and append
view.loadBlogPosts = () => {
  let posts = model.getPosts();
  let postsMarkup = document.createDocumentFragment();
  let primaryContentEl = helpers.getPageContentEl();

  for (let i = 0, max = posts.length; i < max; i++) {
    postsMarkup.appendChild(view.createPostMarkup(posts[i]));
  }

  primaryContentEl.appendChild(postsMarkup);
};

// Load a single blog post
view.loadBlogPost = (slug) => {
  let post = model.getPost(slug);
  let titleEl = helpers.getPageTitleEl();
  let contentEl = helpers.getPageContentEl();

  titleEl.innerHTML = post.title;
  contentEl.innerHTML = post.content;
};

// Create the markup for blog posts
view.createPostMarkup = (post) => {
  let articleEl = document.createElement("article");
  let titleEl = document.createElement("h3");
  let titleLink = document.createElement("a");
  let titleText = document.createTextNode(post.title);
  let contentEl = document.createElement("div");

  titleLink.appendChild(titleText);
  titleLink.href = `#${post.slug}`;
  titleEl.appendChild(titleLink);

  contentEl.appendChild(document.createTextNode(post.content));

  articleEl.appendChild(titleEl);
  articleEl.appendChild(contentEl);

  return articleEl;
};

// clears title and main content
view.clearContent = () => {
  let titleEl = helpers.getPageTitleEl();
  let contentEl = helpers.getPageContentEl();

  titleEl.innerHTML = "";
  contentEl.innerHTML = "";
};
