function isBreadAvailable() {
  return true;
}

function isEggAvailable() {
  return false;
}

function bringBread() {
  return new Promise((resolve, reject) => {
    if (isBreadAvailable()) {
      resolve("Here is your bread");
    } else if (isEggAvailable()) {
      resolve("Here is your Egg");
    } else {
      reject("Bread & Egg not available");
    }
  });
}

// Using Promise example below
// bringBread()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Using async await example below
async function final() {
  try {
    const myData = await bringBread();
    return myData;
  } catch (e) {
    return Promise.reject(e);
  }
}

final()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
