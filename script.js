// Page navigation functions
function showDetailPage() {
    const mainPage = document.getElementById('main-page');
    const detailPage = document.getElementById('detail-page');

    mainPage.classList.remove('active');
    detailPage.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

function showMainPage() {
    const mainPage = document.getElementById('main-page');
    const detailPage = document.getElementById('detail-page');

    detailPage.classList.remove('active');
    mainPage.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});