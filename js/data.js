/**
 * Main JSON object of posts, pages and settings
 */
const posts = [
    {
      id: 1,
      date: "2016-01-09T22:05:09",
      modified: "2016-01-09T22:05:09",
      slug: "hello-world",
      type: "posts",
      title: "Hello world!",
      content:
        "Welcome to my Pure Vanilla Single Page App. Hope you enjoy your stay! :)",
    },
    {
      id: 2,
      date: "2016-01-10T22:05:09",
      modified: "2016-01-10T22:05:09",
      slug: "javascript",
      type: "posts",
      title: "Learning JavaScript!",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      id: 3,
      date: "2016-01-11T22:05:09",
      modified: "2016-01-11T22:05:09",
      slug: "spa",
      type: "posts",
      title: "Single Page Application",
      content:
        "A single-page application (SPA) is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages",
    },
    {
      id: 4,
      date: "2016-01-12T22:05:09",
      modified: "2016-01-12T22:05:09",
      slug: "mvc",
      type: "posts",
      title: "MVC - Model, View, Controller",
      content:
        "Model–view–controller (usually known as MVC) is a software design pattern, commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user",
    },
    {
      id: 5,
      date: "2016-01-13T22:05:09",
      modified: "2016-01-13T22:05:09",
      slug: "dom",
      type: "posts",
      title: "Document Object Model",
      content:
        "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure where in each node is an object representing a part of the document. The DOM represents a document with a logical tree.",
    },
  ],
  jsonData = JSON.stringify(posts);
