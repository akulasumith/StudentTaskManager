if(
    localStorage.getItem(
        "isLoggedIn"
    ) !== "true"
){
    window.location.href =
        "login.html";
}

const API_URL =
    "http://127.0.0.1:8000";

const completedList =
    document.getElementById(
        "completedTaskList"
    );

loadCompletedTasks();

async function loadCompletedTasks(){

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

    completedList.innerHTML = "";

    tasks.forEach(task => {

        if(task.completed){

            const taskCard =
                document.createElement("div");

            taskCard.classList.add(
                "task-card"
            );

            taskCard.innerHTML = `
                <span>
                    ${task.text}
                </span>

                <span class="completed">
                    Completed
                </span>
            `;

            completedList.appendChild(
                taskCard
            );
        }

    });

}