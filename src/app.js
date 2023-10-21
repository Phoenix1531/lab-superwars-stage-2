const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];
  // Create players using for loop
  // Type your code here
  for (let i = 0; i < players.length; i++) {
    var singlePlayer = {
      name: players[i],
      strength: getRandomStrength(),
      image: `images/super-${i + 1}.png`,
    //   
      type: getRandomType(i),
    };
    detailedPlayers.push(singlePlayer);
    console.log("detailedPlayers: ", detailedPlayers);
  }
  return detailedPlayers;
};

var heroCount = 0;
var villainCount = 0;

type = ["hero", "villain"];
const getRandomType = (i) => {
    // when i==0, because of test case, first one should be hero
  if (i == 0) {
    heroCount++;
    return "hero";
  }

    // when i>0, rest all are villains
  var random = Math.floor(Math.random() * type.length);
  var temptype = type[random];
  temptype == "hero" ? heroCount++ : villainCount++;
  if (heroCount >= 10) {
    return "villain";
  } else if (villainCount >= 10) {
    return "hero";
  }
  return type[random];
};

// getting random strength
const getRandomStrength = () => {
  // =Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  var random = Math.floor(Math.random() * 100);
  return random;
};

const buildPlayers = (players, type) => {
  let fragment = "";
  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here
  if (type == "hero") {
    for (let i = 0; i < players.length; i++) {
      if (players[i].type == "hero") {
        fragment += ` <div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>`;
      }
    }
  }
  if (type == "villain") {
    for (let i = 0; i < players.length; i++) {
      if (players[i].type == "villain") {
        fragment += ` <div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">${players[i].name}</div>
                <div class="strength">${players[i].strength}</div>
            </div>`;
      }
    }
  }

//   console.log("fragment inside BuildPlayers: ", fragment);
  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};
TEST_PLAYERS = ["Hero"];
window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};

// 1- window.onload
// 2- initPlayers
// 3- RandomStrength,randomType
// 4- DetailedPlayers => viewPlayers
// 5- BuildPlayers will return either hero or villain html and return it to viewPlayers so all cards can be displayed