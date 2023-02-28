/* Yahoo BABA  Promise*/

/* let complete = true;

let prom = new Promise(function(resolve, reject){
    if(complete){
        resolve("Successfull");
    }
    else{
        reject("Failed");
    }
});
console.log(prom); 
*/
/* 
// Example 1
function prom(complete) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching Data");
    setTimeout(() => {
        if (complete) {
            resolve("Successfull");
          } else {
            reject("Failed");
          }
    }, 1000)
  });
}

let onFullFilment = (result) => {
  console.log(result);
};
let onRejection = (error) => {
  console.log(error);
}; 
// console.log(prom(true));

prom(true).then(onFullFilment).catch(onRejection); // Successfull
prom(false).then(onFullFilment).catch(onRejection); // Failed

*/

function prom(a, b) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching Data");
    let c = a / b;
    setTimeout(() => {
      if (a,b) {
        resolve(`Your Awnser : ${c}`);
      } else {
        reject("Failed to Calculate");
      }
    }, 1000);
  });
}

/*
 prom(5,3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
Your Awnser : 1.6666666666666667 
*/
prom(5,0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// Your Awnser : Failed to Calculate