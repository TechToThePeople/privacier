
(function(angular, $, _){
  // Your module
  angular.module('privacier', []);

  // the hack
  angular.module('crmMailing').config(function($provide){

    // crmMailingBlockTracking directive
    $provide.decorator('crmMailingBlockTrackingDirective', function($delegate){
        var directive = $delegate[0];

        // Original link function
        var link = directive.link;

        // compile function, returns new link function
        directive.compile = function(){
            return function(scope, element, attrs){
                // get old link functionality
                link.apply(this, arguments);

                // new functionality here
                scope.$parent.$watch(attrs.crmMailing, function(){
                    console.log(scope.mailing);
                    if (scope.mailing.created_date != scope.mailing.modified_date) {
                        if (scope.mailing.url_tracking == '1' || scope.mailing.open_tracking == '1')
                            CRM.alert ('you can change it in the Tracking tab','Tracking is enabled','warning');

                    } else {
                        scope.mailing.url_tracking = '0';
                        scope.mailing.open_tracking = '0';
                        CRM.alert('','Tracking Disabled','info');
                    }
                }); 
            };
        };

        return $delegate;
    });
  });
})(angular, CRM.$, CRM._);

