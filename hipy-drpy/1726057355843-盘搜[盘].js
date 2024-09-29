var rule = {
    title: 'pansearch',
    host: 'https://www.pansearch.me',
    url: '/search?keyword=fyclass&offset=fypage0&pan=quark', //&pan=quark
    searchUrl: '/search?keyword=**&offset=fypage0&pan=quark', //&pan=aliyundrive
    searchable: 2,
    quickSearch: 0,
    class_name: '短剧&国漫&修仙&古装&国产&美剧&港剧&恐怖&科幻&热播',
    class_url: '短剧&国漫&修仙&古装&国产&美剧&港剧&恐怖&科幻&热播',
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    timeout: 5000,
/*    lazy: $js.toString(() => {
        input = {
            parse: 0,
            jx: 0,
            url: 'push://' + input,
        }
    }),
    */
    play_parse: true,
    一级: $js.toString(() => {
        let html = request(input);
        let data = pdfa(html, '.grid&&.items-start');
        let d = [];
        data.forEach(it => {
            d.push({
                title: pdfh(it, '.break-all&&Text').replace(/频道新增资源：/, '').replace(/名称：/, '').replace(/1、/, '').replace(/资源标题：/, ''),
                desc: pdfh(it, 'p&&Text').replace(/资源发布时间：/, ''),
                img: pdfh(it, 'img&&src'),
                url:'push://' + pd(it, 'a&&href', MY_URL)
            });

        });
        setResult(d);
    }),
    二级: '*',
    搜索: '*'
}