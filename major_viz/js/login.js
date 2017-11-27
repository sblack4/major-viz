$('document').ready(function() {
    
  function getCookie(name)
  {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

    $('#login_button').click(function(){
        console.log("button_push")
        const username = document.getElementById('login_username').value
        const psw = document.getElementById('login_psw').value
        console.log(username, psw)
        document.cookie = "username="+username;
        document.cookie = "psw="+psw;
        document.cookie = "laurenpincus=1";

        debugger
        location.replace(window.location.origin);
    })


    const page = window.location.pathname;

    if(page == "/login" || page == "register"){
        const logged_in = getCookie("laurenpincus");
        if (logged_in==1) {
            const username = getCookie('username');
            const hello_user = document.createElement('h3');
            hello_user.textContent = "hello, " + username + " you are already logged in";
            hello_user.style.textAlign = "center";
            document.getElementById('welcome-back')
                .appendChild(hello_user);
        }
    }
})
