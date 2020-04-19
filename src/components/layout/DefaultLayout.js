import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { KEYS } from '../../i18n';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Numer from '../Extension/Numero';
import Title from '../Title';
import Inforr from '../Extension/Information';
const Wrapper = styled.div`
  font-family: ${(props) =>
    props.lang.startsWith('ar') ? "'Amiri', serif" : "'Open Sans', sans-serif"};
`;

function DefaultLayout({ children }) {
  const { lang } = useContext(AppContext);
  return (
    <Wrapper
      lang={lang}
      className="container mx-auto p-1 m-b-2 flex flex-col min-h-screen"
    >
      
      <HelmetProvider>
      
        <FormattedMessage id={KEYS.WEBSITE_TITLE}>
          {(title) => (
            <Helmet>
              <title>{title}</title>
              <html lang={lang.split('-')[0]} />
            </Helmet>
          )}
        </FormattedMessage>
        
        <Header>
        <Title></Title>
        </Header>
        <Main>{children}</Main>
        
         <Numer />
         <Inforr />
        <Footer />
      </HelmetProvider>
    </Wrapper>
  );
}

export default DefaultLayout;
