
const api_start = 'https://api.scryfall.com/cards/search?';

class Scryfall_API_Fetcher{


  constructor(data){

    this.data=data;

  };

  static async search_a_Card(search){
    data = await fetch(`${api_start}q=${search}`)
    .then((response)=>response.json());

    return new Scryfall_API_Fetcher(data);
  }


  loadCheck(){
    return (this.data!==undefined);
  };


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

export default Scryfall_API_Fetcher;
// module.exports = Scryfall_API_Fetcher;