import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiTerminal } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiTerminal size="3rem" /> <Span> arthurvo.com</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/arthurvo94">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arthurvo/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/arthur.vo/?hl=en">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100009211774852">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
