let formBtn = document.getElementById("close-form");
let form = document.querySelector(".form");

let toggler = () => {
  form.classList.toggle("hide");

  formBtn.innerText === "X"
    ? (formBtn.innerText = "+")
    : (formBtn.innerText = "X");
};

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let emailList = [];

let validateForm = () => {
  if (nameInput.value == false && emailInput.value == false) {
    nameInput.style.border = "2px solid red";
    emailInput.style.border = "2px solid red";
    alert("you must enter a name and an email address to subscribe!");
  } else if (nameInput.value == false) {
    nameInput.style.border = "2px solid red";
    alert("you must enter a name to subscribe!");
  } else if (emailInput == false) {
    emailInput.style.border = "2px solid red";
    alert("you must enter an email address to subscribe!");
  } else {
    emailList.push(nameInput.value, emailInput.value);
    displayThankYou();
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

let formContainer = document.querySelector(".form-container");

let displayThankYou = () => {
  formContainer.innerText = "Thank you for subscribing!";
  setTimeout(
    (removeMessage = () => {
      formContainer.remove();
    }),
    3000
  );
};

nameInput.addEventListener("change", () => {
  nameInput.style.border = "none";
});

emailInput.addEventListener("change", () => {
  emailInput.style.border = "none";
});

let cart = document.createElement("div");
let main = document.querySelector("main");
let cartItems = 0;

let addToCart = () => {
  if (cartItems === 0) {
    cartItems = 1;
    cart.setAttribute("class", "cart-display");
    cart.innerText = "Your Cart: 1 item";
    main.appendChild(cart);
  } else {
    cartItems += 1;
    cart.innerText = `Your Cart: ${cartItems} items`;
  }
};
