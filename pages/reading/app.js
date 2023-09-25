const path = "/pages/reading/data/reading.json";

const container = document.querySelector(".container");


function getData(path){
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET", path, true);

    xhr.onload = function(){

        if (this.readyState == 4 && this.status == 200) {

            const jsonData = JSON.parse(xhr.responseText);
            

            jsonData.forEach(element => {
                const item = document.createElement("button");
                item.className = "item";
                
                const items = document.createElement("div");
                items.className = "items";
            

                item.innerHTML += `
                    <ul class="items-div">
                        <li class="item-content">
                            <div class="item-image">
                                <img src="${element.imageResource}" class="img">
                            </div>
                            <div class="item-text" style="font-weight : 600">${element.title}</div>
                        </li>
                    </ul>
                `;
                
                item.addEventListener("click",function(){
                    items.innerHTML = `
                        <div id="items-div">
                            <p id="p-text" style="margin:0px"> ${element.ENGtext} </p>
                            <p id="p-text" > ${element.TRtext} </p>
                        </div>
                        
                    `;
                    
                    

                })

                container.append(item);
                item.appendChild(items);


            });
            
            

           
        }else{
            console.log("Hata");
        }

        
    }

    xhr.send();

}

getData(path);