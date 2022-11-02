const input=document.querySelectorAll('#base-value');
const area_btn= document.querySelector('#result');
const output= document.querySelector('#Output');

function CalculateArea(base,height){
  const product=base*height;
  return product;
}

function input_values(){
  const product_value=CalculateArea(Number(input[0].value),Number(input[1].value));
  const area_result=product_value/2;
  output.innerText="The Area of Triangle is "+area_result;
  
}
area_btn.addEventListener("click",input_values);
