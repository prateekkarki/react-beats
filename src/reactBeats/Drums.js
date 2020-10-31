import Artwork from "./Artwork";
import styled from "@emotion/styled";

const StyledDrums = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Drums() {
  return (
    <StyledDrums>
      <Artwork />
    </StyledDrums>
  );
}

export default Drums;
