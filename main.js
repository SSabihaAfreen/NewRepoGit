const form = document.getElementById('addForm');
const item = document.getElementById('items');
const itemList = document.getElementsByClassName('list-group-item');
const filter=document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function onSubmit(e)
{
  e.preventDefault();
  const inputValue = document.getElementById(`item`).value;
  const description=document.getElementById('description').value;
  const li=document.createElement('li');
  li.className=`list-group-item`;
  const newText=document.createTextNode(inputValue);
  const descriptionNode=document.createTextNode(description);
  li.appendChild(newText);
  li.appendChild(descriptionNode)
  const deleteBtn=document.createElement('button');
  deleteBtn.className='btn btn-danger btn-sm float-right delete'
  delete.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
}
function addItem(e){
  e.preventDefault();
  const newText = document.createTextNode(inputValue)
const descriptionNode =document.createTextNode(description)

li.appendChild(newText);
li.appendChild(descriptionNode)
const deleteBtn =document.createElement('button');
deleteBtn.className=``
// Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lisT
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}