import { getWalkers } from "./database.js";

const walkers = getWalkers();

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};

//TODO! PROBLEM: Currently, when you click on a walker, it displays which city the walker works in. This is no longer accurate after the change in data design. You need to find all cities for the walker and display them.

//TODO First, define a function that will get all objects in the walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects.

//TODO Then, define a function that take in the array of matching objects, and use the cityId property on each one to find the matching city name. It should return a string containing all the city names.

//! Where to start?  Since the issue is the cities a walker can work in are not displaying.  This means we need to start fixing our problem in the walkers module.

// The function need the walker information, so define a parameter
//TODO Figure out what "walker information" we need.  Make it a parameter.

const filterWalkerCitiesByWalker = (walker) => {
  // Define an empty array to store all of the assignment objects
  const assignments = [];
  // Iterate the array value of walkerCities
  for (const assignment of walkerCities) {
    if (assignment.walkerId === walker.id) {
      assignments.push(assignment);
    }
  }
  return assignments;

  // Check if the primary key of the walker equals the foreign key on the assignment

  // If it does, add the current object to the array of assignments

  // After the loop is done, return the assignments array
};

// Define a function that builds a string of city names. Needs a parameter for assignments array.

// Define a function that builds a string of city names. Needs a parameter for assignments array.
const assignedCityNames = (assignments) => {
  // Define an empty string that will get appended with matching cities
  let cityNames = "";

  // Iterate the array of assignment objects
  for (const assignment of assignments) {
    // For each assignment, iterate the cities array to find the match
    for (const city of cities) {
      if (city.id === assignment.cityId) {
        // Add the name of the matching city to the string of city names
        cityNames = `${cityNames} and ${city.name}`;
      }
    }
  }

  // After the loop is done, return the string
  return cityNames;
};

document.addEventListener(
  "click", // This is the type of event
  (clickEvent) => {
    /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
    const itemClicked = clickEvent.target;

    /*
            Only run the rest of the logic if a walker <li> was clicked
        */
    if (itemClicked.id.startsWith("walker")) {
      /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
      const [, walkerId] = itemClicked.id.split("--");

      /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
      for (const walker of walkers) {
        /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
        if (walker.id === parseInt(walkerId)) {
          window.alert(`${walker.name} services ${walker.city}`);
        }
      }
    }
  }
);
