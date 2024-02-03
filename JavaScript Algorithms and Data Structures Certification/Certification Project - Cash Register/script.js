let price = 19.5;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

const getCoinValue = (coinName) => {
  switch (coinName) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "ONE HUNDRED":
      return 100;
  }
};
const handleChange = (price, cash, cid) => {
  let changeValue = cash - price;
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  if (totalCid < changeValue) {
    changeDue.innerHTML = "STATUS: INSUFFICIENT_FUNDS";
    return;
  }
  if (totalCid === changeValue) {
    changeDue.innerHTML = "STATUS: CLOSED";
    return;
  }
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinValue = getCoinValue(cid[i][0]);
    let coinName = cid[i][0];
    let coinTotal = cid[i][1];
    let coinAmount = Math.round(coinTotal / coinValue);
    if (changeValue >= coinValue) {
      let coinsToReturn = Math.floor(changeValue / coinValue);
      if (coinsToReturn > coinAmount) {
        coinsToReturn = coinAmount;
      }
      changeValue -= coinsToReturn * coinValue;
      changeValue = changeValue.toFixed(2);
      totalCid -= coinsToReturn * coinValue;
      changeDue.innerHTML += `${coinName}: $${coinsToReturn * coinValue} <br>`;
    }
  }
  if (totalCid === 0) {
    changeDue.innerHTML = "STATUS: CLOSED" + "<br>" + changeDue.innerHTML;
  } else {
    changeDue.innerHTML = "STATUS: OPEN" + "<br>" + changeDue.innerHTML;
  }
};

purchaseBtn.addEventListener("click", () => {
  if (parseFloat(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (parseFloat(cash.value) === price) {
    changeDue.innerHTML = `No change due - customer paid with exact cash`;
    return;
  } else {
    handleChange(price, parseFloat(cash.value), cid);
  }
});
