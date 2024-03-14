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

    listingContainer.innerHTML = `<div class="card d-flex justify-content-center " style="width:28rem">
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

/* _______________DISPLAY BIDS_____________________ */

console.log(url);

import { bids } from "./endpoints.mjs";

const urlBids = url + bids;
console.log(urlBids);

const bidsContainer = document.querySelector(".bids-container");


async function displayBids() {
  const value = await getData(urlBids);
  console.log("displayBids value:", value.data.bids);
  
  bidsContainer.innerHTML = "";

  for (let i = 0; i < value.data.bids.length; i++) {
  
    bidsContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${value.data.bids[i].bidder.name}</div>
        <p>Created: ${value.data.bids[i].created} </p>
      </div>
      <span class="badge text-bg-primary rounded-pill">${value.data.bids[i].amount} €</span>
    </li>`;
  }
};

displayBids();

// https://v2.api.noroff.dev/auction/listings?_seller=true


/* 
<ol class="list-group list-group-numbered col-md-8 col-lg-6">

<li
  class="list-group-item d-flex justify-content-between align-items-start"
>
  <div class="ms-2 me-auto">
    <div class="fw-bold">Josephineee97</div>
    Content for list item
  </div>
  <span class="badge text-bg-primary rounded-pill">1000 nok</span>
</li>
<li
  class="list-group-item d-flex justify-content-between align-items-start"
>
  <div class="ms-2 me-auto">
    <div class="fw-bold">hello_marshmellow</div>
    Content for list item
  </div>
  <span class="badge text-bg-primary rounded-pill">687 nok</span>
</li> */
