/**
 * Router file for managing url changes
 */

const router = {};

// initialize the router
router.init = () => {
  router.loadContent();
  router.listenPageChange();
};

// get slug from url
router.getSlug = () => {
  let slug = window.location.hash;

  if ("" === slug) {
    return null;
  } else {
    return slug.substring(1);
  }
};

// listener function for url changes
router.listenPageChange = () => {
  window.addEventListener("hashchange", router.loadContent, false);
};

// determine what to load in the view
router.loadContent = () => {
  let slug = router.getSlug();

  view.clearContent();

  if (null === slug) {
    view.loadBlogPosts();
  } else {
    view.loadBlogPost(slug);
  }
};
