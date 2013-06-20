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
 * Production API handlers
 */

exports.list = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/production?page=1',
                'first': '/production?page=1',
                'next': '/production?page=2',
                'last': '/production?page=last'
            },
            '_embedded': {
                'entry': [
                    {
                        '_links': {
                            'self': '/production/212',
                            'bird': '/bird/1'
                        },
                        'date': '2010-04-01',
                        'count': 5
                    },
                    {
                        '_links': {
                            'self': '/production/312',
                            'bird': '/bird/2'
                        },
                        'date': '2010-04-01',
                        'count': 6
                    }
                ]
            }
        }
    );
};

exports.post = function (req, resp) {
    resp.header('Location', '/production/500');
    resp.send(
        201,
        {
            '_links': {
                'self': '/production/500',
                'bird': '/bird/2'
            },
            'date': '2010-04-01',
            'count': 6
        }
    );
};

exports.getById = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/production/500',
                'bird': '/bird/2'
            },
            'date': '2010-04-01',
            'count': 6
        }
    );
};

exports.putById = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/production/500',
                'bird': '/bird/2'
            },
            'date': '2010-04-01',
            'count': 6
        }
    );
};
