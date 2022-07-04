import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


//Init select
const select = document.querySelectorAll('select')
M.FormSelect.init(select)

export function getSelectInstance(el){
    return M.FormSelect.getInstance(el)
}

//Init autocomplete
const autocomplete =  document.querySelectorAll('.autocomplete')
M.Autocomplete.init(autocomplete, {
    data: {
        Apple: null,
        Microsfot: null,
        Google: 'https://placehold.it/250x250'
    }
})

export function getAutocompleteInstance(el){
    return M.Autocomplete.getInstance(el)
}

//Init picker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
    showClearBtn: true,
})

export function getDatePickerInstance(el){
    return M.Datepicker.getInstance(el)
} 