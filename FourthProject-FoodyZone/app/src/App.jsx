import styled from "styled-components";
import { useEffect, useState } from "react";
import FoodCardsContainer from "./components/FoodCardsContainer";

export const DATABASE_URL = "http://localhost:9000";

const App = () => {
  // to store data that we fetch from server side or database
  const [data, setData] = useState(null);
  // to show error if there is any when we fetch the data from network
  const [error, setError] = useState(null);
  // to show loading message or spin until data got fetched completely from server side
  const [loading, setLoading] = useState(false);

  // display of data after filtration
  const [filteredData, setFilteredData] = useState(null);

  // selection of food type
  const [selectedFoodTypeBtn, setSelectedFoodTypeBtn] = useState("all");

  useEffect(() => {
    // we need to define the below function inside the useEffect hook to stop the infinite loop as the function get called multiple times and if we define fetch function directly and call it then it cause multiple rendering problem in react
    const fetchNetworkData = async () => {
      setLoading(true);
      try {
        const response = await fetch(DATABASE_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch network data.");
      }
    };

    fetchNetworkData();
  }, []);

  if (loading) return <div>Loading Data ...</div>;
  if (error) return <div>{error}</div>;

  // filtration logic start
  // function that needs to invoked when there is change in value in search bar
  const searchData = (e) => {
    const enteredValueToSearch = e.target.value;
    console.log(enteredValueToSearch);

    // checking
    if (enteredValueToSearch == "") {
      setFilteredData(null);
    }

    // use of filter method on the data that we received with the use of enteredValueToSearch
    const filter = data?.filter((valueOfData) =>
      valueOfData.name
        .toLowerCase()
        .includes(enteredValueToSearch.toLowerCase())
    );

    setFilteredData(filter);
  };
  // filtration logic end

  // display of foods based on selection of types of food

  const selectionOfFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedFoodTypeBtn("all");
      return;
    }

    // use of filter method on the data that we received with the use of type of food
    const filterTypesOfFood = data?.filter((valueOfData) =>
      valueOfData.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filterTypesOfFood);
    setSelectedFoodTypeBtn(type);
  };

  // we create array for the buttons of food types
  const foodTypesBtns = [
    {
      btnName: "all",
      foodType: "all",
    },
    {
      btnName: "Breakfast",
      foodType: "breakfast",
    },
    {
      btnName: "Lunch",
      foodType: "lunch",
    },
    {
      btnName: "Dinner",
      foodType: "dinner",
    },
  ];

  return (
    <>
      <Container>
        <TopSection>
          <div className="logo">
            <img src="/images/Foody Zone.svg" alt="logo" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Food ..."
              onChange={searchData}
            />
          </div>
        </TopSection>

        <FilterSection>
          {foodTypesBtns.map((valueOfFoodTypesBtns) => (
            <Button
              key={valueOfFoodTypesBtns.btnName}
              onClick={() => selectionOfFood(valueOfFoodTypesBtns.foodType)}
              // passing isSelected prop
              isSelected={selectedFoodTypeBtn == valueOfFoodTypesBtns.foodType}
            >
              {valueOfFoodTypesBtns.btnName}
            </Button>
          ))}
        </FilterSection>
      </Container>

      {/* pass filteredData state as a props in FoodCardsContainer component */}
      <FoodCardsContainer data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .search-bar {
    input {
      height: 40px;
      background-color: transparent;
      outline: none;
      border: 1px solid red;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
      color: white;
      &::placeholder {
        color: white;
      }
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
  }
`;

const FilterSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 20px 0;
`;

export const Button = styled.button`
  padding: 6px 12px;
  /* receving prop of Button component */
  background-color: ${({ isSelected }) => (isSelected ? "#6a0000" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "none")};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: #6a0000;
  }
`;
