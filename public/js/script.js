$(document).ready(function(){
//When the user clicks the submit button, collect the information in the form, send it to the server
$('#submit').click(function(e){ 
    e.preventDefault();
    var location = $('#location').val();
    var breed = $('#breed').val();
    var age = $('#age').val();
    var sex = $('#sex').val();
    var data = {
        location: location,
        breed: breed,
        age: age,
        sex: sex,
    }
    $.get('./search', function(data){
        console.log(data);
    });// end of ajax 
});//end of submit 
//Use AJAX to send it to the server
});