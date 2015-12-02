function uiRoutes($stateProvider, $urlRouterProvider) {
    // for any unmatched url, show 404 page
    //$urlRouterProvider.otherwise('/');
    $stateProvider
    //.state('/', {
    //    url: '/',
    //    views:{
    //        "":{
    //            templateUrl: '/app/views/home/login.html',
    //            controller: 'loginCtrl'
    //        }
    //    }
    //})
    //.state('baseTemplate', {
    //    url: '',
    //    templateUrl: '/app/views/home/home.html',
    //    controller:'homeCtrl'
    //})
        .state('home', {
            url: '',
            views: {
                "content": {
                    templateUrl: './app/views/home/defaultcontent.html'
                }
            }
        })
        .state('mdscjarticleForNav', {
            url: '/mdscj/articleForNav',
            views: {
                "content": {
                    templateUrl: './app/views/mdscj/articleForNav.html'
                }
            }
        })
        .state('groupData', {
            url: '/mdscj/groupData',

            views: {
                "content": {
                    templateUrl: './app/views/mdscj/groupData.html',
                    controller:'mdscjgroupDataCtrl'
                }
            }
        })
        .state('createUrl', {
            url: '/createUrl',

            views: {
                "content": {
                    templateUrl: './app/views/createUrl.html',
                    controller:'createUrlCtrl'
                }
            }
        });


    //.state('case-studies', {
    //    url: '/case-studies',
    //    templateUrl: '/app/partials/case_studies/index.html',
    //    controller: 'CaseStudiesCtrl'
    //})
    //.state('oregon', {
    //    url: '/case-studies/oregon',
    //    templateUrl: '/app/partials/case_studies/oregon.html',
    //    controller: 'GridironCtrl'
    //})
    //.state('ubisoft', {
    //    url: '/case-studies/ubisoft',
    //    templateUrl: '/app/partials/case_studies/ubisoft.html',
    //    controller: 'UbisoftCtrl'
    //})
    //.state('rossi', {
    //    url: '/case-studies/rossi',
    //    templateUrl: '/app/partials/case_studies/rossi.html',
    //    controller: 'RossiCtrl'
    //})
    //.state('publik', {
    //    url: '/case-studies/publik',
    //    templateUrl: '/app/partials/case_studies/publik.html',
    //    controller: 'PublikCtrl'
    //})
    //.state('peligroso', {
    //    url: '/case-studies/peligroso',
    //    templateUrl: '/app/partials/case_studies/peligroso.html',
    //    controller: 'PeliCtrl'
    //})
    //.state('work', {
    //    url: '/work',
    //    templateUrl: '/app/partials/work/index.html',
    //    controller: 'WorkCtrl'
    //})
    //.state('work.filter', {
    //    url: '/:id/:filter',
    //    templateUrl: '/app/partials/work/index.filter.html',
    //    controller: 'WorkFilteredCtrl'
    //})
    //.state('project', {
    //    url: '/project/:id/:client/:slug',
    //    templateUrl: '/app/partials/work/project.html',
    //    controller: 'ProjectCtrl'
    //})
    //.state('about-us', {
    //    url: '/about-us',
    //    templateUrl: '/app/partials/about_us/index.html',
    //    controller: 'AboutUsCtrl'
    //})
    //.state('capabilities', {
    //    url: '/capabilities',
    //    templateUrl: '/app/partials/capabilities/index.html',
    //    controller: 'CapabilitiesCtrl'
    //})
    //.state('connect', {
    //    url: '/connect',
    //    templateUrl: '/app/partials/connect/index.html',
    //    controller: 'ConnectCtrl'
    //})
    //.state('shop', {
    //    url: '/shop',
    //    templateUrl: '/app/partials/shop/index.html',
    //    controller: 'ShopCtrl'
    //})
    //.state('product', {
    //    url: '/shop/product/:productId',
    //    templateUrl: '/app/partials/shop/index.html',
    //    controller: 'ShopCtrl'
    //})
    //.state('404Page', {
    //    url: '*path',
    //    templateUrl: '/app/partials/404/index.html',
    //    controller: '404Ctrl'
    //})
}