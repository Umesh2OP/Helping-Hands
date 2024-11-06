window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");

    
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Fade out effect
        loadingScreen.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loadingScreen.style.display = "none"; 
        }, 500);
    }, 2000); 
});
// ngodashboard.js

// Sample data for available food donations (in a real application, this would be fetched from a backend)
const availableDonations = [
    { id: 1, foodName: "Pasta", description: "Delicious pasta with tomato sauce", quantity: 10, location: "Restaurant A" },
    { id: 2, foodName: "Bread Loaf", description: "Freshly baked whole wheat bread", quantity: 5, location: "Bakery B" },
    { id: 3, foodName: "Salad", description: "Fresh salad with mixed greens", quantity: 15, location: "Café C" }
];

// Function to display available donations
function displayAvailableDonations() {
    const donationsList = document.querySelector('.available-donations ul');
    donationsList.innerHTML = ""; // Clear any existing donation entries

    availableDonations.forEach(donation => {
        const donationItem = document.createElement('li');
        
        // Display donation details
        donationItem.innerHTML = `
            <strong>${donation.foodName}</strong> - ${donation.description}<br>
            Quantity: ${donation.quantity}<br>
            Location: ${donation.location}<br>
            <button class="claim-btn" onclick="claimDonation(${donation.id})">Claim</button>
        `;

        donationsList.appendChild(donationItem);
    });
}

// Function to handle claiming a donation
function claimDonation(donationId) {
    // Find the donation in the list and remove it (assuming it's claimed)
    const donationIndex = availableDonations.findIndex(donation => donation.id === donationId);
    if (donationIndex !== -1) {
        const claimedDonation = availableDonations.splice(donationIndex, 1)[0]; // Remove the claimed item

        // Update the UI to reflect the claimed status
        displayAvailableDonations();
        alert(`You have claimed the food donation: ${claimedDonation.foodName}. Please proceed to pick it up from ${claimedDonation.location}.`);
    } else {
        alert("Donation not found or has already been claimed.");
    }
}

// Initialize the donations list display
displayAvailableDonations();
