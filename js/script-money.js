function addElement(){
  let item = document.getElementById('item');
  let price = document.getElementById('price');
  let createdElem = document.createElement('div');
  let checkBoxValue = document.getElementById('profit');
  createdElem.innerText = item.value + " " + price.value;
  if (checkBoxValue.checked) {
    createdElem.style.width = "100px"
    createdElem.style.background = "green";
    $('body').append(createdElem);
  } else {
    createdElem.style.width = "100px"
    createdElem.style.background = "red";
    $('#tabs').append(createdElem);
  }

};
