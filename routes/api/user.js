/**
 * Copyright (c} 2013 Adam L. Englander
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"},
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
 * User API handlers
 */


exports.list = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/user?page=1',
                'next': '/user?page=2',
                'previous': '/user?page=1',
                'first': '/user?page=first',
                'last': '/user?page=last'
            },
            '_embedded': {
                'user': [
                    {
                        '_links': {
                            'self': '/user/1'
                        },
                        'email': 'userOne@BackYardBrood.com',
                        'nameFirst': 'One',
                        'nameLast': 'Uno',
                        'zipCode': '11111'
                    },
                    {
                        '_links': {
                            'self': '/user/2'
                        },
                        'email': 'userTwo@BackYardBrood.com',
                        'nameFirst': 'Two',
                        'nameLast': 'Dos',
                        'zipCode': '22222'
                    }
                ]
            }
        }
    );
};

exports.getById = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/user/1'
            },
            'email': 'userOne@BackYardBrood.com',
            'nameFirst': 'One',
            'nameLast': 'Uno',
            'zipCode': '11111'
        }
    );
};

exports.post = function (req, resp) {
    resp.header('Location', '/user/1');
    resp.send(
        201,
        {
            '_links': {
                'self': '/user/1'
            },
            'email': 'userOne@BackYardBrood.com',
            'nameFirst': 'One',
            'nameLast': 'Uno',
            'zipCode': '11111'
        }
    );
};

exports.putById = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/user/1'
            },
            'email': 'userOne@BackYardBrood.com',
            'nameFirst': 'One',
            'nameLast': 'Uno',
            'zipCode': '11111'
        }
    );
};

exports.loginSubmit = function (req, resp) {
    var object,
        code;

    if (req.body.user == 'demo' && request.body.password == 'demo') {
        var crypto = require('crypto');
        var md5 = crypto.createHash('md5');
        object = {
                'token': md5(new Date() + 'demo'),
                'message': 'Login successful'
            };
        code = 200;
    } else {
        object = {
            'message': 'Authentication credentials not accepted'
        };
        code = 401;
    }
    resp.send(code, object);
};
