type SearchItem = {
  dividerText: string;
  placeholder: string;
  searchTarget: string;
  newWorldFlg: boolean;
  getSearchURL: (keyword: string) => string;
}

export type NaviGroup = {
  sort: number;
  newWorldFlg: boolean;
  display?: boolean;
  naviContent: Array<NaviItem>;
}

export type NaviItem = {
  icon: string;
  title: string;
  key: string;
  newWorldFlg: boolean;
  url: string;
}

export const searchList: Array<SearchItem> = [
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

export const naviList: Array<NaviGroup> = [
  {
    sort: 0,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'https://dengekibunko.jp/apple-touch-icon.png',
        title: '電撃文庫',
        key: 'dengekibunko',
        newWorldFlg: false,
        url: 'https://dengekibunko.jp/'
      },
      {
        icon: 'https://mwbunko.com/apple-touch-icon.png',
        title: 'MW文库',
        key: 'mwbunko',
        newWorldFlg: false,
        url: 'https://mwbunko.com/'
      },
      {
        icon: 'https://www.shinchobunko-nex.jp/img/common/logo.png',
        title: '新潮文库NEX',
        key: 'shinchobunko-nex',
        newWorldFlg: false,
        url: 'https://www.shinchobunko-nex.jp/'
      },
      {
        icon: 'https://gagagabunko.jp/img/webclip.png',
        title: 'ガガガ文庫',
        key: 'gagagabunko',
        newWorldFlg: false,
        url: 'https://gagagabunko.jp/release/index.html'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABECAMAAACMCVq7AAAAYFBMVEUAsJv///8ArJau3dVCuKZSvq1dwrIAqpIPsp77/fzF599/y7+i2c5BuqfC49zB5+Lb8e2349wttqJsyLru+fjP7OcApYuQ0cZ1yrrj9PCI0cVmwrNvw7Tz+fap3dOZ1conKvaUAAACQElEQVRYhe2Wa9eiIBCAYVRGShMJNOXV/v+/3MFb1LbnWO22X3g+ICrHh8swwlgkEolEIpFIJBL5z8A939LiOQkZs79p/vO3oOYPHPeJm/AjSEV+Y31c1nprMiHcOql6lknrGXx1wD3alIutf1BIxrKg6xno0nPhbrpqGt7JM8jpUgATc0uDCNjYqb5rvCnvtv5pPnhvcVzRqO6msELgtvLUtS8Db1ayvFSveHm7NEQ7e89BbGqtcz2R8YPOGXCB9KKpr3RBaiBufVqrO712aQgZt3L2Bu/h3PqognxQ/jF5jSRoRQkFN2/9qlcM9TTT2FXt717GOkPxlct5OYCffWihTXDeq+97syMv/YiOPJ/jSjQzuMxDNzAwZhk+d04R0vhSfOIVTaf8WHiBD/G87ESwQ7dovbc3OtWqTlPtZ+YDLy2sABj5uo9OxUySrTK5bTZa334oxsIoKj70MjwNUPILLN7zQ6qFzpz4kv5ynvVD2/adpeJTL23co6W42bx3LWh7lVgtIy553hv3I9TB/bg77/iGF66Um9hzL1gfdpjQfNCd4+imjGh8ucWVrEuE7GUvYyqB514a6TTFOHoxHA2WPpfYekons9dcNWXJi3rDO+2ZJ16o1pXFKyU2GFXTGUJKX1r6Q5DIIaaj3LbBTq+7SRJOXiMC7cVuvYBWCbQHny+gsTXOkVd6r7M8YN9/EMPR4fSjC96Gd7663uL6M6EJeaD/0pGjPYRUl2+ddB7OV187YEUikUgkEolEIv+UXzNUIAgqqEiPAAAAAElFTkSuQmCC',
        title: 'MF文庫J',
        key: 'mfbunkoj',
        newWorldFlg: false,
        url: 'https://mfbunkoj.jp/'
      },
      {
        icon: 'https://ga.sbcr.jp/wp-content/uploads/2021/02/GA_logo_card.jpg',
        title: 'GA文库',
        key: 'gabunko',
        newWorldFlg: false,
        url: 'https://ga.sbcr.jp/'
      },
    ]
  },
  {
    sort: 1,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'data:image/png;base64,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',
        title: 'google',
        key: 'google',
        newWorldFlg: false,
        url: 'https://www.google.com/'
      },
      {
        icon: 'data:image/png;base64,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',
        title: 'google options',
        key: 'google-options',
        newWorldFlg: false,
        url: 'https://www.google.com/advanced_search'
      },
      {
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度',
        key: 'baidu',
        newWorldFlg: false,
        url: 'https://www.baidu.com/'
      },
      {
        icon: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg',
        title: 'Bard',
        key: 'bard',
        newWorldFlg: false,
        url: 'https://bard.google.com/?hl=ja'
      },
      {
        icon: 'https://ssl.gstatic.com/keep/keep_2020q4v2.ico',
        title: 'google keep',
        key: 'google-keep',
        newWorldFlg: false,
        url: 'https://keep.google.com/u/0/'
      },
      {
        icon: 'https://u.xgoo.jp/img/sns/dictionary.png',
        title: 'goo辞典',
        key: 'goo',
        newWorldFlg: false,
        url: 'https://dictionary.goo.ne.jp/'
      },
      {
        icon: 'https://weblio.hs.llnwd.net/e7/img/favicon/cjjc.png',
        title: 'weblio辞典',
        key: 'weblio',
        newWorldFlg: false,
        url: 'https://cjjc.weblio.jp/'
      },
    ]
  },
  {
    sort: 2,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'https://www.lightnovel.us/_nuxt/img/57c2c3d.svg',
        title: 'LK',
        key: 'lk',
        newWorldFlg: false,
        url: 'https://www.lightnovel.us/category/3/106?type=1'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACI0lEQVR4AXXSA+h9VwAH8M+9777/r6e/beZmIw0ZM9KMzDk35VpamJE127Zte3u+Xu3ceTt1jK9OdPM79R1fDB3xw0QboKpCLWuKkrKirkONIloxK3uKtUs9Fl3+TJ3vXCFZ2aVqLucVacEsZ56HcdFcTmI6beYZXw4VybcjyQGbqJvLWRkujrNQJ1mY9xMO30K7xes/EC/i65EkyQrykqIKdZYzTPllHurmAWfsC4AG6IHPyXOSrAg0i5oG2c9zvhtz9u7sXA7AZ78QR1z7AiuXBuB4XjApGWb8kvHjjG9GnNVcvv1t4PFPOeZaTr6Z72e0k+BVMk8Zp8yLgP7DlKN3sWkx1z7HqQ39Qzaz3w6ymLVLWGiTFSRpwThv6KdM5hy8ifPv5cojeewTLrufpV3iBXaupb9AHVH+JiFllDXoE646klteZu+1wKFbSCvyiCV9opiyJivJ8obBtMm723ySq5/ikXN57nPe/Z5lS9i4ks4iakF7ibRqUpgVjGZcciAQtzjxFt77ksGAzeuJE0pkFQVUDYOyJC35Zcy2pbz5La2EacSmjfR79DqUqBtkFQQPkqIKbm7oA7e+SKfDimW0WiQtoijQjiOUAJQVcV0zyzhzLx77iPveo9shaqExrBT6vPp7LSqSVfHTfh4d4KYXeehdVq+h0w1migLqf5XhhE3LZqKz766fefcz+3z5hThqsdANhomI/H9Zu1y1Y50nfgULOx8mg/RwDQAAAABJRU5ErkJggg==',
        title: 'TSDM',
        key: 'tsdm',
        newWorldFlg: false,
        url: 'https://www.tsdm39.com/forum.php?fid=30&mod=forumdisplay'
      },
      {
        icon: 'https://static.syosetu.com/view/images/narou.ico?psawph',
        title: 'なろう',
        key: 'syosetu',
        newWorldFlg: false,
        url: 'https://syosetu.com/'
      },
      {
        icon: 'https://cdn-static.kakuyomu.jp/images/brand/favicons/app-256.png?eAT04G0Rt23A',
        title: 'カクヨム',
        key: 'kakuyomu',
        newWorldFlg: false,
        url: 'https://kakuyomu.jp/'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAALVBMVEVHcEzfyKx3suV+teE4q/VBpfY9qfUwsPZJqPP///8XqvVdtPTg8v5+yfm13/xaALUHAAAABHRSTlMAJbyUMgdUeAAAARhJREFUOI2Nk9sSwiAMRK0NARLK/3+uuRVapTPu+IDucTel8Hr9ozeXhfgd9lbSg8pmwKMfxK4rRFwS2sIpCIUk7fpJHA0Y/k+OdpQIAJFjC0B9FkWSrJJXXABqtdZO6oOs6JagPxpQWWoAa23kVRPwBDFkkuKAzBwAzoR6ZAAOQDQAMOAQAgzoBD+ATtb0v1m4nv2pDfA9MIC1hAYAX0Aj6oo9Jki65vTDZwUcgHzJ2QGdsy8BMCBbiQN4B9gBKxmAb5S9xwkcSyDLw7euQKbWmgI4AAsQg8y3BUWAAT5ivikOT7okwNI3gG1T78gA9NDuMHXzMY69dOAZAmfBpUGvHpxIxIwR97iccnlxyl+CXt5t3u9tIXc+cwkXDddRLWMAAAAASUVORK5CYII=',
        title: 'neat-reader',
        key: 'neat-reader',
        newWorldFlg: false,
        url: 'https://www.neat-reader.com/'
      },
    ]
  },
  {
    sort: 3,
    newWorldFlg: true,
    naviContent: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAflBMVEX+/v7///7w+fnW7Pun1flvwflIsvotqvrr9/v////1+/uk2PhGrPwAnPwAlf4Al/8Bmf8Bmf6c1Pj///273/oAlP4Amv9zxvMAovwAoP3b8PrA4/V4vPsAlv6Ly/t+y/Sh0vodpPgAkf4Bmv9XtvaOzfg6qfvL5vpcuvd4v/pA4uthAAABi0lEQVR4AX3RB2KDMAxAUYltNxi5LmSyV3v/C1Z2wJ3JzwTEY8EeYhBGcZKmSRyFmUAU90BsyZdDrgrSmgqVH14lT4DdCmC/jHzLy4KqLZ7RkUQAN8OhOZ7Op7OmLX3mxVi6o4AlLldjuxV3oG6MrQ0F2IQxaYdsmVutXaoxLGPcS/7lQ8h46KzGwljZl2ocHg+TtIdAPr//hVpHVpA5lf8JGBekAwH4Umr1QKB6NpAdaHwkVMWSQXjWv4VyF0adrxCVlRcG5Rq8MNYz8M8uhG9boRfoHRLaBUAf7IJOIdW78JUAL/Q8sAu/cgIPJOQF9HmBDxEX/irWbms1XpggUrvw7TL9VdQNhPmTO0l6tbe6KjdBjWRfygu0XEC8Fo+Fekb3uB8JVGcIiFH1SNAzTzIxDf8JIi6TzADwqOn/F04B/wKH4RXt3Mc3AQW2q3XBzqJpEy6nu0DnhGulsRC4jIyorDU5gccKpWY+vtgEVzAveU2auFIvvNnu7gU7K7J1fk/7Pp2a1W6G++sTpoE59ERv3Z0AAAAASUVORK5CYII=',
        title: '琉璃神社',
        key: 'hacg',
        newWorldFlg: true,
        url: 'https://www.hacg.sbs/wp/'
      },
      {
        icon: 'https://blog.reimu.net/wp-content/uploads/2016/02/cropped-logo-32x32.png',
        title: '灵梦御所',
        key: 'reimu',
        newWorldFlg: true,
        url: 'https://blog.reimu.net/'
      },
      {
        icon: 'https://p.dmm.co.jp/p/common/pinned/favicon.ico',
        title: 'FANZA',
        key: 'fanza',
        newWorldFlg: true,
        url: 'https://www.dmm.co.jp/top/'
      },
      {
        icon: 'https://p.dmm.co.jp/p/common/pinned/favicon.ico',
        title: 'FANZA GAME',
        key: 'fanza-game',
        newWorldFlg: true,
        url: 'https://games.dmm.co.jp/'
      },
      {
        icon: 'https://p.dmm.co.jp/p/common/pinned/favicon.ico',
        title: 'FANZA BOOK',
        key: 'fanza-book',
        newWorldFlg: true,
        url: 'https://book.dmm.co.jp/'
      },
      {
        icon: 'https://www.dlsite.com/images/web/common/favicon.ico',
        title: 'Dlsite',
        key: 'dlsite',
        newWorldFlg: true,
        url: 'https://www.dlsite.com/maniax/'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxUlEQVR4AY2SA4wcYRiG/yJmgxpxGtRuo25Q21bs1AxqB2VQ27Zt43xrDZdzO3xvvuTWu7l7kt/v8w3Z0N9q209xc6tPtbigaqEljbLkDLFd9iNhbkUTuq5DVdVmm2VZIMhlgm5xaGIFx6ODL4B1PI+r0Shu5LSDgoh29tlaO5MuQC6LmRbSTHf6cUGQ0oEMpmliiSuIEXV+JDUdachlipUNLavwwjAM5ELFTvsEdPnuwr9YArmQyzQLBIl4HZZRSKWcQPcXtTju4orujFxmojyKqsHxuBaL37noDlEI7bDcooW3vum1C/3P/4eQSJXNMOpK8biCQ4993/G2XgRRtoBhmCgkKCXRb8sX7HpQT6Eiif4XglymqgZy0Q0D8/b/wORd36BqOgqRYwrOvnCDIJcpip5X/fD1avRe+hzOQBSlOPOwHu//cCDIZbG4hjTf/4XRc+I93HjqRCl8oRiGzXsMOaqAIJcJUoqjRUODCsese3DMvofXH7x488mXaS/feXH09B8Mm3wbI+1M+mcjl939zW39lFLxIaHggVdstj0JSqA8tbu/+a1s0IyHbWe9cW4d/8/Pja7woyWNsrNtZ9CMB20bARU2pOeuJ+5zAAAAAElFTkSuQmCC',
        title: 'ZOD',
        key: 'zod',
        newWorldFlg: true,
        url: 'https://zodgame.xyz/index.php'
      },
    ]
  },
  {
    sort: 4,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==',
        title: 'YouTube',
        key: 'youtube',
        newWorldFlg: false,
        url: 'https://www.youtube.com/'
      },
      {
        icon: 'https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico',
        title: 'NETFLIX',
        key: 'netflix',
        newWorldFlg: false,
        url: 'https://www.netflix.com/'
      },
      {
        icon: 'https://www.bilibili.com/favicon.ico?v=1',
        title: 'bilibili',
        key: 'bilibili',
        newWorldFlg: false,
        url: 'https://www.bilibili.com/'
      },
      {
        icon: 'https://wwwmarketing.scdn.co/img/apple-touch-icon-167x167.png',
        title: 'Spotify',
        key: 'spotify',
        newWorldFlg: false,
        url: 'https://www.spotify.com/jp/premium/'
      },
      {
        icon: 'https://mora.jp/mora-ogp-icon.png',
        title: 'mora',
        key: 'mora',
        newWorldFlg: false,
        url: 'https://mora.jp/'
      },
      {
        icon: 'https://www.agemys.org/favicon.ico',
        title: 'AGE',
        key: 'age',
        newWorldFlg: true,
        url: 'https://www.agemys.org/update'
      },
      {
        icon: 'https://share.acgnx.se/images/favicon.ico',
        title: '末日资源库',
        key: 'acgnx',
        newWorldFlg: true,
        url: 'https://share.acgnx.se/'
      },
      {
        icon: 'https://nyaa.si/static/favicon.png',
        title: 'Nyaa',
        key: 'nyaa',
        newWorldFlg: true,
        url: 'https://nyaa.si/'
      },
    ]
  },
  {
    sort: 5,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC',
        title: 'twitter',
        key: 'twitter',
        newWorldFlg: false,
        url: 'https://twitter.com/home?lang=ja'
      },
      {
        icon: 'https://www.pixiv.net/favicon.ico',
        title: 'Pixiv',
        key: 'pixiv',
        newWorldFlg: false,
        url: 'https://www.pixiv.net/'
      },
      {
        icon: 'https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_微博.png',
        title: '微博',
        key: 'weibo',
        newWorldFlg: false,
        url: 'https://weibo.com/'
      },
      {
        icon: 'https://img.jandan.net/news/2022/12/110b9ee33d34fc4936bb1e6def4b2814.jpg!square',
        title: '煎蛋',
        key: 'jandan',
        newWorldFlg: false,
        url: 'http://jandan.net/'
      },
      {
        icon: 'https://github.com/fluidicon.png',
        title: 'github',
        key: 'github',
        newWorldFlg: false,
        url: 'https://github.com/'
      },
      {
        icon: 'https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_QQ邮箱.png',
        title: 'qq邮箱',
        key: 'mail-qq',
        newWorldFlg: false,
        url: 'https://mail.qq.com/'
      },
      {
        icon: 'https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_百度网盘.png',
        title: '百度网盘',
        key: 'baidu-pan',
        newWorldFlg: false,
        url: 'http://pan.baidu.com/'
      },
    ]
  },
  {
    sort: 6,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADsUlEQVRYhbWWT2gcVRzHP8/sBsSkpkLUpdlQRAgptexuqrR6EcxqDipWacCLB4PJwUNpwEUwiAgt4sE/NHdLwIM1NFvw4CUU04JJs7HSRDYbD1VCNiRBiTtJDmnh62F3pjOZyc40ab/wmHlvfu/9vu/7+/3eG6hBUpOkjyXN6+HhlqRBSY/ihqQOSX8+RMdBRNoBjKQm4CbwLBFhWRYLCwtO3xhDIpEgkUhEXQJgFjiOpE+j0h7L59WdzSoWjzutwfXenc1qLJ+/HyXOoAjSVyoVdWezHmf1Wi6Xi0qgQBSr07293l3HYqFkIiqxFUogn88HOkhlMjrd2+sLid1eyWajEFAogQ/6+0MlzuVygSSi4JGwVDXG+MaGhoY8/b6+PgROux8YSaFz3GVnjCGTyfhs4o2Nnr6Au9vboQRiUVg2NzfT1dXl9JeXlymXy/w6OQnAxMRE1akUqNi+CdhOv7t4kR9HR5mbnfV8E2AIDlcooiTKWD6vtmQyMNHqlWMUhObAzMwMJ06edHZpPwEGz54l2d7Okc5OXuvp8akSJQdCFUil076ddWezWlpa8tjtVYG6BEqlUuDChULBY1cul30haXgQ50Bxft6R0y2tuyIAisWi825cz+Xl5dAI1CWwuLjoWdR+tyzLY/fDpUuB829MT4cSqBuC8fFx5/LZ7SgeGRnx2dhhSGcyqlQqdUNQl4A7tjtLL5VOqy2Z3LUM7fELw8N7JyD5r+LdWiqT8Y21JZMqlUr7I2D/jPh2WJO8oRYSy7KcW9FWKMx5JAI2iQvDww6RhlhMqUxG/QMDvpI8d/68+gcGZFmu2G8sSavT0soNadubE96T8I9v4bEkHH47PHujYKsMUx/Cav5eLR/7Bo6ccUy8ZXioB37rh6unYK2wfwKNB+DoJ/D6ErxTgaZO3w+Dl0BLB7xxG7b/hfHnq0T+ugx3NvZGYHUK5s7BT4dgswwbRWh90WNiJN0FGjyjdyy4+Rnc/gpUu4CS70PLMXjypSrReDO+OeslWJ+D1WuwcgW2/6meXCcuQ/wAzH0Or/7invWfkXQLeC5wB2sFmHwPNov3jsOdd6dxje38HXjqLUh/AY93wNp0lURLh9viupH0EfBlIAEbf4/B/Newfo2ge1ly+TbAM4Nw+F1oPV53WWDASGoEpoBUmDVbZVibgs1FWLlac2ggfrAanoNHofUFf3iCcR14ubYDPS3pSpQz4QHhe0lP2II5kHQKeBPoYre82Dt+B2aAUWPMz/bg/5AZ2OKL1i4FAAAAAElFTkSuQmCC',
        title: 'amazon',
        key: 'amazon',
        newWorldFlg: false,
        url: 'https://www.amazon.co.jp/'
      },
      {
        icon: 'https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_淘宝.png',
        title: '淘宝',
        key: 'taobao',
        newWorldFlg: false,
        url: 'https://www.taobao.com/'
      },
      {
        icon: 'https://pc-index-static.cdn.bcebos.com/pc-index-nav/00001/导航List_京东.png',
        title: '京东',
        key: 'jdshop',
        newWorldFlg: false,
        url: 'https://www.jd.com/?cu=true'
      },
      {
        icon: 'https://www.jpgoodbuy.com/favicon.ico',
        title: 'jpgoodbuy',
        key: 'jpgoodbuy',
        newWorldFlg: true,
        url: 'https://www.jpgoodbuy.com/index-list_trans.html'
      },
      {
        icon: 'https://xn--gmq396grzd.com/favicon.ico',
        title: '云',
        key: 'yun',
        newWorldFlg: true,
        url: 'https://xn--gmq396grzd.com/'
      },
      {
        icon: 'https://dukou.icu/logo.ico',
        title: 'Dukou',
        key: 'dukou',
        newWorldFlg: true,
        url: 'https://dukou.icu/'
      },
    ]
  },
  {
    sort: 7,
    newWorldFlg: false,
    display: false,
    naviContent: [
      {
        icon: '',
        title: '',
        key: '',
        newWorldFlg: false,
        url: ''
      },
    ]
  },
  {
    sort: 8,
    newWorldFlg: false,
    naviContent: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAsUlEQVR4AWLABwDt1QEGhVAQRuEtvCW8pQRd7ap2UAkBRCsJCGgJLWUiGJBTpl9wh4HQ+eK6DcnqPpkp1iuSOO/j+EvjAIqrARDXAyD+AQAODb4Qn8cBGZABGRCfDFjGDwHr7O9qkzV6AMcVAIiX1nlRAIAvn7yGAN6rkC/HgwCI+25tYT8JIB4PAG7Ed48LABiv7M9VBujjASDE9IAN4gIAnG7pwKWiH7jL9XP+xQRzAMxy9yqv9OarAAAAAElFTkSuQmCC',
        title: 'twitch',
        key: 'twitch',
        newWorldFlg: false,
        url: 'https://www.twitch.tv/directory/game/Dota%202'
      },
      {
        icon: 'data:image/png;base64,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',
        title: '虎牙',
        key: 'huya',
        newWorldFlg: false,
        url: 'https://www.huya.com/g/dota2'
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAq1BMVEVHcEwVAQUMAQMZCQcNBgYAAAAaAAcSAgUKAgYNAAJQP0Kpo6XHxMXOy8x/eHm9trnW1NWjnJ5kXV4DAAINBAQkAALu7u/r6+zd3N3y8/T09vcnGRUuFQoGAAByYGW0rq/w8fL4+frm4+V0a279/v+MhoeYj5JZUVEtERhBOTdQSUhGJRwTAQmfbwHRngF9VA78xQDyugDAjgKwgARmQA/krgCOZgh6VQlTLAl/aNg2AAAAOXRSTlMAR4Gkso5eaAnH/f7+///////+FDf+///////ae////v///v7///v4/+C7/iD////////////ksbbrzUE2AAAB3UlEQVR4AWIgEQD6JgstB2Egii7uWoqkBTLB697+/5ftFLIuD+e+MwYRREmWFVVQZFnS9O/QME3Tsh3HtlzP950gVGafeTS3PNxiVJKkcZaR2Fp8CrLMLTvPi5LQp7KEosBfvMcQXZNBXjGWIKVcWV1KnEtNXdjzPKiB0sTPOE/bBTeoLiVl0OTzIKWZ7wLSmFHf1HiGqANMGDhlwGJKgh4oKimH9xJleyzNZ0mCBYTFaCCB9j6A5sl5cXHIWjI++av3AOmnul3LCWG8Zx3nkQlvBkirsrYCQqdY3DCTXAeAEALU6uzEK+3JT6qPKcuDG1hN2LdxnaxdwtNxw0ZVhc1M6Le73d51K2YynjCZUqhzTRCW8np32O2Ph+28dzjP/KnIpTieT+f95Xo4HE6VhwaC085sacowXm6H4+WI/LorsGfiYJ3QCHxM2mg4ndGzv7QMOSsIpnj/1BH+W/fjFgPszRQAYsd8ZmhUzjGLMFN3Z0xw3PZF03TIMcuA5F26/jghx/20X/uAPF1sOOPaYI+jthY8R95F74hrY5yux+N168YZSUrjE39Ps1zvL5cgruMylLCBXzQLEwBnMBT9V4wSPQKN9t/Ca2rf0P8zBL65eflHsikj/0fRL829Att/QOCDqArHAAAAAElFTkSuQmCC',
        title: '斗鱼',
        key: 'douyu',
        newWorldFlg: false,
        url: 'https://www.douyu.com/g_DOTA2'
      },
      {
        icon: 'https://liquipedia.net/commons/extensions/TeamLiquidIntegration/resources/pagelogo/liquipedia_icon_menu.png',
        title: 'liquid',
        key: 'liquid',
        newWorldFlg: false,
        url: 'https://liquipedia.net/dota2/Main_Page'
      },
    ]
  },
]