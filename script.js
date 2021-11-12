
const btn = document.getElementById('btn')
const token = '7732f7a50288ec9b8d00ada579472822cebdee416cfa62e32d190f50ee35ce66b0d45208404f9fc5fc82e';

function getButton() {
    console.log('Okay. lets go..')
}

function click_btn() {
    let link_value = document.getElementById('entry');
    let link = link_value.value;
    if (link.startsWith('https://vk.com/')) {
        var user_id = link.replace('https://vk.com/',''); // удалить начало ссылки
        console.log(user_id) // оставить лишь айди

        
    }
    else if (link.startsWith('vk.com/')) {
        var user_id = link.replace('vk.com/',''); // удалить начало ссылки
        console.log(user_id)
    }
    else {
        alert('Введите корректную ссылку на ваш профиль ВКонтакте.')
    }
}

