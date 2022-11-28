import styled from "styled-components";

import bannerImg from '../../../../assets/cd-banner.png'
import bannerBackground from '../../../../assets/cd-banner-background.png'

type IconBackgroundColors = 'yellow' | 'yellow-dark' | 'purple' | 'base-text'

interface HeaderIconsProps {
  backgroundVariant: IconBackgroundColors
}

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  background: url(${bannerBackground});

  @media (min-width: 750px) {
    display: flex;
    align-items: center;
    padding: 2rem 5rem;
  }
  @media (min-width: 1350px) {
    padding: 4rem 10rem;
    gap: 2rem;
  }
`

export const BannerImage = styled.div`
  background: url(${bannerImg}) no-repeat center/cover;
  width: 100%;
  height: 360px;
  max-width: 476px;
  margin: 0 auto;

  @media (min-width: 750px) {
    order: 1;
  }
`

export const HeaderContentContainer = styled.div`
  padding: 0 2rem;
  margin-top: 2rem;

  @media (min-width: 750px) {
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 1350px) {
        margin-bottom: 4rem;
       }

    h1 {
      font-size: 2rem;
      color: ${({theme}) => theme["base-title"]};
      line-height: 1.3;
      font-weight: 800;

      @media (min-width: 1350px) {
        font-size: 3rem;
       }
    }

    p {
      font-size: 1.15rem;
      color: ${({theme}) => theme["base-subtitle"]};

      @media (min-width: 1350px) {
        font-size: 1.25rem;
       }
    }
  }

  ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      @media (min-width: 1350px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 0;
        row-gap: 1.25rem;
       }

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }
`
export const HeaderIcon = styled.i<HeaderIconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[`${props.backgroundVariant}` as IconBackgroundColors]};
  color: ${({theme}) => theme.background};
  padding: 0.5rem;
  border-radius: 50%;
`