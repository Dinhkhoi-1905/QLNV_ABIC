// const newsRouter = require('./news');
const siteRouter = require('./site');
// const coursesRouter = require('./courses');
// const meRouter = require('./me');
const nhanvienRouter = require('./nhanviens');

function route(app) {
    // app.use('/news', newsRouter);    
    // app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
    // app.use('/me', meRouter);
    // app.use('/nhanvien/list', nhanvienRouter);
    app.use('/nhanvien', nhanvienRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })
    // app.post('/blog', (req, res) => {
    // console.log(req.body);
    // res.send('');
    // })
}
module.exports = route;