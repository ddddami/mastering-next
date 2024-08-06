import React from 'react';
import {
  Html,
  Preview,
  Container,
  Link,
  Body,
  Text,
  Tailwind,
} from '@react-email/components';
const WelcomeEmail = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Hiya!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-xl">Hello, {name} ..</Text>
            <Text>
              Hello, arcade this is me sending emails from my next app
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
