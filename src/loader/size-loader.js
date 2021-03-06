import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'master/sizes';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("core");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter), size: 50 })
        .then(results => {
            return results.data
        });
}