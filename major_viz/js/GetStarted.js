function priceFormatter(value, row, index) {
    return "$" + d3.format(",")(Number.parseInt(value));
}

function percentFormatter(value, row, index) {
    return value + "%";
}

function loadData(csvPath, tableNode, showColumns, tauParams) {
    var chart;

    function cleanData(dataArray){
        return dataArray.map(function(datarow) {
            if(typeof(datarow[tauParams.x]) == "string")
                datarow[tauParams.x] = Number.parseInt(datarow[tauParams.x].replace(/\D/g,''));
            
            return datarow;
        });
    }

    function updateChart() {
        window.setTimeout(function(){
                chart.setData(cleanData($(tableNode).bootstrapTable('getData', useCurrentPage=true)));
            },300);
;        
    }

    d3.csv(csvPath, function(error, dataSet){
        if(error)
            console.error(error);
        
        $(tableNode).bootstrapTable({
            locale: 'en-US',
            onSearch: updateChart,
            // onResetView: makeChart,
            onSort: updateChart,
            onPageChange: updateChart,
            columns: showColumns,
            data: dataSet
        })
        tauCharts.api.tickFormat.add("currency", d3.format(["$",",.2f"]));

        tauParams.data = cleanData($(tableNode).bootstrapTable('getData', useCurrentPage=true));
        chart = new tauCharts.Chart(tauParams);
        chart.renderTo('#bars');
    })  
}

$('document').ready(function () {
    $('#degreesTab').click(function () {
        let alreadyClicked = $(this).parent().hasClass('active');
        if (!alreadyClicked){
            loadData("../data/degrees-that-pay-back.csv",
                '#degreesTable',
                [{
                    field: "UndergraduateMajor",
                    sotrable: true,
                    title: "Undergraduate Major",
                    searchable: true
                },
                {
                    field: "StartingMedianSalary",
                    title: "Starting Median Salary",
                    sotrable: true,
                    formatter: priceFormatter
                },
                {
                    field: "Mid-CareerMedianSalary",
                    title: "Mid-Career Median Salary",
                    sotrable: true,
                    formatter: priceFormatter
                },
                {
                    field: "PercentChange",
                    title: "Percent Change",
                    sotrable: true,
                    formatter: percentFormatter
                }],
                {
                    type: 'horizontal-bar',
                    x: 'StartingMedianSalary',
                    y: 'UndergraduateMajor',
                    color: 'Mid-CareerMedianSalary',
                    size: 'StartingMedianSalary',
                    guide: {
                        x: {
                            label: {text: 'Starting Median Salary'},
                            "tickFormat": "currency"
                        }
                    },
                    plugins: [
                        tauCharts.api.plugins.get('tooltip')(),
                        tauCharts.api.plugins.get('legend')(),
                        tauCharts.api.plugins.get('quick-filter')(),
                    ]
                }
            )
        }
    });
    $('#salaries-collegeTab').click(function () {
        let alreadyClicked = $(this).parent().hasClass('active');
        if (!alreadyClicked){
            loadData("../data/salaries-by-college-type.csv",
            '#collegeTable',
            [{
                field: "SchoolName",
                sotrable: true,
                searchable: true
            },
            {
                field: "SchoolType",
                sotrable: true,
                searchable: true
            },
            {
                field: "StartingMedianSalary",
                sotrable: true,
                formatter: priceFormatter
            },
            {
                field: "Mid-CareerMedianSalary",
                sotrable: true,
                formatter: priceFormatter
            }],
            {
                type: 'horizontal-bar',
                x: 'StartingMedianSalary',
                y: 'SchoolName',
                color: 'SchoolType',
                size: 'StartingMedianSalary',
                guide: {
                    x: {
                        label: {text: 'Starting Median Salary'},
                        "tickFormat": "currency"
                    }
                },
                plugins: [
                    tauCharts.api.plugins.get('tooltip')(),
                    tauCharts.api.plugins.get('legend')(),
                    tauCharts.api.plugins.get('quick-filter')(),
                    ]
            }
            )
        }
    });
    $('#salaries-regionTab').click(function () {
        let alreadyClicked = $(this).parent().hasClass('active');
        if (!alreadyClicked){
            loadData("/data/salaries-by-region.csv", 
                '#regionsTable', [{
                    field: "SchoolName",
                    sotrable: true,
                    searchable: true
                },
                {
                    field: "Region",
                    sotrable: true,
                    searchable: true
                },
                {
                    field: "StartingMedianSalary",
                    sotrable: true,
                    formatter: priceFormatter
                },
                {
                    field: "Mid-CareerMedianSalary",
                    sotrable: true,
                    formatter: priceFormatter
                }], {
                    type: 'horizontal-bar',
                    x: 'StartingMedianSalary',
                    y: 'SchoolName',
                    color: 'Region',
                    size: 'StartingMedianSalary',
                    guide: {
                        x: {
                            label: {text: 'Starting Median Salary'},
                            "tickFormat": "currency"
                        },
                        size: {
                            "tickFormat": "currency"
                        }
                    },
                    plugins: [
                        tauCharts.api.plugins.get('tooltip')(),
                        tauCharts.api.plugins.get('legend')(),
                        tauCharts.api.plugins.get('quick-filter')(),
                        ]
                }
                )
        }
    });

    $('#degreesTab').click();
    $('#degreesTab').tab('show');
})