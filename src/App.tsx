// components
import QuoteText from "./components/QuoteText";

// styles
import { GlobalStyle } from "./styles/GlobalStyles.tsx";

// third party
import styled from "styled-components";
import useQuoteFetch from "./hooks/useQuoteFetch";

const App: React.FC = () => {
  const { isLoading, isError, state } = useQuoteFetch();
  if (isLoading)
    return (
      <>
        <div>Loading...</div>
      </>
    );

  if (isError)
    return (
      <>
        <div>Something went wrong...</div>
      </>
    );
  return (
    <Wrapper>
      <GlobalStyle />

      <QuoteText quote={state.quote} />

      {/* <Author author={state.author} />

      <NewQuote text="New Quote" callback={getQuotes} />

      <TweetQuote id="tweet-quote" author={state.author} quote={state.quote} /> */}
    </Wrapper>
  );
};

export default App;

export const Wrapper = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  /* background: #FFC133; */
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  border-radius: 10px;
  background: #fff;

  height: auto;
  width: 85vw;
  margin: auto;
  align-items: center;
  display: inline-block;
  justify-content: center;
`;
