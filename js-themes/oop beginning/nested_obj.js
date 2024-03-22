const country = {
 
    name: "Germany",
    language: "German",
    capital:{
    
        name: "Berlin",
        population: 3375000,
        year: 1237
    }
};
console.log("Capital:", country.capital.name); // Berlin                    -- property of nested obj
console.log("Population:", country["capital"]["population"]); // 3375000    -- array style
console.log("Year of foundation:", country.capital["year"]); // 1237


const country1 = {
 
    name: "Switzerland",
    languages: ["German", "French", "Italian"],
    capital:{
    
        name: "Bern",
        population: 126598
    },
    cities: [
        { name: "Zurich", population: 378884},
        { name: "Geneva", population: 188634},
        {name: "Basel", population: 164937}
    ]
};

// output all elements from country.languages
console.log("Official languages of Switzerland");
for(const lang of country1.languages){
  console.log(lang);
}
console.log("\n"); // to separate languages from cities

// output all elements from country.cities
console.log("Swiss Cities");
for(const city of country1.cities){
  console.log(city.name);
}