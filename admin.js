var express = require('express');
var swig = require('swig');
var app = express();

swig.setDefaults({
  cache: false
})
app.set('view cache', false);

app.set('views','./views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);


app.use('/', express.static('./public'));

var data = [{
	title: '小说',
	id: 1,
	des: '佛挡杀佛解释了发送的佛挡',
	url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=f888027cebdde711f8d245f697eecef4/71cf3bc79f3df8dcfcea3de8c311728b461028f7.jpg'
},{
	title: '修真',
	id: 2,
	des: '修真修真修真修真修真',
	url: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=1ae574b8e8cd7b89f66c3c833f254291/1e30e924b899a90182ea2f4413950a7b0308f5e1.jpg'
},{
	title: '修真',
	id: 2,
	des: '修真修真修真修真修真',
	url: 'http://b.hiphotos.baidu.com/image/h%3D300/sign=c2211687db6285358de0d421a0ee76f2/6609c93d70cf3bc7c64ca199df00baa1cd112a72.jpg'
},{
	title: '修真',
	id: 2,
	des: '修真修真修真修真修真',
	url: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=1ae574b8e8cd7b89f66c3c833f254291/1e30e924b899a90182ea2f4413950a7b0308f5e1.jpg'
}]
var aboutData = 'fsdfs胜多负少发送到发送到就fsdfs胜多负少发送到发送到就fsdfs胜多负少发送到发送到就'


app.get('/', function(req, res, next){
	res.render('index',{
		title: '首页',
		data: data,
		aboutData:aboutData
	})
})

app.get('/list3', function(req, res, next){
	res.render('list3',{
		data: data
	})
})

//文章页
app.get('/art', function(req, res, next){
	var queryId = req.query.id;
	var result = {};
	for(var i=0;i<data.length;i++){
		if(queryId == data[i].id){
			result = data[i];
		}
	}
	res.render('art',{
		result: result
	})
})

app.get('/about', function(req, res, next){
	res.render('about',{
		title: '关于我们',
		data: aboutData
	})
})

app.listen(8080, function(){
	console.log('服务已经开启端口是8080')
})