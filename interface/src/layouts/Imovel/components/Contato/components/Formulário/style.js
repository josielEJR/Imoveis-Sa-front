import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;

   @media (min-width: 1230px) {
        max-width: 500px;
    }
`

export const Container = styled.div`
    display: flex; 
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 100%;

    @media (min-width: 1230px) {
        align-items: normal;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 70px;
    margin-bottom: 20px;
    font-weight: 300;
    padding: 24px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    padding: 10px;
    font-weight: 300;
    padding: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    resize: none;
`

export const Button = styled.button`
    width: 100%;
    max-width: 250px;
    height: 70px;
    background-color: black;
    font-weight: 600;
    color: white;
    font-size: 22px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`