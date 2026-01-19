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

// Accordion toggle function
function toggleAccordion(button) {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');
    const icon = button.querySelector('.accordion-icon');

    // Close all accordion items and reset icons
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const itemIcon = item.querySelector('.accordion-icon');
        itemIcon.textContent = '펼치기';
    });

    // If the clicked item was not active, open it
    if (!isActive) {
        accordionItem.classList.add('active');
        icon.textContent = '접기';
    }
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