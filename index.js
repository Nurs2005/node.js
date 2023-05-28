const cowModule = require('./cow');
const eventModule = require('./events');
const keywordModule = require('./keywordModule');

console.log('Module 1:');
cowModule.say('Hello, I am a talking cow!');
cowModule.changeAppearance();
console.log();

console.log('Module 2:');
const emitter = eventModule.createListener('Event argument');
eventModule.simulateEvent(emitter);
console.log();

console.log('Module 3:');
const text = 'This is a sample text. It contains multiple occurrences of the word text.';
keywordModule.findKeywords(text, 'text');