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

export const calculateEarning = (earnings) => {
  const date = new Date();
  const getCurrentDay = date.getDate();
  const currentMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  
  const totalEarnings = earnings * (getCurrentDay / currentMonthLastDate);
  const getMaximum = totalEarnings * 0.5;
  return Math.floor(getMaximum);
};
