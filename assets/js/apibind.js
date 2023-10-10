fetch('https://localhost:7101/api/Home/GetBrands')
    .then(response => response.json())
    .then(data => {
        // Call a function to populate the table with the received data
        populateTable(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function populateTable(data) {
    const imageTableBody = document.getElementById('imageTableBody'); // Get the table body element

    // Create a variable to keep track of the current row
    let currentRow;

    // Loop through the data and create table rows with five columns for each row
    data.forEach((url, index) => {
        if (index % 5 === 0) {
            // Create a new row for every 5 images
            currentRow = document.createElement('tr');
            imageTableBody.appendChild(currentRow);
        }

        const cell = document.createElement('td'); // Create a table cell

        const img = document.createElement('img'); // Create an image element
        img.src = url.brandLogo; // Set the image URL
        img.classList.add('img-fluid'); // Add the 'img-fluid' class for responsive images
        cell.appendChild(img); // Add the image to the cell

        currentRow.appendChild(cell); // Add the cell to the current row
    });
}