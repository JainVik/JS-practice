//if we have variable parameters or we dont know how many parameters can be there in future

function CalculatePrice(...num1) {
  //here ... thsi is known as rest operators
  return num1; //now it will return an array of all the passed data
}
console.log(CalculatePrice(200, 300, 400));
___________________________________________________________________________________________________



//using function on objects
const user = {
  username: "vik",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username}and price id ${anyobject.prices}`
  );
}
handleObject(user);



//we can also pass directly
handleObject({
  username: "vik",
  prices: 100,
});
__________________________________________________________________________________________________



const user1 = {
  usernam: "vik",
  price: 100,

  welcomeMessage: function () {
    console.log(`${this.username},welcome brothaa`); //here this is reffering to current context of the object 
  },
};
user1.welcomeMessage();
 

//we can also wrtie function like this -- const chai = function(){}
const chai = function(){
    let username="vik"
    console.log(this.username);//here this will print undefined as (this) can only be used with objects
}
chai()



//this is arrow function () => {}
const chai1 = () => {
    let username="vik"
    console.log(this.username);//here also this will print undefined as (this) can only be used with objects
console.log(this);// here (this) will print {} an empty brackets.
}
chai1()


const add = (n1,n2) =>{
    return n1+n2;
}
consolw.log(add(1,2));


const add1 = (n1,n2) => n1+n2; // we can directly return as we only have single line statement
//it will return n1+n2


const add2 = (n1,n2) => (n1+n2) //can also write it like this 
//we only use return with curly brackets { }, but here we used ( )


const fun = () => ({username:"vik"})
//if we have to return an object we have to wrap it in paranthesis
console.log(fun());
_________________________________________________________________________________________________



//to remove the pollution created by global scope variables we use ()() 

(function crazy() { //this is a named ify as it has a name 
    console.log("gooday")
})();//use semicolon 
//first () is used to write function and second () is used to execute it 


//(  ()=>{} )();//can also be used with arrow function

((name) => { //this a non named ify
    console.log(`sup buddy ${name}`);
} )("vikarsh"); 
_________________________________________________________________________________________________