import React from 'react';
import { useDispatch } from 'react-redux';

import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';
import { setFilter } from 'redux/store/phoneBookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterForm>
      <FilterLabel htmlFor="search">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterForm>
  );
};
