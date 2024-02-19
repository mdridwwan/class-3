let jj = [
  "jasy",
  "kalam",
  "jamal",
  "sakib",
  "rahul",
  "ajij",
  "shubmi",
  "kalu",
  "jamali",
  "ade",
];

function ronyfind(arr) {
  let len = arr.length;
  let nameStore = [];
  for (let i = 0; i < len; i++) {
    if (arr[i] === "Rony") {
      nameStore.push(arr[i]);
    }
  }
  if (nameStore[0] === "Rony") {
    console.log("Rony Is available");
  } else {
    console.log("Rony Is Not available");
  }
}

ronyfind(jj);
