//function: make list item
function newElement() {
    var inputValue =document.getElementById("input-box").value;
    var dueDateValue = document.getElementById("due-date").value;

    if (inputValue === '') {
        alert("Enter a task!");
    } else {
        var li = document.createElement("li");

        // Add checkbox
        var checkboxContainer = document.createElement("div");
        checkboxContainer.className = "checkbox-container";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.onclick = toggleTask;
        checkboxContainer.appendChild(checkbox);
        li.appendChild(checkboxContainer);

        // bold txt
        var taskSpan = document.createElement("span");
        taskSpan.textContent = inputValue;
        taskSpan.style.fontWeight = "bold"; // Apply bold styling to task text
        li.appendChild(taskSpan);

        // for subtasks
        var subtaskInput = document.createElement("input");
        subtaskInput.type = "text";
        subtaskInput.placeholder = "Add subtask";
        subtaskInput.className = "subtask-input";
        li.appendChild(subtaskInput);

        // Add due date
        if (dueDateValue !== ''){
            var dueDateSpan = document.createElement("span");
            dueDateSpan.textContent = " ✩ due: " + dueDateValue;
            li.appendChild(dueDateSpan);
        }


        // Add close button
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.onclick = deleteTask;
        span.appendChild(txt);
        li.appendChild(span);

        // Append to list
        document.getElementById("myUL").appendChild(li);

        // Clear input fields
        document.getElementById("input-box").value = "";
        document.getElementById("due-date").value = "";
    }
}

//function:show task is done
function toggleTask(){
    var listItem = this.parentElement.parentElement;
    if (this.checked) {
        listItem.classList.add('checked');
    } else {
        listItem.classList.remove('checked');
    }
}

//function:delete task
function deleteTask(){
    var listItem = this.parentElement;
    listItem.remove();
}
