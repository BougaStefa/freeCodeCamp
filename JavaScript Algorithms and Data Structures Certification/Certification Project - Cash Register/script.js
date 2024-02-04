let price = 19.5;
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
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

const getTotalCid = () => {
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  return totalCid;
};

const handleChange = () => {
  let requiredChange = parseFloat(cash.value) - price;
  let outputMsg = "";
  let totalCid = getTotalCid();
  if (totalCid < requiredChange) {
    changeDue.innerHTML = `STATUS: INSUFFICIENT_FUNDS`;
  }
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinValue = getCoinValue(cid[i][0]);
    let coinTotalValue = cid[i][1];
    let coinName = cid[i][0];
    let numberOfCoins = Math.floor(coinTotalValue / coinValue);
    if (requiredChange >= coinValue) {
      let coinsToReturn = Math.floor(requiredChange / coinValue);
      if (coinsToReturn > numberOfCoins) {
        coinsToReturn = numberOfCoins;
      }
      requiredChange -= coinsToReturn * coinValue;
      requiredChange = Math.round(requiredChange * 100) / 100;
      outputMsg += coinName + ": $" + coinsToReturn * coinValue + " ";
      cid[i][1] -= coinsToReturn * coinValue;
    }
    totalCid = getTotalCid();
    if (totalCid < requiredChange) {
      changeDue.innerHTML = `STATUS: INSUFFICIENT_FUNDS`;
      return;
    }
  }
  if (requiredChange !== 0) {
    changeDue.innerHTML = `STATUS: INSUFFICIENT_FUNDS`;
    return;
  }
  if (getTotalCid() === 0) {
    changeDue.innerHTML = `STATUS: CLOSED ` + outputMsg;
  } else {
    changeDue.innerHTML = `STATUS: OPEN ` + outputMsg;
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
    handleChange();
  }
});
