$('document').ready(function() {

    function updateWell(rowData) {
        d3.select("#desc-p")
            .style("opacity", 1)
            .transition()
            .duration(500)
            .style("opacity", 0).remove();
        window.setTimeout(function() {
            d3.select("#description-well")
                .append("p")
                .attr("id", "desc-p")
                .style("opactiy", 0)
                .html(rowData["DailyDuties"])
                .transition()
                .duration(620)
                .style("opacity", 1);
        }, 500)
    }

    d3.csv("../data/gmu-electives.csv", function(error, dataSet){
        if(error)
            console.error(error);

        $("#elective-table").bootstrapTable({
            locale: 'en-US',
            onClickRow: updateWell,
            columns: [
                {
                    field: "Type",
                    sortable: true,
                    title: "Type",
                    searchable: true
                },{
                    field: "Course",
                    sortable: true,
                    title: "Course",
                    searchable: true
                },{
                    field: "Course Name",
                    sortable: true,
                    title: "Course Name",
                    searchable: true
                },{
                    field: "Description",
                    sortable: true,
                    title: "Description",
                    searchable: true
                },{
                    field: "Topics Covered",
                    sortable: true,
                    title: "Topics Covered",
                    searchable: true
                },{
                    field: "Careers",
                    sortable: true,
                    title: "Careers",
                    searchable: true
                }
            ],
            data: dataSet
        })
    })
})
