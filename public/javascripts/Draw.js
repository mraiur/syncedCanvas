require(['Define'], function() {
    Define('Draw', {
        drawType: "none",

        _isMouseDown: false,

        _drawTools: {},

        _currentTool: null,

        setDrawType: function( drawType ){
            var drawClass = 'Draw.' + _.capitalize(drawType);
            console.log('drawClass', drawClass);
            if( typeof this._drawTools[drawClass] == "undefined" && ClassManager.map[ drawClass ] ){
                this._currentTool = Class(drawClass);
                this._drawTools[drawClass] = this._currentTool;
            } else if ( typeof ClassManager.map[ drawClass ] != 'undefined' ) {

            } else {
                console.log(" no drawing");
            }
        },

        mouseUp: function(coords, e){
            this._isMouseDown = false;
            console.log("mouse up");

            if( this._currentTool ) {
                this._currentTool.mouseUp.apply(this._currentTool, arguments);
            }
        },

        mouseMove: function(){
            if(this._isMouseDown) {
                console.log("mouse move");

                if( this._currentTool ) {
                    this._currentTool.mouseMove.apply(this._currentTool, arguments);
                }
            }
        },

        mouseDown: function(){
            this._isMouseDown = true;
            console.log("mouse down");

            if( this._currentTool ) {
                this._currentTool.mouseDown.apply(this._currentTool, arguments);
            }
        },

        mouseLeave: function(){
            this._isMouseDown = false;
            console.log('mouse leave');

            if( this._currentTool ) {
                this._currentTool.mouseLeave.apply(this._currentTool, arguments);
            }
        }
    });
});