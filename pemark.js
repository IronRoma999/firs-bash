const model = [
    {type: 'tytle', value: 'Hellow frends'},
    {type: 'text', value: 'some text'},
    {type: 'columns', value: [
        '11111',
        '22222',
        '33333',
    ]}
]

const $site = document.querySelector(selector: '#site')

model.forEach(block => {
    console.log(block)
})