document.addEventListener("DOMContentLoaded", () => {
    // Popup
    const buttons = document.querySelectorAll(".project-learn-btn");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupDesc = document.getElementById("popupDesc");
    const closeBtn = document.getElementById("closePopup");

    if (popup && popupTitle && popupDesc && closeBtn && buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", function(e) {
                e.preventDefault();

                const title = this.getAttribute("data-title");
                const desc = this.getAttribute("data-desc");

                popupTitle.textContent = title;
                popupDesc.innerHTML = desc;

                popup.style.display = "flex";
            });
        });

        closeBtn.addEventListener("click", function() {
            popup.style.display = "none";
        });

        popup.addEventListener("click", function(e) {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    }

    // Scroll animation 
    const animatedElements = document.querySelectorAll(".fade-in");

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }
});