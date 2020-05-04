(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('acorn')) :
  typeof define === 'function' && define.amd ? define(['acorn'], factory) :
  (global = global || self, global.Sval = factory(global.acorn));
}(this, (function (acorn) { 'use strict';

  var version = "0.4.6";

  const define = Object.defineProperty;
  const getDptor = Object.getOwnPropertyDescriptor;
  const getOwnNames = Object.getOwnPropertyNames;
  function createSymbol(key) {
      return key + Math.random().toString(36).substring(2);
  }
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
  }
  let names = [];
  let globalObj = Object.create(null);
  try {
      if (!window.Object)
          throw 0;
      names = getOwnNames(globalObj = window).filter(n => n !== 'webkitStorageInfo');
  }
  catch (err) {
      try {
          if (!global.Object)
              throw 0;
          names = getOwnNames(globalObj = global).filter(n => n !== 'GLOBAL' && n !== 'root');
      }
      catch (err) {
          try {
              globalObj.Object = Object;
          }
          catch (err) { }
          try {
              globalObj.Function = Function;
          }
          catch (err) { }
          try {
              globalObj.Array = Array;
          }
          catch (err) { }
          try {
              globalObj.Number = Number;
          }
          catch (err) { }
          try {
              globalObj.parseFloat = parseFloat;
          }
          catch (err) { }
          try {
              globalObj.parseInt = parseInt;
          }
          catch (err) { }
          try {
              globalObj.Infinity = Infinity;
          }
          catch (err) { }
          try {
              globalObj.NaN = NaN;
          }
          catch (err) { }
          try {
              globalObj.undefined = undefined;
          }
          catch (err) { }
          try {
              globalObj.Boolean = Boolean;
          }
          catch (err) { }
          try {
              globalObj.String = String;
          }
          catch (err) { }
          try {
              globalObj.Symbol = Symbol;
          }
          catch (err) { }
          try {
              globalObj.Date = Date;
          }
          catch (err) { }
          try {
              globalObj.Promise = Promise;
          }
          catch (err) { }
          try {
              globalObj.RegExp = RegExp;
          }
          catch (err) { }
          try {
              globalObj.Error = Error;
          }
          catch (err) { }
          try {
              globalObj.EvalError = EvalError;
          }
          catch (err) { }
          try {
              globalObj.RangeError = RangeError;
          }
          catch (err) { }
          try {
              globalObj.ReferenceError = ReferenceError;
          }
          catch (err) { }
          try {
              globalObj.SyntaxError = SyntaxError;
          }
          catch (err) { }
          try {
              globalObj.TypeError = TypeError;
          }
          catch (err) { }
          try {
              globalObj.URIError = URIError;
          }
          catch (err) { }
          try {
              globalObj.JSON = JSON;
          }
          catch (err) { }
          try {
              globalObj.Math = Math;
          }
          catch (err) { }
          try {
              globalObj.console = console;
          }
          catch (err) { }
          try {
              globalObj.Intl = Intl;
          }
          catch (err) { }
          try {
              globalObj.ArrayBuffer = ArrayBuffer;
          }
          catch (err) { }
          try {
              globalObj.Uint8Array = Uint8Array;
          }
          catch (err) { }
          try {
              globalObj.Int8Array = Int8Array;
          }
          catch (err) { }
          try {
              globalObj.Uint16Array = Uint16Array;
          }
          catch (err) { }
          try {
              globalObj.Int16Array = Int16Array;
          }
          catch (err) { }
          try {
              globalObj.Uint32Array = Uint32Array;
          }
          catch (err) { }
          try {
              globalObj.Int32Array = Int32Array;
          }
          catch (err) { }
          try {
              globalObj.Float32Array = Float32Array;
          }
          catch (err) { }
          try {
              globalObj.Float64Array = Float64Array;
          }
          catch (err) { }
          try {
              globalObj.Uint8ClampedArray = Uint8ClampedArray;
          }
          catch (err) { }
          try {
              globalObj.DataView = DataView;
          }
          catch (err) { }
          try {
              globalObj.Map = Map;
          }
          catch (err) { }
          try {
              globalObj.Set = Set;
          }
          catch (err) { }
          try {
              globalObj.WeakMap = WeakMap;
          }
          catch (err) { }
          try {
              globalObj.WeakSet = WeakSet;
          }
          catch (err) { }
          try {
              globalObj.Proxy = Proxy;
          }
          catch (err) { }
          try {
              globalObj.Reflect = Reflect;
          }
          catch (err) { }
          try {
              globalObj.decodeURI = decodeURI;
          }
          catch (err) { }
          try {
              globalObj.decodeURIComponent = decodeURIComponent;
          }
          catch (err) { }
          try {
              globalObj.encodeURI = encodeURI;
          }
          catch (err) { }
          try {
              globalObj.encodeURIComponent = encodeURIComponent;
          }
          catch (err) { }
          try {
              globalObj.escape = escape;
          }
          catch (err) { }
          try {
              globalObj.unescape = unescape;
          }
          catch (err) { }
          try {
              globalObj.eval = eval;
          }
          catch (err) { }
          try {
              globalObj.isFinite = isFinite;
          }
          catch (err) { }
          try {
              globalObj.isNaN = isNaN;
          }
          catch (err) { }
          try {
              globalObj.SharedArrayBuffer = SharedArrayBuffer;
          }
          catch (err) { }
          try {
              globalObj.Atomics = Atomics;
          }
          catch (err) { }
          try {
              globalObj.WebAssembly = WebAssembly;
          }
          catch (err) { }
          try {
              globalObj.clearInterval = clearInterval;
          }
          catch (err) { }
          try {
              globalObj.clearTimeout = clearTimeout;
          }
          catch (err) { }
          try {
              globalObj.setInterval = setInterval;
          }
          catch (err) { }
          try {
              globalObj.setTimeout = setTimeout;
          }
          catch (err) { }
          try {
              globalObj.crypto = crypto;
          }
          catch (err) { }
          names = getOwnNames(globalObj);
      }
  }
  if (globalObj.Symbol) {
      !globalObj.Symbol.iterator && (globalObj.Symbol.iterator = createSymbol('iterator'));
      !globalObj.Symbol.asyncIterator && (globalObj.Symbol.asyncIterator = createSymbol('asynciterator'));
  }
  const win = Object.create(null);
  for (let i = 0; i < names.length; i++) {
      const name = names[i];
      try {
          win[name] = globalObj[name];
      }
      catch (err) { }
  }
  function createSandBox() {
      return Object.assign(Object.create(null), win);
  }
  function setProto(obj, proto) {
      Object.setPrototypeOf ? Object.setPrototypeOf(obj, proto) : obj.__proto__ = proto;
  }
  function inherits(subClass, superClass) {
      setProto(subClass, superClass);
      subClass.prototype = Object.create(superClass.prototype, {
          constructor: {
              value: subClass,
              writable: true,
          }
      });
  }
  function getProto(obj) {
      return Object.getPrototypeOf ? Object.getPrototypeOf(obj) : obj.__proto__;
  }
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  function getGetterOrSetter(method, obj, key) {
      while (obj) {
          const descriptor = getOwnPropertyDescriptor(obj, key);
          const value = typeof descriptor !== 'undefined'
              && typeof descriptor.writable === 'undefined'
              && typeof descriptor[method] === 'function'
              && descriptor[method];
          if (value) {
              return value;
          }
          else {
              obj = getProto(obj);
          }
      }
  }
  function getGetter(obj, key) {
      return getGetterOrSetter('get', obj, key);
  }
  function getSetter(obj, key) {
      return getGetterOrSetter('set', obj, key);
  }
  const AWAIT = { RES: undefined };
  function runAsync(iterator, options = {}) {
      const { res, err, ret, fullRet } = options;
      return new Promise((resolve, reject) => {
          if ('ret' in options) {
              return resolve(iterator.return(ret));
          }
          if ('err' in options) {
              onRejected(err);
          }
          else {
              onFulfilled(res);
          }
          function onFulfilled(res) {
              let ret;
              try {
                  ret = iterator.next(res);
              }
              catch (e) {
                  return reject(e);
              }
              next(ret);
              return null;
          }
          function onRejected(err) {
              let ret;
              try {
                  ret = iterator.throw(err);
              }
              catch (e) {
                  return reject(e);
              }
              next(ret);
          }
          function next(ret) {
              if (ret.done)
                  return resolve(fullRet ? ret : ret.value);
              if (ret.value !== AWAIT)
                  return resolve(ret);
              const awaitValue = AWAIT.RES;
              const value = awaitValue && awaitValue.then === 'function'
                  ? awaitValue : Promise.resolve(awaitValue);
              return value.then(onFulfilled, onRejected);
          }
      });
  }

  class SymbolTable {
      constructor() {
          this.table = Object.create(null);
          this.pointer = 0;
          this.tableChain = [];
          this.pointerChain = [];
          this.globalVarName = {};
          this.type = null;
          this.hoist = false;
      }
      set(name, type = this.type) {
          if (this.hoist) {
              if (hasOwn(this.table, name)) {
                  const variable = this.table[name];
                  if (variable.type !== 'var' || type !== 'var') {
                      throw new SyntaxError(`Identifier '${name}' has already been declared`);
                  }
              }
              else if (type === 'var') {
                  const pointer = this.pointer++;
                  this.table[name] = { type: type, pointer };
                  if (!this.tableChain.length) {
                      this.globalVarName[pointer] = name;
                  }
              }
              else {
                  this.table[name] = null;
              }
          }
          else if (type === 'var' && this.table[name]) {
              return this.table[name];
          }
          else {
              return this.table[name] = { type: type, pointer: this.pointer++ };
          }
      }
      get(name) {
          if (this.table[name]) {
              return this.table[name];
          }
          else {
              throw new ReferenceError(`${name} is not defined`);
          }
      }
      pushScope() {
          this.tableChain.push(this.table);
          this.pointerChain.push(this.pointer);
          this.table = Object.create(this.table);
      }
      popScope() {
          this.table = this.tableChain.pop();
          this.pointer = this.pointerChain.pop();
      }
  }

  class State {
      constructor() {
          this.stack = [];
          this.esp = 0;
          this.ebpList = [0];
          this.symbols = new SymbolTable();
          this.opCodes = [];
          this.context = [];
          this.pc = 0;
          this.catchPcStack = [];
      }
  }
  class RateLimitedState extends State {
      constructor(stepLimit) {
          super();
          this._pc = 0;
          this.stepCounter = 0;
          this.stepLimit = stepLimit;
      }
      get pc() {
          return this._pc;
      }
      set pc(value) {
          this.stepCounter += 1;
          this._pc = value;
          if (this.stepCounter > this.stepLimit) {
              throw new Error('Execution limit exceeded');
          }
      }
  }

  var OP;
  (function (OP) {
      OP[OP["LOADK"] = 0] = "LOADK";
      OP[OP["LOADV"] = 1] = "LOADV";
      OP[OP["STORE"] = 2] = "STORE";
      OP[OP["BIOP"] = 3] = "BIOP";
      OP[OP["UNOP"] = 4] = "UNOP";
      OP[OP["JMP"] = 5] = "JMP";
      OP[OP["IF"] = 6] = "IF";
      OP[OP["IFNOT"] = 7] = "IFNOT";
      OP[OP["CSNE"] = 8] = "CSNE";
      OP[OP["ARR"] = 9] = "ARR";
      OP[OP["OBJ"] = 10] = "OBJ";
      OP[OP["MGET"] = 11] = "MGET";
      OP[OP["MSET"] = 12] = "MSET";
      OP[OP["REST"] = 13] = "REST";
      OP[OP["KOVS"] = 14] = "KOVS";
      OP[OP["CLS"] = 15] = "CLS";
      OP[OP["CMET"] = 16] = "CMET";
      OP[OP["FUNC"] = 17] = "FUNC";
      OP[OP["CALL"] = 18] = "CALL";
      OP[OP["NEW"] = 19] = "NEW";
      OP[OP["RET"] = 20] = "RET";
      OP[OP["YIELD"] = 21] = "YIELD";
      OP[OP["AWAIT"] = 22] = "AWAIT";
      OP[OP["COPY"] = 23] = "COPY";
      OP[OP["POP"] = 24] = "POP";
      OP[OP["GC"] = 25] = "GC";
      OP[OP["DBG"] = 26] = "DBG";
      OP[OP["THROW"] = 27] = "THROW";
  })(OP || (OP = {}));
  var SIGNAL;
  (function (SIGNAL) {
      SIGNAL[SIGNAL["NONE"] = 0] = "NONE";
      SIGNAL[SIGNAL["RET"] = 1] = "RET";
      SIGNAL[SIGNAL["YIELD"] = 2] = "YIELD";
      SIGNAL[SIGNAL["AWAIT"] = 3] = "AWAIT";
  })(SIGNAL || (SIGNAL = {}));

  const ES6_CLASS = createSymbol('class');
  const SUPER_CALLED = createSymbol('super');
  function step(state) {
      const stack = state.stack;
      const code = state.opCodes[state.pc];
      let signal = { type: SIGNAL.NONE };
      switch (code.op) {
          case OP.LOADK:
              stack[state.esp++] = code.val;
              break;
          case OP.LOADV: {
              const value = state.context[code.val] && state.context[code.val].store;
              if (code.this && value[SUPER_CALLED] === false) {
                  throw new ReferenceError("Must call super constructor in derived class before accessing 'this'");
              }
              stack[state.esp++] = value;
              break;
          }
          case OP.STORE: {
              if (code.alloc) {
                  const ebp = state.ebpList[state.ebpList.length - 1];
                  const storeVal = state.esp > ebp ? stack[--state.esp] : undefined;
                  state.context[code.val] = { store: storeVal };
                  if (!ebp) {
                      const globalPointer = state.symbols.get('window').pointer;
                      const globalVariable = state.context[globalPointer].store;
                      const globalVarName = state.symbols.globalVarName[code.val];
                      define(globalVariable, globalVarName, { value: storeVal, writable: true, enumerable: true });
                  }
              }
              else {
                  state.context[code.val].store = stack[--state.esp];
              }
              break;
          }
          case OP.BIOP: {
              const right = stack[--state.esp];
              const left = stack[--state.esp];
              switch (code.val) {
                  case '+':
                      stack[state.esp++] = left + right;
                      break;
                  case '-':
                      stack[state.esp++] = left - right;
                      break;
                  case '*':
                      stack[state.esp++] = left * right;
                      break;
                  case '/':
                      stack[state.esp++] = left / right;
                      break;
                  case '==':
                      stack[state.esp++] = left == right;
                      break;
                  case '!=':
                      stack[state.esp++] = left != right;
                      break;
                  case '===':
                      stack[state.esp++] = left === right;
                      break;
                  case '!==':
                      stack[state.esp++] = left !== right;
                      break;
                  case '<':
                      stack[state.esp++] = left < right;
                      break;
                  case '<=':
                      stack[state.esp++] = left <= right;
                      break;
                  case '>':
                      stack[state.esp++] = left > right;
                      break;
                  case '>=':
                      stack[state.esp++] = left >= right;
                      break;
                  case '||':
                      stack[state.esp++] = left || right;
                      break;
                  case '&&':
                      stack[state.esp++] = left && right;
                      break;
                  case 'in':
                      stack[state.esp++] = left in right;
                      break;
                  case 'instanceof':
                      stack[state.esp++] = left instanceof right;
                      break;
                  case '**':
                      stack[state.esp++] = Math.pow(left, right);
                      break;
                  case '%':
                      stack[state.esp++] = left % right;
                      break;
                  case '|':
                      stack[state.esp++] = left | right;
                      break;
                  case '^':
                      stack[state.esp++] = left ^ right;
                      break;
                  case '&':
                      stack[state.esp++] = left & right;
                      break;
                  case '<<':
                      stack[state.esp++] = left << right;
                      break;
                  case '>>':
                      stack[state.esp++] = left >> right;
                      break;
                  case '>>>':
                      stack[state.esp++] = left >>> right;
                      break;
                  default: throw new SyntaxError(`Unexpected token ${code.val}`);
              }
              break;
          }
          case OP.UNOP: {
              const arg = stack[--state.esp];
              switch (code.val) {
                  case '+':
                      stack[state.esp++] = +arg;
                      break;
                  case '-':
                      stack[state.esp++] = -arg;
                      break;
                  case '!':
                      stack[state.esp++] = !arg;
                      break;
                  case '~':
                      stack[state.esp++] = ~arg;
                      break;
                  case 'void':
                      stack[state.esp++] = void arg;
                      break;
                  case 'typeof':
                      stack[state.esp++] = typeof arg;
                      break;
                  case 'delete': {
                      const obj = stack[--state.esp];
                      stack[state.esp++] = delete obj[arg];
                      break;
                  }
                  default: throw new SyntaxError(`Unexpected token ${code.val}`);
              }
              break;
          }
          case OP.JMP:
              state.pc = code.val - 1;
              break;
          case OP.IF:
              stack[--state.esp] && (state.pc = code.val - 1);
              break;
          case OP.IFNOT:
              !stack[--state.esp] && (state.pc = code.val - 1);
              break;
          case OP.CSNE:
              stack[--state.esp] !== stack[state.esp - 1] && (state.pc = code.val - 1);
              break;
          case OP.ARR: {
              const spread = code.val.concat();
              const newEsp = state.esp - spread.pop();
              const arrItems = stack.slice(newEsp, state.esp);
              state.esp = newEsp;
              let arr = [];
              for (let i = 0; i < arrItems.length; i++) {
                  if (spread.indexOf(i) === -1) {
                      arr.push(arrItems[i]);
                  }
                  else {
                      arr = [...arr, ...arrItems[i]];
                  }
              }
              stack[state.esp++] = arr;
              break;
          }
          case OP.OBJ: {
              const object = {};
              const propKinds = code.val;
              const newEsp = state.esp - propKinds.length * 2;
              const keyValue = stack.slice(newEsp, state.esp);
              state.esp = newEsp;
              for (let i = 0; i < propKinds.length * 2; i += 2) {
                  const key = keyValue[i];
                  const value = keyValue[i + 1];
                  const kind = propKinds[i / 2];
                  if (kind === 'init') {
                      object[key] = value;
                  }
                  else if (kind === 'get') {
                      const oriDptor = getDptor(object, key);
                      define(object, key, {
                          get: value,
                          set: oriDptor && oriDptor.set,
                          enumerable: true,
                          configurable: true
                      });
                  }
                  else if (kind === 'set') {
                      const oriDptor = getDptor(object, key);
                      define(object, key, {
                          get: oriDptor && oriDptor.get,
                          set: value,
                          enumerable: true,
                          configurable: true
                      });
                  }
                  else {
                      Object.assign(object, value);
                  }
              }
              stack[state.esp++] = object;
              break;
          }
          case OP.MGET: {
              const key = stack[--state.esp];
              const object = stack[--state.esp];
              if (object == undefined) {
                  throw new TypeError(`Cannot read property '${key}' of ${object}`);
              }
              const superProto = code.val && stack[--state.esp];
              const getter = getGetter(superProto || object, key);
              stack[state.esp++] = getter ? getter.call(object) : object[key];
              break;
          }
          case OP.MSET: {
              const key = stack[--state.esp];
              const object = stack[--state.esp];
              if (object == undefined) {
                  throw new TypeError(`Cannot set property '${key}' of ${object}`);
              }
              const superProto = code.val && stack[--state.esp];
              const value = stack[--state.esp];
              const setter = getSetter(superProto || object, key);
              setter ? setter.call(object, value) : object[key] = value;
              break;
          }
          case OP.REST: {
              if (code.val === 'obj') {
                  const newEsp = state.esp - code.remove;
                  const rmKeys = stack.slice(newEsp, state.esp);
                  state.esp = newEsp;
                  const object = Object.assign({}, stack[--state.esp]);
                  for (let i = 0; i < rmKeys.length; i++) {
                      delete object[rmKeys[i]];
                  }
                  stack[state.esp++] = object;
              }
              else if (code.val === 'arr') {
                  const arr = stack[--state.esp].slice(code.remove);
                  stack[state.esp++] = arr;
              }
              else {
                  const newEsp = state.ebpList[state.ebpList.length - 1];
                  const args = stack.slice(newEsp, state.esp).reverse();
                  state.esp = newEsp;
                  stack[state.esp++] = args;
              }
              break;
          }
          case OP.KOVS: {
              const kovs = [];
              if (code.val) {
                  for (const key in stack[--state.esp]) {
                      kovs.push(key);
                  }
              }
              else {
                  const iterator = stack[--state.esp];
                  for (const value of iterator) {
                      kovs.push(value);
                  }
              }
              stack[state.esp++] = kovs;
              stack[state.esp++] = kovs.length;
              break;
          }
          case OP.FUNC: {
              const beginPc = state.pc + 1;
              const endPc = code.end;
              const lexicalCtx = state.context.concat();
              if (!code.generator && !code.async) {
                  const func = function () {
                      for (let i = arguments.length - 1; i > -1; i--) {
                          stack[state.esp++] = arguments[i];
                      }
                      if (!code.arrow) {
                          stack[state.esp++] = arguments;
                          stack[state.esp++] = this;
                      }
                      const resetPc = state.pc;
                      const resetCtx = state.context;
                      state.pc = beginPc;
                      state.context = lexicalCtx;
                      let sig = { type: SIGNAL.NONE };
                      let ret;
                      while (state.pc < endPc) {
                          sig = step(state);
                          if (sig.type === SIGNAL.RET) {
                              ret = stack[--state.esp];
                              break;
                          }
                      }
                      state.pc = resetPc;
                      state.context = resetCtx;
                      return ret;
                  };
                  define(func, 'name', {
                      value: code.val,
                      configurable: true
                  });
                  define(func, 'length', {
                      value: code.length,
                      configurable: true
                  });
                  stack[state.esp++] = func;
              }
              else {
                  const tmpFunc = function* () {
                      for (let i = arguments.length - 1; i > -1; i--) {
                          stack[state.esp++] = arguments[i];
                      }
                      if (!code.arrow) {
                          stack[state.esp++] = arguments;
                          stack[state.esp++] = this;
                      }
                      let resetPc = state.pc;
                      let resetCtx = state.context;
                      state.pc = beginPc;
                      state.context = lexicalCtx;
                      let sig = { type: SIGNAL.NONE };
                      let ret;
                      while (state.pc < endPc) {
                          sig = step(state);
                          if (sig.type === SIGNAL.RET) {
                              ret = stack[--state.esp];
                              break;
                          }
                          else if (sig.type === SIGNAL.YIELD) {
                              [state.pc, resetPc] = [resetPc, state.pc];
                              [state.context, resetCtx] = [resetCtx, state.context];
                              const resumeVal = sig.val ? yield* stack[--state.esp] : yield stack[--state.esp];
                              stack[state.esp++] = resumeVal;
                              [state.pc, resetPc] = [resetPc, state.pc];
                              [state.context, resetCtx] = [resetCtx, state.context];
                          }
                          else if (sig.type === SIGNAL.AWAIT) {
                              [state.pc, resetPc] = [resetPc, state.pc];
                              [state.context, resetCtx] = [resetCtx, state.context];
                              AWAIT.RES = stack[--state.esp];
                              const resumeVal = yield AWAIT;
                              stack[state.esp++] = resumeVal;
                              [state.pc, resetPc] = [resetPc, state.pc];
                              [state.context, resetCtx] = [resetCtx, state.context];
                          }
                      }
                      state.pc = resetPc;
                      state.context = resetCtx;
                      return ret;
                  };
                  let func = tmpFunc;
                  if (code.async && code.generator) {
                      func = function () {
                          const iterator = tmpFunc.apply(this, arguments);
                          let last = Promise.resolve();
                          let hasCatch = false;
                          const run = (opts) => last = last
                              .then(() => runAsync(iterator, Object.assign({ fullRet: true }, opts)))
                              .catch(err => {
                              if (!hasCatch) {
                                  hasCatch = true;
                                  return Promise.reject(err);
                              }
                          });
                          const asyncIterator = {
                              next: (res) => run({ res }),
                              throw: (err) => run({ err }),
                              return: (ret) => run({ ret })
                          };
                          if (typeof Symbol === 'function') {
                              asyncIterator[Symbol.iterator] = function () { return this; };
                          }
                          return asyncIterator;
                      };
                  }
                  else if (code.async) {
                      func = function () {
                          return runAsync(tmpFunc.apply(this, arguments));
                      };
                  }
                  define(func, 'name', {
                      value: code.val,
                      configurable: true
                  });
                  define(func, 'length', {
                      value: code.length,
                      configurable: true
                  });
                  stack[state.esp++] = func;
              }
              state.pc = endPc - 1;
              break;
          }
          case OP.CLS: {
              let superClass = null;
              if (code.inherit) {
                  superClass = stack[--state.esp];
              }
              let classCtor = null;
              if (code.constructor) {
                  classCtor = stack[--state.esp];
              }
              let ctor = function () {
                  if (classCtor) {
                      if (superClass) {
                          define(this, SUPER_CALLED, { value: false, configurable: true });
                      }
                      const result = classCtor.apply(this, arguments);
                      if (superClass) {
                          if (!this[SUPER_CALLED]) {
                              throw new ReferenceError('Must call super constructor in derived class before returning from derived constructor');
                          }
                          delete this[SUPER_CALLED];
                      }
                      return result;
                  }
                  else if (superClass) {
                      return superClass.apply(this, arguments);
                  }
              };
              if (superClass) {
                  inherits(ctor, superClass);
              }
              define(ctor, 'name', {
                  value: code.val,
                  configurable: true
              });
              define(ctor, ES6_CLASS, { value: true });
              stack[state.esp++] = ctor;
              break;
          }
          case OP.CMET: {
              const key = stack[--state.esp];
              const met = stack[--state.esp];
              const obj = code.static ? stack[state.esp - 1] : stack[state.esp - 1].prototype;
              switch (code.val) {
                  case 'get': {
                      const oriDptor = getDptor(obj, key);
                      define(obj, key, {
                          get: met,
                          set: oriDptor && oriDptor.set,
                          configurable: true,
                      });
                      break;
                  }
                  case 'set': {
                      const oriDptor = getDptor(obj, key);
                      define(obj, key, {
                          get: oriDptor && oriDptor.get,
                          set: met,
                          configurable: true,
                      });
                      break;
                  }
                  default:
                      define(obj, key, {
                          value: met,
                          writable: true,
                          configurable: true,
                      });
              }
              break;
          }
          case OP.CALL: {
              const func = stack[--state.esp];
              if (!code.super && func[ES6_CLASS]) {
                  throw new TypeError(`Class constructor ${func.name} cannot be invoked without 'new'`);
              }
              const obj = stack[--state.esp];
              if (code.super) {
                  if (obj[SUPER_CALLED]) {
                      throw new ReferenceError('Super constructor may only be called once');
                  }
                  define(obj, SUPER_CALLED, { value: true, configurable: true });
              }
              const spread = code.val.concat();
              const newEsp = state.esp - spread.pop();
              const argsItems = stack.slice(newEsp, state.esp);
              state.esp = newEsp;
              let args = [];
              for (let i = 0; i < argsItems.length; i++) {
                  if (spread.indexOf(i) === -1) {
                      args.push(argsItems[i]);
                  }
                  else {
                      args = [...args, ...argsItems[i]];
                  }
              }
              state.ebpList.push(state.esp);
              let result;
              if (code.catch) {
                  try {
                      result = func.apply(obj, args);
                  }
                  catch (err) {
                      result = err;
                      state.pc = code.catch.pc - 1;
                  }
              }
              else {
                  result = func.apply(obj, args);
              }
              state.esp = state.ebpList.pop();
              stack[state.esp++] = result;
              break;
          }
          case OP.NEW: {
              const ctor = stack[--state.esp];
              const spread = code.val.concat();
              const newEsp = state.esp - spread.pop();
              const argsItems = stack.slice(newEsp, state.esp);
              state.esp = newEsp;
              let args = [];
              for (let i = 0; i < argsItems.length; i++) {
                  if (spread.indexOf(i) === -1) {
                      args.push(argsItems[i]);
                  }
                  else {
                      args = [...args, ...argsItems[i]];
                  }
              }
              state.ebpList.push(state.esp);
              let result;
              if (code.catch) {
                  try {
                      result = new ctor(...args);
                  }
                  catch (err) {
                      result = err;
                      state.pc = code.catch.pc - 1;
                  }
              }
              else {
                  result = new ctor(...args);
              }
              state.esp = state.ebpList.pop();
              stack[state.esp++] = result;
              break;
          }
          case OP.RET:
              signal = { type: SIGNAL.RET };
              break;
          case OP.YIELD:
              signal = { type: SIGNAL.YIELD, val: code.val };
              break;
          case OP.AWAIT:
              signal = { type: SIGNAL.AWAIT };
              break;
          case OP.COPY: {
              const top = stack[state.esp - 1];
              stack[state.esp++] = top;
              break;
          }
          case OP.POP:
              --state.esp;
              break;
          case OP.DBG:
              debugger;
              break;
          case OP.THROW: {
              if (code.val) {
                  state.pc = code.val.pc - 1;
                  break;
              }
              else {
                  throw stack[--state.esp];
              }
          }
          case OP.GC:
              state.esp = state.ebpList[state.ebpList.length - 1];
              break;
          default: throw new Error('Unknown instruct code');
      }
      state.pc++;
      return signal;
  }
  function execute(state) {
      while (state.pc < state.opCodes.length)
          step(state);
  }

  function Literal(node, state) {
      state.opCodes.push({ op: OP.LOADK, val: node.value });
  }

  var literal = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Literal: Literal
  });

  function Identifier(node, state) {
      state.opCodes.push({ op: OP.LOADV, val: state.symbols.get(node.name).pointer });
  }

  var identifier = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Identifier: Identifier
  });

  function Program(program, state) {
      for (let i = 0; i < program.body.length; i++) {
          compile(program.body[i], state);
          state.opCodes.push({ op: OP.GC });
      }
  }

  var program = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Program: Program
  });

  function ObjectPattern(node, state) {
      for (let i = 0; i < node.properties.length; i++) {
          const property = node.properties[i];
          let value = property.value;
          state.opCodes.push({ op: OP.COPY });
          if (property.type === 'Property') {
              const propKey = property.key;
              if (property.computed) {
                  compile(propKey, state);
              }
              else {
                  state.opCodes.push({ op: OP.LOADK, val: propKey.name });
              }
              state.opCodes.push({ op: OP.MGET });
          }
          else {
              for (let j = 0; j < i; j++) {
                  const propKey = node.properties[j].key;
                  if (node.properties[j].computed) {
                      compile(propKey, state);
                  }
                  else {
                      state.opCodes.push({ op: OP.LOADK, val: propKey.name });
                  }
              }
              state.opCodes.push({ op: OP.REST, val: 'obj', remove: i });
              value = property.argument;
          }
          if (value.type === 'Identifier') {
              if (state.symbols.type) {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.set(value.name).pointer, alloc: true });
              }
              else {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.get(value.name).pointer });
              }
          }
          else if (value.type === 'MemberExpression') {
              compile(value.object, state);
              if (value.object.type === 'Super') {
                  state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
              }
              const prop = value.property;
              if (value.computed) {
                  compile(prop, state);
              }
              else {
                  state.opCodes.push({ op: OP.LOADK, val: prop.name });
              }
              state.opCodes.push({ op: OP.MSET, val: value.object.type === 'Super' });
          }
          else {
              compilePattern(value, state);
          }
      }
      state.opCodes.push({ op: OP.POP });
  }
  function ArrayPattern(node, state) {
      for (let i = 0; i < node.elements.length; i++) {
          const element = node.elements[i];
          if (!element)
              continue;
          let value = element;
          state.opCodes.push({ op: OP.COPY });
          if (element.type === 'RestElement') {
              state.opCodes.push({ op: OP.REST, val: 'arr', remove: i });
              value = element.argument;
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: i });
              state.opCodes.push({ op: OP.MGET });
          }
          if (value.type === 'Identifier') {
              if (state.symbols.type) {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.set(value.name).pointer, alloc: true });
              }
              else {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.get(value.name).pointer });
              }
          }
          else if (value.type === 'MemberExpression') {
              compile(value.object, state);
              if (value.object.type === 'Super') {
                  state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
              }
              const prop = value.property;
              if (value.computed) {
                  compile(prop, state);
              }
              else {
                  state.opCodes.push({ op: OP.LOADK, val: prop.name });
              }
              state.opCodes.push({ op: OP.MSET, val: value.object.type === 'Super' });
          }
          else {
              compilePattern(value, state);
          }
      }
      state.opCodes.push({ op: OP.POP });
  }
  function AssignmentPattern(node, state) {
      state.opCodes.push({ op: OP.COPY });
      state.opCodes.push({ op: OP.LOADK });
      state.opCodes.push({ op: OP.BIOP, val: '===' });
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      state.opCodes.push(ifnotCode);
      state.opCodes.push({ op: OP.POP });
      compile(node.right, state);
      ifnotCode.val = state.opCodes.length;
      if (node.left.type === 'Identifier') {
          if (state.symbols.type) {
              state.opCodes.push({ op: OP.STORE, val: state.symbols.set(node.left.name).pointer, alloc: true });
          }
          else {
              state.opCodes.push({ op: OP.STORE, val: state.symbols.get(node.left.name).pointer });
          }
      }
      else {
          compilePattern(node.left, state);
      }
  }

  function compileFunc(node, state) {
      const arrow = node.type === 'ArrowFunctionExpression';
      const funCode = {
          op: OP.FUNC,
          val: '',
          end: -1,
          arrow,
          async: node.async,
          generator: node.generator,
          length: node.params.length
      };
      state.opCodes.push(funCode);
      state.symbols.pushScope();
      state.catchPcStack.push(null);
      if (!arrow) {
          state.opCodes.push({ op: OP.STORE, val: state.symbols.set('this', 'const').pointer, alloc: true });
          state.opCodes.push({ op: OP.STORE, val: state.symbols.set('arguments', 'var').pointer, alloc: true });
      }
      for (let i = 0; i < node.params.length; i++) {
          const param = node.params[i];
          if (param.type === 'Identifier') {
              state.opCodes.push({ op: OP.STORE, val: state.symbols.set(param.name, 'var').pointer, alloc: true });
          }
          else if (param.type === 'RestElement') {
              state.opCodes.push({ op: OP.REST, val: 'func' });
              const value = param.argument;
              if (value.type === 'Identifier') {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.set(value.name, 'var').pointer, alloc: true });
              }
              else if (value.type === 'MemberExpression') {
                  compile(value.object, state);
                  if (value.object.type === 'Super') {
                      state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
                  }
                  const prop = value.property;
                  if (value.computed) {
                      compile(prop, state);
                  }
                  else {
                      state.opCodes.push({ op: OP.LOADK, val: prop.name });
                  }
                  state.opCodes.push({ op: OP.MSET, val: value.object.type === 'Super' });
              }
              else {
                  compilePattern(value, state);
              }
          }
          else {
              compilePattern(param, state);
          }
      }
      if (node.body.type === 'BlockStatement') {
          const block = node.body;
          state.symbols.pushScope();
          hoist(block, state);
          for (let i = 0; i < block.body.length; i++) {
              compile(block.body[i], state);
              state.opCodes.push({ op: OP.GC });
          }
          state.symbols.popScope();
      }
      else {
          compile(node.body, state);
          state.opCodes.push({ op: OP.RET });
          state.opCodes.push({ op: OP.GC });
      }
      state.catchPcStack.pop();
      state.symbols.popScope();
      funCode.end = state.opCodes.length;
  }
  function compileClass(node, state) {
      const clsCode = { op: OP.CLS, val: node.id && node.id.name, constructor: false, inherit: false };
      const methodBody = node.body.body;
      for (let i = 0; i < methodBody.length; i++) {
          if (methodBody[i].kind === 'constructor') {
              compileFunc(methodBody[i].value, state);
              clsCode.constructor = true;
              break;
          }
      }
      if (node.superClass) {
          compile(node.superClass, state);
          clsCode.inherit = true;
      }
      state.opCodes.push(clsCode);
      const methodDefs = node.body.body;
      for (let i = 0; i < methodDefs.length; i++) {
          const met = methodDefs[i];
          if (met.kind === 'constructor')
              continue;
          compileFunc(met.value, state);
          const metKey = met.key;
          if (met.computed) {
              compile(metKey, state);
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: metKey.name });
          }
          state.opCodes.push({ op: OP.CMET, val: met.kind, static: met.static });
      }
  }
  function compilePattern(node, state) {
      switch (node.type) {
          case 'ObjectPattern':
              return ObjectPattern(node, state);
          case 'ArrayPattern':
              return ArrayPattern(node, state);
          case 'AssignmentPattern':
              return AssignmentPattern(node, state);
          default:
              throw new SyntaxError('Unexpected token');
      }
  }
  const idx = createSymbol('fi');
  const len = createSymbol('fil');
  const kovs = createSymbol('fikv');
  function compileForXStatement(node, state) {
      state.symbols.pushScope();
      const opCodes = state.opCodes;
      const symbols = state.symbols;
      opCodes.push({ op: OP.STORE, val: symbols.set(len, 'const').pointer, alloc: true });
      opCodes.push({ op: OP.STORE, val: symbols.set(kovs, 'const').pointer, alloc: true });
      opCodes.push({ op: OP.LOADK, val: 0 });
      opCodes.push({ op: OP.STORE, val: symbols.set(idx, 'let').pointer, alloc: true });
      const testPc = opCodes.length;
      opCodes.push({ op: OP.LOADV, val: symbols.get(idx).pointer });
      opCodes.push({ op: OP.LOADV, val: symbols.get(len).pointer });
      opCodes.push({ op: OP.BIOP, val: '<' });
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      opCodes.push(ifnotCode);
      opCodes.push({ op: OP.LOADV, val: symbols.get(kovs).pointer });
      opCodes.push({ op: OP.LOADV, val: symbols.get(idx).pointer });
      opCodes.push({ op: OP.COPY });
      opCodes.push({ op: OP.LOADK, val: 1 });
      opCodes.push({ op: OP.BIOP, val: '+' });
      opCodes.push({ op: OP.STORE, val: symbols.get(idx).pointer });
      opCodes.push({ op: OP.MGET });
      const left = node.left;
      if (left.type === 'Identifier') {
          const symbol = symbols.get(left.name);
          if (symbol.type === 'const') {
              throw new TypeError('Assignment to constant variable');
          }
          opCodes.push({ op: OP.STORE, val: symbol.pointer });
      }
      else if (left.type === 'VariableDeclaration') {
          state.symbols.type = left.kind;
          for (let i = 0; i < left.declarations.length; i++) {
              const declr = left.declarations[i];
              if (declr.id.type === 'Identifier') {
                  state.opCodes.push({ op: OP.STORE, val: state.symbols.set(declr.id.name).pointer, alloc: true });
              }
              else {
                  compilePattern(declr.id, state);
              }
          }
          state.symbols.type = null;
      }
      else if (left.type === 'MemberExpression') {
          compile(left.object, state);
          if (left.object.type === 'Super') {
              state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
          }
          const property = left.property;
          if (left.computed) {
              compile(property, state);
          }
          else {
              opCodes.push({ op: OP.LOADK, val: property.name });
          }
          state.opCodes.push({ op: OP.MSET, val: left.object.type === 'Super' });
      }
      else {
          compilePattern(left, state);
      }
      compile(node.body, state);
      opCodes.push({ op: OP.JMP, val: testPc });
      ifnotCode.val = opCodes.length;
      symbols.popScope();
  }
  function hoist(block, state, onlyBlock = false) {
      state.symbols.hoist = true;
      const funcDclrList = [];
      const funcDclrIdxs = [];
      for (let i = 0; i < block.body.length; i++) {
          const statement = block.body[i];
          if (statement.type === 'FunctionDeclaration') {
              state.symbols.set(statement.id.name, 'var');
              funcDclrList.push(statement);
              funcDclrIdxs.push(i);
          }
          else if (statement.type === 'VariableDeclaration'
              && ['const', 'let'].indexOf(statement.kind) !== -1) {
              hoistVarDclr(statement, state);
          }
          else if (!onlyBlock) {
              hoistVar(statement, state);
          }
      }
      if (funcDclrIdxs.length) {
          for (let i = funcDclrIdxs.length - 1; i > -1; i--) {
              block.body.splice(funcDclrIdxs[i], 1);
          }
          block.body = funcDclrList.concat(block.body);
      }
      state.symbols.hoist = false;
  }
  function hoistVar(statement, state) {
      switch (statement.type) {
          case 'VariableDeclaration':
              if (statement.kind === 'var') {
                  hoistVarDclr(statement, state);
              }
              break;
          case 'ForInStatement':
          case 'ForOfStatement':
              if (statement.left.type === 'VariableDeclaration') {
                  hoistVar(statement.left, state);
              }
          case 'ForStatement':
              if (statement.type === 'ForStatement' && statement.init.type === 'VariableDeclaration') {
                  hoistVar(statement.init, state);
              }
          case 'WhileStatement':
          case 'DoWhileStatement':
              hoistVar(statement.body, state);
              break;
          case 'IfStatement':
              hoistVar(statement.consequent, state);
              hoistVar(statement.alternate, state);
              break;
          case 'BlockStatement':
              for (let i = 0; i < statement.body.length; i++) {
                  hoistVar(statement.body[i], state);
              }
              break;
          case 'SwitchStatement':
              for (let i = 0; i < statement.cases.length; i++) {
                  for (let j = 0; j < statement.cases[i].consequent.length; j++) {
                      hoistVar(statement.cases[i].consequent[j], state);
                  }
              }
              break;
          case 'TryStatement': {
              const tryBlock = statement.block.body;
              for (let i = 0; i < tryBlock.length; i++) {
                  hoistVar(tryBlock[i], state);
              }
              const catchBlock = statement.handler && statement.handler.body.body;
              if (catchBlock) {
                  for (let i = 0; i < catchBlock.length; i++) {
                      hoistVar(catchBlock[i], state);
                  }
              }
              const finalBlock = statement.finalizer && statement.finalizer.body;
              if (finalBlock) {
                  for (let i = 0; i < finalBlock.length; i++) {
                      hoistVar(finalBlock[i], state);
                  }
              }
              break;
          }
      }
  }
  function hoistVarDclr(node, state) {
      state.symbols.type = node.kind;
      for (let i = 0; i < node.declarations.length; i++) {
          const declr = node.declarations[i];
          if (declr.id.type === 'Identifier') {
              state.symbols.set(declr.id.name);
          }
      }
      state.symbols.type = null;
  }

  function ExpressionStatement(node, state) {
      compile(node.expression, state);
  }
  function BlockStatement(node, state) {
      state.symbols.pushScope();
      hoist(node, state, true);
      for (let i = 0; i < node.body.length; i++) {
          compile(node.body[i], state);
          state.opCodes.push({ op: OP.GC });
      }
      state.symbols.popScope();
  }
  function EmptyStatement() { }
  function DebuggerStatement(node, state) {
      state.opCodes.push({ op: OP.DBG });
  }
  function ReturnStatement(node, state) {
      if (node.argument) {
          compile(node.argument, state);
      }
      else {
          state.opCodes.push({ op: OP.LOADK });
      }
      state.opCodes.push({ op: OP.RET });
  }
  function BreakStatement(node, state) {
      state.opCodes.push({ op: OP.JMP, val: node.label.name });
  }
  function ContinueStatement(node, state) {
      state.opCodes.push({ op: OP.JMP, val: node.label.name });
  }
  function IfStatement(node, state) {
      compile(node.test, state);
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      state.opCodes.push(ifnotCode);
      compile(node.consequent, state);
      const trueEndCode = { op: OP.JMP, val: -1 };
      state.opCodes.push(trueEndCode);
      ifnotCode.val = state.opCodes.length;
      compile(node.alternate, state);
      trueEndCode.val = state.opCodes.length;
  }
  function SwitchStatement(node, state) {
      compile(node.discriminant, state);
      const cases = node.cases;
      let jumpCode;
      for (let i = 0; i < cases.length; i++) {
          const eachCase = cases[i];
          compile(eachCase.test, state);
          const caseCode = { op: OP.CSNE, val: -1 };
          state.opCodes.push(caseCode);
          if (i !== 0) {
              jumpCode.val = state.opCodes.length;
          }
          for (let i = 0; i < eachCase.consequent.length; i++) {
              compile(eachCase.consequent[i], state);
          }
          if (i !== cases.length - 1) {
              jumpCode = { op: OP.JMP, val: -1 };
              state.opCodes.push(jumpCode);
          }
          caseCode.val = state.opCodes.length;
      }
  }
  function ThrowStatement(node, state) {
      compile(node.argument, state);
      const catchPcStack = state.catchPcStack;
      state.opCodes.push({ op: OP.THROW, val: catchPcStack[catchPcStack.length - 1] });
  }
  function TryStatement(node, state) {
      const catchPc = { pc: -1 };
      state.catchPcStack.push(catchPc);
      compile(node.block, state);
      const finallyCode = { op: OP.JMP, val: -1 };
      state.opCodes.push(finallyCode);
      catchPc.pc = state.opCodes.length;
      state.catchPcStack.pop();
      const param = node.handler.param;
      if (param) {
          if (param.type === 'Identifier') {
              state.opCodes.push({ op: OP.STORE, val: state.symbols.set(param.name, 'var').pointer, alloc: true });
          }
      }
      compile(node.handler.body, state);
      finallyCode.val = state.opCodes.length;
      if (node.finalizer) {
          compile(node.finalizer, state);
      }
  }
  function WhileStatement(node, state) {
      const testPc = state.opCodes.length;
      compile(node.test, state);
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      state.opCodes.push(ifnotCode);
      compile(node.body, state);
      state.opCodes.push({ op: OP.JMP, val: testPc });
      ifnotCode.val = state.opCodes.length;
  }
  function DoWhileStatement(node, state) {
      const bodyPc = state.opCodes.length;
      compile(node.body, state);
      compile(node.test, state);
      state.opCodes.push({ op: OP.IF, val: bodyPc });
  }
  function ForStatement(node, state) {
      compile(node.init, state);
      const testPc = state.opCodes.length;
      compile(node.test, state);
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      state.opCodes.push(ifnotCode);
      compile(node.body, state);
      compile(node.update, state);
      state.opCodes.push({ op: OP.JMP, val: testPc });
      ifnotCode.val = state.opCodes.length;
  }
  function ForInStatement(node, state) {
      compile(node.right, state);
      state.opCodes.push({ op: OP.KOVS, val: true });
      compileForXStatement(node, state);
  }
  function ForOfStatement(node, state) {
      compile(node.right, state);
      state.opCodes.push({ op: OP.KOVS, val: false });
      compileForXStatement(node, state);
  }

  var statement = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ExpressionStatement: ExpressionStatement,
    BlockStatement: BlockStatement,
    EmptyStatement: EmptyStatement,
    DebuggerStatement: DebuggerStatement,
    ReturnStatement: ReturnStatement,
    BreakStatement: BreakStatement,
    ContinueStatement: ContinueStatement,
    IfStatement: IfStatement,
    SwitchStatement: SwitchStatement,
    ThrowStatement: ThrowStatement,
    TryStatement: TryStatement,
    WhileStatement: WhileStatement,
    DoWhileStatement: DoWhileStatement,
    ForStatement: ForStatement,
    ForInStatement: ForInStatement,
    ForOfStatement: ForOfStatement
  });

  function ThisExpression(node, state) {
      state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer, this: true });
  }
  function ArrayExpression(node, state) {
      const spread = [];
      for (let i = 0; i < node.elements.length; i++) {
          const item = node.elements[i];
          if (item.type === 'SpreadElement') {
              compile(item.argument, state);
              spread.push(i);
          }
          else {
              compile(item, state);
          }
      }
      spread.push(node.elements.length);
      state.opCodes.push({ op: OP.ARR, val: spread });
  }
  function ObjectExpression(node, state) {
      const propKinds = [];
      for (let i = 0; i < node.properties.length; i++) {
          const property = node.properties[i];
          if (property.type === 'SpreadElement') {
              state.opCodes.push({ op: OP.LOADK });
              compile(property.argument, state);
              propKinds.push('sprd');
          }
          else {
              const propKey = property.key;
              if (property.computed) {
                  compile(propKey, state);
              }
              else {
                  state.opCodes.push({ op: OP.LOADK, val: propKey.name });
              }
              compile(property.value, state);
              propKinds.push(property.kind);
          }
      }
      state.opCodes.push({ op: OP.OBJ, val: propKinds });
  }
  function FunctionExpression(node, state) {
      if (node.id && node.id.name) {
          state.symbols.pushScope();
          const pointer = state.symbols.set(node.id.name, 'const').pointer;
          state.opCodes.push({ op: OP.LOADK });
          state.opCodes.push({ op: OP.STORE, val: pointer, alloc: true });
          compileFunc(node, state);
          state.opCodes.push({ op: OP.COPY });
          state.opCodes.push({ op: OP.STORE, val: pointer });
          state.symbols.popScope();
      }
      else {
          compileFunc(node, state);
      }
  }
  function UnaryExpression(node, state) {
      if (node.operator === 'delete') {
          if (node.argument.type === 'MemberExpression') {
              compile(node.argument.object, state);
              const property = node.argument.property;
              if (node.argument.computed) {
                  compile(property, state);
              }
              else {
                  state.opCodes.push({ op: OP.LOADK, val: property.name });
              }
          }
          else if (node.argument.type === 'Identifier') {
              throw new SyntaxError('Delete of an unqualified identifier');
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: {} });
              state.opCodes.push({ op: OP.LOADK, val: '#sval_fake_delete#' });
          }
      }
      else if (node.operator === 'typeof' && node.argument.type === 'Identifier') {
          try {
              state.opCodes.push({ op: OP.LOADV, val: state.symbols.get(node.argument.name).pointer });
          }
          catch (err) {
              state.opCodes.push({ op: OP.LOADK });
          }
      }
      else {
          compile(node.argument, state);
      }
      state.opCodes.push({ op: OP.UNOP, val: node.operator });
  }
  function UpdateExpression(node, state) {
      if (node.argument.type === 'Identifier') {
          const pointer = state.symbols.get(node.argument.name).pointer;
          state.opCodes.push({ op: OP.LOADV, val: pointer });
          if (!node.prefix) {
              state.opCodes.push({ op: OP.COPY });
          }
          state.opCodes.push({ op: OP.LOADK, val: 1 });
          state.opCodes.push({ op: OP.BIOP, val: node.operator[0] });
          if (node.prefix) {
              state.opCodes.push({ op: OP.COPY });
          }
          state.opCodes.push({ op: OP.STORE, val: pointer });
      }
      else if (node.argument.type === 'MemberExpression') {
          compile(node.argument, state);
          if (!node.prefix) {
              state.opCodes.push({ op: OP.COPY });
          }
          state.opCodes.push({ op: OP.LOADK, val: 1 });
          state.opCodes.push({ op: OP.BIOP, val: node.operator[0] });
          if (node.prefix) {
              state.opCodes.push({ op: OP.COPY });
          }
          compile(node.argument.object, state);
          const property = node.argument.property;
          if (node.argument.computed) {
              compile(property, state);
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: property.name });
          }
          state.opCodes.push({ op: OP.MSET });
      }
  }
  function BinaryExpression(node, state) {
      compile(node.left, state);
      compile(node.right, state);
      state.opCodes.push({ op: OP.BIOP, val: node.operator });
  }
  function AssignmentExpression(node, state) {
      if (node.left.type === 'Identifier') {
          const symbol = state.symbols.get(node.left.name);
          if (symbol.type === 'const') {
              throw new TypeError('Assignment to constant variable');
          }
          const binaryOp = node.operator.substring(0, node.operator.length - 1);
          if (binaryOp) {
              state.opCodes.push({ op: OP.LOADV, val: symbol.pointer });
              compile(node.right, state);
              state.opCodes.push({ op: OP.BIOP, val: binaryOp });
          }
          else {
              compile(node.right, state);
          }
          state.opCodes.push({ op: OP.COPY });
          state.opCodes.push({ op: OP.STORE, val: symbol.pointer });
      }
      else if (node.left.type === 'MemberExpression') {
          const binaryOp = node.operator.substring(0, node.operator.length - 1);
          if (binaryOp) {
              compile(node.left, state);
              compile(node.right, state);
              state.opCodes.push({ op: OP.BIOP, val: binaryOp });
          }
          else {
              compile(node.right, state);
          }
          state.opCodes.push({ op: OP.COPY });
          compile(node.left.object, state);
          const leftType = node.left.object.type;
          if (leftType === 'Super') {
              state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
          }
          const property = node.left.property;
          if (node.left.computed) {
              compile(property, state);
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: property.name });
          }
          state.opCodes.push({ op: OP.MSET, val: leftType === 'Super' });
      }
      else {
          compile(node.right, state);
          state.opCodes.push({ op: OP.COPY });
          compilePattern(node.left, state);
      }
  }
  function LogicalExpression(node, state) {
      compile(node.left, state);
      compile(node.right, state);
      state.opCodes.push({ op: OP.BIOP, val: node.operator });
  }
  function MemberExpression(node, state) {
      compile(node.object, state);
      if (node.object.type === 'Super') {
          state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
      }
      const property = node.property;
      if (node.computed) {
          compile(property, state);
      }
      else {
          state.opCodes.push({ op: OP.LOADK, val: property.name });
      }
      state.opCodes.push({ op: OP.MGET, val: node.object.type === 'Super' });
  }
  function ConditionalExpression(node, state) {
      compile(node.test, state);
      const ifnotCode = { op: OP.IFNOT, val: -1 };
      state.opCodes.push(ifnotCode);
      compile(node.consequent, state);
      const trueEndCode = { op: OP.JMP, val: -1 };
      state.opCodes.push(trueEndCode);
      ifnotCode.val = state.opCodes.length;
      compile(node.alternate, state);
      trueEndCode.val = state.opCodes.length;
  }
  function CallExpression(node, state) {
      const spread = [];
      for (let i = 0; i < node.arguments.length; i++) {
          const arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              compile(arg.argument, state);
              spread.push(i);
          }
          else {
              compile(arg, state);
          }
      }
      spread.push(node.arguments.length);
      const callee = node.callee;
      if (callee.type === 'MemberExpression') {
          if (callee.object.type === 'Super') {
              state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
              compile(callee.object, state);
          }
          else {
              compile(callee.object, state);
              state.opCodes.push({ op: OP.COPY });
          }
          const property = callee.property;
          if (callee.computed) {
              compile(property, state);
          }
          else {
              state.opCodes.push({ op: OP.LOADK, val: property.name });
          }
          state.opCodes.push({ op: OP.MGET });
      }
      else {
          state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
          compile(callee, state);
          if (callee.type === 'Super') {
              state.opCodes.push({ op: OP.LOADK, val: 'constructor' });
              state.opCodes.push({ op: OP.MGET });
          }
      }
      const catchPcStack = state.catchPcStack;
      state.opCodes.push({
          op: OP.CALL,
          val: spread,
          super: callee.type === 'Super',
          catch: catchPcStack[catchPcStack.length - 1]
      });
  }
  function NewExpression(node, state) {
      const spread = [];
      for (let i = 0; i < node.arguments.length; i++) {
          const arg = node.arguments[i];
          if (arg.type === 'SpreadElement') {
              compile(arg.argument, state);
              spread.push(i);
          }
          else {
              compile(arg, state);
          }
      }
      spread.push(node.arguments.length);
      compile(node.callee, state);
      const catchPcStack = state.catchPcStack;
      state.opCodes.push({
          op: OP.NEW,
          val: spread,
          catch: catchPcStack[catchPcStack.length - 1]
      });
  }
  function MetaProperty(node, state) {
      state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
      state.opCodes.push({ op: OP.LOADK, val: '__proto__' });
      state.opCodes.push({ op: OP.MGET });
      state.opCodes.push({ op: OP.LOADK, val: 'constructor' });
      state.opCodes.push({ op: OP.MGET });
  }
  function SequenceExpression(node, state) {
      for (let i = 0; i < node.expressions.length; i++) {
          compile(node.expressions[i], state);
      }
  }
  function ArrowFunctionExpression(node, state) {
      compileFunc(node, state);
  }
  function TemplateLiteral(node, state) {
      const quasis = node.quasis;
      const expressions = node.expressions;
      state.opCodes.push({ op: OP.LOADK, val: quasis.shift().value.raw });
      let expr;
      while (expr = expressions.shift()) {
          compile(expr, state);
          state.opCodes.push({ op: OP.BIOP, val: '+' });
          state.opCodes.push({ op: OP.LOADK, val: quasis.shift().value.raw });
          state.opCodes.push({ op: OP.BIOP, val: '+' });
      }
  }
  function TaggedTemplateExpression(node, state) {
  }
  function ClassExpression(node, state) {
      if (node.id && node.id.name) {
          state.symbols.pushScope();
          const pointer = state.symbols.set(node.id.name, 'const').pointer;
          state.opCodes.push({ op: OP.LOADK });
          state.opCodes.push({ op: OP.STORE, val: pointer, alloc: true });
          compileClass(node, state);
          state.opCodes.push({ op: OP.COPY });
          state.opCodes.push({ op: OP.STORE, val: pointer });
          state.symbols.popScope();
      }
      else {
          compileClass(node, state);
      }
  }
  function Super(node, state) {
      state.opCodes.push({ op: OP.LOADV, val: state.symbols.get('this').pointer });
      state.opCodes.push({ op: OP.LOADK, val: '__proto__' });
      state.opCodes.push({ op: OP.MGET });
      state.opCodes.push({ op: OP.LOADK, val: '__proto__' });
      state.opCodes.push({ op: OP.MGET });
  }
  function YieldExpression(node, state) {
      compile(node.argument, state);
      state.opCodes.push({ op: OP.YIELD, val: node.delegate });
  }
  function AwaitExpression(node, state) {
      compile(node.argument, state);
      state.opCodes.push({ op: OP.AWAIT });
  }

  var expression = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ThisExpression: ThisExpression,
    ArrayExpression: ArrayExpression,
    ObjectExpression: ObjectExpression,
    FunctionExpression: FunctionExpression,
    UnaryExpression: UnaryExpression,
    UpdateExpression: UpdateExpression,
    BinaryExpression: BinaryExpression,
    AssignmentExpression: AssignmentExpression,
    LogicalExpression: LogicalExpression,
    MemberExpression: MemberExpression,
    ConditionalExpression: ConditionalExpression,
    CallExpression: CallExpression,
    NewExpression: NewExpression,
    MetaProperty: MetaProperty,
    SequenceExpression: SequenceExpression,
    ArrowFunctionExpression: ArrowFunctionExpression,
    TemplateLiteral: TemplateLiteral,
    TaggedTemplateExpression: TaggedTemplateExpression,
    ClassExpression: ClassExpression,
    Super: Super,
    YieldExpression: YieldExpression,
    AwaitExpression: AwaitExpression
  });

  function VariableDeclaration(node, state) {
      state.symbols.type = node.kind;
      for (let i = 0; i < node.declarations.length; i++) {
          const declr = node.declarations[i];
          if (declr.init) {
              compile(declr.init, state);
          }
          else if (node.kind === 'var') {
              continue;
          }
          else {
              state.opCodes.push({ op: OP.LOADK });
          }
          if (declr.id.type === 'Identifier') {
              state.opCodes.push({ op: OP.STORE, val: state.symbols.set(declr.id.name).pointer, alloc: true });
          }
          else {
              compilePattern(declr.id, state);
          }
      }
      state.symbols.type = null;
  }
  function FunctionDeclaration(node, state) {
      compileFunc(node, state);
      state.opCodes.push({ op: OP.STORE, val: state.symbols.set(node.id.name, 'var').pointer, alloc: true });
  }
  function ClassDeclaration(node, state) {
      const pointer = state.symbols.set(node.id.name, 'var').pointer;
      state.opCodes.push({ op: OP.LOADK });
      state.opCodes.push({ op: OP.STORE, val: pointer, alloc: true });
      compileClass(node, state);
      state.opCodes.push({ op: OP.STORE, val: pointer });
  }

  var declaration = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VariableDeclaration: VariableDeclaration,
    FunctionDeclaration: FunctionDeclaration,
    ClassDeclaration: ClassDeclaration
  });

  const handlers = Object.assign({}, literal, identifier, program, statement, expression, declaration);
  function compile(node, state) {
      if (!node)
          return;
      const handler = handlers[node.type];
      if (handler) {
          handler(node, state);
      }
      else {
          throw new Error(`${node.type} isn't implemented`);
      }
  }

  class Sval {
      constructor(options = {}) {
          this.options = {};
          this.state = new State();
          this.exports = {};
          let { ecmaVer = 9, sandBox = true, stepLimit = null } = options;
          if (stepLimit != null) {
              this.state = new RateLimitedState(stepLimit);
          }
          ecmaVer -= ecmaVer < 2015 ? 0 : 2009;
          if ([3, 5, 6, 7, 8, 9, 10].indexOf(ecmaVer) === -1) {
              throw new Error(`unsupported ecmaVer`);
          }
          this.options.ecmaVersion = ecmaVer;
          if (sandBox) {
              const win = createSandBox();
              if (win.window !== win) {
                  win.window = win;
              }
              this.import('this', win);
              this.import(win);
          }
          else {
              if (globalObj.window !== globalObj) {
                  globalObj.window = globalObj;
              }
              this.import('this', globalObj);
              this.import(globalObj);
          }
          this.import('exports', this.exports);
      }
      import(nameOrModules, mod) {
          if (typeof nameOrModules === 'string') {
              nameOrModules = { [nameOrModules]: mod };
          }
          if (typeof nameOrModules !== 'object')
              return;
          const names = getOwnNames(nameOrModules);
          for (let i = 0; i < names.length; i++) {
              const name = names[i];
              const pointer = this.state.symbols.set(name, 'var').pointer;
              this.state.context[pointer] = { store: nameOrModules[name] };
          }
      }
      run(code) {
          const ast = acorn.parse(code, this.options);
          hoist(ast, this.state);
          compile(ast, this.state);
          execute(this.state);
      }
      runAST(ast) {
          hoist(ast, this.state);
          compile(ast, this.state);
          execute(this.state);
      }
  }
  Sval.version = version;

  return Sval;

})));
