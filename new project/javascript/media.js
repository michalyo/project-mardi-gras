const mediabtn = document.querySelectorAll(".media");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-popup"); 
const pictures = document.querySelectorAll("img");
const popupWindow = document.querySelector(".popup-window");
const phara = document.querySelector(".phara");
const texts = [
    "A clown is a very popular costume in the parade and you can see a lot of clowns around while the parade is taking place",
    "Throughout the parade you can buy very special masks that can be found in New Orleans",
    "Thousands of people participate in the Mardi Gras parade every year including very lavish processions of ornate vehicles",
    "At the parade in New Orleans you can find people dressed up in the best costumes in honor of the most glorious party",
    "It is very worthwhile to visit New Orleans on the days when the parade takes place because then you can see particularly spectacular costumes",
    "Beautiful people boasting glowing colors dancing and rejoicing in the streets of New Orleans",
    "Here we can see a disguised man who in my opinion is a bit reminiscent of the talented comedian Adir Mille",
    "New Orleans women dancers and singers are all out drinking drinking celebrating and having fun",
    "In the parade you can go up to the balconies to watch passers-by and enjoy what you see",
    "All the people cheer for the decorated car passing by and play happy music everywhere how much fun",
    "The balconies are decorated with happy and raging people to the sound of happy and joyful music that lifts the mood",
    "In the picture in front of us you can see the streets of New Orleans illuminated with colorful and beautiful light almost like the site in front of you",
];

 for( let x = 0;x < mediabtn.length; x++){
    mediabtn[x].addEventListener('click' , ()=>{
        popupWindow.style.background = `url(${pictures[x].getAttribute("src")})`;
        popupWindow.style.backgroundSize = "cover";
        popupWindow.style.backgroundPosition = "center";
        popup.style.display = "block";
        phara.innerHTML = texts[x];
    });
}
closePopup.addEventListener('click', ()=>{
    popup.style.display = "none";
});



