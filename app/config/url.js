/**
 * 此文件放置所有远程接口的URL服务地址
 */
(function(_){
    var $list={};
    var $isDev=false;
    //var $host="http://localhost:8082/";//"http://bos.mdscjtest.com";
    //$serviceURL.shoppoolPoolshopList= $isDev?"开发地址":"真实地址";
    var $hostKey= _.location.host.replace("www.","");
    var $hostDic={
        "localhost:8082":"http://localhost:8082/",
        "localhost:8080":"http://localhost:8080/",
        "mdscjtest.com:8888":"http://bos.mdscjtest.com:8888/",
        "mdscjtest.com":"http://bos.mdscjtest.com/",
        "mdscj.com":"http://bos.mdscj.com/",
        "bos.mdscj.com":"http://bos.mdscj.com/",
        "bos.mdscjtest.com":"http://bos.mdscjtest.com/"
    };
    var $host = $hostDic[$hostKey]||"http://bos.mdscjtest.com/";
    $list.$host=$host;
    //店铺池
    // 列表
    $list.shoppoolpoolshoplist      = $isDev ? "/webapp/Web.src/Mock/shoppoollist.json" : $host + "/shoppool/list.html";
    //审核通过（其实是待开始状态）
    //POST接口
    $list.shoppoolshoppass          = $isDev ? "" : $host + "/shoppool/pass.html";


    //添加修改店铺库
    $list.shopdepotsave             = $isDev ? "" : $host + "/shop/depot/save";

    //登陆接口
    $list.login                     = $isDev ? "/Mock/login.json" : $host + "/user/login";
    $list.loginOut                     = $isDev ? "/Mock/login.json" : $host + "/user/loginOut";

    //保存店铺或者商品至收藏夹
    //提交三个参数
    //id    店铺或者商品的ID
    //favId 收藏夹ID
    //type  类型
    //tagsId 标签ID字符串 如:   1,2,3,4,5,6,7   这样就提交了7个TAG标签ID
    $list.favoritesSave                   = $isDev ? "/webapp/Web.src/Mock/productfavdelete.json" : $host + "";

    //保存商品收藏夹
    $list.productFavoriteSave            = $isDev ? "/webapp/Web.src/Mock/productfavoritedelete.json" : $host + "/productfavorite/save";
    //获取商品收藏夹列表
    $list.productFavoriteList            = $isDev ? "/webapp/Web.src/Mock/productfavoritesave.json" : $host + "/product/productfavoriteList.html";
    //根据收藏夹ID获取里面商品所使用的标签
    $list.productFavoriteTagList         = $isDev ? "/webapp/Web.src/Mock/productfavoritetaglist1.json" : $host + "/tag/loadTagByFavId.html";
    //保存收藏夹TAG
    $list.productFavoriteTagSave         = $isDev ? "/webapp/Web.src/Mock/productfavtagsave.json" : $host + "";
    //获取推荐标签
    $list.productFavoriteRobotTagList         = $isDev ? "/webapp/Web.src/Mock/productfavoritetaglist.json" : $host + "/tag/loadTagByFavId.html";
    //获取收藏夹下面的商品列表
    $list.productFavoriteShopList        = $isDev ? "/webapp/Web.src/Mock/productfavoriteshoplist.json" : $host + "/product/productListInFav.html";
    //删除收藏夹下面的商品
    $list.productFavoriteShopDelete        = $isDev ? "/webapp/Web.src/Mock/productfavoritedelete.json" : $host + "/product/removeProductFromFav.html";
    //移动收藏夹
    $list.productFavoriteMove            = $isDev ? "/webapp/Web.src/Mock/productfavoritemove.json" : $host + "/productfavorite/save";
    //删除收藏夹
    //POST接口
    $list.productFavoriteDelete          = $isDev ? "/webapp/Web.src/Mock/productfavoritedelete.json" : $host + "/productfavorite/delete";
    //删除标签接口
    $list.tagDelete                 = $isDev ? "" : $host + "/tag/delete";
    $list.tagSave                   = $isDev ?"":$host +"/tag/queryAndSave.html";

    //文章接口
    $list.articleList               = $isDev?"/webapp/Web.src/Mock/articleList.json":$host+"/article/list";
    $list.articleListByNav          = $isDev?"/webapp/Web.src/Mock/articleList.json":$host+"/article/list/bynav";
    //推荐文章到首页
    $list.articleSubmitHome             = $isDev?"/webapp/Web.src/Mock/productfavoritedelete.json":$host + "/article/submit/home";
    //推荐到某个分类下面
    $list.articleSubmit            = $isDev?"/webapp/Web.src/Mock/productfavoritedelete.json":$host + "/article/submit";
    $list.articleSave               = $isDev?"":$host +"/article/save.html";
    $list.articleEdit               = $isDev?"":$host +"/article/save.html";
    $list.articleDelete             = $isDev?"":$host +"/article/delete.html";

    //导航列表
    $list.navList                   =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/nav/list";
    $list.navUp                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/nav/sort/up";
    $list.navDown                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/nav/sort/down";
    $list.navDelete                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/nav/delete";
    $list.navHide                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/nav/save";

    //分类
    $list.categoryList            =$isDev?"/webapp/Web.src/Mock/navlist.json":$host +"/category/list";
    $list.categoryUp                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/category/sort/up";
    $list.categoryDown                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/category/sort/down";
    $list.categoryDelete                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/category/delete";
    $list.categoryHide                     =$isDev?"/webapp/Web.src/Mock/navlist.json":$host + "/category/List";
    $list.categoryPoolList            =$isDev?"/webapp/Web.src/Mock/navlist.json":$host +"/categorypool/list";
    //商品库
    $list.productdepotList          =$isDev?"":$host + "/productdepot/list";

    //商品
    $list.productList          =$isDev?"/webapp/Web.src/Mock/productfavoriteshoplist.json":$host + "/product/list";
    $list.productInfo               = $isDev?"":$host +"/product/info";

    //店铺
    $list.shopList              = $isDev?"/webapp/Web.src/Mock/productfavoriteshoplist.json":$host +"/shop/list";
    $list.shopInfo               = $isDev?"":$host +"/shop/info";

    //店铺同步
    $list.shopsync              = $isDev?"":$host + "/shoppool/sync_exception";

    //上传图片接口
    $list.uploadfile                = $isDev ?"/webapp/Web.src/Mock/uploadImg.json":$host +"/image/upload.html";

    //用于登陆成功之后跳转的管理页面
    $list.htmlMain                  = $isDev ? "" : $host + "/main";
    $list.htmlLogin                     = $isDev ? "" : $host + "/main";

    /**
     * 图片加载失败显示的图片路径
     * @type {string}
     */
    $list.imageErrorSrc             ="";

    $list.imageDefault              ="";

    _.URL=$list;
}(this));