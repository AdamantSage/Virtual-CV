


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

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('ProgressMessage');
    if (button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            alert('This page is still in progress, try again later'); // Display the message
        });
    }
});

const sections =['content','orb','main','title','box','skills','contactk','social-icons','list','copyright'];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

sections.forEach(section => {

    const hiddenElements = document.querySelectorAll(`.${section}`);
    hiddenElements.forEach((el) => observer.observe(el));
});
// Function to check the screen size and remove the image
function handleResize() {
    var profileImage = document.querySelector('.profile');

    // Check if the screen width is less than or equal to 320px
    if (window.innerWidth <= 320) {
        if (profileImage) {
            profileImage.parentNode.removeChild(profileImage); // Remove the image from the DOM
        }
    } else {
        // Ensure the image is re-added if the screen size is greater than 320px
        if (!document.querySelector('.profile')) {
            var imageContainer = document.querySelector('.image-container');
            var img = document.createElement('img');
            img.className = 'profile';
            img.src = './images/me.jpeg'; // Ensure the correct path to your image
            img.alt = 'profile-picture';
            imageContainer.appendChild(img); // Add the image back to the container
        }
    }
}

// Attach the function to the resize event
window.addEventListener('resize', handleResize);

// Initial check
handleResize();

//for menu toggle
let menuList = document.getElementById("menuList");

function toggleMenu() {
    if (menuList.classList.contains('show')) {
        menuList.classList.remove('show');
    } else {
        menuList.classList.add('show');
    }
}

//FOR CARD CAROUSEL,box, card

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const box = document.querySelector('.box');
const cardWidth = document.querySelector('.card').offsetWidth; // Width of a single card

prevButton.addEventListener('click', () => {
    box.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    box.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
