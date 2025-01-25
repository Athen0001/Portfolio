//                                      **** words animations start ****
const textElement = document.getElementById("text");
const texts = [
  "Fullstack Developer",
];
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeText() {
  if (typing) {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      console.log("Typing:", textElement.textContent);
      setTimeout(typeText, 100);
    } else {
      typing = false;
      console.log("Pause after typing:", textElement.textContent);
      setTimeout(typeText, 1000); // Pause for 5 seconds before deleting
    }
  } else {
    if (charIndex > 0) {
      textElement.textContent = textElement.textContent.substring(
        0,
        textElement.textContent.length - 1
      );
      charIndex--;
      console.log("Deleting:", textElement.textContent);
      setTimeout(typeText, 100);
    } else {
      typing = true;
      textIndex = (textIndex + 1) % texts.length;
      console.log("Next text:", texts[textIndex]);
      setTimeout(typeText, 500); // Pause for 0.5 seconds before typing the next text
    }
  }
}
//                                          **** words animation end ****

//                                          **** hamburguer menu start ****
typeText();

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//                                           **** hamburguer menu end ****

//                                           **** carousel effect start ****
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".projects-container");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  let projects = Array.from(container.children);

  function setInitialPositions() {
    projects.forEach((item, index) => {
      item.classList.remove("center");
    });
    projects[1].classList.add("center");
  }

  function scrollNext() {
    const firstItem = projects.shift();
    projects.push(firstItem);
    container.appendChild(firstItem);
    setInitialPositions();
  }

  function scrollPrev() {
    const lastItem = projects.pop();
    projects.unshift(lastItem);
    container.insertBefore(lastItem, container.firstChild);
    setInitialPositions();
  }

  setInitialPositions();
  nextBtn.addEventListener("click", scrollNext);
  prevBtn.addEventListener("click", scrollPrev);
});
//                                              **** carousel effect end ****

//                                              **** contact function start ****

function openGmailCompose() {
  const email = "kevin.krauze@gmail.com";
  const subject = encodeURIComponent('Contacting');
  const body = encodeURIComponent('Hello Kevin, we saw your profile and...');

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");
}

//                                              **** contact function end ****