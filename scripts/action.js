
export function getRandomArrayItem(array) {
    let randomIndexNum = Math.floor(Math.random() * array.length);
    return array[randomIndexNum];
}


export function showQuote(quote) {
    document.querySelector('#quote').textContent = quote;
}

export function showImage(srcValue) {
    let elemImg = document.querySelector('img');
    elemImg.src = srcValue;
    elemImg.setAttribute('height', '300');
}


export function searchWord(array, word){
        word = word.toLowerCase();
      return  array.find( item => item.quote.toLowerCase().includes(word));

  }

