let user = null;
let balance = 100;

if (!window.Telegram?.WebApp) {
    document.body.innerHTML = "<p>Telegram не найден. Откройте через Telegram.</p>";
    throw new Error("Telegram API не загружен");
}

const WebApp = window.Telegram.WebApp;

WebApp.ready();
WebApp.expand();

if (WebApp.initDataUnsafe?.user) {
    user = WebApp.initDataUnsafe.user;
    document.getElementById("user").innerText = `${user.first_name} (${user.id})`;
    document.getElementById("balance").innerText = balance;
} else {
    document.body.innerHTML = "<p>⚠️ Запущено не через Telegram или нет данных пользователя</p>";
    throw new Error("WebApp initDataUnsafe.user не найден");
}

function playGame() {
  const bet = 10;
  if (balance < bet) {
    alert("Недостаточно монет!");
    return;
  }

  const win = Math.random() > 0.5;
  if (win) {
    balance += bet;
    alert("Вы выиграли!");
  } else {
    balance -= bet;
    alert("Вы проиграли :(");
  }

  document.getElementById("balance").innerText = balance;

  WebApp.sendData(JSON.stringify({
    action: "update_balance",
    user_id: user.id,
    balance: balance
  }));
}
