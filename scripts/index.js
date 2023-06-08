"use strict";

const tableInput = document.getElementById("tableInput");

window.onload = function() {
  getApi();
};

function getApi() {
  fetch("http://localhost:8081/api/courses/")
    .then(response => response.json())
    .then(info => {
        let result = info;
      displayCourses(result);
    });
}

function displayCourses(result) {
  for (let course of result) {
    let newRow = tableInput.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    cell1.textContent = course.dept;

    let cell2 = newRow.insertCell(1);
    cell2.textContent = course.courseNum;

    let cell3 = newRow.insertCell(2);
    cell3.textContent = course.courseName;

    let anchor = document.createElement("a");
    anchor.href = `details.html?courseid=${course.id}`;
    anchor.textContent = "See details";

    let cell4 = newRow.insertCell(3);
    cell4.appendChild(anchor);
  }
}