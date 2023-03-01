// Import required libraries
const axios = require('axios');
const express = require('express');
const ejs = require('ejs');

// Initialize express app
const app = express();

// Define an array of Pokemon names or IDs
const pokemonList = ["pikachu", "bulbasaur", "charmander"];

// Route to display the Pokemon data
app.get('/', async (req, res) => {
  // Create an empty array to store the Pokemon data
  const pokemonData = [];

  // Loop through the Pokemon list and make API requests for each one
  for (const pokemon of pokemonList) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(url);
    const data = response.data;
    pokemonData.push({
        name: data.name,
        order: data.order,
        species: data.species.name,
    });
  }

  // Render the EJS view and pass in the Pokemon data
  res.render('home.ejs', { pokemonData });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
  console.log("http://localhost:3000");
});