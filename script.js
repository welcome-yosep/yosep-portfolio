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

// Image modal functions
function openImageModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.classList.add('active');
    modalImg.src = imgSrc;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
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

    // Add click event to achievement images
    document.querySelectorAll('.achievement-image img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openImageModal(this.src);
        });
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});