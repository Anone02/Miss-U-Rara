const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    wrapper.innerHTML = ""; // Clear the entire wrapper content
    const newMessage = document.createElement("h2");
    newMessage.classList.add("new-message");
    newMessage.innerHTML = "Aaaaa, I Love You!! ❤️";
    
    wrapper.appendChild(newMessage); // Add the new message
    
    const newGif = document.createElement("img");
    newGif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
    newGif.classList.add("gif"); // Add class for styling
    
    wrapper.appendChild(newGif); // Add the new GIF
});


noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
