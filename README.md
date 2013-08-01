# XDomainRequest

Make ajax requests using XDomainRequest, to support CORS on IE8-9.

There are some similar modules, but most are jquery plugins. This module just provides a function to make a request.


## Installing

`bower install xdomainrequest`


## Usage

`ajaxXDomainRequest(method, address, isJSON, data, callback)`

`callback` receives `(err, result)` as parameters

When `isJSON` is truthy, both `data` and `result` will be parsed as JSON. If you need something more sophisticated, please create an issue or send a pull request.


    /* Examples */
    ajaxXDomainRequest("GET", "http://some.url/", false, null, someCallback)
    ajaxXDomainRequest("POST", "http://some.url/", true, { key: 'value' }, someCallback)


## Tests

Please see [https://github.com/emanuelbsilva/cross-domain-http-test](https://github.com/emanuelbsilva/cross-domain-http-test)