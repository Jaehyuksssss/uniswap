> 구현 사항

      - Home(product list page)
        (검색기능 , react-router-dom을 통한 페이지 이동)
      - Swap
        (토큰 별 환율 계산 , 토큰 선택 모달)
      - 각 해상도별 반응형 구현

> 사용 스택

      - React
      - Recoil
      - Styled-components
      - typescript

## 실행 방법

```
    - npm install
    - npm start
```

## 구조 및 내용 설명

      ├── public
            ├── images
            ├── data
                ├── cards.json
                ├── minicards.json
                ├── token.json

         ├── src
            ├── atoms
            ├── componetns
            ├── containers
            ├── hooks
            ├── pages
            ├── styles
            ├── utils
                ├──interfaces
                ├──constants

> 설명

      - 각 디렉토리에서 해당하는 기능이나 역할에 맞는 파일들을 모아서 관리하였습니다.

      - public 폴더에서 json 형태로 서버 response를 받는것을 가정하여 mock 데이터로 관리하였습니다.

      - useGettokensData.ts, useGetCards 등 axios를 사용하여 데이터를 패칭하는 로직을 hooks로 관리 하였습니다.
      - 상수와 interface는 utils에서 관리하였습니다.
      - media query를 사용하여 사이즈별 반응형으로 구현 하였습니다.

### HOME(검색 기능 및 카드 리스트)(searchBox.tsx)

- 검색창 기능
- 반응형 구현

- filter와 includes를 사용하여 검색창 구현
- 바깥쪽을 누르면 검생창이 닫히는것을 구현하기 위해 useOutsideClick hooks 사용
- Learn more 스크롤 밑으로 이동 (useScrollToBottom)

```jsx
const searched = tokensData.filter((item) => item.name.toLowerCase().includes(searchInputValue.toLowerCase()));
```

<img src="https://github.com/Jaehyuksssss/my_boilerplate/blob/master/src/public/images/learnmore.gif?raw=true"  width="642" height="500" alt="image">

<img src="https://github.com/Jaehyuksssss/my_boilerplate/blob/master/src/public/images/search.gif?raw=true"  width="642" height="500" alt="image">

<img src="https://github.com/Jaehyuksssss/my_boilerplate/blob/master/src/public/images/%EB%B0%98%EC%9D%91%ED%98%95.gif?raw=true"  width="642" height="500" alt="image">

### SWAP(Exchange.tsx)

- 모달에서 토큰을 선택하고 토큰별 가격이 얼마인지 계산할 수 있는 페이지.
- 'ETH','WBTC','USDC'의 데이터를 tokens.json 에서 관리
- 자주 사용되는 각 토큰이 몇 달러인지 계산할 수 있는 hooks를 만들어 사용
  (useCalculate.ts)

  <img src="https://github.com/Jaehyuksssss/my_boilerplate/blob/master/src/public/images/swap.gif?raw=true" width="642" height="500" alt="image">
