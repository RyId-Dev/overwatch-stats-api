async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { label, value } = await response.json();

    // Clear Table

    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    // Populate Labels

    for (const labelText of label) {
        const labelElement = document.createElement("th");

        labelElement.textContent = labelText;
        tableHead.querySelector("tr").appendChild(labelElement);
    }

    // Populate Rows

    for (const row of rows) {
        const labelElement = document.createElement("tr");

        for (const cellText of row) {
            const cellElement = document.createElement("td");

            cellElement.textContent = cellText;
            HTMLTableRowElement.appendChild(cellElement);
        }

        tableBody.appendChild(rowElement);

    }

    console.log(data);

}

loadIntoTable("./data.json", document.querySelector("table"));