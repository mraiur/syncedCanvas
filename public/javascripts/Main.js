requirejs.config({
    baseUrl: "/bower/",
    paths: {
        App: "/javascripts/App",
        Canvas: '/javascripts/Canvas',
        Draw: '/javascripts/Draw',
        DrawCore: '/javascripts/DrawCore',
        Define: '/javascripts/Define',
        Class: '/javascripts/Class',
        DrawLine: '/javascripts/draw/Line',
        DrawSquare: '/javascripts/draw/Square'
    }
});
require(['lodash', 'jquery', 'bower/socket.io.js', 'Define', 'Class'], function(){
    require(['Canvas', 'Canvas', 'Draw', 'DrawCore', 'DrawLine', 'DrawSquare', 'App'], function(){

    });
});