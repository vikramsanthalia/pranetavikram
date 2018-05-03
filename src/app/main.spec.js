import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
  }));
});
