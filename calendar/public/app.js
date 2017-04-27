/**
 * Created by sim_one_n_only on 4/15/17.
 */
var app = angular.module("bookingApp", ["ngRoute", "ngMaterial", "materialCalendar"]);



app.config(function($mdIconProvider, $$mdSvgRegistry) {
        // Add default icons from angular material
        $mdIconProvider
            .icon('md-close', $$mdSvgRegistry.mdClose)
            .icon('md-menu', $$mdSvgRegistry.mdMenu)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
    }
);

app.controller('mainCntrl', ['$scope', function ($scope, scheduleService, $filter, MaterialCalendarData) {
    
}])