(function(){

    var FreqTest = function(){

    };
    FreqTest.prototype={
        attach:function(){

        },
        set:function(){
            
        }
    };

    window.onload=function(){
        var myCanvas = document.getElementById('myCanvas'),
            painter = new Jsonic.Painter();

        navigator.webkitGetUserMedia({
            audio:{optional:[{echoCancellation:false}]}
        },function(stream){

            var ctx = new AudioContext(),
                _input = ctx.createMediaStreamSource(stream),
                AnalyserNode = ctx.createAnalyser();

            _input.connect(AnalyserNode);

            painter.attach(myCanvas,AnalyserNode,{'BF':{func:'rectangle',XNum:128,xGap:2}});
            painter.start();

        },function(e){});


    };

})();