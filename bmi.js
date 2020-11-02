var bmi=() => {
  var height=document.getElementById('height').value;
  var weight=document.getElementById('weight').value;
  var results=document.getElementById('bmi');

  var bmi= (weight/((height*height)/100))*100;

  if(bmi<18.5){
        results.innerHTML= bmi + " - Under Weight";
    }
   else if(bmi>=18.5 && bmi<=24.9){
        results.innerHTML= bmi + " - Normal Weight";
    }
     else if(bmi>=25 && bmi<=29.9){
        results.innerHTML= bmi + " - Over Weight";
    }
    else if(bmi>=30){
      results.innerHTML= bmi + "- Obesity";
    }
    return false;
}
