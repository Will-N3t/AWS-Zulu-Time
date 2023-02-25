/*
Will Chapman
N3twork
1st Sept 2022

 */

// Store the clock
var clock = null;


// Ensure leading zeroes
function leadingZero(number, digits)
{
    digits = digits == null ? 2 : digits;

    var text = number.toString();

    var dif = digits-text.length;
    for (var i=0; i<dif; i++)
    {
        text = "0" + text;
    }

    return text;
}


// Set the clock text
function clockTick()
{
    if (clock != null)
    {
        var date = new Date();
        clock.innerHTML = date.getUTCFullYear() + "-" + leadingZero(date.getUTCMonth()) + "-" + leadingZero(date.getUTCDate()) + "T"
            + leadingZero(date.getUTCHours()) + ":" + leadingZero(date.getUTCMinutes()) + ":" + leadingZero(date.getUTCSeconds())  + "." + leadingZero(date.getUTCMilliseconds(), 3) + "Z";
    }
}


// Add the clock
function addClock()
{
    var menuContainer = document.getElementsByClassName('globalNav-123')[0];
    var menu = menuContainer.children[2];
    var textExample = menu.children[2].children[1].children[0].children[1].children[0].children[0].children[0];

    // Set up outer element of clock
    var clockContainer = document.createElement("div");
    clockContainer.role = "menuitem";
    clockContainer.classList = menu.children[0].classList;
    
    // Set up middle element of clock
    var clockFrame = document.createElement("span");
    clockFrame.role = "menuitem";
    clockFrame.classList = textExample.classList;
    
    // Set up clock element
    clock = document.createElement("button");
    clock.classList = textExample.children[0].classList;
    
    var computedStyle = window.getComputedStyle(textExample.children[0]);
    Array.from(computedStyle).forEach(key =>  clock.style.setProperty(key, computedStyle.getPropertyValue(key), computedStyle.getPropertyPriority(key)) );
    clock.style.textAlign = "right";
    clock.style.width = "100%";
    clock.style.fontSize = (Number(clock.style.fontSize) * 1.25).toString();
    clock.style.fontWeight = (Number(clock.style.fontWeight) * 1.5).toString();

    clockFrame.appendChild(clock);
    clockContainer.appendChild(clockFrame);
    menu.insertBefore(clockContainer, menu.children[0]);

    clockTick();
}


// Create the clock in the right place when the window is loaded
window.onload = addClock;

// Set the clock to tick every 10 milliseconds
setInterval(clockTick,10);