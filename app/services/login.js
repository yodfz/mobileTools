sysAdminAppServices.service('login', function($rootScope,$http){
    this.login=function(_p){
        return $http.post(window.URL.login,_p);
    };
    this.loginOut=function(){
        return $http.post(window.URL.loginout);
    }
});
