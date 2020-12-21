let destinationCard = document.querySelectorAll('.destinations__cards_item');
let destinationTitle = document.querySelectorAll('.destinations__cards_item_content_title');
let destinationText = document.querySelectorAll('.destinations__cards_item_content_text');
let adaptiveButton = document.querySelector('.header__adaptive_menu_button');
let adaptiveMenu = document.querySelector('.adaptive_control');

let card = Array.from(destinationCard);
let title = Array.from(destinationTitle);
let text = Array.from(destinationText);

for (let i = 0; i < card.length; i++) {
    card[i].onmouseenter = () => {
        title[i].style.textDecoration = 'underline'
        text[i].style.textDecoration = 'underline'
    }
    card[i].onmouseleave = () => {
        title[i].style.textDecoration = 'none'
        text[i].style.textDecoration = 'none'
    }
}

adaptiveButton.onclick = () =>{
    adaptiveMenu.classList.toggle('visibility_switcher');
}