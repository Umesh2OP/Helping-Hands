window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // Keep the loading screen visible for 4 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = "0"; // Fade out effect
        loadingScreen.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            loadingScreen.style.display = "none"; // Hide the loading screen completely
        }, 500); // Wait for the fade-out to complete
    }, 2000); // Display logo for 4 seconds before fading out
});
