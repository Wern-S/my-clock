const getTime = (e) => {
  const timeNow = new Date();
  const timeSeconds = timeNow.getSeconds();
  console.log(timeSeconds);
}

getTime();
