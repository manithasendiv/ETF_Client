$(document).ready(function () {
  // all member javascript codes

  // navbar toggle button
  const hamBurger = $(".toggle-btn")[0];

  $(hamBurger).on("click", function () {
    $("#sidebar").toggleClass("expand");
  });

  // search by select option
  $("#searchBySelect").on("change", function () {
    var selectedOption = $(this).find("option:selected").text();
    $("#searchInput").attr("placeholder", "Enter Student's " + selectedOption);
  });

  // Home page - search student JS
  $("#searchButton").click(function () {
    let searchOption = document.getElementById("searchOption").value;
    let searchText = document.getElementById("searchInput").value;

    if (searchOption == "id") {
      // ajax call to get student by id

    } else if (searchOption == "firstName") {
      // ajax call to get student by first name

    } else if (searchOption == "lastName") {
      // ajax call to get student by last name

    } else if (searchOption == "email") {
      // ajax call to get student by email

    } else if (searchOption == "city") {
      // ajax call to get student by city

    } else if (searchOption == "course") {
      // ajax call to get student by course

    } else if (searchOption == "guardian") {
      // ajax call to get student by guardian

    }
  });

  // other jquery code starts from here
  

});
