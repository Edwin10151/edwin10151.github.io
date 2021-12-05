'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86c097c268fbaf4a17978ee113922b81",
".git/config": "9cc72935ea68ad5a7ec3be1baf5b952d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cbfefd660acda4c3a12c64926ce77811",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "29aeecdf08bc1fbe9be2368d34e578db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c695eca4947d2e2c0cbc020bb9084b1d",
".git/logs/refs/heads/main": "2b84521e9842d9c4b142a306bf91825d",
".git/logs/refs/remotes/origin/main": "a0d761b8ff26611fcc2231944efbd1d7",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/04/9274c2a1887ad9bfba46d276fe8ba7def9dbd7": "f7181104dac2245751cc4056fa20152e",
".git/objects/06/9829406d4dc35a30169dc0f17e7f10d96f3fdb": "3076b10ca137fd0ebf4952d6cc354130",
".git/objects/09/26e2a44baecb8f814305273ae9f107d4d38fd6": "e5860ee32d6cbc0155df5c452a215eff",
".git/objects/09/8154fd0ecd8da0d5e649dc4d0ea8c820a3731f": "19f10726057701c53c469fef4935d118",
".git/objects/09/981ef67cb1e49849797b23479da079ba9b9b1c": "8b7149586c45051d67268078c932436b",
".git/objects/0b/63e8c55cb234e32306a77bbb2ae04c674e0656": "98dc234f207dbb49519de084364eefa0",
".git/objects/0d/b3980203ef6d0bf02f0b99e719510845d4e911": "d56deffde808977bffa4d4da06662146",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/10/3d0bfa7624119d6938fc348ddb63f0faa42000": "862b75aa3eedfa55b52417f6b7ec8924",
".git/objects/10/4f3c008d990fab67bfa5511a6ecf8e1216632c": "2c6638e24758be6f58fa48495229b3cb",
".git/objects/11/c96de132708d182b1833de55336d32d6cdf408": "dd62e70a55aec7ff7ad3220ca2c7da00",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/16/4a7bf2d2e7cac031ccff6ebf3187ee0b779690": "eb218977e27d7a5b4bf909975055b79e",
".git/objects/17/1d0a3d8b9314bc159847fa0cce9a570d122e92": "3fd7bbb32e67d11ee95f5e526e81bba9",
".git/objects/17/336e5c1f5f1b2e0e8475ecaca9bc82ef3f33a0": "1f40aa7824d97db38b23331a3ba1d1a3",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/1a/05ecbde0d828916f95e7a16c99011eab8ddbae": "6139017d43668220afa0f25217dded09",
".git/objects/1a/086011dd767cbe56e11fead520ad0d2f48de24": "0ca9eaab1c02182c8940d4e233e08edb",
".git/objects/1b/2c8d5702bb8fe214dd960f887c776e55dfca95": "001545287d8529d2341a68c5f8549202",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/12427449db3d9c1768b1f6b40b8a83a8026ff5": "fbde337144af122c2960f387c28b5c54",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/21/4ba1b004d874802481d4c5b0431219326212f2": "5f67921c8a8ae6012f2def31b6e79f04",
".git/objects/21/625aae8fb431b99f6bc0f995f6f8378451ce9f": "35742be488325f43555b3bffb7ccb484",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/28/00ef4ab06197b2b31a1571ea689378efd6355b": "f4ffe6b0e47cdf5fc07c6ab41e7ea0e2",
".git/objects/28/0b577eb67a8ea962f1eaacab546d3634a70056": "eeb322fa30e67dce365be39c5f56090c",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/ceab935558c6e76c5b7d51bb7c5567eb062bf3": "e91aab9244b6d550794953f95cce652a",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/1933e89acde1d657809b5aa88b3f5cc9252816": "e720ff16d0b654dce3927315ee117629",
".git/objects/31/054dda9da8cd5fcb6b8709c37227ec75c9066b": "11e4e61103b6dab77c907666b46bebb4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/35/0ce9b1ce49b833fbdf83dd9941aca5cc9b212b": "3025eba57d0df36a1e906c1a99e316c7",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/3b/914e1c646be7ad428f438ad170ed7adf9fed76": "871802560d823a0423659c0c0dadd380",
".git/objects/3b/e7ac85e3a2b5cd11d26df467b781b3865d3e34": "6aac4223dd44002af5ca262d08f8b1cb",
".git/objects/3c/99f0373a3ba5154c9a0ea299effe2daf3adefc": "718c814557e029d9e3505ce4aa45678d",
".git/objects/3f/4246826353c94f0bb73628b0ce014c55600f54": "acbec3b08bf4c13b1e75073d8c7ed556",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/40/0a3ba674fb45cb827a99e865c45f8ff6fec861": "6620a2e7c77a009db627efee05764ecc",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/40/fe44d6954d8730d968f3b8635215f9add55633": "e01ef87009a8e603e4fe3c628f0594a4",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/3c4221ca2d0edf38526296b0169bbf4fb4123d": "d0d71b8295cba71ac8d2f82cb2f462e7",
".git/objects/43/d71fd13b1ef0fa374e7700b74ceda771eced6b": "bef2ab44b72e38f34bc0525406b6b651",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/57ba6179ebde2cc89d07dccc33e0114d156abc": "a14685bb82d480dec2fef57ce9c6a0ec",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/51/67edba71208f61783e0ce83ccf83501bbaecc7": "64b818d3c979bcd30c6d8b1d86766a45",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/54/5219b188473b311fb90c43ba0835104fc18f42": "4e2ef516abbe17e10eba913920e0a781",
".git/objects/56/47b24ac6a9e7ac8874009efcc213586a7b16d2": "5d8c60435d8c608617ea0ecac043a8af",
".git/objects/57/6ebeddbce05556c0f47f1df0288711f652bf94": "203a3ad1cb778c5395e90aeb680bf715",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/58/c522e047973b60bbfc2bd990bf8de9000b9e77": "a8cb081418f433b209ec3fea3ba787f7",
".git/objects/5b/84d2391105993d1c742b339bc0de8883658b9e": "96dc1dcd775b6ab24c5850c99447d8db",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5f/3d362613ff6a1da942a1f12aa047637a17ac2f": "29bcc68076888424b44c41efc16fff22",
".git/objects/5f/7d956a4e0ef2881a7139aa97e857c7952dc430": "7ca3247af4259041ea53469457c25d1d",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/63/42e23a7f6788041bbaeeaec9d5fcc8cbb10715": "cf321cac963d39d79b8e4b28fc6397da",
".git/objects/64/8047b3b6ffff371007149f90d16daeb78ee826": "a97e4db48e299a330083e0c64bf40b42",
".git/objects/67/02e410d9db9b0b3382f4f23887c478632d5804": "c84dc451beded93e47ea59cf7daef244",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/c27493f4ae96575c744bd3d0c8ce1994b5411c": "726ab04add2def18eee81555ad8d76f2",
".git/objects/6b/acc35edb08530d3f0a5caeed20c38937610351": "daabbcce9c17f829d6e730826cea31b0",
".git/objects/6b/c895eb5a70ad9dedeadd45d41132fe2c05ce76": "92a7cf46c3b10497d0355f253c39c91f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6f/d64ee41839fb628351dacd86860039900bb75e": "f6cdc41f9b09a6fc723aa0116bc70b24",
".git/objects/70/fd7e66eb34d06494671c975d856f4ff701a776": "425fab619502df72d78d7c38081a8310",
".git/objects/71/05dd40d4c4f1525caaaa2a7e25f09058224986": "4b0bb44a8a234c7919787bb575b5a2e0",
".git/objects/74/84d6ffbee8a9039d2fd562d85ef99a544dbd15": "5f290fb3206ee6645e3d657a672898fc",
".git/objects/75/0c77ae5a4997a2ce9bbb7a430b337b9cbb988b": "cbe8b426ef3ce57b96e694a989412d79",
".git/objects/76/82a679505f75b3bae829dfaa5071776976aa20": "f0bc2bc52a80272b218f7e7db48706cf",
".git/objects/77/35e9d5f193d4caa9758b303f0d1d03e7a56aec": "c28c2b6a06c51cea94569de822752f04",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7b/2e07173c7a0db02242acaad6d09c5245fecc28": "f1f4ed45b1bd2b8aa242aca21b0144a9",
".git/objects/7d/f404ebd26802435cf7ffda6d4c51adff84ec34": "19ad7b7ebbd0256341bd15f23ac94950",
".git/objects/7e/8f7d6ab4aa26baf73369ef4742d987cf2addd5": "1f7b280777163b4d10fed1c45037174d",
".git/objects/80/7f35daf27eab41e3930faa174b30a2d967f267": "028d6b64d9adfbb17ee7292b40d51572",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/86/4b73980abfb27e96441d7c7d7fe798adc0a89e": "ede54410ee6ec3d113f28e0b1387d357",
".git/objects/86/5848491b99667b54a61e7fabeb3bd59d4ac2de": "8d29238e1bfbba0db7712742a9b1802f",
".git/objects/88/66f09cc4c397c56a263a23832afa2c4131d872": "f65bc692aa47abb8180861d02277d8d6",
".git/objects/88/7f00c8a67590acf4d90ecafb4039611dfafd5e": "39195929bc48012a7ec52bc0f2e41300",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8d/22cfc3a653b4a5851606ba47ba178f6b9d11fa": "e09f5d5bb3546fe99d448978b8aa5c48",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/11b767db203cbf3feab8aace7441eb7b5c5430": "a7d9a945a464aa613d0d728f95acb444",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/dd307a214e9a2ec81d09c1006e6741e58449f1": "28c3f2389e041be5201a5aa90f653e54",
".git/objects/97/57e21529172020e22b23eb4cd7754a199311d9": "fae7e07f7e3860ec906e1606a9c39051",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/98cfdd45f21677d05bfb1dafa55ad28011b7f1": "0f3297b4c1297359b2692227d297955c",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9f/20c17ce2ee9b97cd8f9a2be7b4fbce20958f9c": "ae2c012c4620b6082ff24e509669629c",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/a1/2e980327d32c2f003fe06093067936dbfa4f8e": "e6aa911005951e1ea7912e5d09a71dba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8ebcd8ab68b7ab14363f9c33bafcb86c624021": "659a0f628fb092070e46fe138c761e84",
".git/objects/a2/a2cc3a1a1116d520108c12f9f9887de6e8c0b9": "cce1337a39c592c29939dd99befbbd88",
".git/objects/a3/803043d78a83cf5780f28835e9fdb694fc3d2a": "de22149003b83abf6d06f6ad00d258da",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a5/0a7e94f86f1d6c15f1299a77fe32dc5ced7831": "03591813edbfad9b3ed81fda496250d8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/af/21d5e807cd9c79c8961fed4cf3d4023ee616c9": "f150dabcbd176af062fbc568269c18f1",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b5/89ab012ddada0f14d38675d0e92a36477c4b36": "76026e6f23018fb3d14e4cc618f5c043",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/be/fa1caf35e2593ef36d028cf49dc076c824adfb": "7702b2b27e1d232a25458555809b4a61",
".git/objects/c0/3748a13b454261c57c9ac218449587c2767d04": "8bf6e644e1a3c83fcd59bce2d6c43bd9",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/9c2d79c32d65e7f9be4bc685cfdf49568f337d": "76484f7e21992b33fa7be895ed45d6d3",
".git/objects/c3/78f452402f763420990f0456c3cd8bac31814d": "180b28e2e5fb4f3390ef4bdeb63a97a8",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/c6/96985efd65bac4978b24129b0f07ff70d8bbb3": "6abac98224ae1d768fa70735ce484b1e",
".git/objects/c7/1edc78e931ee76ca0f4f803956294299cfca18": "14f4dc4c9f61a6d1b236a0a5ffe4bc55",
".git/objects/c7/2ca68299c673517590767567902807b526ad77": "e120953052910f5a54f646d0373851c0",
".git/objects/c8/ce0bf57643e70fa79e8237ed7635d37bb336dc": "2cf2af0c6c85270eb52ab49849dfba8c",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/937c4a4828c10f8e649af7c36fa47aac6c3fdc": "4a061a1fecf0216c9aaa8c6a9ed5f09b",
".git/objects/ce/04b0da7b206a55ccdd9dc9030d0e4543b714a5": "1a2011a95812715c34a66665b304125f",
".git/objects/cf/80726f46bab504e454a01945f1503f58dc381d": "a5e0d19cfea02e55b9c0726bd5093467",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d0/151252f15ab485f24dfb6e77376d7af9623d89": "54db37173793f156a541c02e1ec7a3c0",
".git/objects/d4/074434f26cfa6ba34f81af7620c1f27052b906": "b957e415ccbc33b248cb55c87f4aa46d",
".git/objects/d5/67d79a13e7bbab6b7cfc96d47557d51388c4d5": "b47ff33bf93f6a851831dd844097fdbc",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d9/29cbc638ca660b25dcfcf9f3784fdfad387730": "472ee6df67cc56f34173d839613dfee5",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/e0/3dd0c16537d763ae09f7274df03be87a487b86": "5c03ffd6054ad98c78241bc0e35631ec",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e1/f9ee95ca081d34358a627e1fe5646c7548b279": "32fd414d571ebdb79c48be4ab9459509",
".git/objects/e4/855e4126ed4b27c3aa79d2774fdd8024d1fb2a": "6a34622ce52b3a9d274947a3684d1ace",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/00a90c3e28dbc628ad1c421f26daa252b4f4be": "3b2c8cd9356d9e465bfe0c4bc0672804",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/0071054e927f13e9f40082856eab9494a54685": "ecdff495434e67d116c95e9e7dd9b329",
".git/objects/ed/504ac7fd18be650de7707d491a3c4ce0820855": "5edd2fe9f4b8fdfbfbe80fcc307bf85b",
".git/objects/f0/b220b6f9c3f9eb9f733ae10be035c28b70fda5": "f2effea688909cced6410c41df1f5741",
".git/objects/f1/b0571f5de78d675ef68660315ec6fee6ccf21e": "3a9f8b68f780716fb3be115811743f5c",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/fb/e7f1276d0765945a5bb49fc981cf52b4a97347": "6af69a85d71b7e571c5561fb93c10c6b",
".git/objects/pack/pack-2fa2d74438935f92c3a910e051f1b4f6c4c4ee37.idx": "fda6b86ab8b356137fea6bc3fefea856",
".git/objects/pack/pack-2fa2d74438935f92c3a910e051f1b4f6c4c4ee37.pack": "cd500cb988740d05f76068fe95e8064c",
".git/ORIG_HEAD": "2d063d73746a6832eaccd7152f3e4f0a",
".git/refs/heads/main": "a71ac1fbbfbe37fe1daa2ed98d20cf5e",
".git/refs/remotes/origin/main": "a2c2082b2e59f4ab641a59f05663d99e",
"assets/AssetManifest.json": "5e6caa12f3dbf1ac1e6e2b033f1be31f",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/mob.png": "b73399d02fceb26b510b6abe92894d80",
"assets/assets/new_pic/background2.jpg": "c60c5b3e23f6f4bdde8c7e4be7ee777e",
"assets/assets/new_pic/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/new_pic/mainpic.png": "b15614808c9ba2978dd54ffd02d9b287",
"assets/assets/new_pic/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/new_pic/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/new_pic/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/new_pic/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/new_pic/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/brain%2520(2).png": "3245932f788e5641de9633bca46e6b43",
"assets/assets/projects/brain.png": "6a41d829a11d68e51acd9066768365ce",
"assets/assets/projects/brain2.png": "3245932f788e5641de9633bca46e6b43",
"assets/assets/projects/Change_Maker.png": "81f2d1a5a27407ac53c9f181797c75cf",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/projects/jackal_logo_big.png": "9336907a13027054584b181228d130ef",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/laptop.png": "11618d385c911cdbfc02c6a516a24972",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/think.jpg": "58c40e1dd11225a730180476b0b0ed1d",
"assets/assets/second_main.png": "39cc9056d4bee9a6155db9a9efe5f394",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "97f0348a3eaca9990080154a72777909",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "61b493df9635f221d909421e8769acb0",
"icons/Icon-192.png": "002516a4b23f153b7ac2928347c377b1",
"icons/Icon-512.png": "84780d2dfe97536ad1b68213079cc78b",
"index.html": "e9b267d0b86a8af44f3d6b4df2a85909",
"/": "e9b267d0b86a8af44f3d6b4df2a85909",
"main.dart.js": "223cd4410aedfe12cc1688f483269667",
"manifest.json": "54ea90e6bbffcd94da1e4130d4a51fb1",
"README.md": "bf2ca1b3cc0eb22ba7e6af9eead58c5a",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
