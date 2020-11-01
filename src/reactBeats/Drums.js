import Artwork from "./Artwork";
import anime from "animejs";
import styled from "@emotion/styled";
import { Howl } from "howler";

import {
  crash,
  hiHat,
  highTom,
  kick,
  lowTom,
  snareHi,
  snareLow,
} from "./sounds";

const crashSound = new Howl({
  src: [crash]
});
const hiHatSound = new Howl({
  src: [hiHat]
});
const highTomSound = new Howl({
  src: [highTom]
});
const kickSound = new Howl({
  src: [kick]
});
const lowTomSound = new Howl({
  src: [lowTom]
});
const snareHiSound = new Howl({
  src: [snareHi]
});
const snareLowSound = new Howl({
  src: [snareLow]
});


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
  kickSound.play();
  bounce(e.currentTarget);
};
const onSnareLeft = (e) => {
  snareHiSound.play()
  bounce(e.currentTarget);
};
const onSnareRight = (e) => {
  snareLowSound.play()
  bounce(e.currentTarget);
};
const onTomLeft = (e) => {
  lowTomSound.play()
  bounce(e.currentTarget);
};
const onTomRight = (e) => {
  highTomSound.play()
  bounce(e.currentTarget);
};
const onHiHat = (e) => {
  hiHatSound.play()
  bounce(e.currentTarget);
};
const onCrash = (e) => {
  crashSound.play()
  bounce(e.currentTarget);
};

function Drums() {
  return (
    <StyledDrums>
      <Artwork
        kick={onKick}
        snareRight={onSnareRight}
        snareLeft={onSnareLeft}
        tomRight={onTomRight}
        tomLeft={onTomLeft}
        hiHat={onHiHat}
        crash={onCrash}
      />
    </StyledDrums>
  );
}

export default Drums;
