import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import router from './router'


library.add(faPhone);
createApp(App).use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('EasyDataTable', Vue3EasyDataTable)
  .mount("#app");