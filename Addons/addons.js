document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home');
    const addonsLink = document.getElementById('addons');
    
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'block';
        addonsSection.style.display = 'none';
    });

    addonsLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeSection.style.display = 'none';
        addonsSection.style.display = 'block';
    });

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const input = document.getElementById('search-input').value.toLowerCase();
        filterAddons(input);
    });

    function filterAddons(input) {
        const addons = document.querySelectorAll('.addon');
        addons.forEach(addon => {
            const name = addon.getAttribute('data-name').toLowerCase();
            const tags = addon.getAttribute('data-tags').toLowerCase();
            if (name.includes(input) || tags.includes(input)) {
                addon.style.display = 'block';
            } else {
                addon.style.display = 'none';
            }
        });
    }
});
