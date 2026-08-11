"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Farid",
      "Asif",
      "Danish",
      "Azam",
      "Roshan",
      "Amir",
      "Mustak",
      "Istak",
      "Kaif",
      "Fardeen",
      "Imran",
    ],
    [
      "Alok",
      "Raktim",
      "Harsh",
      "Rahul",
      "Dhiraj",
      "Adarsh",
      "Taufik",
      "Moinul",
      "Soumo",
      "Parvez",
      "Sunny",
    ],
  ],
  score: "4:0",
  scored: ["Farid", "Asif", "Alok", "Raktim"],
  date: "Nov 9th 2026",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playersArg) {},
};

// // Practice 1

// Task 1
const [players1, players2] = game.players;

// Task 2
const [gk, ...fieldplayer] = players1;
console.log(gk);
console.log(fieldplayer);

//Task 3
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);

//Task 4
const [...players1Final] = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// // Task 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // OR
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 6
const printGoals = function (...players) {
  console.log(`${players.length}, goals were scored`);
};
printGoals(...game.scored);
printGoals("Farid", "Asif", "Danish", "Azam", "Roshan", "Amir", "Mustak");

//Task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


// // Practice 2

// task 1
for (const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1} ${player}`);

//task 2
const odds = Object.values(game.odds);
let avgOdds = 0;
for (const odd of odds){
  avgOdds += odd;
}
avgOdds /= odds.length;
console.log(avgOdds);

//task 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);

}

