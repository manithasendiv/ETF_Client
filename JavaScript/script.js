$(document).ready(function(){
    // all member javascript codes

    // Home page - search student JS
    $("#searchButton").click(function () {
        let searchOption = document.getElementById("searchOption").value;
        let searchText = document.getElementById("searchText").value;
        if (searchOption == "id") {
          // ajax call to get student by id

        } else if (searchOption == "firstName") {
          // ajax call to get student by first name
          
        }
        else if(searchOption == "lastName"){
          // ajax call to get student by last name
        }
        else if(searchOption == "email"){
          // ajax call to get student by email

        }
        else if(searchOption == "city"){
          // ajax call to get student by city

        }
        else if(searchOption == "course"){
          // ajax call to get student by course

        }
        else if(searchOption == "guardian"){
          // ajax call to get student by guardian

        }
      });

      
});