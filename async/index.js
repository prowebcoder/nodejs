let a = 10;
let b = 40;
const result = new Promise((resolve, reject) => {
  resolve(880);
});
result.then((data) => {
  console.log(a + data);
});
