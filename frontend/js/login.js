async function login(){

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "https://student-task-manager-rmm3.onrender.com/login",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
                name: "",
                email: email,
                password: password
            })
        }
    );

    const data =
        await response.json();

    if(
        data.message ===
        "Login Successful"
    ){

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        localStorage.setItem(
            "username",
            data.name
        );

        localStorage.setItem(
            "user_id",
            data.user_id
        );

        window.location.href =
            "dashboard.html";
    }
    else{

        alert(
            "Invalid Credentials"
        );

    }
}
function googleLogin(){

    alert(
        "Google Login Coming Soon 🚀"
    );
}
