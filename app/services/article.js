sysAdminAppServices.service('article', function($rootScope,$http){
    this.list=function(_p){
        return $http.post(window.URL.articleList,_p);
    };
    this.listByNav=function(_p){
        return $http.post(window.URL.articleListByNav,_p);
    };
    this.submitHome=function(_p){
        return $http.post(window.URL.articleSubmitHome,_p);
    };
    this.submit=function(_p){
        return $http.post(window.URL.articleSubmit,_p);
    };
    this.save=function(_p){
        return $http.post(window.URL.articleSave,_p);
    };
    this.edit=function(_p){
        return $http.post(window.URL.articleEdit,_p);
    };
    this.delete=function(_p){
        return $http.post(window.URL.articleDelete,_p);
    };

});
