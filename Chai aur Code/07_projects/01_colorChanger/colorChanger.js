const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//looping through buttons
buttons.forEach(function (button){
console.log(button);

//add event to each button
button.addEventListener('click', function(e){
console.log(e);
console.log(e.target.id);
if(e.target.id == 'grey'){
    body.style.backgroundColor = e.target.id;
}

else if(e.target.id == 'white'){
    body.style.backgroundColor = e.target.id;
}
else if(e.target.id == 'blue'){
    body.style.backgroundColor = e.target.id;
}
else if(e.target.id == 'yellow'){
    body.style.backgroundColor = e.target.id;
}
})
});