//archivo de configuración
let JSON_CUENTO = {
    nombre:"Ricitos de Oro",
    tipo:"Cuento de hadas",
    descripcion:"Éste relato es una adaptación libre de una historia folclórica atribuida a Robert Southey en 1837. En ella se narra la historia de una familia de tres osos y de una niña curiosa que decide entrar en su hogar desocupado. Ricitos apenas entra empieza a curiosear por cada cuarto, primero encuentra tres sillas, luego tres platos de avena; y por último tres camas. ¿Qué sucederá una vez que lleguen los dueños? Descubre las aventuras de ricitos, en un viaje por lo ajeno.",
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
        "img/ricitosDeOro/esc_0_fondo.jpg",
        "img/ricitosDeOro/esc_1_fondo.jpg",
        "img/ricitosDeOro/esc_2_fondo.jpg",
        "img/ricitosDeOro/esc_3_fondo.jpg",
        "img/ricitosDeOro/esc_4_fondo.jpg",
        "img/ricitosDeOro/esc_5_fondo.jpg",
        "img/ricitosDeOro/esc_6_fondo.jpg",
        "img/ricitosDeOro/esc_7_fondo.jpg",
        "img/ricitosDeOro/esc_8_fondo.jpg",
    
    ], 
    fx_sonido:[
        {nombre:"bosque", url:"audio/ricitosDeOro/fx/bosque.mp3"},
        {nombre:"chirrido_de_puerta", url:"audio/ricitosDeOro/fx/chirrido_de_puerta.mp3"},
        {nombre:"cuento_de_hadas", url:"audio/ricitosDeOro/fx/cuento_de_hadas.mp3"},
        {nombre:"cuento_de_hadas_cortas", url:"audio/ricitosDeOro/fx/cuento_de_hadas_cortas.mp3"},
        {nombre:"cuento_de_hadas_cortas2", url:"audio/ricitosDeOro/fx/cuento_de_hadas_cortas2.mp3"},
        {nombre:"masticando", url:"audio/ricitosDeOro/fx/masticando.mp3"},
        {nombre:"ninha_corriendo", url:"audio/ricitosDeOro/fx/ninha_corriendo.mp3"},
        {nombre:"ninha_durmiendo", url:"audio/ricitosDeOro/fx/ninha_durmiendo.mp3"},
        {nombre:"ninha_mmm", url:"audio/ricitosDeOro/fx/ninha_mmm.mp3"},
        {nombre:"ninha_sorprendida", url:"audio/ricitosDeOro/fx/ninha_sorprendida.mp3"},
        {nombre:"osa_preocupada", url:"audio/ricitosDeOro/fx/osa_preocupada.mp3"},
        {nombre:"oso_molesto", url:"audio/ricitosDeOro/fx/oso_molesto.mp3"},
        {nombre:"oso_pequenho", url:"audio/ricitosDeOro/fx/oso_pequenho.mp3"},
        {nombre:"silla_de_madera", url:"audio/ricitosDeOro/fx/silla_de_madera.mp3"}
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/ricitosDeOro/mini_0.jpg",
            audio:"audio/ricitosDeOro/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "En una casita en medio del bosque vivía Papá Oso, Mamá Osa y su pequeño Osito.",
                    tiempo:[0,9.7,5] 
                },
                {
                    texto: "Cada mañana preparaban el desayuno, y mientras esperaban que su avena se enfriara,<br> salían a dar un paseo.",
                    tiempo:[10.2,18.9,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/ricitosDeOro/mini_1.jpg",
            audio:"audio/ricitosDeOro/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "Una mañana, mientras la familia paseaba, una niña de pelo rizado y rubio como el oro se asomó por la puerta.",
                    tiempo:[0,10.9,5] 
                },
                {
                    texto: "Como no vio a nadie dentro y era muy curiosa, entró.",
                    tiempo:[11.4,16.7,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/ricitosDeOro/mini_2.jpg",
            audio:"audio/ricitosDeOro/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "En la sala, encontró tres asientos. Se sentó en el más grande, pero era demasiado duro.",
                    tiempo:[0,11.3,0.5] 
                },
                {
                    texto: "Luego se sentó en el mediano, pero le pareció demasiado blando.",
                    tiempo:[11.8,18.8,0.5] 
                },
                {
                    texto: "Finalmente se sentó en el asiento más pequeñito y le pareció confortable,<br>pero con tan mala suerte que la silla se rompió.",
                    tiempo:[19.3,32,0.5] 
                },
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/ricitosDeOro/mini_3.jpg",
            audio:"audio/ricitosDeOro/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "Al entrar a la cocina vio tres platos humeantes. Tenía hambre,<br>así que probó del plato más grande, pero estaba demasiado caliente.",
                    tiempo:[0,13.8,0.5] 
                },

                {
                    texto: "Luego probó del plato mediano, pero estaba demasiado espeso,<br>así que probó del plato pequeño que le pareció delicioso.",
                    tiempo:[14.3,28.0,0.5] 
                },

                {
                    texto: "Se comió toda la avena del plato y de pronto sintió mucho sueño.",
                    tiempo:[28.5,37.6,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/ricitosDeOro/mini_4.jpg",
            audio:"audio/ricitosDeOro/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Subió al segundo piso y encontró tres camas. Se acercó a la primera, pero era muy alta para ella.",
                    tiempo:[0,10.8,0.5] 
                },
                {
                    texto: "Se sentó en la segunda, pero era muy blanda; y finalmente<br>se acostó en la más pequeña que le pareció perfecta, y se durmió profundamente.",
                    tiempo:[11.3,28.0,0.5] 
                }
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/ricitosDeOro/mini_5.jpg",
            audio:"audio/ricitosDeOro/escena_06.mp3",
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
            miniatura:"img/ricitosDeOro/mini_6.jpg",
            audio:"audio/ricitosDeOro/escena_07.mp3",
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
            miniatura:"img/ricitosDeOro/mini_7.jpg",
            audio:"audio/ricitosDeOro/escena_08.mp3",
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
        }
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
        
        try { ANIM.anim_interact_7_feliz.pause(0) }
        catch (err) { }
    },


    init: () => {
        ANIM.creapartes();
          
        Player.creaMainTL();
        /* Escena01 */
        //Preanimacion desayuno
        ANIM.main_tl.add(TweenMax.fromTo("#escena_00 .desayuno",1,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', duration: 1, ease:Bounce.easeOut, y:710},0),'0_0+=0.1')
        
        /* Escena02 */
        
        //ANIM.main_tl.add(TweenMax.set("#escena_01",{x:-460,y:-1290, scale:1.25}),'escena_2+=0.01');
        ANIM.main_tl.add(TweenMax.set("#escena_01", {scale:1.4, x:250, y:67}), 'escena_1+=0.01')

        //Ricitos aparece
        //ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .ricitos_esc01', 2,{backgroundPosition:'0% 0%'},{opacity:1, ease: SteppedEase.config(1)},0), '1_0-=0.1')
        //ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .ricitos_esc01', 2,{backgroundPosition:'0% 0%'},{opacity:1, duration: 2.5, ease: Bounce.easeOut},0), '1_0-=0.1')
        
        //ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .ricitos_esc01', 1,{backgroundPosition:'0% 0%', css:{scaleX:0.88, scaleY:0.88}},{backgroundPosition:'-100% 0%', duration:5, ease: Elastic.easeOut.config(1,0.1)},1), '1_0-=0.1')
        ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .ricitos_esc01', 0.9,{backgroundPosition:'0% 0%'},{opacity:1, duration:3, ease: Elastic.easeOut.config(1,0.2), y:-474},0), '1_0-=0.1')
        
        let desplazamientoX = new TimelineMax();
        desplazamientoX
            //.fromTo("#escena_01",12,{x:-460,y:-1290, scale:1.25},{x:-460,y:180, scale:1.15, ease:Power1.easeInOut, immediateRender:true})
            .fromTo("#escena_01",12,{scale:1.4, x:250, y:67},{scale:1.4, x:-384,y:67, ease:Power1.easeInOut, immediateRender:true},1)
            .fromTo("#escena_01 .ricitos_esc01", 1.6, {backgroundPosition:'0% 0%'},{x:610, ease:Power1.easeInOut, immediateRender:true},1)
            /* Para desaparecerla con autoAlpha: 0 */
            .fromTo("#escena_01 .ricitos_esc01", 0.01, {backgroundPosition:'0% 0%'},{autoAlpha: 0, immediateRender:true},3)
            .fromTo("#escena_01 .fondoBosque",12,{scale:1, x:0, y:0},{scale:1, x:570,y:0, ease:Power1.easeInOut, immediateRender:true},1)
        ANIM.main_tl.add(desplazamientoX,'1_1-=3');


        ANIM.main_tl.addLabel('0_0_audio', 'escena_0+=0.1');
        ANIM.main_tl.addLabel('0_0_audio_fade', '0_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('cuento_de_hadas_cortas');
        }, '0_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('cuento_de_hadas_cortas',1,0,2);
        }, "0_0_audio_fade");
        
        ANIM.main_tl.addLabel('1_0_audio', 'escena_1+=0.1');
        ANIM.main_tl.addLabel('1_0_audio_fade', '1_0-=2');
        ANIM.main_tl.addCallback(function () {
            Player.playSoundFX('bosque');
        }, '1_0_audio');
        ANIM.main_tl.addCallback(function () {
            ANIM.fadeVolume('bosque',1,0,2);
        }, "1_0_audio_fade");



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
        ANIM.anim_interact_desayuno = new TimelineMax({repeat:0}); // creo la interacción
        ANIM.anim_interact_desayuno
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('cuento_de_hadas_cortas2');
                Player.cambiaVolume('cuento_de_hadas_cortas2', 0.4);
            })
            //.fromTo('#escena_00 .papaOso_esc00', 0,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',scaleX:0.5, scaleY:0.5})
            //.fromTo('#escena_00 .papaOso_esc00', 2.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%',ease: Elastic.easeOut.config(1,0.1),css:{scaleX:1, scaleY:1, opacity:1}})
            //.fromTo('#escena_00 .papaOso_esc00', 0,{backgroundPosition:'0% 0%'},{autoAlpha:1},0)
            .fromTo('#escena_00 .papaOso_esc00', 0.01,{backgroundPosition:'0% 0%'},{opacity:1},1)
            .fromTo('#escena_00 .papaOso_esc00', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', duration: 5, ease: Elastic.easeOut.config(1,0.1),css:{scaleX:0.9, scaleY:0.9}},1)
            
            .fromTo('#escena_00 .mamaOso_esc00', 0.01,{backgroundPosition:'0% 0%'},{opacity:1},2)
            .fromTo('#escena_00 .mamaOso_esc00', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', duration: 5, ease: Elastic.easeOut.config(1,0.1),css:{scaleX:0.9, scaleY:0.9}},2)
            
            .fromTo('#escena_00 .osito_esc00', 0.01,{backgroundPosition:'0% 0%'},{opacity:1},3)
            .fromTo('#escena_00 .osito_esc00', 3,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', duration: 5, ease: Elastic.easeOut.config(1,0.1),css:{scaleX:0.9, scaleY:0.9}},3)
            .addLabel('final');
        ANIM.anim_interact_desayuno.pause();

        const ojoI = ['#escena_01 #ojosIrisIzq'];
        const ojoD = ['#escena_01 #ojosIrisDer'];

        //Escena01
        ANIM.anim_interact_entrada = new TimelineMax({repeat:0}); // creo la interacción
        ANIM.anim_interact_entrada
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('chirrido_de_puerta');
                Player.cambiaVolume('chirrido_de_puerta', 0.5);
            },"+=1")
            //le cambie de 30 => 5 en el delay
            .fromTo('#escena_01 .puerta',1,{backgroundPosition:'0% 0%'},{backgroundPosition:'100% 0%', ease: SteppedEase.config(1)},1)
            .fromTo('#escena_01 .ricitosDoble_esc01',2,{backgroundPosition:'100% 0%'},{x:-250},2)
            .fromTo(ojoI,1.1,{backgroundPosition:'0% 0%'},{x:-13.9, yoyo:true, repeat:2},4)
            .fromTo(ojoI,1.2,{backgroundPosition:'0% 0%'},{x:0, yoyo:true, repeat:2},5)
            .fromTo(ojoD,1.1,{backgroundPosition:'0% 0%'},{x:-26.6, yoyo:true, repeat:2},4)
            .fromTo(ojoD,1.2,{backgroundPosition:'0% 0%'},{x:0, yoyo:true, repeat:2},5) 
            .addLabel('final');
            //times 1.3 1.3 1.3 1.3 x:-14(para ambos)
        ANIM.anim_interact_entrada.pause();
        
        //Array de anin interacts
        ANIM.arr_interacts = [

            ANIM.anim_interact_desayuno, // agrego la interacción al array //no vale nada, no hace nada
            ANIM.anim_interact_entrada,
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
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_desayuno.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_desayuno.play(0);
                    });
                 }
                break;

             case 1:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_entrada.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_entrada.play(0);
                    });
                 }
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