let JSON_CUENTO = {
    nombre:"Nombre",
    tipo:"Cuento de hadas",
    descripcion:"Descripción bonita y bien redactada",
    creditos:[
                ["Adaptación:","Nadie"],
                ["Ilustraciones:","Nadie"],
                ["Narración:","Nadie"],
                ["Arreglos musicales:","Nadie"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/FOLDER/esc_0_fondo.jpg",
    ], 
    fx_sonido:[
        {nombre:"magia",url:"audio/FOLDER/fx/magia.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/FOLDER/mini_0.jpg",
            audio:"audio/FOLDER/escena_01.mp3",
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

let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
       
        
        /*IMPORTANTE NO TOCAR*/
        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume)
        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia que tenía el Plyer original (no detenía las interacciones al llegar al final del cuento)
        ANIM.sobreescribePrevParrafo(); // <--- Soluciona una pifia que tenía el Player original (mostraba los botones de interacción al hacer atrás)
        ANIM.sobreescribeOnBlur(); // <-- dejan de sonar los wait sounds
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

        ANIM.main_tl = new TimelineMax({});
        
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
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
//                Player.playSoundFX('duendes');
            })
            .to('#escena_01 .duende2.duendeB',3,{y:0, x:0},'+=1')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_1,
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => {
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        
//        TweenMax.killTweensOf("#escena_00 .drag_tolltip");
        TweenMax.set('#escena_01',{scale:0.9});
        
        ANIM.pauseWaitSound();
        ANIM.desactivaDragAndDrops();
        
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
              if(btn.hasClass('btn_drag')){
                    if(Utils.isMobile()){
                        const elbtn1 = document.getElementById('btn_drag_herramientas');

                        elbtn1.addEventListener('touchstart', function(event) {
                            TweenMax.killTweensOf("#escena_00 .drag_tolltip");
                            ANIM.displayTooltipInformation('herramientas');
                        }, false);

                        elbtn1.addEventListener('touchend', function(event) {
                            TweenMax.to('#escena_00 .drag_tolltip',1,{alpha:0, delay:0.5, onComplete:function(){
                                elbtn1.style.display = 'none';
                                ANIM.hideTooltipInformation('herramientas');
                            }});
                            ANIM.activaDragAndDrops('herramientas');
                        }, false); 
                    } else {
                        btn
                            .hover(function(){
                                ANIM.displayTooltipInformation('herramientas');
                        },
                                   function(){
                                ANIM.hideTooltipInformation('herramientas');
                        })
                            .click(function(){
                            $(this).css({"display":"none"});
                            ANIM.activaDragAndDrops('herramientas');
                        });
                    }
                }
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
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});

                            ANIM.anim_interact_3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            if(ANIM.anim_interact_3.currentLabel() === 'final'){
                                ANIM.anim_interact_3.play(0);
                            } else {
                                ANIM.anim_interact_3.play();
                            }

                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        $('#escena_04 .btn_interact.musica').click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_4B.play(0);
                            ANIM.anim_interact_4B.eventCallback("onComplete", muestralo, [$(this), undefined]); 
                        });
                        ANIM.anim_interact_4.eventCallback("onComplete", muestralo, [$('#escena_04 .btn_interact.musica'), cb]); 
                        ANIM.anim_interact_4.play(0);
                    });
                 }
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_caso.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_caso.play(0);
                    });
                 }
                 if(btn.hasClass('btn_techo')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_techo.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_techo.play(0);
                    });
                 }
                 if(btn.hasClass('btn_silla')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_silla.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_silla.play(0);
                    });
                 }
                 break;
            case 6:
                if(btn.hasClass('btn_gato')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_gato.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_gato.play(0);
                    });
                }
                if(btn.hasClass('btn_flor')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_flor.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_flor.play(0);
                    });
                }
                 break;
             case 7:
                 if(btn.hasClass('btn_drag')){
                    if(Utils.isMobile()){
                        const elbtn2 = document.getElementById('btn_drag_ropas');

                        elbtn2.addEventListener('touchstart', function(event) {
                            TweenMax.killTweensOf("#escena_07 .drag_tolltip");
                            ANIM.displayTooltipInformation('ropas');
                        }, false);

                        elbtn2.addEventListener('touchend', function(event) {
                            TweenMax.to('#escena_07 .drag_tolltip',1,{alpha:0, delay:0.5, onComplete:function(){
                                elbtn2.style.display = 'none';
                                ANIM.hideTooltipInformation('ropas');
                            }});
                            ANIM.activaDragAndDrops('ropas');
                        }, false); 
                    } else {
                        btn
                            .hover(function(){
                                ANIM.displayTooltipInformation('ropas');
                        },
                                   function(){
                                ANIM.hideTooltipInformation('ropas');
                        })
                            .click(function(){
                            $(this).css({"display":"none"});
                            ANIM.activaDragAndDrops('ropas');
                        });
                    }
                }
                 break;
             case 8:
                    btn.click(function(){
                        $(this).css({"display":"none"});  
                        ANIM.anim_interact_8.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8.play(0);
                    });
                 break;
             
        }
    },
    displayTooltipInformation:(cual) => {
        let tt;
        switch (cual){
            case 'herramientas':
                 tt = $('#escena_00 .drag_tolltip');
                 break;
            case 'ropas':
                 tt = $('#escena_07 .drag_tolltip');
                 break;
        }
//        console.log('wot',cual);
        tt.css({'display':'grid'});
        if(tt.hasClass('vertical')){
            TweenMax.fromTo(tt,0.3,{alpha:0, y:-30},{alpha:1, y:0});
        } else {
            TweenMax.fromTo(tt,0.3,{alpha:0, x:-30},{alpha:1, x:0});
        }
    },
    hideTooltipInformation:(cual) => {
        let tt;
        switch (cual){
            case 'herramientas':
                 tt = $('#escena_00 .drag_tolltip');
                 break;
            case 'ropas':
                 tt = $('#escena_07 .drag_tolltip');
                 break;
        }
        tt.css({'display':'none'});
    },
    dragsAndDrops:{},
    desactivaDragAndDrops:() => {
        DND.arrDragabbles.map((item) => {
                            item.drag.map((d)=>{
//                                console.log('QUE ES D',d);
                                    let pos = ANIM.bringMePositions(item.name, d.target.className);
//                                    console.log('DESACTIVANDO',item.name, d.target.className, pos);
                                    TweenMax.set(d.target,{top:pos.top,left:pos.left,rotation:0});
                                    d.disable();
                                });
                            }
                         );
    },
    bringMePositions:(cual, clases) => {
        let pos;
        DND.arrDragabbles.map((item) => {
            if(item.name === cual){
//                    console.log(item.posOrig, clases);
                    item.posOrig.map((d)=>{
                                    if(d.clases === clases){
//                                        console.log('D', d);
                                        
                                        pos = d;
//                                        return pos;
                                    }
                                });
                            }
                
            }
        );
        return pos;
    },
    activaDragAndDrops:(cual) => {
        if(ANIM.dragsAndDrops[cual]){ // aca si existe lo activo
            DND.arrDragabbles.map((item) => {
                if(item.name === cual){
                        item.drag.map((d)=>{
                                d.enable();
                            });
                        }

                    }
                );
            return;
        }
        ANIM.dragsAndDrops[cual] = true; // y si no existe lo creo en el código siguiente
        
        let drags,drops,grabs,posOrig,onStart,onHit,onNoHit,onDrag;
        
        switch (cual){
            case 'herramientas':
                drags = $('#escena_00 .herramienta');
                drops =  [$('#escena_00 .hit_zone')];
                posOrig = [];
                drags.each(function(i){
                    posOrig.push({clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left'))});
                });
                drops[0].each(function(i){
                    let o = {clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};
                    posOrig.push(o);
                    ANIM.creaIndicadorHitZone('#escena_00', o);
                });
                //console.log(posOrig);
                onStart = (dragged) => {
//                    Player.activaBtnSiguiente();
//                    console.log('comienza', dragged, typeof(dragged), dragged.className, typeof(dragged.className));
                    let zi = parseInt(dragged.style.zIndex)-1;
                    console.log('onstart',zi);
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'herramienta1')){
                        TweenMax.to(dragged,0.2,{rotation:70});
                    }
                    if(Utils.hasClass(dragged, 'herramienta2')){
                        TweenMax.to(dragged,0.2,{rotation:-110});
                    }
                    if(Utils.hasClass(dragged, 'herramienta3')){
                        TweenMax.to(dragged,0.2,{rotation:-50});
                    }
                    if(Utils.hasClass(dragged, 'herramienta4')){
                        TweenMax.to(dragged,0.2,{rotation:-90});
                    }
//                    $('#escena_00 .cubridor').css({'display':'none'});
                    $('#escena_00 .indicador_interactividad').css({'display':'block'});
                    TweenMax.fromTo('#escena_00 .indicador_interactividad',0.4,{alpha:0},{alpha:1});
                }
                   //.herramienta4',1,{top:780, left:1075, rotation:-90});
                onHit = (dragged,hitted) => {
                    let lFin, tInicio, tFin;
                    let zi = parseInt(dragged.style.zIndex)+1;
                    console.log('onHit',zi);
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'herramienta1')){
                        lFin = 1085;
                        tInicio = 690;
                        tFin = 790;
                    }
                    if(Utils.hasClass(dragged, 'herramienta2')){
                        lFin = 1025;
                        tInicio = 700;
                        tFin = 790;
                    }
                    if(Utils.hasClass(dragged, 'herramienta3')){
                        lFin = 1075;
                        tInicio = 680;
                        tFin = 780;
                    }
                    if(Utils.hasClass(dragged, 'herramienta4')){
                        lFin = 1075;
                        tInicio = 680;
                        tFin = 780;
                    }

                    TweenMax.to(dragged, 0.5,{top:tInicio,left:lFin});
                    TweenMax.to(dragged,0.5,{top:tFin, onStart:function(){
                        Player.playSoundFX('magia');
                    }, onComplete:function(){
//                         TweenMax.set(dragged, {left:2000});
                    }, delay:0.5});

                    TweenMax.to('#escena_00 .indicador_interactividad',0.4,{alpha:0});
                }
                onNoHit = (dragged,hitted) => {
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':99999});
                    let pos = ANIM.bringMePositions('herramientas',dragged.className);
//                    console.log('POS',pos);
                    TweenMax.to(dragged,0.7,{left:pos.left, top:pos.top, rotation:0}); 
                    TweenMax.to('#escena_00 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onDrag = (dragged,otro) => {
//                    console.log(dragged,otro);
                }
                DND.crea(cual,drags,drops,posOrig,onStart,onDrag,onHit,onNoHit);
                
                ANIM.desactivaDragAndDrops(); ///<---- Lo desactivo y lo activo altiro porque se me van para arriba al crearlo ????!!!
                ANIM.activaDragAndDrops('herramientas');
                break;
            case 'ropas':
                drags = $('#escena_07 .ropa');
                drops =  $('#escena_07 .hit_zone');
                posOrig = [];
                drags.each(function(i){
                    posOrig.push({clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()});
                });
                drops.each(function(i){
                    let o = {clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};
                    posOrig.push(o);
                    ANIM.creaIndicadorHitZone('#escena_07', o);
                });
                //console.log(posOrig);
                
                onStart = (dragged) => {
                     let zi = parseInt(dragged.style.zIndex)-1;
                    console.log('onstart',zi);
                    $('#escenario #escena_07 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'ropa1')){
                        TweenMax.to(dragged,0.2,{rotation:-45});
                    }
                    if(Utils.hasClass(dragged, 'ropa2')){
                        TweenMax.to(dragged,0.2,{rotation:0});
                    }
                    if(Utils.hasClass(dragged, 'ropa3')){
                        TweenMax.to(dragged,0.2,{rotation:-45});
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        TweenMax.to(dragged,0.2,{rotation:-90});
                    }
                    $('#escena_07 .indicador_interactividad').css({'display':'block'});
                    TweenMax.fromTo('#escena_07 .indicador_interactividad',0.4,{alpha:0},{alpha:1});
                }
                
                onHit = (dragged,hitted) => {
                    let lFin, tInicio, tFin,rFin;
                    let zi = parseInt(dragged.style.zIndex)+1;
//                    console.log('onHit',zi);
                    $('#escena_07 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'ropa1')){
                        lFin = 855;
                        tInicio = 700;
                        tFin = 840;
                        rFin = -45;
                    }
                    if(Utils.hasClass(dragged, 'ropa2')){
                        lFin = 875;
                        tInicio = 700;
                        tFin = 860;
                        rFin = 0;
                    }
                    if(Utils.hasClass(dragged, 'ropa3')){
                        lFin = 855;
                        tInicio = 700;
                        tFin = 840;
                        rFin = -45;
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        lFin = 865;
                        tInicio = 700;
                        tFin = 880;
                        rFin = -90;
                    }

                    TweenMax.to(dragged, 0.5,{top:tInicio,left:lFin});
                    TweenMax.to(dragged,0.5,{top:tFin, rotation:rFin, onStart:function(){
                        Player.playSoundFX('magia');
//                        $('#escenario #escena_00 .cubridor').css({'display':'block'});
                    }, onComplete:function(){
//                         TweenMax.set(dragged, {left:2000});
                    }, delay:0.5});

                    TweenMax.to('#escena_07 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onNoHit = (dragged,hitted) => {
                    $('#escena_07 .cubridor').css({'display':'block', 'z-index':99999});
                    let pos = ANIM.bringMePositions('ropas',dragged.className);
                    let rFin = 0;
                    if(Utils.hasClass(dragged, 'ropa1') || Utils.hasClass(dragged, 'ropa3')){
                        rFin = 25;
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        rFin = -7;
                    }

                    TweenMax.to(dragged,0.3,{left:pos.left, top:pos.top, rotation:rFin}); 
                    TweenMax.to('#escena_07 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onDrag = (dragged,otro) => {
//                    console.log(dragged,otro);
                }
                DND.crea(cual,drags,drops,posOrig,onStart,onDrag,onHit,onNoHit);
                
                ANIM.desactivaDragAndDrops(); ///<---- Lo desactivo y lo activo altiro porque se me van para arriba al crearlo ????!!!
                ANIM.activaDragAndDrops('ropas');
                TweenMax.set('#escena_07 .ropa1', {rotation:25});
                TweenMax.set('#escena_07 .ropa3', {rotation:25});
                TweenMax.set('#escena_07 .ropa4', {rotation:-7});
                break;
            
        }
    },
    creaIndicadorHitZone:(cualEscena, o) => {
        let dif = 0.5;
        let d = o.w > o.h ? o.w : o.h;
        let dd = d+d*dif;
        //console.log(o.top,(dd-d)*0.5);
        let top = o.top - (dd-o.h)*0.5;
        let left = o.left - (dd-o.w)*0.5;
        let st = `<div class="indicador_interactividad" style="width:${dd}px;height:${dd}px;top:${top}px;left:${left}px;display:none;"></div>`;
        
        $(cualEscena).append(st);
    },
    checkColisions: (o, divs) => {
        divs.each(function(i){
                let p = { t:parseInt($(this).css('top')), l:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};

                if(p.l > o.l && p.l + p.w < o.l + o.w){
                    if(p.t > o.t && p.t + p.h < o.t +o.h){
                        let pos = {l:o.l + (o.w*0.5) - p.w*0.5, t: o.t + (o.h*0.5) - p.h*0.5};
                        TweenMax.set($(this),{top:pos.t, left:pos.l});
                    }
                }
        });
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