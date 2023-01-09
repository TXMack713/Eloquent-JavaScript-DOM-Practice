// Import stylesheets
import './style.css';

// Write Javascript code!
// Following along with the DOM example from chapter 13 of Eloquent JavaScript
let paragraphs = document.body.getElementsByTagName('p');
document.body.insertBefore(paragraphs[2], paragraphs[0]);
