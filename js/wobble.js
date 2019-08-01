const speed = 100; // speed of wobbling, lower is faster
const height = 3;  // height of wobbling in pixels
const alink = "";  // page to link text to (set to ="" for no link)

let wobtxt;
let wobble;
let wobcnt = 0;

function initwobble() {
    if (document.getElementById) {
        let i;
        let wobli;
        wobble = document.getElementById("wobble");
        wobtxt = wobble.firstChild.nodeValue;
        while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);
        for (i = 0; i < wobtxt.length; i++) {
        wobli = document.createElement("span");
        wobli.setAttribute("id", `wobb${i}`);
        wobli.style.position = "relative";
        wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));
        if (alink) {
            wobli.style.cursor = "pointer";
            wobli.onclick = () => {
            top.location.href = alink;
            };
        }
        wobble.appendChild(wobli);
        }
        setInterval("wobbler()", speed);
    }
}

function wobbler() {
    for (let i = 0; i < wobtxt.length; i++)
        document.getElementById(`wobb${i}`).style.top =
        `${Math.round(height * Math.sin(i + wobcnt))}px`;
    wobcnt++;
}