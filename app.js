const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogsRoutes");



const app = express();

const { dbURL, dbURL1 } = process.env;

// connect to database
const connectTodb = async () => {
    try {
     await mongoose.connect(dbURL1, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected to db")
    }catch (error){
        throw Error ("unable to connect to db")
    }
    // listening for request
    app.listen(3000);
};

connectTodb();
// regster vew engine
app.set("view engine", "ejs");


// app.use((req, res, next) => {
//     console.log("New request made:");
//     console.log("host:", req.hostname);
//     console.log("path:", req.path);
//     console.log("method:", req.method);

//     next();
// });
// middleware and static files
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog 2",
//         snippet: "about my new blog",
//         body: "More about my new blog"
//     });
//     blog.save()
//        .then((result) => {
//         res.send(result);
//        })
//        .catch((err) => {
//         console.log(err);
//        });
// });

// app.get("/all-blogs", async (req, res) => {
//     let allBlogs;
//     try {
//         allBlogs = await Blog.find();
//     } catch (err) {
//         throw err;
//     }
//      res.send(allBlogs);
// });

// app.get("/single-blog", (req, res) => {
//     Blog.findById("687cee73e49a70ac1f63b585")
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

app.get("/", (req, res) => {
   res.redirect("/blogs")
});

// app.use((req, res, next) => {
//     console.log("In the next middleware");

//     next();
// });


app.get("/about", (req, res) => {
    //res.send('<p>About page</p>')
    //res.sendFile("./views/about.html", { root: __dirname})
    res.render("about", { title: "About"});

})

// blog routes
app.use('/blogs', blogRoutes);

// redirect
// app.get("/about-us", (req, res) => {
//     res.redirect("/about")
// })



//  const blogs = [
//     { title : "Yoshi fnds eggs", snippet: "Lorem ipsum dolor sit among the orator"},
//     { title : "Kenny fnds yam", snippet: "Lorem ipsum dolor sit among the orator"},
//     { title : "Adeoye finds rice", snippet: "Lorem ipsum dolor sit among the orator"}
//     ];
//     //res.send('<p>Home page</p>')
//     //res.sendFile("./views/index.html", { root: __dirname})
//     // Now rendering
//     res.render("index", { title: "Home", blogs});


app.use((req, res) => {
    //res.send('<p>About page</p>')
    //res.status(404).sendFile("./views/404.html", { root: __dirname})
    res.status(404).render("404", { title: "404"});

});

