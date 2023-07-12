var display = document.querySelector(".display");

display.value = "0";                                                // when the calculator starts, it will display 0
var result = "";

function dis (val) {                                                // using this function for displaying the values 
    if (display.value === "0") {                                    // if the value on its display is '0', value will become null string when any of the given buttons are clicked
        display.value = "";
    }
    if (display.value == result) {
        display.value = "";
    }
    display.value += val;                                           // the new value will be concatenated to the previous value, if null string is present, it will only display the new value
}

function square () {
    result = eval(display.value);                                   // used to calculate the value which is present on the display
    result = result * result;
    display.value = result;
}

function correct() {                                                // used for deleting the last value
    if (display.value === "0") {                                    // if value displayed is 0, then no change will take place
        display.value = "0";
    }
    else {
        if (display.value.length == 1) {                            // if only one value is present on the display, then value will become 0
            display.value = "0"
        }
        else {
            display.value = display.value.slice(0, -1);             // the last value is removed using indices, (-1 stands for last element's index)
        }
    }
}

function allClear () {
    display.value = "0";                                            // if this function is called, then value will be displayed 0
}

function solve () {                                                 // used to calculate the value which present on the display
    result = eval(display.value);
    display.value = result;
}