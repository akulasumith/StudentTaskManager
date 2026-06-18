if(
    localStorage.getItem(
        "isLoggedIn"
    ) !== "true"
){
    window.location.href =
        "login.html";
}

const username =
    localStorage.getItem(
        "username"
    );

if(username){

    document.getElementById(
        "username"
    ).innerText =
        username;

}