function ajaxXDomainRequest(method, address, isJSON, data, callback) {
    xdr = new XDomainRequest();
    xdr.onload = function() {
      callback( null,
        isJSON? JSON.parse(xdr.responseText) : xdr.responseText );
    };
    xdr.onerror = function() {
      callback( new Error(), null );
    };
    xdr.onprogress = function(){};
    xdr.ontimeout = function() { };
    //xdr.timeout = 60;
    xdr.open(method, address );

    if(data) {
      setTimeout(function(){xdr.send(isJSON ? JSON.stringify(data) : data);}, 0);
    }
    else {
      setTimeout(function(){xdr.send();}, 0);
    }
}