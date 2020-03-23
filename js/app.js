const router = new VueRouter(
    {
        base: "/",
        routes: [{
            path: "/list_person",
            component: ListPerson
        },
        {
            path: "/list_programing",
            component: ListProgramming
        },
        {
            path: "*",
            component: PageNotFound
        },
        ]
    }
)

const app = new Vue({
    router,
    el: '#app',
    mounted() {
        console.log(this.$route)
    }
})