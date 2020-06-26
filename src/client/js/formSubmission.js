const polarity = document.getElementById("polarity");
const polarity_confidence = document.getElementById("polarity_confidence");
const subjectivity = document.getElementById("subjectivity");
const subjectivity_confidence = document.getElementById(
  "subjectivity_confidence"
);
const text = document.getElementById("text");
const validationMessage = document.getElementById("validation-message");

function submitForm(e) {
  e.preventDefault();
  let formText = document.getElementById("url").value;
  if (Client.validateForm(formText)) {
    validationMessage.style.display = "none";
    let sentWord = {
      url: formText
    };
    fetch("http://localhost:2711/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sentWord)
    })
      .then(res => {
        return res.json();
      })
      .then(function(data) {
        polarity.innerHTML = `${data.polarity}`;
        polarity_confidence.innerHTML = `${data.polarity_confidence} degrees`;
        subjectivity.innerHTML = `${data.subjectivity}`;
        subjectivity_confidence.innerHTML = `${data.subjectivity_confidence}`;
        text.innerHTML = `${data.text}`;
      });
  } else {
    validationMessage.style.display = "block";
  }
}

export { submitForm };
