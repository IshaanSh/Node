

// const a = {
//   Name: "ishaan",
//   Age: 24,
//   Clas: true

const { resolve } = require("dns");

// }

// a['Name'] = "valhalla"
// a['Age']= 90
// a['Team']="Lebron"
// // console.log(a)


// let a1 = 20;

// let b1= 80;

// // console.log("a1+b1=", a1+b1)

// let sum = (sum1 ,sum2) => sum1+sum2;

// let sum1= 1;

// let sum2= 2;
// // return sum;

// alert(sum(sum1, sum2));


// var a = "Valhalla";
// alert(a);
// document.write(a);
  

//async

// console.log("start")

// setTimeout(function(){
//   console.log("hii")
// },3000)

// console.log("end")

//callbacks

// function Async1(callback) {
//   setTimeout(function() {
//     // Simulating an asynchronous operation
//     // When done, invoke the callback
//     callback("Data received!");
//   }, 2000); // Simulate a 2-second delay
// }

// function ResultFinal(result) {
//   console.log("Received result:", result);
// }

// // Call the function and provide the callback
// Async1(ResultFinal);


// async await
async function NBA() {
        let teamA = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("LA Lakers")
                }, 2000)
        })

        let teamB = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("Denver Nuggets")
                }, 5000)
        })

        // teamA.then(alert)
        // teamB.then(alert)
        console.log("getting team")
        let A = await teamA
        console.log("The team A is : " + A)
        console.log("getting team")
        let B = await teamB
        console.log("The team B is : " + B)
        return [A, B]
}

const DraftNba = async () => {
        console.log("Golden State Warriors")
}

const main1 = async () => {
        console.log("Nationa Basketball Assosiation ")
        let a = await NBA()
        let b = await DraftNba()

}
main1()

//callback queue

// Asynchronous Operation 1
// ↓
// [Start Operation 1]   →  (Operation 1 takes time to complete)
//                       ↓
// Asynchronous Operation 2
// ↓
// [Start Operation 2]   →  (Operation 2 takes time to complete)
//                       ↓
// Callback Queue        →  [Callback for Operation 1] → [Callback for Operation 2]
//                       ↓
// Event Loop            →  (Checks Call Stack)
//                       ↓
// Call Stack            →  [Empty]
//                       ↓
// [Callback for Operation 1]  →  (Executed)
//                       ↓
// Call Stack            →  [Callback for Operation 1]
//                       ↓
// [Callback for Operation 2]  →  (Executed)
//                       ↓
// Call Stack            →  [Callback for Operation 2]
//                       ↓
// [Empty Call Stack]    →  (Event Loop checks the Callback Queue again)
//                       ↓
// Callback Queue        →  [Empty]
