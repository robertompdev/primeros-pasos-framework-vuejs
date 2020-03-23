const ListProgramming = {
    name: 'ListProgramming',
    template: `
        <div> 
            <ul>
                <li v-for="l in language">{{ l }}</li>
            </ul>
        </div>`,
    data: function () {
        return {
            language: ['C#', 'Python', 'Java', 'Javascript', 'VB', 'PHP', '.NET']
        }
    }
}