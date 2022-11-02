const inputs = document.querySelectorAll('#base-value');
const is_hypotenuse_btn = document.querySelector('#result');
const output = document.querySelector('#output');


function calculateHypotenuse(base, height) {
  if (base < 0 || height < 0) {
    alert("Please Enter Positive Value!!!");
  }
  else {
    sum_Of_values = base * base + height * height;
    return sum_Of_values;
  }
}

function isHypotenuse() {
  if (inputs[0] == "" || inputs[1] == "") {
    alert("Please Enter All Values");
  } else {
    if (Number(inputs[0].value) < 0 || Number(inputs[1].value) < 0) {
      alert("Please Enter Positive Values!!!");
    }
    else {
      const hypotenuse_formula =
        calculateHypotenuse(Number(inputs[0].value), Number(inputs[1].value));
      const Length_Of_hypotenuse = Math.sqrt(hypotenuse_formula);
      output.innerText = "Hypotenuse of Triangle is " + Length_Of_hypotenuse;
    }
  }
}
is_hypotenuse_btn.addEventListener("click", isHypotenuse)