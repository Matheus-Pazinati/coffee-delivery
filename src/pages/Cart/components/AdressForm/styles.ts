import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 2.5rem 0;

  @media (min-width: 750px) {
    padding: 0 5rem;
  }

  @media (min-width: 1350px) {
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    fieldset {
      background-color: ${({theme}) => theme["base-card"]};
      padding: 2rem;
      border-radius: 6px;
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

      .ToggleContainer {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        justify-content: center;
      }

      .ToggleItem {
        padding: 1rem;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme["base-text"]};
        display: flex;
        align-items: center;
        gap: 0.35rem;
        background-color: ${({theme}) => theme["base-button"]};
        border: none;
        border-radius: 6px;
        margin-bottom: 1rem;
        cursor: pointer;
        font-size: 0.75rem;
        &:hover {
          background-color: ${({theme}) => theme["base-hover"]};
        };
        @media (min-width: 750px) {
          flex: 1
        };  
      }

      .ToggleItem[data-state="on"] {
        background-color: ${({theme}) => theme["purple-light"]};
        outline: 1.5px solid ${({theme}) => theme.purple};
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

    label {
      position: relative;
      display: flex; 
      flex: 1;
    }

    i {
      position: absolute;
      right: 0.75rem;
      top: 25%;
      font-size: 0.75rem;
      color: ${({theme}) => theme["base-label"]};
      font-style: italic;
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