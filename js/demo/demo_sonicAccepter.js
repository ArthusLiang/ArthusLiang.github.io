window.onload=function(){
    var sonic_panel = document.getElementById('sonic_panel'),
        btnStart = document.getElementById('btnStart');
    var band = new Jsonic.Band();
    band.initDefaultChannel();

    band.onMsg=function(data){
        sonic_panel.innerHTML='Get the string: '+data;
    };
    band.onStartReceive=function(){
        sonic_panel.innerHTML='receiving the sonic data ...... ';
    };

    btnStart.onclick=function(){
        navigator.webkitGetUserMedia({
            audio:{optional:[{echoCancellation:false}]}
        },function(stream){
            _input = band.AudioContext.createMediaStreamSource(stream);
            band.listenSource(_input);
            band.scanEnvironment();
            band.watch(document.getElementById('myCanvas'),890,920);//896
            /*
            var myCanvas = document.getElementById('myCanvas'),
            painter = new Jsonic.Painter();

            painter.attach(myCanvas,band.Analyser,{'BF':{func:'rectangle'}});
            painter.start();
            */

        },function(e){});
        btnStart.style.display='none';
    };
}