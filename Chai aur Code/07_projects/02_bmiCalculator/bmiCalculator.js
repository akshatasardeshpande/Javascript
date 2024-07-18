const form = document.querySelectorAll('form');

//this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

//looping through the form
form.forEach( function (formEle){
console.log(`${formEle}`);


formEle.addEventListener('submit', function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

if(height == '' || height == 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
}

if(weight == '' || weight == 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
}

else{
    const bmi = (weight/((height*height)/100000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
}
});

});
