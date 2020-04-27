import React, { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getData } from './api';
import { Regions, Statistics, Title } from './components';
import { Spinner } from './components/common';
import { Layout } from './components/layout';
import { AppContext, AppReducer, initialState } from './context';
import { I18nProvider } from './i18n';
import { dark, GlobalStyles, light } from './theme';
import NavBar from './components/NavBar';


function App() {
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Get the data from the url
    //TODO: try to use react-queries
    getData().then((data) => setData(data));
  }, []);

  return (
    <di>
    <AppContext.Provider value={{ ...state, dispatch }}>
       <NavBar />
      <I18nProvider locale={state.lang}>
        <ThemeProvider theme={state.theme === 'light' ? light : dark}>
        <GlobalStyles></GlobalStyles>
          
          <Layout>
            {data && <Title lastUpdate={data.lastUpdate} />}
            {data ? <Statistics data={data} /> : <Spinner />}
            {data && data.regions && <Regions regions={data.regions}></Regions>}
          </Layout>
          
        </ThemeProvider>
      </I18nProvider>
      
    </AppContext.Provider>
    </di>
  );
}

export default App;
