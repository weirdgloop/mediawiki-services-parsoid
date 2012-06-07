/**
 * DataModel namespace.
 *
 * All classes and functions will be attached to this object to keep the global namespace clean.
 */
ve.dm = {
	//'nodeFactory': Initialized in ve.dm.NodeFactory.js
	//'converter': Initialized in ve.dm.Converter.js
};

ve.dm.createDomElement = function( type, attributes, doc ) {
	if ( doc === undefined ) {
		doc = document;
	}
	var element = doc.createElement( type );
	for ( var key in attributes ) {
		element.setAttribute( key, attributes[key] );
	}
	return element;
};

ve.dm.getObjectFromDomElementAttributes = function( domAttributes ) {
	var attributes = {};
	for ( var i = 0; i < domAttributes.length; i++ ) {
		attributes[domAttributes[i].name] = domAttributes[i].value;
	}
	return attributes;
};
