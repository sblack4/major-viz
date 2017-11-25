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

function filltable(){
    d3.csv("../data/compsci-jobs.csv", function(error, dataSet){
        if(error)
            console.error(error);
        
        $("#major-table").bootstrapTable({
            locale: 'en-US',
            onClickRow: updateWell,
            columns: [
                {
                    field: "Rank",
                    sortable: true,
                    title: "Rank",
                    searchable: true
                },{
                    field: "Career",
                    sortable: true,
                    title: "Career",
                    searchable: true
                },{
                    field: "AvailableJobs",
                    sortable: true,
                    title: "Available Jobs",
                    searchable: true
                },{
                    field: "ProjectedGrowth",
                    sortable: true,
                    title: "Projected Growth",
                    searchable: true
                },{
                    field: "MinimumProjectedGrowthAmount",
                    sortable: true,
                    title: "Minimum ProjectedGrowth Amount",
                    searchable: true
                },{
                    field: "MedianSalary",
                    sortable: true,
                    title: "Median Annual Salary",
                    searchable: true,
                    formatter: priceFormatter
                }
            ],
            data: dataSet
        })
    })  
}



$('document').ready(function() {

    $('#btnMajor').click(function(){
        $('#major-data-row').removeClass('hidden');

        filltable();
    });

    $('#compare-carreers-button').click(function(){
        const data = $("#major-table").bootstrapTable('getSelections');

        console.log(data);
    })
})