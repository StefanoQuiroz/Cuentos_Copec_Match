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
        {nombre:"cancion_baile_cortada", url:"audio/cenicienta/fx/cancion_de_baile_cortada.mp3" },
        {nombre:"hombre_pensativo", url:"audio/cenicienta/fx/hombre_pensativo.mp3" },
        {nombre: "madrastra_pensando", url: "audio/cenicienta/fx/madrastra_pensando.mp3" },
        {nombre: "magic_wand", url: "audio/cenicienta/fx/magic_wand.mp3" },
        {nombre: "mujer_asombrada", url: "audio/cenicienta/fx/mujer_asombrada.mp3" },
        {nombre: "musica_de_cuento", url: "audio/cenicienta/fx/musica_de_cuento.mp3" },
        {nombre: "no_de_madrastra", url: "audio/cenicienta/fx/no_de_madrastra.mp3" },
        {nombre: "pajaros_aleteando", url: "audio/cenicienta/fx/pajaros_aleteando.mp3" },
        {nombre: "pasos_en_la_escalera", url: "audio/cenicienta/fx/pasos_en_la_escalera.mp3" },
        {nombre: "pasos_en_la_escalera_cortado", url: "audio/cenicienta/fx/pasos_en_la_escalera_cortado.mp3" },
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
                    texto: "Cenicienta lloraba amargamente por no poder ir al baile.",
                    tiempo:[0,4.2,6] 
                },

                {
                    texto: "De pronto apareció un hada que convirtió con su varita mágica sus cenicientos vestidos en un elegante traje.",
                    tiempo:[4.7,12.5,0.5] 
                },

                {
                    texto: "Y una calabaza del jardín en un carruaje con caballos y cochero.",
                    tiempo:[13.0,17.8,0.5] 
                },
                
                {
                    texto: "Cenicienta, soy tu hada madrina.",
                    tiempo:[18.3,21.0,0.5] 
                },

                {
                    texto: "Recuerda que el encantamiento durará solo hasta las doce de la noche.",
                    tiempo:[21.5,24.2,0.5] 
                },           
                {
                    texto: "Recuerda que el encantamiento durará solo hasta las doce de la noche.",
                    tiempo:[24.2,26.2,0.2] 
                }
                ,{
                    texto: "Prueba Borrar",
                    tiempo:[26.3,26.4,0.1] 
                }           
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/cenicienta/mini_4.jpg",
            audio:"audio/cenicienta/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Cuando Cenicienta llegó al baile, todos quedaron admirados por su belleza y distinción.",
                    tiempo:[0,5.8,11] 
                },
                {
                    texto: "El príncipe bailó con ella toda la noche;<br>y ni la madrastra ni sus hermanastras reconocieron a la joven.",
                    tiempo:[6.3,14.1,0.5] 
                }
                ,{
                    texto: "Prueba Borrar",
                    tiempo:[14.2,14.6,0.1] 
                }
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/cenicienta/mini_5.jpg",
            audio:"audio/cenicienta/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "Al oír las campanadas que daban la media noche, Cenicienta recordó el encantamiento y corrió para no ser descubierta.",
                    tiempo:[0,7.9,7.7] 
                },
                {
                    texto: "Pero con el apuro, perdió una de sus zapatillas de cristal al bajar las escaleras del castillo.",
                    tiempo:[8.5,15.4,0.6] 
                },
                {
                    texto: "El príncipe intentó alcanzarla, pero solamente encontró su zapato.",
                    tiempo:[15.9,20.5,0.5]    
                }
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/cenicienta/mini_6.jpg",
            audio:"audio/cenicienta/escena_07.mp3",
            parrafos:
            [
                {
                    texto: "Al día siguiente, el príncipe ordenó buscar a la dueña del zapato de cristal por todo el reino.",
                    tiempo:[0,6.8,0.2] 
                },
                {
                    texto: "Él mismo salió a buscarla casa por casa hasta llegar a la de Cenicienta.",
                    tiempo:[7.3,11.5,0.5] 
                },
                {
                    texto: "Las hermanastras intentaron que la zapatilla les calzara por todos los medios,<br> pero sus pies eran demasiado grandes y gruesos.",
                    tiempo:[12.0,21.0,0.5] 
                }
               /*  ,{
                    texto: "Prueba Borrar",
                    tiempo:[21.0,21.2,0.2] 
                } */
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/cenicienta/mini_7.jpg",
            audio:"audio/cenicienta/escena_08.mp3",
            parrafos:
            [
                {
                    texto: "Al llegar el turno de Cenicienta, las hermanastras se burlaron cruelmente:<br> Esa zapatilla jamás calzaría a una sirvienta.",
                    tiempo:[0,8.8,0.09] 
                },
                {
                    texto: "Pero para su sorpresa, el zapato calzó perfectamente en el fino pie de la joven.",
                    tiempo:[8.8,16.1,0.5] 
                }
               /*  ,{
                    texto: "Prueba Borrar",
                    tiempo:[16.4,16.5,0.3] 
                } */
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/cenicienta/mini_8.jpg",
            audio:"audio/cenicienta/escena_09.mp3",
            parrafos:
            [
                {
                    texto: "El príncipe miró a Cenicienta a los ojos y la reconoció de inmediato.",
                    tiempo:[0,5.0,8.9] 
                },
                {
                    texto: " La boda se celebró al día siguiente en el palacio real y con grandes festejos.",
                    tiempo:[5.5,11.1,0.5] 
                },
                {
                    texto: "Y colorín, colorado, éste cuento se ha acabado.",
                    tiempo:[11.6,15.8,0.5] 
                } 
                /* ,{
                    texto: "Prueba Borrar",
                    tiempo:[16.0,16.2,0.2] 
                } */
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
        /* Efecto de sonido en la escena00 antes de la narracion  */

        /* Pre-Animación */
        /* ZOOM */
        ANIM.main_tl.add(TweenMax.set("#escena_03",{scale:2.9,x:0,y:150}),'escena_0+=0.01');

        ANIM.main_tl.add(TweenMax.set("#escena_03 .cenicienta03",{scaleX:-1,rotation:0, y:40, x:0,transformOrigin:'0px 0px'}),'escena_0+=0.01');
        
        /* Animación Hada Madrina */
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .adaMadrina', 5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', autoAlpha:1},0),'3_1-=0.1');
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .brazoAda', 5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', autoAlpha:1},0),'3_1-=0.1');
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .brazoAdaVarita', 5,{backgroundPosition:'0% 0%', rotation:35},{backgroundPosition:'-100% 0%',rotation:35, autoAlpha:1},0),'3_1-=0.1');

        /* Animación Cenicienta */
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .cenicienta03', 1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1),'3_1-=0.1')

        /* Animación nubes */
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .nube103', 24,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:350, repeat:-1, yoyo:true},0),'3_0-=0.1')
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .nube203', 24,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:-350, repeat:-1, yoyo:true},0),'3_0-=0.1') 
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .nube303', 24,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:350, repeat:-1, yoyo:true},0), '3_0-=0.1')
        
        /* Animación ratones */
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .raton1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:-1},0),'3_1-=0.1')
        ANIM.main_tl.add(TweenMax.fromTo('#escena_03 .raton2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:-1},0),'3_1-=0.1')

        ANIM.main_tl.add(TweenMax.to("#escena_03",5,{scale:1, x:0,y:0}),'3_1-=0.1'); 

        ANIM.main_tl.addLabel('0_0_audio', 'escena_0+=0.1');
        ANIM.main_tl.addLabel('0_0_audio_fade', '0_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_cuento');
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_cuento',1,0,2);
        }, "0_0_audio_fade");
        
        /* Efecto de sonido de la escena03 antes de la narracion  */
        ANIM.main_tl.addLabel('3_0_audio', 'escena_3+=0.1');
        ANIM.main_tl.addLabel('3_0_audio_fade', '3_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_cuento');
        }, '3_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_cuento',1,0,2);
        }, "3_0_audio_fade");

        ANIM.main_tl.addLabel('3_1_audio', 'escena_3+=11.6');
        ANIM.main_tl.addLabel('3_1_audio_fade', '3_1-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('mujer_asombrada');
        }, '3_1_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('mujer_asombrada',1,0,2);
        }, "3_1_audio_fade");
        
        /* Efecto de sonido de la escena04 antes de la narracion  */
        ANIM.main_tl.addLabel('4_0_audio', 'escena_4+=0.1');
        ANIM.main_tl.addLabel('4_0_audio_fade', '4_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('cancion_baile');
        }, '4_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('cancion_baile',1,0,2);
        }, "4_0_audio_fade");

        /* Efecto de sonido de la escena05 antes de la narracion */
        ANIM.main_tl.addLabel('5_0_audio', 'escena_5+=0.1');
        ANIM.main_tl.addLabel('5_0_audio_fade', '5_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('campanadas_media_noche');
        }, '5_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('campanadas_media_noche',1,0,2);
        }, "5_0_audio_fade");

        /* Efecto de sonido de la escena08 antes de la narracion */
        ANIM.main_tl.addLabel('8_0_audio', 'escena_8+=0.1');
        ANIM.main_tl.addLabel('8_0_audio_fade', '8_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('musica_de_cuento');
        }, '8_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('musica_de_cuento',1,0,2);
        }, "8_0_audio_fade");
        


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
            /* Player.playSoundFX('amasar');
            Player.cambiaVolume('amasar',0.2);
            Player.playSoundFX('hirviendo');
            Player.cambiaVolume('hirviendo',0.8); */
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
            Player.tooglePlayPauseIco();//se descomento
            Player.resetSubtitulos();
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
            Player.tooglePlayPauseIco();// se descomento
            Player.resetSubtitulos();
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
        }, "fin_escena_8");
        
    

       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    //timelines de interaccion
    creaAnimInteractividad: () => {
        //sprints
        //Escena00
        ANIM.anim_interact_0_cenicienta = new TimelineMax({repeat:4}); // creo la interacción
        ANIM.anim_interact_0_cenicienta
            .addLabel('inicio')
            .fromTo('#escena_00 .cenicienta', 1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)},0)//posición inicial en 0 0 y luego animacion de cucu 17 fotogramaas
            .addLabel('final');
        ANIM.anim_interact_0_cenicienta.pause();

        /* Pajaro1 */
        ANIM.anim_interact_0_pajaros = new TimelineMax({repeat:2}); // creo la interacción
        ANIM.anim_interact_0_pajaros
          
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('pajaros_aleteando');
                Player.cambiaVolume('pajaros_aleteando', 0.2);
            },1)
            .fromTo('#escena_00 .pajaro1', 0.7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1)
            .fromTo('#escena_00 .pajaro2', 0.7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1 )
            .addLabel('final');
        ANIM.anim_interact_0_pajaros.pause();

        /* Madrastra */
        ANIM.anim_interact_0_mujeres = new TimelineMax({repeat:1}); // creo la interacción
        ANIM.anim_interact_0_mujeres
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('risa_malvada');
                Player.cambiaVolume('risa_malvada', 0.35);
            },2)
            .fromTo('#escena_00 .hermanastra1',1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},2)
            .fromTo('#escena_00 .madrastra', 1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},2)
            .fromTo('#escena_00 .hermanastra2', 1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},2)
            .addLabel('final');
        ANIM.anim_interact_0_mujeres.pause();

        /* Fuego Estufa */
        ANIM.anim_interact_0_fuego = new TimelineMax({repeat:-1}); // creo la interacción
        ANIM.anim_interact_0_fuego
            .addLabel('inicio')
            .fromTo('#escena_00 .fuego', 0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1)
            .addLabel('final');
        ANIM.anim_interact_0_fuego.pause();

        ANIM.anim_interact_0_humo = new TimelineMax(); // creo la interacción
            let humos = 30;
            for(let i=humos-1; i>=0; i--){
                let pos1=Math.floor((Math.random() * 100) + 1);
                let pos2=Math.floor((Math.random() * 100) + 1);
                let delay=Math.random()*10;
                //let speed=(Math.random() * 0.5) + 0.2;
                droplet1= document.createElement("div");
                droplet1.className = "spriteHumo2 humo2";
                droplet1.style.left = pos1 + "%";

                droplet2= document.createElement("div");
                droplet2.className = "spriteHumo1 humo1";
                droplet2.style.left = pos2 + "%";

                ANIM.anim_interact_0_humo
                
                .to(droplet1, 2, {y:-800, delay:delay, repeat:6, ease:Linear.easeNone, opacity:1},1)
                .to(droplet2, 2, {y:-800, delay:delay, repeat:6, ease:Linear.easeNone, opacity:1},1)
                //.to(droplet1, 0.5, {repeat:-1, rotationY: 1080}, 0)
                //.to(droplet2, 0.3, {repeat:-1, rotationY: 1080}, 1)
                
                document.getElementById("interact_00").appendChild(droplet2);
                document.getElementById("interact_00").appendChild(droplet1);
            }
        ANIM.anim_interact_0_humo.pause();
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
                .to('#escena_01 .cenicienta02',3.7,{x:800, ease:"circ.out"},0)
                .fromTo('#escena_01 .cenicienta02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:3},0)
                .addLabel('final');     
        ANIM.anim_interact_1_cenicienta.pause();

        /* Mensajero - PAJE */
        ANIM.anim_interact_1_paje = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1_paje
                .addLabel('inicio')
                .fromTo('#escena_01 .mensajero', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)}, 2)
                .addLabel('final');     
        ANIM.anim_interact_1_paje.pause();
        
        /* Publico */
        ANIM.anim_interact_1_publico = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1_publico
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('hombre_pensativo');
                Player.cambiaVolume('hombre_pensativo', 0.4);
            },4)
            .fromTo('#escena_01 .guerrero', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},4)
            .fromTo('#escena_01 .doncella', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},4)
            .fromTo('#escena_01 .granjero', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},4)
            .fromTo('#escena_01 .pintor', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},4)
            .addLabel('final');
        ANIM.anim_interact_1_publico.pause();
        
        /* Mujeres */
        ANIM.anim_interact_1_mujeres = new TimelineMax(); // creo la interacción
        ANIM.anim_interact_1_mujeres
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('suspiro_de_mujer');
                Player.cambiaVolume('suspiro_de_mujer', 0.3);
            }, 6)
            .fromTo('#escena_01 .hermana1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, 5.5)
            .fromTo('#escena_01 .hermana2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, 5.5)
            .addLabel('final');
        ANIM.anim_interact_1_mujeres.pause();

        /* Madrastra Pensando */
        ANIM.anim_interact_1_madrastra= new TimelineMax();
        ANIM.anim_interact_1_madrastra
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('madrastra_pensando');
                Player.cambiaVolume('madrastra_pensando', 0.3);
            }, 8)
            .fromTo('#escena_01 .madrastra_es01', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, 7.5)
            .addLabel('final');
        ANIM.anim_interact_1_madrastra.pause();
        
        /* Nubes*/
        ANIM.anim_interact_1_nubes= new TimelineMax({repeat:1, yoyo:true}); // creo la interacción
        /* Comente solo nubes pq no aparecia la animación del sool */
        ANIM.anim_interact_1_nubes
            .addLabel('inicio')     
            .fromTo('#escena_01 .solAlternativo', 5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:-1},0)
            .fromTo('#escena_01 .nube1', 50,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', x:950},0)
            .fromTo('#escena_01 .nube2', 50,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', x:-950},0) 
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
                Player.cambiaVolume('risa_malvada', 0.3);
            })
            .fromTo('#escena_02 .hermana2Es02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:2})
            .fromTo('#escena_02 .hermanaEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:2}, "-=2")
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
               Player.cambiaVolume('no_de_madrastra', 0.3);
           }, "+=3")
           //ROTAR LA MANO!!!!
           //.fromTo('#escena_02 .manoEs02', 0.8, {rotation:0}, {rotation:15, ease:Power4.easeOut})
           //.fromTo('#escena_02 .manoEs02', 0.8, {rotation:0}, {rotation:-2, ease:Power4.easeOut})
           
           /* .fromTo('#escena_02 .manoEs02', 0.7, {rotation:0}, {rotation:15, ease:Power4.easeOut})
           .fromTo('#escena_02 .manoEs02', 0.7, {rotation:0}, {rotation:-5, ease:Power4.easeOut}) */
           
           //Solución super ideal!!!
           .fromTo('#escena_02 .manoEs02', 0.2, {rotation:8}, {rotation:"-=15.4", yoyo:true, repeat:6})

           //.fromTo('#escena_02 .manoEs02', 0.7, {rotation:0}, {rotation:"-=20", yoyo:true, repeat:4})
           

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
                .fromTo('#escena_02 .cenicientaEs02', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:0}, "+=1")
                .addLabel('final');     
        ANIM.anim_interact_2_cenicienta.pause();
        
        /***************************************************************************************/
        

        /***************************************************************************************/

        //Escena03
        /* esto cambiar ya esta en pre-animación */
        ANIM.anim_interact_3_nubes = new TimelineMax({repeat:-1, yoyo:true});
        ANIM.anim_interact_3_nubes 
                .addLabel('inicio')     
                .fromTo('#escena_03 .nube103', 30,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:570},0
                    )
                .fromTo('#escena_03 .nube203', 30,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:-570},0
                    ) 
                .fromTo('#escena_03 .nube303', 30,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:570},0
                    ) 
                   
                .addLabel('final');
        ANIM.anim_interact_3_nubes.pause();
        
        ANIM.anim_interact_3_transform = new TimelineMax({repeat:3});
        ANIM.anim_interact_3_transform
                .addLabel('inicio')
                .fromTo('#escena_03 .raton1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
                .fromTo('#escena_03 .raton2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},0.5)
                .addLabel('final');     
        ANIM.anim_interact_3_transform.pause();
        
    
        ANIM.anim_interact_3_hada = new TimelineMax();
        ANIM.anim_interact_3_hada
                .addLabel('inicio')
                //Forma usando 3 sprites(falta mejorar):
                //.fromTo('#escena_03 .brazoAdaVarita', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)},0)
                //Forma usando 1 sprite
                //.fromTo('#escena_03 .brazoAdaVarita', 0,{rotation:35},{rotation:35})
                /* .fromTo('#escena_03 .adaMadrina', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', autoAlpha:1},0)
                .fromTo('#escena_03 .brazoAda', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', autoAlpha:1},0)
                .fromTo('#escena_03 .brazoAdaVarita', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', autoAlpha:1},0.2) */
               /*  .fromTo('#escena_03 .cenicienta03', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1) */
                //Falta perfeccionar el movimiento de la varita
                .from('#escena_03 .brazoAdaVarita', 1.5,{rotation:10}, {rotation: -18, yoyo:true, repeat:0, ease: SteppedEase.config(1)})   
                //.fromTo('#escena_03 .brazoAdaVarita', 1.8, {rotation:15}, {rotation:35,ease:Power4.easeOut},'+=0.4')
                .fromTo('#escena_03 .cenicienta03',1,{backgroundPosition:'-200% 0%'},{autoAlpha:0},'-=0.4')
                .addCallback(function(){
                    Player.playSoundFX('magic_wand');
                    Player.cambiaVolume('magic_wand', 0.5);
                }, 1.5)
                .fromTo('#escena_03 .princesa03', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',ease: SteppedEase.config(2), autoAlpha:1},1)

                .fromTo('#escena_03 .raton1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',css:{scaleX:1.5, scaleY:1.5}, ease: SteppedEase.config(2)},1)
                .fromTo('#escena_03 .raton2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',css:{scaleX:1.5, scaleY:1.5}, ease: SteppedEase.config(2)},1)
                .fromTo('#escena_03 .calabaza', 3,{backgroundPosition: '0% 0%'},{css:{scaleX:1.4, scaleY:1.4},ease:Elastic.easeOut.config(1,0.2)},1)
                .fromTo('#escena_03 .raton1',2,{backgroundPosition:'0% 0%'},{autoAlpha:0}, 1)
                .fromTo('#escena_03 .raton2', 2,{backgroundPosition:'0% 0%'},{autoAlpha:0},1)
                
                .fromTo('#escena_03 .caballo1', 3,{backgroundPosition:'0% 0%'},{autoAlpha:1},2)
                .fromTo('#escena_03 .caballo2', 3,{backgroundPosition:'0% 0%'},{autoAlpha:1},2)
                .addCallback(function(){
                    Player.playSoundFX('relincho_de_caballo');
                    Player.cambiaVolume('relincho_de_caballo', 0.1);
                }, 4)
                .fromTo('#escena_03 .caballo1',2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',ease: SteppedEase.config(2), repeat: 6}, 4)
                .fromTo('#escena_03 .caballo2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',ease: SteppedEase.config(2), repeat: 6}, 4.2)

                .fromTo('#escena_03 .calabaza', 2,{backgroundPosition: '0% 0%'},{css:{scaleX:1.4, scaleY:1.4},ease:Elastic.easeOut.config(1,0.2)}, 2)

                .fromTo('#escena_03 .calabaza', 2,{backgroundPosition:'0% 0%'},{autoAlpha:0},2)
                //.fromTo('#escena_03 .carruaje', 1,{backgroundPosition:'0% 0%'},{opacity: 1},'-=25')

                .fromTo('#escena_03 .carruaje', 4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease:Elastic.easeOut.config(1,0.2), css:{scaleX:1.05, scaleY:1.05, opacity:1}}, 3)

                //LA CENICIENTA SE VUELVE AL PRIMER SPRITE ANTESDE DESVANECERSE() 
 
                .addLabel('final');     
                //NOTA, mientras mayor la rotacion inicial del objeto mas abajo o arriba se posiciona y viceversa
        ANIM.anim_interact_3_hada.pause();

                
        /* NIM.anim_interact_3_transform2 = new TimelineMax({repeat:3});
        ANIM.anim_interact_3_transform2
                .addLabel('inicio')
                .fromTo('#escena_03 .cenicienta03',3,{backgroundPosition:'200% 0%'},{ease: SteppedEase.config(1), autoAlpha:0},4.5)
                .fromTo('#escena_03 .princesa03', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%',ease: SteppedEase.config(2), autoAlpha:1})

                .addLabel('final');     
        ANIM.anim_interact_3_transform2.pause();  */

        /***************************************************************************************/

        //Escena04
            //Despues de ejecutar el SPRINT, debe volver al inicio (no se me ocurrio ideas)
            ANIM.anim_interact_4_pareja = new TimelineMax();
            ANIM.anim_interact_4_pareja
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('cancion_baile_cortada');
                    Player.cambiaVolume('cancion_baile_cortada', 0.5);
                },0)
                .fromTo('#escena_04 .principesEs04',2.4,{backgroundPosition:'0% 0%', yoyo:true}, {backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), x:300, repeat:6},0)
                //.to('#escena_04 .principesEs04', 2.5,{x:-15,backgroundPosition:'-200% 0%',ease: SteppedEase.config(2)})
                .to('#escena_04 .principesEs04', 2,{x:-15, yoyo:true})
                .addLabel('final')
                //Intente como volverlo al inicio, falta ese **detalle
            ANIM.anim_interact_4_pareja.pause(); 

        //Aqui bajo aumentarle en segundos "+=1" respecto al baile de pareja

           //Dimsminui la repeticion de 3 => 1
            ANIM.anim_interact_4_reyes = new TimelineMax();
            ANIM.anim_interact_4_reyes
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('mujer_asombrada');
                    Player.cambiaVolume('mujer_asombrada', 0.5);
                }, "+=2")
                .fromTo('#escena_04 .reina',1,{backgroundPosition:'0% 0%'}, {backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
                .fromTo('#escena_04 .rey',1,{backgroundPosition:'0% 0%'}, {backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
                .addLabel('final');
            ANIM.anim_interact_4_reyes.pause(); 

            ANIM.anim_interact_4_mujeres= new TimelineMax(); // creo la interacción
            ANIM.anim_interact_4_mujeres
                .addLabel('inicio')
                .fromTo('#escena_04 .hermanaEs04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "+=4")
                .fromTo('#escena_04 .madrastraEs04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
                .fromTo('#escena_04 .hermana2Es04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
                .addLabel('final');
            ANIM.anim_interact_4_mujeres.pause();

            /* aguja del minutero ya esta probado */
            ANIM.anim_interact_4_puntero = new TimelineMax();
            ANIM.anim_interact_4_puntero
                .addLabel('inicio')
                .to('#escena_04 .puntero', 9.2, {rotation: "360", repeat:1, ease: Linear.easeNone,transformOrigin: '3px 4px'},0)
                .addLabel('final');
            ANIM.anim_interact_4_puntero.pause();      
            


            ANIM.anim_interact_5_nubes = new TimelineMax({repeat:1, yoyo:true});
            ANIM.anim_interact_5_nubes 
                .addLabel('inicio')     
                .fromTo('#escena_05 .nube3Es05', 60,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:450},0
                    )
                .fromTo('#escena_05 .nube1Es05', 70,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:-450},0
                    ) 
                .fromTo('#escena_05 .nube2Es05', 60,
                    {backgroundPosition:'0% 0%'},
                    {backgroundPosition:'-100% 0%', x:450},5
                    ) 
                   
                .addLabel('final');
            ANIM.anim_interact_5_nubes.pause(); 

/* 
            ANIM.anim_interact_5_principes= new TimelineMax(); // creo la interacción
            ANIM.anim_interact_5_principes
                .addLabel('inicio')
                .addCallback(function(){
                  
                })
                .fromTo('#escena_05 .cenicientaEs05', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)})
                .to('#escena_05 .principesEs05', 1,{x:-900, ease:"circ.out"})
                .fromTo('#escena_05 .principesEs05', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2),repeat:3},2)
                .addLabel('final');
            ANIM.anim_interact_5_principes.pause();
 */
            ANIM.anim_interact_5_principes= new TimelineMax(); // creo la interacción
            ANIM.anim_interact_5_principes
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('pasos_en_la_escalera_cortado');
                    Player.cambiaVolume('pasos_en_la_escalera_cortado', 1);
                    //Player.playSoundFX('zapatilla_brillante');
                    //Player.cambiaVolume('zapatilla_brillante', 0.5);
                })
                //Zapatito fx sound (audio cortado) y animacion de cenicienta bajando escaleras
                .to('#escena_05 .cenicientaEs05', 4, {y: 750, x:-800, ease:SteppedEase.config(25)})
                .fromTo('#escena_05 .cenicientaEs05', 0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:7}, "-=4")
                .addCallback(function(){
                    Player.playSoundFX('zapatilla_brillante');
                    Player.cambiaVolume('zapatilla_brillante', 0.5);
                }, "-=3")
                //Respiracion agitada fx sound y animacion de Principe                
                .addCallback(function(){
                    Player.playSoundFX('respiracion_agitada');
                    Player.cambiaVolume('respiracion_agitada', 1);
                }, "+=1")
                .to('#escena_05 .principesEs05', 1,{x:-890, ease:"circ.out"}, "-=1")
                .fromTo('#escena_05 .principesEs05', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 1})
                .addLabel('final');
            ANIM.anim_interact_5_principes.pause();

            /* Animacion de madrastra y cenicienta Nota: Ajustar ese retraso al inicio tiempos */
            ANIM.anim_interact_6_madrastra= new TimelineMax(); // creo la interacción
            ANIM.anim_interact_6_madrastra
                .addLabel('inicio')
                //Abimacion madrastra
                .fromTo('#escena_06 .madrastra06', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:4}, "-=22")
                .fromTo('#escena_06 .cenicienta06', 7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:1}, "-=20")
                .addLabel('final');
            ANIM.anim_interact_6_madrastra.pause();

            /* Animacion Hermanastras y Príncipe Nota: Ajustar ese retraso al inicio tiempos */
            ANIM.anim_interact_6_hermanastras= new TimelineMax(); // creo la interacción
            ANIM.anim_interact_6_hermanastras
                .addLabel('inicio')
                //Animacion hermanastra - animación tiempos ok
                .fromTo('#escena_06 .hermana206', 9,{backgroundPosition:'200% 0%'},{backgroundPosition:'0% 0%', ease: SteppedEase.config(2)}, "-=10")
                //sonido fx hermanastra206, 1 segundo y tiempos ok
                .addCallback(function(){
                    Player.playSoundFX('zapato_apretado');
                    Player.cambiaVolume('zapato_apretado', 1);
                }, "-=6.8")
                //animación principe y tiempos ok
                .fromTo('#escena_06 .principe06',7.9,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "-=8.4")
                //Mover la hermanastra de color verde
                //Sugerencia de Joaco
                .to('#escena_06 .hermana206', 0.0001, {x:-345}, "-=3")
                .to('#escena_06 .hermana106', 0.0001, {x:550}, "-=3")
                
                //desaparecer hermanastra en milisegundos
                //.to('#escena_06 .hermana206', 0.1, {autoAlpha:0}, "-=4")
                //Comentado ++++++
                //.to('#escena_06 .hermana106', 0.1, {autoAlpha:0}, "-=4")
                
                //.to('#escena_06 .hermana206', 0.0001, {x:-290}, "-=3.8")
                //Comentado ++++++
                //.to('#escena_06 .hermana106', 0.0001, {x:550}, "-=3.8")
                
                //.to('#escena_06 .hermana206', 0.1, {autoAlpha:1}, "-=3")
                //Comentado ++++++
                //.to('#escena_06 .hermana106', 1, {autoAlpha:1}, "-=3.1")
                
                //Sprint hermanastra106 OK
                .fromTo('#escena_06 .hermana106', 9, {backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)}, "-=3.1")
                //Probar sonidos Fx OK
                .addCallback(function(){
                    Player.playSoundFX('zapato_apretado');
                    Player.cambiaVolume('zapato_apretado', 1);
                }, "-=5")
                //Animacion 2 Príncipe con hermanastra106
                .fromTo('#escena_06 .principe06',7.9,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "-=7")
                //Cambio a posiciones actuales-Primeras
                .to('#escena_06 .hermana206', 0.0001, {x:0}, "-=2")
                .to('#escena_06 .hermana106', 0.0001, {x:0}, "-=2")

                //.fromTo('#escena_06 .hermana106', 9,{backgroundPosition:'200% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(2)},)

                //PARO AQUI SINO ME VUELVO LOCO
                //ahora toca mover la hermanastra morado a la hermanastra verde
                //La primera imagen de ese sprint lo desaparecemos
                //Lo movemos
                //Lo aparecemos en la segunda imagen hasta la tercera imagen
                //Pero quedará en la primera imagen

                //anñadir a esto 
                //la segunda imagen 
                //.to('#escena_06 .hermana106', 0.0001, {x:550}, "-=2.8")
                //ajustes hermanastras
                //desaparecer la ultima escena y luevo volverlo aparecer en segundos
                //.to('#escena_06 .hermana106', 0.1, {autoAlpha:0, x:340}, "-=3.5")
                //.to('#escena_06 .hermana106', 0.1, {autoAlpha:1}, "-=2")
                .addLabel('final');
            ANIM.anim_interact_6_hermanastras.pause();





            ANIM.anim_interact_7_principes = new TimelineMax(); // creo la interacción
            ANIM.anim_interact_7_principes
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('zapatilla_brillante');
                    Player.cambiaVolume('zapatilla_brillante', 1);
                }, 2.5)
                .fromTo('#escena_07 .principe07', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, -0.1)
                .fromTo('#escena_07 .cenicienta07', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},0) 
                .fromTo('#escena_07 .hermana107', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},0)
                .fromTo('#escena_07 .madrastra07', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},0)
                .fromTo('#escena_07 .hermana207', 8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},0)
                .fromTo('#escena_07 .luz', 2,{backgroundPosition:'0% 0%', opacity:0},{backgroundPosition:'-100% 0%',opacity:0.7, ease:SteppedEase.config(1)}, 1.5)
                .to('#escena_07 .luz', 0.0001, {autoAlpha:0}, "-=2.8")
                .addLabel('final');
            ANIM.anim_interact_7_principes.pause(); 


            /* Animacion escena08 */
            /* let confetis = 50;
            for(let i = confetis-1; i>=0; i--){
                
                ANIM.anim_interact_8_confetti = new TimelineMax(); // creo la interacción
                let position = Math.floor((Math.random()*100)+1);
                let delay = Math.random();
                let speed = (Math.random() * 0.5) + 0.2

                droplet = $(".spriteAzul .Azul");
                droplet.style.left = position + "%";

                ANIM.anim_interact_8_confetti
                    .addLabel('inicio')
                    .to(".spriteAzul .Azul", 1, {y:500, delay: delay, repeat: -1, ease:Linear.easeNone})
                    .addLabel('final');
                ANIM.anim_interact_8_confetti.pause(); 
            } */

            ANIM.anim_interact_8_confetti = new TimelineMax(); // creo la interacción
            let confetis = 25;
            for(let i=confetis-1; i>=0; i--){
                let pos1=Math.floor((Math.random() * 100) + 1);
                let pos2=Math.floor((Math.random() * 100) + 1);
                let delay=Math.random();
                //let speed=(Math.random() * 0.5) + 0.2;
                droplet1= document.createElement("div");
                droplet1.className = "spriteAzul Azul";
                droplet1.style.left = pos1 + "%";

                droplet2= document.createElement("div");
                droplet2.className = "spriteRojo Rojo";
                droplet2.style.left = pos2 + "%";

                ANIM.anim_interact_8_confetti
                
                .to(droplet1, 1.6, {y:900, delay:delay, repeat:6, ease:Linear.easeNone, rotationY: 90},0)
                .to(droplet1, 0.5, {repeat:-1, rotationY: 1080}, 0)
                .to(droplet2, 0.3, {repeat:-1, rotationY: 1080}, 1)
                .to(droplet2, 1.6, {y:900, delay:delay, repeat:6, ease:Linear.easeNone, rotationY: 90})
                
                document.getElementById("interact_08").appendChild(droplet1);
                document.getElementById("interact_08").appendChild(droplet2);
            }
            ANIM.anim_interact_8_confetti.pause();
           
            ANIM.anim_interact_8_reyes = new TimelineMax();
            ANIM.anim_interact_8_reyes
                .addLabel('inicio')
                .addCallback(function(){
                    /* No hay el efecto de sonido "Publico celebrando" */
                })
                .fromTo('#escena_08 .reyes08', 1, {backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:10})
                .fromTo('#escena_08 .mujeres08', 1, {backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:10},1)
                .fromTo('#escena_08 .principes08', 3, {backgroundPosition:'100% 0%'},{backgroundPosition:'0% 0%', ease: SteppedEase.config(1), repeat: 3},0)
                .addLabel('final');
            ANIM.anim_interact_8_reyes.pause();
                
                /* ANIM.anim_interact_8_todas = new TimelineMax({repeat:3});
                ANIM.anim_interact_8_todas
                .addLabel('inicio')
                .addCallback(function(){
                    
                })
                .addLabel('final');
                ANIM.anim_interact_8_todas.pause();
                */
            /* ANIM.anim_interact_8_principes = new TimelineMax({repeat:3});
            ANIM.anim_interact_8_principes
               .addLabel('inicio')
                .to('#escena_08 .principes08', 0.001, {autoAlpha:0},"-=4")
                .to('#escena_08 .principes08', 0.001, {backgroundPosition:'100% 0%', autoAlpha:1})
                .addLabel('final');
            ANIM.anim_interact_8_principes.pause(); */
            
            
        //Array de anin interacts
        ANIM.arr_interacts = [

            ANIM.anim_interact_0_cenicienta,
            ANIM.anim_interact_0_pajaros,
            ANIM.anim_interact_0_mujeres,
            ANIM.anim_interact_0_fuego,
            ANIM.anim_interact_0_humo,
            
            ANIM.anim_interact_1_cenicienta,
            ANIM.anim_interact_1_paje,
            ANIM.anim_interact_1_publico,
            ANIM.anim_interact_1_mujeres,
            ANIM.anim_interact_1_madrastra,
            ANIM.anim_interact_1_nubes,


            ANIM.anim_interact_2_mujeres3,
            ANIM.anim_interact_2_madrastraEnojada,
            ANIM.anim_interact_2_cenicienta,

            /*Pendientes los ANIM de la escena 3*/
            ANIM.anim_interact_3_nubes,
            ANIM.anim_interact_3_transform,
            ANIM.anim_interact_3_hada,
            ANIM.anim_interact_3_transform2,

            ANIM.anim_interact_4_pareja,
            ANIM.anim_interact_4_reyes,
            ANIM.anim_interact_4_mujeres,
            ANIM.anim_interact_4_puntero,


            ANIM.anim_interact_5_nubes,
            ANIM.anim_interact_5_cenicienta,
            ANIM.anim_interact_5_principes,

            ANIM.anim_interact_6_madrastra,
            ANIM.anim_interact_6_hermanastras,

            ANIM.anim_interact_7_principes,


            ANIM.anim_interact_8_reyes,
            ANIM.anim_interact_8_todas,
            ANIM.anim_interact_8_principes,
            
            ANIM.anim_interact_8_confetti,
          
            
           
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
                        ANIM.anim_interact_0_pajaros.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_pajaros.play(0);
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
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_humo.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_humo.play(0);
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
                            ANIM.anim_interact_3_nubes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_nubes.play(0);
                        });
                    }

                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_3_transform.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_transform.play(0);
                        });
                    }
                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_3_hada.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_hada.play(0);
                        });
                    };
                    if(btn.hasClass('primario')){
                        btn.click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_3_transform2.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_transform2.play(0);
                        });
                    }
                 break;
             case 4:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_pareja.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_pareja.play(0);
                    });
                }

                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_reyes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_reyes.play(0);
                    });
                }

                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_mujeres.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_mujeres.play(0);
                    });
                 } 

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_puntero.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_puntero.play(0);
                    });
                 } 
                 break;
             case 5:
                    
                 if (btn.hasClass('primario')) {
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_nubes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_nubes.play(0);                 
                    });
                }

                if (btn.hasClass('primario')) {
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_principes.eventCallback("onComplete", muestralo, [$(this), cb]);
                        ANIM.anim_interact_5_principes.play(0);   
                    });
                }
                
                
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_madrastra.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6_madrastra.play(0);
                        
                    });
                }
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_hermanastras.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6_hermanastras.play(0);
                        
                    });
                }
                
                 break;
             case 7:
                 

                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_principes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7_principes.play(0);
                        
                    });
                 }
                 break;

             case 8:   
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_reyes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_reyes.play(0);
                    });
                }

                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_confetti.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_confetti.play(0);
                    });
                } 
            
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_todas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_todas.play(0);
                    });
                } 

                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_8_principes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_principes.play(0);
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