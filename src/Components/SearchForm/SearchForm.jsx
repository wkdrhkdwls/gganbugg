import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getProfile } from "../../api/API_Profile";

// const API_KEY = "RGAPI-56cd37e9-6c32-4a22-a6ae-918ec5321c1f"; //하루마다 바꿔야됨.

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState([]);

  const searchData = () => {
    navigate(`/profile?q=${searchText}`);
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/profile?q=${searchText}`);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await getProfile();
        setSearchText(result);
      } catch (e) {
        console.error(e.message);
      }
    })();
  }, []);
  return (
    <SearchMain>
      <div className="container">
        <SearchFormContent>
          <SearchForms>
            <SearchElem>
              <Input
                type="text"
                placeholder="소환사 검색"
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={(event) => searchEnter(event)}
              />
              <Button type="submit" onClick={searchData}>
                <FaSearch className="text-purple" size={32} />
              </Button>
            </SearchElem>
          </SearchForms>
        </SearchFormContent>
      </div>
    </SearchMain>
  );
};

const SearchMain = styled.div`
  width: 100%;
  max-width: 680px;
`;

const SearchFormContent = styled.div``;
const SearchForms = styled.div``;

const SearchElem = styled.div`
  padding: 0.8rem 2.8rem;
  border-radius: 3.8rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 1px;
  font-size: 24px;
  line-height: 36px;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchForm;
