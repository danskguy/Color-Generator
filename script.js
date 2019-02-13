function greetings() {
    console.log(2 + 2);
}

var signInButton = document.getElementById('sign-in')
signInButton.addEventListener("click", function(event){
    alert("You are signed in");
    event.stopPropagation;
});

document.addEventListener("cick", function() {
    console.log("stop poking me");
});

function clickCallback(event){
    var newElement = document.createElement('div')
    newElement.innertext = "hi";
    document.body.appendChild(newElement);
    event.stopPropagation
}

document.getElementById('')

//var searchBox = document.getElementById("search")
//searchBox.addEventListener("keyup", function() {
//    console.log(event);
//    event.target.value += event.key;
//});

var colors = ['green', 'yellow', 'blue', 'red'];

for(var i = 0; i < colors.length; i++){
    addColorOption(colors[i]);
}

 
function addColorOption(colors){
    var newOption = document.createElement('option')
    newOption.value = colors;
    newOption.innertext = colors;
    document.getElementById('colors').appendChild(newOption);
}

document.getElementById('color-update').addEventListener('click', function() {
    var currColor = document.getElementsById()
    document.body.style.backgroundColor = currColor;
});