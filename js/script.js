alert("Hello World");
const getUserSelectedText =() =>{
    return window.getSelection().toString();
}

//Knowing when user eaches end of the page
window.onscroll =() => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
    {
        console.log("You've reached the end of the page")
    }
}

//for scrolling to the top
const toTop =() => window.scrollTo({top: 0,behavior:'smooth'});

//for scrolling smoothly when clicking for the whole doc
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
