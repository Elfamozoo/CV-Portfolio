export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'workExperience' }]
        },
    ],
    orderings: [{
        title: "par année",
        name: "parannéedesc",
        by: [{
            field: "year", direction: 'desc'
        }]
    }],
}