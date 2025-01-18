 const myNums =[1,2,3,4,5,6,7,8,9,0]

const newNums=myNums.filter( (num) => num >4 );// filter function returns value ,foreach function dosen't
console.log(newNums) ;//it prints 5,6,7,8,9,0


const ans= myNums.map( (num) => num+10 ); //it iterates on every element


const ans1=myNums.reduce( (acc,currval)=> (acc+currval),0) //  this is the initial value
console.log(ans1)
 // initially it takes the value 0 which we have provides
//at first it add the initial value to acc
//and current array value to currval then add them both and stored 
// the result in acc and repeats the process with next curr element
//the initial value is only called at starting once