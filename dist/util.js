System.register(["lodash"], function(exports_1) {
    var lodash_1;
    var getColumns, getValues;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            getColumns = function (data) {
                var source = lodash_1.default.head(data);
                var datapoints = source['datapoints'];
                var head1 = lodash_1.default.head(datapoints);
                var head2 = lodash_1.default.head(head1);
                var columns = JSON.parse(head2);
                var keys = lodash_1.default.keys(columns);
                return keys.map(function (text) { return ({ text: text }); });
            };
            getValues = function (data) {
                var datapoints = lodash_1.default.head(data)['datapoints'];
                return datapoints.map(function (point) {
                    var time = point[1];
                    var values = lodash_1.default.values(JSON.parse(point[0]));
                    return [time].concat(values);
                });
            };
            exports_1("getColumns", getColumns);
            exports_1("getValues", getValues);
        }
    }
});
//# sourceMappingURL=util.js.map