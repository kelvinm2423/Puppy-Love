$(document).ready(function(){
//When the user clicks the submit button, collect the information in the form, send it to the server
$('#submit').click(function(e){ 
    e.preventDefault();
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);
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
//Google maps 
function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
       (document.getElementById('location')),
        {types: ['geocode']});
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }
  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
      }
