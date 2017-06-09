    /*********************************
                    Start - Object Constructor - Jayce Azua
            *********************************/

    var NewDog = function(breed, age, gender, ownerCity, image, ownerFirstName, ownerLastName, ownerEmail) {
        //setting default values
        breed = breed || '';
        age = age || '';
        gender = gender || '';
        image = image || '';
        ownerFirstName = ownerFirstName || '';
        ownerLastName = ownerLastName || '';
        ownerEmail = ownerEmail || '';
        ownerCity = ownerCity || '';
        //setting input values    
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.image = image;
        this.ownerFirstName = ownerFirstName;
        this.ownerLastName = ownerLastName;
        this.ownerEmail = ownerEmail;
        this.ownerCity = ownerCity;
    };
    /*********************************
        End - Object Constructor  - Jayce Azua
     *********************************/



 

    //When the user clicks the search button, collect the information in the form, send it to the server
    $('#search').click(function(e) {
        e.preventDefault();
        var newSearch = new NewDog($('#breed option:selected').text(), $('#age').val(), $('#gender').val(), $('#location').val());
        

        $.get('/search', newSearch, function(results) {
            console.log(results)
            $('#render').empty();
            for (var result of results) {
                //Below is going to be the HTML that will render the results
                //javascript template literals
                $('#render').append(`
                <h2 >${result.ownerCity}</h2>
                <h2 >${result.breed}</h2>
                <h2>${result.age}</h2>
                <h2 >${result.gender}</h2>
            `);
            }
        }); // end of ajax 
        //clears the search var to start a new one
        var newSearch = {};

    }); //end of submit 
    //Use AJAX to send it to the server
    

    /*********************************
        Start - POST Method into MySQL - Jayce Azua
     *********************************/

    $('#post').click(function(e) {
        e.preventDefault();
        var newPost = new NewDog($('#breed option:selected').text(), $('#age').val(), $('#gender').val(), $('#location').val(), $('#image').val(), $('#ownerFirstName').val(), $('#ownerFirstName').val(), $('#ownerEmail').val());
        //code to send this object back to the data base goes here:
        console.log(newPost);

        $.post("/post", newPost, function(data) {
            console.log(data);
            //lost - jayce
            console.log('Something was just posted.');
        });

        // clean out the variable
        var newPost = {};
    });

    /*********************************
        End - POST Method into MySQL - Jayce Azua
     *********************************/






    //Google maps 
    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('location')), { types: ['geocode'] });
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('location1')), { types: ['geocode'] });
        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
    }
    //this is where we render datanase info
