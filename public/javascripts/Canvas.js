require(['Define'], function(){
    Define('Canvas', {
        init: function(){
            this.el = $("#canvas");

            if( this.el.getContext ) {
                this.context = this.el.getContext('2d');
            }
            this.initEvents();
        },

        initEvents: function(){
            if(this.drawAdapter) {
                this.el.mouseup( $.proxy( this._mouseEvent, this, {
                    name: 'mouseUp'
                }));
                this.el.mousemove( $.proxy( this._mouseEvent, this, {
                    name: 'mouseMove'
                }));
                this.el.mousedown( $.proxy( this._mouseEvent, this, {
                   name: 'mouseDown'
                }));
                this.el.mouseleave( $.proxy( this._mouseEvent, this, {
                    name: 'mouseLeave'
                }));
            }
        },

        _mouseCoords: function(evt) {
            var rect = document.getElementById('canvas').getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        },

        _mouseEvent: function(cfg, e){
            var coords = this._mouseCoords(e);
            this.drawAdapter[cfg.name](coords, this, e);
        }
    });
});