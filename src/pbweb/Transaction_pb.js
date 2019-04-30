/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Duration_pb = require('./Duration_pb.js');
goog.object.extend(proto, Duration_pb);
var BasicTypes_pb = require('./BasicTypes_pb.js');
goog.object.extend(proto, BasicTypes_pb);
var TransactionBody_pb = require('./TransactionBody_pb.js');
goog.object.extend(proto, TransactionBody_pb);
goog.exportSymbol('proto.proto.Transaction', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.Transaction.oneofGroups_);
};
goog.inherits(proto.proto.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Transaction.displayName = 'proto.proto.Transaction';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.Transaction.oneofGroups_ = [[1,4]];

/**
 * @enum {number}
 */
proto.proto.Transaction.BodydataCase = {
  BODYDATA_NOT_SET: 0,
  BODY: 1,
  BODYBYTES: 4
};

/**
 * @return {proto.proto.Transaction.BodydataCase}
 */
proto.proto.Transaction.prototype.getBodydataCase = function() {
  return /** @type {proto.proto.Transaction.BodydataCase} */(jspb.Message.computeOneofCase(this, proto.proto.Transaction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && TransactionBody_pb.TransactionBody.toObject(includeInstance, f),
    bodybytes: msg.getBodybytes_asB64(),
    sigs: (f = msg.getSigs()) && BasicTypes_pb.SignatureList.toObject(includeInstance, f),
    sigmap: (f = msg.getSigmap()) && BasicTypes_pb.SignatureMap.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Transaction}
 */
proto.proto.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Transaction;
  return proto.proto.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Transaction}
 */
proto.proto.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new TransactionBody_pb.TransactionBody;
      reader.readMessage(value,TransactionBody_pb.TransactionBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBodybytes(value);
      break;
    case 2:
      var value = new BasicTypes_pb.SignatureList;
      reader.readMessage(value,BasicTypes_pb.SignatureList.deserializeBinaryFromReader);
      msg.setSigs(value);
      break;
    case 3:
      var value = new BasicTypes_pb.SignatureMap;
      reader.readMessage(value,BasicTypes_pb.SignatureMap.deserializeBinaryFromReader);
      msg.setSigmap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      TransactionBody_pb.TransactionBody.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getSigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      BasicTypes_pb.SignatureList.serializeBinaryToWriter
    );
  }
  f = message.getSigmap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      BasicTypes_pb.SignatureMap.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionBody body = 1;
 * @return {?proto.proto.TransactionBody}
 */
proto.proto.Transaction.prototype.getBody = function() {
  return /** @type{?proto.proto.TransactionBody} */ (
    jspb.Message.getWrapperField(this, TransactionBody_pb.TransactionBody, 1));
};


/** @param {?proto.proto.TransactionBody|undefined} value */
proto.proto.Transaction.prototype.setBody = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.proto.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Transaction.prototype.clearBody = function() {
  this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Transaction.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes bodyBytes = 4;
 * @return {string}
 */
proto.proto.Transaction.prototype.getBodybytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes bodyBytes = 4;
 * This is a type-conversion wrapper around `getBodybytes()`
 * @return {string}
 */
proto.proto.Transaction.prototype.getBodybytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBodybytes()));
};


/**
 * optional bytes bodyBytes = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBodybytes()`
 * @return {!Uint8Array}
 */
proto.proto.Transaction.prototype.getBodybytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBodybytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.proto.Transaction.prototype.setBodybytes = function(value) {
  jspb.Message.setOneofField(this, 4, proto.proto.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.proto.Transaction.prototype.clearBodybytes = function() {
  jspb.Message.setOneofField(this, 4, proto.proto.Transaction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Transaction.prototype.hasBodybytes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SignatureList sigs = 2;
 * @return {?proto.proto.SignatureList}
 */
proto.proto.Transaction.prototype.getSigs = function() {
  return /** @type{?proto.proto.SignatureList} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.SignatureList, 2));
};


/** @param {?proto.proto.SignatureList|undefined} value */
proto.proto.Transaction.prototype.setSigs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Transaction.prototype.clearSigs = function() {
  this.setSigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Transaction.prototype.hasSigs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SignatureMap sigMap = 3;
 * @return {?proto.proto.SignatureMap}
 */
proto.proto.Transaction.prototype.getSigmap = function() {
  return /** @type{?proto.proto.SignatureMap} */ (
    jspb.Message.getWrapperField(this, BasicTypes_pb.SignatureMap, 3));
};


/** @param {?proto.proto.SignatureMap|undefined} value */
proto.proto.Transaction.prototype.setSigmap = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.proto.Transaction.prototype.clearSigmap = function() {
  this.setSigmap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.Transaction.prototype.hasSigmap = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);