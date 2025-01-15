/* eslint-disable no-unused-vars */
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { faqData } from './faqData';
import { evaluate } from 'mathjs';

let model;
let questionEmbeddings = [];

// Cargar el modelo y calcular embeddings de preguntas
export const loadModel = async () => {
  if (!model) {
    await tf.setBackend('webgl');
    await tf.ready();
    model = await use.load();
    console.log('Modelo cargado');

    // Generar embeddings para preguntas predefinidas
    const questions = faqData.map((item) => item.question);
    questionEmbeddings = await model.embed(questions);
  }
};

// Detectar expresiones matemáticas
const isMathExpression = (query) => {
  const mathRegex = /^[0-9+\-*/().\s]+$/; // Solo números y operadores
  return mathRegex.test(query.trim());
};

// Detectar consultas matemáticas en lenguaje natural
const extractMathFromNaturalLanguage = (query) => {
  const mathNaturalRegex = /cuánto es\s*([\d+\-*/().\s]+)/i; // Busca frases como "cuánto es 2+2"
  const match = query.match(mathNaturalRegex);
  return match ? match[1] : null; // Devuelve la operación matemática encontrada
};

// Evaluar expresión matemática
const evaluateExpression = (expression) => {
  try {
    const result = evaluate(expression);
    return `El resultado es: ${result}`;
  } catch (error) {
    return "Lo siento, no pude calcular esa expresión. ¿Puedes verificar si es correcta?";
  }
};

const detectLanguage = (query) => {
  const spanishKeywords = ["hola", "qué", "cómo", "adiós", "gracias"];
  const englishKeywords = ["hello", "what", "how", "bye", "thanks"];

  const normalizedQuery = query.trim().toLowerCase();

  if (spanishKeywords.some(word => normalizedQuery.includes(word))) {
    return "es"; // Español
  } else if (englishKeywords.some(word => normalizedQuery.includes(word))) {
    return "en"; // Inglés
  } else {
    return "unknown"; // Idioma no detectado
  }
};

const filterDatasetByLanguage = (language) => {
  if (language === "es") {
    return faqData.filter(item => /^[¿¡a-záéíóúñü\s]+$/i.test(item.question));
  } else if (language === "en") {
    return faqData.filter(item => /^[a-z\s?]+$/i.test(item.question));
  }
  return [];
};


// Procesar consulta
export const findBestMatch = async (query) => {
  if (!model) {
    await loadModel();
  }

  // Normalizar la consulta del usuario
  const normalizedQuery = query.trim().toLowerCase();

  // Detectar el idioma de la consulta
  const detectLanguage = (query) => {
    const spanishKeywords = ["hola", "cómo", "qué", "adiós", "gracias"];
    const englishKeywords = ["hello", "how", "what", "bye", "thanks"];

    if (spanishKeywords.some(word => query.includes(word))) {
      return "es"; // Español
    } else if (englishKeywords.some(word => query.includes(word))) {
      return "en"; // Inglés
    } else {
      return "unknown"; // Idioma no detectado
    }
  };

  const language = detectLanguage(normalizedQuery);

  // Filtrar el dataset según el idioma detectado
  const filterDatasetByLanguage = (language) => {
    if (language === "es") {
      console.log("español");
      
      return faqData.filter(item => /^[¿¡a-záéíóúñü\s]+$/i.test(item.question));
    } else if (language === "en") {
      console.log("ingles");
      return faqData.filter(item => /^[a-z\s?]+$/i.test(item.question));
      
    }
    return [];
  };

  const filteredFaqData = filterDatasetByLanguage(language);

  // Si no se encuentra un dataset relevante, responder en ambos idiomas
  if (filteredFaqData.length === 0) {
    return language === "unknown"
      ? "Lo siento, no entiendo tu consulta. Intenta preguntar en español o inglés.\nI’m sorry, I didn’t understand your query. Please try asking in Spanish or English."
      : language === "es"
      ? "Lo siento, no entiendo tu consulta. Por favor, reformúlala."
      : "I’m sorry, I didn’t understand your query. Please try rephrasing.";
  }

  // Coincidencias exactas para preguntas clave
  const exactMatches = {
    // Español
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "cómo estás": "Estoy aquí para ayudarte con tus dudas.",
    "cómo te sientes": "Me siento genial ayudándote con tus consultas.",
    "eres humano": "No, soy una inteligencia artificial, pero estoy aquí para ayudarte.",

    // Inglés
    "hello": "Hello! How can I help you?",
    "how are you": "I’m here to assist you with your questions.",
    "what is your purpose": "I’m here to help you with your doubts and queries.",
    "are you human": "No, I’m an artificial intelligence, but I’m here to help you as best as I can.",
  };

  if (exactMatches[normalizedQuery]) {
    return exactMatches[normalizedQuery];
  }

  // Verificar si la consulta es una expresión matemática directa
  if (isMathExpression(normalizedQuery)) {
    return evaluateExpression(normalizedQuery);
  }

  // Verificar si es una pregunta en lenguaje natural con una operación matemática
  const mathExpression = extractMathFromNaturalLanguage(normalizedQuery);
  if (mathExpression) {
    return evaluateExpression(mathExpression);
  }

  // Generar el embedding de la consulta
  const queryEmbedding = await model.embed([normalizedQuery]);

  // Generar embeddings de las preguntas filtradas
  const normalizedFilteredFaqData = filteredFaqData.map((item) => ({
    ...item,
    question: item.question.toLowerCase(), // Convertir preguntas a minúsculas
  }));

  const filteredQuestionEmbeddings = await model.embed(
    normalizedFilteredFaqData.map((item) => item.question)
  );

  // Calcular similitud de coseno
  const similarities = tf.matMul(queryEmbedding, filteredQuestionEmbeddings, false, true);
  const bestMatchIndex = similarities.argMax(1).arraySync()[0];

  return normalizedFilteredFaqData[bestMatchIndex]?.answer || 
    (language === "es" 
      ? "Lo siento, no pude encontrar una respuesta adecuada." 
      : "I’m sorry, I couldn’t find a suitable answer.");
};

  
  
