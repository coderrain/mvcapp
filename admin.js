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


app.use('/', express.static('./'));


/*app.get('/', function(req, res, next){
	res.send('hello word');
})*/

app.get('/', function(req, res, next){
	res.render('a', {
		title: '我的首页'
	});
})


app.get('/search', function(req, res, next){
	console.log(req.query.sa);
	var result = null;
	var data = [{
		name: 'iphone',
		price: 100
	},{
		name: 'sanxing',
		price: 1001
	},{
		name: 'nuojiya',
		price: 10011
	},{
		name: 'jinli',
		price: 100111
	}]
	for(var i=0;i<data.length;i++){
		if(req.query.sa == data[i].name){
			result = data[i];
			break;
		}
	}
	console.log(result);
	res.render('search', {
		title: '搜索页面',
		result: result
	});


})



app.get('/list', function(req, res, next){
	res.render('list',{
		code: 1,
		data: [{name:'iphone',price:100},{name:'sanxing',price:100},{name:'nuojiya',price:100}]
	})
})



app.listen(8080, function(){
	console.log('服务已经开启端口是8080')
})