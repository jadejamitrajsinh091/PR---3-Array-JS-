// Step-1 Dynamic Element

function Submit()
{
  let input = Number(document.getElementById("input").value);
  let ElementInput = document.getElementById("EleInput");
  
  ElementInput.innerHTML = ""; 
  
  for(let i = 0; i < input; i++)
  {
    ElementInput.innerHTML += '<input placeholder="Enter Element" class="my-inputs">';
  }
}

// Step-2 Array Creation

let mainArray = []; 

function BuildArray()
{
  let allBoxes = document.querySelectorAll(".my-inputs");
  
  mainArray = []; // Clear Old data
  
  allBoxes.forEach(box => {
    if (box.value !== "") 
    { 
      mainArray.push(box.value);
    }
  });
  
  updateUI(); // Show Array In Screen
  alert("Array Is Ready" + mainArray.join(" "));
}

function updateUI()
{
  let display = document.getElementById("arrayDisplay");
  
  if(mainArray.length === 0)
  {
    display.innerText = "Empty";
  } 
  else
  {
    display.innerText = mainArray.join(", ");
  }
}


// Step-4 --- ALL ARRAY FUNCTIONS LOGIC ---

// prompt is in-built function in js which is use to display box that ask for input

function Push()
{
  let val = prompt("Enter element to PUSH at the end:");
  
  if (val)
  {
    mainArray.push(val);
    updateUI();
  }
}

function Pop()
{
  mainArray.pop();
  updateUI();
}

function Shift()
{
  mainArray.shift();
  updateUI();
}

function Unshift()
{
  let val = prompt("Enter element to UNSHIFT at start:");
  
  if (val)
  {
    mainArray.unshift(val);
    updateUI();
  }
}

function Splice()
{
  let index = prompt("Enter Element For Change");
  let deleteCount = prompt("Enter Element For Remove");
  let newVal = prompt("New Add");

  if (index !== null && deleteCount !== null)
  {
    if (newVal)
    {
      mainArray.splice(Number(index), Number(deleteCount),newVal);
    } 
    else 
    {
      mainArray.splice(Number(index), Number(deleteCount));
    }
    
    updateUI();
  }
}

function Slice()
{
  let start = prompt("Start Index:");
  let end = prompt("End Index:");
  
  if (start !== null && end !== null)
  {
    let subArray = mainArray.slice(Number(start), Number(end));
    alert("Sliced Part: " + subArray.join(", "));
  }
}

function Map()
{
  mainArray = mainArray.map(item => item.toUpperCase());
  updateUI();
}

function Filter()
{
  mainArray = mainArray.filter(item => item.length > 3);
  updateUI();
}

function Reduce()
{
  let result = mainArray.reduce((total, current) => total + " + " + current);
  alert("Reduced Output: " + result);
}

function Reverse()
{
  mainArray.reverse();
  updateUI();
}

function Ascending()
{
  mainArray.sort();
  updateUI();
}

function Descending() 
{
  mainArray.sort().reverse();
  updateUI();
}

function ShowLength()
{
  alert("Array Length: " + mainArray.length);
}