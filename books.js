
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

    if (titleInput=== '' || authorInput === ''){
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

        const drop2 = document.createElement("div");
        drop2.classList.add("Status-drop");

        const label2 = document.createElement("label");
        label2.setAttribute("for","genres");
        label2.textContent = "Genre";

        const select2 = document.createElement("select");
        select2.setAttribute("name","genres");
        select2.setAttribute("id","genres");

        select2.innerHTML= ` <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Motivational">Motivational</option>
              <option value="True crime">True Crime</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Cookbook">Cookbook</option>
              <option value="Mythology">Mythology</option>`;
            
        drop2.appendChild(label2);
        drop2.appendChild(select2);

        const check = document.createElement("div");
        check.classList.add("recommendation");

        const checkLabel = document.createElement("label");
        checkLabel.textContent = "Recommend this book?";
        

        const checkbox = document.createElement("input");
        checkbox.type= "checkbox";
        checkbox.classList.add("checkbox");


        check.appendChild(checkLabel);
        check.appendChild(checkbox);
        

    
        const deleteButton =  document.createElement("button");
        deleteButton.innerHTML= 'Delete';
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function (){
            listContainer.removeChild(li);
       };

       li.appendChild(drop);
       li.appendChild(drop2);
       li.appendChild(check);
       li.appendChild(deleteButton);
    
       listContainer.appendChild(li);

    inputBox1.value = '';
    inputBox2.value = '';
   
}


