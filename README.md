This is a function that animates counting numbers.  
The bare minimum to get this script working is passing in a nums array with an id of where you want to animate the numbers  
And the end which is the number you want to reach with the counting animation.  
There are optional arguments like onShowId which is the element you want the client to see before running the script, by default it's targeting the body element.  
onShowDisplacement how far into the element you want the client to scroll before running the script.  
nums which is an array or objects with an element id, start number and end number.  
duration which specifies how long you want the animatin to play in seconds.  
variety which specifies how much variety in seconds you want the animationto play compared to the core duration.  
Here's an example of calling the function.  
Look at the counter.js file for examples how to use it in the comments.  
NOTE TO SELF!: Possibly change it in the future to read a number from an element with the targeted class/id instead of passing an array of numbers as an argument.  
PROBLEMS TO BE FIXED!:  
Animation won't run on initial page load if it's immediatley viewable at the top of the page. It only animates after scrolling.  
Animations aren't running independtly, whe one of the animations on the top runs the rest at the bottom run as well.  
Animations running to early, before they are in view, this was a feature not a bug but should be removed or set the default to 0.  
Numbers not rendering initially, just an empty string, they should initially render a 0.  
