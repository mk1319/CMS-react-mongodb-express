import styled from "styled-components";

export const Form = styled.div`
  text-align: center;
  h1 {
    font-size: 48px;
    font-weight: 900;
  }
  p {
    color: rgba(21, 30, 41, 0.5);
    font-size: 16px;
    font-weight: 500;
    margin: 12px auto;
  }
  form {
    margin-top: 50px;
    p {
      font-weight: 500;
      font-size: 14px;
      &.forgot-password {
        text-align: center;
        padding-right: 16px;
        margin: initial auto;
      }
    }
    input,textarea{
      border-radius: 40px;
      padding: 12px 24px;
      background: transparent;
      width: stretch;
      margin-top: 24px;
      transition: all 0.3s ease;
      &:hover {
        border-color: rgba(95, 108, 123, 0.5);
      }
    }
  }
  input,textarea,
  p {
    max-width: 334px;
    
  }

  .action-group {
    margin-top: 20px;
    button {
      font-size: 12px;
      border-radius: 40px;
      font-weight: 600;
      width: stretch;
      padding: 16px;
      margin-bottom: 20px;
      cursor: pointer;
      max-width: 334px;
      margin: auto;
      background-color:#00a2ff;
    }
    button:focus {
      outline: none;
    }
    span {
      cursor: pointer;
      font-weight: bold;
      opacity: 1;
    }
  }
  input:focus {
    outline: none;
  }
  textarea:focus{
    outline:none;
  }
  @media (min-width: 768px) {
    max-width: 400px;
    form {
      margin-top: 25px;
    }
    input,
    p {
      max-width: auto;
    }
  }
`;