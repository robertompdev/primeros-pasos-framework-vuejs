Vue.component('img-post', {
    template: '<img :src="imgPost()" :alt="title" :title="title" />',
    props: {
        url: String,
    },
    data: function () {
        return {
            title: "Título de la imagen"
        }

    },
    methods: {
        imgPost() {
            if (this.url != "") {
                return this.url;
            }
            return "http://www.thebristolarms.com.au/wp-content/uploads/2018/03/img-not-found-300x221.png"
        }
    }
})