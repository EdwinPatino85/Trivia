// Banco de 50 preguntas de fútbol (TRIVIA FUTBOLERA CARTOPEL)
const questionsBank = [
  // LIGA PRO DE ECUADOR (30 preguntas)
  {
    id: 1,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano es el único en haber ganado la Copa Libertadores de América?",
    options: ["Barcelona SC", "Emelec", "Liga de Quito (LDU)", "Independiente del Valle"],
    correct: 2,
    trivia: "Liga de Quito (LDU) se coronó campeona en 2008 tras derrotar a Fluminense en el mítico Estadio Maracaná en tanda de penales, de la mano del técnico Edgardo Bauza.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 2,
    category: "Liga PRO",
    question: "¿Quién es el máximo goleador histórico en la historia de la Serie A de Ecuador?",
    options: ["Jaime Iván Kaviedes", "Ermen Benítez", "Carlos Alberto Juárez", "Ariel Graziani"],
    correct: 1,
    trivia: "Es reconocido como el máximo goleador histórico de la Serie A ecuatoriana, brillando principalmente en El Nacional.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 3,
    category: "Liga PRO",
    question: "¿En qué año se fundó Barcelona Sporting Club, el equipo con más títulos nacionales de Ecuador?",
    options: ["1925", "1935", "1945", "1955"],
    correct: 0,
    trivia: "Barcelona SC fue fundado el 1 de mayo de 1925 en Guayaquil, por una iniciativa de jóvenes ecuatorianos y españoles en el barrio del Astillero.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 4,
    category: "Liga PRO",
    question: "¿Cómo se denomina formalmente al partido clásico que enfrenta a Barcelona SC y Emelec?",
    options: ["Clásico de Guayaquil", "Superclásico de la Costa", "Clásico del Astillero", "Clásico del Pueblo"],
    correct: 2,
    trivia: "El Clásico del Astillero es el partido más tradicional del fútbol ecuatoriano, nombrado así porque ambos clubes se fundaron en el barrio Astillero de Guayaquil.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 5,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano juega sus partidos de local en el histórico Estadio George Capwell?",
    options: ["Barcelona SC", "Emelec", "Guayaquil City", "9 de Octubre"],
    correct: 1,
    trivia: "El Estadio George Capwell pertenece al Club Sport Emelec. Fue inaugurado en 1945 y lleva el nombre de un alto ejecutivo estadounidense que impulsó la fundación del club.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 6,
    category: "Liga PRO",
    question: "¿Qué apodo recibe el club Independiente del Valle debido a su extraordinario trabajo en formativas y hazañas continentales?",
    options: ["El Rayo del Valle", "Los Chullas", "Los Rayados / Matagigantes", "Los Eléctricos"],
    correct: 2,
    trivia: "Se les llama 'Matagigantes' tras eliminar a gigantes de Sudamérica como River Plate, Boca Juniors e Independiente de Avellaneda en su camino a finales internacionales.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 7,
    category: "Liga PRO",
    question: "¿Cuál fue el primer equipo de fuera de Guayas y Pichincha en ser campeón ecuatoriano de Serie A?",
    options: ["Deportivo Cuenca", "Olmedo de Riobamba", "Delfín de Manta", "Macará de Ambato"],
    correct: 1,
    trivia: "El Centro Deportivo Olmedo hizo historia en el año 2000 al consagrarse campeón ecuatoriano, rompiendo el monopolio histórico de los clubes de Quito y Guayaquil.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 8,
    category: "Liga PRO",
    question: "¿Qué club de la provincia de Manabí fue campeón por primera vez de la Liga PRO en 2019?",
    options: ["Manta FC", "Liga de Portoviejo", "Delfín SC", "Delfín de Guayaquil"],
    correct: 2,
    trivia: "Delfín SC venció a Liga de Quito en la tanda de penales en el Estadio Jocay de Manta, logrando el primer título nacional para la provincia de Manabí.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 9,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano tiene la distinción de tener una estructura organizativa de carácter 'militar' en sus orígenes?",
    options: ["Universidad Católica", "El Nacional", "Aucas", "Macará"],
    correct: 1,
    trivia: "El Club Deportivo El Nacional (conocido como 'La Máquina Gris') fue tradicionalmente administrado por las Fuerzas Armadas de Ecuador y durante décadas alineó únicamente jugadores ecuatorianos.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 10,
    category: "Liga PRO",
    question: "¿Qué apodo recibe Sociedad Deportiva Aucas, fundado por la compañía petrolera Royal Dutch Shell?",
    options: ["El Papá Aucas / Ídolo del Pueblo", "La Furia Roja", "El Expreso Austral", "El Rodillo Rojo"],
    correct: 0,
    trivia: "Aucas es conocido como 'El Ídolo del Pueblo' por su enorme y apasionada hinchada en las zonas más populares de Quito. En 2022 ganaron su histórico primer campeonato de Liga PRO.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 11,
    category: "Liga PRO",
    question: "¿Cuál es el estadio de fútbol con mayor capacidad oficial en Ecuador?",
    options: ["Estadio Rodrigo Paz Delgado", "Estadio Monumental Banco Pichincha", "Estadio Olímpico Atahualpa", "Estadio George Capwell"],
    correct: 1,
    trivia: "El Estadio Monumental de Barcelona SC tiene una capacidad para 57,000 a 59,000 espectadores, la más grande de Ecuador. Se ubica en Guayaquil.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 12,
    category: "Liga PRO",
    question: "¿En qué club ecuatoriano debutó profesionalmente Luis Antonio Valencia, legendario capitán del Manchester United?",
    options: ["Liga de Quito", "El Nacional", "Emelec", "Caribe Junior"],
    correct: 1,
    trivia: "Antonio Valencia debutó profesionalmente en el Club Deportivo El Nacional en 2003, antes de marcharse al Villarreal de España y luego hacer historia en la Premier League inglesa.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 13,
    category: "Liga PRO",
    question: "¿Qué jugador de fútbol de Barcelona SC y la Selección es conocido como 'El Kitu'?",
    options: ["Damián Díaz", "Fidel Martínez", "Christian Noboa", "Matías Oyola"],
    correct: 0,
    trivia: "El argentino-ecuatoriano Damián Díaz es apodado 'El Kitu'. Ha ganado tres campeonatos de Liga de Ecuador con Barcelona (2012, 2016 y 2020) y es uno de los máximos ídolos contemporáneos del club.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 14,
    category: "Liga PRO",
    question: "¿Quién fue el director técnico que guió a Independiente del Valle a ganar su primera Copa Sudamericana en 2019?",
    options: ["Ismael Rescalvo", "Miguel Ángel Ramírez", "Martín Anselmi", "Renato Paiva"],
    correct: 1,
    trivia: "El español Miguel Ángel Ramírez dirigió al equipo en la inolvidable victoria 3-1 contra Colón de Santa Fe en una final bajo la lluvia en Asunción, Paraguay.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 15,
    category: "Liga PRO",
    question: "¿Qué equipo de Azuay es conocido popularmente como 'El Expreso Austral'?",
    options: ["Deportivo Azogues", "Gualaceo SC", "Deportivo Cuenca", "Tecni Club"],
    correct: 2,
    trivia: "El Club Deportivo Cuenca es apodado 'El Expreso Austral'. Fue campeón nacional en 2004 bajo la conducción técnica del estratega ecuatoriano Julio Asad.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 16,
    category: "Liga PRO",
    question: "¿Cuál es el nombre de la barra organizada de Liga Deportiva Universitaria de Quito?",
    options: ["Sur Oscura", "Boca del Pozo", "Muerte Blanca", "Mafia Azul"],
    correct: 2,
    trivia: "La barra brava organizada de Liga de Quito se conoce como la 'Muerte Blanca', fundada a finales de la década de los 90. Es de las barras más organizadas del país.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 17,
    category: "Liga PRO",
    question: "¿Qué futbolista anotó el gol de la clasificación de Ecuador a su primer mundial en 2001?",
    options: ["Agustín Delgado", "Jaime Iván Kaviedes", "Álex Aguinaga", "Ulises de la Cruz"],
    correct: 1,
    trivia: "Jaime Iván 'El Nine' Kaviedes conectó un centro de cabeza tras una jugada de Alex Aguinaga para empatar 1-1 frente a Uruguay el 7 de noviembre de 2001 en el Estadio Olímpico Atahualpa.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 18,
    category: "Liga PRO",
    question: "¿En qué estadio ecuatoriano se jugó la final de la Copa Libertadores de América de la edición de 2022?",
    options: ["Estadio Rodrigo Paz Delgado", "Estadio Monumental Banco Pichincha", "Estadio Olímpico Atahualpa", "Estadio Capwell"],
    correct: 1,
    trivia: "El Estadio Monumental de Guayaquil fue sede única de la final 2022, donde el Flamengo de Brasil se impuso 1-0 sobre el Athletico Paranaense con gol de Gabriel Barbosa.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 19,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano fue el primer campeón de la Copa Sudamericana?",
    options: ["Liga de Quito (LDU)", "Independiente del Valle", "Barcelona SC", "Emelec"],
    correct: 0,
    trivia: "Liga de Quito conquistó la Copa Sudamericana en 2009 al vencer a Fluminense por un marcador global de 5-4, convirtiéndose en el primer club ecuatoriano en ganar este torneo.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 20,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano ganó la Recopa Sudamericana por primera vez en 2010?",
    options: ["Emelec", "Independiente del Valle", "Liga de Quito (LDU)", "Barcelona SC"],
    correct: 2,
    trivia: "Liga de Quito derrotó a Estudiantes de La Plata con un global de 2-1 y levantó su primera Recopa Sudamericana, ampliando una de las etapas más exitosas del fútbol ecuatoriano.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 21,
    category: "Liga PRO",
    question: "¿Qué equipo ecuatoriano fue campeón invicto de la LigaPro Serie A en 2022?",
    options: ["Independiente del Valle", "Barcelona SC", "Aucas", "Liga de Quito (LDU)"],
    correct: 2,
    trivia: "Aucas logró el primer campeonato nacional de su historia sin perder un solo partido durante la segunda etapa ni en la final frente a Barcelona SC.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 22,
    category: "Liga PRO",
    question: "¿En qué ciudad juega como local el Mushuc Runa Sporting Club?",
    options: ["Riobamba", "Ambato", "Latacunga", "Azogues"],
    correct: 1,
    trivia: "Mushuc Runa representa a comunidades indígenas de Tungurahua y disputa sus partidos como local en Ambato, siendo uno de los clubes con mayor identidad cultural del país.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 23,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano es conocido con el apodo de 'Los Camaratas'?",
    options: ["Universidad Católica", "Macará", "Orense SC", "Libertad FC"],
    correct: 0,
    trivia: "Universidad Católica recibe el apodo de 'Los Camaratas' desde mediados del siglo XX y se ha caracterizado por formar destacados futbolistas ecuatorianos.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 24,
    category: "Liga PRO",
    question: "¿En qué ciudad se encuentra el Estadio Rodrigo Paz Delgado, casa de Liga de Quito?",
    options: ["Guayaquil", "Cuenca", "Quito", "Ambato"],
    correct: 2,
    trivia: "El Estadio Rodrigo Paz Delgado está ubicado en el norte de Quito, a más de 2.700 metros sobre el nivel del mar, una altitud que ha sido un factor importante para Liga en torneos internacionales.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 25,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano es conocido como 'El Ponchito'?",
    options: ["Mushuc Runa", "Macará", "Olmedo", "Técnico Universitario"],
    correct: 0,
    trivia: "El apodo 'El Ponchito' hace referencia al tradicional poncho andino, símbolo de la identidad indígena que representa el club.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 26,
    category: "Liga PRO",
    question: "¿Qué entrenador dirigió a Liga de Quito cuando ganó la Copa Libertadores en 2008?",
    options: ["Jorge Fossati", "Luis Zubeldía", "Edgardo Bauza", "Pablo Repetto"],
    correct: 2,
    trivia: "Edgardo Bauza es considerado uno de los técnicos más exitosos en la historia de Liga de Quito, ya que también conquistó la Recopa Sudamericana en 2009 y 2010.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 27,
    category: "Liga PRO",
    question: "¿Qué equipo ecuatoriano obtuvo la Copa Sudamericana de 2022?",
    options: ["Liga de Quito (LDU)", "Independiente del Valle", "Barcelona SC", "Emelec"],
    correct: 1,
    trivia: "Independiente del Valle venció 2-0 a São Paulo en la final disputada en Córdoba, Argentina, consiguiendo su segunda Copa Sudamericana en apenas tres años.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 28,
    category: "Liga PRO",
    question: "¿Cuál es el apodo tradicional del Club Sport Emelec?",
    options: ["Los Toreros", "Los Eléctricos", "Los Albos", "Los Camaratas"],
    correct: 1,
    trivia: "Emelec recibe el sobrenombre de 'Los Eléctricos' debido a que fue fundado por trabajadores de la Empresa Eléctrica del Ecuador en 1929.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 29,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano juega como local en el Estadio Gonzalo Pozo Ripalda?",
    options: ["El Nacional", "Aucas", "Universidad Católica", "Independiente del Valle"],
    correct: 1,
    trivia: "El Estadio Gonzalo Pozo Ripalda, ubicado en el sur de Quito, es conocido popularmente como 'La Caldera del Sur' por el ambiente que genera la hinchada oriental.",
    image: "images/Ligapro0.jpg"
  },
  {
    id: 30,
    category: "Liga PRO",
    question: "¿Qué club ecuatoriano ganó la Recopa Sudamericana en 2023?",
    options: ["Liga de Quito (LDU)", "Barcelona SC", "Independiente del Valle", "Emelec"],
    correct: 2,
    trivia: "Independiente del Valle conquistó la Recopa Sudamericana 2023 tras superar a Flamengo en la tanda de penales, sumando otro título internacional a su exitoso proyecto deportivo.",
    image: "images/Ligapro0.jpg"
  },

  // MUNDIALES DE FÚTBOL (12 preguntas)
  {
    id: 31,
    category: "Mundiales",
    question: "¿Qué país ha ganado más campeonatos de la Copa Mundial de la FIFA en la historia?",
    options: ["Alemania", "Italia", "Brasil", "Argentina"],
    correct: 2,
    trivia: "Brasil lidera la tabla con 5 campeonatos mundiales (1958, 1962, 1970, 1994, 2002). Le siguen Alemania e Italia con 4 estrellas cada uno.",
    image: "images/mundial0.jpg"
  },
  {
    id: 32,
    category: "Mundiales",
    question: "¿Quién es el máximo goleador histórico de la Copa Mundial de la FIFA?",
    options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Lionel Messi"],
    correct: 1,
    trivia: "El delantero alemán Miroslav Klose ostenta el récord de más goles en mundiales con 16 anotaciones en 4 torneos. Ronaldo Nazário le sigue de cerca con 15 goles.",
    image: "images/mundial0.jpg"
  },
  {
    id: 33,
    category: "Mundiales",
    question: "¿En qué país se celebró el primer campeonato mundial de fútbol de la FIFA en 1930?",
    options: ["Francia", "Uruguay", "Italia", "Inglaterra"],
    correct: 1,
    trivia: "Uruguay no solo fue el organizador del primer mundial en 1930, sino también el primer campeón, tras derrotar a Argentina 4-2 en la final en el Estadio Centenario de Montevideo.",
    image: "images/mundial0.jpg"
  },
  {
    id: 34,
    category: "Mundiales",
    question: "¿En qué mundial la Selección de Ecuador consiguió su primera clasificación a los octavos de final?",
    options: ["Corea-Japón 2002", "Alemania 2006", "Brasil 2014", "Qatar 2022"],
    correct: 1,
    trivia: "En Alemania 2006, la Tri venció a Polonia (2-0) y Costa Rica (3-0) en fase de grupos, clasificando a octavos de final donde cayó 1-0 ante Inglaterra por un tiro libre de David Beckham.",
    image: "images/mundial0.jpg"
  },
  {
    id: 35,
    category: "Mundiales",
    question: "¿Quién anotó el primer gol de Ecuador en la historia de las Copas del Mundo?",
    options: ["Agustín Delgado", "Carlos Tenorio", "Édison Méndez", "Jaime Iván Kaviedes"],
    correct: 0,
    trivia: "El 'Tin' Delgado marcó el primer tanto ecuatoriano en el mundial de Corea-Japón 2002 ante México el 9 de junio de 2002. El partido acabó en derrota de la Tri 2-1.",
    image: "images/mundial0.jpg"
  },
  {
    id: 36,
    category: "Mundiales",
    question: "¿Qué país ganó la última final del Mundial de Qatar 2022 en un partido calificado de histórico?",
    options: ["Francia", "Croacia", "Argentina", "Marruecos"],
    correct: 2,
    trivia: "Argentina liderada por Lionel Messi venció a Francia en la tanda de penales tras empatar 3-3 en una de las mejores finales de la historia de los mundiales.",
    image: "images/mundial0.jpg"
  },
  {
    id: 37,
    category: "Mundiales",
    question: "¿Qué récord posee el futbolista camerunés Roger Milla en la historia de los mundiales?",
    options: ["El gol más rápido", "El jugador más veterano en anotar un gol", "Más tarjetas rojas", "Más mundiales disputados"],
    correct: 1,
    trivia: "Roger Milla anotó un gol en el Mundial de Estados Unidos 1994 a la edad de 42 años, 1 mes y 8 días en un partido frente a Rusia, estableciendo la marca que aún perdura.",
    image: "images/mundial0.jpg"
  },
  {
    id: 38,
    category: "Mundiales",
    question: "¡Qué selección nacional de fútbol jugó tres finales de la Copa del Mundo y las perdió todas?",
    options: ["Suecia", "Países Bajos (Holanda)", "Hungría", "Argentina"],
    correct: 1,
    trivia: "La 'Naranja Mecánica' o Países Bajos disputó las finales de los mundiales de Alemania 1974, Argentina 1978 y Sudáfrica 2010, siendo derrotados en las tres ocasiones.",
    image: "images/mundial0.jpg"
  },
  {
    id: 39,
    category: "Mundiales",
    question: "¿En qué mundial se introdujo oficialmente por primera vez la tecnología del VAR (Video Assistant Referee)?",
    options: ["Brasil 2014", "Rusia 2018", "Qatar 2022", "Sudáfrica 2010"],
    correct: 1,
    trivia: "El VAR fue introducido por la FIFA en la Copa Mundial de Rusia 2018 para ayudar a los árbitros a minimizar los errores graves y jugadas dudosas del partido.",
    image: "images/mundial0.jpg"
  },
  {
    id: 40,
    category: "Mundiales",
    question: "¿Cuál de estos países fue el campeón de la Copa Mundial del 2010 celebrada en Sudáfrica?",
    options: ["Países Bajos", "Alemania", "España", "Uruguay"],
    correct: 2,
    trivia: "España logró su primer título mundialista gracias a un gol solitario de Andrés Iniesta en el minuto 116 de la prórroga, derrotando a Países Bajos 1-0 en Johannesburgo.",
    image: "images/mundial0.jpg"
  },
  {
    id: 41,
    category: "Mundiales",
    question: "¿Qué país hospedó la Copa del Mundo en la que Diego Armando Maradona brilló anotando 'La Mano de Dios'?",
    options: ["Argentina 1978", "España 1982", "México 1986", "Italia 1990"],
    correct: 2,
    trivia: "Maradona anotó tanto 'La Mano de Dios' como 'El Gol del Siglo' en el histórico partido de cuartos de final de México 1986 en el Estadio Azteca frente a Inglaterra.",
    image: "images/mundial0.jpg"
  },
  {
    id: 42,
    category: "Mundiales",
    question: "¿Qué histórico goleador de la Selección de Ecuador es el máximo anotador del país en las Copas del Mundo?",
    options: ["Agustín Delgado", "Enner Valencia", "Carlos Tenorio", "Luis Antonio Valencia"],
    correct: 1,
    trivia: "Enner 'Superman' Valencia ostenta el récord ecuatoriano con 6 goles en total: 3 goles en el Mundial de Brasil 2014 y 3 goles en el Mundial de Qatar 2022.",
    image: "images/mundial0.jpg"
  },
  {
    id: 43,
    category: "Mundiales",
    question: "¿Qué selección ganó el Mundial de Brasil 2014?",
    options: ["Argentina", "Alemania", "Brasil", "Países Bajos"],
    correct: 1,
    trivia: "Alemania venció 1-0 a Argentina con un gol de Mario Götze en el tiempo suplementario y consiguió su cuarta Copa del Mundo.",
    image: "images/mundial0.jpg"
  },
  {
    id: 44,
    category: "Mundiales",
    question: "¿Cada cuántos años se disputa la Copa Mundial de la FIFA?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    correct: 2,
    trivia: "Desde 1930, la Copa Mundial se celebra cada cuatro años, con la única excepción de la pausa causada por la Segunda Guerra Mundial.",
    image: "images/mundial0.jpg"
  },
  {
    id: 45,
    category: "Mundiales",
    question: "¿Qué selección fue subcampeona del Mundial de Qatar 2022?",
    options: ["Croacia", "Francia", "Marruecos", "Portugal"],
    correct: 1,
    trivia: "Francia estuvo a pocos minutos de perder la final, pero un triplete de Kylian Mbappé llevó el partido hasta la tanda de penales.",
    image: "images/mundial0.jpg"
  },
  {
    id: 46,
    category: "Mundiales",
    question: "¿Qué país organizó el Mundial de Rusia 2018?",
    options: ["Rusia", "Polonia", "Ucrania", "Alemania"],
    correct: 0,
    trivia: "Fue la primera Copa del Mundo organizada en Europa del Este y reunió a 32 selecciones.",
    image: "images/mundial0.jpg"
  },
  {
    id: 47,
    category: "Mundiales",
    question: "¿Qué selección ganó el Mundial de Francia 1998?",
    options: ["Brasil", "Italia", "Francia", "Alemania"],
    correct: 2,
    trivia: "Francia ganó su primer Mundial como local derrotando 3-0 a Brasil con dos goles de Zinedine Zidane.",
    image: "images/mundial0.jpg"
  },
  {
    id: 48,
    category: "Mundiales",
    question: "¿Qué selección fue campeona del Mundial de Italia 1990?",
    options: ["Argentina", "Brasil", "Alemania", "Italia"],
    correct: 2,
    trivia: "Alemania Federal venció 1-0 a Argentina con un penal convertido por Andreas Brehme.",
    image: "images/mundial0.jpg"
  },
  {
    id: 49,
    category: "Mundiales",
    question: "¿Quién levantó el Balón de Oro al mejor jugador del Mundial de Qatar 2022?",
    options: ["Kylian Mbappé", "Luka Modrić", "Lionel Messi", "Julián Álvarez"],
    correct: 2,
    trivia: "Lionel Messi se convirtió en el primer futbolista en ganar dos Balones de Oro en la historia de los Mundiales (2014 y 2022).",
    image: "images/mundial0.jpg"
  },
  {
    id: 50,
    category: "Mundiales",
    question: "¿Qué selección ganó el Mundial de Estados Unidos 1994?",
    options: ["Brasil", "Italia", "Alemania", "Argentina"],
    correct: 0,
    trivia: "Brasil conquistó su cuarto título mundial al vencer a Italia en la primera final de la historia decidida por penales.",
    image: "images/mundial0.jpg"
  },
  {
    id: 51,
    category: "Mundiales",
    question: "¿Qué jugador ganó la Bota de Oro como máximo goleador del Mundial de Qatar 2022?",
    options: ["Lionel Messi", "Kylian Mbappé", "Olivier Giroud", "Julián Álvarez"],
    correct: 1,
    trivia: "Mbappé anotó ocho goles en Qatar 2022, incluyendo tres en la final frente a Argentina.",
    image: "images/mundial0.jpg"
  },
  {
    id: 52,
    category: "Mundiales",
    question: "¿Cuál fue la primera selección africana en llegar a unas semifinales de un Mundial?",
    options: ["Nigeria", "Camerún", "Marruecos", "Ghana"],
    correct: 2,
    trivia: "Marruecos hizo historia en Qatar 2022 al convertirse en la primera selección africana en alcanzar las semifinales de una Copa del Mundo.",
    image: "images/mundial0.jpg"
  },
  {
    id: 53,
    category: "Mundiales",
    question: "¿Qué selección eliminó a Ecuador en los octavos de final del Mundial de Alemania 2006?",
    options: ["Inglaterra", "Argentina", "Portugal", "Alemania"],
    correct: 0,
    trivia: "David Beckham marcó de tiro libre el único gol del partido, poniendo fin a la mejor participación de Ecuador en un Mundial.",
    image: "images/mundial0.jpg"
  },
  {
    id: 54,
    category: "Mundiales",
    question: "¿Cuál es el nombre del trofeo que recibe el campeón del Mundial de la FIFA?",
    options: ["Copa Jules Rimet", "Copa FIFA", "Copa Mundial de la FIFA", "Trofeo Dorado"],
    correct: 2,
    trivia: "Desde 1974 el campeón recibe la actual Copa Mundial de la FIFA, que reemplazó a la histórica Copa Jules Rimet.",
    image: "images/mundial0.jpg"
  },
  {
    id: 55,
    category: "Mundiales",
    question: "¿Qué selección ganó el Mundial de Rusia 2018?",
    options: ["Croacia", "Francia", "Bélgica", "Inglaterra"],
    correct: 1,
    trivia: "Francia derrotó 4-2 a Croacia en una de las finales con más goles desde 1966 y conquistó su segunda Copa del Mundo.",
    image: "images/mundial0.jpg"
  },

  // RÉCORDS Y LEYENDAS (10 preguntas)
  {
    id: 56,
    category: "Leyendas",
    question: "¿Quién es el máximo goleador histórico de toda la Copa Libertadores de América?",
    options: ["Pelé", "Alberto Spencer", "Gabriel Barbosa", "Juan Román Riquelme"],
    correct: 1,
    trivia: "El ecuatoriano Alberto 'Cabeza Mágica' Spencer anotó un total de 54 goles en la Copa Libertadores (48 con Peñarol de Uruguay y 6 con Barcelona SC de Ecuador), un récord absoluto.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 57,
    category: "Leyendas",
    question: "¿Qué jugador de fútbol tiene la mayor cantidad de Balones de Oro ganados en la historia?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Michel Platini"],
    correct: 1,
    trivia: "Lionel Messi es el máximo galardonado de la historia de la revista France Football con 8 Balones de Oro. El segundo es Cristiano Ronaldo con 5.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 58,
    category: "Leyendas",
    question: "¿Quién es considerado el jugador más joven en haber ganado una Copa del Mundo de la FIFA?",
    options: ["Kylian Mbappé", "Diego Maradona", "Pelé", "Lionel Messi"],
    correct: 2,
    trivia: "Edson Arantes do Nascimento 'Pelé' ganó el Mundial de Suecia 1958 a la edad de 17 años y 249 días, anotando incluso un doblete en la final ante los suecos.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 59,
    category: "Leyendas",
    question: "¿Qué apodo recibió el mítico delantero argentino Alfredo Di Stéfano, gran leyenda del Real Madrid?",
    options: ["El Pibe de Oro", "La Saeta Rubia", "O Rei", "El Pelusa"],
    correct: 1,
    trivia: "Alfredo Di Stéfano fue apodado 'La Saeta Rubia' por su gran velocidad, destreza y color de cabello. Lideró al Real Madrid a ganar 5 Copas de Europa seguidas.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 60,
    category: "Leyendas",
    question: "¿Qué histórico futbolista es famoso por haber popularizado el penal cobrado a lo 'Panenka'?",
    options: ["Zinedine Zidane", "Andrea Pirlo", "Antonin Panenka", "Antonín Dvořák"],
    correct: 2,
    trivia: "El checoslovaco Antonín Panenka cobró un penal picando suavemente el balón por el centro del arco en la final de la Eurocopa de 1976 para darle el título a su selección.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 61,
    category: "Leyendas",
    question: "¿Qué delantero brasileño ganó el Balón de Oro del Mundial 2002 después de ser campeón con Brasil?",
    options: ["Ronaldo", "Rivaldo", "Kaka", "Ronaldinho"],
    correct: 0,
    trivia: "Ronaldo marcó 8 goles en el Mundial Corea-Japón 2002, incluyendo los dos goles en la final contra Alemania, donde Brasil ganó 2-0 y consiguió su quinta Copa del Mundo",
    image: "images/leyendas0.jpg"
  },
  {
    id: 62,
    category: "Leyendas",
    question: "¿Quién es el máximo goleador de la historia del fútbol profesional en partidos oficiales?",
    options: ["Pelé", "Lionel Messi", "Cristiano Ronaldo", "Josef Bican"],
    correct: 2,
    trivia: "Cristiano Ronaldo es reconocido como el máximo goleador de la historia del fútbol masculino en partidos oficiales, con más de 900 goles durante su carrera profesional.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 63,
    category: "Leyendas",
    question: "¿En qué club de Argentina inició Diego Armando Maradona su brillante carrera profesional en 1976?",
    options: ["Boca Juniors", "Newell's Old Boys", "Argentinos Juniors", "River Plate"],
    correct: 2,
    trivia: "Maradona debutó profesionalmente en Argentinos Juniors diez días antes de cumplir los 16 años. El estadio del club lleva hoy su nombre en homenaje.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 64,
    category: "Leyendas",
    question: "¿Qué jugador ganó el Balón de Oro del Mundial de 2014 después de llevar a su selección hasta la final?",
    options: ["Arjen Robben", "Cristiano Ronaldo", "Lionel Messi", "Andres Iniesta"],
    correct: 2,
    trivia: "Lionel Messi ganó el Balón de Oro del Mundial Brasil 2014 aunque Argentina no salió campeona",
    image: "images/leyendas0.jpg"
  },
  {
    id: 65,
    category: "Leyendas",
    question: "¿Qué leyenda del fútbol italiano jugó toda su carrera en el AC Milan y es considerado uno de los mejores defensas de la historia?",
    options: ["Franco Baresi", "Alessandro Nesta", "Paolo Maldini", "Fabio Cannavaro"],
    correct: 2,
    trivia: "Paolo Maldini disputó 902 partidos oficiales con el AC Milan a lo largo de 25 temporadas y ganó 5 UEFA Champions League con el club lombardo.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 66,
    category: "Leyendas",
    question: "¿Qué leyenda brasileña es conocida mundialmente con el apodo de 'O Rei'?",
    options: ["Romário", "Pelé", "Ronaldinho", "Ronaldo"],
    correct: 1,
    trivia: "Pelé recibió el apodo de 'O Rei' (El Rey) por su extraordinaria carrera, en la que conquistó tres Copas del Mundo con Brasil.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 67,
    category: "Leyendas",
    question: "¿Qué futbolista francés anotó dos goles en la final del Mundial de 1998?",
    options: ["Thierry Henry", "Michel Platini", "Zinedine Zidane", "David Trezeguet"],
    correct: 2,
    trivia: "Zinedine Zidane marcó dos goles de cabeza frente a Brasil y fue la gran figura del primer título mundial de Francia.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 68,
    category: "Leyendas",
    question: "¿Qué legendario arquero es el único guardameta que ha ganado el Balón de Oro?",
    options: ["Gianluigi Buffon", "Lev Yashin", "Iker Casillas", "Oliver Kahn"],
    correct: 1,
    trivia: "Lev Yashin ganó el Balón de Oro en 1963 y hasta hoy sigue siendo el único portero que ha conseguido ese prestigioso premio.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 69,
    category: "Leyendas",
    question: "¿Qué futbolista argentino fue conocido como 'El Pibe de Oro'?",
    options: ["Gabriel Batistuta", "Lionel Messi", "Diego Maradona", "Mario Kempes"],
    correct: 2,
    trivia: "Diego Maradona recibió el apodo de 'El Pibe de Oro' desde muy joven gracias a su extraordinario talento con el balón.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 70,
    category: "Leyendas",
    question: "¿En qué club europeo se convirtió Ronaldinho en ganador de la UEFA Champions League?",
    options: ["Paris Saint-Germain", "AC Milan", "Barcelona", "Manchester City"],
    correct: 2,
    trivia: "Ronaldinho conquistó la Champions League con el FC Barcelona en la temporada 2005-06.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 71,
    category: "Leyendas",
    question: "¿Qué histórico delantero brasileño era conocido como 'El Fenómeno'?",
    options: ["Romário", "Ronaldo Nazário", "Rivaldo", "Adriano"],
    correct: 1,
    trivia: "Ronaldo Nazário revolucionó la posición de delantero gracias a su velocidad y técnica, siendo considerado uno de los mejores '9' de todos los tiempos.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 72,
    category: "Leyendas",
    question: "¿Qué futbolista español anotó el gol que dio a España su único Mundial?",
    options: ["David Villa", "Fernando Torres", "Andrés Iniesta", "Xavi Hernández"],
    correct: 2,
    trivia: "Andrés Iniesta marcó el gol del triunfo ante Países Bajos en la prórroga de la final del Mundial 2010.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 73,
    category: "Leyendas",
    question: "¿Qué legendario delantero portugués ganó la Bota de Oro del Mundial de 1966?",
    options: ["Cristiano Ronaldo", "Eusébio", "Luís Figo", "Pauleta"],
    correct: 1,
    trivia: "Eusébio anotó 9 goles en Inglaterra 1966 y llevó a Portugal al tercer lugar, su mejor participación mundialista durante muchos años.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 74,
    category: "Leyendas",
    question: "¿Qué exfutbolista liberiano es el único africano que ha ganado el Balón de Oro?",
    options: ["Didier Drogba", "Samuel Eto'o", "George Weah", "Yaya Touré"],
    correct: 2,
    trivia: "George Weah ganó el Balón de Oro en 1995 y posteriormente llegó a ser presidente de Liberia.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 75,
    category: "Leyendas",
    question: "¿Qué histórico delantero neerlandés ganó tres Balones de Oro durante su carrera?",
    options: ["Ruud Gullit", "Marco van Basten", "Johan Cruyff", "Dennis Bergkamp"],
    correct: 1,
    trivia: "Marco van Basten ganó el Balón de Oro en 1988, 1989 y 1992 antes de retirarse prematuramente por una lesión.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 76,
    category: "Leyendas",
    question: "¿Qué leyenda neerlandesa popularizó el llamado 'Giro de Cruyff'?",
    options: ["Ruud Gullit", "Marco van Basten", "Johan Cruyff", "Frank Rijkaard"],
    correct: 2,
    trivia: "Johan Cruyff realizó por primera vez esta famosa jugada en el Mundial de 1974 frente a Suecia.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 77,
    category: "Leyendas",
    question: "¿Qué futbolista italiano levantó la Copa del Mundo como capitán en 2006?",
    options: ["Fabio Cannavaro", "Alessandro Del Piero", "Francesco Totti", "Gianluigi Buffon"],
    correct: 0,
    trivia: "Fabio Cannavaro fue uno de los mejores defensores del Mundial de Alemania 2006 y ese mismo año ganó el Balón de Oro.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 78,
    category: "Leyendas",
    question: "¿Qué delantero argentino fue apodado 'Batigol'?",
    options: ["Hernán Crespo", "Sergio Agüero", "Gabriel Batistuta", "Claudio Caniggia"],
    correct: 2,
    trivia: "Gabriel Batistuta marcó más de 300 goles oficiales y fue durante muchos años el máximo goleador histórico de la selección argentina.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 79,
    category: "Leyendas",
    question: "¿Qué futbolista brasileño ganó el Balón de Oro en 2007?",
    options: ["Ronaldo", "Ronaldinho", "Kaká", "Rivaldo"],
    correct: 2,
    trivia: "Kaká fue el último brasileño en ganar el Balón de Oro antes del dominio de Lionel Messi y Cristiano Ronaldo.",
    image: "images/leyendas0.jpg"
  },
  {
    id: 80,
    category: "Leyendas",
    question: "¿Qué histórico delantero alemán es conocido como 'Der Bomber'?",
    options: ["Miroslav Klose", "Gerd Müller", "Jürgen Klinsmann", "Rudi Völler"],
    correct: 1,
    trivia: "Gerd Müller anotó 68 goles con la selección alemana y fue campeón del mundo en 1974.",
    image: "images/leyendas0.jpg"
  },

  // FÚTBOL INTERNACIONAL / CHAMPIONS LEAGUE (10 preguntas)
  {
    id: 81,
    category: "Internacional",
    question: "¿Qué club de fútbol europeo ha ganado la mayor cantidad de títulos de la UEFA Champions League?",
    options: ["AC Milan", "Bayern Múnich", "Real Madrid", "Liverpool"],
    correct: 2,
    trivia: "El Real Madrid de España es el club rey de Europa con 15 títulos continentales conseguidos a lo largo de la historia de la Copa de Europa / Champions League.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 82,
    category: "Internacional",
    question: "¿Quién es el máximo goleador histórico de la UEFA Champions League?",
    options: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema"],
    correct: 2,
    trivia: "Cristiano Ronaldo (apodado 'Mr. Champions') lidera la tabla con 140 goles anotados en partidos oficiales del torneo de clubes más prestigioso del mundo.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 83,
    category: "Internacional",
    question: "¿Qué club inglés es el único en haber terminado invicto una temporada completa de la Premier League (38 partidos)?",
    options: ["Manchester United", "Chelsea", "Manchester City", "Arsenal"],
    correct: 3,
    trivia: "El Arsenal del técnico Arsène Wenger logró la hazaña en la temporada 2003-2004 con 26 victorias y 12 empates, ganándose el apodo de 'Los Invencibles'.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 84,
    category: "Internacional",
    question: "¿Qué país ganó la Eurocopa del año 2004 en uno de los resultados más sorpresivos de la historia del torneo?",
    options: ["Portugal", "Grecia", "República Checa", "Dinamarca"],
    correct: 1,
    trivia: "Grecia, que no figuraba como favorita, se impuso 1-0 sobre el anfitrión Portugal en la final de Lisboa gracias a un gol de cabeza de Angelos Charisteas.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 85,
    category: "Internacional",
    question: "¿Qué club de fútbol de la Bundesliga de Alemania juega el clásico 'Der Klassiker' contra el Bayern Múnich?",
    options: ["Bayer Leverkusen", "Borussia Dortmund", "Schalke 04", "Werder Bremen"],
    correct: 1,
    trivia: "El gran rival de la época moderna del Bayern de Múnich es el Borussia Dortmund, y el duelo entre ambos es conocido como el gran clásico alemán.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 86,
    category: "Internacional",
    question: "¿Cómo se llama el trofeo que se otorga anualmente al máximo goleador de las ligas europeas?",
    options: ["Balón de Oro", "Premio The Best", "Bota de Oro", "Trofeo Pichichi"],
    correct: 2,
    trivia: "La Bota de Oro premia al máximo anotador de las ligas europeas en una misma temporada, ponderado según la dificultad de las ligas.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 87,
    category: "Internacional",
    question: "¿Qué histórico estadio inglés es conocido mundialmente como la 'Cuna del Fútbol'?",
    options: ["Old Trafford", "Wembley", "Anfield", "Stamford Bridge"],
    correct: 1,
    trivia: "El estadio de Wembley es uno de los escenarios más emblemáticos del fútbol mundial. Ha sido sede de la final del Mundial de 1966, varias finales de la UEFA Champions League y numerosas finales de la FA Cup.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 88,
    category: "Internacional",
    question: "¿Qué club sudamericano logró ganar la final de la Copa Libertadores ante Boca Juniors en el Estadio Santiago Bernabéu de Madrid?",
    options: ["River Plate", "Flamengo", "Peñarol", "Independiente de Avellaneda"],
    correct: 0,
    trivia: "En una final inédita por razones de seguridad en Sudamérica, River Plate venció 3-1 a Boca Juniors en Madrid el 9 de diciembre de 2018 para ganar su cuarta Libertadores.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 89,
    category: "Internacional",
    question: "¿Qué selección nacional de fútbol es conocida en el ámbito mundial como 'La Azzurra'?",
    options: ["Francia", "Uruguay", "Italia", "Argentina"],
    correct: 2,
    trivia: "La selección italiana es llamada 'La Azzurra' (La Azul) por el color tradicional de su camiseta, que hace honor a la dinastía de la Casa de Saboya, unificadora del país.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 90,
    category: "Internacional",
    question: "¿Qué club fue el ganador de la Copa de Europa/Champions League por primera vez en su historia en la temporada 2022-2023?",
    options: ["Arsenal", "Manchester City", "Paris Saint-Germain", "Atlético de Madrid"],
    correct: 1,
    trivia: "El Manchester City, de la mano de Pep Guardiola, conquistó su primera Champions League en Estambul tras derrotar 1-0 al Inter de Milán con un gol de Rodri.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 91,
    category: "Internacional",
    question: "¿Qué club ganó la UEFA Champions League en la temporada 2023-2024?",
    options: ["Borussia Dortmund", "Real Madrid", "Manchester City", "Inter de Milán"],
    correct: 1,
    trivia: "El Real Madrid derrotó 2-0 al Borussia Dortmund en la final disputada en Wembley y conquistó su decimoquinta Champions League.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 92,
    category: "Internacional",
    question: "¿Qué selección ganó la Copa América 2024?",
    options: ["Brasil", "Colombia", "Argentina", "Uruguay"],
    correct: 2,
    trivia: "Argentina venció 1-0 a Colombia en la final con un gol de Lautaro Martínez en el tiempo suplementario y consiguió su decimosexto título continental.",
    image: "images/Internacional0.jpg"
  },  
  {
    id: 93,
    category: "Internacional",
    question: "¿Qué selección ganó la Eurocopa 2024?",
    options: ["Inglaterra", "España", "Francia", "Alemania"],
    correct: 1,
    trivia: "España derrotó 2-1 a Inglaterra en la final y se convirtió en la selección con más títulos de la Eurocopa, con cuatro campeonatos.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 94,
    category: "Internacional",
    question: "¿Qué club italiano es conocido como 'La Vecchia Signora'?",
    options: ["AC Milan", "Inter de Milán", "Juventus", "Roma"],
    correct: 2,
    trivia: "La Juventus recibe el apodo de 'La Vecchia Signora' (La Vieja Señora), uno de los sobrenombres más famosos del fútbol europeo.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 95,
    category: "Internacional",
    question: "¿En qué país se encuentra el estadio Santiago Bernabéu?",
    options: ["Italia", "España", "Portugal", "Francia"],
    correct: 1,
    trivia: "El Santiago Bernabéu, ubicado en Madrid, es la casa del Real Madrid desde 1947 y ha sido sede de finales de Champions y de un Mundial.",
    image: "images/Internacional0.jpg"
  },  
  {
    id: 96,
    category: "Internacional",
    question: "¿Qué club español disputa el clásico conocido como 'El Clásico' frente al Real Madrid?",
    options: ["Sevilla", "Atlético de Madrid", "Valencia", "Barcelona"],
    correct: 3,
    trivia: "El Clásico entre Real Madrid y Barcelona es uno de los partidos de clubes más vistos del planeta.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 97,
    category: "Internacional",
    question: "¿Qué entrenador ha ganado más títulos de la UEFA Champions League?",
    options: ["Pep Guardiola", "Carlo Ancelotti", "José Mourinho", "Zinedine Zidane"],
    correct: 1,
    trivia: "Carlo Ancelotti es el entrenador más laureado de la historia de la Champions League con cinco títulos.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 98,
    category: "Internacional",
    question: "¿Qué club argentino ha ganado más Copas Libertadores?",
    options: ["River Plate", "Boca Juniors", "Racing Club", "Independiente"],
    correct: 3,
    trivia: "Independiente de Avellaneda es conocido como el 'Rey de Copas' por sus siete títulos de la Copa Libertadores.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 99,
    category: "Internacional",
    question: "¿Qué futbolista es conocido como 'CR7'?",
    options: ["Cristiano Ronaldo", "Kylian Mbappé", "Karim Benzema", "Luka Modrić"],
    correct: 0,
    trivia: "El apodo 'CR7' combina las iniciales de Cristiano Ronaldo con el número 7, camiseta que convirtió en un símbolo de su carrera.",
    image: "images/Internacional0.jpg"
  },
  {
    id: 100,
    category: "Internacional",
    question: "¿Qué club inglés juega sus partidos como local en el estadio Anfield?",
    options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
    correct: 1,
    trivia: "Anfield es la casa del Liverpool desde 1892 y es famoso por el canto de su afición: 'You'll Never Walk Alone'.",
    image: "images/Internacional0.jpg"
  }
];

// Exportación para uso modular en el navegador o script de carga
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionsBank };
}
