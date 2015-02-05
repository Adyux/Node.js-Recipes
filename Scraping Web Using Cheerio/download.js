var http = require("http");

//Utility function that downloads a URL and invokes callback with the data

function download(url, callback){
	http.get(url, function(res){
		var data = "";
		res.on('data', function(chunk){
			data += chunk;
		});
		res.on("end", function(){
			callback(data);
		});
	}).on("error", function(){
		callback(nill);
	});
}
var cheerio = require("cheerio");

var url = "http://www.dailymail.co.uk/news/article-2297585/Wild-squirrels-pose-charming-pictures-photographer-hides-nuts-miniature-props.html"

download(url, function(data){
	if(data){
		//console.log(data);
		var a = cheerio.load(data);
		a("div.artSplitter > img.blkBorder").each(function(i,e){
			console.log(a(e).attr("src"));
		});
		console.log("done");
	}
	else console.log("error");
});