const apiRequest = () => {
    fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[0].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[0].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error));

        fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[1].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[1].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error))

        fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[2].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[2].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error))

        fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[3].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[3].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error))

        fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[4].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[4].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error))


        fetch("./data2.json")
        .then(res => {
            return res.json();
        })
         .then(data => {
            (data.widowmaker[5].stats).forEach(info => {
              const markup = `<li>${info.label}  ${info.value}</li>`
            console.log(data.widowmaker[5].stats);
              document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
            })
        })
        .catch(error => console.log(error))
  };

  apiRequest();
    