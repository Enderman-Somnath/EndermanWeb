function _0x474e(_0x44e8aa,_0xea898e){const _0x20366b=_0x2036();return _0x474e=function(_0x474e69,_0x144279){_0x474e69=_0x474e69-0x14d;let _0x3afb2c=_0x20366b[_0x474e69];return _0x3afb2c;},_0x474e(_0x44e8aa,_0xea898e);}const _0x1fad35=_0x474e;(function(_0x241eea,_0xbbc099){const _0x42d3e3=_0x474e,_0x915a9d=_0x241eea();while(!![]){try{const _0xb52791=parseInt(_0x42d3e3(0x18a))/0x1+-parseInt(_0x42d3e3(0x178))/0x2*(parseInt(_0x42d3e3(0x173))/0x3)+parseInt(_0x42d3e3(0x189))/0x4*(-parseInt(_0x42d3e3(0x14e))/0x5)+parseInt(_0x42d3e3(0x182))/0x6+parseInt(_0x42d3e3(0x150))/0x7*(parseInt(_0x42d3e3(0x15d))/0x8)+-parseInt(_0x42d3e3(0x16b))/0x9+parseInt(_0x42d3e3(0x156))/0xa;if(_0xb52791===_0xbbc099)break;else _0x915a9d['push'](_0x915a9d['shift']());}catch(_0x49fd14){_0x915a9d['push'](_0x915a9d['shift']());}}}(_0x2036,0xa577b),localStorage[_0x1fad35(0x161)](_0x1fad35(0x162),'/EndermanWeb/ClassicChat/'),firebase[_0x1fad35(0x187)]()[_0x1fad35(0x16e)](_0xf06d9a=>{const _0x4044d8=_0x1fad35;_0xf06d9a?usersnamecchat=_0xf06d9a['displayName']:(localStorage[_0x4044d8(0x18e)](_0x4044d8(0x167)),window[_0x4044d8(0x183)]='/EndermanWeb/UserAccount/SignIn/');}),IsUserPresent=localStorage['getItem'](_0x1fad35(0x167)));IsUserPresent===null&&(window[_0x1fad35(0x15e)](_0x1fad35(0x14d)),window[_0x1fad35(0x183)]=_0x1fad35(0x15a));function validateInput(_0xe3655c){var _0x5a85b4=/^[a-zA-Z0-9@\-!]+$/;return _0x5a85b4['test'](_0xe3655c);}function checkRoomExists(_0x596413){const _0x5cb0ed=_0x1fad35;return firebase['database']()[_0x5cb0ed(0x168)](_0x5cb0ed(0x158)+_0x596413)[_0x5cb0ed(0x165)](_0x5cb0ed(0x18d))['then'](_0x16b28f=>{const _0x1d2dfb=_0x5cb0ed;return _0x16b28f[_0x1d2dfb(0x17e)]();});}function _0x2036(){const _0x16c1d6=['topnav_mobile','1925610ReMeIA','EnterChatID','/ClassicChat/','UsernameCCHAT','/EndermanWeb/UserAccount/SignIn/','getElementById','mobile_nav\x20hidden','1521928eQmKee','alert','log','child','setItem','WhereIsUser','addEventListener','documentElement','once','topnav','UserPresent','ref','database','get','3074625WiUWev','keyup','keyCode','onAuthStateChanged','onclick','true','Loading\x20room\x20with\x20ChatID:\x20','resize','3xkLZPF','topnav\x20desktop','mobile_nav','innerHTML','Join\x20Room','1653478jnKLll','Use\x20valid\x20symbols\x20like\x20\x27a-z\x27,\x27A-Z\x27,\x27-\x27,\x27+\x27,\x27!\x27,\x271-9\x27','margin-top:\x2095px;','hidden','then','update','exists','inputChatID','Created\x20By\x20ClassicChat','margin-top:\x2010px;','6449904RjpvaH','location','className','innerWidth','mobile_nav_button','auth','search','4KOBCZs','950682TGmsea','Joining\x20Room','RoomID','value','removeItem','style','link','CLASSICCHAT','Sign\x20in\x20to\x20use\x20ClassicChat','2811745BIiqrX','Creating\x20Room','7hQBvDk','clientWidth','#inputChatID','/EndermanWeb/ClassicChat/ClassicChatHome/','Enter\x20Room/Create\x20Room(if\x20new)'];_0x2036=function(){return _0x16c1d6;};return _0x2036();}function addUser(){const _0x166edb=_0x1fad35;RoomID=document[_0x166edb(0x15b)](_0x166edb(0x17f))['value'],checkRoomExists(RoomID)[_0x166edb(0x17c)](_0x54d835=>{const _0x5375c5=_0x166edb;_0x54d835?validateInput(RoomID)?(document['getElementById'](_0x5375c5(0x157))['innerHTML']=_0x5375c5(0x18b),document[_0x5375c5(0x15b)](_0x5375c5(0x157))[_0x5375c5(0x16f)]=null,console[_0x5375c5(0x15f)](_0x5375c5(0x171),RoomID),setTimeout(function(){const _0xe8070f=_0x5375c5;localStorage[_0xe8070f(0x161)]('RoomID',RoomID),localStorage['setItem'](_0xe8070f(0x159),usersnamecchat),window[_0xe8070f(0x183)]=_0xe8070f(0x153);},0x384)):alert('Use\x20valid\x20symbols\x20like\x20\x27a-z\x27,\x27A-Z\x27,\x27-\x27,\x27+\x27,\x27!\x27,\x271-9\x27'):validateInput(RoomID)?(document['getElementById']('EnterChatID')['innerHTML']=_0x5375c5(0x14f),document[_0x5375c5(0x15b)](_0x5375c5(0x157))[_0x5375c5(0x16f)]=null,console[_0x5375c5(0x15f)]('Creating/Loading\x20room\x20with\x20ChatID:\x20',RoomID),firebase[_0x5375c5(0x169)]()[_0x5375c5(0x168)]('/ClassicChat/')[_0x5375c5(0x160)](RoomID)[_0x5375c5(0x17d)]({'Room(CHATID)':_0x5375c5(0x180),'CREATEDBYUSER':usersnamecchat}),setTimeout(function(){const _0x8ab22d=_0x5375c5;localStorage['setItem'](_0x8ab22d(0x18c),RoomID),localStorage[_0x8ab22d(0x161)](_0x8ab22d(0x159),usersnamecchat),window[_0x8ab22d(0x183)]=_0x8ab22d(0x153);},0x384)):alert(_0x5375c5(0x179));});}$(_0x1fad35(0x152))[_0x1fad35(0x16c)](function(_0x2437ea){_0x2437ea['keyCode']===0xd&&addUser();});const myKeysValues=window[_0x1fad35(0x183)][_0x1fad35(0x188)],urlParams=new URLSearchParams(myKeysValues),chatid=urlParams[_0x1fad35(0x16a)]('id');console['log'](chatid);const islinktrue=urlParams[_0x1fad35(0x16a)](_0x1fad35(0x190));console[_0x1fad35(0x15f)](islinktrue);islinktrue===_0x1fad35(0x170)&&checkRoomExists(chatid)[_0x1fad35(0x17c)](_0x1e2648=>{const _0x28f660=_0x1fad35;_0x1e2648?validateInput(chatid)?(document[_0x28f660(0x15b)](_0x28f660(0x157))[_0x28f660(0x176)]=_0x28f660(0x18b),document[_0x28f660(0x15b)]('EnterChatID')[_0x28f660(0x16f)]=null,console[_0x28f660(0x15f)]('Loading\x20room\x20with\x20ChatID:\x20',chatid),setTimeout(function(){const _0x32e636=_0x28f660;localStorage[_0x32e636(0x161)](_0x32e636(0x18c),chatid),localStorage[_0x32e636(0x161)]('UsernameCCHAT',usersnamecchat),window[_0x32e636(0x183)]=_0x32e636(0x153);},0x384)):alert(_0x28f660(0x179)):validateInput(chatid)?(document['getElementById'](_0x28f660(0x157))[_0x28f660(0x176)]=_0x28f660(0x14f),document[_0x28f660(0x15b)](_0x28f660(0x157))['onclick']=null,console[_0x28f660(0x15f)]('Creating/Loading\x20room\x20with\x20ChatID:\x20',chatid),firebase[_0x28f660(0x169)]()['ref'](_0x28f660(0x158))[_0x28f660(0x160)](chatid)[_0x28f660(0x17d)]({'Room(CHATID)':_0x28f660(0x180),'CREATEDBYUSER':usersnamecchat}),setTimeout(function(){const _0x402144=_0x28f660;localStorage[_0x402144(0x161)](_0x402144(0x18c),chatid),localStorage[_0x402144(0x161)](_0x402144(0x159),usersnamecchat),window[_0x402144(0x183)]=_0x402144(0x153);},0x384)):alert(_0x28f660(0x179));});function checkforexistingroomoninput(_0xefe685){const _0x3d9b32=_0x1fad35,_0xea2e1b=document[_0x3d9b32(0x15b)](_0x3d9b32(0x157));_0xea2e1b[_0x3d9b32(0x176)]='...';if(_0xefe685[_0x3d9b32(0x16d)]===0xd)return;validateInput(document[_0x3d9b32(0x15b)]('inputChatID')[_0x3d9b32(0x18d)])?checkRoomExists(document[_0x3d9b32(0x15b)](_0x3d9b32(0x17f))[_0x3d9b32(0x18d)])[_0x3d9b32(0x17c)](_0x115cee=>{const _0x33fbd1=_0x3d9b32;_0x115cee?(_0xea2e1b[_0x33fbd1(0x176)]=_0x33fbd1(0x177),console[_0x33fbd1(0x15f)](document[_0x33fbd1(0x15b)](_0x33fbd1(0x17f))[_0x33fbd1(0x18d)])):_0xea2e1b['innerHTML']='Create\x20Room';}):document[_0x3d9b32(0x15b)](_0x3d9b32(0x17f))[_0x3d9b32(0x18d)]==''&&(_0xea2e1b[_0x3d9b32(0x176)]=_0x3d9b32(0x154));}var w=document[_0x1fad35(0x164)][_0x1fad35(0x151)]||window[_0x1fad35(0x185)];w<=0x2fd?(document[_0x1fad35(0x15b)](_0x1fad35(0x166))[_0x1fad35(0x184)]='hidden',document[_0x1fad35(0x15b)](_0x1fad35(0x186))[_0x1fad35(0x184)]='mobile_nav_button',document[_0x1fad35(0x15b)]('CLASSICCHAT')['style']='margin-top:\x2010px;'):(document[_0x1fad35(0x15b)](_0x1fad35(0x166))[_0x1fad35(0x184)]=_0x1fad35(0x174),document[_0x1fad35(0x15b)]('CLASSICCHAT')[_0x1fad35(0x18f)]=_0x1fad35(0x17a));mobilenav=![];function showorhidemobilenav(){const _0x2ab342=_0x1fad35;if(mobilenav==![])document[_0x2ab342(0x15b)](_0x2ab342(0x155))[_0x2ab342(0x184)]=_0x2ab342(0x175),mobilenav=!![];else mobilenav==!![]&&(document[_0x2ab342(0x15b)]('topnav_mobile')[_0x2ab342(0x184)]=_0x2ab342(0x15c),mobilenav=![]);}window[_0x1fad35(0x163)](_0x1fad35(0x172),function(){const _0x16a159=_0x1fad35,_0x37986e=document[_0x16a159(0x164)][_0x16a159(0x151)]||window[_0x16a159(0x185)];_0x37986e<=0x2fd?(document[_0x16a159(0x15b)](_0x16a159(0x166))['className']=_0x16a159(0x17b),document[_0x16a159(0x15b)]('mobile_nav_button')[_0x16a159(0x184)]='mobile_nav_button',document[_0x16a159(0x15b)](_0x16a159(0x191))[_0x16a159(0x18f)]=_0x16a159(0x181)):(document[_0x16a159(0x15b)](_0x16a159(0x166))['className']='topnav\x20desktop',document[_0x16a159(0x15b)]('mobile_nav_button')[_0x16a159(0x184)]=_0x16a159(0x17b),document['getElementById'](_0x16a159(0x191))[_0x16a159(0x18f)]=_0x16a159(0x17a));});