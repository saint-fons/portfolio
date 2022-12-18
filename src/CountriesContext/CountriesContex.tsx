import React, { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { getAllCountries } from '../Utils/FetchCountries';
import { countriesInterface } from '../Utils/FetchCountriesTypes';
import { CountriesContexInterface } from './CountriesContexTypes';

export const CountriesContex = React.createContext<CountriesContexInterface | null>(null);
export const useProduction = () => {
  const productionContext = React.useContext(CountriesContex);
  if (productionContext === null) {
    throw new Error('No ProductionContext.Provider found when calling useProduction.');
  }
  return productionContext;
};

export const CountriesContexProvider: React.FunctionComponent<{ children: React.ReactNode }> = (props) => {
  const [countries, setCountries] = React.useState<countriesInterface | undefined>();
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', false);
  const [error, setError] = React.useState<boolean>(false);
  useEffect(() => {
    const getDate = () => {
      getAllCountries
        .then((countries) => {
          setCountries(countries);
        })
        .catch((err) => {
          setError(true);
        });
    };

    getDate();
  }, []);

  return (
    <CountriesContex.Provider
      value={{
        countries,
        error,
      }}
    >
      {props.children}
    </CountriesContex.Provider>
  );
};
