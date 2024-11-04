document.addEventListener("DOMContentLoaded", () => {
        const theme = getTheme();
        applyTheme(theme);
        }); 
        function applyTheme(color) {
        console.log(`Applying theme "${color}".`);
        const button = getColorButton(color);
        document.documentElement.className = color;
        }
        function handleThemeButtonClick(color, element) {
        element.blur();  
        saveThemeToLocalStorage(color);
        applyTheme(color);
        }
        function getTheme() {
        return localStorage.getItem("theme") || "hotpink"; // SAFE TO EDIT - can change red to any color you want to be default
        }
        function getColorButton(color) {
        return document.getElementById(color);
        }
        function saveThemeToLocalStorage(color) {
        localStorage.setItem("theme", color);
        }