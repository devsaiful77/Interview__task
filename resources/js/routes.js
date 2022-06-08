let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let logout = require('./components/auth/logout.vue').default;

// End Authentication
let home = require('./components/home.vue').default;
// partner router
let createpartner = require('./components/partner/create.vue').default;
let listpartner = require('./components/partner/index.vue').default;
let editpartner = require('./components/partner/edit.vue').default;

export const routes = [
    {
        path: '/',
        component: login,
        name: '/'
    },
    {
        path: '/register',
        component: register,
        name: 'register'
    },
    {
        path: '/logout',
        component: logout,
        name: 'logout'
    },
    {
        path: '/home',
        component: home,
        name: 'home'
    },
    // ====== partner ========
    {
        path: '/create-partner',
        component: createpartner,
        name: 'create-partner'
    },
    {
        path: '/list-partner',
        component: listpartner,
        name: 'list-partner'
    },
    {
        path: '/edit-partner/:id',
        component: editpartner,
        name: 'edit-partner'
    }

]
