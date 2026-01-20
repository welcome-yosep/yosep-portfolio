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
        title: "운영툴 화면 및 운영 프로세스 기획",
        description: "게임 운영에 필요한 GM Tool의 기능 요구사항을 정의하고, 화면 구성 및 권한 체계를 기획하여 개발팀과 협업했습니다. 운영팀의 업무 효율성을 높이고, 데이터 관리의 정확성을 확보하는 것이 목표였습니다.\n\n주요 작업 내용:\n• 운영툴 기능 요구사항 문서 작성\n• 화면별 UI/UX 설계 및 와이어프레임 제작\n• 권한 체계 설계 (관리자/운영자/CS 등)\n• 개발팀과의 지속적인 커뮤니케이션\n• 운영팀 피드백 반영 및 개선",
        image: "./images/achievement1.jpg",
        link: "https://welcome-yosep.github.io/bravo-admin/"
    },
    2: {
        title: "라이브 리스크 모니터링 대시보드 기획",
        description: "라이브 서비스 중 발생 가능한 리스크를 실시간으로 모니터링할 수 있는 대시보드를 기획했습니다. 주요 지표를 한눈에 파악하고 신속한 대응이 가능하도록 설계했습니다.\n\n주요 작업 내용:\n• 모니터링 필요 지표 정의 (동접, 매출, 오류율 등)\n• 대시보드 화면 구성 및 UI/UX 설계\n• 데이터 수집 및 표시 방식 기획\n• 개발팀과 협업하여 대시보드 구현\n• 알림 기준 및 에스컬레이션 프로세스 수립\n• 운영팀 대시보드 활용 가이드 작성",
        image: "./images/achievement6.jpg"
    },
    3: {
        title: "로그 정의서 작성 및 운영 관리",
        description: "운영 및 분석에 필요한 로그 항목을 정의하고, 개발팀과 협의하여 데이터 수집 체계를 확립했습니다. 효율적인 데이터 추적과 분석이 가능하도록 설계했습니다.\n\n주요 작업 내용:\n• 게임 내 주요 이벤트 로그 항목 정의\n• 로그 데이터 구조 및 포맷 설계\n• 개발팀과 협업하여 로그 수집 체계 구축\n• 로그 분석 쿼리 작성 및 검증\n• 운영 이슈 대응을 위한 로그 활용 가이드 작성",
        image: "./images/achievement3.jpg"
    },
    4: {
        title: "제재 코드 체계 기획 및 기준 맵핑",
        description: "게임별 제재 유형을 분류하고 코드 체계를 수립하여, CS 및 운영팀의 일관된 제재 처리 프로세스를 구축했습니다. 이를 통해 제재 처리의 투명성과 일관성을 확보했습니다.\n\n주요 작업 내용:\n• 제재 유형별 코드 체계 설계\n• 제재 사유 및 기간 가이드라인 수립\n• CS 팀과 협업하여 제재 처리 프로세스 정립\n• 제재 이력 관리 시스템 기획\n• 유저 이의제기 프로세스 구축",
        image: "./images/achievement2.jpg"
    },
    5: {
        title: "운영정책 수립 및 기준 개정",
        description: "서비스 약관, 운영정책, 제재정책 등을 수립하고, 라이브 환경 변화에 따라 지속적으로 개정 및 관리했습니다. 법적 리스크를 최소화하고 유저 보호를 우선시했습니다.\n\n주요 작업 내용:\n• 서비스 이용약관 및 운영정책 초안 작성\n• 법무팀 검토 및 피드백 반영\n• 제재 정책 및 가이드라인 수립\n• 정책 변경 시 유저 공지 및 안내\n• 라이브 이슈 발생 시 정책 개정 및 업데이트",
        image: "./images/achievement4.jpg"
    },
    6: {
        title: "라이브 이슈 트래킹 및 대응 체계 운영",
        description: "라이브 서비스 중 발생한 장애 및 버그에 대해 신속하게 대응하고, 공정한 보상 기준을 수립하여 유저 신뢰를 유지했습니다. 로그 분석을 통해 영향 범위를 정확히 파악했습니다.\n\n주요 작업 내용:\n• 장애 발생 시 로그 추출 및 영향 범위 분석\n• 피해 유저 및 피해 규모 파악\n• 보상 기준 수립 (보상 아이템, 수량, 지급 방식 결정)\n• 개발팀과 협업하여 보상 지급 스크립트 작성\n• 유저 공지 및 CS 대응 가이드 작성\n• 재발 방지를 위한 프로세스 개선",
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

        // Update detail view button
        const detailButton = document.getElementById('detailViewButton');
        if (data.link) {
            // If there's a link, open it in a new tab
            detailButton.onclick = function() {
                window.open(data.link, '_blank');
            };
        } else {
            // If no link, open image modal
            detailButton.onclick = function() {
                openImageModal(document.getElementById('achievementModalImage').src);
            };
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Decision modal functions
const decisionData = {
    1: {
        title: "운영 이슈 의사결정 구조 설계",
        problem: "라이브 서비스 중 발생하는 다양한 이슈에 대해 일관된 의사결정 기준이 없어, 대응 속도가 느리고 부서 간 혼선이 발생했습니다. 특히 긴급 상황에서 누가 최종 결정권을 가지는지 불명확하여 골든타임을 놓치는 경우가 있었습니다.",
        criteria: "• 유저 영향도: 피해 유저 수와 게임 플레이 영향 범위 평가\n• 비즈니스 리스크: 매출 손실, 브랜드 이미지 훼손 가능성 분석\n• 대응 시급성: 이슈 확산 속도와 추가 피해 발생 가능성 판단\n• 리소스 가용성: 개발/QA/운영팀의 즉시 투입 가능 인력 확인\n• 법적/정책적 리스크: 약관, 법령 위반 가능성 검토",
        action: "1. 이슈 심각도 분류 체계 수립 (Critical/High/Medium/Low)\n2. 심각도별 의사결정권자 및 대응 프로세스 정의\n3. 긴급 이슈 대응을 위한 전담 핫라인 구축\n4. 주간 단위 이슈 리뷰 미팅 정례화\n5. 의사결정 기록 시스템 도입 (Confluence 활용)",
        result: "• 긴급 이슈 대응 시간 평균 40% 단축 (2시간 → 1.2시간)\n• 부서 간 커뮤니케이션 오류로 인한 중복 작업 80% 감소\n• 의사결정 근거 문서화로 유사 이슈 재발 시 신속한 판단 가능\n• 운영팀의 의사결정 권한 명확화로 주도적 이슈 해결 문화 정착"
    }
};

function openDecisionModal(id) {
    const modal = document.getElementById('decisionModal');
    const data = decisionData[id];

    if (data) {
        document.getElementById('decisionModalTitle').textContent = data.title;
        document.getElementById('decisionProblem').textContent = data.problem;
        document.getElementById('decisionCriteria').textContent = data.criteria;
        document.getElementById('decisionAction').textContent = data.action;
        document.getElementById('decisionResult').textContent = data.result;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDecisionModal() {
    const modal = document.getElementById('decisionModal');
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
            closeDecisionModal();
        }
    });
});