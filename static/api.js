function xhr (url,call_function) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			call_function(xhr.response);
		}
	}
}

function createPage (url) {
	var xhr = new XMLHttpRequest();
	xhr.open('get', url);
	xhr.send(null);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			call_function(xhr.response);
		}
	}
}
function getPage () {
	var page = '';
	if (event.target.href) {
		page = event.target.href;
	} else {
		page = event.target.parentNode.href;
	}
	page = new URL(page).pathname.substring(1);
	return page;
}
function goPage () {
	var page = getPage();
	let stateObj = {
		'page': page,
	};


	history.pushState(stateObj, "page 2", page);
	anime_info(page);
	return false;
}
function loadPage () {
	var page = location.pathname.substring(1);
	let stateObj = {
		'page': page,
	};


	anime_info(page);
}


function anime_info(page) {
	xhr(URL_test + '', function (data) {
		hui.con = JSON.parse(data);console.log(hui.con);
		hui.index = Object.keys(hui.con).length - 1;
		hui.count = (hui.index + 1) + ' / ' + hui.index;
		display_info (hui.con[page]);
	});
}

function display_info (info) {
	document.getElementById('list').style.display="none";
	document.getElementById('e').style.display="block";




	document.getElementById('edate').innerHTML = info.date;
	let innerHTML = '';
	for (i in info.video) {let j = info.video[i];
		innerHTML += '<li>';

		innerHTML += '<span class="">' + j.title + ' '  + '</span>';

		if (j.link) {
			innerHTML += '<a href="' + j.magnet + '"><span class="icon magnet"></span></a>';
		}
		if (j.baidupan) {
			innerHTML += '<a href="' + j.baidupan + '"><span class="icon baidupan"></span></a>';
		}
		if (j.weiyun) {
			innerHTML += '<a href="' + j.weiyun + '"><span class="icon weiyun"></span></a>';
		}
		if (j.youku) {
			innerHTML += '<a href="' + j.youku + '"><span class="icon youku"></span></a>';
		}
		if (j.weibovideo) {
			innerHTML += '<a href="' + j.weibovideo + '"><span class="icon weibovideo"></span></a>';
		}
		if (j.bilibili) {
			innerHTML += '<a href="' + j.bilibili + '"><span class="icon bilibili"></span></a>';
		}
		innerHTML += '</li>';
	}
	document.getElementById('video').innerHTML = innerHTML;
}


onpopstate = function(event) {
	document.getElementById('list').style.display="block";
	document.getElementById('e').style.display="none";
};