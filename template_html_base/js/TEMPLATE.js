//configuración del cuento
//OBS: NECESITAR UN EDITOR DE AUDIO FAVORITO AUDITION DE ADOBE
let JSON_CUENTO = {
    //DATOS DE LA PORTADA    ---INICIO
    nombre:"Nombre",
    tipo:"Cuento de hadas", //puede ser de mas de un tipo, se separa por coma
    descripcion:"Descripción bonita y bien redactada", //descripcion del cuento
    creditos:[
                ["Adaptación:","Nadie"],
                ["Ilustraciones:","Nadie"],
                ["Narración:","Nadie"],
                ["Arreglos musicales:","Nadie"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    //DATOS DE LA PORTADA     ---FIN

    ID:0,//no sirve para nada solo para word press
    //acá va las imagenes usadas en el cuento 1920W * 1080H 
    imagenes:[
        "img/FOLDER/esc_0_fondo.jpg",
    ],
    //efectos de sonido 
    fx_sonido:[
        {nombre:"magia",url:"audio/FOLDER/fx/magia.mp3"},//nombre:  nombreSonidoUsoInterno, url: urlAudio.mp3
    ], 
    n_escena:0,//por dault es 0, no se puede cambiar 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/FOLDER/mini_0.jpg",//viene a ser el "Avatar"
            audio:"audio/FOLDER/escena_01.mp3",//audio hablado, solo para la escena => audio sprite x escena
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0]// en realidad es primer objeto tiempo: [0,0,0] => tiempo de inicio del audio hablado, tiempo final del audio hablado, efecto de sonido al comienzo osea antes de que se ejecute el audio hablado con/sin animaciones en el escenario
                },
                {
                    texto: '',
                    tiempo:[0,0]//en este caso se tiene tiempo iniical, tiempo final. Tiene un tercer paramétro en 0 pero no va. Su espacio es de 0.5 segundos (por seguridad) desde la frase anterior para comenzar a sonar. 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/FOLDER/mini_1.jpg",
            audio:"audio/FOLDER/escena_02.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/FOLDER/mini_2.jpg",
            audio:"audio/FOLDER/escena_03.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/FOLDER/mini_3.jpg",
            audio:"audio/FOLDER/escena_04.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/FOLDER/mini_4.jpg",
            audio:"audio/FOLDER/escena_05.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/FOLDER/mini_5.jpg",
            audio:"audio/FOLDER/escena_06.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/FOLDER/mini_6.jpg",
            audio:"audio/FOLDER/escena_07.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/FOLDER/mini_7.jpg",
            audio:"audio/FOLDER/escena_08.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/FOLDER/mini_8.jpg",
            audio:"audio/FOLDER/escena_09.mp3",
            parrafos:
            [
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                {
                    texto: '',
                    tiempo:[0,0] 
                },
                
            ]
        },
        
    ]    
};
//CREA Y GESTIONA TODAS LAS ANIMACIONES DEL CUENTO, TIENE FUNCIONES Y UN main_tl => timeline principal
let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        //Ocurra antes todo lo que viene
        
        /*IMPORTANTE NO TOCAR*/ //Feauture => categoría
        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume) ==> efecto de sonido
        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia (defecto) que tenía el Player original (no detenía las interacciones al llegar al final del cuento)
        ANIM.sobreescribePrevParrafo(); // <--- Soluciona una pifia que tenía el Player original (mostraba los botones de interacción al hacer atrás)
        ANIM.sobreescribeOnBlur(); // <-- dejan de sonar los wait sounds
        //Preguntar que hace esto sobreescribeOnBlur()
    },
    sobreescribeAudioFX:() => {
        if(!Player.arr_SOUNDS_FX){
            Player.arr_SOUNDS_FX = [];   
        }
        Player.playSoundFX = (cual, loop = false) => {
            let sound;
            if(loop){
                sound = createjs.Sound.play(cual, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
            } else {
                sound = createjs.Sound.play(cual); 
            }
            Player.arr_SOUNDS_FX.push({sound:sound, id : cual});
        } 
        
        Player.cambiaVolume = (cual = 'musica_', vol = 0.1) => {
            let todasLasVeces = Player.arr_SOUNDS_FX.filter(id => id.id === cual);
            try{   
                let miAudio = todasLasVeces[todasLasVeces.length-1].sound;
                miAudio.volume = vol;
            } catch(err){
                console.log(err.message);
            }
        }
    },
    sobreescribeCreditosFinal:()=>{
        Creditos.final = () => {
            TweenMax.set('body',{backgroundColor:'#E9EDF5'});
            $('#final_cuento').css({'display':'block'});
            $('#cuento').css({'display':'none'});
            $('#escenario').css({'display':'none'});
            $('#btn_adelante').css({'display':'none'});
            $('body').css({'overflow':'auto'});
            Player.stopAudioParrafo();
            ANIM.pausaInteractividad(); //<--- esto es lo que agregué
        }  
    },
    sobreescribePrevParrafo:() => {
        Player.prevParrafo = () => {
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
                ANIM.main_tl.resume(label, true);
            }
            ANIM.pausaInteractividad();
            Player.tooglePlayPauseIco();
        }
    },
    sobreescribeOnBlur:() => {
        window.removeEventListener("blur", Player.onBlur);
        Player.onBlur = () => {
            if(Player.onPlayer){
                ANIM.main_tl.pause();
                Player.stopAudioParrafo();
                Player.resetSubtitulos();
                Player.tooglePlayPauseIco();
                ANIM.pauseWaitSound();
            }
        }
        window.addEventListener("blur", Player.onBlur, false);
    },
    //aumento o disminución gradual del audio
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = new TimelineMax({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            },waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].addCallback(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                },waitFor+fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
     pauseWaitSound:() => {
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    init:() => {
        ANIM.creapartes();

        ANIM.main_tl = new TimelineMax({});//se crea la Timeline principal
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"}) // <-- al comenzar envío a todas las escenas a left -1920
        ;
        
        let _arr = JSON_CUENTO.escenas; // defino las escenas con el archivo de configuración
        let tiempo = 0.01; // tiempo inicial muy bajito, para que no se solape nada con el evento "onStart"
        let posicion = 0; // posición inicial de tiempo del timeline, sirve para definir cuando van los labels y callbacks
        let delayAcumulado = 0; // valor de retraso inicial del tiempo
        let espacioEntreEscenas = 2; // segundos para que no se solapen las escenas una sobre la otra
        
        _arr.map((item, i) => { // el método map de array hace un recorrido por cada item del array
            
            let i_st = i > 9 ? i.toString() : `0${i.toString()}`;
            ANIM.main_tl.add( TweenMax.set(`#escena_${i_st}`, {left:0}) , tiempo); // <-- pongo la escena en 0 left en el tiempo que le corresponde
            
            if(i > 0){
                let i_stanterior = i > 9 ? (i-1).toString() : `0${(i-1).toString()}`;
                ANIM.main_tl.add( TweenMax.set(`#escena_${i_stanterior}`, {left:-1920}) , tiempo-0.01); // <-- pongo la escena anterior en -1920 left 
            }
            //escena comienza en el tiempo
            ANIM.main_tl.addLabel(`escena_${i}`, tiempo); // le digo que la escena comienza en este tiempo 
            
             item.parrafos.map((parrafo, j) => {
                let delay = parrafo.tiempo[2] ? parrafo.tiempo[2] : 0; // veo si hay que retrasar el tiempo de aparición del párrafo o no
                delayAcumulado += delay; // asigno la cantidad de tiempo de retraso de párrafo acumulado
                let duracion = parrafo.tiempo[1]-parrafo.tiempo[0]; // cuanto dura el párrafo en particular
                let desfase = (posicion+delayAcumulado); // momento exacto en que el párrafo debe aparecer
//                console.log(posicion, delay, `${i}_${j}`, desfase, delayAcumulado, tiempo);
                 
                ANIM.main_tl.addLabel(`${i}_${j}`, desfase); // acá le pongo el label correspondiente al párrafo el formato es "numeroEscena_numeroParrafo" quedan así: 0_0, 0_1, 0_2, 0_3, 1_0, 1_1, 1_2, etc
                posicion += duracion; // reasigno posicion del siguiente con la duración del actual
            });
            tiempo = posicion+delayAcumulado; // le digo al tiempo que se sume todo lo anterior
            ANIM.main_tl.addLabel(`fin_escena_${i}`, tiempo); // así le asigno el final de la escena || quedan así: "fin_escena_0", "fin_escena_1", etc
            tiempo += espacioEntreEscenas; // dejo un par de segundos para que las escenas no se monten una arriba de otra
            delayAcumulado += espacioEntreEscenas; // y obviamnete se lo tengo que sumar al delay acumulado
            
        });
        
        /*CREADOR DE callbacks para visualización de subtítulos */
        _arr.map((item, i) => {
             item.parrafos.map((parrafo, j) => {
                 ANIM.main_tl.addCallback(function(){
                    Player.playSoundParrafo(i, j);
                    Player.putSubtitulos(i, j);
                },`${i}_${j}`);
            });    
        });
        /***/
         
        // Acá van ejemplos de animaciones y labels adicionales de la animación principal || Desde acá hacia abajo deberás editar lo tuyo
        /*
        ANIM.main_tl.addLabel('0_0_audio','escena_0+=0.01'); // <-- Agregar labels adicionales, tomando como referencia otra label y sumándole o restándole la cantidad de tiempo en que quiero que se active
        ANIM.main_tl.addLabel('princesas_ventana','1_4+=0.3'); // <-- otro ejemplo de lo mismo los labels pueden ser cualquier cosa
        ANIM.main_tl.add( TweenMax.to('#escena_00', 20, {scale:2}),'escena_0+=13'); // <-- le pongo una animación al timeline con la misma técnica, es decir uso una label existente y le sumo o resto el tiempo en que quiero que se active a partir de ésta.
        */
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0"); // esto quiere decir que cuando main_tl llegue a la label "escena_0" va a llamar a Player.hideOthersBut('escena_00');
     
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente(); // <-- no vá siempre, depende del cuento (a veces sólo se activa cuando terminas la interactividad)
            ANIM.main_tl.pause(); // <-- va siempre, pausa el timeline al llegar al label específicado, en este caso "fin_escena_0"
            ANIM.interactividad(0); // <-- Activa la interactividad. No va siempre, depende del cuento. A veces va más de uno y/o con parámetros adicionales 
            Player.tooglePlayPauseIco(); // <-- va siempre, intercambia el ícono de play/pause en el reproductor
            Player.resetSubtitulos(); // <-- va siempre, evita que los subtítulos se queden pegados al finalizar la escena
            // puedes poner cualquier cosa en realidad. A veces hay que poner sonidos apenas termina la escena, entonces pones la línea siguiente:
            // Player.playSoundFX('magia'); // tiene que existir en el archivo de configuración en el array fx_sonido, accedes a él por el nombre que le pusiste, este caso 'magia'
        },"fin_escena_0"); /* esto quiere decir que cuando main_tl llegue a la label "fin_escena_0" va a llamar a 
                                                                                                Player.activaBtnSiguiente();
                                                                                                ANIM.main_tl.pause();
                                                                                                ANIM.interactividad(0);
                                                                                                Player.tooglePlayPauseIco();
                                                                                                Player.resetSubtitulos();
                                                                                                */
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
//            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2,undefined,'btn_cejas');
            ANIM.interactividad(2,undefined,'btn_gatos');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
        },"escena_3");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
