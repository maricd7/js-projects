let notificationsContainer = document.getElementById("notifications");

let succcessIcon = "fluent-emoji:check-mark-button";
let alertIcon = "fluent-emoji:warning";
let failIcon = "fluent-emoji:double-exclamation-mark";
let closeIcon = "material-symbols:close-rounded";

let successText = "Your request was a success.";
let alertText = "This is a alerting text";
let failText = "Your request failed.";

//buttons
let successBtn = document.getElementById("success-btn");
let failBtn = document.getElementById("fail-btn");
let alertBtn = document.getElementById("alert-btn");

//buttons functions

successBtn.addEventListener("click", () => {
  let toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-notification");
  let close = document.createElement("iconify-icon");
  close.icon = closeIcon;
  let text = document.createElement("p");
  let iconContainer = document.createElement("iconify-icon");
  iconContainer.icon = succcessIcon;

  text.innerText = successText;

  toastContainer.appendChild(iconContainer);
  toastContainer.appendChild(text);
  toastContainer.appendChild(close);

  notificationsContainer.appendChild(toastContainer);

  close.icon = closeIcon;

  // closing logic
  close.addEventListener("click", () => {
    toastContainer.remove();
  });
  setTimeout(() => {
    toastContainer.remove();
  }, 3000);
});
failBtn.addEventListener("click", () => {
  let toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-notification");
  let close = document.createElement("iconify-icon");
  close.icon = closeIcon;
  let text = document.createElement("p");
  let iconContainer = document.createElement("iconify-icon");
  iconContainer.icon = failIcon;

  text.innerText = failText;

  toastContainer.appendChild(iconContainer);
  toastContainer.appendChild(text);
  toastContainer.appendChild(close);

  notificationsContainer.appendChild(toastContainer);

  close.icon = closeIcon;

  // closing logic
  close.addEventListener("click", () => {
    toastContainer.remove();
  });
  setTimeout(() => {
    toastContainer.remove();
  }, 3000);
});
alertBtn.addEventListener("click", () => {
    let toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-notification");
    let close = document.createElement("iconify-icon");
    close.icon = closeIcon;
    let text = document.createElement("p");
    let iconContainer = document.createElement("iconify-icon");
    iconContainer.icon = alertIcon;
  
    text.innerText = alertText;
  
    toastContainer.appendChild(iconContainer);
    toastContainer.appendChild(text);
    toastContainer.appendChild(close);
  
    notificationsContainer.appendChild(toastContainer);
  
    close.icon = closeIcon;
  
    // closing logic
    close.addEventListener("click", () => {
      toastContainer.remove();
    });
    setTimeout(() => {
      toastContainer.remove();
    }, 3000);
});
