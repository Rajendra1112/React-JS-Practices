import styled from "styled-components";
import { Button, Container, DATABASE_URL } from "../App";

function FoodCardsContainer({ data: foods }) {
  return (
    <FoodCardsSection>
      <Container>
        <FoodCards>
          {foods?.map(({ name, price, text, image }) => (
            <FoodCard key={name}>
              <div className="food-image">
                <img src={DATABASE_URL + image} alt="food item image" />
              </div>
              <div className="food-info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                {/* to make integer value into fixed value or float value the we can use toFixed(no of zeros after decimal) method after price variable*/}
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardsSection>
  );
}

export default FoodCardsContainer;

const FoodCardsSection = styled.section`
  min-height: calc(100vh - 210px);
  background: url("/images/bg.png");
  background-size: cover;
  padding: 80px 0;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 170px;
  border: 1px solid #ff4343;
  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );

  backdrop-filter: blur(12px);
  border-radius: 20px;

  display: flex;
  padding: 10px;
  justify-content: space-between;

  .food-info {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    h3 {
      margin-top: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 5px;
      font-size: 14px;
      text-align: justify;
    }
  }
`;
