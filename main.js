let hours = document.querySelector(".hour");
let mints = document.querySelector(".mints");
let secondes = document.querySelector(".secondes");
let am = document.querySelector(".am");
setInterval(() => {
  let t = new Date();
  let h = t.getHours();
  let h12 = h % 12;
  let amPm = h >= 12 ? "pm" : "am"; //reminder
  hours.innerHTML = h < 10 ? "0" : "" + h;
  hours.innerHTML = h > 12 ? (h12 < 10 ? "0" : "") + h12 : h;
  mints.innerHTML = (t.getMinutes() < 10 ? "0" : "") + t.getMinutes();
  secondes.innerHTML = (t.getSeconds() < 10 ? "0" : "") + t.getSeconds();
  am.innerHTML = amPm;
}, 1000);
