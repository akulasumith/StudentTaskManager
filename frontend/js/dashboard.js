if(
    localStorage.getItem(
        "isLoggedIn"
    ) !== "true"
){
    window.location.href =
        "login.html";
}

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const API_URL = "http://127.0.0.1:8000";

loadTasks();
checkEmptyState();
addTaskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const priority =
    document.getElementById("priority").value;
    const dueDate =
    document.getElementById("dueDate").value;

const userId =
    localStorage.getItem(
        "user_id"
    );

fetch(`${API_URL}/tasks`, {

    method: "POST",

    headers: {
        "Content-Type":
        "application/json"
    },

    body: JSON.stringify({

        user_id: userId,

        text: taskText,

        priority: priority,

        due_date: dueDate,

        completed: false

    })

})
.then(res => res.json())
.then(data => {

    loadTasks();

});

taskInput.value = "";   
});


function createTask(
    id,
    text,
    completed,
    priority,
    dueDate
){
    const taskCard = document.createElement("div");
    taskCard.dataset.id = id;
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
<div class="task-info">

    <span class="task-title">
        ${text}
    </span>

    <div class="task-meta">

        <small class="priority">
            Priority: ${priority}
        </small>

        <small class="due-date">
            Due: ${dueDate}
        </small>

    </div>

</div>

<div class="task-actions">

    <button class="complete-btn">
        ✓
    </button>

    <button class="delete-btn">
        🗑
    </button>

</div>
`;

    if(completed){

    const taskTextElement =
        taskCard.querySelector("span");

    taskTextElement.classList.add("completed-task");

    taskTextElement.style.textDecoration =
        "line-through";

    taskCard.style.opacity = "0.7";
}

    const completeBtn =
        taskCard.querySelector(".complete-btn");

    completeBtn.addEventListener("click", () => {

    const taskId =
        taskCard.dataset.id;

    fetch(
        `${API_URL}/tasks/${taskId}`,
        {
            method: "PUT"
        }
    )
    .then(res => res.json())
    .then(data => {

        loadTasks();

    });

});

    const deleteBtn =
        taskCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        if(confirm("Delete this task?")){

    const taskId =
    taskCard.dataset.id;

    fetch(
    `${API_URL}/tasks/${taskId}`,
    {
        method: "DELETE"
    }
)
    .then(res => res.json())
    .then(data => {

    loadTasks();

});
}

    });

    taskList.appendChild(taskCard);
    checkEmptyState();
}

function sortTasks(){

    const tasks =
        Array.from(
            document.querySelectorAll(".task-card")
        );

    const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3
    };

    tasks.sort((a,b)=>{

        const aPriority =
            a.querySelector("small")
             .innerText
             .replaceAll("Priority:", "")
             .trim();

        const bPriority =
            b.querySelector("small")
             .innerText
             .replaceAll("Priority:", "")
             .trim();

        return priorityOrder[aPriority] -
               priorityOrder[bPriority];
    });

    tasks.forEach(task=>{
        taskList.appendChild(task);
    });
}


async function loadTasks(){

    taskList.innerHTML = "";

    const userId =
        localStorage.getItem(
            "user_id"
        );

    const response =
        await fetch(
            `${API_URL}/tasks/${userId}`
        );

    const tasks =
        await response.json();

    tasks.forEach(task => {

        createTask(
            task._id,
            task.text,
            task.completed,
            task.priority,
            task.due_date
        );

    });

    updateStats();
    sortTasks();
    checkEmptyState();
}
function updateStats(){

    const allTasks =
    document.querySelectorAll(
        ".task-card[data-id]"
    );

    const completedTasks =
        document.querySelectorAll(".completed-task");

    document.getElementById("totalTasks").innerText =
        allTasks.length;

    document.getElementById("completedTasks").innerText =
        completedTasks.length;

    document.getElementById("pendingTasks").innerText =
        allTasks.length - completedTasks.length;
}

function checkEmptyState(){

    const tasks =
        document.querySelectorAll(".task-card");

    const taskList =
        document.getElementById("taskList");

    let emptyMessage =
        document.getElementById("emptyMessage");

    if(tasks.length === 0){

        if(!emptyMessage){

            emptyMessage =
                document.createElement("div");

            emptyMessage.id =
                "emptyMessage";

            emptyMessage.className =
                "empty-message";

            emptyMessage.innerText =
                "No Tasks Available 🎉";

            taskList.appendChild(
                emptyMessage
            );
        }

    }
    else{

        if(emptyMessage){
            emptyMessage.remove();
        }

    }
}

const username =
    localStorage.getItem(
        "username"
    );

if(username){

    document.getElementById(
        "welcomeText"
    ).innerText =
        `Welcome Back, ${username} 👋`;

}
const searchTask =
document.getElementById("searchTask");

searchTask.addEventListener(
    "keyup",
    () => {

        const value =
        searchTask.value.toLowerCase();

        document
        .querySelectorAll(".task-card")
        .forEach(card => {

            const text =
            card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display = "flex";
            }
            else{
                card.style.display = "none";
            }

        });

    }
);

