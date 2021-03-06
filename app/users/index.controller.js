(function () {
    'use strict';

    angular
        .module('app')
        .controller('Users.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.users = null;

        initController();

        function initController() {
            // getting the current user
            UserService.GetAll().then(function (users) {
                vm.users = users;
            });
        }
    }
})();