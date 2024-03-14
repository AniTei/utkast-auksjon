//listings on the landingpage are searchable

/* 
GET
/auction/listings/search?q=<query>
Search for listings by their title or description properties. */

import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";
const url = baseURL + allListings;


const input = document.querySelector("input");
const listingsContainer = document.querySelector(
  ".listings-container"
);

listingsContainer.innerHTML = `<p>hei</p>`;

input.onkeyup = function harvestValue(event) {
  event.preventDefault();

  console.log("input:", input.value);

  const criterium = input.value;
  console.log("criterium:", criterium);

  filterListings(criterium);

  searchTitle.style.display = "block";
};

async function filterListings(kriterium) {
  console.log("Kriterium:", kriterium);

  const listings = await getData(url);

  console.log("why cant this be filtered?:", listings.data);

  // make new array from data gotten
  const filteredListings = listings.data.filter(function (listing) {
    if (listing.title.startsWith(kriterium)) {
      return true;
    }
  });

  console.log("filteredListings:", filteredListings);

  displayData(filteredListings);
}

filterListings();

const searchTitle = document.querySelector(".search-title");

async function displayData(value) {
  try {
    console.log("filteredListings in dispay function:", value);

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < value.length; i++) {
      listingsContainer.innerHTML += `<div
          class="card m-3 card col-12 col-sm-6 col-lg-4"
          style="width: 18rem">
          <img
            src="${value[i].media[0].url}"
            class="card-img-top"
            alt="${value[i].media[0].alt}"
          />
          <div class="card-body">
            <h5 class="card-title">${value[i].title}</h5>
            <p class="card-text"> ${value[i].description}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Bids: ${value[i]._count.bids}</li>
            <li class="list-group-item">Deadline: ${value[i].endsAt}</li>
          </ul>
          <div class="card-body">
            <a href="html/listing.html?id=${value[i].id}" class="card-link">open</a>
          </div>
        </div>`;
    }
  } catch {}
}




// bruke dataene fra get data, filter the array, criterium: input in search

// se på hva du gjorde i js2 ca?


// det er noe rart med antallet i array

// https://content.noroff.dev/javascript-1/single-api-results.html

// konklusjon onsdag kveld: jeg kan filtrere objectene som dukker opp,
// men hvordan får jeg det til å gjelde alle objectene i array
