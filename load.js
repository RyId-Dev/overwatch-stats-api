const ul = document.getElementById('apidata');
const list = document.createDocumentFragment();

function loadDetails () {

    userID = document.getElementById("userSearch").value;
    //userID = "Raxey-21971";
    url = 'https://overfast-api.tekrop.fr/players/'+ userID +'/summary';

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("usernameInfo").innerHTML = data.username;
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("endorsement").innerHTML = data.endorsement.level;
        document.getElementById("endFrame").src = data.endorsement.frame;
        document.getElementById("avatar").src = data.avatar;
        document.getElementById("namecard").src = data.namecard;

        });

    }
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("submit").addEventListener("click", loadDetails);
});



    //apidata.map(function(info) {
    //    let li = document.createElement('li');
    //    let username = document.createElement('h2');
     //   let title = document.createElement('span');

    //    username.innerHTML = `${apidata.username}`;
    //    title.innerHTML = `${apidata.title}`;
    //});

   //})

   //ul.appendChild(list);


// Second API Call for QP Stats: https://overfast-api.tekrop.fr/players/Raxey-21971/stats/summary?gamemode=quickplay&platform=pc

