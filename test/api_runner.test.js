const Scryfall_API_Fetcher = require('../src').Scryfall_API_Fetcher;
beforeEach( ()=>{

  _INIT = async (search) =>{
    fetched = await Scryfall_API_Fetcher.search_a_Card(search);
    return fetched;
  };

});

describe('API Fetcher', () => {
  describe('insantiates a new fetcher class', () => {
    test('takes the following arguments:', () => {

      _INIT('defenestrate')
      .then((fetched)=>{
        expect(typeof (fetched.data)).toBe('object');
      });
    });
    test('fetcher has data:', () => {
      _INIT('defenestrate')
      .then((fetched)=>{
              console.log(fetched.data['data']['total_cards']);
              return fetched;
            })
      .then((fetched)=>{
        // console.log(fetched.loadCheck())
        expect(typeof (fetched.data['data']['total_cards'])).toBe('number');
        return fetched;
      });
    });
  });





























































  // describe('search_a_Card(search)', () => {
  //   test('Function is function', () => {
  //     expect(typeof fetcher.search_a_Card).toBe('function');
  //   });

  //   test('Function returns a json object', () => {
  //     let response = fetcher.search_a_Card('defenestrate');
  //     // console.log(response);
  //     expect(typeof response).toBe('object');
  //   });
  // });

  // describe('get_first_card(search)', () => {
  //   test('Function is function', () => {
  //     expect(typeof fetcher.get_first_card).toBe('function');
  //   });

  //   test('Function returns the needed thing', () => {
  //     let response = fetcher.get_first_card('defenestrate');
  //     // console.log(response);
  //     expect(typeof response).toBe('object');
  //   });
  // });
  // describe('get_first_image_of_card(search)', () => {
  //   test('Function is function', () => {
  //     expect(typeof fetcher.get_first_image_of_card).toBe('function');
  //   });

  //   test('Function returns the needed thing\'s type', () => {
  //     let response = fetcher.get_first_image_of_card('defenestrate');
  //     // console.log(response);
  //     expect(typeof response).toBe('string');
  //   });
  //   test('Function returns the needed thing', () => {
  //     let response = fetcher.get_first_image_of_card('defenestrate');
  //     // console.log(response);
  //     expect(response).toBe('https://cards.scryfall.io/small/front/8/8/88ce5cb9-7a29-4e4c-8bdb-4d3847067b33.jpg?1673159485');
  //   });
  // });

});