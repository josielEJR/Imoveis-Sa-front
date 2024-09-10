import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 90%;
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

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    color: white;
    transition: color 0.3s;

    &:hover {
      color: white;
    }
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }
`;
