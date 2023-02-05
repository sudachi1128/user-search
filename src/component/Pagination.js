import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageChange,currentPage}) => {
  return (
    <Container>
      <ReactPaginate
      pageCount={18}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      previousLabel='<<'
      nextLabel='>>'
      breakLabel='...'
      containerClassName='pagination'
      pageClassName='pagination__item'
      pageLinkClassName='pagination__link'
      previousLinkClassName='pagination__previous'
      nextLinkClassName='pagination__next'
      breakClassName='pagination__break'
      activeClassName='pagination__active'
      disabledClassName='pagination__disabled'
      />
  </Container>
  );
};

export default Pagination;

const Container = styled.div`
  max-width: 1100px;
  margin: 90px auto 0;
  padding-bottom: 45px;
  .pagination{
    display: flex;
    justify-content: center;
    list-style: none;
    font-size: 20px;
    a{
      color:black;
      cursor: pointer;
    }
    &__item{
      margin: 0 20px 0;
    }
    &__previous,&__next{
      font-size: 30px;
      opacity: 1;
    }
    &__break{
      pointer-events: none;
    }
    &__active{
      font-size: 25px;
      border-bottom: solid 1px black;
    }
  }
`;