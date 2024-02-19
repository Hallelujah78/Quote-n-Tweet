import styled from "styled-components";

type NewQuoteProps = {
  text: string;
  getQuotes: () => void;
};

const NewQuote: React.FC<NewQuoteProps> = ({ text, getQuotes }) => {
  return <Wrapper onClick={getQuotes}>{text}</Wrapper>;
};
export default NewQuote;

const Wrapper = styled.button`
  padding: 0.5rem 0.75rem;
  height: 3.5rem;
  margin: 1rem 1.25rem 0 0;
  float: right;
  clear: both;
  display: block;
  background: #ffc133;
  font-size: 2rem;
  color: #fff;
  border-radius: 6px;
  border: 0px;
  transition: 0.2s linear all;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1.05);
  }
`;
