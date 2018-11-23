import ErrorPage from './ErrorPage';

ErrorPage.install = function install(Vue) {
  Vue.component(ErrorPage.name, ErrorPage);
};

export default ErrorPage;
