 fetch("https://overfast-api.tekrop.fr/players/Raxey-21971/summary")
   .then(response => response.json())
   .then(data => console.log(data.title, data.username, data.avatar));



// Second API Call for QP Stats: https://overfast-api.tekrop.fr/players/Raxey-21971/stats/summary?gamemode=quickplay&platform=pc

