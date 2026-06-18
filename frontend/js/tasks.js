const API_URL = "http://127.0.0.1:8000";

const taskContainer =
    document.getElementById("taskContainer");

loadTasks();

async function loadTasks(){

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

    taskContainer.innerHTML = "";

    tasks.forEach(task => {

        if(!task.completed){

            taskContainer.innerHTML += `
                <div class="task-card">

                    <h3>${task.text}</h3>

                    <p>
                        Priority:
                        ${task.priority}
                    </p>

                    <p>
                        Due:
                        ${task.due_date}
                    </p>

                </div>
            `;
        }

    });

}