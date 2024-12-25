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
    let searchOption = document.getElementById("searchBySelect").value;
    let searchText = document.getElementById("searchInput").value;

    if (searchOption == "id") {
      // ajax call to get student by id
      $.ajax({
        url: "http://localhost:3000/students/searchSID/" + searchText,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (data, textStatus, jQXhr) {
          let student = data[0];
          let studentCard = `
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h3 class="card-title">${student.firstName} ${student.lastName}</h3>
                  <p class="card-text">
                    <strong>ID:</strong> ${student.sid}<br>
                    <strong>Email:</strong> ${student.email}<br>
                    <strong>City:</strong> ${student.nearCity}<br>
                    <strong>Course:</strong> ${student.course}<br>
                    <strong>Guardian:</strong> ${student.guardian}<br>
                    <strong>Subjects:</strong> ${student.subjects}<br>
                  </p>
                </div>
              </div>
            `;
          $(".student-details").html(studentCard);
        },
        error: function (jQXhr, textStatus, errorThrown) {
          alert("Student not found");
        },
      });

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
