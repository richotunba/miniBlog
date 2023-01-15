const express = require("express");

//express app
const app = express();

//to register engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

// for index
app.get("/", (req, res) => {
  const blogs = [
    { title: "The New Era Tech", snippet: "The Technological advantages" },
    { title: "The internet legit", snippet: "The ways and its functions" },
    {
      title: "The scams and the fraud",
      snippet: "The Hunter becomes the hunted",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

//for about
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

//for contact
app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

//for redirect page
//app.get('/about-us', (req, res) => {
//res.redirect('about')
//});
//for create
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create a new blog" });
});
//for 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
