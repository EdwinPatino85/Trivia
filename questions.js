// Banco de 50 preguntas de fútbol (TRIVIA FUTBOLERA CARTOPEL)
const questionsBank = [
  // LIGA PRO DE ECUADOR (18 preguntas)
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
    trivia: "Ermen 'Pantera' Benítez es el máximo artillero histórico de la Serie A ecuatoriana con 191 goles anotados entre 1980 y 1995, brillando principalmente en El Nacional.",
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
    question: "¿Qué apodo recibe cariñosamente Sociedad Deportiva Aucas, fundado por la compañía petrolera Royal Dutch Shell?",
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

  // MUNDIALES DE FÚTBOL (12 preguntas)
  {
    id: 19,
    category: "Mundiales",
    question: "¿Qué país ha ganado más campeonatos de la Copa Mundial de la FIFA en la historia?",
    options: ["Alemania", "Italia", "Brasil", "Argentina"],
    correct: 2,
    trivia: "Brasil lidera la tabla con 5 campeonatos mundiales (1958, 1962, 1970, 1994, 2002). Le siguen Alemania e Italia con 4 estrellas cada uno.",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    category: "Mundiales",
    question: "¿Quién es el máximo goleador histórico de la Copa Mundial de la FIFA?",
    options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Lionel Messi"],
    correct: 1,
    trivia: "El delantero alemán Miroslav Klose ostenta el récord de más goles en mundiales con 16 anotaciones en 4 torneos. Ronaldo Nazário le sigue de cerca con 15 goles.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    category: "Mundiales",
    question: "¿En qué país se celebró el primer campeonato mundial de fútbol de la FIFA en 1930?",
    options: ["Francia", "Uruguay", "Italia", "Inglaterra"],
    correct: 1,
    trivia: "Uruguay no solo fue el organizador del primer mundial en 1930, sino también el primer campeón, tras derrotar a Argentina 4-2 en la final en el Estadio Centenario de Montevideo.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    category: "Mundiales",
    question: "¿En qué mundial la Selección de Ecuador consiguió su primera clasificación a los octavos de final?",
    options: ["Corea-Japón 2002", "Alemania 2006", "Brasil 2014", "Qatar 2022"],
    correct: 1,
    trivia: "En Alemania 2006, la Tri venció a Polonia (2-0) y Costa Rica (3-0) en fase de grupos, clasificando a octavos de final donde cayó 1-0 ante Inglaterra por un tiro libre de David Beckham.",
    image: "https://images.unsplash.com/photo-1550884877-8d3725b7437a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    category: "Mundiales",
    question: "¿Quién anotó el primer gol de Ecuador en la historia de las Copas del Mundo?",
    options: ["Agustín Delgado", "Carlos Tenorio", "Édison Méndez", "Jaime Iván Kaviedes"],
    correct: 0,
    trivia: "El 'Tin' Delgado marcó el primer tanto ecuatoriano en el mundial de Corea-Japón 2002 ante México el 9 de junio de 2002. El partido acabó en derrota de la Tri 2-1.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    category: "Mundiales",
    question: "¿Qué país ganó la última final del Mundial de Qatar 2022 en un partido calificado de histórico?",
    options: ["Francia", "Croacia", "Argentina", "Marruecos"],
    correct: 2,
    trivia: "Argentina liderada por Lionel Messi venció a Francia en la tanda de penales tras empatar 3-3 en una de las mejores finales de la historia de los mundiales.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    category: "Mundiales",
    question: "¿Qué récord posee el futbolista camerunés Roger Milla en la historia de los mundiales?",
    options: ["El gol más rápido", "El jugador más veterano en anotar un gol", "Más tarjetas rojas", "Más mundiales disputados"],
    correct: 1,
    trivia: "Roger Milla anotó un gol en el Mundial de Estados Unidos 1994 a la edad de 42 años, 1 mes y 8 días en un partido frente a Rusia, estableciendo la marca que aún perdura.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    category: "Mundiales",
    question: "¡Qué selección nacional de fútbol jugó tres finales de la Copa del Mundo y las perdió todas?",
    options: ["Suecia", "Países Bajos (Holanda)", "Hungría", "Argentina"],
    correct: 1,
    trivia: "La 'Naranja Mecánica' o Países Bajos disputó las finales de los mundiales de Alemania 1974, Argentina 1978 y Sudáfrica 2010, siendo derrotados en las tres ocasiones.",
    image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    category: "Mundiales",
    question: "¿En qué mundial se introdujo oficialmente por primera vez la tecnología del VAR (Video Assistant Referee)?",
    options: ["Brasil 2014", "Rusia 2018", "Qatar 2022", "Sudáfrica 2010"],
    correct: 1,
    trivia: "El VAR fue introducido por la FIFA en la Copa Mundial de Rusia 2018 para ayudar a los árbitros a minimizar los errores graves y jugadas dudosas del partido.",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    category: "Mundiales",
    question: "¿Cuál de estos países fue el campeón de la Copa Mundial del 2010 celebrada en Sudáfrica?",
    options: ["Países Bajos", "Alemania", "España", "Uruguay"],
    correct: 2,
    trivia: "España logró su primer título mundialista gracias a un gol solitario de Andrés Iniesta en el minuto 116 de la prórroga, derrotando a Países Bajos 1-0 en Johannesburgo.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    category: "Mundiales",
    question: "¿Qué país hospedó la Copa del Mundo en la que Diego Armando Maradona brilló anotando 'La Mano de Dios'?",
    options: ["Argentina 1978", "España 1982", "México 1986", "Italia 1990"],
    correct: 2,
    trivia: "Maradona anotó tanto 'La Mano de Dios' como 'El Gol del Siglo' en el histórico partido de cuartos de final de México 1986 en el Estadio Azteca frente a Inglaterra.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    category: "Mundiales",
    question: "¿Qué histórico goleador de la Selección de Ecuador es el máximo anotador del país en las Copas del Mundo?",
    options: ["Agustín Delgado", "Enner Valencia", "Carlos Tenorio", "Luis Antonio Valencia"],
    correct: 1,
    trivia: "Enner 'Superman' Valencia ostenta el récord ecuatoriano con 6 goles en total: 3 goles en el Mundial de Brasil 2014 y 3 goles en el Mundial de Qatar 2022.",
    image: "https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&w=600&q=80"
  },

  // RÉCORDS Y LEYENDAS (10 preguntas)
  {
    id: 31,
    category: "Leyendas",
    question: "¿Quién es el máximo goleador histórico de toda la Copa Libertadores de América?",
    options: ["Pelé", "Alberto Spencer", "Gabriel Barbosa", "Juan Román Riquelme"],
    correct: 1,
    trivia: "El ecuatoriano Alberto 'Cabeza Mágica' Spencer anotó un total de 54 goles en la Copa Libertadores (48 con Peñarol de Uruguay y 6 con Barcelona SC de Ecuador), un récord absoluto.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 32,
    category: "Leyendas",
    question: "¿Qué jugador de fútbol tiene la mayor cantidad de Balones de Oro ganados en la historia?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff", "Michel Platini"],
    correct: 1,
    trivia: "Lionel Messi es el máximo galardonado de la historia de la revista France Football con 8 Balones de Oro. El segundo es Cristiano Ronaldo con 5.",
    image: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 33,
    category: "Leyendas",
    question: "¡Quién es considerado el jugador más joven en haber ganado una Copa del Mundo de la FIFA?",
    options: ["Kylian Mbappé", "Diego Maradona", "Pelé", "Lionel Messi"],
    correct: 2,
    trivia: "Edson Arantes do Nascimento 'Pelé' ganó el Mundial de Suecia 1958 a la edad de 17 años y 249 días, anotando incluso un doblete en la final ante los suecos.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    category: "Leyendas",
    question: "¿Qué apodo recibió el mítico delantero argentino Alfredo Di Stéfano, gran leyenda del Real Madrid?",
    options: ["El Pibe de Oro", "La Saeta Rubia", "O Rei", "El Pelusa"],
    correct: 1,
    trivia: "Alfredo Di Stéfano fue apodado 'La Saeta Rubia' por su gran velocidad, destreza y color de cabello. Lideró al Real Madrid a ganar 5 Copas de Europa seguidas.",
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    category: "Leyendas",
    question: "¿Qué histórico futbolista es famoso por haber popularizado el penal cobrado a lo 'Panenka'?",
    options: ["Zinedine Zidane", "Andrea Pirlo", "Antonin Panenka", "Antonín Dvořák"],
    correct: 2,
    trivia: "El checoslovaco Antonín Panenka cobró un penal picando suavemente el balón por el centro del arco en la final de la Eurocopa de 1976 para darle el título a su selección.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    category: "Leyendas",
    question: "¿A qué histórico guardameta de la Unión Soviética se le conocía como la 'Araña Negra'?",
    options: ["Lev Yashin", "Gianluigi Buffon", "Iker Casillas", "Dino Zoff"],
    correct: 0,
    trivia: "Lev Yashin es considerado uno de los mejores porteros de todos los tiempos. Es el único guardameta en la historia del fútbol que ha ganado el Balón de Oro (1963).",
    image: "https://images.unsplash.com/photo-1600250395178-40fe752e5189?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 37,
    category: "Leyendas",
    question: "¿Quién es el máximo goleador de la historia del fútbol profesional en partidos oficiales?",
    options: ["Pelé", "Lionel Messi", "Cristiano Ronaldo", "Josef Bican"],
    correct: 2,
    trivia: "Cristiano Ronaldo ostenta la marca oficial avalada por la FIFA como el máximo goleador histórico del fútbol masculino, superando los 850 goles oficiales.",
    image: "https://images.unsplash.com/photo-1504156069893-c9119f7ec3db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 38,
    category: "Leyendas",
    question: "¿En qué club de Argentina inició Diego Armando Maradona su brillante carrera profesional en 1976?",
    options: ["Boca Juniors", "Newell's Old Boys", "Argentinos Juniors", "River Plate"],
    correct: 2,
    trivia: "Maradona debutó profesionalmente en Argentinos Juniors diez días antes de cumplir los 16 años. El estadio del club lleva hoy su nombre en homenaje.",
    image: "https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 39,
    category: "Leyendas",
    question: "¿Qué histórico futbolista neerlandés ideó el concepto de 'Fútbol Total' junto al técnico Rinus Michels?",
    options: ["Johan Cruyff", "Ruud Gullit", "Marco van Basten", "Dennis Bergkamp"],
    correct: 0,
    trivia: "Johan Cruyff fue el cerebro en la cancha del 'Fútbol Total', táctica donde los jugadores podían rotar constantemente de posición. Marcó la filosofía del Ajax y el FC Barcelona.",
    image: "https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 40,
    category: "Leyendas",
    question: "¿Qué leyenda del fútbol italiano jugó toda su carrera en el AC Milan y es considerado uno de los mejores defensas de la historia?",
    options: ["Franco Baresi", "Alessandro Nesta", "Paolo Maldini", "Fabio Cannavaro"],
    correct: 2,
    trivia: "Paolo Maldini disputó 902 partidos oficiales con el AC Milan a lo largo de 25 temporadas y ganó 5 UEFA Champions League con el club lombardo.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
  },

  // FÚTBOL INTERNACIONAL / CHAMPIONS LEAGUE (10 preguntas)
  {
    id: 41,
    category: "Internacional",
    question: "¿Qué club de fútbol europeo ha ganado la mayor cantidad de títulos de la UEFA Champions League?",
    options: ["AC Milan", "Bayern Múnich", "Real Madrid", "Liverpool"],
    correct: 2,
    trivia: "El Real Madrid de España es el club rey de Europa con 15 títulos continentales conseguidos a lo largo de la historia de la Copa de Europa / Champions League.",
    image: "logo.jpg"
  },
  {
    id: 42,
    category: "Internacional",
    question: "¿Quién es el máximo goleador histórico de la UEFA Champions League?",
    options: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema"],
    correct: 2,
    trivia: "Cristiano Ronaldo (apodado 'Mr. Champions') lidera la tabla con 140 goles anotados en partidos oficiales del torneo de clubes más prestigioso del mundo.",
    image: "logo.jpg"
  },
  {
    id: 43,
    category: "Internacional",
    question: "¡Qué club inglés es el único en haber terminado invicto una temporada completa de la Premier League (38 partidos)?",
    options: ["Manchester United", "Chelsea", "Manchester City", "Arsenal"],
    correct: 3,
    trivia: "El Arsenal del técnico Arsène Wenger logró la hazaña en la temporada 2003-2004 con 26 victorias y 12 empates, ganándose el apodo de 'Los Invencibles'.",
    image: "logo.jpg"
  },
  {
    id: 44,
    category: "Internacional",
    question: "¿Qué país ganó la Eurocopa del año 2004 en uno de los resultados más sorpresivos de la historia del torneo?",
    options: ["Portugal", "Grecia", "República Checa", "Dinamarca"],
    correct: 1,
    trivia: "Grecia, que no figuraba como favorita, se impuso 1-0 sobre el anfitrión Portugal en la final de Lisboa gracias a un gol de cabeza de Angelos Charisteas.",
    image: "logo.jpg"
  },
  {
    id: 45,
    category: "Internacional",
    question: "¿Qué club de fútbol de la Bundesliga de Alemania juega el clásico 'Der Klassiker' contra el Bayern Múnich?",
    options: ["Bayer Leverkusen", "Borussia Dortmund", "Schalke 04", "Werder Bremen"],
    correct: 1,
    trivia: "El gran rival de la época moderna del Bayern de Múnich es el Borussia Dortmund, y el duelo entre ambos es conocido como el gran clásico alemán.",
    image: "logo.jpg"
  },
  {
    id: 46,
    category: "Internacional",
    question: "¿Cómo se llama el trofeo que se otorga anualmente al máximo goleador de las ligas europeas?",
    options: ["Balón de Oro", "Premio The Best", "Bota de Oro", "Trofeo Pichichi"],
    correct: 2,
    trivia: "La Bota de Oro premia al máximo anotador de las ligas europeas en una misma temporada, ponderado según la dificultad de las ligas.",
    image: "logo.jpg"
  },
  {
    id: 47,
    category: "Internacional",
    question: "¿Qué histórico estadio inglés es conocido mundialmente como la 'Cuna del Fútbol'?",
    options: ["Old Trafford", "Wembley", "Anfield", "Stamford Bridge"],
    correct: 1,
    trivia: "El Estadio de Wembley (Londres) es considerado un templo del balompié mundial. Ha albergado la final del Mundial 1966 y numerosas finales de Champions League.",
    image: "logo.jpg"
  },
  {
    id: 48,
    category: "Internacional",
    question: "¿Qué club sudamericano logró ganar la final de la Copa Libertadores ante Boca Juniors en el Estadio Santiago Bernabéu de Madrid?",
    options: ["River Plate", "Flamengo", "Peñarol", "Independiente de Avellaneda"],
    correct: 0,
    trivia: "En una final inédita por razones de seguridad en Sudamérica, River Plate venció 3-1 a Boca Juniors en Madrid el 9 de diciembre de 2018 para ganar su cuarta Libertadores.",
    image: "logo.jpg"
  },
  {
    id: 49,
    category: "Internacional",
    question: "¿Qué selección nacional de fútbol es conocida en el ámbito mundial como 'La Nazionale' o 'La Azzurra'?",
    options: ["Francia", "Uruguay", "Italia", "Argentina"],
    correct: 2,
    trivia: "La selección italiana es llamada 'La Azzurra' (La Azul) por el color tradicional de su camiseta, que hace honor a la dinastía de la Casa de Saboya, unificadora del país.",
    image: "logo.jpg"
  },
  {
    id: 50,
    category: "Internacional",
    question: "¿Qué club fue el ganador de la Copa de Europa/Champions League por primera vez en su historia en la temporada 2022-2023?",
    options: ["Arsenal", "Manchester City", "Paris Saint-Germain", "Atlético de Madrid"],
    correct: 1,
    trivia: "El Manchester City, de la mano de Pep Guardiola, conquistó su primera Champions League en Estambul tras derrotar 1-0 al Inter de Milán con un gol de Rodri.",
    image: "logo.jpg"
  }
];

// Exportación para uso modular en el navegador o script de carga
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionsBank };
}
