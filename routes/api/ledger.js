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

exports.list = function(req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/ledger/?page=1',
                'next': '/ledger/?page=2',
                'previous': '/ledger/?page=1',
                'first': '/ledger/?page=1',
                'last': '/ledger/?page=last'
            },
            '_embedded': [
                {
                    '_links': {
                        'self': '/ledger/100'
                    },
                    'date': '2010-01-01',
                    'description': 'Feed',
                    'amount': -23.54
                },
                {
                    '_links': {
                        'self': '/ledger/101'
                    },
                    'date': '2010-01-03',
                    'description': 'Farmers Market sale',
                    'amount': 30.00
                }
            ]
        }
    );
};

exports.post = function(req, resp) {
    resp.header('Location', '/ledger/102');
    resp.send(
        201,
        {
            '_links': {
                'self': '/ledger/102'
            },
            'date': '2010-01-01',
            'description': 'Feed',
            'amount': 12.34
        }
    );
};

exports.getById = function(req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/ledger/100'
            },
            'date': '2010-01-01',
            'description': 'Feed',
            'amount': -23.54
        }
    );
};

exports.putById = function(req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/ledger/100'
            },
            'date': '2010-01-01',
            'description': 'Feed',
            'amount': -23.54
        }
    );
};
