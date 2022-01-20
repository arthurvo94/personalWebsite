import React from 'react';

import { Section, SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Arthur Vo. Check out some of my projects down below!
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
  
);

export default Hero;