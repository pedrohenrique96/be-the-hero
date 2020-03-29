import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '~/assets/logo.svg';
import heroImg from '~/assets/heroes.png';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;
export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
    color: #fff;
  }
`;
export const Logo = styled.img.attrs({
  src: logoImg,
})``;
export const LiknSignUp = styled(Link).attrs({
  to: '/register',
})`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
export const ImageHero = styled.img.attrs({
  src: heroImg,
})``;
