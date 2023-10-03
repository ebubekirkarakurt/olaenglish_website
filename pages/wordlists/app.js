const path = "/pages/wordlists/data/wordlist.json";

const container = document.querySelector(".view_wrap");
const vi_left = document.querySelector(".vi_left");



class getDatawithXHR{

    get(path){
        const xhr = new XMLHttpRequest;

        xhr.open("GET",path, true)

        xhr.onload = function(){

            if (this.readyState == 4 && this.status == 200) {
                
                const wordsJsonList = JSON.parse(xhr.responseText); 

                var categoryNames = [
                    "Ülkeler" , "Meyve/Sebze", "Yol Tarifi",
                    "Hava Durumu/ Mevsimler", "Günlük Aktivite",
                    "Alışveriş", "SAğlık", "Rutinler", "Tatil ve Gezi" 
                ]

                const table = document.createElement("div");
                table.className = "div";

                wordsJsonList.forEach(word => {

                    table.innerHTML += `
                    <div class="view_item">
                        <div class="vi_right">
                        
                            <p class="title">${word.ENG}</p>
                            <p class="content">${word.TR}</p>
                                
                        </div>
                    </div>      
                       
                    `;  
                

                    var filteredData = xhr.responseText.TR;
                    
                    console.log(filteredData);
                    
                    container.appendChild(table);
                        
                    
                
                });
                
                
                
            }

        }

        
        
        

        xhr.send();




    }

}

const getData = new getDatawithXHR();


getData.get(path);