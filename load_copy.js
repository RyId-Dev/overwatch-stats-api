const apiRequest = () => {
    fetch("https://overfast-api.tekrop.fr/players/Raxey-21971/stats/summary").then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch((err) => {
        console.log('rejected', err);
    })
        
  };

  apiRequest();
    