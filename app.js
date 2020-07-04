// Assignment by Ali Abbas Devjiani
// Assignment No. 7 - Calculator
// Calculator
function getNumber(num){
    // console.log(num) 
    var result = document.getElementById("result")
    result.value += num      // + sign in this line will help in concatenation otherwise value of variable will be replaced / updated
  }
  
  function clearResult(){
    var result = document.getElementById("result")
    result.value = " "
  }
  
  function getResult(){
    var result = document.getElementById("result")
    //console.log(result.value)
    result.value = eval(result.value)
  }