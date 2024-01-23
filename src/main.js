import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


library.add(faPhone);
//createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component('EasyDataTable', Vue3EasyDataTable)
  .mount("#app");