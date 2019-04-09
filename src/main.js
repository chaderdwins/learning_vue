import Vue from 'vue'; //weppack will look into the node modules directory
import App from './App' //indicates same folder, look for the file

//create a new vue instance, similar to making an object
new Vue({
    // render: function(createElement) {
    //     return createElement(App);
    // }
    //same as above, just refactored
    render: h => h(App) //tell instance what we want to do, an instance of App

}).$mount('#app');


