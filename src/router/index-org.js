import Vue from 'vue'
import Router from 'vue-router'

//import about from "'../components/'+'About'"
//var path = "'../components/'+'About'";
/*
var about = null
var path = "../components/About";
require([path], function (about_obj){
	about = about_obj
});

*/
//
//let about = null
async function load_about(){
//	about = await import('../components/About');

//	return about
}
load_about();
// assets/${params.id}.
var path = "../components"
//import about from '../components/About'
import about from '${path}/About'
import top from '../components/Top'
import show from '../components/show'
import page from '../components/page'

Vue.use(Router)
//
export default new Router({
	/* mode: 'history', */
	routes: [
		{ path: '/', component: top },
		{ path: '/show/:id', component: show },
		{ path: '/pages/:id', component: page },
		{ path: '/about', component: about },

	] 
})


//

