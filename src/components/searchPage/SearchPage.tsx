"use client"
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import SearchBar from './SearchBar';

const SearchPage: React.FC = () => {
  const searchPropsList = [
    {
      dividerText: 'google search',
      placeholder: 'google search',
      searchTarget: 'google',
      getSearchURL: (keyWord: string)=> {
        return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord);
      }
    },
    {
      dividerText: 'google search(搜索中文结果)',
      placeholder: 'google search(搜索中文结果)',
      searchTarget: 'google_zh',
      getSearchURL: (keyWord: string)=> {
        return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord) + '&lr=lang_zh-CN';
      }
    },
    {
      dividerText: 'baidu search',
      placeholder: 'baidu search',
      searchTarget: 'baidu',
      getSearchURL: (keyWord: string)=> {
        return 'https://www.baidu.com/s?wd=' + encodeURIComponent(keyWord);
      }
    },
    {
      dividerText: '末日动漫资源库',
      placeholder: '搜索末日动漫资源库',
      searchTarget: 'acgnx',
      getSearchURL: (keyWord: string)=> {
        return 'https://share.acgnx.se/search.php?sort_id=0&keyword=' + encodeURIComponent(keyWord);
      }
    },
  ]
  return (
    <>
      <Row>
        <Col offset={2} span={20} xxl={{ offset: 4, span: 16 }}>
          {searchPropsList.map((searchItem: any) => {
            return (
              <SearchBar
                key={searchItem.searchTarget}
                dividerText={searchItem.dividerText}
                placeholder={searchItem.placeholder}
                searchTarget={searchItem.searchTarget}
                getSearchURL={searchItem.getSearchURL}
              />
            )
          })}
        </Col>
      </Row>
    </>
  )
}

export default SearchPage;