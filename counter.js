// This is a function that animates counting numbers.
// The bare minimum to get this script working is passing in an array with objects that have an 'id' and 'start' property, with the 'end' property being optional.
// If you animation is somewhere at the bottom of the page you don't want it to run until the client has scrolled down to be able to see it.
// There are optional arguments like onShowId which is the id of the element you want the client to see before running the script, by default it's targeting the body element.
// onShowDisplacement how far into the element you want the client to scroll before running the script.
// duration which specifies how long you want the animation to play in seconds.
// variation which specifies how much variation in seconds you want the animationto play compared to the core duration.
// Here's an example of calling the function under a C# .NET Core context.

{/* 
@{
    var numbersList = numbers.ToList();
}
<script src="counter.js"></script>
<script>
    let numbersArray = [];
    @for(int i = 0; i < numbersList.Count(); i++)
    {
        const obj@i = {
            id: "@numbersList[i].Id",
            start: 0,
            end: @numbersList[i].Number
        }

        numbersArray.push(obj@i);
    }

    counterAnimation({
        onShowId: "#numbersContainer",
        onShowDisplacement: 200,
        nums: numbersArray,
        duration: 1.5,
        variation: 1.5
    })
</script> 
*/}

const counterAnimation = ({ onShowId = "body", onShowDisplacement = 0, nums = [], duration = 1, variation = 1 }) => {

    const runAnimation = ({ id = "#", end = 100, start = 0 }) => {
        if (start === end) return;
        const range = end - start;
        let current = start;
        const increment = (end > start ? 1 : -1) * range / (duration + Math.random() * variation) / 60;
        const obj = document.getElementById(id);
        const timer = setInterval(() => {
            current += increment;

            if (current >= end) {
                clearInterval(timer);
                obj.innerHTML = end.toLocaleString();
                return;
            }

            obj.innerHTML = Math.round(current).toLocaleString();
        }, 1000 / 60);
    }

    let elementPosition = document.querySelector(onShowId).getBoundingClientRect().top;

    const checkInView = () => {
        if(window.scrollY + window.innerHeight - onShowDisplacement > elementPosition) {
            document.removeEventListener("scroll", checkInView)
            nums.forEach(num => runAnimation(num));
        }
    }

    document.addEventListener("scroll", checkInView);
    document.onload = checkInView;
}