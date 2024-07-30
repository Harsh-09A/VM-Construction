window.alert = function (message, timeout = null) {
  const alert = document.createElement("div");
  const alertButton = document.createElement("button");
  alertButton.innerText = "OK";
  alert.classList.add("alert");
  //   alert.setAttribute("style", "
  //     posi

  //     ");
  alert.innerHTML = `<h5 class="thank-you-popup style="padding: 10px">${message} </h5>`;
  alert.appendChild(alertButton);
  alertButton.addEventListener("click", (e) => {
    alert.remove();
  });
  if (timeout !== null)
    setTimeout(() => {
      alert.remove();
    }, Number(timeout));

  document.body.appendChild(alert);
};
