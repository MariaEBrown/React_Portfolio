import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './IntroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        New to coding! Dedicated to continuing training and developing skills by staying up to date with the lates technologies.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/MariaEBrown'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;