const condition1 = true;
const condition2 = true;

//promises
//https://www.youtube.com/watch?v=DHvZLI7Db8E

function callback(successCallback, failCallback) {
  if (!condition1) {
    failCallback("condition1 is false");
  } else if (!condition2) {
    failCallback("condition2 is false");
  } else {
    successCallback("success!");
  }
}

// callback(
//   function successCallback(successMessage) {
//     console.log(successMessage);
//   },
//   function errorCallback(failMessage) {
//     console.log(failMessage);
//   }
// );

function promise() {
  return new Promise((resolve, reject) => {
    if (!condition1) {
      reject("condition1 is false");
    } else if (!condition2) {
      reject("condition2 is false");
    } else {
      resolve("success!");
    }
  });
}

// promise()
//   .then(successMessage => {
//     console.log(successMessage);
//   })
//   .catch(failMessage => {
//     console.log(failMessage);
//   });

function promise1() {
  return new Promise((resolve, reject) => {
    resolve("promise 1 success!");
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    resolve("promise 2 success!");
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    // reject('promise 3 fail!');
    resolve("promise 3 success!");
  });
}

// Promise.all([promise1(), promise2(), promise3()])
//   .then(message => {
//     console.log(message);
//   })
//   .catch(message => {
//     console.log(message);
//   });

// async & await
//https://www.youtube.com/watch?v=V_Kr9OSfDeU&feature=youtu.be

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log("make a request!");
    if (location === "Google") {
      resolve("Hi, Goole!");
    } else {
      reject("I only talk to google!");
    }
  });
}

function processRequest(message) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`extra message to first request: ${message}`);
  });
}

// makeRequest("Google")
//   .then(response => {
//     console.log("make request sucess!");
//     return processRequest(response);
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

(async function makeRequest2() {
  try {
    const response = await makeRequest("facebook");
    console.log("make request sucess!");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
})();
