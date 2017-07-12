define(function (require, exports, module) {

    // 加载配置信息
	var res = require('./resource')
    // 加载资源
    var loadRes = require('./load_res')
	// 运行游戏
	var game = require('./game')

    loadRes(res, function (imgs) {
        game.run(imgs)
    })
})