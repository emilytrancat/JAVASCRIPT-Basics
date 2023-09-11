// 1. declare variables and capture input
const adjective = prompt("Type an adjective");
const verb = prompt("Type a verb");
const noun = prompt("Type a noun");

// combine the input with other words to create a story.
const combine = `<p>There once was a ${adjective} cat that used poop to ${verb} their ${noun}.</p>`

// display the story as a <p> inside the <main> element.
document.querySelector("main").innerHTML = combine;