"use client"
import React, { useState } from 'react';
import { Col, Row } from 'antd';
import SearchBar from './SearchBar';

const SearchPage: React.FC = () => {
  const searchPropsList = [
    {
      dividerText: 'google搜索',
      placeholder: 'google搜索',
      searchTarget: 'google',
      getSearchURL: (keyWord: string)=> {
        return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord);
      }
    },
    {
      dividerText: 'google搜索(中文结果)',
      placeholder: 'google搜索(中文结果)',
      searchTarget: 'google_zh',
      getSearchURL: (keyWord: string)=> {
        return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord) + '&lr=lang_zh-CN';
      }
    },
    {
      dividerText: '百度搜索',
      placeholder: '百度搜索',
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
    {
      dividerText: 'goo辞書',
      placeholder: '搜索goo词典',
      searchTarget: 'goo',
      getSearchURL: (keyWord: string)=> {
        return 'https://dictionary.goo.ne.jp/srch/all/' + encodeURIComponent(keyWord) + '/m0u/';
      }
    },
    {
      dividerText: 'weblio日中・中日辞書',
      placeholder: '搜索weblio词典',
      searchTarget: 'weblio',
      getSearchURL: (keyWord: string)=> {
        return 'https://cjjc.weblio.jp/content/' + encodeURIComponent(keyWord);
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