//            ANIM.interactividad(5,undefined,'btn_gato');
            ANIM.interactividad(5,undefined,'btn_silla');
            ANIM.interactividad(5,undefined,'btn_techo');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(6, undefined, 'btn_flor');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(7, Player.activaBtnSiguiente);
            ANIM.interactividad(7,undefined,'btn_drag');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_08');
        },"escena_8");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log('FINAL');
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_1 = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
//                Player.playSoundFX('duendes');
            })
            .to('#escena_01 .duende',3,{y:0, x:0},'+=1')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_1, // agrego la interacción al array
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => { // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        
//        TweenMax.killTweensOf("#escena_00 .stuff");
        TweenMax.set('#escena_01',{scale:0.9});
        
        ANIM.pauseWaitSound();
        
        $('.indicador_interactividad').css({'display':'none'});
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:1});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
              /**/
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        if(ANIM.anim_interact_1.currentLabel() === 'final'){
                            ANIM.anim_interact_1.play(0);
                        } else {
                            ANIM.anim_interact_1.play();
                        }
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('btn_cejas')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_cejas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_cejas.play(0);
                    });
                 }
                 if(btn.hasClass('btn_gatos')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_duendes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_duendes.play(0);
                    });
                 }
                 break;
             case 3:
                 
                 break;
            case 4:
                 
                 break;
             case 5:
                
                 break;
            case 6:
                
                 break;
             case 7:
                 
                 break;
             case 8:
                    
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};