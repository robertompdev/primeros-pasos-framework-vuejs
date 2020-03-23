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
    data: {
        message: 'Hello Vue',
        sum: 3 + 6,
        value: 5,
        isVisible: false,
        personas: ['Andres', 'Juan', 'Pepe'],
        content_html: "<h1>Esto es un renderizado de Vue de contenido HTML en su data</h1>",
        src: "https://jpg2pdf.com/images/jpg2pdf/logo.svg",
        text: "texto alternativo",
        title: "título desde el data",
        numero: 14,
        perror: true
    },
    methods: {
        filterPeople: function () {
            this.personas = this.personas.filter(person => {

                person.length
            })
        }
    },
    mounted() {
        console.log(this.$route)
    }
})