

const previousDonations = [
    { foodName: "Pasta", description: "Delicious pasta with tomato sauce", quantity: 10, status: "Collected" },
    { foodName: "Bread Loaf", description: "Freshly baked whole wheat bread", quantity: 5, status: "Pending" }
];

function displayPreviousDonations() {
    const donationsList = document.querySelector('.previous-donations ul');
    donationsList.innerHTML = ""; 

    previousDonations.forEach(donation => {
        const donationItem = document.createElement('li');
        donationItem.textContent = `Food Item: ${donation.foodName} | ${donation.description} | Quantity: ${donation.quantity} | Status: ${donation.status}`;
        donationsList.appendChild(donationItem);
    });
}

// Handle form submission to add new donation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Capture form data
    const foodName = document.getElementById("food-name").value;
    const description = document.getElementById("description").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;

    
    if (!foodName || !description || !quantity || !location) {
        alert("Please fill out all fields.");
        return;
    }

    // Create new donation object
    const newDonation = {
        foodName,
        description,
        quantity,
        status: "Pending"
    };

    // Add new donation to previousDonations array
    previousDonations.push(newDonation);

    // Clear form fields
    document.getElementById("food-name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("location").value = "";

    // Display updated donations list
    displayPreviousDonations();

    // Confirmation message
    alert("Food donation added successfully!");
});

// Call displayPreviousDonations to initially populate the list
displayPreviousDonations();
