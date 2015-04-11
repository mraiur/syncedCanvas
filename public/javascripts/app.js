requirejs(['jquery', 'bower/socket.io.js'],
    function($, io){
        var room = location.pathname.substring(1);
        MRAIUR = io = io('http://localhost:3030');

        if( room ) {
            io.emit('joinCanvasRoom', {
                roomId: room
            });

            $('#drawingType button').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                console.log("======", $(this).attr('data-draw-type'));
                // TODO: insert whatever you want to do with $(this) here
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
});