const container = document.querySelector(".container");
const containerTwo = document.querySelector(".container-two");

const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=gep9OKQ5yVPyjvXGsMGF54qJnkU4deZmLTpxd4ft";

const urlTwo = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=gep9OKQ5yVPyjvXGsMGF54qJnkU4deZmLTpxd4ft";

async function fetchPicture() {
    try {
        const response = await fetch(url);
    
        const data = await response.json();

        container.innerHTML += `
        <h2>Name of rover: ${data.latest_photos[0].rover.name}</h2>
        <h3 class="rover-h3">Latest picture:</h3>
        <img src="${data.latest_photos[0].img_src}" class="mars-img">
    `
} catch(error) {
    container.innerHTML += `
    <p class="error">An error has occured while contacting the API</p>
    `
    }
}

fetchPicture();

async function fetchPictureTwo() {
    try {
        const response = await fetch(urlTwo);

        const dataTwo = await response.json();

        container.innerHTML += `
        <h2>Name of rover: ${dataTwo.latest_photos[0].rover.name}</h2>
        <h3 class="rover-h3">Latest picture:</h3>
        <img src="${dataTwo.latest_photos[0].img_src}" class="mars-img">
    `
}  catch(error) {
    container.innerHTML += `
    <p class="api-error">An error has occured while contacting the API</p>
    `
    }
}

fetchPictureTwo();

