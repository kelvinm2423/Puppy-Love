    /*********************************
                        Start - Object Constructor - Jayce Azua
                *********************************/

    var NewDog = function(breed, age, gender, ownerCity, dogName, image, ownerFirstName, ownerLastName, ownerEmail) {
        //setting default values
        breed = breed || '';
        age = age || '';
        gender = gender || '';
        image = image || '';
        dogName = dogName || '';
        ownerFirstName = ownerFirstName || '';
        ownerLastName = ownerLastName || '';
        ownerEmail = ownerEmail || '';
        ownerCity = ownerCity || '';

        //setting input values    
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.image = image;
        this.dogName = dogName;
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
        var newSearch = new NewDog(
            $('#breed option:selected').text(),
            $('#age option:selected').text(),
            $('#gender option:selected').text(),
            $('#location1').val());


        $.get('/search', newSearch, function(results) {
            $('#render').empty();
            for (var result of results) {
                //Below is going to be the HTML that will render the results
                //javascript template literals
                $('#render').append(`
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
      <img class="media-object thumbnail" src="${result.image}" />
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">${result.dogName}</h4>
     
                <p>${result.breed}</p>
                <p>${result.age}</p>
                <p>${result.gender}</p>
                <p>${result.ownerCity}</p>
  </div>
</div>

              
               
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
        var newPost = new NewDog(
            $('#form2 #breed option:selected').text(),
            $('#form2 #age option:selected').text(),
            $('#form2 #gender option:selected').text(),
            $('#form2 #location2').val(),
            $('#form2 #dogName').val(),
            $('#form2 #image').val(),
            $('#form2 #ownerFirstName').val(),
            $('#form2 #ownerLastName').val(),
            $('#form2 #ownerEmail').val());
        //code to send this object back to the data base goes here:
        console.log(newPost);

        $.post("/post", newPost, function(data) {
            //if the data === to the string in sever.js close dialog 

            $('#close').click();
            $('#render').empty();
            $('#render').append(`
              <p>Your dog is up for review.</p>
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
