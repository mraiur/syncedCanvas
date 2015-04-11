require(['Define'], function() {
    Define('Draw', {
        drawType: "none",

        _isMouseDown: false,

        mouseUp: function(){
            this._isMouseDown = false;
            console.log("mouse up");
        },

        mouseMove: function(){
            if(this._isMouseDown) {
                console.log("mouse move");
            }
        },

        mouseDown: function(){
            this._isMouseDown = true;
            console.log("mouse down");
        },

        draw: function(){

        }
    });
});