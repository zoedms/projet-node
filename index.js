import express from 'express';

const APP = express();
const port = 3000;

// API

const url =
  "https://instagram47.p.rapidapi.com/user_posts?username=taneja.gaurav";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
    "X-RapidAPI-Key": "6092b98d37msh5e07c3fcd99d8b8p110db8jsn88a9309ce7ce",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
  


APP.get('/', (req, res) => {

})

APP.listen(3000, () => {
    console.log('le server tourne sur le port 3000')
})