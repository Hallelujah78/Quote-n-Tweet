// react
import { useState, useEffect, useRef, useCallback } from "react";

// models
import { State } from "../models/state.model";

// utils
import { getRandomArbitrary } from "../utils/utils";

// configuration
import { QUOTE_URL, initialState } from "../config/config";

// models
import { Quote } from "../models/quote.model";

const useQuoteFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState<State>(initialState);
  const abortControllerRef = useRef<AbortController>();

  const getQuotes = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setIsLoading(true);
      const response = await fetch(QUOTE_URL, {
        signal: controller.signal,
      });
      const myQuotes: { quotes: Quote[] } = await response.json();

      if (myQuotes.quotes.length >= 1) {
        const quoteIndex = getRandomArbitrary(0, myQuotes.quotes.length);

        setState({
          quotes: [...myQuotes.quotes],
          quote: myQuotes.quotes[quoteIndex].quote,
          author: myQuotes.quotes[quoteIndex].author,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.name !== "AbortError") {
          setIsError(true);
        }
      }
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
