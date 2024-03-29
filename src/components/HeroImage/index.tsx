import React from 'react';

//styles
import { Wrapper,Content, Text } from './HomeImage.styles';


//Types
interface Props {
  image: string;
  title: string;
  text: string;
}

const HeroImage: React.FC<Props> = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  )
};

export default HeroImage;
