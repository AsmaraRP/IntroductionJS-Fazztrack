devideAndSort(5956560159466056);
function devideAndSort(num) {
  num = num
    .toString()
    .split(0)
    .map((result) => {
      let partResult = [];
      for (let i = 0; i <= result.length - 1; i++) {
        partResult[i] = result.charAt(i);
      }
      partResult = partResult.sort().join("");
      return partResult;
    });
  num = num.join("");
  console.log(num * 1);
  console.log(typeof (num * 1));
}
