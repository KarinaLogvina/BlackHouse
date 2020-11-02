let lang = window.localStorage.getItem('lang', 'ru');
i18next.init({
  lng: lang,
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
                {tuesday: 'tuesday 23:00-07:00'},
                {wednesday: 'wednesday 23:00-07:00'}, 
                {thusday: 'thusday 23:00-07:00'},
                {friday: 'friday 23:00-07:00'},
                {saturday: 'saturday 23:00-07:00'}, 
                {sunday: 'sunday 23:00-07:00'}
            ],
            "warning": "Required field",
            "booking_title": "Table reservation",
            "phone": 'Tel.',
            "name": 'Name',
            "data": 'Date',
            "guests": 'Number of guests',
            "send": 'SEND',
            "about_title": 'ABOUT US',
            "about_description": 'Black House Club opened in Minsk to become the first conceptual establishment in the country and demonstrate world standards of the entertainment industry. The name of the institution already contains an intrigue. On the one hand, it is "black" - the dominant color of the interior, on the other hand - a club that attracts every guest. The space of this place plays with all colors and takes us to places unpredictable for the imagination. The club will appeal to beautiful and intelligent people who understand what an exclusive vacation is.',
            "game-of-light_title":'THE PLAY OF LIGHT AND SOUND',
            "game-of-light": 'The creators of Black House Club have laid out the maximum number of innovative, interactive innovations and elements that cannot be found elsewhere. The whole bar breathes and lives with the music and its visitors. It is not for nothing that the phrase “created to surprise” was chosen as one of the slogans of the institution, because literally every detail here amazes: an innovative wall made of bottles, transparent floors that hold handmade sculptures. Even the role of taps with water familiar to the layman is played here by figures made in the form of people\'s faces. The bar has two multi-level VIP zones, the “The Bed” zone, four bar counters, different in size and design. All this diversity allows you to get new impressions from each subsequent visit. The ceiling and walls, the bar area change their color - this creates a new, unexpected atmosphere. Capture it using the iPad, which is on every table, or watch how guests were relaxing before you.',
            "new-look_title": 'A NEW LOOK AT YOUR FAVORITE THINGS',
            "new-look": 'Black House Club kitchen deserves a book of its own. She is eclectic, unique and inimitable. The main secret is the use of familiar and favorite ingredients to transform them into absolutely incredible flavor combinations! Everything down to the smallest detail, even the serving of the dish, creates a festive mood. All dishes on the Black House Club menu can be called a work of culinary art! Together with the love of the chef and the entire team of the establishment, the process of eating food becomes an inspiration. Each position on the menu is another intrigue that draws us into interactive interaction. Japanese food lovers will appreciate sushi at the Black House Club.',
            "unique": 'Black House Club is a unique place with its own unique style, atmosphere and rules. The restaurant team is ready to satisfy all your needs and desires. This is a place where you can always invite friends, guests and come to relax yourself, where many events are held, and where you feel at the center of events.',
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
                {tuesday: 'вторник 23:00-07:00'},
                {wednesday: 'среда 23:00-07:00'}, 
                {thusday: 'четверг 23:00-07:00'},
                {friday: 'пятница 23:00-07:00'},
                {saturday: 'суббота 23:00-07:00'}, 
                {sunday: 'воскресенье 23:00-07:00'}
            ],
            "warning": 'Поле обязательное для заполнения',
            "booking_title": 'Заказ столика',
            "phone": 'Телефон',
            "name": 'Имя',
            "data": 'Дата',
            "guests": 'Количество персон',
            "send": 'ОТПРАВИТЬ',
            "about_title": 'О НАС',
            "about_description": 'Black House Club открылся в Минске, чтобы стать первым концептуальным заведением в стране и продемонстрировать мировые стандарты индустрии развлечений. В названии заведения уже кроется интрига. С одной стороны, это «черный» — доминирующий цвет интерьера, с другой стороны — клуб, затягивает каждого гостя. Пространство этого места играет всеми красками и переносит нас в непредсказуемые для воображения места. Клуб придется по вкусу красивым и интеллигентным людям, которые понимают, что такое эксклюзивный отдых.',
            "game-of-light_title": "ИГРА СВЕТА И ЗВУКА",
            "game-of-light": 'Создатели Black House Club заложили максимальное количество инновационных, интерактивных новшеств и элементов, которые не встретишь в других местах. Весь бар дышит и живет вместе с музыкой и своими посетителями. Не зря одним из слоганов заведения была выбрана фраза «созданный удивлять», ведь поражает здесь буквально каждая деталь: инновационная стена из бутылок, прозрачные полы, которые держат скульптуры ручной работы. Даже роль привычных обывателю кранов с водой здесь выполняют фигуры, выполненные в форме лиц людей. В баре есть две многоуровневые VIP-зоны, зона «The Bed», четыре барные стойки, разные по размеру и исполнению. Все это многообразие позволяет получить новые впечатления от каждого последующего визита. Свой цвет меняют потолок и стены, зона баров — это создает новую, неожиданную обстановку. Запечатлейте ее с помощью iPad, которые есть на каждом столике, или посмотрите, как отдыхали гости до вас.',
            "new-look_title": 'НОВЫЙ ВЗГЛЯД НА ЛЮБИМЫЕ ВЕЩИ',
            "new-look": 'Кухня Black House Club заслуживает написания отдельной книги. Она эклектична, уникальна и неповторима. Главный секрет — это использование привычных для нас и любимых ингредиентов для перевоплощения их в совершенно невероятные вкусовые сочетания! Все до мельчайших деталей, даже подача блюда, создает праздничное настроение. Все блюда в меню Black House Club можно назвать произведением кулинарного искусства! Вместе с любовью шеф-повара и всей команды заведения процесс потребления еды становится вдохновением. Каждая позиция в меню — это еще одна интрига, затягивающая нас в интерактивное взаимодействие. Любители японской кухни оценят суши в Black House Club.',
            "unique": 'Black House Club — уникальное место со своим неповторимым стилем, атмосферой и правилами. Команда заведения готова удовлетворить все Ваши потребности и желания. Это место, куда всегда можно пригласить друзей, гостей и прийти отдохнуть самим, где проводится много мероприятий, и где ты чувствуешь себя в центре событий.',
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
    let description = document.getElementById('description');
    if(description) description.innerHTML = i18next.t('description');
    let about = document.getElementById('about');
    if(about) about.innerHTML = i18next.t('about');
    let adress = document.getElementById('adress')
    if(adress) adress.innerHTML = i18next.t('adress');
    document.querySelectorAll('.warning').forEach((el) => el.innerHTML = i18next.t('warning'));
    document.getElementById('booking_title').innerHTML = i18next.t('booking_title');
    document.getElementById('phone').placeholder = i18next.t('phone');
    document.getElementById('name').placeholder = i18next.t('name');
    document.getElementById('data').innerHTML = i18next.t('data');
    document.getElementById('guests').innerHTML = i18next.t('guests');
    document.getElementById('send').innerHTML = i18next.t('send');
    document.querySelectorAll('.day').forEach((el, index) => {
        el.innerHTML = i18next.t(`days.${index}.${el.id}`)
    });
    let aboutTitle = document.getElementById('about_title');
    if(aboutTitle) aboutTitle.innerHTML = i18next.t('about_title');
    let aboutDescription = document.getElementById('about_description');
    if (aboutDescription) aboutDescription.innerHTML = i18next.t('about_description');
    let gameTitle = document.getElementById('game-of-light_title');
    if(gameTitle) gameTitle.innerHTML = i18next.t('game-of-light_title');
    let game = document.getElementById('game-of-light');
    if(game) game.innerHTML = i18next.t('game-of-light');
    let newLookTitle = document.getElementById('new-look_title')
    if(newLookTitle) newLookTitle.innerHTML = i18next.t('new-look_title');
    let newLook = document.getElementById('new-look')
    if(newLook) newLook.innerHTML = i18next.t('new-look');
    let unique = document.getElementById('unique');
    if(unique) unique.innerHTML = i18next.t('unique');
}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}
  
i18next.on('languageChanged', () => {
    updateContent();
});

document.getElementById('en').onclick = () => {
    localStorage.setItem('lang', 'en');
    changeLng('en');
};
document.getElementById('ru').onclick = () => {
    localStorage.setItem('lang', 'ru');
    changeLng('ru');
};
