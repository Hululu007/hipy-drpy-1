var rule={
  title: "去看吧",
  host: "https://qkan8.com",
  url: "/index.php/vod/show/id/fyclass/fyfilter.html",
  searchUrl: "/index.php/vod/search/page/fypage/wd/**.html",
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
  filter: "H4sIAAAAAAAAA+1ZXW8TRxT9LyvNW4Rn1/Z6lrcdZ/0nKh6sxlJQQ0CE8iGE1DYkDQl1HFQSUpJA1Jo4YIMTV1WxC/4zmV37X/TO7sa+nnErKhUqlXnb3Xtm5sy5946Pxnctx7YufnHX+qpyx7poRSc9cbBhzViL5SsV/H6zvPB1JQYuwmex0hguN+RneLHuzSRfw9pB1NxKv365UF5aypDAJR4lXkCCAvGLxLMzI3jU2xQrvyvwAuGcsBIJ8oTlCWcIvtwaHH6jwVmW+LMkYMS3CaNjuPiuGXZeKnCY1JE0gBWHcf4YHp72wvtrGnfuSD7wwHKEYTIPq6L+vU6mSFggl/FhpQIis34i+js6GZ9wWz7wEvEQPFx7Em6rcODAiMdiRd0JuKhVxetX2uyge0omID5Hs+91YQE9TUXC/dEyCP7tRrR2opMBuXm8ZwabQMrsvhc1VcgC8TzCg3NWWMijLfG2p8F9GJEoA+MQdxBdh6dyT4GH1UZUW9W5gyAsZgVkXAR/fiietjS4T2VxSe4cam0MH/RrYr2hwFmcTJqm10dbHbZ+DDuPFbgnq9fLpRXp5dFWq6ti81SvmQAoxw8lqM4x/OyPl6KhZjVHeBHKPJZoMqvR+6pob4l6R++/IC0bTtMcgLo8i7Zd2x9UH2jblm0eN6Jk6CFi3VPRqunEfNlccnbYP+rb4f6j8EldUwmm9py4TKHTsUqrj4a7x7pKbgz3ZN35iEz06iBc1w8Rn8dHlCtTFh8il+SA5EgUe23xsDs+EkfvH3Ikil+OhrvnBVi+Xikn5ZqTBZ6ww/Unk/L03SQaJQTKj6PyGz471tAwZQk2PAUd7tTDveYkWh4jMrtJ9/tFhO60tbnjCuV02tzbbbH+XOwfatO76QDZCsnIWegltIfjZrhfH9T7Z92f1J3ANpKjWo7Jx0d8fFImxeOhw1v80BbdF6rKbDZdHNA+UnmwcaLtjcnDjNvT9tZ5PF0JLz8FDTKEG33IukYmEcCN1ymNigCxqvejzVb0YFcllm66IBte/tLBgywc1GD9+9G7nXD7zeTInBwGP1uygmZlopN8+CXEduU38XpZowoLuunvBssqzfD217Pez6gZzt//phkylxfnKrcvXJu/lrl5dS6zNH/1VubyXMaxL8zfuLIwIuNQJ5eOuFMpX8/E7yiYVYJZHHSUoIODthK0cZAqQYqCtjcZhHcUZEqQ4WBBCRZw0FWCLg7mlWAeBxWFbKyQrShkY4VsRSEbK2QrCtlYIVtRyMYKUUUhihWiikIUK0QVhShWiCoKUawQVRSiWCGqKESxQlRRiGKFqKIQxQpRRSGKFaKKQnSskO15EwrF7yjIlCCT3XZpxoICNqbcmHJjyo0pN6b83zbl/9AKN48gLyoazitp4dPMTFiqs972X1iqnDy3PPfjWSpHs1TGGBlj9L8yRjljjIwxMsbIGCNjjMxtpbmtNLeVn+i2MqdZa3MhaXy39bn47mzW+G7ju43vtozvNr77P7qQ/DjOJps1/8Ma22Nsz1Tbk6fG9hjbY2yPsT3G9pjrRnPdaK4bP811Y56a60bjuz9X333vT0wpabKWNAAA",
  filter_url: "{{fl.地区}}{{fl.类型}}page/fypage/{{fl.年代}}",
  filter_def: "",
  headers: {
    "User-Agent": "MOBILE_UA"
  },
  timeout: 5000,
  class_parse: ".fed-pops-list&&a[href*=/vod/type];a&&Text;a&&href;.*/(\\d+).html",
  cate_exclude: "",
  play_parse: true,
  lazy: $js.toString(() => {
    
        var html = request(input)
        
       
        var url=base64Decode(pdfh(html,'#fed-play-iframe&&data-play').slice(3))
        
        log(url)
    if (/m3u8|bcebos/.test(url)) {
         input = {
				jx: 0,
				url: url,
				parse: 0,
			}
    }else{
    
var jx = HOST+pdfh(html,'#fed-play-iframe&&data-pars')

log (jx)


eval(getCryptoJS())
       let u =request(jx+url).match(/var purl = '(.*?)';/)[1]
       log(u)
       if (/mp4/.test(u)) { 
       let _url=u.split('=')[1]
       log(_url)
       input = {
       	jx: 0,
		url: _url,
	    parse: 0
       
       }
     }else{
       let  tz=request(u)

        let le_token=tz.match(/_token = "(.*?)";/)[1]
        log(le_token)
        

let play =tz.match(/getVideoInfo\(\"(.*?)\"/)[1];


var _token_key = CryptoJS.enc.Utf8.parse("7692AA70EEF92B42");
var _token_iv = CryptoJS.enc.Utf8.parse(le_token);


function v_decrypt(_0x303904, _0x3cba4a, _0x18e934) {
  return CryptoJS.AES.decrypt(_0x303904, _0x3cba4a, {
    "iv": _0x18e934
  }).toString(CryptoJS.enc.Utf8);
}

let video= v_decrypt(play, _token_key, _token_iv)


input = {
				jx: 0,
				url: video,
				parse: 0
			}
 
    
    }
   }
        
        
    }),
  double: false,
  推荐: "*",
  一级: ".fed-list-info li;a:eq(1)&&Text;a&&data-original;span:eq(1)&&Text;a&&href",
  二级: {
    title: "h1&&Text",
    img: "图片链接",
    desc: ".fed-deta-content&&li:eq(0)&&Text;.fed-deta-content&&li:eq(1)&&Text;.fed-deta-content&&li:eq(5)&&Text",
    content: ".fed-deta-content&&.fed-part-esan&&Text",
    tabs: ".fed-tabs-boxs&&ul&&a",
    lists: ".fed-play-item:eq(#id)&&ul:eq(1) li",
    tab_text: "body&&Text",
    list_text: "body&&Text",
    list_url: "a&&href"
  },
  搜索: "dl;h1&&Text;a&&data-original;span:eq(1)&&Text;a&&href;.fed-part-esan&&Text"
}