
function CrossOut(id) {
var selectedBox = document.getElementById(id);
  if(selectedBox.firstChild.checked) {
    selectedBox.style.textDecoration = "line-through";
  }
  else {
    selectedBox.style.textDecoration = "none";
  }
}
