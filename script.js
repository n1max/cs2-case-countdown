function updateCountdown() {
  const targetDate = new Date("2028-07-24T20:00:00+03:00");
  const now = new Date();
  const timeLeft = targetDate - now;
  const countdownEl = document.getElementById("countdown");
  const messageEl = document.getElementById("birthdayMessage");

  if (timeLeft <= 0) {
    countdownEl.style.display = "none";
    messageEl.style.display = "block";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    countdownEl.innerHTML =
      //`До открытия кейсов: ${days}д ${hours}ч ${minutes}м ${seconds}с<br>5/11 кейсов ❤️ Спасибо каждому за донат!`;
      `Стримлю каждый день, в основном ближе к 20:00 ❤️ Спасибо каждому за донат и подписки это очень мотивирует!
      Буду очень рад вашей подписке на ТГ, там все новости и розыгрыши😘`;
  }
}
window.onload = function () {
  updateCountdown();
  setInterval(updateCountdown, 1000);
};
