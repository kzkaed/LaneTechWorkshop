function hideShape(number) {
  document.getElementById('shape' + number).style.visibility = 'hidden';
}

function showShape(number) {
  document.getElementById('shape' + number).style.visibility = 'visible';
}

function hideElement(elementName, id) {
  document.getElementById(elementName + id).style.visibility = 'hidden';
}

function showElement(elementName, id) {
  document.getElementById(elementName + id).style.visibility = 'visible';
}

function setVisibilityOfElement (elementName, id, visibilityState) {
  document.getElementById(elementName + id).style.visibility = visibilityState;
}

function hideAllShapes(start, end) {
  for (start; start <= end; start++) {
    hideShape(start);
  }
}