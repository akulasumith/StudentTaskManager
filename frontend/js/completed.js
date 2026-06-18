if(
    localStorage.getItem(
        "isLoggedIn"
    ) !== "true"
){
    window.location.href =
        "login.html";
}

const API_URL =
    "https://student-task-manager-rmm3.onrender.com";

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