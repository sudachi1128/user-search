import React, {useEffect, useState} from 'react';
import axios from '../apis/axios';
import Resources from './Resources';
import SelectGender from './SelectGender';
import Pagination from './Pagination';

const App = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({
    results: 20,
    inc: 'gender,name,email,phone,location,picture',
    gender: 'all',
    page: 0,
  });
  useEffect(
    () => getUser(),
    [queryParams]
    );
  const getUser = async() => {
    try {
      setLoading(true);
      const response = await axios.get('', {params: queryParams});
      setResources(response.data.results);
      setLoading(false);
    } catch {
      alert("アプリケーションで問題が発生しています");
        }
  };
  const handlePageChange = (data) => {
    setQueryParams({...queryParams, page: data.selected});
  };
  const handleGender = (e) => {
    setQueryParams({...queryParams, gender: e.target.value, page: 0});
  };
  return(
    <>
      <SelectGender handleGender={handleGender}/>
      <Resources resources={resources} loading={loading}/>
      <Pagination handlePageChange={handlePageChange} currentPage={queryParams.page}/>
    </>
  );
};

export default App;