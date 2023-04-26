function calculation() {
  var calculation = document.getElementById("input").value
  var result = eval(calculation)
  document.getElementById("result").innerHTML = result
}
