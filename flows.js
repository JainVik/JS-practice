const emptyObj ={}

if(Object.keys(emptyObj).length===0);
//this will tell ypu if the object is empty or not and simial can be done for arrays


//NUullish Coalescing Operator (??)
//generally use while calling form database or like using firebase and all
//as some time we dont get response directly, 
//we get 2 values sometime sp there are chances we get null response or maybe undefined
//at times like these our whole code structue can get into problems
//these ?? are defined for us to do things accordingly 
// vall =
// vati = null ?? 10
// vall = undefined ?? 15
val = 5 ?? 10 //here output is 5
val1 = null ?? 10  //here it is 10
val2 = undefined ?? 10// here also 10
val3 = null ?? 10 ?? 5 //here the one after first operaton so output is 10
__________________________________________________________________________________
