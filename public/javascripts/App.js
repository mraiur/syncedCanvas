require(['jquery', 'bower/socket.io.js', 'lodash'],
    function($, io){
        var room = location.pathname.substring(1);
        MRAIUR = io = io('http://localhost:3030');

        if( room ) {
            io.emit('joinCanvasRoom', {
                roomId: room
            });

            $('#drawingType button').click(function() {
                // TODO check if there is a data-draw-type attribute and there is a implemented draw class.
                $(this).addClass('active').siblings().removeClass('active');
                window.app.drawType = $(this).attr('data-draw-type');
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
            }),
            drawType: $('#drawingType button.active').attr('data-draw-type')
        };
});