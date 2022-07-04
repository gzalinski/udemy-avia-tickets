class FormUI {
    constructor() {
        this.$form = document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-origin');
        this.destination = document.getElementById('autocomplete-destination');
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');
    }
  
  }
  
  const formUI = new FormUI();
  
  export default formUI;