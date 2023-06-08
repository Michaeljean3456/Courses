"use strict";

const resultId = document.getElementById("resultId");

window.onload = function() {
  getCourseFromIndex();
};

function getCourseFromIndex() {
  const urlParams = new URLSearchParams(location.search);

  let id = -1;
  if (urlParams.has("courseid")) {
    id = urlParams.get("courseid");
  }

  let theUrl = "http://localhost:8081/api/courses/" + id;

  fetch(theUrl)
    .then(response => response.json())
    .then(info => {
      console.log(info)
      showDetailForCourse(info);
    })
   
}

function showDetailForCourse(info) {

    resultId.innerHTML = `Instructor: ${info.instructor} <br>` +
                           `Start Date: ${info.startDate} <br>` +
                           `Number of days: ${info.numDays} <br>`;
}
