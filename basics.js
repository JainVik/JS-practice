
const first=[1,2,3,4];
const second=["abc","abs","rff","fal"]

const final=[...first,...second] //merges both array in to a single array and spreads it
__________________________________________________________________________________________________________

const another_array=[1,2,3,[3[2,2,3],3,[3,6,4]],3,6,[2,3]];
//to flaten this array
const ans=another_array.flat(Infinity);//we can also give the index number till where we want to flat
__________________________________________________________________________________________________________

console.log(Array.from ({name:"hitesh"})) // will return an empty array cause we need to define if we want an array based on key

console.log(Object.keys(tinderUser)) ;
console.log(Object.values(tinderUser)) ; //here tinderUsers is an object with diff keys and values 
__________________________________________________________________________________________________________

const course = {
coursename: "abc",
price: "999",
courseInstructor:"vikarsh"
}
//we can access the course object values like this
course.price;

//but we generally will use destructuring to get the values
const {price: p} = course
console.log(p);
___________________________________________________________________________________________________________

