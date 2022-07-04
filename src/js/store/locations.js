import api from "../services/apiService";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
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
}

const locations = new Locations(api)

export default locations; 