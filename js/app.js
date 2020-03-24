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
        arrayObjects: [
            { name: "Andrés", surname: "Vera", age: 28 },
            { name: "Pablo", surname: "Ros", age: 28 },
            { name: "Sergio", surname: "Marrero", age: 5 },
            { name: "David", surname: "Veral", age: 10 }
        ],
        content_html: "<h1>Esto es un renderizado de Vue de contenido HTML en su data</h1>",
        src: "https://jpg2pdf.com/images/jpg2pdf/logo.svg",
        text: "texto alternativo",
        title: "título desde el data",
        numero: 14,
        perror: true,
        img_pixa: "https://kbnmedia.com/wp-content/uploads/2019/03/LOS-COLORES-DE-LA-LUNA-II-800x390.jpg"
    },
    methods: {
        filterPeople: function () {
            this.personas = this.personas.filter(person => {

                person.length
            })
        },
        filterPeopleObjects: function () {
            this.arrayObjects = this.arrayObjects.filter(
                elm => {
                    return elm.age > 20
                }
            )
        }
    },
    mounted() {
        console.log(this.$route)
    }
})