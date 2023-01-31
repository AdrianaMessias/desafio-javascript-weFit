
/*Arrays*/
let buttons =[
    {
        id:1,
        desc:"Home"
    },
    {
        id:2,
        desc:"Quem somos"
    },
    {
        id:3,
        desc:"Serviços"
    },
    {
        id:4,
        desc:"Soluções"
    },
    {
        id:5,
        desc:"FAQ"
    },
    {
        id:6,
        desc:"Contato"
    },
]

let cards = [
    {
        id: 1,
        img: 'https://placeimg.com/300/180/nature',
        title: 'Natureza',
        content:`Some quick example text to build on the card title and make up the bulk of the card's content`,
    },
    {
        id: 2,
        img: 'https://placeimg.com/300/180/animals',
        title:'Animais',
        content:`Some quick example text to build on the card title and make up the bulk of the card's content`,
    },
    {
        id: 3,
        img: 'https://placeimg.com/300/180/people',
        title: 'Pessoas',
        content:`Some quick example text to build on the card title and make up the bulk of the card's content`,
    },
    {
        id: 4,
        img: 'https://placeimg.com/300/180/tech',
        title: 'Tecnologia',
        content:`Some quick example text to build on the card title and make up the bulk of the card's content`,
    },
]

let lista = [
    {
        id: 1,
        item: 'Primeiro item'
    },
    {
        id: 2,
        item: 'Segundo item'
    },
    {
        id: 3,
        item: 'Terceiro item'
    },
    {
        id: 4,
        item: 'Quarto item'
    },
    {
        id: 5,
        item: 'Quinto item'
    },
]


document.addEventListener('DOMContentLoaded', function(){
    let container = document.querySelector('.container');
    container.classList = 'container mt-5';
    
    /*Menu*/
    let row_menu = document.createElement('div')
    row_menu.classList = 'row mb-5 ml-1';

    let col_lg_12_menu = document.createElement('div')
    col_lg_12_menu.classList = 'd-flex justify-content-start flex-md-column';

    let h3_menu = document.createElement('h3')
    h3_menu.classList = 'display-6';

    let btn_group_vertical_menu = document.createElement('div')
    btn_group_vertical_menu.classList = 'btn-group-horizontal';
    btn_group_vertical_menu.ariaLabel = 'Vertical button group';
    btn_group_vertical_menu.role = 'group';

    buttons.forEach(el =>{
        let button_menu = document.createElement('button')
        button_menu.classList = 'btn btn-secondary ml-1';
        button_menu.type = 'button';

        button_menu.innerHTML = `${el.desc}`;
        h3_menu.innerHTML = 'Menu';
        
        row_menu.append(col_lg_12_menu)
        col_lg_12_menu.append(h3_menu, btn_group_vertical_menu)
        btn_group_vertical_menu.append(button_menu)
    
    })

    /*Header */
    let row_header = document.createElement('div');
    row_header.classList = 'row mb-5';

    let col_lg_12_header = document.createElement('div')
    col_lg_12_header.classList = 'col-lg-12'

    let h3_header = document.createElement('h3')
    h3_header.classList = 'display-6';

    let jumbotron_header = document.createElement('div')
    jumbotron_header.classList = 'jumbotron bg-secondary';

    let h1_header = document.createElement('h1')
    h1_header.classList = 'display-4 text-right text-white';

    let p_header = document.createElement('p')
    p_header.classList = 'lead text-right text-white';

    let my_4_header = document.createElement('hr')
    my_4_header.classList = 'my-4';

    let p_header_2 = document.createElement('p')
    p_header_2.classList = 'text-right text-white';

    let button_header = document.createElement('a')
    button_header.classList = 'btn btn-success btn-lg text-white'
    button_header.href = "#"
    button_header.role = 'button'
    button_header.style.marginLeft = '86.7%'


    h3_header.innerHTML = 'Header'
    h1_header.innerHTML = 'WeFit Test!'
    p_header.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    p_header_2.innerHTML = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making.`
    button_header.innerText= 'Learn more'


    row_header.append(col_lg_12_header);
    col_lg_12_header.append(h3_header, jumbotron_header)
    jumbotron_header.append(h1_header, p_header, my_4_header, p_header_2, button_header)

    /*Cards */
    let row_cards = document.createElement('div')
    row_cards.classList = 'row mb-5';

    let col_lg_12_cards = document.createElement('div')
    col_lg_12_cards.classList = 'col-lg-12';

    let h3_card = document.createElement('h3')
    h3_card.classList = 'display-6';

    h3_card.innerText = 'Cards';
    col_lg_12_cards.appendChild(h3_card)
    row_cards.append(col_lg_12_cards)

    cards.forEach(el =>{
        let col_lg_3_card = document.createElement('div')
        col_lg_3_card.classList = 'col-lg-3';
        
        let card  = document.createElement('div')
        card.classList = 'card';
        card.id = `card_id_${el.id}`
        
        let card_img_top = document.createElement('img')
        card_img_top.classList = 'card-img-top'
        card_img_top.src = `${el.img}`
             
        let card_body = document.createElement('div')
        card_body.classList = 'card-body';
        
        let h5_card = document.createElement('h5')
        h5_card.classList = 'card-title';
        h5_card.innerText = `${el.title}`
        
        let p_card = document.createElement('p')
        p_card.classList = 'card-text';
        p_card.innerText = `${el.content}`
        
        let button_card = document.createElement('a')
        button_card.classList = 'btn btn-primary text-white';
        button_card.innerText = 'Go somewhere'
        button_card.id = `id_botao_${el.id}`;
        
        if(button_card.id == 'id_botao_2'){
            button_card.classList = 'btn btn-success text-white'
        }
        
        col_lg_3_card.appendChild(card)
        card.append(card_img_top, card_body)
        card_body.append(h5_card, p_card, button_card)
        row_cards.append(col_lg_3_card)
    })

    /*Lista de itens */

    let row_itens = document.createElement('div')
    row_itens.classList = 'row mb-5';

    let col_lg_12_itens = document.createElement('div')
    col_lg_12_itens.classList = 'col-lg-12';

    let h3_itens = document.createElement('h3')
    h3_itens.classList = 'display-6';
    h3_itens.innerText = 'Lista';

    let col_lg_4_itens = document.createElement('div')
    col_lg_4_itens.classList = 'col-lg-4';

    let ul_itens = document.createElement('ul')
    ul_itens.classList = 'list-group';

    
    
    lista.forEach(el =>{
        let li_itens = document.createElement('li')
        li_itens.classList = 'list-group-item';
        li_itens.innerText = `${el.item}`
        li_itens.id = `id_lista_${el.id}`

        if(li_itens.id == 'id_lista_4'){
            li_itens.classList = 'list-group-item text-white bg-primary'
        }

        ul_itens.appendChild(li_itens)
    })

    row_itens.append(col_lg_12_itens, col_lg_4_itens)
    col_lg_12_itens.appendChild(h3_itens)
    col_lg_4_itens.appendChild(ul_itens)





    container.append(row_menu, row_header, row_cards, row_itens)
    return container;
})


