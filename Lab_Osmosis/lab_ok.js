const osmosis = require('osmosis');
const fs = require('fs');
const url = 'https://www.taipower.com.tw/TC/news2.aspx?mid=225';

var newsList = [];

osmosis
    .get(url)
    .find('#news_box3 > div.box_list > ul > li')
    .set({
        "title": "a div h3",
        "dateTime": "a div span",
        "url": "a@href"
    })
    .data(function (resultItem) {
        // console.log(resultItem);
        newsList.push(resultItem);
    })
    .done(function () {
        fs.writeFileSync(
            "newsList.json", 
            JSON.stringify(newsList, null, 2));
    })
