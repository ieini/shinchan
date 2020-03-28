var URL_ROOT	= 'https://api.github.com/repos/webkb/windows_spotlight/';
var URL_CONTENT	= URL_ROOT + 'contents/';
var URL_test	= '//shinchan.ieini.com/data/e/1.txt';
var hui = {};

function anime_list_info ($items) {
	var innerHTML = '';

	for (var i in $items) {
		var j = $items[i];

		innerHTML += '<li>';
		innerHTML += '<a class="status_ok" href="' + i + '">';
		innerHTML += '<span class="type E">' + j.date + ' ' + i + '</span>';
		innerHTML += '<span class="icon ' + j.magnet + '"></span>';
		innerHTML += '<span class="icon ' + j.baidupan + '"></span>';
		innerHTML += '<span class="icon ' + j.weiyun + '"></span>';
		innerHTML += '<span class="icon ' + j.youku + '"></span>';
		innerHTML += '<span class="icon ' + j.weibovideo + '"></span>';
		innerHTML += '<span class="icon ' + j.bilibili + '"></span>';
		innerHTML += '</a>';
		innerHTML += '</li>';
	}
	document.getElementById('list').innerHTML = innerHTML;
	document.getElementById('list').onclick = function () {
		goPage ();return false;
	}

}

function anime_list() {
	xhr(URL_test + '', function (data) {
		hui.con = JSON.parse(data);
		hui.index = Object.keys(hui.con).length - 1;console.log(hui.con);
		anime_list_info (hui.con) 
	});
}

function prev() {
	if (hui.index > 0) {
		hui.index--;
		hui.count = (hui.index + 1) + ' / ' + hui.con.length;
		xhr_info(hui.con[hui.index].download_url);
	}
}
function next() {
	if (hui.index < hui.con.length - 1) {
		hui.index++;
		hui.count = (hui.index + 1) + ' / ' + hui.con.length;
		xhr_info(hui.con[hui.index].download_url);
	}
}