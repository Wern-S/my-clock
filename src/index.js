const time = document.querySelector('.running-time');
const hour = document.querySelector('.running-time.hours');
const minute = document.querySelector('.running-time.minutes');
const second = document.querySelector('.running-time.seconds');

const getTime = (e) => {
  const timeNow = new Date();
  const timeHours = timeNow.getHours();
  const timeMinutes = timeNow.getMinutes();
  const timeSeconds = timeNow.getSeconds();
  const hourDegrees = (timeHours / 12 ) * 360 + 90;
  const minuteDegrees = (timeMinutes / 60 ) * 360 + 90;
  const secondDegrees = ( timeSeconds / 60 ) * 360 + 90;

  hour.style.transform = `rotate(${hourDegrees}deg)`;
  minute.style.transform = `rotate(${minuteDegrees}deg)`;
  second.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(getTime, 1000);
