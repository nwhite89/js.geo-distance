[![Build Status](https://travis-ci.org/nwhite89/js.geo-distance.svg?branch=master)](https://travis-ci.org/nwhite89/js.geo-distance)
[![devDependency Status](https://david-dm.org/nwhite89/js.geo-distance/dev-status.svg)](https://david-dm.org/nwhite89/js.geo-distance#info=devDependencies)
[![Coverage Status](https://img.shields.io/coveralls/nwhite89/js.geo-distance.svg)](https://coveralls.io/r/nwhite89/js.geo-distance?branch=master)

#js.geo-distance

## Install

```js
bower install js.geo-distance
```

Then adding to your web page

```html
<script type="text/javascript" src="src/distance.js"></script>
```

## About JS Geo Distance

This plugin was build based on Chris Veness' JavaScript plugin found www.movable-type.co.uk/scripts/latlong.html

### Using

```js
var to = [
    {
        lat: -22.853840,
        lng: 19.882812
    },
    {
        lat: 44.514772,
        lng: 20.058594
    }
];
var from = {
    lat: 58.114637,
    lng: -4.375000
};


geoDistance.init(from, to, 'asc', 'feet', 2);
```
