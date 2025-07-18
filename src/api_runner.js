class Scryfall_API_Fetcher{

  constructor(){
    this.api_start = 'https://api.scryfall.com/cards/search?';

  };

  async search_a_Card(search){
    let ans = await fetch(`${this.api_start}q=${search}`)
    .then(rawResponse => {
      if(!rawResponse.ok){
        throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`)
      }
      return rawResponse.json()
    })
    //.then(jsonifiedResponse => console.log("Jsonified data: ", jsonifiedResponse))
    .catch( error => {throw new Error('JSON or API error')})//console.log(error))
    //console.log('in the search_a_card func ',ans);
    return ans;
  };

  async get_first_card(search){
    let full_call = await this.search_a_Card(search);
    let full_data0 = full_call['data'][0];
    // console.log(full_data[0])
    return full_data0;
  };

  async get_first_image_of_card(search){
    let card = this.get_first_card(search);
    let card_image_obj = card['image_uris'];
    let card_img_url = card_image_obj['small'];
    console.log(card_img_url);
    return card_img_url;
  };

}


module.exports = Scryfall_API_Fetcher;