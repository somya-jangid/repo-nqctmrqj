document.addEventListener("DOMContentLoaded", function() {
    // Tab switching for Login/Sign Up page
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabForms = document.querySelectorAll(".auth-form");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabForms.forEach(form => form.classList.remove("active"));
            this.classList.add("active");
            const target = this.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });
});
