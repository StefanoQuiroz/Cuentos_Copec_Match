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
        {nombre:"bosque_nocturno", url:"audio/cenicienta/fx/bosque_nocturno.mp3"},
        {nombre:"campanadas_media_noche", url:"audio/cenicienta/fx/campanadas_de_media_noche.mp3"},
        {nombre:"cancion_baile", url:"audio/cenicienta/fx/cancion_de_baile.mp3" },
        {nombre:"cancion_baile_cortada", url:"audio/cenicienta/fx/cancion_de_baile_cortada.mp3" },
        {nombre:"celebracion_campanas", url:"audio/cenicienta/fx/celebracion_campanas.mp3" },
        {nombre:"cenicienta_caminando", url:"audio/cenicienta/fx/cenicienta_caminando.mp3" },
        {nombre:"cenicienta_caminando_cortado", url:"audio/cenicienta/fx/cenicienta_caminando_cortado.mp3" },
        {nombre:"cenicienta_preocupada", url:"audio/cenicienta/fx/cenicienta_preocupada.mp3" },
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
                    tiempo:[0,5.4,10] 
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
                    tiempo:[0,5.8,0.5] 
                },
                {
                    texto: "El príncipe bailó con ella toda la noche;<br>y ni la madrastra ni sus hermanastras reconocieron a la joven.",
                    tiempo:[6.3,14.1,0.5] 
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

    pauseAnimaciones: () => {

        try { ANIM.anim_interact_2_madrastraEnojada.pause(0) }
        catch (err) { }
    }, 


    init: () => {
        ANIM.creapartes();
          
        Player.creaMainTL();
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
        /* 
        ANIM.main_tl.addLabel('4_0_audio', 'escena_4+=0.1');
        ANIM.main_tl.addLabel('4_0_audio_fade', '4_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('cancion_baile');
        }, '4_0_audio');
        
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('cancion_baile',1,0,2);
        }, "4_0_audio_fade"); 
        */

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
        }, "escena_0"); 
     
        ANIM.main_tl.addCallback(function () {
            Player.activaBtnSiguiente(); 
            ANIM.main_tl.pause(); 
            ANIM.interactividad(0); 
            Player.tooglePlayPauseIco(); 
            Player.resetSubtitulos();
          
        }, "fin_escena_0"); 

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
            Player.playSoundFX('bosque_nocturno');
            Player.cambiaVolume('bosque_nocturno',0.5);
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
            Player.tooglePlayPauseIco();
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
            Player.tooglePlayPauseIco();
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
            Player.playSoundFX('celebracion_campanas');
            Player.cambiaVolume('celebracion_campanas',0.4);
        }, "fin_escena_8");
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad: () => {
        //sprints
        //Escena00
        ANIM.anim_interact_0_cenicienta = new TimelineMax({repeat:4});
        ANIM.anim_interact_0_cenicienta
            .addLabel('inicio')
            .fromTo('#escena_00 .cenicienta', 1.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)},0)//posición inicial en 0 0 y luego animacion de cucu 17 fotogramaas
            .addLabel('final');
        ANIM.anim_interact_0_cenicienta.pause();

        /* Pajaro1 */
        ANIM.anim_interact_0_pajaros = new TimelineMax({repeat:2}); 
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
        ANIM.anim_interact_0_mujeres = new TimelineMax({repeat:1}); 
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
        ANIM.anim_interact_0_fuego = new TimelineMax({repeat:-1}); 
        ANIM.anim_interact_0_fuego
            .addLabel('inicio')
            .fromTo('#escena_00 .fuego', 0.4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},1)
            .addLabel('final');
        ANIM.anim_interact_0_fuego.pause();

        ANIM.anim_interact_0_humo = new TimelineMax(); 
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
                document.getElementById("interact_00").appendChild(droplet2);
                document.getElementById("interact_00").appendChild(droplet1);
            }
        ANIM.anim_interact_0_humo.pause();
       
        ANIM.anim_interact_1_cenicienta = new TimelineMax();
        ANIM.anim_interact_1_cenicienta
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('cenicienta_caminando_cortado');
                Player.cambiaVolume('cenicienta_caminando_cortado', 0.3);
            },0)
            .to('#escena_01 .cenicienta02',3.7,{x:800, ease:"circ.out"},0)
            .fromTo('#escena_01 .cenicienta02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:3},0)
            .addLabel('final');     
        ANIM.anim_interact_1_cenicienta.pause();

        ANIM.anim_interact_1_paje = new TimelineMax();
        ANIM.anim_interact_1_paje
            .addLabel('inicio')
            .fromTo('#escena_01 .mensajero', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)}, 2)
            .addLabel('final');     
        ANIM.anim_interact_1_paje.pause();
        
        ANIM.anim_interact_1_publico = new TimelineMax();
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

        ANIM.anim_interact_1_mujeres = new TimelineMax();
        ANIM.anim_interact_1_mujeres
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('suspiro_de_mujer');
                Player.cambiaVolume('suspiro_de_mujer', 0.4);
            }, 6)
            .fromTo('#escena_01 .hermana1', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, 5.5)
            .fromTo('#escena_01 .hermana2', 2,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, 5.5)
            .addLabel('final');
        ANIM.anim_interact_1_mujeres.pause();

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

        ANIM.anim_interact_1_nubes= new TimelineMax({repeat:1, yoyo:true}); 
        ANIM.anim_interact_1_nubes
            .addLabel('inicio')     
            .fromTo('#escena_01 .solAlternativo', 5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:-1},0)
            .fromTo('#escena_01 .nube1', 50,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', x:950},0)
            .fromTo('#escena_01 .nube2', 50,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', x:-950},0) 
            .addLabel('final');
        ANIM.anim_interact_1_nubes.pause(); 

        ANIM.anim_interact_2_mujeres3 = new TimelineMax();
        ANIM.anim_interact_2_mujeres3
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('risa_malvada');
                Player.cambiaVolume('risa_malvada', 0.3);
            },0)
            .fromTo('#escena_02 .hermana2Es02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:1},0)
            .fromTo('#escena_02 .hermanaEs02', 0.8,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:1},0)
            .addLabel('final');
        ANIM.anim_interact_2_mujeres3.pause();
        
        ANIM.anim_interact_2_madrastraEnojada = new TimelineMax();
        ANIM.anim_interact_2_madrastraEnojada
           .addLabel('inicio')
           .addCallback(function(){
               Player.playSoundFX('no_de_madrastra');
               Player.cambiaVolume('no_de_madrastra', 0.3);
           }, 2.5)
           .fromTo('#escena_02 .manoEs02', 0.2, {rotation:8}, {rotation:"-=15.4", yoyo:true, repeat:6}, 2.5)
           .addLabel('final');
        ANIM.anim_interact_2_madrastraEnojada.pause();

        ANIM.anim_interact_2_cenicienta = new TimelineMax();
        ANIM.anim_interact_2_cenicienta
                .addLabel('inicio')
                .addCallback(function(){
                    Player.playSoundFX('cenicienta_preocupada');
                    Player.cambiaVolume('cenicienta_preocupada', 0.2);
                }, 3.5)
                .fromTo('#escena_02 .cenicientaEs02', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:0}, 3)
                .addLabel('final');     
        ANIM.anim_interact_2_cenicienta.pause();
        
        ANIM.anim_interact_3_nubes = new TimelineMax({repeat:-1, yoyo:true});
        ANIM.anim_interact_3_nubes 
                .addLabel('inicio')     
                .fromTo('#escena_03 .nube103', 30,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:570},0)
                .fromTo('#escena_03 .nube203', 30,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:-570},0) 
                .fromTo('#escena_03 .nube303', 30,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:570},0) 
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
                .from('#escena_03 .brazoAdaVarita', 1.5,{rotation:10}, {rotation: -18, yoyo:true, repeat:0, ease: SteppedEase.config(1)})
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
                .fromTo('#escena_03 .carruaje', 4,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease:Elastic.easeOut.config(1,0.2), css:{scaleX:1.05, scaleY:1.05, opacity:1}}, 3)
                .addLabel('final');     
        ANIM.anim_interact_3_hada.pause();

        ANIM.anim_interact_4_pareja = new TimelineMax();
        ANIM.anim_interact_4_pareja
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('cancion_baile_cortada');
                Player.cambiaVolume('cancion_baile_cortada', 0.5);
            },0)
            .fromTo('#escena_04 .principesEs04',2.4,{backgroundPosition:'0% 0%'}, {backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), x:300, repeat:6},0)
            .to('#escena_04 .principesEs04', 2,{x:-15, yoyo:true})
            .addLabel('final')
        ANIM.anim_interact_4_pareja.pause(); 

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

        ANIM.anim_interact_4_mujeres= new TimelineMax();
        ANIM.anim_interact_4_mujeres
            .addLabel('inicio')
            .fromTo('#escena_04 .hermanaEs04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "+=4")
            .fromTo('#escena_04 .madrastraEs04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
            .fromTo('#escena_04 .hermana2Es04', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)},"+=0")
            .addLabel('final');
        ANIM.anim_interact_4_mujeres.pause();

        ANIM.anim_interact_4_puntero = new TimelineMax();
        ANIM.anim_interact_4_puntero
            .addLabel('inicio')
            .to('#escena_04 .puntero', 9.2, {rotation: "360", repeat:1, ease: Linear.easeNone,transformOrigin: '3px 4px'},0)
            .addLabel('final');
        ANIM.anim_interact_4_puntero.pause();      
        
        ANIM.anim_interact_5_nubes = new TimelineMax({repeat:1, yoyo:true});
        ANIM.anim_interact_5_nubes 
            .addLabel('inicio')     
            .fromTo('#escena_05 .nube3Es05', 60,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:450},0)
            .fromTo('#escena_05 .nube1Es05', 70,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:-450},0) 
            .fromTo('#escena_05 .nube2Es05', 60,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', x:450},5) 
            .addLabel('final');
        ANIM.anim_interact_5_nubes.pause(); 

        ANIM.anim_interact_5_principes= new TimelineMax(); 
        ANIM.anim_interact_5_principes
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('pasos_en_la_escalera_cortado');
                Player.cambiaVolume('pasos_en_la_escalera_cortado', 1);
            })
            .to('#escena_05 .cenicientaEs05', 4, {y: 750, x:-800, ease:SteppedEase.config(25)})
            .fromTo('#escena_05 .cenicientaEs05', 0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:7}, "-=4")
            .addCallback(function(){
                Player.playSoundFX('zapatilla_brillante');
                Player.cambiaVolume('zapatilla_brillante', 0.5);
            }, "-=3")              
            .addCallback(function(){
                Player.playSoundFX('respiracion_agitada');
                Player.cambiaVolume('respiracion_agitada', 1);
            }, "+=1")
            .to('#escena_05 .principesEs05', 1,{x:-890, ease:"circ.out"}, "-=1")
            .fromTo('#escena_05 .principesEs05', 1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat: 1})
            .addLabel('final');
        ANIM.anim_interact_5_principes.pause();

        ANIM.anim_interact_6_madrastra= new TimelineMax(); 
        ANIM.anim_interact_6_madrastra
            .addLabel('inicio')
            .fromTo('#escena_06 .madrastra06', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:4}, "-=22")
            .fromTo('#escena_06 .cenicienta06', 7,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:1}, "-=20")
            .addLabel('final');
        ANIM.anim_interact_6_madrastra.pause();

        ANIM.anim_interact_6_hermanastras= new TimelineMax(); 
        ANIM.anim_interact_6_hermanastras
            .addLabel('inicio')
            .fromTo('#escena_06 .hermana206', 9,{backgroundPosition:'200% 0%'},{backgroundPosition:'0% 0%', ease: SteppedEase.config(2)}, "-=10")
            .addCallback(function(){
                Player.playSoundFX('zapato_apretado');
                Player.cambiaVolume('zapato_apretado', 1);
            }, "-=6.8")
            .fromTo('#escena_06 .principe06',7.9,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "-=8.4")
            .to('#escena_06 .hermana206', 0.0001, {x:-345}, "-=3")
            .to('#escena_06 .hermana106', 0.0001, {x:550}, "-=3")
            .fromTo('#escena_06 .hermana106', 9, {backgroundPosition:'0% 0%'},{backgroundPosition:'-300% 0%', ease: SteppedEase.config(3)}, "-=3.1")
            .addCallback(function(){
                Player.playSoundFX('zapato_apretado');
                Player.cambiaVolume('zapato_apretado', 1);
            }, "-=5")
            .fromTo('#escena_06 .principe06',7.9,{backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2)}, "-=7")
            .to('#escena_06 .hermana206', 0.0001, {x:0}, "-=2")
            .to('#escena_06 .hermana106', 0.0001, {x:0}, "-=2")
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

        ANIM.anim_interact_8_confetti = new TimelineMax(); 
        let confetis = 25;
        for(let i=confetis-1; i>=0; i--){
            let pos1=Math.floor((Math.random() * 100) + 1);
            let pos2=Math.floor((Math.random() * 100) + 1);
            let delay=Math.random();
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
            .fromTo('#escena_08 .reyes08', 1, {backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:10},1)
            .fromTo('#escena_08 .mujeres08', 1, {backgroundPosition:'0% 0%'},{backgroundPosition:'-200% 0%', ease: SteppedEase.config(2), repeat:10},1)
            .fromTo('#escena_08 .principes08', 3, {backgroundPosition:'100% 0%'},{backgroundPosition:'0% 0%', ease: SteppedEase.config(1), repeat: 3},0)
            .addLabel('final');
        ANIM.anim_interact_8_reyes.pause();
  
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
            ANIM.anim_interact_8_confetti 
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => {
            anim.pause();
            anim.eventCallback("onComplete", null); 
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
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
                if(btn.hasClass('primario')){
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
       let dif = Math.abs(d); 
    }
};