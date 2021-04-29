// This is a function that animates counting numbers.
// The bare minimum to get this script working is passing in a nums array with an id of where you want to animate the numbers
// And the end which is the number you want to reach with the counting animation.
// There are optional arguments like onShowId which is the element you want the client to see before running the script, by default it's targeting the body element.
// onShowDisplacement how far into the element you want the client to scroll before running the script.
// nums which is an array or objects with an element id, start number and end number.
// duration which specifies how long you want the animatin to play in seconds.
// variety which specifies how much variety in seconds you want the animationto play compared to the core duration.
// Here's an example of calling the function.

{/* 
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
*/}

// To get a populated nums array to use with counterAnimation write something like this.
{/* 
@{
    var numList = numbers.ToList();
}
<script>
    let nums = [];
    @for(int i = 0; i < numList.Count(); i++)
    {
        const obj@i = {
            id: "@numList[i].Id",
            start: 0,
            end: @numList[i].End
        }

        nums.push(obj@i);
    }
</script> 
*/}

const counterAnimation = ({ onShowId = "body", onShowDisplacement = 0, nums = [], duration = 1, variety = 1 }) => {

    const runAnimation = ({ id = "#", end = 100, start = 0 }) => {
        if (start === end) return;
        const range = end - start;
        let current = start;
        const increment = (end > start ? 1 : -1) * range / 60 * (duration + Math.random() * variety);
        const obj = document.getElementById(id);
        const timer = setInterval(() => {
            current += increment;

            if (current >= end) {
                clearInterval(timer);
                obj.innerHTML = end;
                return;
            }

            obj.innerHTML = Math.round(current);
        }, 1000 / 60);
    }

    let elementPosition = document.querySelector(onShowId).offsetTop;

    const checkInView = () => {
        if(window.scrollY + window.innerHeight - onShowDisplacement > elementPosition) {
            document.removeEventListener("scroll", checkInView)
            nums.forEach(num => runAnimation(num));
        }
    }

    document.addEventListener("scroll", checkInView);
    document.onload = checkInView;
}