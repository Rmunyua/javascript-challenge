// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!

var tbody = d3.select("tbody");
// Loop through the table to retrive all data
tableData.forEach(Row);
function Row (item){
    var row = tbody.append("tr");
    var row_data = Object.values(item);
    row_data.forEach(data=>{
        row.append('td').text(data);
    })
}

// Button functionality 
var button1 = d3.select('#filter-btn');
button1.on('click', function(){
    tbody.html("");
    // Select and retrive input value
    var date = d3.select('#datetime').property('value');
    console.log(date);
    var input_array = tableData.filter( x => x.datetime === date);
    console.log(input_array);
    input_array.forEach(Row);

});
