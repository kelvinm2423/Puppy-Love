$(document).ready(function() {
    //When the user clicks the submit button, collect the information in the form, send it to the server
    $('#submit').click(function(e) {
        e.preventDefault();
        var input = document.getElementById('location');
        var autocomplete = new google.maps.places.Autocomplete(input);
        var location = $('#location').val();
        var breed = $('#breed option:selected').text();
        var age = $('#age').val();
        var gender = $('#gender').val();
        var image = $('#image').val();
        var ownerFirstName = $('#ownerFirstName').val();
        var ownerLastName = $('#ownerFirstName').val();
        var ownerEmail = $('#ownerEmail').val();
        var ownerAddress = $('#ownerAddress').val();
        var ownerCity = $('ownerCity').val();
        var ownerState = $('#ownerState').val();
        var ownerZipcode = $('#ownerZipcode').val();
        var data = {
            breed: breed,
            age: age,
            gender: gender,
            image: image,
            ownerFirstName: ownerFirstName,
            ownerLastName: ownerLastName,
            ownerEmail: ownerEmail,
            ownerAddress: ownerAddress,
            ownerCity: ownerCity,
            ownerState: ownerState,
            ownerZipcode: ownerZipcode,
        }
        $.get('/search', data, function(results) {
            $('#render').empty();
            for (var result of results) {
                //Below is going to be the HTML that will render the results
                //javascript template literals
                $('#render').append(`
                    <h2 >${result.location}</h2>
                    <h2 >${result.breed}</h2>
                    <h2>${result.age}</h2>
                    <h2 >${result.sex}</h2>
                `);
            }
        }); // end of ajax 
    }); //end of submit 
    //Use AJAX to send it to the server
});
//Google maps 
function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('location')), { types: ['geocode'] });
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
}
//this is where we render datanase info
