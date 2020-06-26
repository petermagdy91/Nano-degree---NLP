function validateForm(inputText) {
  var regex = RegExp("^(http|https)://");
  if (regex.test(inputText) == false) {
    return false;
  } else {
    return true;
  }
}
export { validateForm };
