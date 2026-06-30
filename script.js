function filterResearch() {
    // Get user input string values and standardize down to lowercase
    const input = document.getElementById('sci-search');
    const filter = input.value.toLowerCase();
    
    // Select all available research paper nodes
    const paperCards = document.querySelectorAll('.paper-card');

    paperCards.forEach(card => {
        // Collect text content matrices from target objects
        const titleText = card.querySelector('.paper-title').innerText.toLowerCase();
        const abstractText = card.querySelector('.abstract').innerText.toLowerCase();
        const keywordData = card.getAttribute('data-keywords').toLowerCase();
        
        // Match string patterns using structural index check
        if (titleText.includes(filter) || abstractText.includes(filter) || keywordData.includes(filter)) {
            card.style.display = ""; // Keeps card visible
        } else {
            card.style.display = "none"; // Dynamically hides mismatch cards
        }
    });
}
