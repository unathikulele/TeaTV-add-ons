var _0x43bd=['libs','movieInfo','settings','searchDetail','mark','prev','httpRequest','cheerio','year','season','episode','type','SEARCH','state','detailUrl','abrupt','apply','getHostFromDetail','wrap','NOT_FOUND','sent','each','href','toLowerCase','indexOf','trailer','Salamdl','embed','end','stop','function','cryptoJs','MD5','title','aloha','toString','checker','return','hosts','expired','emit','testing','length','enumerable','value','writable','key','prototype','done','next','throw','Cannot\x20call\x20a\x20class\x20as\x20a\x20function','https://salamdl.info/','Firefox\x2059','match'];(function(_0x12ee9f,_0x5b1013){var _0x3d5252=function(_0x46bd31){while(--_0x46bd31){_0x12ee9f['push'](_0x12ee9f['shift']());}};_0x3d5252(++_0x5b1013);}(_0x43bd,0x174));var _0x52e4=function(_0x2bf504,_0x27629c){_0x2bf504=_0x2bf504-0x0;var _0x87a84e=_0x43bd[_0x2bf504];return _0x87a84e;};var _createClass=function(){function _0x4e4044(_0x15af67,_0x26db21){for(var _0x44a20c=0x0;_0x44a20c<_0x26db21[_0x52e4('0x0')];_0x44a20c++){var _0x219534=_0x26db21[_0x44a20c];_0x219534[_0x52e4('0x1')]=_0x219534[_0x52e4('0x1')]||![];_0x219534['configurable']=!![];if(_0x52e4('0x2')in _0x219534)_0x219534[_0x52e4('0x3')]=!![];Object['defineProperty'](_0x15af67,_0x219534[_0x52e4('0x4')],_0x219534);}}return function(_0x3116fb,_0x18c8a3,_0x35b5fe){if(_0x18c8a3)_0x4e4044(_0x3116fb[_0x52e4('0x5')],_0x18c8a3);if(_0x35b5fe)_0x4e4044(_0x3116fb,_0x35b5fe);return _0x3116fb;};}();function _asyncToGenerator(_0x1e400a){return function(){var _0x341672=_0x1e400a['apply'](this,arguments);return new Promise(function(_0x245143,_0x41c652){function _0x581f22(_0xb0c872,_0x2cb37a){try{var _0x19a27e=_0x341672[_0xb0c872](_0x2cb37a);var _0x385f00=_0x19a27e[_0x52e4('0x2')];}catch(_0x23999f){_0x41c652(_0x23999f);return;}if(_0x19a27e[_0x52e4('0x6')]){_0x245143(_0x385f00);}else{return Promise['resolve'](_0x385f00)['then'](function(_0x2b4e94){_0x581f22(_0x52e4('0x7'),_0x2b4e94);},function(_0x24b5bb){_0x581f22(_0x52e4('0x8'),_0x24b5bb);});}}return _0x581f22(_0x52e4('0x7'));});};}function _classCallCheck(_0x1a5310,_0x2202ce){if(!(_0x1a5310 instanceof _0x2202ce)){throw new TypeError(_0x52e4('0x9'));}}var URL={'DOMAIN':'https://salamdl.info/','SEARCH':function SEARCH(_0x2eeacc,_0x565d97){return _0x52e4('0xa')+_0x2eeacc+'-'+_0x565d97+'/';},'HEADERS':function HEADERS(_0x37f297){return{'User-Agent':_0x52e4('0xb'),'Referer':_0x37f297};}};var getDomain=function getDomain(_0x291317){var _0x1e1415=_0x291317[_0x52e4('0xc')](/\/\/([^\/]+)/);if(_0x1e1415==null)return'xyzzyx.com';return _0x1e1415[0x1]!=undefined?_0x1e1415[0x1]:'xyzzyx.com';};var Salamdl=function(){function _0x2536c8(_0x5e6f90){_classCallCheck(this,_0x2536c8);this['libs']=_0x5e6f90[_0x52e4('0xd')];this[_0x52e4('0xe')]=_0x5e6f90['movieInfo'];this[_0x52e4('0xf')]=_0x5e6f90['settings'];this['state']={};}_createClass(_0x2536c8,[{'key':_0x52e4('0x10'),'value':function(){var _0x327b1f=_asyncToGenerator(regeneratorRuntime[_0x52e4('0x11')](function _callee(){var _0x1a8568,_0x460924,_0x1c278a,_0x5d40ae,_0x32a09a,_0x46ee4b,_0x204507,_0x285437,_0x563799,_0x13bc35,_0x475351,_0x472195;return regeneratorRuntime['wrap'](function _callee$(_0x39df42){while(0x1){switch(_0x39df42[_0x52e4('0x12')]=_0x39df42[_0x52e4('0x7')]){case 0x0:_0x1a8568=this[_0x52e4('0xd')],_0x460924=_0x1a8568[_0x52e4('0x13')],_0x1c278a=_0x1a8568[_0x52e4('0x14')],_0x5d40ae=_0x1a8568['stringHelper'],_0x32a09a=_0x1a8568['qs'];_0x46ee4b=this[_0x52e4('0xe')],_0x204507=_0x46ee4b['title'],_0x285437=_0x46ee4b[_0x52e4('0x15')],_0x563799=_0x46ee4b[_0x52e4('0x16')],_0x13bc35=_0x46ee4b[_0x52e4('0x17')],_0x475351=_0x46ee4b[_0x52e4('0x18')];if(!(_0x475351=='tv')){_0x39df42[_0x52e4('0x7')]=0x4;break;}throw new Error('NOT_FOUND');case 0x4:_0x472195=URL[_0x52e4('0x19')](_0x5d40ae['convertToSearchQueryString'](_0x204507),_0x285437);this[_0x52e4('0x1a')][_0x52e4('0x1b')]=_0x472195;return _0x39df42[_0x52e4('0x1c')]('return');case 0x7:case'end':return _0x39df42['stop']();}}},_callee,this);}));function _0x3573be(){return _0x327b1f[_0x52e4('0x1d')](this,arguments);}return _0x3573be;}()},{'key':_0x52e4('0x1e'),'value':function(){var _0x2b874d=_asyncToGenerator(regeneratorRuntime[_0x52e4('0x11')](function _callee2(){var _0x1ca460,_0x538841,_0x481c74,_0xfa8f15,_0x5524af,_0x553671,_0x3eb566,_0x29fac5,_0x1e9fa4;return regeneratorRuntime[_0x52e4('0x1f')](function _callee2$(_0x510841){while(0x1){switch(_0x510841[_0x52e4('0x12')]=_0x510841[_0x52e4('0x7')]){case 0x0:_0x1ca460=this['libs'],_0x538841=_0x1ca460['httpRequest'],_0x481c74=_0x1ca460['cheerio'],_0xfa8f15=_0x1ca460['qs'];if(this[_0x52e4('0x1a')][_0x52e4('0x1b')]){_0x510841['next']=0x3;break;}throw new Error(_0x52e4('0x20'));case 0x3:_0x5524af=this['movieInfo'][_0x52e4('0x18')];_0x553671=this[_0x52e4('0x1a')][_0x52e4('0x1b')];_0x510841['next']=0x7;return _0x538841['getHTML'](_0x553671);case 0x7:_0x3eb566=_0x510841[_0x52e4('0x21')];_0x29fac5=_0x481c74['load'](_0x3eb566);_0x1e9fa4=[];_0x29fac5('#linkbox\x20li\x20a')[_0x52e4('0x22')](function(){var _0xe328b1=_0x29fac5(this)['attr'](_0x52e4('0x23'));if(_0xe328b1[_0x52e4('0x24')]()[_0x52e4('0x25')](_0x52e4('0x26'))==-0x1&&_0xe328b1[_0x52e4('0xc')](/\.(mkv|mp4)$/))_0x1e9fa4['push']({'provider':{'url':_0x553671,'name':_0x52e4('0x27')},'result':{'file':_0xe328b1,'label':_0x52e4('0x28'),'type':_0x52e4('0x28')}});});this[_0x52e4('0x1a')]['hosts']=_0x1e9fa4;case 0xc:case _0x52e4('0x29'):return _0x510841[_0x52e4('0x2a')]();}}},_callee2,this);}));function _0x3eb04f(){return _0x2b874d[_0x52e4('0x1d')](this,arguments);}return _0x3eb04f;}()}]);return _0x2536c8;}();thisSource[_0x52e4('0x2b')]=function(){var _0x1035dc=_asyncToGenerator(regeneratorRuntime['mark'](function _callee3(_0x183a68,_0x3be298,_0x8a1be0){var _0x2ea47f,_0x2e04cd,_0x298fc2,_0x14d638;return regeneratorRuntime[_0x52e4('0x1f')](function _callee3$(_0x1234e1){while(0x1){switch(_0x1234e1[_0x52e4('0x12')]=_0x1234e1[_0x52e4('0x7')]){case 0x0:_0x2ea47f=_0x183a68[_0x52e4('0x13')];_0x2e04cd=new Salamdl({'libs':_0x183a68,'movieInfo':_0x3be298,'settings':_0x8a1be0});if(_0x3be298[_0x52e4('0x18')]=='movie'){_0x3be298['season']=0x0;_0x3be298[_0x52e4('0x17')]=0x0;}_0x298fc2={'name_source':_0x52e4('0x27'),'is_link':0x0,'type':_0x3be298['type'],'season':_0x3be298['season'],'episode':_0x3be298[_0x52e4('0x17')],'title':_0x3be298['title'],'year':_0x3be298['year'],'hash':_0x183a68[_0x52e4('0x2c')][_0x52e4('0x2d')](_0x3be298[_0x52e4('0x2e')]['toLowerCase']()+_0x3be298[_0x52e4('0x16')]['toString']()+_0x52e4('0x2f')+_0x3be298['episode']['toString']())[_0x52e4('0x30')]()};_0x14d638=[];if(_0x3be298[_0x52e4('0x31')]!=undefined)_0x14d638=[];if(!(_0x14d638[_0x52e4('0x0')]==0x0)){_0x1234e1[_0x52e4('0x7')]=0xf;break;}_0x1234e1['next']=0x9;return _0x2e04cd[_0x52e4('0x10')]();case 0x9:_0x1234e1[_0x52e4('0x7')]=0xb;return _0x2e04cd[_0x52e4('0x1e')]();case 0xb:_0x14d638=_0x2e04cd[_0x52e4('0x1a')]['hosts'];if(!(_0x3be298['checker']!=undefined)){_0x1234e1[_0x52e4('0x7')]=0xe;break;}return _0x1234e1['abrupt'](_0x52e4('0x32'),_0x14d638);case 0xe:if(_0x14d638['length']>0x0){_0x298fc2[_0x52e4('0x33')]=JSON['stringify'](_0x14d638);_0x298fc2[_0x52e4('0x34')]=0xe10;}case 0xf:if(_0x3be298['ss']!=undefined){_0x3be298['ss']['to'](_0x3be298['cs']['id'])[_0x52e4('0x35')](_0x3be298['c'],_0x14d638);}return _0x1234e1['abrupt'](_0x52e4('0x32'),_0x14d638);case 0x11:case _0x52e4('0x29'):return _0x1234e1[_0x52e4('0x2a')]();}}},_callee3,undefined);}));return function(_0xb70a51,_0x4c6837,_0x2458cb){return _0x1035dc[_0x52e4('0x1d')](this,arguments);};}();thisSource[_0x52e4('0x36')]=Salamdl;