var rule = {
  title: '火车太堵',
  host: 'https://dylstv.com/',
  url: '/vod/show/id/fyclass/page/fypage.html',
  searchUrl: '/vod/search/wd/**.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'PC_UA',
  },
  class_parse: '.navbar-items li:gt(0):lt(10);a&&Text;a&&href;/(\\d+)',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
  limit: 6,
  double: true,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag-link:eq(-1)&&Text',
    img: '.lazyload&&data-original||data-src||src',
    desc: '.module-info-item:eq(-2)&&Text;.module-info-tag-link&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list:eq(#id) a',
    tab_text: 'div--small&&Text',
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}