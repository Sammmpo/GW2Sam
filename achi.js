


var quickAchies = {
  "Daily Kryta Lumberer" : true,
  "Daily Kryta Miner" : true,
  "Daily Kryta Forager" : true,
  "Daily Kryta Vista Viewer" : true,

  "Daily Shiverpeaks Lumberer" : true,
  "Daily Shiverpeaks Miner" : true,
  "Daily Shiverpeaks Forager" : true,
  "Daily Shiverpeaks Vista Viewer" : true,

  "Daily Ascalon Lumberer" : true,
  "Daily Ascalon Miner" : true,
  "Daily Ascalon Forager" : true,
  "Daily Ascalon Vista Viewer" : true,

  "Daily Maguuma Jungle Lumberer" : true,
  "Daily Maguuma Jungle Miner" : true,
  "Daily Maguuma Jungle Forager" : true,
  "Daily Maguuma Jungle Vista Viewer" : true,

  "Daily Maguuma Wastes Lumberer" : true,
  "Daily Maguuma Wastes Miner" : true,
  "Daily Maguuma Wastes Forager" : true,
  "Daily Maguuma Wastes Vista Viewer" : true,

  "Daily Orr Lumberer" : true,
  "Daily Orr Miner" : true,
  "Daily Orr Forager" : true,
  "Daily Orr Vista Viewer" : true,

  "Daily PvP Reward Earner" : true,
  "Daily WvW Big Spender" : true,
  "Daily Mystic Forger" : true,
  "Daily WvW Caravan Disruptor" : true
};





var achiesTime = {
  "Daily Kryta Lumberer" : 3,
  "Daily WvW Big Spender" : 1
};


fetch('https://api.guildwars2.com/v2/achievements/daily')
.then(function(response) {
    return response.json();
})
.then(function(dailies) {
    console.log(dailies);

    var calc = 0;
    function addquick(){
      calc = parseInt(document.getElementById("quick").innerHTML);
      quick.innerHTML = (calc + 1);
    }


    for (i=0; i<dailies.pve.length; i++){
      if (dailies.pve[i].required_access[0] == "HeartOfThorns" || dailies.pve[i].required_access[1] == "HeartOfThorns"){
        fetch('https://api.guildwars2.com/v2/achievements?ids='+dailies.pve[i].id)
        .then(function(response) {
            return response.json();
        }).then(function(achievements) {
            console.log(achievements);
            pve.innerHTML += (achievements[0].name)+"<br>";

            if (quickAchies[achievements[0].name]) {
              //addquick();
              quickList.innerHTML += (achievements[0].name)+"<br>";
            }

          });
        }
        // pve.innerHTML += dailies.pve[i].id + "<br>";
    }

    for (i=0; i<dailies.pvp.length; i++){
      fetch('https://api.guildwars2.com/v2/achievements?ids='+dailies.pvp[i].id)
      .then(function(response) {
          return response.json();
      }).then(function(achievements) {
          console.log(achievements);
          pvp.innerHTML += (achievements[0].name)+"<br>";
          if (quickAchies[achievements[0].name]) {
            //addquick();
            quickList.innerHTML += (achievements[0].name)+"<br>";
          }
      });
    // pvp.innerHTML += (dailies.pvp[i].id)+"<br>";
    }

    for (i=0; i<dailies.wvw.length; i++){
      fetch('https://api.guildwars2.com/v2/achievements?ids='+dailies.wvw[i].id)
      .then(function(response) {
          return response.json();
      }).then(function(achievements) {
          console.log(achievements);
          wvw.innerHTML += (achievements[0].name)+"<br>";
          if (quickAchies[achievements[0].name]) {
            //addquick();
            quickList.innerHTML += (achievements[0].name)+"<br>";
          }
      });
    // wvw.innerHTML += (dailies.wvw[i].id)+"<br>";
    }

    /*
    for (i=0; i<dailies.fractals.length; i++){
      fetch('https://api.guildwars2.com/v2/achievements?ids='+dailies.fractals[i].id)
      .then(function(response) {
          return response.json();
      }).then(function(achievements) {
          console.log(achievements);
          fractals.innerHTML += (achievements[0].name)+"<br>";
          if (quickAchies[achievements[0].name]) {
            addquick();
          }
      });
    // fractals.innerHTML += (dailies.fractals[i].id)+"<br>";
    }
    */


})
.then(function() {

});










/*
fetch('https://api.guildwars2.com/v2/achievements?ids='+dailies.pve[i].id)
.then(function(response) {
    return response.json();
}).then(function(achievements) {
    console.log(achievements);
    test.innerHTML = achievements[0].name;
});
*/
