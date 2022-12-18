import React from 'react';
import { useProduction } from './CountriesContext/CountriesContex';
import AllCountries from './AllCountries/AllCountries';
import { Link, MessageBar, MessageBarType } from '@fluentui/react';

const App = () => {
  const { error } = useProduction();
  return (
    <>
      {!error ? (
        <AllCountries />
      ) : (
        <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close">
          Error MessageBar with single line, with dismiss button.
          <Link href="www.bing.com" target="_blank" underline>
            Visit our website.
          </Link>
        </MessageBar>
      )}
    </>
  );
};

export default App;
