const container = document.querySelector(".contents");
const boxes = document.querySelectorAll(".box");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", addFooter);


function checkBoxes(){

    //console.log(window.innerHeight / 5 * 4);
    
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}

function addFooter(){
    

    var scrollHeight = window.innerHeight + window.scrollY;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollHeight >= documentHeight) {
        footer.innerHTML = `
            
            <p id="footerText">OLA English ile dil öğrenimi hiç bu kadar mümkün olmamıştı. Kendi hızınıza ve öğrenme tarzınıza uygun olarak ilerleyin. Akıcı bir dil becerisine sahip olmak artık hayal değil!

            Hemen indirin ve dil öğrenme yolculuğunuza başlayın!</p>
            <a id="playstoreBtn" href="https://play.google.com/store/apps/details?id=com.ekasoftware.english" target="_blank">
                <img src="/assets/photos/playstore.png" alt="playstore">
            </a>
        `;

        console.log("En asagıdasın");
    } else {
        console.log("yukarıdası abab ");
    }

}


checkBoxes();
addFooter();