function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




document.addEventListener('DOMContentLoaded', () => {
    class Cursor {
      constructor(options) {
        this.targets = options.targets || [];
        this.cursorElement = document.querySelector('[data-cursor]');
        this.init();
      }

     init() {
    this.targets.forEach(target => {
      const elements = document.querySelectorAll(target);
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          this.cursorElement.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', () => {
          this.cursorElement.classList.remove('cursor-hover');
        });
      });
    });

    document.addEventListener('mousemove', (event) => {
      this.moveCursor(event);
    });
  }

      moveCursor(event) {
        const x = event.clientX;
        const y = event.clientY;

        this.cursorElement.style.left = `${x}px`;
        this.cursorElement.style.top = `${y}px`;
      }
    }

    new Cursor({
      targets: ['a']
    });
  });






// Smooth scrolling between sections
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav .nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offset = 120; // Adjust this value as needed
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});










const themeButton = document.getElementById("theme-button");

const themeButtonsmall = document.getElementById("theme-button-small");
const iconTheme = "ri-sun-line";
const body = document.querySelector('body');
const btnColor2 = document.querySelector('.btn-color-2');
const anchorNav = document.querySelectorAll('a');
const header = document.getElementById('desktop-nav');

const logo = document.querySelector('.logo');






themeButton.addEventListener("click", () => {
    
    body.classList.toggle("dark-mode");
    anchorNav.forEach(anchor => {
        anchor.classList.toggle("dark-mode-anchor");
    });



    // Toggle button icon class
    if (themeButton.classList.contains('ri-moon-line')) {
        themeButton.classList.remove('ri-moon-line');
        themeButton.classList.add('ri-sun-line');
    } else {
        themeButton.classList.remove('ri-sun-line');
        themeButton.classList.add('ri-moon-line');
    }

    // Adjust header background color based on theme
    if (body.classList.contains('dark-mode')) {
        header.style.backgroundColor = '#000';
        btnColor2.style.color = "white";


    } else {
        header.style.backgroundColor = '#fff';
        btnColor2.style.color = "black";
        myptag.style.color = "#333";
    }
    
});


 themeButtonsmall.addEventListener("click", () => {
        // Toggle dark mode class on body
        body.classList.toggle("dark-mode");
        anchorNav.forEach(anchor => {
            anchor.classList.toggle("dark-mode-anchor");
        });
          first_text.style.color= "black";
        if (btnColor2.style.color === "black") {
            btnColor2.style.color = "white";
        } else {
            btnColor2.style.color = "black";
        }
        if (document.body.classList.contains('dark-mode')) {
            // Apply dark mode cursor styles
            cursor.style.borderColor = 'white'; // Set the cursor border color for dark mode
            cursorDot.style.backgroundColor = 'white'; // Set the cursor dot color for dark mode
        } else {
            // Apply light mode cursor styles
            cursor.style.borderColor = 'black'; // Set the cursor border color for light mode
            cursorDot.style.backgroundColor = 'black'; // Set the cursor dot color for light mode
        }


        // Toggle button icon class
        if (themeButton.classList.contains('ri-moon-line')) {
            themeButton.classList.remove('ri-moon-line');
            themeButton.classList.add('ri-sun-line');

        } else {
            themeButton.classList.remove('ri-sun-line');
            themeButton.classList.add('ri-moon-line');
        }

        // Adjust header background color based on theme
        // Adjust header background color based on theme
        if (body.classList.contains('dark-mode')) {
            header.style.backgroundColor = '#000';
            btnColor2.style.color = "white";
            myptag.style.color = "#ccc";

        } else {
            header.style.backgroundColor = '#fff';
			btnColor2.style.color = "black";

            myptag.style.color = "#333";

        }
    });

let lastScrollTop = 0;
const homeSection = document.getElementById('profile'); // Assuming the ID of the home section is 'home'
const headerHeightNormal = '9vh'; // Normal height of the header
const headerHeightHome = '13vh'; // Height of the header when in the home section

// const shadowHeader = () => {
//     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop ) {
//         // Scrolling down and below the home section, hide the header
//         header.style.transform = 'translateY(-100%)';
//     } else {
//         // Scrolling up or above the home section, show the header
//         header.style.transform = 'translateY(0)';
//         header.style.position = 'fixed';
//         header.style.zIndex = '999';
//         header.style.marginTop = '0';
//         header.style.width = '100%';
//         // Adjust header height based on whether in home section or not
//         header.style.height = (currentScroll < homeSection.offsetTop + homeSection.offsetHeight) ? headerHeightHome : headerHeightNormal;
//         header.classList.add("shadow-header");
//         anchorNav.forEach(anchor => {
//             anchor.style.fontSize = '1.2rem'; // Adjust the font size as per your requirement
//         });
//         logo.style.fontSize = '1.5rem';
//     }
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// };

// window.addEventListener('scroll', shadowHeader);



const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Backend Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "DevOps Engineer";
    }, 4000);

}
textLoad()
setInterval(textLoad, 8000)






document.addEventListener('DOMContentLoaded', () => {
    
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Update cursor positions
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });


    document.body.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
    });

    document.body.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    });

     document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        updateCursorPosition(touch.clientX, touch.clientY);
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
    });

    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        updateCursorPosition(touch.clientX, touch.clientY);
    });

    document.addEventListener('touchend', () => {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    });

    document.querySelectorAll('a, button, i, .interactive, .home_img,.about-pic,.a').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            cursorDot.classList.add('hovering');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            cursorDot.classList.remove('hovering');
        });
    });
});

