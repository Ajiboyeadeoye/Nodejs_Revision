const express = require("express");

const app = express();


// regster vew engine
app.set("view engine", "ejs");
// listening for request
app.listen(3000);

app.get("/", (req, res) => {
    const blogs = [
    { title : "Yoshi fnds eggs", snippet: "Lorem ipsum dolor sit among the orator"},
    { title : "Kenny fnds yam", snippet: "Lorem ipsum dolor sit among the orator"},
    { title : "Adeoye finds rice", snippet: "Lorem ipsum dolor sit among the orator"}
    ];
    //res.send('<p>Home page</p>')
    //res.sendFile("./views/index.html", { root: __dirname})
    // Now rendering
    res.render("index", { title: "Home", blogs});
});


app.get("/about", (req, res) => {
    //res.send('<p>About page</p>')
    //res.sendFile("./views/about.html", { root: __dirname})
    res.render("about", { title: "About"});

})


// redirect
// app.get("/about-us", (req, res) => {
//     res.redirect("/about")
// })

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "New blog"});
})

app.use((req, res) => {
    //res.send('<p>About page</p>')
    //res.status(404).sendFile("./views/404.html", { root: __dirname})
    res.status(404).render("404", { title: "404"});

});

