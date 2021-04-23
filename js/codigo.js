var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var key = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};


var x = 210;
var y = 210;



var background = {
    url: "img/tile.png",
    loadOk: false
};


var cow = {
    url: "img/vaca.png",
    loadOk: false
};

var pig = {

    url: "img/cerdo.png ",
    loadOk: false
}

var chicken = {
    url: "img/pollo.png",
    loadOk: false
}




document.addEventListener("keyup", conditional);


function conditional(event) {

    switch (event.keyCode) {
        case key.LEFT:
            console.log("key left");
            x -= 10;
            draw(x, y);
            break;

        case key.UP:
            console.log("key up");
            y -= 10;
            draw(x, y)
            break;

        case key.RIGHT:
            console.log(" key right");
            x += 10;
            draw(x, y);
            break;

        case key.DOWN:
            console.log("key down");
            y += 10;
            draw(x, y);
            break;
    }




}




// Here load the background
background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", backgroundLoad);


// here load the cow
cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", cowLoad);


//her load the Pig
pig.image = new Image()
pig.image.src = pig.url;
pig.image.addEventListener("load", pigLoad);

//Here load the Chicken

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", chickenLoad);









// Background Function Load
function backgroundLoad() {

    background.loadOk = true;
}

// Cow Function load
function cowLoad() {
    let i = 0;
    i++;
    console.log(i);
    cow.loadOk = true;
    if (x == 210 & y == 210) {

        draw(x, y);
    } else {
        draw();
    }

}

//pig function load

function pigLoad() {

    pig.loadOk = true;
    if (x == 210 & y == 210) {
        draw(x, y);
    } else {
        draw()
    }
}


//Chicken function load
function chickenLoad() {
    chicken.loadOk = true;
    pig.loadOk = true;
    if (x == 210 & y == 210) {
        draw(x, y);
    } else {
        draw()
    }

}


function draw(x, y) {

    if (background.loadOk == true) {

        papel.drawImage(background.image, 0, 0);

        if (cow.loadOk == true) {


            papel.drawImage(cow.image, x, y);
            console.log(x, y);
        }

        if (pig.loadOk == true) {
            papel.drawImage(pig.image, 100, 100);
            papel.drawImage(pig.image, 400, 250);
            papel.drawImage(pig.image, 80, 400);
        }

        if (chicken.loadOk == true) {
            papel.drawImage(chicken.image, 30, 80);
            papel.drawImage(chicken.image, 400, 200);


        }
    }


}
