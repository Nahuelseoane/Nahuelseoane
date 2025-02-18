document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animation for portfolio images
    const portfolioItems = document.querySelectorAll("#portfolio .item img");

    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "#00bcd4";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.background = "#222";
            document.body.style.color = "white";
            toggleButton.textContent = "Light Mode";
        } else {
            document.body.style.background = "#f4f4f4";
            document.body.style.color = "#333";
            toggleButton.textContent = "Dark Mode";
        }
    });

    // Sidebar toggle
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.createElement("button");
    toggleSidebar.textContent = "☰";
    toggleSidebar.id = "toggle-sidebar";
    sidebar.appendChild(toggleSidebar);

    toggleSidebar.addEventListener("click", function () {
        sidebar.classList.toggle("hidden");
        document.getElementById("header").classList.toggle("expanded");
        document.getElementById("main").classList.toggle("expanded");
    });
});
