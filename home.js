// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Addon website loaded');
    const homeLink = document.getElementById('Addon');

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const input = document.getElementById('search-input').value.toLowerCase();
        filterUpdates(input);
    });

    function filterUpdates(input) {
        const updates = document.querySelectorAll('.update');
        updates.forEach(update => {
            const name = update.getAttribute('data-name').toLowerCase();
            const tags = update.getAttribute('data-tags').toLowerCase();
            if (name.includes(input) || tags.includes(input)) {
                update.style.display = 'block';
            } else {
                update.style.display = 'none';
            }
        });
    }
});
