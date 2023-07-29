"use client"
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import SearchBar from './SearchBar';
import { searchList } from '@/config/config';

interface SearchPage {
  newWorldFlg: boolean
}

const SearchPage: React.FC<SearchPage> = (props) => {
  return (
    <>
      <Row>
        <Col offset={2} span={20} xxl={{ offset: 4, span: 16 }}>
          {searchList.map((searchItem: any) => {
            if (props.newWorldFlg || searchItem.newWorldFlg == false) {
              return (
                <SearchBar
                  key={searchItem.searchTarget}
                  dividerText={searchItem.dividerText}
                  placeholder={searchItem.placeholder}
                  searchTarget={searchItem.searchTarget}
                  getSearchURL={searchItem.getSearchURL}
                />
              )
            }
          })}
        </Col>
      </Row>
    </>
  )
}

export default SearchPage;