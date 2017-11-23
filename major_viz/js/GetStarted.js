function priceFormatter(value, row, index) {
    return "$" + d3.format(",.2f")(value);
}

function percentFormatter(value, row, index) {
    return value + "%";
}

function loadDegreesTable() {
    d3.csv("../data/degrees-that-pay-back.csv", function (err, degrees_that_pay) {
        if (err)
            console.warn(err);

        $('#degreesTable').bootstrapTable({
            locale: 'en-US',
            columns: [{
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
            data: degrees_that_pay
        })
    })
}

function loadCollegeTypeTable() {
    d3.csv("../data/salaries-by-college-type.csv", function (err, college_type_data) {
        if (err)
            console.warn(err);

        $('#collegeTable').bootstrapTable({
            locale: 'en-US',
            columns: [{
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
            data: college_type_data
        })
    })
}

function loadCollegeRegionTable() {
    d3.csv("/data/salaries-by-region.csv", function (err, college_type_data) {
        if (err)
            console.warn(err);

        $('#regionsTable').bootstrapTable({
            locale: 'en-US',
            columns: [{
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
            }],
            data: college_type_data
        })
    })
}


$('document').ready(function () {


    $('#degrees').click(function () {
        loadDegreesTable();
    });
    $('#salaries-college').click(function () {
        loadCollegeTypeTable();
    });
    $('#salaries-region').click(function () {
        loadCollegeRegionTable();
    });



})