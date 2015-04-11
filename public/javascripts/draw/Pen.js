require(['Define', 'DrawCore'], function() {
    Define('Draw.Pen', {
        drawType: 'pen',

        _points: [],
        _lastDrawnPoint: 0,

        _clean: function(){
            this._lastDrawnPoint = 0;
            this._points = [];
        },

        setPath: function( canvas, path) {
            this._points = path;

            var ctx = canvas.context;
            ctx.beginPath();
            ctx.moveTo(this._points[0].x, this._points[0].y);
            for(var i = 1, c = this._points.length; i < c; i++ ){
                ctx.lineTo(this._points[i].x, this._points[i].y)
            }
            ctx.stroke();
        },

        mouseDown: function(coords, canvas, e){
            this._points.push( coords );
        },

        mouseMove: function( coords, canvas, e){
            this._points.push(coords);
            this.draw( canvas );
        },

        mouseUp: function(coords, canvas, e){
            this.draw( canvas );
            this.parent().draw(this.drawType, this._points);
            this._clean();
        },

        draw: function( canvas ){
            var ctx = canvas.context;

            if( this._points.length > 0 && this._points.length-1 > this._lastDrawnPoint+1) {
                ctx.beginPath();
                ctx.moveTo(this._points[this._lastDrawnPoint].x, this._points[this._lastDrawnPoint].y);
                ctx.lineTo(this._points[this._lastDrawnPoint+1].x, this._points[this._lastDrawnPoint+1].y)
                ctx.stroke();

                this._lastDrawnPoint++;
            }
        },

        mouseLeave: function(){
            this._clean();
        }

    });
});