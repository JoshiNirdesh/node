console.log("Hello, World!");

// alert("This is a Alert Message");
// let a = prompt("Enter your name ");
// console.log("Welcome " + a);

let x = confirm("Are you sure you want to delete this page?");

if(x){
    console.log("Page Deleted");
}
else{
    console.log("Page Not Deleted");
}