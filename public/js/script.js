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
        var newSearch = new NewDog($('#breed option:selected').text(), $('#age option:selected').text(), $('#gender option:selected').text(), $('#location2').val());
        

        $.get('/search', newSearch, function(results) {
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
        var newPost = new NewDog($('#form2 #breed option:selected').text(), $('#form2 #age option:selected').text(), $('#form2 #gender option:selected').text(), $('#form2 #location1').val(), $('#form2 #image').val(), $('#form2 #ownerFirstName').val(), $('#form2 #ownerFirstName').val(), $('#form2 #ownerEmail').val());
        //code to send this object back to the data base goes here:
        console.log(newPost);

        $.post("/post", newPost, function(data) {
            //if the data === to the string in sever.js close dialog and then refresh the page
            
            $('#closePost').click();
            $('#render').empty();
             $('#render').append(`
              <h1>Your dog is up for review.</h1>
            `);
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
            (document.getElementById('location2')), { types: ['geocode'] });
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



