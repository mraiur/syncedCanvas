require(['jquery', 'bower/socket.io.js', 'lodash'],
    function($, io){
        var room = location.pathname.substring(1);
        MRAIUR = io = io('http://localhost:3030');

        if( room ) {
            var drawAdapter = Class('Draw', {
                onDraw: function( type, path ){
                    var data = {
                        type: type,
                        path: path,
                        room: room
                    };
                    io.emit('draw', data);
                }
            });

            var canvas = Class('Canvas', {
                drawAdapter: drawAdapter
            });

            io.on('draw', function(data){
                drawAdapter.directDraw(canvas, data.type, data.path);
            });


            io.emit('joinCanvasRoom', {
                roomId: room
            });

            $('#drawingType button').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var drawType = $(this).attr('data-draw-type')
                canvas.drawAdapter.setDrawType( drawType );
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

        // TODO make a better instance storage
        window.app = {
            io: io
        };
});