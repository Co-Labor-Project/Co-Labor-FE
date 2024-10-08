import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
import SearchOutput from '../components/SearchOutput';
const Search = () => {
  const params = useParams();

  return (
    <div>
      <SearchOutput input={params.keyword} />
    </div>
  );
};

export default Search;
