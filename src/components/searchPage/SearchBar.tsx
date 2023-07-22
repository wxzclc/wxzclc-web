"use client"
import React, { useState } from 'react';
import { Input, Divider } from 'antd';
import { HeatMapOutlined } from '@ant-design/icons';
import { SearchDividerStyle } from '@/app/css/CSSProperties';

const { Search } = Input;

interface SearchBarProps {
  dividerText: string,
  placeholder: string,
  searchTarget: string,
  getSearchURL: (keyword: string) => string,
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const onSearch = (keyWord: string) => {
    if (keyWord) {
      const searchURL = props.getSearchURL(keyWord);
      window.open(searchURL, '_blank');
    }
  }
  return (
    <>
      <Divider orientation='left' style={SearchDividerStyle}>
        <HeatMapOutlined /> {props.dividerText}
      </Divider>
      <Search placeholder={props.placeholder} allowClear showCount onSearch={onSearch} enterButton />
    </>
  )
}

export default SearchBar;
