#js.geo-distance

####About JS Geo Distance

This plugin was build based on Chris Veness' JavaScript plugin found www.movable-type.co.uk/scripts/latlong.html

Using
-----

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


geoDistance.run(to, from, 'feet', 2);
```
