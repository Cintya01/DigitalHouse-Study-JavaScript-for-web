
// function changeThisElement(e) {
//     e.innerHTML = "I'm changed!";
// }

const changeThisElement = (e) => {
    e.innerHTML = "I'm changed from arrow function!";
}

const displayDate = () => { document.getElementById("test").innerHTML = Date(); }

document.querySelector("#btn").onclick = displayDate;

const keydown = ($e) => {
    const key = $e.key;
    console.log(key);
}