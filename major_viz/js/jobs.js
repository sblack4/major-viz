

// Response form Github looks like htis: 
// {
//     "company": "Findmypast",
//     "company_logo": "http://github-jobs.s3.amazonaws.com/1bb279b8-d11d-11e7-97f4-c3dedda24992.jpg",
//     "company_url": "https://www.findmypast.co.uk/",
//     "created_at": "Fri Nov 24 13:54:08 UTC 2017",
//     "description": "<p>We are building a new platform based on Elixir, React and Node! This new platform will handle the 2 million daily page views we have across our sites helping surface billions of records.</p>\n\n<p>We believe engineers should be empowered to create solutions in an environment where the best idea floats to the top, rather than a top down approach!</p>\n\n<p><strong>We can offer the opportunity to:</strong></p>\n\n<ul>\n<li>Embrace functional programming, learn and master Elixir, Phoenix, React, Node and others</li>\n<li>Be part of a TDD culture, employing SOLID principles, focussing on design patterns</li>\n<li>Work in a lean agile environment with a flat hierarchy and pairing</li>\n<li>Work on the latest architecture paradigms and technical challenges</li>\n<li>Join a strong DevOps culture and manage our continuous integration and deployment with \nTeamcity</li>\n</ul><p>Besides Elixir, React and Node, we also use technologies such as Apache Solr, Microsoft SQL \nServer, Riak, Redis, Neo4j, RabbitMQ, etc. We also have a mix of traditional MVC and SPA \napplications written in ASP.net, Node, React, Angular, Coffeescript.</p>\n\n<p>You are welcome to check out our tech blog: <a href=\"http://tech.findmypast.com\">http://tech.findmypast.com</a></p>\n\n<p><strong>The successful applicants will have:</strong></p>\n\n<ul>\n<li>At least 3+ years commercial coding experience</li>\n<li>Mastery of at least 1 programming language (e.g. JavaScript, Python, Ruby, Scala, Erlang, Clojure, \n.NET or other) </li>\n<li>Experience working on scalable web applications, services, APIs or high traffic sites is desirable</li>\n<li>An open mind to being a full stack developer – even if it’s not 50/50 back/front dev!</li>\n<li>Passion for quality (e.g. TDD / BDD) and hunger to be a lifelong learner</li>\n</ul><p>We want to build the best tech teams in London &amp; Dundee!  Please apply now!</p>",
//     "how_to_apply": "<p><a href=\"https://boards.greenhouse.io/findmypast#.WhghP1Vl-Uk\">https://boards.greenhouse.io/findmypast#.WhghP1Vl-Uk</a></p>",
//     "id": "d3ea5eba-d11d-11e7-8ea3-864ce448f7fa",
//     "location": "London OR Dundee",
//     "title": "Full stack JavaScript Engineer",
//     "type": "Full Time",
//     "url": "http://jobs.github.com/positions/d3ea5eba-d11d-11e7-8ea3-864ce448f7fa"
//   },



function searchJobs(){
    const search_term = "/"+$('input#job-search-input').val() || "";
    populateTable(search_term);
}

/**
 * 
 * @param {str} value 
 * @param {*} row 
 * @param {*} index 
 */
function imageFormatter(value, row, index) {
    return `<img style="height:40px; max-width: 70px;" src="${value}"></img>`;
}

function clickHandler(rowData) {
    d3.select("#job-desc-p")
        .style("opacity", 1)
        .transition()
        .duration(500)
        .style("opacity", 0).remove();
    window.setTimeout(function() {
        d3.select("#job-desc-well")
            .append("p")
            .attr("id", "job-desc-p")
            .style("opactiy", 0)
            .html(rowData["description"])
            .transition()
            .duration(620)
            .style("opacity", 1);
    }, 500)
}

function buildTable(dataSet){
    $("#job-table").bootstrapTable({
        locale: 'en-US',
        onClickRow: clickHandler,
        columns: [
            {
                field: "company_logo",
                sortable: "false",
                title: "",
                searchable: "false", 
                formatter: imageFormatter
            },{
                field: "company",
                sortable: true,
                title: "Company",
                searchable: true
            },
            {
                field: "title",
                sortable: true,
                title: "Title",
                searchable: true
            }, {
                field: "location",
                sortable: true,
                title: "Location",
                searchable: true
            },{
                field: "type",
                sortable: true,
                title: "Type",
                searchable: true
            }
        ],
        data: [{
            company_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Smiley_head_happy.svg/2000px-Smiley_head_happy.svg.png",
            title: "Dream Job",
            company: "Heaven on Earth", 
            location: "Where it's at",
            type: "Your type",
            description: "Search for your dream job! "
        }]
    })
}

function populateTable(search_term) {
    d3.json("/api"+search_term, function(error, dataSet){
        if(error)
            console.error(error);
        
        if($('#job-table').children().length < 1) {
            buildTable(dataSet);
        }

        $('#job-table').bootstrapTable('load', dataSet);
    }) 
}


$('document').ready(function(){

    buildTable();
    $('#job-search-btn').click(() => {
        searchJobs();
    });


})

