import  "../css/style.css";
import './plugins';
import locations from "./store/locations";
import formUI from './views/form';


document.addEventListener('DOMContentLoaded', e => {
  
  // Events
  initApp();
 

  // handlers
  async function initApp() {
    await locations.init();

    console.log(locations)
    
    formUI.setAutocompleteData(locations.shortCities);
  }

  
});
