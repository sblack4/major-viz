$('document').ready(function(){
    $('#btnMajor').click(function(){
        $('#tableau-majors').css('opacity', '1');
    })
})

// function updateWell(rowData) {
//     d3.select("#desc-p")
//         .style("opacity", 1)
//         .transition()
//         .duration(500)
//         .style("opacity", 0).remove();
//     window.setTimeout(function() {
//         d3.select("#description-well")
//             .append("p")
//             .attr("id", "desc-p")
//             .style("opactiy", 0)
//             .html(rowData["DailyDuties"])
//             .transition()
//             .duration(620)
//             .style("opacity", 1);
//     }, 500)
// }

// function filltable(){
//     d3.csv("../data/compsci-jobs.csv", function(error, dataSet){
//         if(error)
//             console.error(error);
        
//         $("#major-table").bootstrapTable({
//             locale: 'en-US',
//             onClickRow: updateWell,
//             columns: [
//                 {
//                     field: "Rank",
//                     sortable: false,
//                     title: `Rank`,
//                     searchable: true
//                 },{
//                     field: "Career",
//                     sortable: true,
//                     title: `Career`,
//                     searchable: true
//                 },{
//                     field: "AvailableJobs",
//                     sortable: true,
//                     title: "Available Jobs",
//                     searchable: true
//                 },{
//                     field: "ProjectedGrowth",
//                     sortable: true,
//                     title: "Projected Growth",
//                     searchable: true
//                 },{
//                     field: "MinimumProjectedGrowthAmount",
//                     sortable: true,
//                     title: "Min. Projected Growth",
//                     searchable: true
//                 },{
//                     field: "MedianSalary",
//                     sortable: true,
//                     title: "Median Annual Salary",
//                     searchable: true,
//                     formatter: priceFormatter
//                 }
//             ],
//             data: dataSet
//         })

//         const glyphicon_exists = $('.sortable').children().length > 0;
//         // insert <span class="glyphicon glyphicon-sort" aria-hidden="true"></span>
        
//         if (!glyphicon_exists){
//             d3.selectAll('.sortable')
//                 .insert('span')
//                 .attr("class", "glyphicon glyphicon-sort")
//                 .attr("aria-hidden", "true");
//         }

//     })  
// }

// function clearChart(){
//     const chart = $('#compare-career-charts');
//     const chart_exists = chart.children().length > 0;
//     if(chart_exists) {
//         chart.empty();
//     }
// }

// function makeChart(dataSet){
    
//     const charttype = document.getElementById('career-charttype-select').value;
//     const xvar = document.getElementById('career-x-select').value;
//     const yvar = document.getElementById('career-y-select').value;
//     const colorvar = document.getElementById('career-color-select').value;
//     const sizevar = document.getElementById('career-size-select').value;

//     const tauChartsData = {
//         type: charttype,
//         x: xvar,
//         y: yvar,
//         color: colorvar,
//         size: sizevar,
//         data: dataSet,
//         plugins: [
//             tauCharts.api.plugins.get('tooltip')(),
//             tauCharts.api.plugins.get('legend')(),
//             tauCharts.api.plugins.get('quick-filter')(),
//         ]
//     }
//     const chart = new tauCharts.Chart(tauChartsData);
//     return chart;
// }

// function handleChartRendering(){
//     $('#compare-career-charts').removeClass('hidden');
//     try {
//         const data = $("#major-table").bootstrapTable('getSelections');
//         clearChart();  
//         let chart = makeChart(data);  
//         chart.renderTo('#compare-career-charts');
        
//         const docheight = document.body.clientHeight;
//         chart.resize({ height: docheight*.4 });
//     } catch (error) {
//         console.error(error);
//         clearChart(); 
//         d3.select('#compare-career-charts')
//             .append('p')
//             .attr("class", "well")
//             .text(error.message + " make sure to select some rows first! You can also view this dataset on ")
//             .append("a")
//             .attr("href", "https://public.tableau.com/profile/lauren7291#!/vizhome/CDSProjectVisualizations/CareersandSkills")
//             .text("tableau public");
//     }
// }


// $('document').ready(function() {

//     $('#btnMajor').click(function(){
//         $('#major-data-row').removeClass('hidden');
//         filltable();
//     });

//     $('#compare-carreers-button').click(function(){
//         handleChartRendering();
//     })

//     d3.selectAll('.chart-config-dropdown')
//         .on('change', function() {
//             handleChartRendering();
//         });
// })



