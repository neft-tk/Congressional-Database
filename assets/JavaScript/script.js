// on page load parse query parameters and use them in a request URL
// if blank choose last option in dropdown I guess?
// same as above for all blanks
// we get to decide what data is displayed
// also includes a search bar with search button


// api url = https://www.loc.gov/fo=json
var request = 'https://www/loc/gov/' + 'fo=json'; //will need some string variables to get the actual request

//get data from the API
fetch(request, {mode: 'cors'}).then(function (response)
{
    //check what we got
    console.log(response.status);

    response.json().then(function (data)
    {
        //create a function to display the data
    });
});