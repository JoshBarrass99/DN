

// Name Input Highlight

function checkName(){
  document.getElementById('nameInput').className = ""

  let nameFormat = /^[A-Za-z ]+$/

  let f = document.getElementById("nameInput").value

  if(f.match(nameFormat)){
    // alert('make green')
    document.getElementById('nameInput').classList.add("makeGreen")
  }
  else{
    // alert('makered')
    document.getElementById('nameInput').classList.add("makeRed")
    alert("Please enter only alphabetical characters")
  }
  
}

// Email input highlight

function checkEmailInput() {

  document.getElementById("emailInput").className = ''

  let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  let g = document.getElementById("emailInput").value

  if(g.match(emailFormat)){
    document.getElementById('emailInput').classList.add("makeGreen")
  }
  else{
    document.getElementById('emailInput').classList.add("makeRed")
    alert("Please enter a valid email")
  }
}

// Credit Card Input Highlight 

function checkCreditField() {

  document.getElementById('cardInput').className = ''

  let h = document.getElementById('cardInput').value

  if (validateCardNumber(h) == true) {
      document.getElementById('cardInput').classList.add('makeGreen')
  }
  else document.getElementById("cardInput").classList.add("makeRed")
  alert("Please enter a valid 16-digit card number")
}

//LUHN algorithm 

const validateCardNumber =number => {
  //Check if the number contains only numeric value  
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) {
      return false;
  }

  return luhnCheck(number);
}

const luhnCheck = val => {
  let checksum = 0; // running checksum total
  let j = 1; // takes value of 1 or 2

  // Process each digit one by one starting from the last
  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    calc = Number(val.charAt(i)) * j;

    // If the result is in two digits add 1 to the checksum total
    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    // Add the units element to the checksum total
    checksum = checksum + calc;

    // Switch the value of j
    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  //Check if it is divisible by 10 or not.
  return (checksum % 10) == 0;
}




