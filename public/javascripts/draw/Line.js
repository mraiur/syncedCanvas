require(['Define', 'DrawCore'], function() {
    Define('Draw.Line', {
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

            console.log(this._points);
        },

        mouseLeave: function(){
            this._clean();
        }

    });
});