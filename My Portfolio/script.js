
const typingElement = document.querySelector("#typing");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "JavaScript Learner",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const currentRole = roles[roleIndex];

    typingElement.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
        setTimeout(() => {
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
            typeRole();
        }, 1500);
        return;
    }

    setTimeout(typeRole, 100);
}

typeRole();



