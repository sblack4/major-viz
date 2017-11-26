$('document').ready(function() {
$('#login_button').click(function(){
    console.log("button_push")
    const username = document.getElementById('login_username').value
    const psw = document.getElementById('login_psw').value
    console.log(username, psw)
    document.cookie = "username="+username;
    document.cookie = "psw="+psw;
    debugger
    location.replace("http://laurenpincus.com");
})

})
