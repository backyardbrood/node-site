
/**
 * Module dependencies.
 */

var express = require('express')
  , web = require('./routes/web')
  , mobile = require('./routes/mobile')
  , api = require('./routes/api')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', web.index);

app.get('/mobile', mobile.index);
app.get('/mobile/login', mobile.loginView);
app.post('/mobile/login', mobile.loginSubmit);

app.get('/api', api.index)

app.get('/api/bird', api.bird.list);
app.post('/api/bird', api.bird.post);
app.put('/api/bird/:id', api.bird.putById);
app.get('/api/bird/:id/production', api.bird.getBirdByIdProduction);
app.get('/api/bird/:id', api.bird.getById);

app.get('/api/almanac', api.almanac.list);
app.get('/api/almanac/:date', api.almanac.getByDate);

app.get('/api/ledger', api.ledger.list);
app.post('/api/ledger', api.ledger.post);
app.get('/api/ledger/:id', api.ledger.getById);
app.put('/api/ledger/:id', api.ledger.putById);

app.get('/api/production', api.production.list);
app.post('/api/production', api.production.post);
app.get('/api/production/:id', api.production.getById);
app.put('/api/production/:id', api.production.putById);

app.get('/api/user', api.user.list);
app.post('/api/user', api.user.post);
app.get('/api/user/:id', api.user.getById);
app.put('/api/user/:id', api.user.putById);
app.post('/api/user/login', api.user.loginSubmit);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
