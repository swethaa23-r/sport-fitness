document.addEventListener('DOMContentLoaded', () => {

    // Mobile Sidebar Toggle
    const dashToggle = document.querySelector('.dash-toggle');
    const dashSidebar = document.querySelector('.dash-sidebar');
    const dashOverlay = document.querySelector('.dash-overlay');
    const closeSidebar = document.querySelector('.close-sidebar');

    function openSidebar() {
        if(dashSidebar) dashSidebar.classList.add('open');
        if(dashOverlay) dashOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeSidebarFunc() {
        if(dashSidebar) dashSidebar.classList.remove('open');
        if(dashOverlay) dashOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    if(dashToggle) dashToggle.addEventListener('click', openSidebar);
    if(closeSidebar) closeSidebar.addEventListener('click', closeSidebarFunc);
    if(dashOverlay) dashOverlay.addEventListener('click', closeSidebarFunc);
    
    // Close sidebar on nav item click (mobile)
    document.querySelectorAll('.dash-nav a').forEach(link => {
        link.addEventListener('click', closeSidebarFunc);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebarFunc();
    });

    // Populate user name in topbar
    const userName = localStorage.getItem('userName') || 'Demo User';
    const profileName = document.querySelector('.dash-profile span');
    if (profileName) profileName.innerText = userName;

    // Logout Functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userRole');
            window.location.href = 'login.html';
        });
    }

    // Chart.js Rendering (For Admin Dashboard)
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Revenue (₹)',
                    data: [12000, 19000, 15000, 22000, 18000, 28000, 35000],
                    borderColor: '#e21e2c',
                    backgroundColor: 'rgba(226, 30, 44, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    const orderCtx = document.getElementById('orderChart');
    if (orderCtx) {
        new Chart(orderCtx, {
            type: 'doughnut',
            data: {
                labels: ['Delivered', 'Processing', 'Pending', 'Cancelled'],
                datasets: [{
                    data: [65, 20, 10, 5],
                    backgroundColor: ['#8bc34a', '#2196f3', '#ff9800', '#e21e2c'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
});


    // SPA Tab Switching Logic
    const navLinks = document.querySelectorAll('.dash-nav-link');
    const sections = document.querySelectorAll('.dash-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active to clicked link
            link.classList.add('active');
            
            // Hide all sections
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Show target section
            const target = link.getAttribute('data-target');
            const targetSec = document.getElementById(target);
            if (targetSec) targetSec.classList.add('active');
            
            // Close sidebar on mobile
            if (window.innerWidth <= 992) {
                closeSidebarFunc();
            }
        });
    });
