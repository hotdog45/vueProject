import TabBar from "./TabBar";

const components = [];

const install = function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export { install, TabBar };
