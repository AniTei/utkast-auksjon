// get the objects
// display them, how many? 12?
// be able to open them in diff page

const listingsContainer = document.querySelector(".listings-container");
listingsContainer.innerHTML = `<p>hei</p>`;

import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";

const numberOfPosts = "12";

const limit = "?limit=" + numberOfPosts;

console.log ("limit:" , limit)
const url = baseURL + allListings + limit;

console.log("url:" , url)

// når jeg trykker opdaterknappen blir listings content borte


// https://docs.noroff.dev/docs/v2/pagination-sorting


/* JavaScript passes a value from a function back to the code that called it 
by using the return statement. The value to be returned is specified in the return. 
That value can be a constant value, a variable, 
or a calculation where the result of the calculation is returned. */

// https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function

// this one is helpful
// https://www.youtube.com/watch?v=4t8Q_YLpuKw

async function displayData() {
  try {
    const value = await getData(url);

    const value2 = value.data;

    console.log("dispayData function, value2", value2)

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < value2.length; i++) {

      listingsContainer.innerHTML += `<div
        class="card m-3 card col-12 col-sm-6 col-lg-4"
        style="width: 18rem">
        <img
          src="${value2[i].media[0].url}"
          class="card-img-top"
          alt="${value2[i].media[0].alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${value2[i].title}</h5>
          <p class="card-text"> ${value2[i].description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bids: ${value2[i]._count.bids}</li>
          <li class="list-group-item">Deadline: ${value2[i].endsAt}</li>
        </ul>
        <div class="card-body">
          <a href="html/listing.html?id=${value2[i].id}" class="card-link">open</a>
        </div>
      </div>`;
    }
  } catch {}
}

displayData();




/* async function monoFunction() {
  try {
    //get data
    const respond = await fetch(url);
    const json = await respond.json();
    console.log(json);

    //select one object from json, YEEESSS :)
    console.log(json.data[0].title)

    listingsContainer.innerHTML="";

    //loop throug data, and display, length default, 10?
    for (let i = 0; i < json.data.length; i++) {

        console.log(json.data[i].title)

        listingsContainer.innerHTML+= `<div
        class="card m-3 card col-12 col-sm-6 col-lg-4"
        style="width: 18rem">
        <img
          src="${json.data[i].media[0].url}"
          class="card-img-top"
          alt="${json.data[i].media[0].alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${json.data[i].title}</h5>
          <p class="card-text"> ${json.data[i].description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bids: ${json.data[i]._count.bids}</li>
          <li class="list-group-item">Deadline: ${json.data[i].endsAt}</li>
        </ul>
        <div class="card-body">
          <a href="html/listing.html" class="card-link">open</a>
        </div>
      </div>`
    }
  } catch {}
}

//mono as in monolithic, hehe, first make i work! <3
monoFunction(); */


