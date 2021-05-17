const model = [
    {type: 'tytle', value: 'Hellow frends'},
    {type: 'text', value: 'some text'},
    {type: 'columns', value: [
        '11111',
        '22222',
        '33333',
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ``

    if (block.type === 'tytle') {
        html = title(block)
    } else if (block.type === 'text') {
        html = title(text)
    } else if (block.type === 'columns') {
        html = columns(block)
    }

    $site.insertAdjacentHTML('beforeend', html)

})

function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `
} 

function title(text) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `
}

function columns(block) {
    return `
        <div class="row">
            <div class="col-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, porro.
            </div>
            <div class="col-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, porro.
            </div> 
            <div class="col-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, porro.
            </div>
        </div>
    `
}