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
 * Almanac API handlers
 */
exports.list = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/almanac?page=1',
                'next': '/almanac?page=2',
                'previous': '/almanac?page=1',
                'first': '/almanac?page=1',
                'last': '/almanac?page=last'
            },
            '_embedded': {
                'almanac': [
                    {
                        '_links': {
                            'self': '/almanac/2010-04-01'
                        },
                        'date': '2010-04-01',
                        'tempHigh': 70,
                        'tempLow': 50,
                        'sunRise': '06:59',
                        'sunSet': '18:59',
                        'sunHours': 12,
                        'production': 12
                    },
                    {
                        '_links': {
                            'self': '/almanac/2010-04-02'
                        },
                        'date': '2010-04-02',
                        'tempHigh': 71,
                        'tempLow': 51,
                        'sunRise': '06:58',
                        'sunSet': '18:58',
                        'sunHours': 12,
                        'production': 11
                    }
                ]
            }
        }
    );
};

exports.getByDate = function (req, resp) {
    resp.send(
        {
            '_links': {
                'self': '/almanac/2010-04-01'
            },
            'date': '2010-04-01',
            'tempHigh': 70,
            'tempLow': 50,
            'sunRise': '06:59',
            'sunSet': '18:59',
            'sunHours': 12,
            'production': 12
        }
    );
};
