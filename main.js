var canvas = new fabric.Canvas('mycanvas');

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(player_img) {
    player_object= player_img;
   player_object.scaleToWidth(150);
   player_object.scaleToHeight(140);

   player_object.set({
    top: player_y,
    left: player_x
   });
   canvas.add(player_object)
    });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(block_img) {
    block_object= block_img;
   block_object.scaleToWidth(block_image_width);
   block_object.scaleToHeight(block_image_height);

   block_object.set({
    top: player_y,
    left: player_x
   });
   canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;

    if(e.shiftKey == true && keyPressed == '80') // increase size
    {
       block_image_height = block_image_height + 10;
       block_image_width = block_image_width + 10;
       document.getElementById("current_width").innerHTML=block_image_width;
       document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77') // decrease size
    {
       block_image_height = block_image_height - 10;
       block_image_width = block_image_width - 10;
       document.getElementById("current_width").innerHTML=block_image_width;
       document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keyPressed == '38')
    {
        up();
    }

    
    if(keyPressed == '40')
    {
        down();
    }

    
    if(keyPressed == '39')
    {
        right();        
    }

    
    if(keyPressed == '37')
    {
      left();  
    }

    
    if(keyPressed == '70')
    {
        new_image("ironman_face.png");
    }

    
    if(keyPressed == '66')
    {
        new_image("spiderman_body.png");
    }


    if(keyPressed == '76')
    {
        new_image("hulk_legs.png");
    }

    
    if(keyPressed == '82')
    {
        new_image("thor_right_hand.png");
    }

        
    if(keyPressed == '72')
    {
        new_image("captain_america_left_hand.png");
    }
}






function down ()
{
    if (player_y < 700)
    {
      player_y = player_y + 10;
      canvas.remove(player_object);

      player_update();
    }
}

function up ()
{
    if (player_y > 0)
    {
      player_y = player_y - 10;
      canvas.remove(player_object);

      player_update(); 
    }
}

function right()
{
    if (player_x < 900)
    {
      player_x = player_x + 10;
      canvas.remove(player_object);

      player_update();
    }
}

function left()
{
    if (player_x > 0)
    {
      player_x = player_x - 10;
      canvas.remove(player_object);

      player_update(); 
    }
}