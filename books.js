
function setStatus(button) {
  const buttons = button.parentElement.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("active")); 
  button.classList.add("active"); 
}

const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list_container");

function AddBook(){
    if (inputBox.value === ''){
        alert("Please enter the book title.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let statusDiv = document.createElement("div");
        statusDiv.className = "status-buttons";

        const statuses = [
            { text: "To Read", className: "to-read" },
            { text: "Reading", className: "reading" },
            { text: "Completed", className: "completed" },
            {text: "Delete", className: "delete"}
          ];

          statuses.forEach(status => {
            let button = document.createElement("button");
            button.innerText = status.text;
            button.className = status.className;
            button.onclick = function () {
              setStatus(button);
            };
            statusDiv.appendChild(button);
          });
      
        
          li.appendChild(statusDiv);
      
         
          listContainer.appendChild(li);
        }

    inputBox.value = '';
}