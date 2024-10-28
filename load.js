
function loadDetails () {

    //userID = "Raxey-21971";
    const userID = document.getElementById("userSearch").value;
    const infoloadDiv = document.getElementById("infoload");
    const url = 'https://overfast-api.tekrop.fr/players/'+ userID +'/summary';

    infoloadDiv.style.display = 'flex';

    fetch(url)
    .then(response => response.json())
    .then((data) => {
        
        //document.getElementById("usernameInfo").innerHTML = data.username;
        document.getElementById("title").innerHTML = data.title;
        //document.getElementById("endorsement").innerHTML = data.endorsement.level;
        document.getElementById("endFrame").src = data.endorsement.frame;
        document.getElementById("avatar").src = data.avatar;
        document.getElementById("namecard").src = data.namecard;

        });

    }
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("submit").addEventListener("click", loadDetails);
});

// Second API Call for QP Stats: https://overfast-api.tekrop.fr/players/Raxey-21971/stats/summary?gamemode=quickplay&platform=pc

