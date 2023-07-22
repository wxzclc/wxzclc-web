"use client"
import React, { useState } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchBar: React.FC = () => {
  const onSearch = (keyWord: string)=> {
    if (keyWord) {
      // 
    }
  }
  return (
    <>
      <Search placeholder="google search" onSearch={onSearch} enterButton />
    </>
  )
}

export default SearchBar;
