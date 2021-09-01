var canvas = new fabric.Canvas('my_canvas');

player_x = 10;
player_y = 10;

block_height = 30;
block_width = 30;

player_object = "";
block_object = "";

function player_alive() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToHeight(200);
        player_object.scaleToWidth(200);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function add_block(get_block) {
    fabric.Image.fromURL(get_block, function(Img) {
        block_object = Img;
        block_object.scaleToHeight(block_height);
        block_object.scaleToWidth(block_width);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", down_key);
function down_key(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    console.log(e);
    if (e.shiftKey == true && keypressed == '80') {
        block_width = block_width + 5;
        block_height = block_height + 5;
        document.getElementById("width_value").innerHTML = block_width;
        document.getElementById("height_value").innerHTML = block_height;
        console.log("shift-key & p");
    }
    if (e.shiftKey == true && keypressed == '77') {
        block_width = block_width - 5;
        block_height = block_height - 5;
        document.getElementById("width_value").innerHTML = block_width;
        document.getElementById("height_value").innerHTML = block_height;
        console.log("shift-key & m");
    }
    if (keypressed == '38') {
        console.log("up arrow key pressed");
        up();
    }
    if (keypressed == '39') {
        console.log("right arrow key pressed");
        right();
    }
    if (keypressed == '40') {
        console.log("down arrow key pressed");
        down();
    }
    if (keypressed == '37') {
        console.log("left arrow key pressed");
        left();
    }
    if (keypressed == '87') {
        add_block("wall.jpg");
        console.log("w key pressed");
    }
    if (keypressed == '76') {
        add_block("light_green.png");
        console.log("l key pressed");
    }
    if (keypressed == '68') {
        add_block("dark_green.png");
        console.log("d key pressed");
    }
    if (keypressed == '84') {
        add_block("trunk.jpg");
        console.log("t key pressed");
    }
    if (keypressed == '82') {
        add_block("roof.jpg");
        console.log("r key pressed");
    }
    if (keypressed == '67') {
        add_block("cloud.jpg");
        console.log("c key pressed");
    }
    if (keypressed == '89') {
        add_block("yellow_wall.png");
        console.log("y key pressed");
    }
    if (keypressed == '71') {
        add_block("ground.png");
        console.log("g key pressed");
    }
    if (keypressed == '85') {
        add_block("unique.png");
        console.log("u key pressed");
    }
    if (keypressed == '83') {
        add_block("glass.png");
        console.log("s key pressed");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("Your X value is " + player_x + " Your Y value is " + player_y);
        canvas.remove(player_object);
        player_alive();
    }
}
function down() {
    if (player_y <= 600) {
        player_y = player_y + block_height;
        console.log("Your X value is " + player_x + " Your Y value is " + player_y);
        canvas.remove(player_object);
        player_alive();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("Your X value is " + player_x + " Your Y value is " + player_y);
        canvas.remove(player_object);
        player_alive();
    }
}
function right() {
    if (player_x <= 1000) {
        player_x = player_x + block_width;
        console.log("Your X value is " + player_x + " Your Y value is " + player_y);
        canvas.remove(player_object);
        player_alive();
    }
}













