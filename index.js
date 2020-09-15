import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function answerTask1(arr) { 
    let homeTeam2014 = {
        name: "", 
        goals: 0
    }

    let awayTeam2014 = { 
        name: "", 
        goals: 0
    }

    let winner = ""

    arr.forEach((item) => {
        if(item.Year === 2014 && item.Stage === "Final") { 
            homeTeam2014 = { 
                name: item["Home Team Name"], 
                goals: item["Home Team Goals"]
            }

            awayTeam2014 = {
                name: item["Away Team Name"], 
                goals: item["Away Team Goals"]
            }
        } 
    });
    
    return console.log("Home Team for 2014 World Cup Final",homeTeam2014) , console.log("Away Team for 2014 World Cup Final",awayTeam2014),
    console.log("The Winner of the 2014 World Cup is:", homeTeam2014.name)

}

answerTask1(fifaData)


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {

    return arr.filter((item) => item.Stage == "Final")
};

console.log("Finals Data:",getFinals(fifaData))
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(arr,cb) {
   let years = []

   cb(arr).map((game) => { 
       years.push(game.Year)
   })
   
   return years
};

console.log("Final Years:",  getYears(fifaData,getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(arr, cb) {

    let winners = []

    function checkWinner(game) { 

        if(game["Home Team Goals"] > game["Away Team Goals"]) { 
            winners.push(game["Home Team Name"])
        } else { 
            winners.push(game["Away Team Name"])
        }
    }

    cb(arr).filter(checkWinner)// filters array for winners 
    
    return winners

};

console.log("The Array of Winners:",getWinners(fifaData,getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(arr,yearCb,winnerCb, getFinalsCb) {
    let years = []
    let teams = []

    yearCb(arr, getFinalsCb).forEach((year) => { 
       years.push(year)
    })

    winnerCb(arr,getFinalsCb).forEach((team, index) => { 
        teams.push(team)
    })

    function createMessageOutput(){ 
        teams.forEach((team, index) => { 
            console.log(`In ${years[index]}, ${team} won the world cup!`)
        })
    }

    return createMessageOutput()
};

getWinnersByYear(fifaData,getYears,getWinners,getFinals)

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
