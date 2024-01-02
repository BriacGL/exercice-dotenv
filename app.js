require('dotenv').config();

const name = process.env.MY_NAME || 'John Doe';
const city = process.env.MY_CITY || 'Unknown City';
const language = process.env.MY_LANGUAGE || 'a programming language';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);