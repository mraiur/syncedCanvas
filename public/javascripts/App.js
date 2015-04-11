require(['jquery', 'bower/socket.io.js', 'lodash'],
    function($, io){
        var room = location.pathname.substring(1);
        MRAIUR = io = io('http://localhost:3030');

        if( room ) {
            io.emit('joinCanvasRoom', {
                roomId: room
            });

            $('#drawingType button').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var drawType = $(this).attr('data-draw-type')
                window.app.canvas.drawAdapter.setDrawType( drawType );
            });

        } else {
            io.emit('getAllCanvasRooms');
            io.on('listCanvasRooms', function( rooms ){
                console.log("get rooms ", arguments);
                $("#list").empty();
                for( var i in rooms ) {
                    $("#list").append('<a href="/'+i+'" class="list-group-item">'+i+'</a>');
                }

            });
        }
        //var canvas = Class('Canvas');
        // TODO make a better instance storage
        window.app = {
            io: io,
            canvas: Class('Canvas', {
                drawAdapter: Class('Draw')
            })
        };
});