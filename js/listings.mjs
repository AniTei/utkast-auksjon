// get the objects
// display them, how many? 12?
// be able to open them in diff page?

//can element be selected and filled? yes
const listingsContainer = document.querySelector(".listings-container");
listingsContainer.innerHTML = `<p>hei</p>`;

//can I get the url form other js file? jes
import { baseURL } from "./endpoints.mjs";
import { allListings } from "./endpoints.mjs";
import { getData } from "./getData.mjs";
const url = baseURL + allListings;



/* JavaScript passes a value from a function back to the code that called it 
by using the return statement. The value to be returned is specified in the return. 
That value can be a constant value, a variable, 
or a calculation where the result of the calculation is returned. */

// https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function

// this one is helpful!!
// https://www.youtube.com/watch?v=4t8Q_YLpuKw

async function displayData() {
  try {
    const value = await getData(url);

    listingsContainer.innerHTML = "";

    //loop throug data, and display, find way wo/ innerHTML
    for (let i = 0; i < value.data.length; i++) {

      listingsContainer.innerHTML += `<div
        class="card m-3 card col-12 col-sm-6 col-lg-4"
        style="width: 18rem">
        <img
          src="${value.data[i].media[0].url}"
          class="card-img-top"
          alt="${value.data[i].media[0].alt}"
        />
        <div class="card-body">
          <h5 class="card-title">${value.data[i].title}</h5>
          <p class="card-text"> ${value.data[i].description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Bids: ${value.data[i]._count.bids}</li>
          <li class="list-group-item">Deadline: ${value.data[i].endsAt}</li>
        </ul>
        <div class="card-body">
          <a href="html/listing.html?id=${value.data[i].id}" class="card-link">open</a>

          
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


