import styled from "styled-components";

type QuoteProps = {
  quote: string;
};

const QuoteText: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <Wrapper>
      <p>{quote}</p>
    </Wrapper>
  );
};
export default QuoteText;

const Wrapper = styled.span`
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  p {
    font-size: 2.2rem;
    color: #ffc133;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    text-align: center;
  }
`;
