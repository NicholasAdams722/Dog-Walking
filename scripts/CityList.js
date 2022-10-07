//import { getWalkers } from "./database.js"

//const walkers = getWalkers()

import { getCities } from "./database.js"

const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}




//* Update the CityList module to invoke getCities() now and store its return value in a variable called cities. 

//* Update the for..of loop to iterate the array value of cities.

//* Make sure you interpolate the name property of the city between the <li> tags.