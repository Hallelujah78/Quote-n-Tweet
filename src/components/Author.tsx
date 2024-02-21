import styled from "styled-components";

type AuthorProps = {
  author: string;
};

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <Wrapper>
      <p data-test="author" id="author">{`- ${author}`}</p>
    </Wrapper>
  );
};
export default Author;

export const Wrapper = styled.div`
  display: block;
  width: auto;
  height: auto;
  margin-right: 1rem;
  p {
    padding: 5px;
    float: right;
    font-size: 1.3rem;
    color: #ffc133;
    height: auto;
  }
`;
