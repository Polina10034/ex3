window.onload = function(){
    const sample = arr => arr[Math.floor(Math.random() * arr.length)];
    var size=80;
    const container = document.getElementById('flex-container');
    var openBoxes=[]
    

function createBox(size){
    let newBox = document.createElement('div');
    newBox.className = "blackBox";
    newBox.style.height = `${size}px`;
    newBox.style.width = `${size}px`;
    let h1 = document.createElement('h1');
    h1.innerHTML = random_character();
    h1.className = "hidenBox";
    newBox.appendChild(h1);
    newBox.addEventListener('click', showBox);
    return newBox;
}
function compareBox(){
    return((openBoxes[0].innerHTML==openBoxes[1].innerHTML)? true: false);
}
     function showBox(){
        let curr= this;
        let child= this.firstChild;
        child.setAttribute("class", "clicked");
        openBoxes.push(this);
        console.log(openBoxes[0].textContent)

        if(openBoxes.length ==2){
            if(openBoxes[0].textContent == openBoxes[1].textContent){
                openBoxes[0].className="found";
                openBoxes[0].removeEventListener("click", showBox);
                openBoxes[1].className="found";
                openBoxes[1].removeEventListener("click", showBox);
                openBoxes=[];
            }
            else{
                setTimeout(closeF, 400);
            }
        }
    }

function closeF(){
    console.log("here");
    openBoxes[0].firstChild.removeAttribute("class");
    openBoxes[1].firstChild.removeAttribute("class");
    openBoxes=[];
}

function random_character() {
    let letter = ["A", "B", "C", "D", "E", "F"];
    return sample(letter);
}

function addBox(){
    for( let i=0; i<3; i++){
    let box= createBox(size);
    size+=20;
    container.appendChild(box);
    }
}

 
document.getElementById('loadbox').onclick = addBox;
    
 }