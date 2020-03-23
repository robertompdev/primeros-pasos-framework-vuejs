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
        </div>`,
    data: function () {
        return {
            people: ['Andrés', 'Nelson', 'Sergio', 'Alejandro', 'Manuel', 'Arnoldo', 'Armando']
        }
    }
}