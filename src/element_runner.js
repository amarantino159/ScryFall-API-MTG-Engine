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


  init_button(){ // just grabs the card characteristics
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

  html_ify(array){
    let oldcards = this.pic.getElementsByTagName('img');
    while(oldcards.length>0){
      oldcards[0].remove();
    }
    // this.pic.innerHTML='';
    for(let i=0;i<array.length&&i<12;i++){
      let url = array[i]['image_uris']['small'];
      let card=document.createElement("img");
      card.id = 'card';
      card.src = `${url}`;
      card.alt = array[i]['name'];
      this.pic.appendChild(card);
      // this.pic.innerHTML= this.pic.innerHTML+`<img src='${url}' alt=${array[i]['name']} />\n`;
    }
  }






  flashText() {
    if(this.loaded.id !== "loading2")
    {
      this.loaded.id = "loading1";
      this.loaded.innerHTML = "LOADING...";
    }
    else{
      this.loaded.id = "loading2";
      this.loaded.innerHTML = "LOADING.";
    }
    console.log('FLASH')
  }
  changeColor() {
      // check if an interval has already been set up
      console.log("Timer started")
      // this.intervalID ??= setInterval(this.flashText, 300);
      this.intervalID ??= setInterval(()=>{
        if(this.loaded.id !== "red")
        {
          this.loaded.id = "red";
          this.loaded.innerHTML = "LOADING...";
        }
        else{
          this.loaded.id = "black";
          this.loaded.innerHTML = "LOADING.";
        }
        console.log('FLASH')
      }, 300);
    }
  stopTextColor() {
    this.loaded.id =  "loaded";
    this.loaded.innerHTML = "LOADED";
    clearInterval(this.intervalID);
    console.log('Timer stopped')
    // release our intervalId from the variable
    this.intervalID = null;
  }

  makePic(card_name,order='name',dir='auto',unique='cards'){
    // let intervalID;
    // let count = 0;
    // intervalID??= setInterval(() => {
    //   count++;
    //   console.log(`loading for ${count*.02} second.`);
    // }, 20);
    this.changeColor()
    let data = fetch(`https://api.scryfall.com/cards/search?q=${card_name}&order=${order}&dir=${dir}&unique=${unique}`)
    .then((response)=>response.json())
    .then((jsoned)=>{
      return jsoned['data']
    })
    .then((array)=>this.html_ify(array))
    .then(setTimeout(()=>{this.stopTextColor()},1000))
    .then()
    // .then(clearInterval(intervalID))
  };

  // makePic(card_name,order='name',dir='auto'){
  //   let data = fetch(`https://api.scryfall.com/cards/search?q=${card_name}&order=${order}&dir=${dir}`)
  //   .then((response)=>response.json())
  //   .then((jsoned)=>{
  //     return jsoned['data'][0]['image_uris']['small']
  //   })
  //   .then((url)=>{this.pic.innerHTML= `<img src='${url}' alt=${card_name} />`;});
  // };

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