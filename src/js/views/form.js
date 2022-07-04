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

    get form() {
        return this.$form;
    }

    get originValue() {
        return this.origin.value;
    }
    
    get destinationValue() {
        return this.destination.value;
    }

    get departDateValue() {
        return this.depart.toString();
    }

    get returnDateValue() {
        return this.return.toString();
    }
    
    setAutocompleteData(data) {
        this.originAutocomplete.updateData(data);
        this.destinationAutocomplete.updateData(data);
    }
    
  }
  
  const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);
  
  export default formUI;