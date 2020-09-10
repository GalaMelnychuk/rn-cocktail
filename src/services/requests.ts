import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const requests = {
  getCategories: async () => {
    try {
      const categories = await axios({
        url: `${BASE_URL}/list.php?c=list`,
        method: 'get',
      });
      return categories;
    } catch (error) {
      console.log('error', error);
    }
  },

  getCoctails: async (categ: any) => {
    try {
      const response = await axios({
        url: `${BASE_URL}/filter.php?c=${categ}`,
        method: 'get',
      });
      const data = { id: Date.now().toString(), name: categ, coctails: response.data.drinks };

      return data;
    } catch (error) {
      console.log('error', error);
    }

    // console.log('cock', cock);
    // try {
    //   const response = await axios({
    //     url: `${BASE_URL}/filter.php?c=${categ}`,
    //     method: 'get',
    //   });
    //   // const data = { name: categ, coctails: response.data.drinks };
    //   // console.log('data', data);
    //   return response;
    // } catch (error) {
    //   console.log('error', error);
    // }
  },
};
