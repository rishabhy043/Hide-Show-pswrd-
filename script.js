const icon = document.querySelector("img");
const password = document.querySelector(".pswrd");

icon.addEventListener("click" , () =>{
     if(password.type == "password"){
        icon.src = "eye-open.png"
        password.type = "Text"
     }else{
        password.type = "password"
        icon.src = "eye-close.png"
     }
}) 