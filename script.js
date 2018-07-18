const country = document.querySelector("#country");
const population = document.querySelector("#population");
const density = document.querySelector("#density");
const addButton = document.querySelector("#add-btn");
var table = document.querySelector("tbody");

var countryData = [

];

var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column'
    },

    
    title: {
        text: 'Te dhenat e popullsise dhe dendesise'
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Numri'
        }
    },

    xAxis: {
        categories: []
    },

    series: [{
        name: 'Popullsia (ne milion)',
        data: []
    }, {
        name: 'Dendesia',
        data: []
    }]

});

function createAndSortNewObject() {
	if (country.value !== "" && population.value !== "" && density.value !== "") {
		var object = new Object();
		object.countryName = country.value;
		object.populationNr = population.value;
		object.densityNr = density.value;

		countryData.push(object);
		countryData.sort(function(a, b) {
	    return parseFloat(b.populationNr) - parseFloat(a.populationNr);
		});

		while (table.firstChild) {
	    	table.removeChild(table.firstChild);
		}

		countryData.forEach(countryi => {
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			var countryTd = document.createTextNode(countryi.countryName);
			var populationTd = document.createTextNode(countryi.populationNr);
			var densityTd = document.createTextNode(countryi.densityNr);
			td1.appendChild(countryTd);
			td2.appendChild(populationTd);
			td3.appendChild(densityTd);
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			table.appendChild(tr);
		});

		chart.xAxis[0].categories.push(country.value);
		chart.series[0].addPoint(parseFloat(population.value));
		chart.series[1].addPoint(parseFloat(density.value));

		country.value = "";
		population.value = "";
		density.value = "";
	} else {
		alert("Ju lutem plotesoni te gjitha fushat!");
	}
}



addButton.addEventListener("click", createAndSortNewObject);


























