//how avatar state is stored
if (localStorage.getItem("savedAvi") === null){
    var avi = 
        {
        hairBase:"",
        face: "",
        blush: "",
        eyebrows: "",
        fringe: "",
        eyes: "",
        lipstick: "",
        lips: "",
        eyelashes: "",
        shirt: ""
        } 
}else{
    var avi = JSON.parse(localStorage.getItem("savedAvi"))
    console.log(avi);
}

console.log(sessionStorage.length)

//updates avatar once feature is selected by user 
function updateAvi(feature,selection){
    //using if statement so avatar doesnt clear.
    if (sessionStorage.length==0){
        sessionStorage.setItem('avatar',JSON.stringify(avi));
        
    }
    else{
        avi = JSON.parse(sessionStorage.getItem("avatar"))
        avi[feature]=selection
        sessionStorage.setItem('avatar',JSON.stringify(avi))
        console.log(avi)
    }
   
    
    window.location.reload()
    document.getElementById(feature).src=genPath(feature);
    
   // sessionStorage.setItem('avatar',JSON.stringify(getAvi()))
}

//gets avatar
function getAvi(){
    
    if (sessionStorage.length==0){
        return avi;
    }
    else{
    let aviUpdated = JSON.parse(sessionStorage.getItem("avatar"))
    console.log(aviUpdated);

    return aviUpdated;
    }
}

//generates path for specific attribute
//this is a global function so that html2canvas can use it.

function genPath(attribute){
    var path = "";
    if(getAvi()[attribute]==""){
        path='pictures/blank.png';
    }
    else{
        path = 'pictures/'+getAvi()[attribute]+'.png';
    }
    
    console.log(path);
    
    return path;
}


console.log(genPath);
//clears avatar.
function startOver(){
let text = "Are you sure you would like to delete all of your progress?!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    sessionStorage.clear();
    localStorage.clear();
    console.log(sessionStorage);
    window.location.reload()
    alert("progress deleted.")
  } else {
    alert("Cancelled.")
  }
}

//saves avatar to local storage 
function save(){
    localStorage.setItem('savedAvi',JSON.stringify( getAvi()))
    alert("Avatar saved. You can safely close the window!")
}

//save image DOES NOT FUNCTION YET!
function downloadImage(){
    // Get the modal
var modal = document.getElementById("downloadSettings");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



    //SAVING IMAGE TO DEVICE DOES NOT FUNCTION RIGHT NOW. 
    //TRIED USING HTML2CANVAS, BUT COULD NOT GET RID OF ERROR THAT SAID "GENPATH" FUNCTION WAS UNDEFINED.
    //WOULD HAVE TO RE-WORK ENRITE CODE TO GET THIS TO WORK.

    //html2canvas(document.querySelector("#resultingPic")).then(canvas => {
       //saveAs(canvas.toDataURL(), 'emote.png');
        //document.body.appendChild(canvas)
    //});
}

// function saveAs(uri,filename){
//     var link = document.createElement('a');

//     if (typeof link.download === 'string') {

//         link.href = uri;
//         link.download = filename;

//         //Firefox requires the link to be in the body
//         document.body.appendChild(link);

//         //simulate click
//         link.click();

//         //remove the link when done
//         document.body.removeChild(link);

//     } else {

//         window.open(uri);

//     }
// }

