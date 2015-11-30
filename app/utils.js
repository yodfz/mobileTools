sysadminApp.factory("HttpIntercepor", function ($q) {
    return {
        'response': function (response) {
            var $message = {
                "error": "服务端出现异常状态,请检查网络日志!",
                "401": "用户登录失效",
                "402": "参数错误",
                "404": "请求路径不存在"
            };

            var $codeCallback = {
                "401": function () {
                    //这里需要将位置重新定位到
                    window.location.href = serviceURL.htmlLogin;
                }
            };

            if(response.status==401){
               $codeCallback["401"]();
            }

            if(typeof response.data=="object"){
                var $data=response.data;
                if($data.errorCode!=200){
                    UI.message.alertDanger($data.error + ":" + $data.moreInfo);
                }
            }

            return response;
        }
    };
});

sysadminApp.factory("admin",function($q){
    var $user={};
    return {
        'set':function(_){
            $user=_;
        },
        'get':function(){
            return $user;
        }
    }
});

