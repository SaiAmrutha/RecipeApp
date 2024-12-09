import Pages from "./pages/Pages";
import Category from "../src/components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <LogoWrapper>
            <GiKnifeFork />
            <Logo to={"/"}>deliciousss</Logo>
          </LogoWrapper>
          <CategoryWrapper>
            <Category />
          </CategoryWrapper>
          <SearchWrapper>
            <Search />
          </SearchWrapper>
        </Header>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0;
  margin: 0;
  width: 25%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;
