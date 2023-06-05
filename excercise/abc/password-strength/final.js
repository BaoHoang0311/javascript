window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  const checkLengthClass = document.querySelector(".check-length");
  const checkUpperClass = document.querySelector(".check-upper");
  const checkNumberClass = document.querySelector(".check-number");
  const checkSpecialClass = document.querySelector(".check-special");
  const checkItems = document.querySelectorAll(".check-item");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    
    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }

    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
    passwordInputValidation(checkUpperClass, value, /[A-Z]/);
    passwordInputValidation(checkNumberClass, value, /[0-9]/);
    passwordInputValidation(checkSpecialClass, value, /[$@%^&*()}{[\]}!]/);

  });

  function passwordInputValidation(selector, value, regex) {
    if (!regex.test(value)) {
      selector.classList.add("unactive");
      selector.classList.remove("active");
    } else {
      selector.classList.add("active");
      selector.classList.remove("unactive");
    }
  }
});
