import axios from 'axios'
import config from '../config/apiConfig'

/**
 *  /countries - array of
 *  /cities - array cities
 *  /prices/cheap - array 
 */
class Api {
    constructor(config){
        this.url  = config.url;
    }

   
}

const api = new Api(config)

export default api;