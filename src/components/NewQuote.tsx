type NewQuoteProps = {
  text: string;
  getQuotes: () => void;
};

const NewQuote: React.FC<NewQuoteProps> = ({ text, getQuotes }) => {
  return <button onClick={getQuotes}>{text}</button>;
};
export default NewQuote;
