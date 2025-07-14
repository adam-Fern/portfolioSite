let toggleableElements = document.getElementsByClassName("lightElement")
// console.log(toggleableElements)
let darkMode = localStorage.getItem("darkMode") || false;
// console.log(darkMode);
if (darkMode == "true"){
    darkMode = false;
    toggleDarkMode();
}
else{
    darkMode = false;
}

function toggleDarkMode(){
    document.body.classList.toggle("darkModeBody");
    for (let i = 0; i < toggleableElements.length; i++){
        toggleableElements[i].classList.toggle("darkElement");
    }
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode);
    // console.log(darkMode);
}



let fadeSections = document.getElementsByClassName("toFade");

const options={
    threshhold: 0
    // rootMargin: "0"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }
        //console.log(entry.target);
        entry.target.classList.toggle("fadeIn");
        observer.unobserve(entry.target);
    })
}, options);

for(let section = 0; section < fadeSections.length; section++ ){
    observer.observe(fadeSections[section]);
}

// fadeSections.forEach(section =>{observer.observe(section)});