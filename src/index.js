import Elements from './element_runner.js'
import Scryfall_API_Fetcher from './api_runner.js';


let elements = new Elements();
elements.init_button();
console.log(elements);

// module.exports = {
//   // Scryfall_API_Fetcher: require('./api_runner'),
//   Elements: require('./element_runner'),
// }