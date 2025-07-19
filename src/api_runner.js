class Scryfall_API_Fetcher{

  constructor(data){
    this.api_start = 'https://api.scryfall.com/cards/search?';

    this.data=data;
    // this.data2;
    // this.data = Scryfall_API_Fetcher.search_a_Card('defenestrate');
    // console.log(this.data);
    // this.search_a_Card(search);
  };

  static async create(search){
    data = await fetch(`https://api.scryfall.com/cards/search?q=${search}`);
    data = await data.json();
    return new Scryfall_API_Fetcher(data);
  }



  static async search_a_Card(fetcher,search){
    try{
      var ans = await fetch(`https://api.scryfall.com/cards/search?q=${search}`);
      data = await ans.json();
      fetcher.data = await data;
    }
    catch(error){
      console.log(error);
    };
    //fetcher.data = data;
  };

  // static async loadcheck(){
  //   try{
  //     this.data != undefined
  //   }
  //   catch(error){
  //     console.log(error);
  //   };
  //   return data;
  // };


  // async get_first_card(search){
  //   let full_call = await this.search_a_Card(search);
  //   let full_data0 = full_call['data'][0];
  //   // console.log(full_data[0])
  //   return full_data0;
  // };

  // async get_first_image_of_card(search){
  //   let card = this.get_first_card(search);
  //   let card_image_obj = card['image_uris'];
  //   let card_img_url = card_image_obj['small'];
  //   console.log(card_img_url);
  //   return card_img_url;
  // };

}


module.exports = Scryfall_API_Fetcher;