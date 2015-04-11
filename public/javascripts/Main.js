requirejs.config({
    baseUrl: "/bower/",
    paths: {
        App: "/javascripts/App",
        Canvas: '/javascripts/Canvas',
        Draw: '/javascripts/Draw',
        DrawCore: '/javascripts/DrawCore',
        Define: '/javascripts/Define',
        Class: '/javascripts/Class',
        DrawLine: '/javascripts/draw/Line'
    }
});
require(['lodash', 'jquery', 'bower/socket.io.js', 'Define', 'Class'], function(){
    require(['Canvas', 'Canvas', 'Draw', 'DrawCore', 'DrawLine', 'App'], function(){

    });
});