import express from "express";
import fetch from "node-fetch";

const APP = express();
const port = 3000;

// API

// function search(nom, nbr) {
//   const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${nom}&count=${nbr}`;

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
//       "X-RapidAPI-Key": "6092b98d37msh5e07c3fcd99d8b8p110db8jsn88a9309ce7ce",
//     },
//   };
//   return url
// //   fetch(url, options).then((res) => res.json());
// };

APP.get("/", (req, res) => {
  function search(nom, nbr) {
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${nom}&count=${nbr}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        "X-RapidAPI-Key": "6092b98d37msh5e07c3fcd99d8b8p110db8jsn88a9309ce7ce",
      },
    };
    fetch(url, options).then((res) => res.json())
    .then(json =>{
            res.send(json)
            console.log(json)
    })
	.catch(err => console.error('error:' + err));
  }
  search('chat', '10')
});

APP.listen(3000, () => {
  console.log(
    "Le serveur tourne sur le port 3000 et je ne trouve pas d'API, car aucune ne fonctionne, c'est génial"
  );
});
