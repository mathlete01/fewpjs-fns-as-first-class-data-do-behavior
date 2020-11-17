/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  // debugger
  let arr = string.split(":");
  let hourStr = arr[0];
  let hour = parseInt(hourStr);
  if (hour < 11){
    return "Good Morning";
  } else if (hour > 12 && hour < 17){
    return "Good Afternoon"
  } else if (hour > 17){
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById('greeting').innerText = string
  // Below also works
  // let element = document.querySelector("#greeting"); 
  // element.innerText = string;
}
