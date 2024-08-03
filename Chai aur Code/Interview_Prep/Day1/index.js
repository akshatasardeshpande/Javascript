const one = () => console.log("First");
const two = () => setTimeout(()=>console.log("Second"), 500);
const three = () => console.log("Three");

two();
one();
three();
