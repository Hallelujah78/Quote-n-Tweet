// components
import QuoteText from "./components/QuoteText.tsx";
import Author from "./components/Author.tsx";
import NewQuote from "./components/NewQuote.tsx";

// styles
import { GlobalStyle } from "./styles/GlobalStyles.tsx";

// third party
import styled from "styled-components";
import useQuoteFetch from "./hooks/useQuoteFetch";

const App: React.FC = () => {
  const { isLoading, isError, state, getQuotes } = useQuoteFetch();
  const { quote, author } = state;
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
      <div className="container">
        <GlobalStyle />

        <QuoteText quote={quote} />

        <Author author={author} />

        <NewQuote text="New Quote" getQuotes={getQuotes} />
        {/*
      <TweetQuote id="tweet-quote" author={state.author} quote={state.quote} /> */}
      </div>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  /* background: #FFC133; */
  justify-content: center;
  position: relative;
  .container {
    border-radius: 10px;
    background: #fff;
    height: auto;
    width: 85vw;
    margin: auto;
    align-items: center;
    display: inline-block;
    justify-content: center;
  }
`;
