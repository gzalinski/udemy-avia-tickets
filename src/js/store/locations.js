import api from "../services/apiService";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCities = null;
    }

    async init(){
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
        ])

        const [countries, cities] = response;
        this.countries = countries;
        this.countries = this.serializeCountries(countries);
        this.cities = cities;
        this.cities = this.serializeCities(cities);
        this.shortCities = this.createShortCities(this.cities);

        return response;
    }



    getCitiesByCountryCode(code){
        return this.cities.filter( city => city.country_code === code)
    }

    serializeCountries(countries) {
        return countries.reduce((acc, country) => {
          acc[country.code] = country;
          return acc;
        }, {});
    }

    serializeCities(cities) {
        return cities.reduce((acc, city) => {
          const country_name = this.countries[city.country_code].name;
          const key = `${city.name},${country_name}`;
          acc[key] = {
            ...city,
            country_name,
          };
          return acc;
        }, {});
    }

    createShortCities(cities) {
        return Object.entries(cities).reduce((acc, [key]) => {
          acc[key] = null;
          return acc;
        }, {});
    }

}

const locations = new Locations(api)

export default locations; 