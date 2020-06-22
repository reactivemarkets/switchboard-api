// automatically generated by the FlatBuffers compiler, do not modify

import * as NS17503805021538163740 from "./Enum_generated";
/**
 * @constructor
 */
export namespace PlatformApi{
export class PublicTrade {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns PublicTrade
 */
__init(i:number, bb:flatbuffers.ByteBuffer):PublicTrade {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param PublicTrade= obj
 * @returns PublicTrade
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:PublicTrade):PublicTrade {
  return (obj || new PublicTrade()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param PublicTrade= obj
 * @returns PublicTrade
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:PublicTrade):PublicTrade {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PublicTrade()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns flatbuffers.Long
 */
sourceTs():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
source():string|null
source(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
source(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
market():string|null
market(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
market(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
feedId():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
tradeId():string|null
tradeId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
tradeId(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
flags():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns PlatformApi.Side
 */
side():NS17503805021538163740.PlatformApi.Side {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : NS17503805021538163740.PlatformApi.Side.None;
};

/**
 * @returns number
 */
qty():number {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
price():number {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
execVenue():string|null
execVenue(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
execVenue(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(10);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long sourceTs
 */
static addSourceTs(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long) {
  builder.addFieldInt64(0, sourceTs, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset sourceOffset
 */
static addSource(builder:flatbuffers.Builder, sourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, sourceOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset marketOffset
 */
static addMarket(builder:flatbuffers.Builder, marketOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, marketOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number feedId
 */
static addFeedId(builder:flatbuffers.Builder, feedId:number) {
  builder.addFieldInt32(3, feedId, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tradeIdOffset
 */
static addTradeId(builder:flatbuffers.Builder, tradeIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, tradeIdOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number flags
 */
static addFlags(builder:flatbuffers.Builder, flags:number) {
  builder.addFieldInt16(5, flags, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param PlatformApi.Side side
 */
static addSide(builder:flatbuffers.Builder, side:NS17503805021538163740.PlatformApi.Side) {
  builder.addFieldInt8(6, side, NS17503805021538163740.PlatformApi.Side.None);
};

/**
 * @param flatbuffers.Builder builder
 * @param number qty
 */
static addQty(builder:flatbuffers.Builder, qty:number) {
  builder.addFieldFloat64(7, qty, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number price
 */
static addPrice(builder:flatbuffers.Builder, price:number) {
  builder.addFieldFloat64(8, price, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset execVenueOffset
 */
static addExecVenue(builder:flatbuffers.Builder, execVenueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, execVenueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 8); // market
  return offset;
};

static create(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long, sourceOffset:flatbuffers.Offset, marketOffset:flatbuffers.Offset, feedId:number, tradeIdOffset:flatbuffers.Offset, flags:number, side:NS17503805021538163740.PlatformApi.Side, qty:number, price:number, execVenueOffset:flatbuffers.Offset):flatbuffers.Offset {
  PublicTrade.start(builder);
  PublicTrade.addSourceTs(builder, sourceTs);
  PublicTrade.addSource(builder, sourceOffset);
  PublicTrade.addMarket(builder, marketOffset);
  PublicTrade.addFeedId(builder, feedId);
  PublicTrade.addTradeId(builder, tradeIdOffset);
  PublicTrade.addFlags(builder, flags);
  PublicTrade.addSide(builder, side);
  PublicTrade.addQty(builder, qty);
  PublicTrade.addPrice(builder, price);
  PublicTrade.addExecVenue(builder, execVenueOffset);
  return PublicTrade.end(builder);
}
}
}
