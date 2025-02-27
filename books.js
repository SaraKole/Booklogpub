
document.addEventListener("DOMContentLoaded", function(){
    delForpreItems();
});

function delForpreItems(){
    
    const items= document.querySelectorAll('#list_container li');

    items.forEach((li) => {
        if(!li.querySelector(".delete-button")){
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML= "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.onclick = function(){
                li.remove();
            };
            li.appendChild(deleteButton);
        }
    });
}


function AddBook(){
    const inputBox1 = document.getElementById("input-box1");
    const inputBox2 = document.getElementById("input-box2");
    const titleInput = inputBox1.value.trim();
    const authorInput = inputBox2.value.trim();
    const listContainer= document.getElementById("list_container");

    if (titleInput.value === '' || authorInput.value === ''){
        alert("Please enter the book title and auhtor.");
        return;
    }
    
        const li = document.createElement("li");
        li.classList.add("book-item");
        li.innerHTML = `${titleInput} by ${authorInput}`;

       

        const drop = document.createElement("div");
        drop.classList.add("Status-drop");

        const label = document.createElement("label");
        label.setAttribute("for","statuses");
        label.textContent = "Status";

        const select = document.createElement("select");
        select.setAttribute("name","statuses");
        select.setAttribute("id","statuses");

       
        select.innerHTML = ` <option value="Reading">Reading</option>
            <option value="To Read">To-Read</option>
            <option value="Completed">Completed</option>`;

        drop.appendChild(label);
        drop.appendChild(select);

    
        const deleteButton =  document.createElement("button");
        deleteButton.innerHTML= 'Delete';
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function (){
            listContainer.removeChild(li);
       };

       li.appendChild(drop);
       li.appendChild(deleteButton);
       listContainer.appendChild(li);

    inputBox1.value = '';
    inputBox2.value = '';
   
}


