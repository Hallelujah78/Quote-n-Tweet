import styled from "styled-components";
import { FaSquareXTwitter } from "react-icons/fa6";

type XQuoteProps = {
  quote: string;
  author: string;
};

const XQuote: React.FC<XQuoteProps> = ({ quote, author }) => {
  return (
    <Wrapper>
      <a
        target="_top"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
      >
        <FaSquareXTwitter className="x-icon" />
      </a>
    </Wrapper>
  );
};
export default XQuote;

const Wrapper = styled.div`
  margin-top: 10rem;

  height: auto;
  text-align: center;
  .x-icon {
    font-size: 2rem;
    margin: auto;
    transition: 0.4s;
    color: black;
    transition: linear 0.3s all;
    &:hover {
      transform: scale(1.08);
      opacity: 0.8;
    }
  }
`;
