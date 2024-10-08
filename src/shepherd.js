import Shepherd from 'shepherd.js';

const shepherdKey = '$shepherd';
// create and export composition API's composable function.
const useShepherd = (...args) => new Shepherd.Tour(...args);

const install = function installVueShepherd(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.prototype[shepherdKey] = useShepherd
};

const Vue2Shepherd = { install };

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(plugin)

// Default export is library as a whole, registered via Vue.use()
export default Vue2Shepherd;