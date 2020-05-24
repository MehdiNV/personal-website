import rightSideImage from '../images/firstpatternsvg.svg';
import leftSideImage from '../images/secondpatternsvg.svg';
import footerImage from '../images/thirdpatternsvg.svg';

import styled from 'styled-components';

export const RightBackgroundPattern = styled.div`
  background-image: url(${rightSideImage});
  background-size: cover;

`;

export const LeftBackgroundPattern = styled.div`
  background-image: url(${leftSideImage});
  background-size: cover;

`;

export const FooterBackgroundPattern = styled.div`
  background-image: url(${footerImage});
  background-size: cover;

`;
