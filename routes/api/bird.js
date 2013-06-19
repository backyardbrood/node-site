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
 * Bird API handlers
 */

exports.index = function(req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/bird?page=1',
                'next': '/bird?page=2',
                'previous': '/bird?page=1',
                'first': '/bird?page=1',
                'last': '/bird?page=last'
            },
            '_embedded': {
                'bird': [
                    {
                        '_links': {
                            'self': '/bird/101'
                        },
                        'name': 'Bessie',
                        'type': 'Ameraucana',
                        'gender': 'hen',
                        'hatched': '2001-01-01'
                    },
                    {
                        '_links': {
                            'self': '/bird/102'
                        },
                        'name': 'Jane',
                        'type': 'Andalusian',
                        'gender': 'hen',
                        'hatched': '2002-02-02'
                    }
                ]
            }
        }
    );
};

exports.getById = function (req, resp) {
    var id = req.params.id;
    resp.send(
        {
            '_links': {
                'self': '/bird/101'
            },
            'name': 'Bessie',
            'type': 'Ameraucana',
            'gender': 'hen',
            'hatched': '2001-01-01'
        }
    );
};

exports.post = function (res, rep) {
    resp.set
    resp.send(
        201,
        {
            '_links': {
                'self': '/bird/101'
            },
            'name': 'Bessie',
            'type': 'Ameraucana',
            'gender': 'hen',
            'hatched': '2001-01-01'
        }
    )
};

exports.putById = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/bird/101'
            },
            'name': 'Bessie',
            'type': 'Ameraucana',
            'gender': 'hen',
            'hatched': '2001/01/01'
        }
    );
};

exports.getBirdByIdProduction = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/bird/1/production?page=1',
                'next': '/bird/1/production?page=2',
                'previous': '/bird/1/production?page=1',
                'first': '/bird/1/production?page=1',
                'last': '/bird/1/production?page=last'
            },
            '_embedded': {
                'production': [
                    {
                        '_links': {
                            'self': '/production/301',
                            'bird': '/bird/1'
                        },
                        'date': '2010-04-01',
                        'count': 5
                    },
                    {
                        '_links': {
                            'self': '/production/315',
                            'bird': '/bird/1'
                        },
                        'date': '2010-04-02',
                        'count': 6
                    }
                ]
            }
        }
    );
};
