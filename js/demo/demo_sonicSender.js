(function(){

    var N = function(rollcall,duration,freqIndex,hasDot,isPart){
            return new Jsonic.Melody.Note(rollcall,duration,freqIndex,hasDot,isPart);
        },
        player = new Jsonic.Melody.Track(),
        TillTheEndOfTheWorld = new Jsonic.Melody.MusicScore('E','major','4/4');

    TillTheEndOfTheWorld.w(N(0,1/4,0,true),N(1,1/8,1),N(7,1/8),N(6,1/8),N(5,1/8),N(6,1/8));
    TillTheEndOfTheWorld.w(N(5,1/8),N(5,1/8),N(5),N(0),N(3,1/8),N(5,1/8));
    TillTheEndOfTheWorld.w(N(6,1/8,0,true),N(6,1/16),N(6,1/8),N(6,1/8),N(5),N(6,1/8),N(3,1/8));
    TillTheEndOfTheWorld.w(N(3),N(0,1/2,0,true));
    TillTheEndOfTheWorld.w(N(0,1/4,0,true),N(1,1/8,1),N(7,1/8,0,true),N(2,1/16,1),N(2,1/16,1),N(6,1/8),N(7,1/16));
    TillTheEndOfTheWorld.w(N(7,1/8),N(6,1/16),N(5,1/16),N(5),N(0,1/8),N(5,1/8),N(5,1/16),N(5,1/8),N(6,1/16));
    TillTheEndOfTheWorld.w(N(6,1/8),N(6),N(6,1/8),N(7,1/8,0,true),N(1,1/16,1),N(1,1/8,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(2,1/2,1),N(6),N(7));
    TillTheEndOfTheWorld.w(N(1,1/8,1,true),N(7,1/16),N(7,1/8),N(7,1/8),N(1,1/8,1),N(7,1/8),N(7,1/8),N(1,1/8,1));
    TillTheEndOfTheWorld.w(N(1,1/2,1),N(6),N(7));
    TillTheEndOfTheWorld.w(N(1,1/8,1),N(7,1/8),N(7,1/16),N(1,1/8,1,true),N(1,1/8,1),N(2,1/8,1),N(1,1/8,1),N(1,1/8,1));
    TillTheEndOfTheWorld.w(N(1,1/2,1),N(6),N(7));
    TillTheEndOfTheWorld.w(N(1,1/8,1),N(7,1/8),N(7,1/8),N(1,1/8,1),N(0,1/8),N(2,1/4,1),N(3,1/8,1));
    TillTheEndOfTheWorld.w(N(4,1/8,1,true),N(3,1/16,1),N(2,1/8,1),N(2,1/8,1),N(1,1/8,1),N(1,1/8,1),N(3,1/8,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(2,1,1));
    TillTheEndOfTheWorld.w(N(0),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1));
    TillTheEndOfTheWorld.w(N(4,1/8,1),N(3,1/8,1),N(2,1/8,1),N(3,1/8,1),N(3,1/2,1));
    TillTheEndOfTheWorld.w(N(3,1/4,1),N(5),N(1,1/4,1),N(6,1/4,1));
    TillTheEndOfTheWorld.w(N(6,1/8,1),N(5,1/8,1),N(0,1/8),N(5,1/8,1),N(5,1/8,1),N(3,1/8,1),N(3,1/8,1),N(5,1/8,1));
    TillTheEndOfTheWorld.w(N(5,1/2,1),N(3,1/8,1),N(4,1/4,1),N(5,1/8,1));
    TillTheEndOfTheWorld.w(N(5,1/8,1),N(4,1/4,1),N(4,1/8,1),N(4,1/8,1),N(3,1/8,1),N(3,1/8,1),N(3,1/16,1),N(2,1/16,1));
    TillTheEndOfTheWorld.w(N(2,1/4,1),N(0,1/8),N(6,1/8),N(1,1/4,1),N(5,1/4,1));
    TillTheEndOfTheWorld.w(N(5,1/8,1),N(4,1/4,1),N(4,1/8,1),N(4,1/8,1),N(3,1/8,1),N(3,1/8,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(2,1/4,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1),N(4,1/8,1));
    TillTheEndOfTheWorld.w(N(4,1/8,1),N(3,1/8,1),N(2,1/8,1),N(3,1/8,1),N(3,1/2,1));
    TillTheEndOfTheWorld.w(N(3,1/4,1),N(5),N(1,1/4,1),N(6,1/4,1));
    TillTheEndOfTheWorld.w(N(6,1/8,1),N(5,1/8,1),N(0,1/8),N(5,1/8,1),N(5,1/8,1),N(3,1/8,1),N(3,1/8,1),N(5,1/8,1));
    TillTheEndOfTheWorld.w(N(5,1/2,1),N(3,1/8,1),N(4,1/4,1),N(5,1/8,1));
    TillTheEndOfTheWorld.w(N(5,1/8,1),N(4,1/4,1),N(4,1/8,1),N(0,1/8),N(6,1/8),N(1,1/8,1),N(5,1/8,1));
    TillTheEndOfTheWorld.w(N(5,1/8,1),N(5,1/8,1),N(4,1/8,1),N(3,1/8,1),N(3,1/8,1),N(4,1/4,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(2,1,1));
    TillTheEndOfTheWorld.w(N(0,1/4),N(2,1/8,1),N(3,1/8,1),N(4,1/8,1),N(3,1/4,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(2,1/8,1),N(1,1/4,1),N(1,1/8,1),N(1,1/2,1));
    TillTheEndOfTheWorld.w(N(1,1/4,1),N(0,1/8),N(2,1/16,1),N(3,1/16,1),N(4,1/8,1),N(3,1/4,1),N(2,1/8,1));
    TillTheEndOfTheWorld.w(N(7,1/8),N(1,1/8,1),N(1,1/2,1,true));
    TillTheEndOfTheWorld.w(N(1,1/2,1),N(0,1/2));
    TillTheEndOfTheWorld.compile();

    window.onload=function(){
        var myCanvas = document.getElementById('myCanvas'),
            txtArea= document.getElementById('txtArea'),
            btnStart = document.getElementById('btnStart'),
            pSonicStatus=document.getElementById('sonicStatus'),
            painter = new Jsonic.Painter(),
            band = new Jsonic.Band();

        band.initDefaultChannel();

        var progess=function(last){
            var _start = new Date(),
                _ref=function(){
                    var _rate= (new Date()-_start)/last>>0;
                };
            requestAnimationFrame(_ref);
        };

        btnStart.onclick=function(){
            var _val=band.send('Jsonic',function(){
                btnStart.style.display='inline-block';
                pSonicStatus.style.display='none';
                //player.stop();
            });
            //sending
            if(_val){
                btnStart.style.display='none';
                pSonicStatus.style.display='';
                pSonicStatus.innerHTML='It will take '+_val.last+' seconds to transfer the data. Musis will stop when it has finished.';
                //  player.play(TillTheEndOfTheWorld,90);
            }
        };

    };

})();