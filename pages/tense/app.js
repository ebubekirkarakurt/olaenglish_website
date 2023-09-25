path = "/pages/tense/data/tense.json";

const tense = document.querySelector(".tenselist");
const tenseTitles = document.getElementById("tenseTitle");

const colorList = [
    "#e67a7a","#e67a7a","#fff4e1","#ffebb7","#e67a7a","#ff5722","#ff6464","#ff6464","#ff6464"
    ,"#6bd5e1","#6bd5e1","#6bd5e1","#6bd5e1"
]

function getRequest(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET",path,true);

    xhr.onload = function(){
        if (this.readyState == 4 && this.status == 200) {

            const jsonData = JSON.parse(xhr.responseText) 
            
            jsonData.forEach(element => {

                const btn = document.createElement('button');
                btn.className = 'btn';
                btn.innerHTML = `
                    <ul>
                        <li id="tenseListButton">${element.tense}</li>
                    </ul>
                `;
                
                const card = document.createElement('div');
                card.className = 'card';

                btn.addEventListener('click', () => {
                    card.innerHTML = `
                        <div style="display: block">
                            <p> <h4 style="display: inline-block">Pozitif kullanımı:</h4> ${element.positive}</p>
                            <p> <h4 style="display: inline-block">Negativ kullanımı:</h4> ${element.negative}</p>
                            <p> <h4 style="display: inline-block">Soru şeklinde kullanımı:</h4> ${element.question}</p>
                            <p> <h4 style="display: flex">Hangi durumlarda kullanılır?</h4> ${element.situation}</p>
                        </div>
                    `;

                });
                
                btn.style.backgroundColor = colorList[element.id];
                card.style.backgroundColor = colorList[element.id];
                console.log(i);
                

                tense.append(btn);
                btn.appendChild(card);

              
            
            });
           

        }
        else{
            console.error("hata");
        }
    }


    xhr.send();


}



var i;

function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "50%";
    }
  }

getRequest();