// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Addon website loaded');
    const homeLink = document.getElementById('Addon');

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const input = document.getElementById('search-input').value.toLowerCase();
        filterUpdates(input);
    });
    }
});
