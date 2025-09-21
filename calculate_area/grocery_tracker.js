
let elementDiv = document.getElementById("grocery_list")
function addGroceryElement(){
  const span = document.createElement('span');
  const label = document.createElement('label');
  const price = document.createElement('input');
  label.setAttribute("for", "total");
  label.innerText = "grocery Element";
  price.setAttribute("type", "number");
  price.setAttribute("class", "amount");
  span.append(label)
  span.append(price);
  span.append(document.createElement("br"));
  span.append(document.createElement("br"));
  elementDiv.appendChild(span);

}

function calculateTotal() {
  let amountList = document.querySelectorAll('.amount');
  let total = Array.from(amountList).reduce((total, el) => {
    // Convert input value to float, default to 0 if empty or invalid
    let val = parseFloat(el.value) || 0;
    return total + val;
  }, 0);
  document.getElementById("total").innerText = total;
}
