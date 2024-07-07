const hourDisplayElement = document.getElementById("hour"),
  minuteDisplayElement = document.getElementById("minute"),
  secondDisplayElement = document.getElementById("second");

function displayTime() {
  setInterval(() => {
    const date = new Date();

    const curUTCHour = date.getUTCHours(),
      curUTCMinute = date.getUTCMinutes(),
      curUTCSecond = date.getUTCSeconds();

    hourDisplayElement.textContent = `${
      curUTCHour < 10 ? "0" : ""
    }${curUTCHour}`;
    minuteDisplayElement.textContent = `${
      curUTCMinute < 10 ? "0" : ""
    }${curUTCMinute}`;
    secondDisplayElement.textContent = `${
      curUTCSecond < 10 ? "0" : ""
    }${curUTCSecond}`;
  }, 1000);
}
displayTime();
