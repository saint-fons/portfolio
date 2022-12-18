import { countriesInterface } from '../Utils/FetchCountriesTypes';

export interface CountriesContexInterface {
  countries: countriesInterface | undefined;
  error: boolean;
}
