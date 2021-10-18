dataLayer = [];//<--- del tagManager
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
let umbralX = 75;
let umbralY = 75;
const gestureZone = document.getElementById('tutorial');
//capturar el touchstart
gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
//capturar el touchend
gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

//para el simbolo de la manito
let handleGesture = () => {
   
    if(Math.abs(touchendX - touchstartX) > umbralX){
        if (touchendX < touchstartX) {
            Tutorial.moveSlider('l');//left
        }
        if (touchendX > touchstartX) {
            Tutorial.moveSlider('r');//right
        }
    }
    
    if(Math.abs(touchendY - touchstartY) > umbralY){
        if (touchendY < touchstartY) {
            console.log('Swiped up');//si touchenY es < sube, su es > baja
        }
        if (touchendY > touchstartY) {
           console.log('Swiped down');
        }
    }
    
    if (touchendY === touchstartY) {
       console.log('Tap');//neutro
    }
}

let Front = {
    w:0,
    h:0,
    //esto cambia dinámicamente (width y height cuando ajuste la pantalla
    resizeListener : (w = 1920, h = 1080) => {
        this.w = w;
        this.h = h;
//        console.log(`ancho ${this.w} / alto ${this.h}`);
//        this.w = $(window).width();
//        this.h = $(window).height();
//        document.body.style.height = `${this.h}px`;
        document.getElementById("cuento").style.height = `${this.h}px`;
        /*
        //outerWidth => ancho total incluyendo las barras laterales
        //outerHeight => alto total de la ventana del navegador de la pantalla incluyendo notificaciones
        //innerWidth => ancho interior de la ventana
        //innerHeight => altura interior de la ventana
        var txt = "";
txt += "<p>innerWidth: " + window.innerWidth + "</p>";
txt += "<p>innerHeight: " + window.innerHeight + "</p>";
txt += "<p>outerWidth: " + window.outerWidth + "</p>";
txt += "<p>outerHeight: " + window.outerHeight + "</p>";
        */
        
        var a = 1920,
        b = 1080,
        c = w > h ? w : h,
        d;
        d = c*(b/a);
        
//        let s = h > b ? b / h : h / b;
//        let dif = (w-(a*s))/2;
//        TweenMax.to("#escenario",0.3,{scale:s,transformOrigin:"top left"});
//
//        $('#escenario').css({'left':dif+'px'});
        
        let s =  w / a;
        let dif = (h-(b*s))/2;
        TweenMax.to("#escenario",0.3,{scale:s,transformOrigin:"top left"});

        $('#escenario').css({'top':dif+'px'});
        
//        console.log(h, h*s, b, b*s);
        if(h<b*s){
            ANIM.compensaEscenas(dif);
        } else {
            ANIM.compensaEscenas(0);
        }
//        window.scrollTo(0,0);
    },
    lookFullScreen:(e) => {
//      console.log("CAMBIO", e); 
        let doc = window.document;
        let docEl = doc.documentElement;
         
        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            $('.btn_fullscreen .ir_full').css({'display':"block"});
            $('.btn_fullscreen .volver_full').css({'display':"none"});
            $('.btn_fullscreen').attr('data_tooltip','Ir a Pantalla Completa');
        } else {
            $('.btn_fullscreen .ir_full').css({'display':"none"});
            $('.btn_fullscreen .volver_full').css({'display':"block"});
            $('.btn_fullscreen').attr('data_tooltip','Salir de Pantalla Completa');
        }
    },
    toogleFullScreen:() => {
        let doc = window.document;
        let docEl = doc.documentElement;
        
        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
           
        } else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
              } else if (doc.mozCancelFullScreen) { /* Firefox */
                doc.mozCancelFullScreen();
              } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                doc.webkitExitFullscreen();
              } else if (doc.msExitFullscreen) { /* IE/Edge */
                doc.msExitFullscreen();
              }
            
        }
        
    }
};

