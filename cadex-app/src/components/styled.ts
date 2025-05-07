import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const AppHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 2.5rem;
  background: white;
  border-bottom: 1px solid #D9D9D9;
  z-index: 100;
  fill: white;
`;

export const AppNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppLogo = styled(Link)`
  font-weight: 600; 
  font-size: 1.5rem; 
  color: #1E1E1E;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const AppContactLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #2C2C2C;
  border: 1px solid #2C2C2C;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(44, 44, 44, 0.1);
    text-decoration: none;
  }
`;

export const TextUnderHeading = styled.p`
  font-size: 16px;
  color: #1E1E1E;
  letter-spacing: 0;
  line-height: 22px;
`;

export const AppMain = styled.main`
  flex: 1;
  padding: 2rem 0;
`;

export const AppFooter = styled.footer`
  padding: 1rem;
  text-align: center;
  background: #f5f5f5;
  border-top: 1px solid #eee;
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const LessSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const VideoContainer = styled.div`
  width: 530px;
  height: 235px;
  background: #D9D9D9;

  position: relative; 
  overflow: hidden;   
  border-radius: 4px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  
  @media (max-width: 1200px) {
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 530/235; 
    margin: 20px 0;
  }
`;
