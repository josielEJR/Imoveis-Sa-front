import styled from "styled-components";

export const Wrapper = styled.div`
    .swiper{
        width: 100%;
        height: 630px;

    @media (min-width: 1000px){
        width: 600px;
    }

    @media (min-width: 1200px){
        width: 700px ;
    }
    }

    .swiper-pagination{
        color: #454545;
        
        @media (max-width: 1000px){
            display: none;
        }
    }

    .swiper-pagination-bullet{
        background: black;
    }

    .swiper-button-prev, .swiper-button-next {
        opacity: 50%;
        background-color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: black;
    }

    .swiper-button-prev:after, .swiper-button-next:after {
        font-size: 20px;
    }
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`


