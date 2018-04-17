queue()
.defer(d3.json, "/harrypotterprojects/harryprojects")
.await(makeGraphs);

  function makeGraphs(error, harrypotterProjects){
        var ndx = crossfilter(harrypotterProjects);
        var parseDate = d3.time.format("%d/%m/%Y").parse;
        harrypotterProjects.forEach(function (d) {
            d.date = parseDate(d.date);
        })

    var date_dim = ndx.dimension(dc.pluck('date'));
        var character = date_dim.group().reduceSum(dc.pluck('name'));


    var houseType = ndx.dimension(function (d) {
        return d["house"];
    });
    var speciesNumberDim = ndx.dimension(function (d) {return d["species"];});

        var minDate = date_dim.bottom(1)[0].date;
        var maxDate = date_dim.top(1)[0].date;



    var numProjectsByHouseType = houseType.group();
    var numProjectsBySpeciesNumber = speciesNumberDim.group();





    var houseChart = dc.pieChart("#house-chart");
    var speciesChart = dc.rowChart("#species-chart");


    houseChart
        .ordinalColors(["#004e80", "#0f7b49", "#eeb503", "#8a0000"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(houseType)
        .group(numProjectsByHouseType);

    speciesChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#F5821F"])
        .width(400)
        .height(250)
        .dimension(speciesNumberDim)
        .group(numProjectsBySpeciesNumber)
        .xAxis().ticks(4);

    dc.lineChart("#character-age")
            .width(1000)
            .height(300)
            .margins({top: 10, right: 50, bottom: 30, left:50})
            .dimension(date_dim)
            .group(character)
            .transitionDuration(500)
            .x(d3.time.scale().domain([minDate, maxDate]))
            .xAxisLabel("Month")
            .yAxis().ticks(4);

    dc.renderAll();
}
