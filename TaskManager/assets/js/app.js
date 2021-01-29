const taskInput = document.querySelector("#task"); 
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection"); 
const clearBtn = document.querySelector(".clear-tasks"); 
const reloadIcon = document.querySelector(".fa"); 
// Add new Task Function definition
function addNewTask(e) {
  const dateID = Date.now();
  if (taskInput.value == "") {
    
    taskInput.style.borderColor = "red";
    return; 
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  const dateDiv = document.createElement("div");
  dateDiv.className = "dateDiv";
  dateDiv.style.display = "none";
  dateDiv.textContent = dateID;
  li.appendChild(dateDiv);
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = "";
  e.preventDefault(); 
}
// Clear Task Function definition
function clearAllTasks() {
    while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filter tasks function definition
function filterTasks(e) {
  
  const itemList = document.querySelectorAll(".collection-item");
  if (filter.value == "") {
    itemList.forEach(function (member) {
      member.style.display = "block";
    });
  } else {
    const searchedItem = filter.value;
    itemList.forEach(function (member, index) {
      if (searchedItem == member.firstChild.textContent) {
        member.style.display = "block";
      } else {
        member.style.display = "none";
      }
    });
  }
}
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ? ")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Reload Page Function [BOM Object Event]
function reloadPage() {
  
  location.reload();
}

// form submit
form.addEventListener("submit", addNewTask);
// clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

// Event Bubbling
document.querySelector("#signup").addEventListener("click", function () {
  console.log("sign up button click");
});

document.querySelector("#account_link").addEventListener("click", function () {
  console.log("Account link click");
});

document.querySelector("#header").addEventListener("click", function () {
  console.log("Header click");
});

// Event Delegation
document.getElementById("buttons").addEventListener("click", function (e) {
 
  if (e.target.className == "buttonClass") {
    console.log("click");
  }
});

// sorting button
$(".dropdown-trigger").dropdown();
const ascendingBtn = document.querySelector(".ascending-btn");
const descendingBtn = document.querySelector(".descending-btn");
const collectionSorted = document.querySelector(".collection-sorted");
// ascending sorting
function ascendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingArray = new Array();
  const currentTime = Date.now();
  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".dateDiv");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingArray[i] = [differenceTime, i];
  }
  orderingArray.sort();
  for (let i = 0; i < unorderedList.length; i++) {
    collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
  }
  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingArray[i][1]]);
  }
}
// descending sorting
function descendingSort() {
  const unorderedList = document.querySelectorAll(".collection-item");
  var orderingArray = new Array();
  const currentTime = Date.now();
  for (let i = 0; i < unorderedList.length; i++) {
    listItem = unorderedList[i].querySelector(".dateDiv");
    taskListTime = listItem.textContent;
    let differenceTime = currentTime - taskListTime;
    orderingArray[i] = [differenceTime, i];
  }
  orderingArray.sort();
  orderingArray.reverse();
  for (let i = 0; i < unorderedList.length; i++) {
    collectionSorted.appendChild(unorderedList[orderingArray[i][1]]);
  }
  for (let i = 0; i < unorderedList.length; i++) {
    taskList.appendChild(unorderedList[orderingArray[i][1]]);
  }
}

ascendingBtn.addEventListener("click", ascendingSort);
descendingBtn.addEventListener("click", descendingSort);
