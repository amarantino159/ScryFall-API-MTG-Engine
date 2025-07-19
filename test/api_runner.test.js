const Scryfall_API_Fetcher = require('../src').Scryfall_API_Fetcher;
beforeEach( ()=>{

//   fetcher = new Scryfall_API_Fetcher('defenestrate');
//   const temp = async () => {
//     let x = await Scryfall_API_Fetcher.search_a_Card(fetcher,'defenestrate');
//     // console.log(typeof x)
//     while(x == undefined){
//       setTimeout(()=>{},500)
//       console.log("Promise!")
//     }
// setTimeout(()=>{},500);
//     this.data2=15;
//     return x;
//   };
//   temp();

  doThis = async (search) =>{
    fetcher = await Scryfall_API_Fetcher.create(search);
    return fetcher;
  };

});

describe('API Fetcher', () => {
  describe('insantiates a new fetcher class', () => {
    test('takes the following arguments:', () => {

      doThis('defenestrate')
      .then((fetcher)=>{
        expect(typeof (fetcher)).toBe('object');
      });
    });
    test('fetcher has data:', () => {
      //console.log(fetcher.data2)
      doThis('defenestrate')
      .then((fetcher)=>{
              console.log(fetcher['data']['total_cards'])
            })
      .then((fetcher)=>{
        expect(typeof fetcher['data']['total_cards']).toBe('number');
        return fetcher;
      });
    });
  });





























































  describe('search_a_Card(search)', () => {
    test('Function is function', () => {
      expect(typeof fetcher.search_a_Card).toBe('function');
    });

    test('Function returns a json object', () => {
      let response = fetcher.search_a_Card('defenestrate');
      // console.log(response);
      expect(typeof response).toBe('object');
    });
  });

  describe('get_first_card(search)', () => {
    test('Function is function', () => {
      expect(typeof fetcher.get_first_card).toBe('function');
    });

    test('Function returns the needed thing', () => {
      let response = fetcher.get_first_card('defenestrate');
      // console.log(response);
      expect(typeof response).toBe('object');
    });
  });
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