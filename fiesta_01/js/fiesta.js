//archivo de configuración
let JSON_CUENTO = {
    nombre:"Una gran fiesta",
    tipo:"Cuento",
    descripcion:"Toda la familia se encuentra ocupada preparando cada uno de los detalles de la gran fiesta de cumpleaños del abuelo, que cae justo el día de navidad. Pero ninguno de ellos se encuentra más emocionado que Sergio, quien ahora tiene seis años y ya forma parte de los primos grandes. El tiempo pasa rápido y a Sergio le cuesta encontrar un lugar entre los preparativos. ¿Podrá encontrar el regalo indicado para el abuelo?",
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
        "img/fiesta/esc_0_fondo.jpg",
        "img/fiesta/esc_1_fondo.jpg",
        "img/fiesta/esc_2_fondo.jpg",
        "img/fiesta/esc_3_fondo.jpg",
        "img/fiesta/esc_4_fondo.jpg",
        "img/fiesta/esc_5_fondo.jpg",
        "img/fiesta/esc_6_fondo.jpg",
        "img/fiesta/esc_7_fondo.jpg",
        "img/fiesta/esc_8_fondo.jpg",
    
    ], 
    fx_sonido:[
        {nombre:"villancico", url:"audio/fiesta/fx/musica_villancico.mp3"},
        {nombre:"reloj_cucu", url:"audio/fiesta/fx/reloj_cucu.mp3" },
        {nombre:"paso_tiempo", url:"audio/fiesta/fx/paso_del_tiempo.mp3" },
        {nombre: "capa_heroe", url: "audio/fiesta/fx/capa_super_heroe.mp3" },
        {nombre: "hirviendo", url: "audio/fiesta/fx/hoya_hirviendo.mp3" },
        {nombre: "cascabel", url: "audio/fiesta/fx/cascabeles.mp3" },
        {nombre: "tijeras", url: "audio/fiesta/fx/chasquido_de_tijeras.mp3" },
        {nombre: "pensativo", url: "audio/fiesta/fx/nino_pensativo.mp3" },
        {nombre: "aullido", url: "audio/fiesta/fx/aullido_de_perro.mp3" },
        {nombre: "platillo", url: "audio/fiesta/fx/platillos.mp3" },
        {nombre: "celebracion", url: "audio/fiesta/fx/celebracion.mp3" },
        {nombre: "escribir", url: "audio/fiesta/fx/escribiendo.mp3" },
        {nombre: "muebles", url: "audio/fiesta/fx/muebles_mov.mp3" },
        {nombre: "amasar", url: "audio/fiesta/fx/amasar.mp3" },
        {nombre: "tortilla", url: "audio/fiesta/fx/vuelta_tortilla.mp3" },
        {nombre: "galleta", url: "audio/fiesta/fx/galleta.mp3" },
        { nombre: "brillo", url: "audio/fiesta/fx/brillo_brillo.mp3" },
        { nombre: "navidad", url: "audio/fiesta/fx/navidad_01.mp3" },
        
        
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/fiesta/mini_0.jpg",
            audio:"audio/fiesta/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "Diciembre es el mes más importante del año en su familia.",
                    tiempo:[0,4.2,10] 
                },
                {
                    texto: "La abuela reúne a los nietos mayores<br>para preparar la fiesta de cumpleaños del Tata,",
                    tiempo:[5.0,11.5,0] 
                },
                {
                    texto: "que cae el mismo día de Navidad.",
                    tiempo:[11.9,14.6,0.5] 
                },
                {
                    texto: "Este año es cien veces más importante porque el abuelo cumple ochenta años.",
                    tiempo:[15.2,22,0.5] 
                },
                {
                    texto: "Este año es también mil veces más emocionante,",
                    tiempo:[22.6,27.0,0.5] 
                },
                {
                    texto: "porque Sergio tiene seis años y ya es del grupo de los grandes.",
                    tiempo:[27.7,33.1,0.8] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/fiesta/mini_1.jpg",
            audio:"audio/fiesta/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "¡Qué larga es la lista de tareas que ha preparado la abuela!",
                    tiempo:[0,3.4,0.5] 
                },
                {
                    texto: "Uno a uno, los nietos van inscribiendo sus nombres<br>en el cartel que cuelga en el patio.",
                    tiempo:[4.2,10.9,0.6] 
                },
                {
                    texto: "Sergio sujeta fuerte el plumón entre sus dedos,<br>mientras lee una vez más el listado de encargos.",
                    tiempo:[11.5,20.1,0.8] 
                },
                {
                    texto: "-Mmmmmm- ¡Qué difícil es decidirse! ¿Cuál será la mejor tarea para él?",
                    tiempo:[20.8,26.4,0.7] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/fiesta/mini_2.jpg",
            audio:"audio/fiesta/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "Con sus brazos musculosos, super Sergio mueve el gran sillón de la sala.",
                    tiempo:[0,6.1,0.5] 
                },
                {
                    texto: "Enrolla la alfombra usando solamente su dedo índice.",
                    tiempo:[6.6,11.2,0.6] 
                },
                {
                    texto: "Traslada la mesa y las sillas del comedor al jardín sin ninguna ayuda.",
                    tiempo:[11.7,17.6,0.9] 
                },
                {
                    texto: "Aunque, pensándolo mejor – reflexiona Sergio -",
                    tiempo:[18.5,22.4,0.9] 
                },
                {
                    texto: "quizás sea buena idea dejar esa tarea a los primos y primas mayores…",
                    tiempo:[23.2,28,0.8]
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/fiesta/mini_3.jpg",
            audio:"audio/fiesta/escena_04.mp3",
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
            miniatura:"img/fiesta/mini_4.jpg",
            audio:"audio/fiesta/escena_05.mp3",
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
            miniatura:"img/fiesta/mini_5.jpg",
            audio:"audio/fiesta/escena_06.mp3",
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
            miniatura:"img/fiesta/mini_6.jpg",
            audio:"audio/fiesta/escena_07.mp3",
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
            miniatura:"img/fiesta/mini_7.jpg",
            audio:"audio/fiesta/escena_08.mp3",
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
            miniatura:"img/fiesta/mini_8.jpg",
            audio:"audio/fiesta/escena_09.mp3",
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

    animaescena_7: () => {
        if (!ANIM.anim_interact_7_feliz) {
            ANIM.anim_interact_7_feliz = new TimelineMax({ repeat: -1 }); // creo la interacción
            ANIM.anim_interact_7_feliz
        
           .addLabel('inicio')
           .fromTo('#escena_07 .feliz', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1700% 0%', ease: SteppedEase.config(17)})
           .addLabel('final');
       }
        ANIM.anim_interact_7_feliz.resume();
    },

    pauseAnimaciones: () => {
        
        try { ANIM.anim_interact_7_feliz.pause(0) }
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
            Player.playSoundFX('villancico');
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('villancico',1,0,2);
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
           /*ANIM.interactividad(1);*/
            //ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('paso_tiempo');
            Player.cambiaVolume('paso_tiempo', 0.2);
            Player.playSoundFX('escribir');
            Player.cambiaVolume('escribir',0.5);
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
            Player.playSoundFX('muebles');
            Player.cambiaVolume('muebles', 0.8);
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
        //Animacion Cucu - escena00
        ANIM.anim_interact_0_cucu = new TimelineMax({repeat:1}); // creo la interacción
        ANIM.anim_interact_0_cucu
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('reloj_cucu');
            })
            .fromTo('#escena_00 .cucu', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-1700% 0%', ease: SteppedEase.config(17)})//posición inicial en 0 0 y luego animacion de cucu 17 fotogramaas
            .addLabel('final');
        ANIM.anim_interact_0_cucu.pause();
        
        //Fin Animacion Cucu - escena 0
        
        //Fin Animacion Cucu - escena 0

         //Animacion Capa Heroe - escena 2
         ANIM.anim_interact_2_ratonHeroe = new TimelineMax({repeat:2}); // creo la interacción
         ANIM.anim_interact_2_ratonHeroe
          
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('capa_heroe');//luego cambia el volumen a la mitad
                Player.cambiaVolume('capa_heroe',0.5);
            })
             .fromTo('#escena_02 .ratonHeroe', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-600% 0%', ease: SteppedEase.config(6)})
             .addLabel('final');
         ANIM.anim_interact_2_ratonHeroe.pause();
         
        
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
            ANIM.anim_interact_0_cucu,
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
                        ANIM.anim_interact_0_cucu.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_cucu.play(0);
                        
                    });
                 }
                break;
             case 1:
            
                break;
            case 2:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_ratonHeroe.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_ratonHeroe.play(0);
                        
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