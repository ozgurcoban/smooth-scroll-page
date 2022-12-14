import styled from 'styled-components';

export const ServicesContainer = styled.section`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem 1rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 10rem;
  width: 10rem;
  margin-bottom: 0.6rem;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
