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

// Tab switching function
function switchTab(tabName) {
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Remove active class from all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to clicked tab button
    event.target.classList.add('active');

    // Add active class to corresponding tab content
    const targetTab = document.getElementById('tab-' + tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Scroll to top of tab content
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

// Achievement modal functions
const achievementData = {
    1: {
        title: "운영툴 화면 기획서 작성",
        description: "게임 운영에 필요한 GM Tool의 기능 요구사항을 정의하고, 화면 구성 및 권한 체계를 기획하여 개발팀과 협업했습니다. 운영팀의 업무 효율성을 높이고, 데이터 관리의 정확성을 확보하는 것이 목표였습니다.\n\n주요 작업 내용:\n• 운영툴 기능 요구사항 문서 작성\n• 화면별 UI/UX 설계 및 와이어프레임 제작\n• 권한 체계 설계 (관리자/운영자/CS 등)\n• 개발팀과의 지속적인 커뮤니케이션\n• 운영팀 피드백 반영 및 개선",
        image: "./images/achievement1.jpg"
    },
    2: {
        title: "제재 코드 기획 및 맵핑",
        description: "게임별 제재 유형을 분류하고 코드 체계를 수립하여, CS 및 운영팀의 일관된 제재 처리 프로세스를 구축했습니다. 이를 통해 제재 처리의 투명성과 일관성을 확보했습니다.\n\n주요 작업 내용:\n• 제재 유형별 코드 체계 설계\n• 제재 사유 및 기간 가이드라인 수립\n• CS 팀과 협업하여 제재 처리 프로세스 정립\n• 제재 이력 관리 시스템 기획\n• 유저 이의제기 프로세스 구축",
        image: "./images/achievement2.jpg"
    },
    3: {
        title: "로그 정의서 작성 및 관리",
        description: "운영 및 분석에 필요한 로그 항목을 정의하고, 개발팀과 협의하여 데이터 수집 체계를 확립했습니다. 효율적인 데이터 추적과 분석이 가능하도록 설계했습니다.\n\n주요 작업 내용:\n• 게임 내 주요 이벤트 로그 항목 정의\n• 로그 데이터 구조 및 포맷 설계\n• 개발팀과 협업하여 로그 수집 체계 구축\n• 로그 분석 쿼리 작성 및 검증\n• 운영 이슈 대응을 위한 로그 활용 가이드 작성",
        image: "./images/achievement3.jpg"
    },
    4: {
        title: "운영정책 수립 및 개정",
        description: "서비스 약관, 운영정책, 제재정책 등을 수립하고, 라이브 환경 변화에 따라 지속적으로 개정 및 관리했습니다. 법적 리스크를 최소화하고 유저 보호를 우선시했습니다.\n\n주요 작업 내용:\n• 서비스 이용약관 및 운영정책 초안 작성\n• 법무팀 검토 및 피드백 반영\n• 제재 정책 및 가이드라인 수립\n• 정책 변경 시 유저 공지 및 안내\n• 라이브 이슈 발생 시 정책 개정 및 업데이트",
        image: "./images/achievement4.jpg"
    },
    5: {
        title: "아이템 사용 버그 추적 및 보상 지급",
        description: "게임 내 버그 발생 시 로그 분석을 통해 영향 범위를 파악하고, 피해 유저 보상 정책을 수립 및 집행했습니다. 신속한 대응으로 유저 신뢰를 유지했습니다.\n\n주요 작업 내용:\n• 버그 발생 시 로그 추출 및 분석\n• 영향 받은 유저 및 피해 규모 파악\n• 보상 정책 수립 (보상 아이템, 수량 결정)\n• 개발팀과 협업하여 보상 지급 스크립트 작성\n• 유저 공지 및 CS 대응 가이드 작성",
        image: "./images/achievement5.jpg"
    }
};

function openAchievementModal(id) {
    const modal = document.getElementById('achievementModal');
    const data = achievementData[id];

    if (data) {
        document.getElementById('achievementModalTitle').textContent = data.title;
        document.getElementById('achievementModalDescription').textContent = data.description;
        document.getElementById('achievementModalImage').src = data.image;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
            closeAchievementModal();
        }
    });
});