let array =[];
       
       
function displayContext(data){
    let html = '';
    let result = document.querySelector("#result");
    
    for(let game of data){
        html+= ` <div class="container">
                    <div class="box">
                        <div class="img-box">
                            <img src="${game.image}">
                        </div>
                        <div class="details">
                           <div class="content">
                               <h2>${game.name}</h2>
                                <p>${game.species}</p>
                                 <p>${game.status}</p>
                                 <p>${game.gender}<p>
                                <p>${game.origin.name}</p>
                                    
                           </div>
                        </div>
                    </div>
                </div>`;
    }
    result.innerHTML = html;
   
}

async function getData(){
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    array = data.results;
    displayContext(array);
  

}


function nameCompareAcsending(a,b){
    return a.name.localeCompare(b.name);
    
}
function sortByName(){
    let sorted = array.sort(nameCompareAcsending);
    displayContext(sorted);
}
function nameCompareDescending(a,b){
    return b.name.localeCompare(a.name);
    
}
function sortByNameDescending(){
    let sorted = array.sort(nameCompareDescending);
    
    displayContext(sorted);
}
function SpeciesCompareA(a,b){
    return a.species.localeCompare(b.species);
}
function sortBySpeciesA(){
    let sorted = array.sort(SpeciesCompareA);
   
    displayContext(sorted);
}
function SpeciesCompareD(a,b){
    return b.species.localeCompare(a.species);
}
function sortBySpeciesDescending(){
    let sorted = array.sort(SpeciesCompareD);
   
    displayContext(sorted);
}

 function SelectRandom(){
    let random = Math.floor(Math.random() * array.length);
    let randomCharacter = array[random];
    
    displayContext([randomCharacter]);
} 



 function search(){
    let searchKey = document.getElementById('searchKey').value;
    let filtered = array.filter(function(item){
        return item.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    displayContext(filtered);
} 

getData();
