const sounds = {
    a: new Audio("28.mp3"),
    s: new Audio("29.mp3"),
    d: new Audio("30.mp3"),
    f: new Audio("31.mp3"),
    g: new Audio("32.mp3"),
    h: new Audio("33.mp3"),
    j: new Audio("34.mp3"),
    k: new Audio("35.mp3"),
    l: new Audio("36.mp3"),
    ";": new Audio("37.mp3"),
     z: new Audio("28.mp3"),
    x: new Audio("29.mp3"),
    c: new Audio("30.mp3"),
    v: new Audio("31.mp3"),
    b: new Audio("32.mp3"),
    n: new Audio("33.mp3"),
    m: new Audio("34.mp3"),
    ",": new Audio("35.mp3"),
    ".": new Audio("36.mp3"),
    "/": new Audio("37.mp3"),
     q: new Audio("28.mp3"),
    w: new Audio("29.mp3"),
    e: new Audio("30.mp3"),
    r: new Audio("31.mp3"),
    t: new Audio("32.mp3"),
    y: new Audio("33.mp3"),
    u: new Audio("34.mp3"),
    i: new Audio("35.mp3"),
    o: new Audio("36.mp3"),
    p: new Audio("37.mp3")
}

addEventListener("keydown",function(dts){
    let    key = dts.key.toLowerCase();
    if(sounds[key]){
        sounds[key].currentTime = 0
        sounds[key].play();
    }
})