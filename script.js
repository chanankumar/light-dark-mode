const toggleSwitch = document.querySelector('input[type="checkbox"]');
const themeText = document.getElementById('displayModeText');
const themeIcon = document.getElementById('themeIcon');

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        themeText.innerHTML = 'Dark Mode';
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        themeText.textContent = 'Light Mode';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme','light');
    }
}
toggleSwitch.addEventListener('change',switchTheme);

const themeHistory = localStorage.getItem('theme')
if(themeHistory) {
    if(themeHistory === 'dark'){
        toggleSwitch.checked = true;
        toggleSwitch.dispatchEvent(new Event("change"))
    }
}


