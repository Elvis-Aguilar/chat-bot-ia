export const faqData = [
    // **Saludos**
    { question: "Hola", answer: "¡Hola! ¿En qué puedo ayudarte?" },
    { question: "¿Qué tal?", answer: "¡Todo bien! ¿Y tú?" },
    { question: "Buenas tardes", answer: "Buenas tardes. ¿En qué te puedo ayudar?" },
    { question: "Buenas noches", answer: "Buenas noches. ¿Cómo puedo asistirte?" },
    { question: "¿Qué onda?", answer: "¡Hola! ¿Qué tal tu día?" },

    // **Identidad del bot**
    { question: "¿Quién eres?", answer: "Soy un asistente virtual creado para ayudarte con tus dudas y consultas." },
    { question: "¿Qué eres?", answer: "Soy un chatbot, un programa diseñado para responder tus preguntas y mantener conversaciones." },
    { question: "¿Eres humano?", answer: "No, soy una inteligencia artificial, pero estoy aquí para ayudarte como si lo fuera." },
    { question: "¿Quién te creó?", answer: "Fui creada por un desarrollador apasionado por la tecnología y el aprendizaje automático." },
    { question: "¿Cómo te llamas?", answer: "No tengo un nombre propio, pero puedes llamarme tu asistente virtual." },
    { question: "¿Eres inteligente?", answer: "Hago lo mejor que puedo con la información que tengo. ¡Estoy aprendiendo contigo!" },
    
       // **Información sobre tecnología**
    { question: "¿Qué es TensorFlow?", answer: "TensorFlow es una biblioteca de machine learning desarrollada por Google." },
    { question: "¿Qué es React?", answer: "React es una biblioteca de JavaScript para construir interfaces de usuario." },
    { question: "¿Qué es JavaScript?", answer: "JavaScript es un lenguaje de programación utilizado para el desarrollo web." },
    { question: "¿Qué es una API?", answer: "Una API es un conjunto de definiciones y protocolos que permiten a las aplicaciones comunicarse entre sí." },
    { question: "¿Qué es una base de datos?", answer: "Una base de datos es un sistema que almacena y organiza datos para su fácil acceso." },
    { question: "¿Qué es una red neuronal?", answer: "Una red neuronal es un modelo computacional inspirado en el cerebro humano." },
    { question: "¿Qué es HTML?", answer: "HTML es un lenguaje de marcado utilizado para crear la estructura de las páginas web." },
    { question: "¿Qué es CSS?", answer: "CSS es un lenguaje que se utiliza para diseñar y estilizar páginas web." },
    { question: "¿Qué es machine learning?", answer: "Machine learning es una rama de la inteligencia artificial que permite a las máquinas aprender de datos." },
    
    // **Ayuda general**
    { question: "¿Cómo funciona esta IA?", answer: "Esta IA utiliza un modelo de machine learning para entender tus consultas." },
    { question: "¿Qué puedes hacer?", answer: "Puedo responder preguntas sobre tecnología y ayudarte con dudas comunes." },
    { question: "¿Quién te creó?", answer: "Fui creada por un desarrollador que quiere ayudarte con tus consultas." },
    { question: "¿Cómo puedo aprender JavaScript?", answer: "Puedes comenzar con recursos en línea como MDN Web Docs o plataformas como freeCodeCamp." },
    { question: "¿Dónde puedo aprender sobre machine learning?", answer: "Puedes aprender sobre machine learning en sitios como Coursera, edX o TensorFlow.org." },
    
    // **Estado y emociones**
    { question: "¿Cómo estás?", answer: "Estoy aquí para ayudarte con tus dudas." },
    { question: "¿Estás bien?", answer: "¡Claro que sí! ¿En qué puedo asistirte hoy?" },
    { question: "¿Cómo te sientes?", answer: "Me siento genial ayudándote con tus consultas." },
    { question: "¿Eres feliz?", answer: "¡Por supuesto! Mi felicidad es ayudarte." },
    
    // **Preguntas cotidianas**
    { question: "¿Qué día es hoy?", answer: `Hoy es ${new Date().toLocaleDateString()}.` },
    { question: "¿Qué hora es?", answer: `Ahora mismo son aproximadamente las ${new Date().toLocaleTimeString()}.` },
    { question: "¿Qué puedo cocinar?", answer: "¿Qué tal una pasta sencilla o un arroz con pollo? Si necesitas recetas, puedo buscarte opciones." },
    { question: "¿Cómo está el clima?", answer: "No puedo verificar el clima directamente, pero puedes consultarlo en tu app favorita." },
    { question: "¿Qué me recomiendas para ver?", answer: "Depende de tus gustos. Si te gustan las series, prueba algo en Netflix o Prime Video. ¿Te gusta la acción o el drama?" },
    { question: "¿Qué hago si estoy aburrido?", answer: "Puedes leer un libro, aprender algo nuevo o ver una película interesante. ¿Qué te gusta hacer?" },
    
    // **Consejos generales**
    { question: "¿Cómo puedo ahorrar dinero?", answer: "Intenta llevar un presupuesto mensual, evita compras impulsivas y busca ofertas en lo que necesites." },
    { question: "¿Cómo puedo organizarme mejor?", answer: "Haz listas de tareas, utiliza una agenda y prioriza las actividades más importantes." },
    { question: "¿Qué es bueno para el estrés?", answer: "El ejercicio, la meditación y dormir bien pueden ayudarte a reducir el estrés. ¿Te gustaría más consejos?" },
    { question: "¿Cómo mejorar mi salud?", answer: "Come saludable, haz ejercicio regularmente y mantén una buena hidratación." },
    
    // **Curiosidades**
    { question: "¿Cuál es el animal más rápido?", answer: "El guepardo es el animal terrestre más rápido, alcanzando hasta 112 km/h." },
    { question: "¿Cuántos planetas hay?", answer: "Hay 8 planetas en nuestro sistema solar. Plutón es considerado un planeta enano." },
    { question: "¿Qué tan grande es el Sol?", answer: "El Sol tiene un diámetro de aproximadamente 1,39 millones de kilómetros. ¡Es enorme!" },
    { question: "¿Quién inventó la bombilla?", answer: "Thomas Edison es reconocido por inventar la bombilla incandescente." },
    
    // **Problemas comunes**
    { question: "Mi computadora no enciende", answer: "Revisa si está conectada correctamente a la corriente y asegúrate de que el botón de encendido funcione." },
    { question: "No puedo conectarme a internet", answer: "Verifica tu conexión Wi-Fi, reinicia tu router y asegúrate de que el servicio esté activo." },
    { question: "¿Por qué mi página web no carga?", answer: "Revisa tu conexión a internet, limpia el caché del navegador o intenta con otro navegador." },
    
    // **Despedidas**
    { question: "Adiós", answer: "¡Hasta pronto! Que tengas un buen día." },
    { question: "adios", answer: "¡Hasta pronto! Que tengas un buen día." },
    { question: "Nos vemos", answer: "¡Claro! Espero verte de nuevo." },
    { question: "Gracias", answer: "¡De nada! Estoy aquí para ayudarte siempre que lo necesites." },
    { question: "Chao", answer: "¡Adiós! Cuídate." },
    
    // **Ocio y entretenimiento**
    { question: "¿Qué libro me recomiendas?", answer: "Si te gusta la ficción, prueba 'Cien años de soledad' de Gabriel García Márquez o 'El Principito' de Antoine de Saint-Exupéry." },
    { question: "¿Qué película me recomiendas?", answer: "Si te gustan los clásicos, prueba 'Forrest Gump'. Para algo reciente, prueba 'Dune'." },
    { question: "¿Qué música puedo escuchar?", answer: "Depende de tu estilo. Si buscas algo tranquilo, prueba música instrumental o jazz. Si quieres algo animado, prueba pop o reguetón." },
    
    // **Estilo de vida**
    { question: "¿Cómo puedo aprender un idioma?", answer: "Usa apps como Duolingo, mira películas en ese idioma y practica hablando con nativos." },
    { question: "¿Qué deporte es bueno para mí?", answer: "Elige algo que disfrutes. Puede ser caminar, nadar o incluso yoga. ¡La clave es moverte!" },
    { question: "¿Qué es bueno para la piel?", answer: "Usa protector solar, mantente hidratado y limpia tu piel regularmente." },
    
    // **Temas avanzados**
    { question: "¿Qué es un algoritmo?", answer: "Un algoritmo es un conjunto de pasos o instrucciones para resolver un problema o realizar una tarea." },
    { question: "¿Qué es un modelo preentrenado?", answer: "Es un modelo de machine learning que ya ha sido entrenado en un conjunto de datos y puede ser reutilizado para tareas específicas." },
    { question: "¿Qué es inteligencia artificial?", answer: "La inteligencia artificial es una rama de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana." },
    { question: "¿Qué es big data?", answer: "Big data se refiere a grandes volúmenes de datos que no pueden ser procesados con herramientas tradicionales debido a su tamaño y complejidad." },
    { question: "¿Qué es un framework?", answer: "Un framework es una estructura o entorno predefinido que facilita el desarrollo de aplicaciones." },
    
    // **Curiosidades**
    { question: "¿Qué es el aprendizaje profundo?", answer: "El aprendizaje profundo es una subrama del machine learning que utiliza redes neuronales con muchas capas." },
    { question: "¿Qué es un chatbot?", answer: "Un chatbot es un programa diseñado para simular conversaciones con usuarios." },
    { question: "¿Qué es GitHub?", answer: "GitHub es una plataforma para alojar y colaborar en proyectos de desarrollo de software utilizando control de versiones con Git." },

];
  