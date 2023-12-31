// XML http Request
// https://restcountries.com/v3.1/all

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response);

    // Q1. Get all the countries from Asia continent/region using Filter function
    console.log("Listed all countries from Asia region");
    const Continent = data.filter(value => value.region === 'Asia');
    console.log(Continent);

    //Q2. Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("Countries which is having more than two lakh above population")
    const aboveTwoLakhpopulation = data.filter(value => value.population>200000);
    console.log(aboveTwoLakhpopulation);

    //Q3. Print the following details name, capital, flag, using forEach function
    console.log("Printed all the countries -> Name, Capital city, Flag");
    data.forEach(values =>{
        console.log(`
        Name of the country - ${values.name.common}
        Capital city - ${values.capital}
        Flag - ${values.flags.png}
        `)
    });

    //Q4. Print the total population of countries using reduce function
    console.log("Total population of all countries");
    const totalPopulation = data.reduce((acc, values) => acc+=values.population,0);
    console.log(totalPopulation);


    //Q5. Print the country that uses US dollars as currency.
    console.log(" listed the Countries which is using US dollars");
    const dollorUsingCountries = data.filter(values => values.currencies && values.currencies.USD);
    console.log(dollorUsingCountries);
}