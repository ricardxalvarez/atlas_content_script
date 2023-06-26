const redux_script = document.body.querySelectorAll('script')[0].innerHTML

const script_variable = '_atlas_initialState'
const trailing_object = `"}};`

const var_start_index = redux_script.indexOf(script_variable)
const var_end_index = redux_script.indexOf(trailing_object)
const script = redux_script.slice(
    var_start_index + script_variable.length + 2 
    // add 2 to delete '='
    , 
    var_end_index + trailing_object.length - 1
    // sustract 1 to get rid of trailing semicolon ;
    )

const INITIAL_STATE = JSON.parse(script)

console.log(script)
console.log(INITIAL_STATE)