import { Header, SearchResult } from '@/components';
import useAxios from '@/util/http-commons';
import { httpStatusCode } from '@/util/http-status';
import { foodResult } from '@/types/type';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DietSearchPageWrapper = styled.div`
  padding-top: 4rem;
`;

const FoodList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 2rem 4.75rem 2rem;
`;

const DietSearchPage = () => {
  const navigator = useNavigate();

  const location = useLocation();

  const category = location.state.category;
  const dietId = location.state.dietId;

  const goBack = () => {
    navigator(`/diet/${category}`, { state: { dietId } });
  };

  const [searchStr, setSearchStr] = useState<string>('');
  const [foodInfoList, setFoodInfoList] = useState<foodResult[]>();

  const searchFood = async () => {
    setFoodInfoList(undefined);
    try {
      const response = await useAxios.get('/diet/search', {
        params: { searchStr },
      });

      if (response.status === httpStatusCode.OK) {
        setFoodInfoList(response.data);
      } else if (response.status === httpStatusCode.NOCONTENT) {
        setFoodInfoList(undefined);
      }
    } catch (err) {
      console.log('음식 검색 에러:', err);
    }
  };

  return (
    <DietSearchPageWrapper>
      <Header
        iconName="back"
        onClick={goBack}
        search={true}
        placeholder="어떤 음식을 드셨나요?"
        onChange={setSearchStr}
        searchFood={searchFood}
        isFixed={true}
      />
      <FoodList>
        {foodInfoList
          ? foodInfoList.map((food: foodResult) => (
              <SearchResult
                result={food}
                type="diet"
                category={category}
                key={food.foodInfoId}
                dietId={dietId}
              />
            ))
          : ''}
      </FoodList>
    </DietSearchPageWrapper>
  );
};

export default DietSearchPage;