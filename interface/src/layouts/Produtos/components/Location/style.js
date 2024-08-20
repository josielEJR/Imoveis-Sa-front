import styled from "styled-components"

export const Wrapper = styled.section`
    width: 1444px;
    height: 103px;
    border-left: 5px solid #454545;
    display: flex;
    padding: 12px 25px;
    gap: 450px;

    @media (max-width: 1464px){
        width: 1198px;
    }

    @media (max-width: 1220px){
        max-width: 896px;
        gap: 160px;
    }

    @media (max-width: 900px){
        gap: 100px;
        width: 90%;
        margin: 0 auto;
        height: 100px;
        align-items: center;
    }

    @media (max-width: 700px){
        gap: 0;
    }

    @media (max-width: 600px){
        flex-wrap: wrap;
        height: 170px;
        margin: 0 auto;
    }
`

export const Title = styled.div`
    width: 492px;
    height: 49px;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;

    @media (max-width: 1220px){
        font-size: 23px;
    }

    @media (max-width: 900px){
        height: 80px;
    }
`

export const LocationSection = styled.div`
    width: 500px;
    height: 53px;
`

export const InsertLocation = styled.div`
    height: 39px;
    padding: 5px 10px;
    box-sizing: content-box;
    border-radius: 8px;
    background-color: #D9D9D9;
    display: flex;
    color: #454545;
    gap: 25px;
    border: ${({ error }) => error !== '' ? '2px solid red' : '2px solid transparent'};

    @media (max-width: 600px){
        padding: 0;
    }
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: 35px;

    @media (max-width: 1464px){
        font-size: 23px;
    }
`

export const Label = styled.div``

export const Input = styled.input`
    width: 100%;
    height: 29px;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    padding: 5px;
    box-sizing: content-box;
    background-color: transparent;

    &:focus{
        outline: none;
    }

    @media (max-width: 900px){
        font-size: 14px;
    }
`

export const Dropdown = styled.div`
    width: 100%;
    height: 180px;
    padding: 20px;
    background-color: #D9D9D9;
    position: relative;
    display: ${({ display }) => display === '' ? "none" : "block"};
    overflow-y: scroll;

    @media (max-width: 900px){
        height: 150px;
    }

    /* width */
    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #D9D9D9; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: grey; 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
`

export const Button = styled.button`
    font-size: 24px;
`

export const Ul = styled.ul``

export const Li = styled.li`
    font-size: 24px;
    font-weight: 400;

    @media (max-width: 900px){
        font-size: 18px;
    }

    &:hover{
        font-weight: 700;
    }
`

export const Error = styled.div`
    width: 100%;
    text-align: center;
    color: red;
    font-weight: 500;
    font-size: 18px;
`