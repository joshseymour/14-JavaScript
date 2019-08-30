// from data.js
var tableData = data;

// Get a reference to the table 
var table = d3.select("tbody");

// Console.log the ufoData from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo dataobject
tableData.forEach(function(ufoData) {
  console.log(ufoData);
});

// Loop through ufoData and add row to table for each value in the data set
function buildTable(ufoTable){
  table.html("")
  ufoTable.forEach((ufoData) => {
    var row = table.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  
}

buildTable(tableData)

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
  d3.event.preventDefault()
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").property("value");
  var cityElement = d3.select("#city").property("value").toLowerCase();
  var stateElement = d3.select("#state").property("value").toLowerCase();
  var countryElement = d3.select("#country").property("value").toLowerCase();
  var shapeElement = d3.select("#shape").property("value").toLowerCase();

  // // Get the value property of the input element
  // var inputValue = inputElement.property("value");

  console.log(inputElement);
  console.log(stateElement)
  // console.log(tableData);
  var filteredData = tableData
  if (inputElement){
    filteredData = filteredData.filter(row => row.datetime === inputElement);
  } 
  if (cityElement){
    filteredData = filteredData.filter(row => row.city === cityElement);
  }
  if (stateElement){
    filteredData = filteredData.filter(row => row.state === stateElement);
  }
  if (countryElement){
    filteredData = filteredData.filter(row => row.country === countryElement);
  }
  if (shapeElement){
    filteredData = filteredData.filter(row => row.shape === shapeElement);
  }


  console.log(filteredData);

  buildTable(filteredData);

});
