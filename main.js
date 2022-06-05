canvas = new fabric.Canvas("myCanvas");
player_x = 10; 
player_yt = 10;

block_img_height = 30;
block_img_width = 30;

player_object = "";
block_img_object = "";

function player_update() {
    fabric.image.getURL("player.png",function(img){
    player_object = img;

    player_object.height = scaleToheight(150);
    player_object.width = scaleTowidth(130);
    player_object = set({
    top:player_y,
    top:player_x
    });
    canvas.add(player_object);
});
}
function block_img_update(get_image) {
    fabric.image.getURL(get_image,function(Img){
        block_img_object = Img;
        block_img_object.height = scaleToheight(block_img_height);
        block_img_object.width = scaleTowidth(block_img_width);
        block_img_object = set({
        top:player_y,
        top:player_x
        });
        canvas.add(block_img_object);
    });
}