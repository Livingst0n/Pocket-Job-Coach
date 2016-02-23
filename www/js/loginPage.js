//window.addEventListener('load', loadHandler);
function submitLogin() {
   jQuery(document).ready(function() {
	   var uri = 'http://pjc.gear.host/api/Login';
	   var day = new Date();
	   var now = day.getTime();
       var login = {
             'UserName': $('#username').val(),
             'Password': $('#password').val(),
             'RememberMe': $('#remember').is(':checked')};
             
        $.ajax({
             type: 'POST',
             dataType: 'json',
             data: login,
             url: uri,
             success: function (data) {
                window.localStorage.setItem("token", data);
                window.location.href = 'splash.html';
                //$.mobile.changePage('splash.html', {transition: "slideup", changeHash: false});
                //$('#data').html(window.localStorage.getItem("token"));
             },
             error: function () {
                  alert('Failure');
             }
        });
   });
}