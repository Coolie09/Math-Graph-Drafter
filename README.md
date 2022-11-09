# Math-Graph-Drafter

# Warning! ⚠️

This code may contain (unlikely) a few bugs! Please contact me in therefor in the issues section! Thx a lot! <br>
It is not important, to have installed the chrome extension "tamperkey"!

# Warning (09.11.2022) 
## This script is going to be updated soon!


<br>
# What does this script do?

This script allows to draw a function in the graph located in the HTML file. In fact, any graph can be displayed both in positive and negative. Furthermore, it is possible to display the function values of the graph in a separate table. The displayed value range is still limited and scrolling/zooming is not possible, but this will come in the future. 

# How to use this script

The script including the HMTL file has to be downloaded. In the JavaScript file itself the graph to be displayed has to be specified. The default function can be deleted, it is only for illustrative purposes. To change the value you have to go into the ``` getValues() ``` function. This looks like the following by default: 
```
function getValues(x) {
    return Math.sin(x)*20;
}
```

After the return statement you can simply replace the function. You can specify your own functions like the linear function 2x+22, but you can also use the functions already implemented in the Math object.  <b>Important is nevertheless that the *20 remains, since otherwise it is no longer true to scale! </b> If this value should want to be changed, then one must make this in the ``` drawFunction() ``` below also with the i-value. <b> This is not recommended for clarity reasons!  </b>

# Future Add-Ons
- Functions will be much easier to enter
- Graph values are readable
- drawing, moving will be possible

<br>
This script is subject to the MIT-License! Please note and respect this!<br>
@Coolie09 Copyright© 2022
