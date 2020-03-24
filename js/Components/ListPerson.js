const ListPerson = {
    name: 'ListPerson',
    template: `
        <div> 
            <list-alert></list-alert>
            <ul>
                <li v-for="(person, index) in people">
                    {{ index + 1}} - {{ person }}
                    <span v-if="index==people.length - 1">Este es el último elemento</span>
                </li>
            </ul>

            <ul>
                <li v-for="(person, index) in arrayObjects">
                    {{ index + 1}} - {{ person.name }} - {{ person.age }}
                    
                </li>
            </ul>
            <input v-model="filtro_edad" type="text">
            <button class="btn btn-primary" v-on:click="filterPeopleObjects">Filtrar objeto por edad</button>
        </div>`,
    data: function () {
        return {
            people: ['Andrés', 'Nelson', 'Sergio', 'Alejandro', 'Manuel', 'Arnoldo', 'Armando'],
            arrayObjects: [
                { name: "Andrés", surname: "Vera", age: 28 },
                { name: "Pablo", surname: "Ros", age: 28 },
                { name: "Sergio", surname: "Marrero", age: 5 },
                { name: "David", surname: "Veral", age: 10 }
            ]
        }
    },
    filterPeopleObjects: function () {
        this.arrayObjects = this.arrayObjects.filter(
            elm => {
                return elm.age > 20
            }
        )
    }
}