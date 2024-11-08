var rule = {
  title: '久久追剧',
  host: 'https://www.jiuytv.cc/',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
  limit: 6,
  double: true,
  推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.tag-link&&Text',
    img: '.module-item-pic&&img&&data-src',
    desc: '.video-info-items:eq(3)&&Text;.tag-link:eq(2)&&Text;.tag-link:eq(1)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(0)&&Text',
    content: '.vod_content&&Text',
    tabs: '.module-tab-item',
    lists: '.module-player-list:eq(#id)&&.scroll-content&&a',
    tab_text: 'div--small&&Text',
  },
  搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}