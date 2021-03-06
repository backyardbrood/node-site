/**
 * Copyright (c) 2013 Adam L. Englander
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * @author Adam L. Englander <adam.l.englander@coupla.co>
 *
 *
 */

exports.index = function(req, res) {
    if (!req.session.loggedIn) {
        res.redirect('/mobile/login');
    }
    res.render('mobile/index.html');
}

exports.loginView = function(req, res) {
    res.render('mobile/login.html', {error: null});
};

exports.loginSubmit = function(req, res) {
    var error;
    if (req.body.email == 'demo@backyardbrood.com' && req.body.password == 'demo') {
        req.session.loggedIn = true;
        res.redirect('/mobile');
        return;
    } else {
        error = 'Invalid credentials';
    }
    res.render('mobile/login.html', {error: error});
};