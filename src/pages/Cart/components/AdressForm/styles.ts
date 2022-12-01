import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 750px) {
    padding: 0 5rem;
  }

  @media (min-width: 1350px) {
    padding: 0 10rem;
  }
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    padding-left: 2rem;
    margin-bottom: 1rem;

    @media (min-width: 750px) {
     padding-left: 0 ;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    fieldset {
      background-color: ${({theme}) => theme["base-card"]};
      padding: 2rem;
      @media (min-width: 750px) {
        padding: 2rem 2.5rem 1rem 2.5rem;
  }
      h3 {
        color: ${({theme}) => theme["base-subtitle"]};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 2rem;
        div {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        span {
          font-size: 0.875rem;
        }
      }
    }

    select {
      padding: 0.75rem;
      background-color: ${({theme}) => theme["base-input"]};
      border: 1px solid ${({theme}) => theme["base-button"]};
      outline: none;
      -webkit-appearance: none;
      color: ${({theme}) => theme["base-label"]};
      margin-bottom: 1rem;
    }
  }
`
export const FormInputContainer = styled.div`
    @media (min-width: 750px) {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      justify-content: center;
  }
`

export const FormInputBase = styled.input`
  padding: 0.75rem;
  background-color: ${({theme}) => theme["base-input"]};
  border: 1px solid ${({theme}) => theme["base-button"]};
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;
  outline: none;

  &:focus {
    outline: 1.5px solid ${({theme}) => theme["yellow-dark"]};
  }

  ::placeholder {
    color: ${({theme}) => theme["base-label"]};
  }
`

export const FormInputSmall = styled(FormInputBase)`
  width: 12.5rem;
`