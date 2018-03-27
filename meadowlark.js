var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//首页
app.get('/', function(req, res) {
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
    res.render('home');
});

//about页面
app.get('/about', function(req, res) {
        // res.type('text/plain');
        // res.send('About Meadowlark Travel');
    res.render('about', { fortune: '123123' });
}); 

//定制404页面
app.use(function(req, res) {
    // res.type('text/plain');
    res.status(404);
    // res.send('404 - Not Found');
    res.render('404');
});

//定制500页面、
app.use(function(req, res) {
    console.log(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500 - Server Error');
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('express started on http://localhost:' + app.get('port') + ';press Ctrl + c to terminate');
})