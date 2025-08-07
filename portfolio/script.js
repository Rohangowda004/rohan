document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.navbar-link');
    const articles = document.querySelectorAll('.main-content > article');
    
    // Set initial active state
    document.querySelector('#about').classList.add('active');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links and articles
            navLinks.forEach(item => item.classList.remove('active'));
            articles.forEach(article => article.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show the corresponding article
            const targetId = this.getAttribute('data-page');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Sidebar toggle functionality
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('.info_more-btn');
    
    sidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Portfolio filtering functionality
    const filterBtns = document.querySelectorAll('.filter-item button');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(item => item.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Filter functionality would go here
        });
    });
});