const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/* 
   GET /
   HOME PAGE WITH PAGINATION
*/
router.get('/', async (req, res) => {
  try {
    const locals = {
      title: "Clinz Blog",
      description: "Entertainment, Music and Memes."
    };

    const perPage = 10;
    const page = parseInt(req.query.page) || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip((page - 1) * perPage)
      .limit(perPage);

    const count = await Post.countDocuments();
    const nextPage = page + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: '/'
    });

  } catch (error) {
    console.log(error);
  }
});


/* 
   GET /post/:id
   SINGLE POST PAGE
*/
router.get('/post/:id', async (req, res) => {
  try {
    const id = req.params.id.trim();
    const data = await Post.findById(id);

    if (!data) return res.status(404).render("404");

    const locals = {
      title: data.title,
      description: "Entertainment, Music and Memes."
    };

    res.render('post', {
      locals,
      data,
      currentRoute: `/post/${id}`
    });

  } catch (error) {
    console.log(error);
  }
});


/* 
   POST /search
 */
router.post('/search', async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "Entertainment, Music and Memes."
    };

    const searchTerm = req.body.searchTerm?.trim() || "";
    const cleaned = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(cleaned, "i") } },
        { body: { $regex: new RegExp(cleaned, "i") } }
      ]
    });

    res.render("search", {
      locals,
      data,
      currentRoute: '/'
    });

  } catch (error) {
    console.log(error);
  }
});


/* 
   GET /about
 */
router.get('/about', (req, res) => {
  res.render('about', {
    currentRoute: '/about'
  });
});


/* 
   GET /contact
*/
router.get('/contact', (req, res) => {
  const locals = {
    title: "Contact",
    description: "Get in touch with us"
  };

  res.render('contact', {
    locals,
    layout: './layouts/main',
    currentRoute: '/contact'
  });
});


/* =
   POST /contact
 */
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form submission:", { name, email, message });

  res.send("Thank you for contacting us!");
});

module.exports = router;
