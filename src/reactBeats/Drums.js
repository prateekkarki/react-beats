import Artwork from "./Artwork";
import anime from "animejs";
import styled from "@emotion/styled";

const StyledDrums = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const bounce = (el) => {
  anime({
    targets: el,
    scale: [1, 1.1, 1],
    easing: "easeInOutQuad",
    duration: 150,
  });
};

const onKick = (e) => {
  bounce(e.currentTarget);
};
const onSnare = (e) => {
  bounce(e.currentTarget);
};
const onTom = (e) => {
  bounce(e.currentTarget);
};
const onHiHat = (e) => {
  bounce(e.currentTarget);
};
const onCrash = (e) => {
  bounce(e.currentTarget);
};

function Drums() {
  return (
    <StyledDrums>
      <Artwork
        kick={onKick}
        snare={onSnare}
        tom={onTom}
        hiHat={onHiHat}
        crash={onCrash}
      />
    </StyledDrums>
  );
}

export default Drums;
