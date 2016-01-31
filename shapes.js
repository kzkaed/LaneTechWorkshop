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

function setVisibilityId (elementName, id, visibilityState) {
  document.getElementById(elementName + id).style.visibility = visibilityState;
}

function setVisibiltiyClass(className, visibilityState) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++){
  	elements[i].style.visibility = visibilityState;
  }
}

function hideAllShapes(start, end) {
  for (start; start <= end; start++) {
    hideShape(start);
  }
}
