const input = document.querySelectorAll('#base-value');
const area_btn = document.querySelector('#result');
const output = document.querySelector('#Output');

function CalculateArea(base, height) {

  const product = base * height;
  return product;

}

function input_values() {
  if (input[0] == "" || input[1] == "") {
    alert("Please Enter All Values");
  } else {
    if (Number(input[0].value) < 0 || Number(input[1].value) < 0) {
      alert("Please Enter Positive Values!!!");
    }
    else {
      const product_value = CalculateArea(Number(input[0].value), Number(input[1].value));
      const area_result = product_value / 2;
      output.innerText = "The Area of Triangle is " + area_result;
    }
  }
}
area_btn.addEventListener("click", input_values);
