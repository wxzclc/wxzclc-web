export const searchList = [
  {
    dividerText: 'google搜索',
    placeholder: 'google搜索',
    searchTarget: 'google',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord);
    }
  },
  {
    dividerText: 'google搜索(中文结果)',
    placeholder: 'google搜索(中文结果)',
    searchTarget: 'google_zh',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://www.google.com/search?q=' + encodeURIComponent(keyWord) + '&lr=lang_zh-CN';
    }
  },
  {
    dividerText: '百度搜索',
    placeholder: '百度搜索',
    searchTarget: 'baidu',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://www.baidu.com/s?wd=' + encodeURIComponent(keyWord);
    }
  },
  {
    dividerText: '末日动漫资源库',
    placeholder: '搜索末日动漫资源库',
    searchTarget: 'acgnx',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://share.acgnx.se/search.php?sort_id=0&keyword=' + encodeURIComponent(keyWord);
    }
  },
  {
    dividerText: 'goo辞書',
    placeholder: '搜索goo词典',
    searchTarget: 'goo',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://dictionary.goo.ne.jp/srch/all/' + encodeURIComponent(keyWord) + '/m0u/';
    }
  },
  {
    dividerText: 'weblio日中・中日辞書',
    placeholder: '搜索weblio词典',
    searchTarget: 'weblio',
    newWorldFlg: false,
    getSearchURL: (keyWord: string)=> {
      return 'https://cjjc.weblio.jp/content/' + encodeURIComponent(keyWord);
    }
  },
  {
    dividerText: 'DLsite',
    placeholder: '搜索DLsite',
    searchTarget: 'dlsite',
    newWorldFlg: true,
    getSearchURL: (keyWord: string)=> {
      return 'https://www.dlsite.com/maniax/fsr/=/language/jp/sex_category%5B0%5D/male/keyword/' + encodeURIComponent(keyWord) + '/order%5B0%5D/trend/options_and_or/and/per_page/30/page/1/from/fs.header';
    }
  },
]