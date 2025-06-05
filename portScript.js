let toggleableElements = document.getElementsByClassName("lightElement")
// console.log(toggleableElements)

function toggleDarkMode(){
    document.body.classList.toggle("darkModeBody");
    for (let i = 0; i < toggleableElements.length; i++){
        toggleableElements[i].classList.toggle("darkElement");
    }
    
}
