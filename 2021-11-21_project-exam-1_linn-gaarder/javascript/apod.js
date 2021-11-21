const container = document.querySelector(".container");

const url = "https://api.nasa.gov/planetary/apod?api_key=gep9OKQ5yVPyjvXGsMGF54qJnkU4deZmLTpxd4ft";

async function fetchInfo() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        container.innerHTML += `
            <h2>Picture name: ${data.title}</h2>
                <img src="${data.hdurl}" class="apod-img">
                <h3 class="apod-h3">Picture explanation:</h3>
                <p>${data.explanation}</p>
                <p>Copyright: ${data.copyright}</p>
            `
        } catch(error) {
            container.innerHTML += `
            <p class="error">An error has occured while contacting the API</p>
            `
        }
    }

fetchInfo();
