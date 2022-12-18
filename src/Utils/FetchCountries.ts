import { countriesInterface } from './FetchCountriesTypes';

export const getAllCountries = new Promise<countriesInterface>((resolve, reject) => {
  var requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('https://restcountries.com/v3.1/all', requestOptions)
    .then(async (response) => {
      if (response.ok) {
        resolve(await (response as any).text());
      } else {
        //todo здесь назначить ошибку
        reject(response.statusText);
      }
    })
    .then((result) => console.log(result))
    .catch((error) => {
      reject(error);
      console.log('error', error);
    });

  console.log('Success');
});
