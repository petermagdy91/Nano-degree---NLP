function validateForm(inputValue) {
  if (inputValue.trim(" ") !== "") {
    return true;
  } else {
    return false;
  }
}

export { validateForm };
