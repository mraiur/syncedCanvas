require(['Define'], function() {
    Define('Draw', {
        drawType: "none",

        _isMouseDown: false,

        _drawTools: {},

        _currentTool: null,

        setDrawType: function( drawType ){
            this._currentTool = this._getTool(drawType);
        },

        _getTool: function(drawType){
            var drawClass = 'Draw.' + _.capitalize(drawType);
            if( typeof this._drawTools[drawClass] == "undefined" && ClassManager.map[ drawClass ] ){
                this._drawTools[drawClass] = Class(drawClass);
            }
            return this._drawTools[drawClass];
        },


        // TODO remove duplicated callback functions
        mouseUp: function(coords, e){
            this._isMouseDown = false;
            if( this._currentTool ) {
                this._currentTool.mouseUp.apply(this._currentTool, arguments);
            }
        },

        mouseMove: function(){
            if(this._isMouseDown) {
                if( this._currentTool ) {
                    this._currentTool.mouseMove.apply(this._currentTool, arguments);
                }
            }
        },

        mouseDown: function(){
            this._isMouseDown = true;
            if( this._currentTool ) {
                this._currentTool.mouseDown.apply(this._currentTool, arguments);
            }
        },

        mouseLeave: function(){
            this._isMouseDown = false;
            if( this._currentTool ) {
                this._currentTool.mouseLeave.apply(this._currentTool, arguments);
            }
        },

        // All sub type drawing must call this function.
        draw: function(type, coords){
            this.onDraw(type, coords);
        },

        // Involked by the sockets
        directDraw: function(canvas, type, path){
            var tool = this._getTool(type);
            tool._clean();
            tool.setPath(canvas, path);
            tool._clean();
        }
    });
});