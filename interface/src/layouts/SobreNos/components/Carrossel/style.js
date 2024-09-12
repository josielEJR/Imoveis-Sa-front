import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 40px 0;
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0; 
    margin: 0; 
  }

  .swiper-slide img {
    width: 100%; 
    height: 500px;
    object-fit: cover;
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
    

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .custom-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @media (max-width: 1280px) {
        display: none;
    }

  }

  .custom-pagination .swiper-pagination-bullet {
    background-color: #454545;
;
    opacity: 1;
    margin: 0 8px;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    background-color: black;
  }
`;


  



