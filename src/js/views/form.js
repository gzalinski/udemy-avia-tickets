import { getAutocompleteInstance, getDatePickerInstance } from '../plugins/materialize';
class FormUI {
    constructor(autocompleteInstance, datePickerInstance) {
        //elements
        this.$form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');

        //materialize ui instances
        this.originAutocomplete = autocompleteInstance(this.origin);
        this.destinationAutocomplete = autocompleteInstance(this.destination);
        this.departDatePicker = datePickerInstance(this.depart);
        this.returnDatePicker = datePickerInstance(this.return);

    }
  
  }
  
  const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);
  
  export default formUI;