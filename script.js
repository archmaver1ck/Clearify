document.addEventListener('DOMContentLoaded', function() {
    
    const tryBtn = document.getElementById('tryBtn');
    const actionButtons = document.querySelector('.action-buttons');
    const blurryBox = document.getElementById('box1');
    const blurryContent = document.querySelector('.blurry-content');
    const magnifier = document.querySelector('.magnifier-tool');
    
    // Toggle action buttons
    tryBtn.addEventListener('click', function() {
        actionButtons.classList.toggle('visible');
        this.textContent = actionButtons.classList.contains('visible') 
            ? 'Hide Options' 
            : 'Try It Yourself!';
    });
    
    // magnifying glass functionality
    let isMagnifierActive = false;
    
    magnifier.addEventListener('click', function() {
        isMagnifierActive = !isMagnifierActive;
        blurryContent.style.filter = isMagnifierActive ? 'blur(0)' : 'blur(8px)';
        this.style.backgroundColor = isMagnifierActive ? '#4361ee' : '#fff';
        this.style.color = isMagnifierActive ? '#fff' : '#000';
    });
    
    // Action button ke liye
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            
            // naya tab
            alert(`Opening ${action} functionality...`);
            
        
        });
    });
    
    // Smooth scrolling 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Dropdown menu 
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const button = dropdown.querySelector('.nav-btn');
        
        button.addEventListener('focus', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
        });
        
        button.addEventListener('blur', () => {
            setTimeout(() => {
                if (!dropdown.matches(':hover')) {
                    dropdown.querySelector('.dropdown-menu').style.display = 'none';
                }
            }, 200);
        });
    });
});