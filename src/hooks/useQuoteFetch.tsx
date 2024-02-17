// react
import { useState, useEffect, useRef, useCallback } from "react";
import { State } from "../models/state.model";
import { getRandomArbitrary } from "../utils/utils";

const QUOTE_URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const initialState = {
  quotes: [],
  quote: "",
  author: "",
};

const useQuoteFetch = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<State>(initialState);
  const abortControllerRef = useRef<AbortController>(null);

  const getQuotes = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(QUOTE_URL, {
        signal: controller.signal,
      });
      const myQuotes = await response.json();
      if (myQuotes) {
        console.log(myQuotes.quotes[0]);
        const quoteIndex = getRandomArbitrary(0, myQuotes.quotes.length);

        setState({
          quotes: [...myQuotes.quotes],
          quote: myQuotes.quotes[quoteIndex].quote,
          author: myQuotes.quotes[quoteIndex].author,
        });
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const currentController = abortControllerRef.current;
    getQuotes();
    return () => {
      currentController?.abort();
    };
  }, [getQuotes]);

  return { isError, isLoading, getQuotes, state };
};

export default useQuoteFetch;
