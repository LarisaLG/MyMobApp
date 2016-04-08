angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.home'
      2) Using $state.go programatically:
        $state.go('tabsController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page2
      /page1/tab4/page2
  */
  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab4': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('contacts', {
    url: '/page3',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('timetable', {
    url: '/page9',
    templateUrl: 'templates/timetable.html',
    controller: 'timetableCtrl'
  })

  .state('lectionsSubjects', {
    url: '/page7',
    templateUrl: 'templates/lectionsSubjects.html',
    controller: 'lectionsSubjectsCtrl'
  })

  .state('lecturers', {
    url: '/page10',
    templateUrl: 'templates/lecturers.html',
    controller: 'lecturersCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profile'
      2) Using $state.go programatically:
        $state.go('tabsController.profile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page4
      /page1/tab5/page4
      /page1/tab6/page4
  */
  .state('tabsController.profile', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab5': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab6': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.login'
      2) Using $state.go programatically:
        $state.go('tabsController.login');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page6
      /page1/tab4/page6
  */
  .state('tabsController.login', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      },
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab4/page2')

  

});