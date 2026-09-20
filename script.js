function searchIndex() {

    const query = document
        .getElementById("searchBox")
        .value
        .toLowerCase()
        .trim();

    const results = document.getElementById("searchResults");

    if (query === "") {
        results.innerHTML = "";
        return;
    }

    const cards = document.querySelectorAll(".archive-card");

    let found = 0;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "flex";
            found++;
        } else {
            card.style.display = "none";
        }

    });

    if (found === 0) {
        results.innerHTML =
            "<p style='color:#888; margin-top:15px;'>No matching records found.</p>";
    } else {
        results.innerHTML =
            "<p style='color:#888; margin-top:15px; font-size:12px;'>" +
            found + " record(s) found.</p>";
    }
}
