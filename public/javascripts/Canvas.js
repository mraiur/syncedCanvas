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
                this.el.mouseup( this.drawAdapter.mouseUp );
                this.el.mousemove( this.drawAdapter.mouseMove );
                this.el.mousedown( this.drawAdapter.mouseDown );
                //this.drawAdapter.;
            }
        }
    });
});