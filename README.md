This is a function that animates counting numbers.  
The bare minimum to get this script working is passing in a nums array with an id of where you want to animate the numbers  
And the end which is the number you want to reach with the counting animation.  
There are optional arguments like onShowId which is the element you want the client to see before running the script, by default it's targeting the body element.  
onShowDisplacement how far into the element you want the client to scroll before running the script.  
nums which is an array or objects with an element id, start number and end number.  
duration which specifies how long you want the animatin to play in seconds.  
variety which specifies how much variety in seconds you want the animationto play compared to the core duration.  
Here's an example of calling the function.  

<script src="counter.js"></script>  
<script>  
    counterAnimation({  
        onShowId: "#nums",  
        onShowDisplacement: 200,  
        nums: [{ id: 'one', end: 10 }, { id: 'two', end: 100 }, { id: 'three', end: 1000 }, { id: 'four', end: 60 }, { id: 'five', end: 300 }, { id: 'six', end: 237 }],  
        duration: 1.5,  
        variety: 1.5  
    })  
</script>  
