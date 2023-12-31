document.addEventListener("DOMContentLoaded", function () {
  const portfolio = document.getElementById("portfolio");
  const randomQuoteGenerator = document.getElementById("randomQuoteGenerator");
  const BMI = document.getElementById("BMI");
  const piano = document.getElementById("piano");

  portfolio.addEventListener("click", function () {
    window.location = "index.html";
  });
  randomQuoteGenerator.addEventListener("click", function () {
    window.location= "https://glar3.github.io/Random-Quote-Generator/";
  });
  BMI.addEventListener("click", function () {
    window.location = "index.html";
  });
  piano.addEventListener("click", function () {
    window.location = "index.html";
  });
});
