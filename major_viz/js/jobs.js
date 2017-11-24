
{
 "company": "ThoughtWorks",
 "company_logo": "http://github-jobs.s3.amazonaws.com/e20ce6a2-ca1f-11e7-82be-7f617c8310c9.gif",
 "company_url": "https://www.thoughtworks.com/careers",
 "created_at": "Wed Nov 15 16:15:32 UTC 2017",
 "description": "",
 "how_to_apply": "",
 "id": "ec72c0da-ca1f-11e7-9f6a-08ca395905f1",
 "location": "Berlin, Köln, Hamburg, München",
 "title": "SENIOR DEVELOPER (m/w)",
 "type": "Full Time",
 "url": "http://jobs.github.com/positions/ec72c0da-ca1f-11e7-9f6a-08ca395905f1"
},





$('document').ready(function(){

    function clickHandler(rowData) {
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

    d3.json("/api/", function(error, dataSet){
        if(error)
            console.error(error);
        
        $("#major-table").bootstrapTable({
            locale: 'en-US',
            onClickRow: clickHandler,
            columns: [
                {
                    field: "title",
                    sortable: true,
                    title: "title",
                    searchable: true
                },{
                    field: "company",
                    sortable: true,
                    title: "company",
                    searchable: true
                },{
                    field: "location",
                    sortable: true,
                    title: "location",
                    searchable: true
                },{
                    field: "type",
                    sortable: true,
                    title: "type",
                    searchable: true
                }
            ],
            data: dataSet
        })
    })  


})