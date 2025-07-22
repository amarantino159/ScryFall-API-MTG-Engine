import Scryfall_API_Fetcher from './api_runner.js';

class Elements {
  constructor(){
    this.btn= document.querySelector('#submit');
    this.newCard=document.querySelector('#newCard');
    this.pic=document.querySelector('#pic');
    this.ordering=document.querySelector('#order-select');
    this.dir=document.querySelector('#Dir-select');
    this.unique=document.querySelector('#unique-select');
    this.loaded=document.querySelector('.loading');
    this.intervalID=null;
    this.data;
  };


  init_button(){ // just makes the event listener
    this.btn.addEventListener('click', ()=>{
      let card = this.newCard.value.replace(":", "3%A");
      let order = this.ordering.value;
      let dir = this.dir.value;
      let unique = this.unique.value
      console.log(card,order,dir,unique);
      this.makePic(card,order,dir,unique);
      }
    );
  };

  html_ify(array){ // makes the html use the card props
    let oldcards = this.pic.getElementsByTagName('img');
    while(oldcards.length>0){
      oldcards[0].remove();
    }
    for(let i=0;i<array.length&&i<16;i++){
      let url = array[i]['image_uris']['normal'];
      let card=document.createElement("img");
      card.id = 'card';
      card.src = `${url}`;
      card.alt = array[i]['name'];
      // card.height= '100px';
      // card.width= '100px';
      this.pic.appendChild(card);
    }
  }
  changeColor() {
      // check if an interval has already been set up
      this.intervalID ??= setInterval(()=>{
        if(this.loaded.id !== "red")
        {
          this.loaded.id = "red";
          this.loaded.innerHTML = "LOADING...";
        }
        else{
          this.loaded.id = "magenta";
          this.loaded.innerHTML = "LOADING.";
        }
      }, 300);
    }
  stopTextColor() {
    this.loaded.id =  "loaded";
    this.loaded.innerHTML = "LOADED";
    clearInterval(this.intervalID);
    // release our intervalId from the variable
    this.intervalID = null;
  }

  makePic(card_name,order='name',dir='auto',unique='cards'){
    this.changeColor()
    let data = fetch(`https://api.scryfall.com/cards/search?q=${card_name}&order=${order}&dir=${dir}&unique=${unique}`)
    .then((response)=>response.json())
    .then((jsoned)=>{
      return jsoned['data']
    })
    .then((array)=>this.html_ify(array))
    .then(setTimeout(()=>{this.stopTextColor()},3000))
  };

  dataLoaded(){
    let intervalID;
    let lim = 10;
    intervalID??= setInterval(() => {
      if(this.data||lim<1){
        console.log(this.data);
        clearInterval(intervalID);
        //intervalID=null;
        return true;
      }
      lim--;
      console.log("Delayed for .2 second.");
    }, 200);
  };



}
export default Elements //{}
// module.exports = Elements;