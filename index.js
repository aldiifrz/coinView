fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana&vs_currencies=idr&include_24hr_change=true"
)
  .then((res) => res.json())
  .then((json) => {
    const container = document.querySelector(".container");
    const coins = Object.getOwnPropertyNames(json);

    for (let coin of coins) {
      const coinInfo = json[`${coin}`];
      const numericPrice = coinInfo.idr;
      const formattedPrice = parseFloat(numericPrice).toLocaleString('id');
      const change = coinInfo.idr_24h_change.toFixed(5);

      container.innerHTML += `
    <div class="coin ${change < 0 ? "falling" : "rising"}">
        <div class="coin-logo">
            <img src="images/${coin}.png">
        </div>
        <div class="coin-name">
            <h3>${coin}</h3>
            <span>/IDR</span>
        </div>
        <div class="coin-price">
            <span class="price">IDR ${formattedPrice}</span>
            <span class="change">${change}</span>
        </div>
    </div>
`;
    }
  });