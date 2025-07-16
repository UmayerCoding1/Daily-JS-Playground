async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
    await sleep(1000); // wait 1 second
  }
  console.log("Go!");
}



console.log(countdown(3))