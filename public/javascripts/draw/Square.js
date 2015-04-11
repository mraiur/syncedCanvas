require(['Define', 'DrawCore'], function() {
    Define('Draw.Square', {
        drawType: 'square',

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

        setPath: function( canvas, path ) {
            this._points = path;
            this.draw(canvas);
        },

        mouseDown: function(coords, canvas, e){
            this._points.start = coords;
        },

        mouseUp: function(coords, canvas, e){
            this._points.end = coords;
            this.draw( canvas );
            this.parent().draw(this.drawType, this._points);
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