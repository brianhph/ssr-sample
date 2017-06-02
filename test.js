async function main() {
 await ping();
 process.exit();
}

async function ping() {
 for (var i = 0; i < 10; i++) {
  await delay(300);
  console.log("ping");
 }
}

function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(() => reject("This doesn't work!"), ms));
}

main();
