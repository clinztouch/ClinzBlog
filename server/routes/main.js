const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



// GET
//  HOME

router.get('', async (req, res) =>{ 
 try {
  const locals = {
    title: "Clinz Blog",
    description: "Entertainment, Music and Memes."
   }

let perPage = 10
let page = req.query.page || 1; 

const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ] )
.skip(perPage * page - perPage)
.limit(perPage)
.exec();

const count = await Post.countDocuments({});
const nextPage = parseInt(page) + 1;
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
   
// router.get('', async (req, res) => {
//   const locals = {
//     title: "NodeJs Blog",
//     description: "Simple Blog created with NodeJs, Express & MongoDb."
//   }

//   try {
//     const data = await Post.find();
//     res.render('index', { locals, data });
//   } catch (error) {
//     console.log(error);
//   }

// });





// GET
//  Post :id
router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id.trim();

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Entertainment, Music and Memes.",
       currentRoute: `/post/${slug}`
    }
  
    res.render('post', { 
      locals, 
      data,
      currentRoute: `/post/${slug}`
    });
  } catch (error) {
    console.log(error);
  }

});

 
// GET
//  Post : searchTerm 

router.post('/search', async (req, res) => {
 
  try {
    const locals = {
      title: "Search",
      description: "Entertainment, Music and Memes."
    }

    let searchTerm =req.body.searchTerm.trim();
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")
    

    const data = await Post.find({
      $or: [
        {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
        {body: {$regex: new RegExp(searchNoSpecialChar, 'i')}}
      ]
  });

    res.render("search", {
      data,
      locals,
      currentRoute: '/'
    });
 
  } catch (error) {
    console.log(error);
  }

});



router.get('/about',(req, res) =>{
    res.render('about', {
       currentRoute : '/about'

});
  }); 




  //GET
//contact
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
  
  //POST
//contact
  router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact form submission:", { name, email, message });
    // TODO: send email or save to DB
    res.send("Thank you for contacting us!");
  });
  


  module.exports = router;







 