let Utils = {
    isMobile: () => {
        let isMobile = false; //initiate as false //regex de validación
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){isMobile = true;} 
        
        return isMobile;
    },
    randomInt:(min=100, max=500) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    hasClass:(div, clase) => {
       
//        let bol = div.className.split(' ').includes(clase);
        let bol =  div.classList.contains(clase);
        return bol;
    }
}

let Player = {
    escena_actual:0,
    parrafo_actual:0,
    audios_parrafo:[],
    audios_fx:[],//efectos de sonido
    conAudio:true,
    onPlayer:true,//reproducir
    setTooltip:(text, div, cual='bajo') => {
        if(!Utils.isMobile()){
            Front.resizeListener(window.innerWidth, window.innerHeight);
            let pos = div.offset();//fuera de juego
            let tt = document.getElementById(`tooltip_${cual}`);
            tt.getElementsByTagName('p')[0].innerHTML = text;
            tt.style.display = 'block';
            let w = tt.offsetWidth - div.width();
//            console.log(pos.top, pos.left, w);
            let x = pos.left - (w *0.5);
            let y = pos.top - 40;
            let triangulito = tt.getElementsByClassName('triangulito')[0];
            let xTriangulito = 0;

//            window.innerWidth
            if(x+tt.offsetWidth > window.innerWidth){
                let xant = x;
                x = window.innerWidth - tt.offsetWidth;
                xTriangulito = (xant-x);
            }
            
            if(cual === 'alto'){
                let img = div.attr('data_miniatura');//establece un atributo
//                  console.log("ALTO", img);
                document.getElementById('image_tooltip').src = img;
            }
            TweenMax.fromTo(tt,0.5,{alpha:0, left:x, top:y+5},{alpha:1,left:x, top:y});
            TweenMax.to(triangulito,0.5,{x:xTriangulito});
            $("#player_container").css({"z-index":"5"});
            $("#subtitulos").css({"z-index":"4"});
        }
    },
    hideToolTip:() => {
//        console.log("ocultando");
        let tt = document.getElementsByClassName('tooltip');
        for(let i = 0; i < tt.length;i++){
            tt[i].style.display = 'none';
        }
        $("#subtitulos").css({"z-index":"5"});
    },
    forceClosePlayer:() => {
        Player.temp = {n:0};
        TweenMax.killTweensOf(Player.temp);
        TweenMax.to(Player.temp, 1, {n:1, onComplete:function(){
            Player.tooglePlayer('close');
        }});  
    },
    tooglePlayer:(accion = 'open') => {
        TweenMax.killTweensOf("#btn_abrir_player");
        TweenMax.killTweensOf("#player");
        TweenMax.killTweensOf("#subtitulos");
        TweenMax.killTweensOf("#marcador_escena");
        //aparezca el reproductor
        if(accion == "open"){
            let w = window.innerWidth;
            let bt = w > 822 ? 100 : 60;
            TweenMax.to("#subtitulos",0.3,{bottom:bt});
            TweenMax.to("#btn_abrir_player",0.1,{bottom:-32});
            TweenMax.to("#player",0.3,{marginTop:0});
            TweenMax.to("#marcador_escena",0.3,{alpha:0});
            if(Utils.isMobile()){
                Player.forceClosePlayer();
            }
        } else {
            //desaparezca el reproductor
            TweenMax.to("#subtitulos",1.3,{bottom:40, delay:1});
            TweenMax.to("#btn_abrir_player",0.3,{bottom:0, delay:1.4});
            TweenMax.to("#player",1.7,{marginTop: 183, delay:1, onStart:function(){
                Player.toogleListadoEscena('close');
                Player.toogleConfigurador('close');
                TweenMax.to("#marcador_escena",0.3,{alpha:1});
            }});
        }
    },
    //este objeto funcion es para que aparezca el select de Nombre_Escena 01 Escena1
    toogleListadoEscena:(accion = 'open') => {
       // console.log(accion);
        TweenMax.killTweensOf("#container_desplegable");
        TweenMax.killTweensOf(Player.temp);
        switch (accion){
            case 'open':
                if($('#desplegable_escenas_container').hasClass('close')){
                    $('#desplegable_escenas_container').removeClass('close').addClass('open');
                }
                if(!$('#title_container').hasClass('open')){
                    $('#title_container').addClass('open');
                }
                break;
            case 'close':
                $("#container_desplegable").css({"z-index":"4"});
                $("#subtitulos").css({"z-index":"5"});
                if($('#desplegable_escenas_container').hasClass('open')){
                    $('#desplegable_escenas_container').removeClass('open').addClass('close');
                }
                if($('#title_container').hasClass('open')){
                    $('#title_container').removeClass('open');
                }
                TweenMax.to("#container_desplegable", 0.1,{height:0,delay:0.6, transformOrigin:"center bottom"});
                if(Utils.isMobile()){
                    Player.forceClosePlayer();
                }
                break;
            case 'toogle':
                
                if($('#desplegable_escenas_container').hasClass('close')){
                    $("#container_desplegable").css({"z-index":"5"});
                    $("#subtitulos").css({"z-index":"4"});
                    $('#desplegable_escenas_container').removeClass('close').addClass('open');
                    if(!$('#title_container').hasClass('open')){
                        $('#title_container').addClass('open');
                    }
                    TweenMax.to("#container_desplegable", 0.1,{height:515, transformOrigin:"center bottom"});
                    if(Utils.isMobile()){
                        Player.forceClosePlayer();
                    }
                } else if($('#desplegable_escenas_container').hasClass('open')){
                    $("#container_desplegable").css({"z-index":"4"});
                    $("#subtitulos").css({"z-index":"5"});
                    $('#desplegable_escenas_container').removeClass('open').addClass('close');
                    if($('#title_container').hasClass('open')){
                        $('#title_container').removeClass('open');
                    }
                    TweenMax.to("#container_desplegable", 0.1,{height:0,delay:0.6, transformOrigin:"center bottom"});
                    
                } 
                break;
        }
    },

    toogleConfigurador:(accion = 'open') => {
        
        switch (accion){
            case 'open':
                if($('#configurador').hasClass('close')){
                    $('#configurador').removeClass('close').addClass('open');
                }
                if($('#container_configurador').hasClass('close')){
                    $('#container_configurador').removeClass('close').addClass('open');
                }
                break;
            case 'close':
                if($('#configurador').hasClass('open')){
                    $('#configurador').removeClass('open').addClass('close');
                }
                if($('#container_configurador').hasClass('open')){
                    $('#container_configurador').removeClass('open').addClass('close');
                }
                break;
            case 'toogle':
                if($('#configurador').hasClass('close')){
                    $('#configurador').removeClass('close').addClass('open');
                } else if($('#configurador').hasClass('open')){
                    $('#configurador').removeClass('open').addClass('close');
                } 
                if($('#container_configurador').hasClass('close')){
                    $('#container_configurador').removeClass('close').addClass('open');
                } else if($('#container_configurador').hasClass('open')){
                    $('#container_configurador').removeClass('open').addClass('close');
                } 
                break;
        }
    },
    //configuración relato y subtitulos
    checkCheck:(nombre, chequeado) => {
        if(!chequeado){
            if(nombre === 'check_subtitulos'){
                $('#check_relato').prop("checked",true);
            } else {
                $('#check_subtitulos').prop("checked",true);
            }
        }
        
        let con_audio = $('#check_relato').is(':checked');
        let con_subtitulos = $('#check_subtitulos').is(':checked');
        
//        console.log(con_subtitulos,con_audio);
        Player.toogleSubtitulos(con_subtitulos);
        Player.toogleAudio(con_audio);
    },
    //Mostrar y coultar los subtitulos
    toogleSubtitulos:(ver) => {
        if(ver){
           $('#subtitulos').show(); 
        }  else {
           $('#subtitulos').hide();  
        }
    },
    //play and pause audio
    toogleAudio:(ver) => {
        Player.conAudio = ver;
        //console.log('AUDIO',Player.conAudio);
        Player.stopAudioParrafo();
    },
    //miniatura imagen 
    creaListadoEscenas:(arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="item_listado_escena" data_escena="${i}" data_nombre="${item.nombre}">
                        <div class="img_cont">
                            <img src="${item.miniatura}" alt="miniatura">
                        </div>
                        <div class="play"></div>
                        <span class="n_escena">${i_st}.</span>
                        <p class="titulo_escena">${item.nombre}</p>
                    </div>`;
        });
        
        return newArr.join("");
    },

    creaPuntosEscenas: (arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="punto" data_escena="${i}" data_nombre="${item.nombre}" data_miniatura="${item.miniatura}" data_tooltip="${i_st} ${item.nombre}">
                        <div class="borde"></div>
                        <div class="centro"></div>
                    </div>`;
        });
        
        return newArr.join("");
    },
    //segunda vista
    setCurrent: (nEscena, nombreEscena) => {
        $(".item_listado_escena").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == nEscena){
              $(this).addClass('current'); 
            } 
        });
        $("#punto_escena_container .punto").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == nEscena){
              $(this).addClass('current'); 
            } 
        });
        
        $("#title_container .nombre_escena").text(nombreEscena); 
        
        let i_st = nEscena > 8 ? (nEscena+1) : `0${(nEscena+1)}`;
        $("#marcador_escena .actual p").text(i_st); 
    },
    
    parrafo_actual:0,
    //siguiente escena
    nextScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual < arrEscenas.length-1){
            let i = Player.escena_actual + 1;
            Player.setScene( i, arrEscenas[i].nombre);
            Player.playSoundParrafo(i,0,true);
        } else {
            //console.log("FIN");
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    //escena anterior
    prevScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual > 0){
            let i = Player.escena_actual - 1;
            Player.setScene( i, arrEscenas[i].nombre);
            Player.playSoundParrafo(i,0,true);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    //siguiente parrafo texto
    nextParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        let arrParrafos = arrEscenas[Player.escena_actual].parrafos;
        Player.desActivaBtnSiguiente();
        Player.resetBotonesInteraccion();
        if(Player.parrafo_actual < arrParrafos.length-1){
//            console.log("NEXT actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual + 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
            let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            ANIM.main_tl.pause();
            ANIM.main_tl.resume(label, false);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    //anterior parrafo texto
    prevParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        let arrParrafos = arrEscenas[Player.escena_actual].parrafos;
        Player.desActivaBtnSiguiente();
        Player.resetBotonesInteraccion();
        if(Player.parrafo_actual > 0){
//            console.log("PREV actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual - 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
             let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            ANIM.main_tl.pause();
            ANIM.main_tl.resume(label, false);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    //configuración de escenas
    setScene:(nEscena, nombreEscena, seteando=false) => {
        Player.stopAudioParrafo();
        Player.resetSubtitulos();
        Player.resetBotonesInteraccion();
        Player.escena_actual = nEscena;
        Player.setCurrent(nEscena, nombreEscena);
        Player.setParrafo(0);
        Player.desActivaBtnSiguiente();
        if(!seteando){
            let label = 'escena_'+nEscena.toString();
            ANIM.main_tl.play(label);
        }
        Player.onPlayer = true;
        /***/
        dataLayer.push(
            {'nombreCuento': JSON_CUENTO.nombre},
            {'nombreEscena': nombreEscena},
            {'event': 'cambio de escena'}
        );
        /***/
    },
    //configuración de parrafo => texto
    setParrafo:(nParrafo = 0) => {
        Player.parrafo_actual = nParrafo;
    },
    //música del texto hablado
    playSoundParrafo: (i, j, muted = false) => {
        Player.escena_actual = i;
        Player.setParrafo(j);
        Player.stopAudioParrafo();
        if(Player.conAudio){
            try{
               let sound = createjs.Sound.play(`audio_${i}_${j}`);
                if(muted){
                    sound.volume = 0;
                } else {
                    sound.volume = 1;
                }
            }  catch (err){
                console.log(err);
            }
        }
    },
    //Pause texto hablado
    stopAudioParrafo:() => {
      createjs.Sound.stop();  
        ///// CREAR UN "DISCRIMINADOR" DE AUDIOS DE TEXTO Y DE FX
    },
    //play efecto de sonidos
    playSoundFX: (cual, loop = false) => {
        if(loop){
            createjs.Sound.play(cual, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        } else {
           createjs.Sound.play(cual); 
        }
    },
    //poner subtitulos
    putSubtitulos: (nEscena, nParrafo) => {
        let st = JSON_CUENTO.escenas[nEscena].parrafos[nParrafo].texto;
        console.log("SUBS", nEscena, nParrafo, st);
        $("#subtitulos p").html(st);
    },
    //ocultar subtitulos
    resetSubtitulos:() => {
        $("#subtitulos p").html('');
    },
    //ocultar botones de interaccion
    resetBotonesInteraccion:() => {
        $('.btn_interact').css({'display':'none'});
    },
    //icono de Pause
    tooglePlayPauseIco:() => {
         if(ANIM.main_tl.paused()){
            $('#player_btn_play_pause .play').css({'display':"block"});
            $('#player_btn_play_pause .pause').css({'display':"none"});
        } else {
            $('#player_btn_play_pause .play').css({'display':"none"});
            $('#player_btn_play_pause .pause').css({'display':"block"});
         } 
    },
    //Pausar escenas
    tooglePlayPause:() => {
        if(ANIM.main_tl.paused()){
            let label = ANIM.main_tl.getLabelBefore();
            let esFin = label.indexOf('fin');
            if(esFin === -1){
                ANIM.main_tl.play(label);
            } else {
                Player.nextScene();
            }
        } else {
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
        }
        Player.tooglePlayPauseIco();
    },
    //segunda vista
    loadAudioImages:(arr, arrfx, arrImg) => {
        let tmp = arr.map((item, i) => {
             return  {
                        src:item.audio, data: {
                            audioSprite: item.parrafos.map((obj,j) => {
                                let duration = (obj.tiempo[1] - obj.tiempo[0])*1000;
                                return {id:`audio_${i}_${j}`, startTime:(obj.tiempo[0]*1000), duration:duration}
                            })
                    }
            };
        });
        
//        console.log(arrImg);
        
        Player.audios_parrafo = tmp.map((item, i) => {
             return createjs.Sound.registerSound(item);
        });
            
        Player.audios_fx = arrfx.map((item) => {
            return createjs.Sound.registerSound(item.url, item.nombre);
        }); 
        
        let arrCompleto = Player.audios_parrafo.concat(Player.audios_fx,arrImg);
        
        let queue = new createjs.LoadQueue(true, null, true);

        queue.loadManifest(arrCompleto);

        queue.on("fileload", function(event){
//            console.log("fileload", event);
        });

        queue.on("progress", function(event) {
//            console.log("progress " + event.progress);
            $('#barra_preload .barra').css({'width':Math.trunc(event.progress*100)+'%'});
            $('#cargador .indicador_porcentaje p').html(Math.trunc(event.progress*100)+'%');
        });

        queue.on("fileprogress", function(event) {
//            console.log("file progress " + event.progress, event);
        });

        queue.on("error", function(event) {
            console.log("file error");
        });

        queue.on("complete", function(event) {
            $('#cargador').css({'display':'none'});
            $('#btn_init').css({'display':'flex'});
        });

        queue.load();

    },
    //botón siguiente ese circulo con un right arrow
    desActivaBtnSiguiente:() => {
        $('#btn_adelante').css({'display':'none'});
    },
    activaBtnSiguiente:() => {
        $('#btn_adelante').css({'display':'flex'});
        TweenMax.fromTo('#btn_adelante',1, {alpha:0}, {alpha:1});
    },
    //Validaciones de que??
    onBlur:() => {
        if(Player.onPlayer){
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
            Player.tooglePlayPauseIco();
        }
    },
    //ocultar otros botones 
    hideOthersBut:(id) => {
        $('.escena').css({'display': 'none'});
        $('#'+id).css({'display': 'block'});
    }
};

//parte visual del player
let App = {
    init:function(){
        let w, h;
//        if(Utils.isMobile()){
//            w = screen.availWidth;
//            h = screen.availHeight;
//        } else {
            w = window.innerWidth;
            h = window.innerHeight;
//        }
        TweenMax.set('body',{backgroundColor:'#000000'});
        Front.resizeListener(w, h);
        this.start();
        Player.hideToolTip();
        ANIM.init();
        if (
              document.fullscreenEnabled || /* Standard syntax */
              document.webkitFullscreenEnabled || /* Chrome, Safari and Opera syntax */
              document.mozFullScreenEnabled ||/* Firefox syntax */
              document.msFullscreenEnabled/* IE/Edge syntax */
        ) {
            //nada
        } else {
            $('.player_btn.btn_fullscreen').hide();
            if(Utils.isMobile()){
                $('#marcador_escena').css({'top':'-10px'});
                $('#player_btn_config').css({'margin-left':'auto'});
            }
        }
    },
    start:function(){
        this.createPlayerParts();
        this.setButtons();
    },
    createPlayerParts:function(){
//        console.log(JSON_CUENTO);
        let nombreCuento = JSON_CUENTO.nombre;
        let arrEscenas = JSON_CUENTO.escenas;
        let nCurrentEscena = JSON_CUENTO.n_escena;
        let arrFxSonido = JSON_CUENTO.fx_sonido;
        let arrImagenes = JSON_CUENTO.imagenes;
        
        $("#desplegable_escenas_container h2").text(nombreCuento);
        $("#desplegable_escenas_container h3").text(arrEscenas.length + ' escenas');
        
        let stListado = Player.creaListadoEscenas(arrEscenas);
        $("#listado_escenas .masked").html(stListado);
        
        let ptListado = Player.creaPuntosEscenas(arrEscenas);
        $("#punto_escena_container").html(ptListado);
        
        let i_st = arrEscenas.length > 9 ? (arrEscenas.length) : `0${(arrEscenas.length)}`;
        $("#marcador_escena .total p").text(i_st); 
        
        $("#title_container .nombre_cuento").text(nombreCuento);
        
        Player.setScene(nCurrentEscena, arrEscenas[nCurrentEscena].nombre, true); //<--- true porque no quiero que suene el audio altiro
        
        Player.loadAudioImages(arrEscenas,arrFxSonido,arrImagenes);
        window.addEventListener("blur", Player.onBlur, false);

    },
    setButtons:function(){
        /*Relativos al player*/
        $("#btn_abrir_player").click(function(){
//            console.log();
            Player.tooglePlayer("open");
        });
        
        $("#player").hover(
            function(){
                Player.tooglePlayer("open");
            },
            function(){
                Player.tooglePlayer("close");
            }
        );
        
        ///***///
     
        
        const elPlayer = document.getElementById('player');

        elPlayer.addEventListener('touchstart', function(event) {
            Player.tooglePlayer("open");
        }, false);

        elPlayer.addEventListener('touchend', function(event) {
             Player.tooglePlayer("close");
        }, false); 
        
        
        ///***///
        
        $(".player_btn").hover(
            function(){
                Player.setTooltip($(this).attr("data_tooltip"), $(this), "bajo");
            },
            function(){
                Player.hideToolTip();
            }
        );
        
        
        $('#player_btn_play_pause').click(function(){
            Player.tooglePlayPause();
        });
        
        $('#player_btn_escena_ant').click(function(){
            Player.prevScene();
        });
        
        $('#player_btn_escena_sig').click(function(){
            Player.nextScene();
        });
        
        $('#player_btn_parrafo_ant').click(function(){
            Player.prevParrafo();
        });
        
        $('#player_btn_parrafo_sig').click(function(){
            Player.nextParrafo();
        });
        
        $('.btn_fullscreen').click(function(){
            Front.toogleFullScreen();
        });
        
        $('#player_btn_config').click(function(){
            Player.toogleConfigurador('toogle');
        });
        
        $('.btn_ocultar').click(function(){
            Player.toogleListadoEscena('close');
        });
        
        $('#title_container').click(function(){
            Player.toogleListadoEscena('toogle');
        });
        
        //cheks del configurador
        $('.checks').click(function(){
            Player.checkCheck($(this).attr('id'), $(this).is(':checked'));
        });
        
        //para setear current al listado
        $(".item_listado_escena").click(function(){
            let i = $(this).attr('data_escena');
            let nombre = $(this).attr('data_nombre');
            Player.setScene(parseInt(i), nombre);
        });
        
        $("#punto_escena_container .punto").hover(
            function(){
                Player.setTooltip($(this).attr("data_tooltip"), $(this), "alto");
            },
            function(){
                Player.hideToolTip();
            }
        ).click(function(){
            let i = $(this).attr('data_escena');
            let nombre = $(this).attr('data_nombre');
            Player.setScene(parseInt(i), nombre);
        });
        
        // el botón que sale al terminar la escena
        $('#btn_adelante .interior').click(function(){
            let arrEscenas = JSON_CUENTO.escenas;
            if(Player.escena_actual < arrEscenas.length-1){
                Player.nextScene();
            } else {
               // console.log("FIN");
                Player.onPlayer = false;
                Creditos.final();
            }
           
        });
    }
}; 
//Portada y contraportada del cuento, mas sus datos  Descripción bonita y bien redactada
let Creditos = {
    init:() => {
        $('.btn_principal').click(function(e){
           e.preventDefault(); 
           e.stopPropagation();
        });
        
        Creditos.creaPortadayContra();
    },
    creaPortadayContra:() => {
        let arrCreditos = JSON_CUENTO.creditos;
        $(".creditos .titulo h1").html(JSON_CUENTO.nombre);
        $(".creditos .titulo h2").html(JSON_CUENTO.tipo);
        $(".creditos .descripcion").html(JSON_CUENTO.descripcion);
        $(".creditos table tbody").html(Creditos.getTable(arrCreditos));
        
        $("#preload_tutorial_modal .title .img_cont img").attr('src',JSON_CUENTO.escenas[0].miniatura);
        $("#preload_tutorial_modal .title h2").html(JSON_CUENTO.nombre);
        $("#preload_tutorial_modal .title p").html(JSON_CUENTO.tipo);
    },
    getTable:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;
        });
        return newArr.join("");  
    },
    leerEscuchar:() => {
        $('#portada_cuento').css({'display': 'none'});
        Tutorial.init();
    },
    leer:() => {
        $('#check_relato').prop("checked",false);
        Player.toogleAudio(false);
        $('#portada_cuento').css({'display': 'none'});
        Tutorial.init(); 
    },
    final:() => {
        TweenMax.set('body',{backgroundColor:'#E9EDF5'});
        $('#final_cuento').css({'display':'block'});
        $('#cuento').css({'display':'none'});
        $('#escenario').css({'display':'none'});
        $('#btn_adelante').css({'display':'none'});
        $('body').css({'overflow':'auto'});
        Player.stopAudioParrafo();
    }
};
//las demás vistas, + la vista de escena + la contraportada
let Tutorial = {
    slideActual:0,
    init:() => {
        App.init();
        
        $('#preload_tutorial_modal').css({'display': 'flex'});
        
        $('.btn_flecha_tutorial.izq').click(function(){
            Tutorial.moveSlider("l");
        });
        $('.btn_flecha_tutorial.der').click(function(){
            Tutorial.moveSlider("r");
        });
        
        $("#punto_tuto_container .punto").click(function(){
            Tutorial.gotoSlider($(this).attr('data_escena'));
        });
        
        $('#btn_init').click(function(){
            $('#preload_tutorial_modal').css({'display': 'none'});
            $('#cuento').css({'display':'block'});
            $('#escenario').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
            Player.playSoundParrafo(0,0,true);
            ANIM.main_tl.play();
        });
        $('#btn_volver_leer').click(function(){
            TweenMax.set('body',{backgroundColor:'#000000'});
            $('#final_cuento').css({'display': 'none'});
            $('#cuento').css({'display':'block'});
            $('#escenario').css({'display':'block'});
            $('body').css({'overflow':'hidden'});
            
            let arrEscenas = JSON_CUENTO.escenas;
            Player.setCurrent(0, arrEscenas[0].nombre);
            ANIM.main_tl.play(0);
            
        });
        
    },
    gotoSlider:(i) => {
        if(parseInt(i) != Tutorial.slideActual){
            let old = Tutorial.slideActual;
            let nuevo = parseInt(i);
            let w = 800;
            
            //console.log(old, nuevo+1);
            
            let slideactual = `#tut0${(old+1)}`;
            let slidenueva  = `#tut0${(nuevo+1)}`;
            
            TweenMax.set(slideactual,{marginLeft:0});
            TweenMax.set(slidenueva,{marginLeft:w*-1});
            TweenMax.to(slideactual,1,{marginLeft:w});  
            TweenMax.to(slidenueva,1,{marginLeft:0, ease:Back.easeOut.config(1)});
            
            Tutorial.slideActual = nuevo;
            Tutorial.setCurrent(Tutorial.slideActual);
        }
    },
    moveSlider:(dir = "l") => {
        let cant = $('#tutorial .tut').length;
//        console.log(cant);
        let w = 800;
        
        let actual = `#tut0${(Tutorial.slideActual+1)}`;
        if( dir === "r"){
            if(Tutorial.slideActual < cant-1){
                Tutorial.slideActual++;
            } else {
                Tutorial.slideActual = 0;
            }
        } else {
            if(Tutorial.slideActual === 0){
                Tutorial.slideActual = cant-1;
            } else {
                Tutorial.slideActual--;
            }
        }
        
        let nuevo = `#tut0${(Tutorial.slideActual+1)}`;
        if(dir == "l"){
            TweenMax.set(actual,{marginLeft:0});
            TweenMax.set(nuevo,{marginLeft:w});
            TweenMax.to(actual,1,{marginLeft:(w*-1)});           
        } else {
            TweenMax.set(actual,{marginLeft:0});
            TweenMax.set(nuevo,{marginLeft:(w*-1)});
            TweenMax.to(actual,1,{marginLeft:w});
        }
        TweenMax.to(nuevo,1,{marginLeft:0, ease:Back.easeOut.config(1)});
        Tutorial.setCurrent(Tutorial.slideActual);
    },
    setCurrent: (i) => {
        $("#punto_tuto_container .punto").each(function(){
            if($(this).hasClass('current')){
                $(this).removeClass('current');
            }
            if($(this).attr('data_escena') == i){
              $(this).addClass('current'); 
            } 
        });
    }
};
//portada + vista de configuraciones + vista de la escena
(function () { 
    window.onresize = function(e){
        let w, h;
//        if(Utils.isMobile()){
//            w = screen.availWidth;
//            h = screen.availHeight;
//        } else {
            w = window.innerWidth;
            h = window.innerHeight;
//        }
        Front.resizeListener(w, h);
    };

    let w, h;
//    if(Utils.isMobile()){
//        w = screen.availWidth;
//        h = screen.availHeight;
//    } else {
        w = window.innerWidth;
        h = window.innerHeight;
//    }
    Front.resizeListener(w, h);
//    Front.resizeListener(window.outerWidth, window.outerHeight);
    
    /* Standard syntax */
    document.addEventListener("fullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* Firefox */
    document.addEventListener("mozfullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* Chrome, Safari and Opera */
    document.addEventListener("webkitfullscreenchange", (e) => {Front.lookFullScreen(e);});

    /* IE / Edge */
    document.addEventListener("msfullscreenchange", (e) => {Front.lookFullScreen(e);});
     
    if (typeof JSON_CUENTO === 'undefined' || JSON_CUENTO === null) {
        setTimeout(function(){Creditos.init();}, 1000);
    } else {
        Creditos.init();
    }
})();

