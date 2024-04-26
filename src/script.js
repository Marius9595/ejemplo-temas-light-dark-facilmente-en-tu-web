function initializeTheme() {

    document.getElementById("theme-toggle").addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark");
        document.getElementById("theme-toggle").textContent = isDark ? "🌜": "🌞";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    const currentTheme = () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    // Apply the theme from local storage when the page loads
    document.documentElement.classList.add(currentTheme());
}

initializeTheme();