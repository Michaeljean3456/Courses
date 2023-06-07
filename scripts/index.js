"use strict";

const tableInput = document.getElementById("tableInput");

window.onload = function() {
  getApi();
};

function getApi() {
  fetch("http://localhost:8081/api/courses/")
    .then(response => response.json())
    .then(info => {
        let result = info.dept.courseNum.courseName;
      displayCourses(result);
    });
}

function displayCourses(result) {
  for (let course of result) {
    let newRow = tableInput.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    cell1.textContent = course.courseName;

    let cell2 = newRow.insertCell(1);
    cell2.textContent = course.startDate;

    let cell3 = newRow.insertCell(2);
    cell3.textContent = course.instructor;
  }
}
