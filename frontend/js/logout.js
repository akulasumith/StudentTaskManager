const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");

        window.location.href = "login.html";

    });

}