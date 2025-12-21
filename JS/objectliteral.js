const users = {
    name : "Nirdesh Joshi",
    email :"joshinirdesh10@gmail.com",

    getDetails: function (){
        console.log(`Name : ${this.name} Email : ${this.email}`);
    }
}

console.log(users.name);
console.log(users["name"]);

users.status = true;
console.log(users);

delete users.status==true;
console.log(users);

