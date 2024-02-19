// components
import QuoteText from "./components/QuoteText.tsx";
import Author from "./components/Author.tsx";
import NewQuote from "./components/NewQuote.tsx";
import XQuote from "./components/XQuote.tsx";
import Error from "./components/Error.tsx";
import Loading from "./components/Loading.tsx";

// styles
import { GlobalStyle } from "./styles/GlobalStyles.tsx";

// third party
import styled from "styled-components";

// hooks
import useQuoteFetch from "./hooks/useQuoteFetch";

const App: React.FC = () => {
  const { isLoading, state, getQuotes } = useQuoteFetch();
  const { quote, author } = state;
  console.log(`the value of quote is: ${quote}`);
  return (
    <Wrapper>
      <GlobalStyle />

      {quote ? (
        <>
          <div className="container">
            <QuoteText quote={quote} />

            <Author author={author} />

            <NewQuote text="New Quote" getQuotes={getQuotes} />
          </div>
          <XQuote author={author} quote={quote} />
        </>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Error />
      )}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  place-content: center;
  display: grid;
  height: 100vh;
  width: 100vw;
  .container {
    width: 85vw;
  }
`;
