function numCounter(text) {
    return text.replace(/[^a-z]/gi, "").length;
  }
  
  
  console.log(numCounter("Hello my name is Elmin!"));




  function isValidNumber(phoneNumber) {
    return typeof phoneNumber == "string" && phoneNumber.length == 12 && phoneNumber.startsWith("+7");
  }
  
  console.log(isValidNumber("+73421957890"));
  console.log(isValidNumber("+7123456789")); 
  console.log(isValidNumber("+81234567890")); 



  function isLucky(number) {
    const numStr = number.toString();
    
    if (numStr.length !== 6) {
      return false;
    }
  
    const firstNum = +numStr[0] + +numStr[1] + +numStr[2];
    const secondNum = +numStr[3] + +numStr[4] + +numStr[5];
  
    return firstNum === secondNum;
  }

  console.log(isLucky(123321));
  console.log(isLucky(254867)); 
  console.log(isLucky(1234567));


  
  