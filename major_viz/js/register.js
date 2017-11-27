$('document').ready(function() {
    $('#register_button').click(function(){
        console.log("button_push")
        const username = document.getElementById('register_username').value
        const psw = document.getElementById('register_psw').value; 
        console.log(username, psw)
        document.cookie = "username="+username;
        document.cookie = "psw="+psw;
        document.cookie = "laurenpincus=1";

        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert("Your account has been created. Please log in!");
        iframe.parentNode.removeChild(iframe);
        debugger
        location.replace(window.location.origin + "/login");
    })
})
