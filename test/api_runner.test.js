const Scryfall_API_Fetcher = require('../src').Scryfall_API_Fetcher;
beforeEach( ()=>{
  //teacher = new Teacher('Jane Doe', 'Biology', 'UCLA', 6);
  fetcher = new Scryfall_API_Fetcher();
});

describe('API Fetcher', () => {
  describe('insantiates a new fetcher class', () => {
    test('takes the following arguments:', () => {
      //expect(grade.graduationYear).toBe(2028);
      expect(typeof (fetcher)).toBe('object');
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
    describe('get_first_image_of_card(search)', () => {
    test('Function is function', () => {
      expect(typeof fetcher.get_first_image_of_card).toBe('function');
    });

    test('Function returns the needed thing\'s type', () => {
      let response = fetcher.get_first_image_of_card('defenestrate');
      // console.log(response);
      expect(typeof response).toBe('string');
    });
    test('Function returns the needed thing', () => {
      let response = fetcher.get_first_image_of_card('defenestrate');
      // console.log(response);
      expect(response).toBe('https://cards.scryfall.io/small/front/8/8/88ce5cb9-7a29-4e4c-8bdb-4d3847067b33.jpg?1673159485');
    });
  });

});