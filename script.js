function checkPassword() {

    const pass = document.getElementById("password").value;

    if (pass === "1405") {

        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        const music = document.getElementById("bgmusic");
        music.play();

    } else {

        alert("❌ Wrong Password");

    }
}

function startJourney() {

    document.getElementById("introPage").style.display = "none";
    document.getElementById("storyPage").style.display = "block";

}

function showGallery() {

    document.getElementById("storyPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "block";

    document.getElementById("galleryCaption").innerText = captions[0];

}

let currentPhoto = 1;

const captions = [

`📸💜
This is our very first photo together. We took this picture when we went for the competition. This photo is really special to me. ✨`,

`🛕🤍
We took this photo during the temple Kumbabishekam. A beautiful memory that I'll always cherish. 🌸`,

`🐘💛
We took this photo during Vinayagar Chaturthi. Such a happy and memorable day. ✨`,

`🥺🎒
We took this photo the day before I left for the hostel. A memory I'll always hold close to my heart. 💖`,

`👭💜
This is a really special photo. We took this when we wore the same dress and twinned together. ✨`,

`🌷💕
We took this photo on the last day of my leave before I went back to my hostel. This is one of my favorite photos, and it's even my chat wallpaper. 🥹📱`,

`🎂🎉
We took this photo on your birthday when I surprised you by coming all the way from Coimbatore to Kattuputhur. One of the happiest memories ever. ❤️`,

`🌉🌅
We took this photo when we went to Mayanur just to enjoy the bridge view. A simple trip, but a beautiful memory. 💙`,

`🛍️✨
We took this photo when we went shopping together. A day full of fun and laughter. 💕`,

`📸🤍
This is the last photo, but not the least. This is your favorite photo, right? 💜✨`

];

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto <= 10) {

        document.getElementById("galleryImage").src =
        "images/Photo " + currentPhoto + ".jpg";

        document.getElementById("galleryCaption").innerText = 
        captions[currentPhoto - 1];

    } else {

        document.getElementById("galleryPage").style.display = "none";
        document.getElementById("letterPage").style.display = "block";
    }

}
function showVideo(){

    document.getElementById("letterPage").style.display = "none";
    document.getElementById("videoPage").style.display = "block";

    const music = document.getElementById("bgmusic");
   music.pause();

    const video = document.getElementById("birthdayVideo");
    video.play();
    video.onended = function () {
    const music = document.getElementById("bgmusic");
    music.currentTime = 0;
    music.play();
};

}
function showFinalPage(){

    document.getElementById("introPage").style.display = "none";
    document.getElementById("storyPage").style.display = "none";
    document.getElementById("galleryPage").style.display = "none";
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("videoPage").style.display = "none";

    document.getElementById("finalPage").style.display = "block";

    launchFireworks();

    document.getElementById("typingText").innerHTML = "";
    i = 0;
    typeText();

    const video = document.getElementById("birthdayVideo");
    video.pause();
    video.currentTime = 0;

    const music = document.getElementById("bgmusic");
    music.pause();
    music.currentTime = 0;
    music.load();

    music.oncanplaythrough = function () {
        music.play();
    };

}

function openGift(){

    const gift = document.querySelector(".gift");

    gift.classList.add("open");

    document.getElementById("giftMessage").innerHTML =
    "🎉 Surprise! Happy Birthday Mine 💜✨";

}

function launchFireworks(){

    var duration = 5000;
    var end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
function oneLastHug(){

    document.getElementById("hugPopup").style.display="flex";

}

function closeHug() {

    document.getElementById("hugPopup").style.display = "none";

    document.getElementById("theEnd").style.display = "block";

}
function typeText() {

    if (i < message.length) {

        document.getElementById("typingText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeText, 50);

    }

}
