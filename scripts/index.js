

import { quotes } from './data.js';
import { getRandomArrayItem, showQuote, showImage, searchWord } from './action.js';


function init() {

    let { quote, image } = getRandomArrayItem(quotes);

    showQuote(quote);
    showImage(image);
document.querySelector('div.notfind').innerHTML = '';

}

init();

// button
document.querySelector('button.btn-secondary').addEventListener('click', init);

// adding search
document.querySelector('form').addEventListener('submit', (e) => {

    e.preventDefault();

    document.querySelector('div.notfind').innerHTML = '';

    let searchValue = e.target.elements.search.value;

    // console.log(searchWord(quotes, searchValue));

    let output = searchWord(quotes, searchValue);

    if (output){
        let {quote, image} = output;
        showQuote(quote);
        showImage(image);
    //    document.querySelector('div.notfind').innerHTML = '';

    } else {

        document.querySelector('div.notfind').innerHTML = '<b><i> Searched Quote Not Found </b></i>';
    }

    e.target.elements.search.value = '';

})





