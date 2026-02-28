const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
    closeAllSubMenus();
}

function toggleSubMenu(button) {
    const submenu = button.nextElementSibling;
    const isOpen = submenu.classList.contains('show');

    // Close all TOP-LEVEL submenus (but not nested ones inside them)
    Array.from(sidebar.querySelectorAll(':scope > ul > li > .dropdown-btn + .sub-menu.show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });

    // If it wasn't open before, open it now
    if (!isOpen) {
        submenu.classList.add('show');
        button.classList.add('rotate');
    }

    // Open sidebar if collapsed
    if (sidebar.classList.contains('close')) {
        sidebar.classList.remove('close');
        toggleButton.classList.remove('rotate');
    }
}

function toggleSubMenu_1(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}

function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotate');
    });
}

// Auto-open menus on pages that need them (exemplo1.html)
document.addEventListener('DOMContentLoaded', () => {
    // If the page has the nested Exemplo_1 submenu, auto-open Dashboard + Exemplo_1
    const nestedMenu = document.querySelector('.sub-menu .dropdown-btn');
    if (nestedMenu) {
        // Open Dashboard
        const dashboardBtn = nestedMenu.closest('.sub-menu').previousElementSibling;
        dashboardBtn.nextElementSibling.classList.add('show');
        dashboardBtn.classList.add('rotate');

        // Open Exemplo_1
        nestedMenu.nextElementSibling.classList.add('show');
        nestedMenu.classList.add('rotate');
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});