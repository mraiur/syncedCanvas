require(['Define', 'DrawCore'], function() {
    Define('Draw.Square', {
        drawType: 'line',

        _points: {
            start: null,
            end: null
        },

        _clean: function(){
            this._points = {
                start: null,
                end: null
            };
        },

        mouseDown: function(coords, canvas, e){
            this._points.start = coords;
        },

        mouseUp: function(coords, canvas, e){
            this._points.end = coords;
            this.draw( canvas );
            this._clean();
        },

        draw: function( canvas ){
            var ctx = canvas.context;

            ctx.beginPath();
            ctx.rect(this._points.start.x, this._points.start.y, this._points.end.x, this._points.end.y);
            ctx.stroke();
        },

        mouseLeave: function(){
            this._clean();
        }

    });
});