const Date_of_birth = document.querySelector("#Dob");
const Lucky_Number = document.querySelector("#Lucky_number");
const check_button = document.querySelector("#check");
const result1 = document.querySelector("#result");

function compareValues(sum, luckynumber) {
  if (sum % luckynumber == 0) {
    result1.innerText = "Your birthday is Lucky🚀";
  } else {
    result1.innerText = "Your birthday is not Lucky😢";
  }
}
function CheckBirthdayIsLucky() {
  const birthdate = Date_of_birth.value;
  if (!birthdate || !Lucky_Number.value) {
    alert("Please enter both the value");
  }
  else {
    const sum = CalculateSum(birthdate);
    compareValues(sum, Lucky_Number.value);
  }

}

function CalculateSum(birthdate) {
  birthdate = birthdate.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < birthdate.length; i++) {
    sum = sum + Number(birthdate.charAt(i));
  }
  return sum;
}


check_button.addEventListener('click', function call() {
  CheckBirthdayIsLucky();
});