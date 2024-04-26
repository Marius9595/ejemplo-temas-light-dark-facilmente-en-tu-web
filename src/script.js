function initializeTheme() {
    const getTheme = () => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    // Apply the theme from local storage when the page loads
    const currentTheme = getTheme();
    document.documentElement.classList.add(currentTheme);
}

initializeTheme();