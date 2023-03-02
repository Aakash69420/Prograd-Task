const displayDate = () => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleString();

  document.getElementById("display-element").innerHTML = dateString;

  // Update the time every second
  setInterval(() => {
    const newDate = new Date();
    const newDateString = newDate.toLocaleString();
    document.getElementById("display-element").innerHTML = newDateString;
  }, 1000);
}
