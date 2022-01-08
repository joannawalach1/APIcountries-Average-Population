async function fetchApi() {
    const countriesAPI = 'https://restcountries.com/v2/all';
    return await fetch(countriesAPI)
        .then((response) => {
            return response.json()
        })
}

function showCountries(countries, continent) {
    const countries1 = countries.filter((country) => (country.region) === continent);
    const continents = countries1.slice(0,1);
    const populationOFContinent = countries1.reduce((a, b) => {
        return (a + (b.population))
    }, 0);
    const numberOfCountriesOnContinet = countries1.length;
    const averagePopulationOFContinent = populationOFContinent/numberOfCountriesOnContinet;
    console.log(continent, populationOFContinent, countries1.length, averagePopulationOFContinent);


    continents.map(continent => {
        let wrapper = document.querySelector(".wrapper");
        let row = document.createElement("div");
        row.className = "row";
        wrapper.appendChild(row);
        let name = document.createElement("p");
        row.appendChild(name);
        name.innerText = continent.region;
        let region = document.createElement("p");
        row.appendChild(region);
        region.innerText = parseInt(populationOFContinent);
        let numberOfCountries = document.createElement("p");
        row.appendChild(numberOfCountries);
        numberOfCountries.innerText = parseInt(numberOfCountriesOnContinet);
        let averagePopulation = document.createElement("p");
        row.appendChild(averagePopulation);
        averagePopulation.innerText = parseInt(averagePopulationOFContinent);
    });

}

fetchApi().then(response => {
    showCountries(response, "Asia");
    showCountries(response, "Europe");
    showCountries(response, "Americas");
    showCountries(response, "Africa");
    showCountries(response, "Polar");

});
