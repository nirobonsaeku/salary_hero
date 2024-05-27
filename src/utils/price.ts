export const toPrice = (x) => {
  if (!x) return 0;
  x = parseFloat(x);
  if (x.toFixed(2).split(".")[1] == "00") {
    x = x.toFixed(0);
  } else {
    x = x.toFixed(2);
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
