var userLang = navigator.language || navigator.userLanguage; 
i18next.init({
  lng: userLang,
  debug: true,
  resources: {
    en: {
        translation: {
            "nav_home": "HOME",
            "nav_about": "ABOUT",
            "nav_contacts": "CONTACTS",
            "booking": 'RESERVATION',
            "description": 'Black House Club opened in Minsk to become the first conceptual place in the country demonstrating hight world standards entertainment industry. <br> The club name guesses an intrigue. <br> On the one hand “black” is the dominant interior color , on the other hand – the club captivate everyone.',
            "about": 'MORE',
            "adress": 'Kiseleva, 12, Minsk 220029, Belarus',
            "days": [ 
                {
                tuesday: 'tuesday 23:00-07:00', 
                wednesday: 'wednesday 23:00-07:00', 
                thusday: 'thusday 23:00-07:00', 
                friday: 'friday 23:00-07:00', 
                saturday: 'saturday 23:00-07:00', 
                sunday: 'sunday 23:00-07:00'
            }],
            "warning": "Required field",
            "booking_title": "Table reservation",
            "phone": 'Tel.',
            "name": 'Name',
            "data": 'Date',
            "guests": 'Number of guests',
            "send": 'SEND',
            "about_title": 'ABOUT US',
            "about_deacription": 'Black House Club opened in Minsk to become the first conceptual establishment in the country and demonstrate world standards of the entertainment industry. The name of the institution already contains an intrigue. On the one hand, it is "black" - the dominant color of the interior, on the other hand - a club that attracts every guest. The space of this place plays with all colors and takes us to places unpredictable for the imagination. The club will appeal to beautiful and intelligent people who understand what an exclusive vacation is.',

        }
    },
    ru: {
        translation: {
            "nav_home": "ГЛАВНАЯ",
            "nav_about": "О НАС",
            "nav_contacts": "КОНТАКТЫ",
            "booking": 'ЗАБРОНИРОВАТЬ',
            "description": 'Black House Club открылся в Минске, чтобы стать первым концептуальным заведением в стране и продемонстрировать мировые стандарты индустрии развлечений. В названии заведения уже кроется интрига. С одной стороны, это «черный» — доминирующий цвет интерьера, с другой стороны — клуб, затягивает каждого гостя. Пространство этого места играет всеми красками и переносит нас в непредсказуемые для воображения места. Клуб придется по вкусу красивым и интеллигентным людям, которые понимают, что такое эксклюзивный отдых.',
            "about": 'УЗНАТЬ БОЛЬШЕ',
            "adress": 'Киселева, 12, Минск 220029, Беларусь',
            "days": [ 
                {
                tuesday: 'вторник 23:00-07:00', 
                wednesday: 'среда 23:00-07:00', 
                thusday: 'четверг 23:00-07:00', 
                friday: 'пятница 23:00-07:00', 
                saturday: 'суббота 23:00-07:00', 
                sunday: 'воскресенье 23:00-07:00'
            }],
            "warning": 'Поле обязательное для заполнения',
            "booking_title": 'Заказ столика',
            "phone": 'Телефон',
            "name": 'Имя',
            "data": 'Дата',
            "guests": 'Количество персон',
            "send": 'ОТПРАВИТЬ',
            "about_title": 'О НАС',
            "about_description": 'Black House Club открылся в Минске, чтобы стать первым концептуальным заведением в стране и продемонстрировать мировые стандарты индустрии развлечений. В названии заведения уже кроется интрига. С одной стороны, это «черный» — доминирующий цвет интерьера, с другой стороны — клуб, затягивает каждого гостя. Пространство этого места играет всеми красками и переносит нас в непредсказуемые для воображения места. Клуб придется по вкусу красивым и интеллигентным людям, которые понимают, что такое эксклюзивный отдых.',

        }
    }
  }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.getElementById('nav_home').innerHTML = i18next.t('nav_home');
    document.getElementById('nav_about').innerHTML = i18next.t('nav_about');
    document.getElementById('nav_contacts').innerHTML = i18next.t('nav_contacts');
    document.getElementById('booking').innerHTML = i18next.t('booking');
    document.getElementById('description').innerHTML = i18next.t('description');
    document.getElementById('about').innerHTML = i18next.t('about');
    document.getElementById('adress').innerHTML = i18next.t('adress');
    document.querySelectorAll('.warning').forEach((el) => el.innerHTML = i18next.t('warning'));
    document.getElementById('booking_title').innerHTML = i18next.t('booking_title');
    document.getElementById('phone').placeholder = i18next.t('phone');
    document.getElementById('name').placeholder = i18next.t('name');
    document.getElementById('data').innerHTML = i18next.t('data');
    document.getElementById('guests').innerHTML = i18next.t('guests');
    document.getElementById('send').innerHTML = i18next.t('send');
    document.querySelectorAll('day').forEach((el) => {
        el.innerHTML = i18next.t('days', `${el.id}`)
    })

}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}
  
i18next.on('languageChanged', () => {
    updateContent();
});

document.getElementById('en').onclick = () => changeLng('en');
document.getElementById('ru').onclick = () => changeLng('ru');
