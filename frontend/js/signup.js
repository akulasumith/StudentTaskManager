async function signup(){

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "https://student-task-manager-rmm3.onrender.com/signup",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }
    );

    const data =
        await response.json();

    alert(data.message);

    if(
        data.message ===
        "Signup Successful"
    ){
        window.location.href =
            "login.html";
    }
}
function googleSignup(){

    alert(
        "Google Signup Coming Soon 🚀"
    );

}