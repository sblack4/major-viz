
var major_data; 
d3.csv('../data/majors.csv', function(err, data){
    if(err) {
        console.log(err);
    }
    console.log(data);
    major_data = data 
})

d3.select('#btnMajor').on('click', function(){
    console.log('click');

    makeTable("#jobs", major_data);
        
});

function makeTable(parentDiv, data) {
    const parent = d3.select(parentDiv);
    parent.append("div")
        .attr("class", "table-responsive")
        .append("table")
        .attr("class", "table");
        
    // add header 
    const tableHead = d3.select("table.table")
        .append("thead")
        .append("tr");
    Object.keys(data[0])
        .forEach(function(key) {
            tableHead.append("th")
                .text(key);
        });
    
    const rowParent = d3.select("table.table")
        .append("tbody");

    data.forEach(function(row) {
        let currentRow = rowParent.append("tr");
        console.log(row);
        Object.entries(row).forEach(function(value, key) {
            console.log(value);
            currentRow.append("td")
                .text(value);
        });
    });

    
}