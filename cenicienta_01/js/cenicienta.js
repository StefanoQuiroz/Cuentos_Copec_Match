//archivo de configuración
let JSON_CUENTO = {
    nombre:"Cenicienta",
    tipo:"Cuento de hadas",
    descripcion:"Adaptación libre basada en la leyenda popular francesa y escrita por Charles Perrault en 1637. Cenicienta es una joven que, tras la muerte de su padre, pasa sus días sirviendo a su madrastra y dos hermanastras en cada uno de sus caprichos. Un día un mensajero real anuncia que el rey realizará un baile para elegir a la prometida del príncipe. Cenicienta se hace ilusiones al escuchar la noticia, pero su madrastra hará todo lo posible para impedir que Cenicienta vaya al baile. Acompaña a Cenicienta en este viaje lleno de sueños, aventuras y magia.",
    creditos:[
                ["Adaptación:","Fiorenza Sartori Del Campo"],
                ["Ilustraciones:","Copec"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Copec y Entrelíneas"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/cenicienta/esc_0_fondo.jpg",
        "img/cenicienta/esc_1_fondo.jpg",
        "img/cenicienta/esc_2_fondo.jpg",
        "img/cenicienta/esc_3_fondo.jpg",
        "img/cenicienta/esc_4_fondo.jpg",
        "img/cenicienta/esc_5_fondo.jpg",
        "img/cenicienta/esc_6_fondo.jpg",
        "img/cenicienta/esc_7_fondo.jpg",
        "img/cenicienta/esc_8_fondo.jpg",
    
    ], 
    fx_sonido:[
        {nombre:"campanadas_media_noche", url:"audio/cenicienta/fx/campanadas_de_media_noche.mp3"},
        {nombre:"cancion_baile", url:"audio/cenicienta/fx/cancion_de_baile.mp3" },
        {nombre:"hombre_pensativo", url:"audio/cenicienta/fx/hombre_pensativo.mp3" },
        {nombre: "madrastra_pensando", url: "audio/cenicienta/fx/madrastra_pensando.mp3" },
        {nombre: "magic_wand", url: "audio/cenicienta/fx/magic_wanda.mp3" },
        {nombre: "mujer_asombrada", url: "audio/cenicienta/fx/mujer_asombrada.mp3" },
        {nombre: "musica_de_cuento", url: "audio/cenicienta/fx/musica_de_cuento.mp3" },
        {nombre: "no_de_madrastra", url: "audio/cenicienta/fx/no_de_madrastra.mp3" },
        {nombre: "pajaros_aleteando", url: "audio/cenicienta/fx/pajaros_aleteando.mp3" },
        {nombre: "pasos_en_la_escalera", url: "audio/cenicienta/fx/pasos_en_la_escaleras.mp3" },
        {nombre: "relincho_de_caballo", url: "audio/cenicienta/fx/relincho_de_caballo.mp3" },
        {nombre: "respiracion_agitada", url: "audio/cenicienta/fx/respiracion_agitada.mp3" },
        {nombre: "risa_malvada", url: "audio/cenicienta/fx/risa_malvada.mp3" },
        {nombre: "suspiro_de_mujer", url: "audio/cenicienta/fx/suspiro_de_mujer.mp3" },
        {nombre: "zapatilla_brillante", url: "audio/cenicienta/fx/zapatilla_brillante.mp3" },
        {nombre: "zapato_apretado", url: "audio/cenicienta/fx/zapato_apretado.mp3" }       
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/cenicienta/mini_0.jpg",
            audio:"audio/cenicienta/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "Había una vez una joven que vivía con su madrastra y sus dos hermanastras.",
                    tiempo:[0,5.4,12] 
                },
                {
                    texto: "Ellas envidiaban su belleza y luego de la muerte de sus padre,<br>la obligaron a realizar todas las labores de la casa.",
                    tiempo:[5.8,14.5,0.5] 
                },
                {
                    texto: "Como los vestidos de la joven estaban siempre cubiertos de ceniza, la llamaban Cenicienta.",
                    tiempo:[15.0,22.2,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/cenicienta/mini_1.jpg",
            audio:"audio/cenicienta/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "Un día el rey invitó a todas las jóvenes del reino a una gran fiesta<br>para que su hijo escogiera a su futura esposa. ",
                    tiempo:[0,8.5,0.5] 
                },
                {
                    texto: "El príncipe era encantador y apuesto,<br> y casi todas las jóvenes del reino aspiraban a casarse con él.",
                    tiempo:[8.8,17.6,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/cenicienta/mini_2.jpg",
            audio:"audio/cenicienta/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "La madrastra buscó los vestidos más hermosos y las joyas más elegantes para que sus hijas fueran al baile",
                    tiempo:[0,7.2,0.5] 
                },
                {
                    texto: " Al ver que Cenicienta también se preparaba le dijo:",
                    tiempo:[7.7,11.8,0.5] 
                },
                {
                    texto: "Lo siento, no puedes ir. No tienes qué ponerte y no puedes ir con ese sucio vestido que llevas puesto.",
                    tiempo:[12.3,19.6,0.5] 
                },
                {
                    texto: "Vuelve a la cocina.",
                    tiempo:[20.1,21.5,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/cenicienta/mini_3.jpg",
            audio:"audio/cenicienta/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "Sartén en mano, el chef Sergio rescata el panqueque de su impecable vuelta por los aires,<br>al tiempo que revuelve vigorosamente la salsa de chocolate.",
                    tiempo:[0,10.7,0.5] 
                },
                {
                    texto: "Los ayudantes de cocina siguen sus rápidas instrucciones:",
                    tiempo:[11.1,15.4,0.4] 
                },
                {
                    texto: "¡amasar, cortar, hornear!<br>¡Atención, que se queman las galletas!",
                    tiempo:[15.7,21.2,0.6] 
                },
                
                {
                    texto: "De pronto, Sergio recuerda que sus primos Santiago y Laura tienen tantas ganas de cocinar…",
                    tiempo:[21.7,29,0.6] 
                },
                
                
                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/cenicienta/mini_4.jpg",
            audio:"audio/cenicienta/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Sergio Ratón, renombrado artista, trabaja con lápices,<br>pinceles, papel y pintura.",
                    tiempo:[0,8.4,5] 
                },
                {
                    texto: "Tres chasquidos de la tijera y una colorida guirnalda roja y verde se despliega entre sus dedos.",
                    tiempo:[8.9,16.2,0.5] 
                },
                {
                    texto: "Estrellas, ángeles y otras figuras navideñas cuelgan del techo, las puertas y lámparas.",
                    tiempo:[16.6,24.3,0.6] 
                },
                {
                    texto: "Pero las ideas que trajo Margarita - piensa Sergio - son fantásticas…",
                    tiempo:[24.8,29.8,0.6] 
                },
                
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/cenicienta/mini_5.jpg",
            audio:"audio/cenicienta/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "“Me alegra tanto que estés aquí este año, mi pequeñín.”<br>La abuela lo envuelve con su suave voz mientras le acaricia la cabeza.",
                    tiempo:[0,10.4,0.6] 
                },
                {
                    texto: "Te voy a contar un pequeño secreto:<br>para los invitados, esta fiesta comienza a las ocho.",
                    tiempo:[10.9,17.9,0.5] 
                },
                {
                    texto: "Pero para los que la preparamos, la celebración comienza mucho antes.",
                    tiempo:[18.3,23.9,0.6]    
                },
                {
                    texto: "La clave es disfrutar este momento.",
                    tiempo:[24.4,28.0,0.5]    
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/cenicienta/mini_6.jpg",
            audio:"audio/cenicienta/escena_07.mp3",
            parrafos:
            [
                {
                    texto: "Disfrutar<br>Sergio cierra los ojos buscando la respuesta.",
                    tiempo:[0,6.4,0.6] 
                },
                {
                    texto: "¡Eso es!<br>Con los ojos chinitos de felicidad, encuentra en la lista de la abuela la tarea perfecta.",
                    tiempo:[7.2,14.9,0.5] 
                },
                {
                    texto: "Abre apresuradamente el plumón<br>y escribe con letras grandes y desiguales su nombre en la cartulina.",
                    tiempo:[15.4,22.2,0.7] 
                },
                {
                    texto: "Luego se pierde corriendo en el interior de la casa.",
                    tiempo:[22.8,26.7,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/cenicienta/mini_7.jpg",
            audio:"audio/cenicienta/escena_08.mp3",
            parrafos:
            [
                {
                    texto: "¡Con ustedes nuestro invitado especial, el gran cantante Sergio!<br>- anuncia la abuela y todos aplauden.",
                    tiempo:[0,10.0,0.7] 
                },
                {
                    texto: "Sergio canta a todo pulmón y llena el espacio de cada<br>rincón de la casa con su micrófono inalámbrico.",
                    tiempo:[10.6,20.0,0.7] 
                },
                {
                    texto: "Las horas pasan volando para todos entre los coros de una<br>canción, un villancico, un cumpleaños feliz, y otras de su repertorio.",
                    tiempo:[20.6,31.8,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/cenicienta/mini_8.jpg",
            audio:"audio/cenicienta/escena_09.mp3",
            parrafos:
            [
                {
                    texto: "A las ocho en punto, la casa está lista, adornada de colores<br>y aromas que escapan desde la cocina.",
                    tiempo:[0,7.4,0.7] 
                },
                {
                    texto: "La abuela agradece a cada uno a uno de los nietos por su trabajo.",
                    tiempo:[8.0,12.35,0.5] 
                },
                {
                    texto: "Cuando le toca el turno a Sergio…<br>los aplausos son tan fuertes y grandes como su sonrisa.",
                    tiempo:[12.8,19.6,0.5] 
                },
                {
                    texto: "Entonces asoma la cabeza del Tata,<br>elegantísimo vestido con su mejor traje.",
                    tiempo:[20.0,26.5,0.5] 
                },
                {
                    texto: "¿Me perdí algo?",
                    tiempo:[27.0,28.5,0.3] 
                },
                
            ]
        },
           
        
    ]    
};
//CREA Y GESTIONA TODAS LAS ANIMACIONES DEL CUENTO, TIENE FUNCIONES Y UN main_tl => timeline principal
//timeline, es secuencia de de elementos => animaciones, funciones y timelines en un periodo de tiempo.
let ANIM = {
    /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl: undefined,
    creapartes: () => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
       
        
    },
    //reducir volumen
    fadeVolume: (cual, desde = 1, hasta = 0.2, t = 1) => {//nombre_sonido, volumen_inicio, volumen_final, tiempoDeFade
        let o = { vol: desde };
        let fade = new TimelineMax({
            onUpdate: function () {
                Player.cambiaVolume(cual, o.vol);
            }
        });
        //reducir volumen
        fade.to(o, t, { vol: hasta });
        fade.play();//ejecutar el fade
    },

    arrWaitSounds: [],//contenedor de timelines, contraladores del sonido "especial"
    waitForSound: (cual, waitFor = 4, cuantoDura = 14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume = 1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if (!ANIM[`wait_sound_${cual}`]) {//no existe o es nuevo
            ANIM[`wait_sound_${cual}`] = new TimelineMax({ repeat: cuantasVeces - 1 });// reproducción inicial + 1 repetición => condiciona a repetir  n veces exacto
            //
            let o = { val: 0 };
            let waitTL = `+=${waitFor}`;//4 segundos despues de la TimeLine
            ANIM[`wait_sound_${cual}`]

                .addLabel('inicio')//inicio
                .addCallback(function () {
                    Player.playSoundFX(cual);//ejecutar el efecto de sonido "musica_" inifinitas veces
                    Player.cambiaVolume(cual, volume);
                }, waitTL)
                .to(o, cuantoDura + cuantoDejoAlFinal, { val: 100 })
                .addLabel('final')//final
                ;
            
            //            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if (fade) {
                ANIM[`wait_sound_${cual}`].addCallback(function () {
                    ANIM.fadeVolume(cual, volume, volFadeTo, cuantoDura - fadeFrom);
                }, waitFor + fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    //paussar sonido de espera
    pauseWaitSound: () => {
        ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },

    /* animaescena_7: () => {
        if (!ANIM.anim_interact_7_feliz) {
            ANIM.anim_interact_7_feliz = new TimelineMax({ repeat: -1 }); // creo la interacción
            ANIM.anim_interact_7_feliz
        
           .addLabel('inicio')
           .fromTo('#escena_07 .feliz', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1700% 0%', ease: SteppedEase.config(17)})
           .addLabel('final');
       }
        ANIM.anim_interact_7_feliz.resume();
    }, */

    //Intento de desaparecer la madrastra ES02
    /* animaescena_2: () => {
        
        ANIM.anim_interact_2_madrastraEnojada = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_2_madrastraEnojada
            .addLabel('inicio')
            .to('#escena_02 .madrastraEnojadaEs02', 1, {autoAlpha:1})
            .addLabel('final');
        ANIM.anim_interact_2_madrastraEnojada.resume();
    },
    */
    pauseAnimaciones: () => {
        
        try { ANIM.anim_interact_2_madrastraEnojada.pause(0) }
        catch (err) { }
    }, 


    init: () => {
        ANIM.creapartes();
          
        Player.creaMainTL();
        /***/
         
        // Acá van ejemplos de animaciones y labels adicionales de la animación principal || Desde acá hacia abajo deberás editar lo tuyo
        /*
        ANIM.main_tl.addLabel('0_0_audio','escena_0+=0.01'); // <-- Agregar labels adicionales, tomando como referencia otra label y sumándole o restándole la cantidad de tiempo en que quiero que se active
        ANIM.main_tl.addLabel('princesas_ventana','1_4+=0.3'); // <-- otro ejemplo de lo mismo los labels pueden ser cualquier cosa
        ANIM.main_tl.add( TweenMax.to('#escena_00', 20, {scale:2}),'escena_0+=13'); // <-- le pongo una animación al timeline con la misma técnica, es decir uso una label existente y le sumo o resto el tiempo en que quiero que se active a partir de ésta.
        */
        ANIM.main_tl.addLabel('0_0_audio', 'escena_0+=0.1');
        ANIM.main_tl.addLabel('0_0_audio_fade', '0_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_cuento');
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_cuento',1,0,2);
        }, "0_0_audio_fade");
        

        ANIM.main_tl.addLabel('4_0_audio', 'escena_4+=0.1');
        ANIM.main_tl.addLabel('4_0_audio_fade', '4_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('cascabel');
        }, '4_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('cascabel',1,0,2);
        }, "4_0_audio_fade");



        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_00');
        }, "escena_0"); // esto quiere decir que cuando main_tl llegue a la label "escena_0" va a llamar a Player.hideOthersBut('escena_00');
     
        ANIM.main_tl.addCallback(function () {
            Player.activaBtnSiguiente(); // <-- no vá siempre, depende del cuento (a veces sólo se activa cuando terminas la interactividad)
            ANIM.main_tl.pause(); // <-- va siempre, pausa el timeline al llegar al label específicado, en este caso "fin_escena_0"
            ANIM.interactividad(0); // <-- Activa la interactividad. No va siempre, depende del cuento. A veces va más de uno y/o con parámetros adicionales 
            Player.tooglePlayPauseIco(); // <-- va siempre, intercambia el ícono de play/pause en el reproductor
            Player.resetSubtitulos();
            //ANIM.fadeVolume('aleteo',1,0.2,3);
           //Player.playSoundFX('guitarra_alegre', true) <-- va siempre, evita que los subtítulos se queden pegados al finalizar la escena
            // puedes poner cualquier cosa en realidad. A veces hay que poner sonidos apenas termina la escena, entonces pones la línea siguiente:
            // Player.playSoundFX('magia'); // tiene que existir en el archivo de configuración en el array fx_sonido, accedes a él por el nombre que le pusiste, este caso 'magia'
        }, "fin_escena_0"); /* esto quiere decir que cuando main_tl llegue a la label "fin_escena_0" va a llamar a 
                                                                                                Player.activaBtnSiguiente();
                                                                                                ANIM.main_tl.pause();
                                                                                                ANIM.interactividad(0);
                                                                                                Player.tooglePlayPauseIco();
                                                                                                Player.resetSubtitulos();
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_01');
        }, "escena_1");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, "fin_escena_1");
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_02');
        }, "escena_2");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            //Player.playSoundFX('muebles');
            //Player.cambiaVolume('muebles', 0.8);
        }, "fin_escena_2");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function (){ 
            Player.hideOthersBut('escena_03');
        }, "escena_3");
      
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('amasar');
            Player.cambiaVolume('amasar',0.2);
            Player.playSoundFX('hirviendo');
            Player.cambiaVolume('hirviendo',0.8);
        }, "fin_escena_3");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_04');
        }, "escena_4");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('tijeras');
            Player.cambiaVolume('tijeras', 0.8);
            Player.playSoundFX('cascabel');
            Player.cambiaVolume('cascabel',0.2);
            console.log("fin_escena 4");
        }, "fin_escena_4");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_05');
        }, "escena_5");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
        /*  Player.tooglePlayPauseIco();*/
            Player.resetSubtitulos();
            Player.playSoundFX('organi');
            Player.cambiaVolume('organi',0.2);
            console.log("fin_escena 5");
        }, "fin_escena_5");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_06');
        }, "escena_6");

        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            /*Player.tooglePlayPauseIco();*/
            Player.resetSubtitulos();
            Player.playSoundFX('navidad');
            Player.cambiaVolume('navidad',0.2);
        }, "fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_07');
        }, "escena_7");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('navidad');
            Player.cambiaVolume('navidad',0.2);
            Player.playSoundFX('peatones');
            Player.cambiaVolume('peatones',0.2);
        }, "fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function () {
            Player.hideOthersBut('escena_08');
        }, "escena_8");
        
        ANIM.main_tl.addCallback(function () {
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('villancico');
            Player.cambiaVolume('villancico', 0.2);
            Player.playSoundFX('celebracion', true);
            Player.cambiaVolume('celebracion',0.5);
        }, "fin_escena_8");
        
    

       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    //timelines de interaccion
    creaAnimInteractividad: () => {
        //sprints
        //Escena00
        ANIM.anim_interact_0_cenicienta = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_0_cenicienta
            .addLabel('inicio')
            .fromTo('#escena_00 .cenicienta', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)})//posición inicial en 0 0 y luego animacion de cucu 17 fotogramaas
            .addLabel('final');
        ANIM.anim_interact_0_cenicienta.pause();

        /* Pajaro1 */
        ANIM.anim_interact_0_pajaro1 = new TimelineMax({repeat:4}); // creo la interacción
        ANIM.anim_interact_0_pajaro1
          
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('pajaros_aleteando');
                Player.cambiaVolume('pajaros_aleteando', 0.4);
            })
            .fromTo('#escena_00 .pajaro1', 0.7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_0_pajaro1.pause();

        /* Pajaro2 */
        ANIM.anim_interact_0_pajaro2 = new TimelineMax({repeat:4}); // creo la interacción
        ANIM.anim_interact_0_pajaro2
          
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('pajaros_aleteando');
                Player.cambiaVolume('pajaros_aleteando', 0.4);
            })
            .fromTo('#escena_00 .pajaro2', 0.7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_0_pajaro2.pause();

        /* Madrastra */
        ANIM.anim_interact_0_mujeres = new TimelineMax({repeat:1}); // creo la interacción
        ANIM.anim_interact_0_mujeres
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('risa_malvada');
                Player.cambiaVolume('risa_malvada', 0.6);
            })
            .fromTo('#escena_00 .hermanastra1', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_00 .madrastra', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_00 .hermanastra2', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_0_mujeres.pause();

        /* Fuego Estufa */
        ANIM.anim_interact_0_fuego = new TimelineMax({repeat:-1}); // creo la interacción
        ANIM.anim_interact_0_fuego
            .addLabel('inicio')
            .fromTo('#escena_00 .fuego', 0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_0_fuego.pause();
        //Intento de humo2 y humo
        /* let div = "";
        for(let i=0; i<4; i++){
            div += '<div class="spriteHumo2 humo2"></div>';
            for(let i=84.8; i<91; i++){
                console.log("bucle",i);
                $("spriteHumo2 .humo2").css({
                    "width": "70px",
                    "height": "190px",
                    "position": "absolute",
                    "z-index": "6",
                    "top": "60.5%",
                    "left": i+"%",
                    "background-position": "-100% 0%",
                    "background-size": "100%",
                    "background-repeat": "repeat-x",
                })
            }

        }
        $(document).ready(function(){
            $(".interact").append(div);
        })
        const humo = document.querySelector(".humo2");
        for(let i=0; i<5; i++){
            humo;
        }
        console.log("humo", humo); */

        /* Humo2 Estufa */
        /* ANIM.anim_interact_0_humo2 = new TimelineMax({repeat:-1}); // creo la interacción
        ANIM.anim_interact_0_humo2
            .addLabel('inicio')
            .fromTo('#escena_00 .fuego', 0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_0_fuego.pause(); */
        //fin de intento
         //Animacion Capa Heroe - escena 2
        
        //Escena01 
        /* Cenicienta */
        ANIM.anim_interact_1_cenicienta = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1_cenicienta
                .addLabel('inicio')
                .to('#escena_01 .cenicienta02',3.7,{x:800, ease:"circ.out"})
                .fromTo('#escena_01 .cenicienta02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:3}, "-=4")
                .addLabel('final');     
        ANIM.anim_interact_1_cenicienta.pause();

        /* Mensajero - PAJE */
        ANIM.anim_interact_1_paje = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_1_paje
                .addLabel('inicio')
                .fromTo('#escena_01 .mensajero', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)}, "+=1")
                .addLabel('final');     
        ANIM.anim_interact_1_paje.pause();
        
        /* Publico */
        ANIM.anim_interact_1_publico = new TimelineMax({repeat:0}); // creo la interacción
        ANIM.anim_interact_1_publico
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('hombre_pensativo');
                Player.cambiaVolume('hombre_pensativo', 0.6);
            })
            .fromTo('#escena_01 .guerrero', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_01 .doncella', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_01 .granjero', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_01 .pintor', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_1_publico.pause();
        
        /* Mujeres */
        ANIM.anim_interact_1_mujeres= new TimelineMax({repeat:0}); // creo la interacción
        ANIM.anim_interact_1_mujeres
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('suspiro_de_mujer');
                Player.cambiaVolume('suspiro_de_mujer', 0.2);
            })
            .fromTo('#escena_01 .hermana1', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            //.fromTo('#escena_01 .madrastra_es01', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .fromTo('#escena_01 .hermana2', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "+=1")
            .addLabel('final');
        ANIM.anim_interact_1_mujeres.pause();

        /* Madrastra Pensando */
        ANIM.anim_interact_1_madrastra= new TimelineMax({repeat:0});
        ANIM.anim_interact_1_madrastra
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('madrastra_pensando');
                Player.cambiaVolume('madrastra_pensando', 0.2);
            })
            .fromTo('#escena_01 .madrastra_es01', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "+=1")
            .addLabel('final');
        ANIM.anim_interact_1_madrastra.pause();
        
        /* Nubes*/
        ANIM.anim_interact_1_nubes= new TimelineMax({repeat:1, yoyo:true}); // creo la interacción
        /* Comente solo nubes pq no aparecia la animación del sool */
        ANIM.anim_interact_1_nubes
            .addLabel('inicio')     
            .fromTo('#escena_01 .solAlternativo', 5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:-1},0)
            .fromTo('#escena_01 .nube1', 40,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-200% 0%', x:950},0
                   )
            .fromTo('#escena_01 .nube2', 40,
                   {backgroundPosition:'0% 0%'},
                   {backgroundPosition:'-200% 0%', x:-950},0
                  ) 
            .addLabel('final');
        ANIM.anim_interact_1_nubes.pause(); 



        /***************************************************************************************/
        
        //Escena02
        /* Grupo de Mujeres */
        ANIM.anim_interact_2_mujeres3 = new TimelineMax();
        ANIM.anim_interact_2_mujeres3
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('risa_malvada');
                Player.cambiaVolume('risa_malvada', 0.2);
            })
            .fromTo('#escena_02 .hermana2Es02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:2})
            .fromTo('#escena_02 .hermanaEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:2})
            //.fromTo('#escena_02 .madrastraEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:3})
            //para esconder a la madrastra
            //.to('#escena_02 .madrastraEs02', 1, {autoAlpha:0})
            //.fromTo('#escena_02 .madrastraEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final');
        ANIM.anim_interact_2_mujeres3.pause();
        
        /* Madrastra Enojada */
        ANIM.anim_interact_2_madrastraEnojada = new TimelineMax();
        ANIM.anim_interact_2_madrastraEnojada
           .addLabel('inicio')
           .addCallback(function(){
               Player.playSoundFX('no_de_madrastra');
               Player.cambiaVolume('no_de_madrastra', 0.2);
           })
           //ME QUEDE EN ROTAR LA MANO!!!!
           .fromTo('#escena_02 .manoEs02', 0.8, {rotation:0}, {rotation:15, ease:Power4.easeOut})
           .fromTo('#escena_02 .manoEs02', 0.8, {rotation:0}, {rotation:-2, ease:Power4.easeOut})
           //.from('#escena_02 .madrastraEnojadaEs02', 15,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', ease: SteppedEase.config(1)})
           //.fromTo('#escena_02 .hermanaEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:2})
           //.fromTo('#escena_02 .madrastraEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:3})
           //para esconder a la madrastra
           //.to('#escena_02 .madrastraEs02', 1, {autoAlpha:0})
           //.fromTo('#escena_02 .madrastraEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
           .addLabel('final');
        ANIM.anim_interact_2_madrastraEnojada.pause();

        ANIM.anim_interact_2_cenicienta = new TimelineMax();
        ANIM.anim_interact_2_cenicienta
                .addLabel('inicio')
                .fromTo('#escena_02 .cenicientaEs02', 4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:0}, "+=1")
                .addLabel('final');     
        ANIM.anim_interact_2_cenicienta.pause();
        






           //Animacion Cocinero
           ANIM.anim_interact_3_cocinero = new TimelineMax({repeat:2}); // creo la interacción
           ANIM.anim_interact_3_cocinero
            
               .addLabel('inicio')
               .addCallback(function(){
                Player.playSoundFX('tortilla');
                Player.cambiaVolume('tortilla',0.2);
            })
               .fromTo('#escena_03 .cocinero', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)})
               .addLabel('final');
           ANIM.anim_interact_3_cocinero.pause();
         //Fin Animacion Cocinero
        
         //Animacion Wafle - escena 4
         ANIM.anim_interact_4_wafle = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_4_wafle
          
             .addLabel('inicio')
             .addCallback(function(){
                 Player.playSoundFX('galleta');
                 Player.cambiaVolume('galleta',0.2);
            })
             .fromTo('#escena_04 .wafle', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .addLabel('final');
         ANIM.anim_interact_4_wafle.pause();
       //Fin Animacion Wafle - escena 4


         //escena_05 Estrellas
         ANIM.anim_interact_5_estrellas = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_5_estrellas
          
             .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('brillo');
                Player.cambiaVolume('brillo',0.2);
           })
             .fromTo('#escena_05 .estrellas', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-400% 0%', ease: SteppedEase.config(4)})
             .addLabel('final')
                         
             ;
         ANIM.anim_interact_5_estrellas.pause();


         //escena_06 Ojos
         ANIM.anim_interact_6_ojos = new TimelineMax({repeat:1}); // creo la interacción
         ANIM.anim_interact_6_ojos
          
             .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('pensativo');
                //Player.cambiaVolume('pensativo',0);
            })
             .fromTo('#escena_06 .ojos', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)})             
             .addLabel('final')
                         
             ;
         ANIM.anim_interact_6_ojos.pause();

         //escena_07 Feliz
         ANIM.anim_interact_7_feliz = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_7_feliz
          
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('platillo');
                    Player.cambiaVolume('platillo',0.8);
                })
                .fromTo('#escena_07 .feliz', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1700% 0%', ease: SteppedEase.config(17)})
                .addLabel('final');
                         
             ;
        ANIM.anim_interact_7_feliz.pause();

        //escena_07 Perro
        ANIM.anim_interact_7_perro = new TimelineMax({repeat:2}); // creo la interacción -modificado platillo #veces
        ANIM.anim_interact_7_perro
         
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('aullido');
                    Player.cambiaVolume('aullido',0.5);
                })
               .fromTo('#escena_07 .perro', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1700% 0%', ease: SteppedEase.config(17)})
               .addLabel('final');
                        
            ;
       ANIM.anim_interact_7_perro.pause();
        
        //escena_08 Sergio
        ANIM.anim_interact_8_sergio = new TimelineMax({repeat:-1}); // creo la interacción animacion de sergio saltando infinitas veces
        ANIM.anim_interact_8_sergio
        
            .addLabel('inicio')
           
            .fromTo('#escena_08 .sergio', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
            .addLabel('final')
                    
            ;
        ANIM.anim_interact_8_sergio.pause();

         //escena_08 Micro dance
         ANIM.anim_interact_8_dance = new TimelineMax({repeat:-1}); // creo la interacción hace que cada primo ratón(5) suba sus brazos
         ANIM.anim_interact_8_dance
         
             .addLabel('inicio')
             .fromTo('#escena_08 .dance01', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .fromTo('#escena_08 .dance02', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .fromTo('#escena_08 .dance03', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .fromTo('#escena_08 .dance04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .fromTo('#escena_08 .dance05', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
             .addLabel('final')
                     
             ;
         ANIM.anim_interact_8_dance.pause();

        
        //Array de anin interacts
        ANIM.arr_interacts = [

            ANIM.anim_interact_1, // agrego la interacción al array //no vale nada, no hace nada
            ANIM.anim_interact_0_cenicienta,
            ANIM.anim_interact_0_pajaro1,
            ANIM.anim_interact_0_pajaro2,
            ANIM.anim_interact_0_mujeres,
            ANIM.anim_interact_0_fuego,
            
            ANIM.anim_interact_1_cenicienta,
            ANIM.anim_interact_1_paje,
            ANIM.anim_interact_1_publico,
            ANIM.anim_interact_1_mujeres,
            ANIM.anim_interact_1_madrastra,
            ANIM.anim_interact_1_nubes,


            ANIM.anim_interact_2_mujeres3,
            ANIM.anim_interact_2_madrastraEnojada,
            ANIM.anim_interact_2_cenicienta,
            


            //lo de abajo no sirve para este cuento escribir arriba
            ANIM.anim_interact_2_ratonHeroe,
            ANIM.anim_interact_3_cocinero,
            ANIM.anim_interact_4_wafle,
            ANIM.anim_interact_5_estrellas,
            ANIM.anim_interact_6_ojos,
            ANIM.anim_interact_7_feliz,
            ANIM.anim_interact_7_perro,
            ANIM.anim_interact_8_sergio,
            ANIM.anim_interact_8_dance,
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
        
//      TweenMax.killTweensOf("#escena_00 .stuff");
        TweenMax.set('#escena_00 .interact',{scale:1, transformOrigin:'1280px 395px'});
        ANIM.pauseWaitSound();
        ANIM.pauseAnimaciones();
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
              /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_cenicienta.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_cenicienta.play(0);
                        
                    });
                 }

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_pajaro1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_pajaro1.play(0);
                    });
                 }

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_pajaro2.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_pajaro2.play(0);
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_mujeres.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_mujeres.play(0);
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_fuego.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_fuego.play(0);
                    });
                 }
                break;

             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_cenicienta.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_cenicienta.play(0);    
                    });
                 }

                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_paje.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_paje.play(0);
                        
                    });
                 };

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_publico.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_publico.play(0);
                        
                    });
                 };

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_mujeres.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_mujeres.play(0);
                    });
                 }

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_madrastra.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_madrastra.play(0);
                    });
                 }

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_nubes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_nubes.play(0);  
                    });
                 }

                break;
            case 2:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_mujeres3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_mujeres3.play(0);
                    });
                 }
                  
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_madrastraEnojada.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_madrastraEnojada.play(0);
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_cenicienta.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_cenicienta.play(0);
                    });
                 } 
                 
                 break;
             case 3:
                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_3_cocinero.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_cocinero.play(0);
                        });
                    }
                 break;
             case 4:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_wafle.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_wafle.play(0);
                    });
                }
                 break;
             case 5:
                    
                 if (btn.hasClass('primario')) {
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_estrellas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_estrellas.play(0);
                        
                    });
                    }
                
                 break;
            case 6:
                /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_ojos.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6_ojos.play(0);
                        
                    });
                }
                
                 break;
             case 7:
                 /**/ if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_feliz.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7_feliz.play(0);
                        
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_perro.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7_perro.play(0);
                        
                    });
                 }
                 break;
             case 8:   
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_sergio.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_sergio.play(0);
                        
                    });
                 }
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_dance.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_dance.play(0);
                        
                    });
                 }
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