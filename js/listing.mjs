// can open a specific listing on seperate page

// build the endpoint

import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const listingContainer = document.querySelector(".listing-container");

const url = baseURL + allListings + id;
console.log(url);

/* getData(url);*/

/* displayLitings()?? */

///ooops no need for loop here
async function displayData() {
  try {
    const value = await getData(url);
    console.log("value in display func:", value);

    console.log(value.data.title);

    listingContainer.innerHTML = "";

    listingContainer.innerHTML = `<div class="card d-flex justify-content-center">
          <img
            src="${value.data.media[0].url}"
            class="card-img-top"
            alt="${value.data.media[0].alt}"
          />
          <div class="card-body">
            <h5 class="card-title">${value.data.title}</h5>
            <p class="card-text">
            ${value.data.description}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Bids: ${value.data._count.bids}</li>
            <li class="list-group-item">Deadline: ${value.data.endsAt}</li>
          </ul>
        </div>`;
  } catch {}
}



displayData();
