const inputs = document.querySelectorAll('#angle');
const is_triangle_btn = document.querySelector('#is_triangle');
const output = document.querySelector('#Is_triangle_result');


function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;

}

function isTriangle() {
  if (inputs[0] == "" || inputs[1] == "" || inputs[2] == "") {
    alert("Please Enter Positive Values");
  }
  else {
    if (Number(inputs[0].value) < 0 || Number(inputs[1].value) < 0 || Number(inputs[2].value) < 0) {
      alert("Please Enter All Values");
    }
    else {
      const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
      if (sumOfAngles === 180) {
        output.innerText = "It is a Triangle";
      }
      else {
        output.innerText = "It is not a Triangle";
      }
    }
  }
}
is_triangle.addEventListener("click", isTriangle)