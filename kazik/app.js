let user = null;
let balance = 100;

if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    user = window.Telegram.WebApp.initDataUnsafe.user;
    document.getElementById("user").innerText = `${user.first_name} (${user.id})`;
    document.getElementById("balance").innerText = balance;
} else {
    document.body.innerHTML = "<p>Этот сайт должен открываться через Telegram.</p>";
    throw new Error("Telegram WebApp не обнаружен");
}

function playGame() {
  const bet = 10;
  if (balance < bet) {
    alert("Недостаточно монет!");
    return;
  }

  // Простая игра: 50% шанс выиграть
  const win = Math.random() > 0.5;
  if (win) {
    balance += bet;
    alert("Вы выиграли!");
  } else {
    balance -= bet;
    alert("Вы проиграли :(");
  }

  document.getElementById("balance").innerText = balance;

  // Отправляем данные обратно боту
  Telegram.WebApp.sendData(JSON.stringify({
    action: "update_balance",
    user_id: user.id,
    balance: balance
  }));
}