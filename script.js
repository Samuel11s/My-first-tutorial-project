// Load verses from JSON and display them based on date and time
document.addEventListener("DOMContentLoaded", function () {
    fetch("verses.json")
        .then(response => response.json())
        .then(data => displayVerse(data))
        .catch(error => console.log("Error loading verses:", error));
});

function displayVerse(verses) {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const currentHour = today.getHours();
    const verseContent = document.getElementById("verse-content");
    const verseTitle = document.getElementById("verse-title");

    // Search for the verse of the current date
    const todayVerse = verses.find(verse => verse.date === currentDate);

    if (todayVerse) {
        if (currentHour < 12) {
            // Morning verse
            verseTitle.textContent = "Morning Verse";
            verseContent.textContent = todayVerse.morningVerse;
        } else {
            // Evening verse
            verseTitle.textContent = "Evening Verse";
            verseContent.textContent = todayVerse.eveningVerse;
        }
    } else {
        // No verse found for today's date
        verseTitle.textContent = "No verse found";
        verseContent.textContent = "No verse found for today's date.";
    }
}