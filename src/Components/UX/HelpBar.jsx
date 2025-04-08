import React, { useState } from 'react';

const HelpBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Регистрация по месту пребывания',
            text: `📅 Срок: 7 рабочих дней с момента въезда\n📍 Где оформить:\n• МФЦ\n• Отделение ГУВМ МВД\n📋 Документы:\n- Паспорт с визой\n- Миграционная карта\n- Договор аренды жилья\n💸 Госпошлина: 350 рублей`
        },
        {
            id: 2,
            title: 'Медицинская страховка для иностранцев',
            text: `✅ Обязательный минимум:\n• Покрытие от 100 000 ₽\n• Срок действия = срок визы\n🏥 Где купить:\n• Страховые компании: Ингосстрах, АльфаСтрахование\n• Онлайн: sravni.ru\n❗ Без полиса не пройдете регистрацию`
        },
        {
            id: 3,
            title: 'Трудовой патент',
            text: `💼 Условия получения:\n1. Возраст от 18 лет\n2. Сертификат о знании русского языка\n3. Медосмотр\n📅 Срок действия: 1-12 месяцев\n💸 Стоимость: 5 000 ₽/мес\n🔗 Портал: guvm.mvd.ru/patent`
        },
        {
            id: 4,
            title: 'Экстренные телефоны',
            text: `🚨 Единый номер:\n• 112 - с мобильного\n📞 Спецслужбы:\n• 101 - Пожарные\n• 102 - Полиция\n• 103 - Скорая\n🌍 Посольства:\n• Уточняйте на mid.ru`
        },
        {
            id: 5,
            title: 'Общественный транспорт',
            text: `🚇 Метро:\n• Часы работы: 5:30-1:00\n• Стоимость: 62 ₽ за поездку\n💳 Карта «Тройка»:\n• Пополнение в кассах метро\n• Возвратный депозит 50 ₽\n🚌 Наземный транспорт:\n• Тарифы: mosgortrans.ru`
        },
        {
            id: 6,
            title: 'Налоговый вычет для работающих',
            text: `💡 Условия:\n• Официальное трудоустройство\n• Статус налогового резидента\n📝 Документы:\n• Заявление 3-НДФЛ\n• Справка 2-НДФЛ\n💼 Как получить:\n• Через личный кабинет nalog.ru`
        },
        {
            id: 7,
            title: 'Аренда жилья: права и обязанности',
            text: `📝 В договоре должно быть:\n• Паспортные данные сторон\n• Стоимость аренды\n• Срок действия\n⚠️ Запрещено:\n• Сдавать без договора\n• Брать предоплату > 1 месяца\n🔗 Проверка собственности: rosreestr.gov.ru`
        },
        {
            id: 8,
            title: 'Курсы русского языка',
            text: `📚 Где учить:\n• Центры «Русский язык» (pushkin.institute)\n• Онлайн-платформы: openedu.ru\n📜 Сертификат:\n• Требуется для получения патента\n• Стоимость экзамена: 4 500 ₽`
        },
        {
            id: 9,
            title: 'Перевод документов',
            text: `📑 Обязательный перевод:\n• Паспорт\n• Свидетельство о рождении\n• Документы об образовании\n✅ Требования:\n• Нотариальное заверение\n• Печать переводческой компании\n💸 Стоимость: от 500 ₽/страница`
        },
        {
            id: 10,
            title: 'Банковские услуги',
            text: `🏦 Открытие счета:\n• Паспорт с переводом\n• Миграционная карта\n💳 Популярные банки:\n• Сбербанк\n• Тинькофф\n• Альфа-Банк\n🔐 Мобильный банкинг:\n• Доступен после регистрации`
        },
        {
            id: 30,
            title: 'Праздничные нерабочие дни',
            text: `📅 Официальные праздники РФ:\n• 1-10 января - Новогодние каникулы\n• 7 января - Рождество\n• 23 февраля - День защитника Отечества\n• 8 марта - Международный женский день\n• 1 мая - Праздник Весны и Труда\n• 9 мая - День Победы\n• 12 июня - День России\n• 4 ноября - День народного единства`
        },
        {
            id: 31,
            title: 'Получение ИНН',
            text: `📌 Для чего нужен: 
• Оформление трудового договора 
• Открытие счета в банке 
📍 Где получить: 
• Налоговая инспекция 
• Через портал nalog.ru 
📋 Документы: 
- Паспорт с переводом 
- Миграционная карта 
⏱ Срок изготовления: 5 дней`
        },
        {
            id: 32,
            title: 'Оформление СНИЛС',
            text: `🔑 Для чего нужен: 
• Пенсионные отчисления 
• Медицинское обслуживание 
📝 Порядок действий: 
1. Получить у работодателя 
2. Самостоятельно через МФЦ 
⚡️ Обязателен для официального трудоустройства`
        },
        {
            id: 33,
            title: 'Детские сады для иностранцев',
            text: `🏫 Условия приема: 
• Регистрация по месту пребывания 
• Медкарта ребенка 
📅 Как встать в очередь: 
• Через портал mos.ru (для Москвы) 
• В отделе образования района 
💡 Льготы: отсутствуют для нерезидентов`
        },
        {
            id: 34,
            title: 'Нотариальные услуги',
            text: `📜 Частые запросы: 
• Согласие на выезд ребенка 
• Доверенности 
• Заверение переводов 
🏢 Где найти: 
• Нотариальная палата региона 
• Сайт notariat.ru 
💸 Средняя стоимость: 1 500–5 000 ₽`
        },
        {
            id: 35,
            title: 'Продление визы',
            text: `⏳ Сроки подачи: 
• Не позднее 20 дней до окончания 
🚨 Основания для продления: 
• Трудовой договор 
• Поступление в вуз 
• Брак с гражданином РФ 
📄 Документы: 
- Ходатайство принимающей стороны 
- Квитанция об оплате госпошлины (1 600 ₽)`
        },
        {
            id: 36,
            title: 'Экзамен по русскому языку',
            text: `📝 Что включает: 
• Лексика/грамматика 
• Чтение 
• Аудирование 
• Письмо 
• Устная речь 
🏛 Центры тестирования: 
• МГУ им. Ломоносова 
• РУДН 
• Список: testrf.ru 
💵 Стоимость: 4 500–6 000 ₽`
        },
        {
            id: 37,
            title: 'Медицинский осмотр для патента',
            text: `✅ Обязательные анализы: 
• Флюорография 
• Тест на наркотики 
• Анализ на ВИЧ/СПИД 
🏥 Утвержденные клиники: 
• Список в отделениях ГУВМ МВД 
⏳ Срок действия справки: 1 год`
        },
        {
            id: 38,
            title: 'Правила вождения в РФ',
            text: `🚗 Иностранные права: 
• Действуют 6 месяцев 
• Затем нужно получить российские 
🚦 Особенности: 
• Правостороннее движение 
• Алкогольный лимит: 0‰ 
• Штрафы через госуслуги (70% скидка)`
        },
        {
            id: 39,
            title: 'Почтовые услуги',
            text: `📦 Отправка посылок: 
• Макс. вес: 20 кг 
• Тарифы: pochta.ru 
✉️ Почтовый индекс: 
• Уточняйте на сайте Почты России 
🏪 Отделения: 
• Обычно работают с 8:00 до 20:00`
        },
        {
            id: 40,
            title: 'Культурные особенности',
            text: `🤝 Приветствие: 
• Рукопожатие/кивок головой 
• Избегать объятий при первой встрече 
🎁 Визит в гости: 
• Приносить небольшой подарок 
• Снимать обувь 
⚠️ Не рекомендуется: 
• Обсуждать политику 
• Критиковать традиции`
        },

        {
            id: 41,
            title: 'Оплата ЖКХ',
            text: `💡 Как платить: 
• Через приложение Сбербанк Онлайн 
• В терминалах «Элекснет» 
• На почте 
📅 Сроки: 
• До 10 числа следующего месяца 
❗ Важно: сохранять квитанции 3 года`
        },

        {
            id: 43,
            title: 'Налог на имущество',
            text: `🏠 Для арендодателей: 
• 13% от дохода 
• Декларация 3-НДФЛ до 30 апреля 
💼 Для владельцев недвижимости: 
• Ставка: 0,1-2% от кадастровой стоимости 
• Оплата до 1 декабря`
        },
        {
            id: 44,
            title: 'Перевод денег за границу',
            text: `💸 Лимиты: 
• До $10 000 без декларации 
• Свыше — справка из банка 
💵 Комиссия: 1-5% от суммы`
        },
        {
            id: 45,
            title: 'Электронные госуслуги',
            text: `🌐 Портал gosuslugi.ru: 
• Запись к врачу 
• Подача налоговой декларации 
• Проверка штрафов 
🔑 Регистрация: 
• Требуется подтвержденная учетная запись 
• Доступна в МФЦ`
        },
        {
            id: 46,
            title: 'Языковые курсы для детей',
            text: `🎓 Государственные школы: 
• Бесплатно для детей с регистрацией 
📚 Частные центры: 
• Стоимость: от 15 000 ₽/мес 
🌍 Летние лагеря: 
• Языковая практика + экскурсии 
• Список: edu.gov.ru`
        },
        {
            id: 47,
            title: 'Волонтерская помощь',
            text: `🤝 Организации: 
• «Миграция XXI век» 
• Красный Крест 
• Бесплатная юридическая помощь: migrant.ru 
☎️ Горячая линия: 8 (800) 707-52-29 
⏰ Режим работы: круглосуточно`
        },
        {
            id: 48,
            title: 'Аптеки первой необходимости',
            text: `💊 Что должно быть в аптечке: 
• Обезболивающее (Нурофен) 
• Антисептик (Хлоргексидин) 
• Жаропонижающее (Парацетамол) 
• Активированный уголь 
🏥 Круглосуточные сети: 
• «36,6» 
• «Аптека №1»`
        },
        {
            id: 49,
            title: 'Связь: мобильные операторы',
            text: `📱
📶 Покрытие 4G: 
• Карта покрытия на speedtest.net 
💡 Советы: 
• Подключите антиспам`
        },
        {
            id: 50,
            title: 'Продовольственные магазины',
            text: `🛒 Сети эконом-класса: 
• «Светофор» 
• «Находка» 
• «Дикси»
• «Чижик» 
🍏 Рынки: 
+Дёшево
-Не всегда качественно
⏰ Часы работы: 
• 8:00–23:00 (предположительные часы работы супермаркета)`
        },

        {
            id: 52,
            title: 'Спортивные объекты',
            text: `🏊 Государственные центры: 
• Бассейны: справка от врача 
• Тренажерные залы от 1 500 ₽/мес 
🎿 Зимние виды спорта: 
• Лыжные трассы в парках 
• Катки с прокатом коньков`
        },
        {
            id: 53,
            title: 'Религиозные учреждения',
            text: `🕌 Мечети: 
• Московская Соборная мечеть 
• Историческая мечеть в Казани 
⛪ Православные храмы: 
• Храм Христа Спасителя 
• Троице-Сергиева Лавра 
💒 Конфессии: 
• Полный список на religion.gov.ru`
        },
        {
            id: 54,
            title: 'Фестивали и события',
            text: `🎪 Ежегодные мероприятия: 
• «Спасская башня» (сентябрь) 
• «Алые паруса» (июнь) 
• Московский кинофестиваль 
📅 Календарь событий: 
• culture.ru 
• kudago.com`
        },
        {
            id: 55,
            title: 'Защита прав потребителей',
            text: `⚠️ Возврат товара: 
• 14 дней без объяснения причин 
• Сохраняйте чек 
📞 Горячая линия Роспотребнадзора: 
• 8 (800) 100-00-04 
🌐 Он-лайн жалоба: zpp.rospotrebnadzor.ru`
        },
        {
            id: 56,
            title: 'Экологические правила',
            text: `🗑 Сортировка мусора: 
• Синие баки — перерабатываемые 
• Серые — смешанные 
♻️ Пункты приема: 
• «Сфера Экологии» 
• Карта recyclemap.ru 
⚠️ Штраф за выброс мусора: до 5 000 ₽`
        },
        {
            id: 57,
            title: 'Образовательные гранты',
            text: `🎓 Для иностранных студентов: 
• Программа «Глобальное образование» 
• Квоты Минобрнауки 
📚 Топ-вузов: 
• МГУ 
• МФТИ 
• НИУ ВШЭ 
🌐 Как подать: education-in-russia.com`
        },
        {
            id: 58,
            title: 'Служба доставки еды',
            text: `🍕 Популярные сервисы: 
• Yandex.Eda (от 199 ₽/доставка) 
• Delivery Club 
• Самокат (продукты за 15 мин) 
💡 Советы: 
• Проверяйте рейтинг ресторанов 
• Спрашивайте совет у знакомых`
        },

        {
            id: 60,
            title: 'Экотуризм в России',
            text: `🏞 Национальные парки: 
• «Куршская коса» 
• «Ленские столбы» 
• «Алтайский заповедник» 
🎒 Организованные туры: 
• Список на russiatourism.ru 
⚠️ Правила: 
• Не разводить костры 
• Забирать мусор`
        },
        {
            id: 61,
            title: 'Русская кухня: что попробовать',
            text: `🍽 Топ-10 национальных блюд:
1. Борщ — свекольный суп со сметаной (250-350 ₽ в кафе)
2. Пельмени — мясные/рыбные/овощные (рецепты на russianfood.com)
3. Блины с начинками
4. Селедка под шубой — салат на праздники
5. Солянка — густой мясной суп
6. Гречневая каша — популярный гарнир
7. Оливье — обязательный салат на Новый год
8. Квас — ферментированный напиток (пробуйте в бочках летом)
9. Пирожки с капустой/мясом — уличная еда
10. Медовик — медовый торт
`
        },
        {
            id: 62,
            title: 'Как одеваться зимой',
            text: `❄️ Правило трех слоев:
1. Термобелье (купите в "Спортмастере")
2. Флисовая кофта/свитер
3. Мембранная пуховая куртка

👢 Обувь:
• Валенки — для прогулок (-25°C)
• Ботинки с мехом — универсальный вариант

💡 Советы:
• Шапка-ушанка — идеальный вариант
• Купите рукавицы вместо перчаток
• Используйте термоноски 
• На сильный мороз — маска-балаклава

⚠️ Где купить одежду:
• Универмаги: "ЦУМ", "ГУМ" (дорого)
• Рынки: "Черкизовский" (дешево)
• Онлайн магазины: Wildberries, ozon, joom, aliexpress`
        },
        {
            id: 63,
            title: 'Традиции чаепития',
            text: `☕ Особенности:
• Пьют после еды и между приемами пищи
• Чаще черный чай с сахаром/лимоном
• Популярны травяные сборы (иван-чай, мята)

🍯 Что подают к чаю:
• Пряники (тульские, вяземские)
• Варенье (малиновое, смородиновое)
• Блины с медом
• Сгущенное молоко

🎁 Чайный этикет:
• Хозяйка разливает гостям
• Не дуйте на горячий чай — считается невежливым
• Ложку оставляйте в блюдце`
        },
        {
            id: 64,
            title: 'Общественные бани',
            text: `♨️ Правила посещения:
1. Разделение на мужские/женские отделения
2. Обязательна резиновая обувь
3. Веник (березовый/дубовый) — аренда 200 ₽
4. Сеанс обычно 2-3 часа

💰 Стоимость:
• Муниципальные бани: от 500 ₽
• Премиум: от 2 000 ₽

🧖 Процедуры:
• Парение с веником
• Медовый массаж
• Обливание ледяной водой

⚠️ Важно:
• Не берите ценные вещи
• Пейте травяной чай после парной
• Чередуйте парную и отдых 15/30 минут

`
        },
        {
            id: 65,
            title: 'Дачная культура',
            text: `🏡 Что нужно знать:
• 60% горожан имеют загородные участки
• Основные занятия: садоводство, шашлыки, баня
• Традиционные постройки: бревенчатый дом, теплица, погреб

🍅 Что выращивают:
• Огурцы, помидоры, картофель
• Смородину, малину, яблоки
• Цветы: георгины, пионы, гладиолусы

🚆 Как добраться:
• Электрички с Ярославского/Казанского вокзалов
• Расписание: tutu.ru
• "Дачные" автобусы от метро

🎲 Популярные игры:
• Городки (русская версия боулинга)
• Домино
• Лото с бочонками

🌳 Этикет:
• Приносите угощение хозяевам
• Предлагайте помощь по огороду
• Не ходите по чужим участкам`
        },
        {
            id: 66,
            title: 'Русский язык: бытовые фразы',
            text: `🗣 Essential phrases:
• "Сколько стоит?" — [Skól'ka stóit?]
• "Где туалет?" — [Gdé tualét?]
• "Мне нужна помощь" — [Mne núzhna pómoshch?]
• "Я не понимаю" — [Ya ne ponimáyu]

🚌 Транспорт:
• "Остановите здесь" — [Astanavíte zdyes']
• "Проездной на месяц" — [Prazdnóy na mésyats]

🛍 Магазин:
• "Дайте пробник" — [Dáyte próbnik]
• "Скидка есть?" — [Skídka yest'?]

🎭 Культурные нюансы:
• Обращение на "Вы" к старшим
• "Спасибо" говорите дважды — при получении и передаче денег
• "Ничего" — частый ответ на извинения`
        },
        {
            id: 67,
            title: 'Народные промыслы',
            text: `🎁 Что привезти в подарок:
1. Гжель — сине-белый фарфор (фабрика в Раменском)
2. Хохлома — золотая роспись по дереву (Нижний Новгород)
3. Матрешка — купить на Измайловском вернисаже
4. Вологодское кружево — магазин "Снежинка"
5. Уральские самоцветы — магазин "Русские камни"

📍 Где купить оригинал:
• Музейные лавки (Царицыно, Коломенское)
• Ярмарки выходного дня (ВДНХ)
• Фабричные магазины (избегайте китайских подделок)

💡 Мастер-классы:
• Роспись матрешки (2 500 ₽)
• Лепка глиняной игрушки (1 800 ₽)
• Плетение лаптей (Музей русского быта)`
        },
        {
            id: 68,
            title: 'Правила посещения гостей',
            text: `🍰 Что принести:
• Торт/пирог из кондитерской "Большевик"
• Бутылка вина (не дешевле 1 000 ₽)
• Цветы (нечетное количество, кроме 13)

👞 В прихожей:
• Снимите обувь — предложат тапочки
• Подарки вручайте сразу
• Помогите накрыть на стол

🍻 За столом:
• Первый тост — за хозяев
• Не начинайте есть, пока не предложат
• Вилку держите в левой руке

⚠️ Табу:
• Опоздание более чем на 15 минут
• Обсуждение политики/религии
• Отказ от угощения (хотя бы попробуйте)`
        },
        {
            id: 69,
            title: 'Транспорт в час пик',
            text: `🚇 Метро 8:00-10:00 и 17:00-19:00:
• Используйте первые/последние вагоны — они менее заполнены
• Карта "Тройка" — быстрый проход через турникеты
• Схема метро: metro.yandex.ru

🚍 Наземный транспорт:
• Автобусы с буквой "к" — укороченные маршруты
• Мобильные приложения: "Яндекс.Транспорт", "Метро Москвы"

🚕 Альтернативы:
• Каршеринг: Delimobil (от 7 ₽/мин)
• Велосипеды: Velobike (150 ₽/час)
• Самокаты: Urent (200 ₽/30 мин)

💡 Лайфхаки:
• Носите рюкзак в руках
• Планируйте маршрут через 2GIS
• В дождь — наземный транспорт переполнен`
        },
        {
            id: 70,
            title: 'Русские суеверия',
            text: `🔮 Популярные приметы:
• Не свистите в доме — к безденежью
• Черная кошка — обойдите стороной
• Вернулся с полпути — посмотритесь в зеркало

🎁 Подарки:
• Ножи — к ссоре (дайте монетку в обмен)
• Часы — только близким
• Четное число цветов — только на похороны

🏠 Дом:
• Не здоровайтесь через порог
• Пустая бутылка на столе — к бедности (поставьте на пол)
• Не передавайте ничего через порог

💬 Фразы-табу:
• "Не болей" — вместо "Будь здоров"
• "Спасибо" за угощение до еды — к голоду`
        },
// Продолжение до 80...
        {
            id: 80,
            title: 'Зимние развлечения',
            text: `⛷️ Горные лыжи:
• Красная Поляна (Сочи) — трассы для новичков
• "Сорочаны" (Московская обл.) — вечернее катание

🛷 Бесплатные активности:
• Катки в парках (прокат коньков 300 ₽/час)
• Лыжные трассы в Лосином Острове
• Снежные горки на Воробьевых горах

🎿 Экипировка:
• Аренда комплекта: 1 500 ₽/день
• Где купить: Спортмастер, Decathlon
• Совет: выбирайте куртки с ветрозащитой

🍲 После прогулки:
• Глинтвейн на рождественских ярмарках
• Блины в "Теремке"
• Баня с веником`
        },
        {
            id: 81,
            title: 'Документы для визы',
            text: `📋 Основной пакет:
• Загранпаспорт (срок действия +6 месяцев)
• Фото 3.5x4.5 см (2 шт., матовые)
• Медицинская страховка (покрытие от 30 000 €)
• Приглашение (туристическое/рабочее/учебное)

💼 Дополнительно:
• Справка с работы (для работающих)
• Выписка из банка (минимум 100 €/день)
• Бронь жилья (отель/аренда)

🌐 Подача:
• Через визовые центры (vfsglobal.com)
• Срок рассмотрения: 4-20 дней
• Стоимость: 35-150 € (в зависимости от типа)`
        },
        {
            id: 82,
            title: 'Что взять с собой',
            text: `🧳 Essentials:
• Адаптер для розеток (тип C/F, 220V)
• Лекарства (аптечка на первые 2 недели)
• Теплая одежда (даже летом вечера прохладные)
• Копии документов (заверенные нотариально)

💡 Советы:
• Купите сим-карту в аэропорту (МТС/Мегафон)
• Возьмите наличные (рубли + доллары/евро)
• Упакуйте вещи в вакуумные пакеты

⚠️ Запрещено:
• Продукты животного происхождения
• Более 10 000 € без декларации
• Оружие/наркотики/взрывчатые вещества`
        },
        {
            id: 83,
            title: 'Выбор города',
            text: `🏙 Топ-5 для переезда:
1. Москва — максимум возможностей, но дорого
2. Санкт-Петербург — культурная столица, дождливо
3. Казань — толерантность, развитая инфраструктура
4. Новосибирск — научный центр, суровые зимы
5. Сочи — мягкий климат, туристический фокус

📊 Критерии выбора:
• Наличие работы/учебы
• Климатические условия
• Стоимость жилья
• Транспортная доступность

🌐 Ресурсы:
• Рейтинг городов: rbc.ru/rating
• Отзывы экспатов: expat.com`
        },
        {
            id: 84,
            title: 'Поиск жилья',
            text: `🏠 Варианты:
• Аренда квартиры (от 30 000 ₽/мес в регионах)
• Общежитие (для студентов, от 5 000 ₽)
• Квартиры посуточно (первые 2 недели)

🔍 Где искать:
• ЦИАН (cian.ru) — проверенные объявления
• Авито (avito.ru) — будьте осторожны с мошенниками


⚠️ Советы:
• Не платите предоплату без договора
• Проверяйте право собственности (rosreestr.gov.ru)
• Уточните, включены ли коммунальные платежи`
        },
        {
            id: 85,
            title: 'Финансовая подготовка',
            text: `💰 Бюджет на первые 3 месяца:
• Жилье: 90 000–300 000 ₽
• Питание: 30 000–60 000 ₽
• Транспорт: 5 000–15 000 ₽
• Связь/интернет: 3 000–5 000 ₽

💳 Банковские карты:
• Откройте мультивалютный счет
• Уведомите банк о переезде
• Возьмите карты Visa/Mastercard

💸 Обмен валюты:
• Лучший курс — в банках (Сбербанк, ВТБ)
• Избегайте уличных обменников
• Используйте приложение "Курс Валют" для сравнения`
        },
        {
            id: 86,
            title: 'Медицинская подготовка',
            text: `🏥 Обязательные прививки:
• Корь/краснуха/паротит
• Дифтерия/столбняк
• Гепатит B

💊 Аптечка:
• Обезболивающее (Ибупрофен)
• Антигистаминные (Цетрин)
• Средства от простуды (Терафлю)
• Антисептики (Хлоргексидин)

📄 Документы:
• Медицинская карта (переведенная)
• Рецепты на лекарства (если принимаете постоянно)
• Справка о прививках

🌐 Ресурсы:
• Список клиник: medihost.ru
• Онлайн-консультации: docdoc.ru`
        },
        {
            id: 87,
            title: 'Образовательные документы',
            text: `🎓 Нострификация диплома:
1. Перевод на русский (нотариально заверенный)
2. Легализация (апостиль)
3. Подача в Министерство образования

📚 Для студентов:
• Сертификат о знании русского языка (ТРКИ)
• Приглашение от вуза
• Подтверждение финансовой состоятельности

💡 Советы:
• Начните процесс за 6 месяцев
• Уточните требования на сайте вуза
• Используйте услуги переводческих бюро

🌐 Полезные ссылки:
• Министерство образования: edu.gov.ru
• Список аккредитованных вузов: nica.ru`
        },
        {
            id: 88,
            title: 'Языковая подготовка',
            text: `📚 Онлайн-курсы:
• "Русский как иностранный" на openedu.ru
• Приложения: Duolingo, Memrise
• YouTube-каналы: "Russian with Anastasia"

📖 Учебники:
• "Дорога в Россию" (уровни A1–B2)
• "Русский язык для начинающих"
• "Грамматика в таблицах"

💡 Советы:
• Учите кириллицу заранее
• Практикуйте базовые фразы
• Найдите языкового партнера (italki.com)

🎯 Минимум для старта:
• Алфавит
• Числа
• Фразы вежливости
• Основные глаголы`
        },
        {
            id: 89,
            title: 'Культурная подготовка',
            text: `🎬 Фильмы для понимания менталитета:
• "Ирония судьбы" (новогодняя классика)
• "Москва слезам не верит" (история успеха)
• "Брат" (культовый фильм 90-х)

📚 Книги:
• "Война и мир" Л. Толстой
• "Мастер и Маргарита" М. Булгаков
• "Преступление и наказание" Ф. Достоевский

🎵 Музыка:
• Виктор Цой ("Кино")
• Алла Пугачева
• Современные исполнители: Земфира, Би-2

🌐 Ресурсы:
• Культура.РФ (culture.ru)
• Онлайн-курсы о России (arzamas.academy)`
        },
        {
            id: 90,
            title: 'Транспортная подготовка',
            text: `✈️ Аэропорты:
• Москва: Шереметьево, Домодедово, Внуково
• Санкт-Петербург: Пулково
• Регионы: Казань, Екатеринбург, Новосибирск

🚆 Железная дорога:
• Купите билеты на rzd.ru
• Выберите класс: плацкарт/купе/СВ
• Возьмите еду в дорогу (в поездах дорого)

🚕 Такси:
• Установите приложения: Яндекс.Такси, Uber
• Средняя стоимость: 200–500 ₽ по городу
• Не ловите машины на улице

💡 Советы:
• Скачайте офлайн-карты (2GIS, Maps.me)
• Купите транспортную карту (Тройка в Москве)`
        },
        {
            id: 91,
            title: 'Связь и интернет',
            text: `📱 Операторы:
• МТС — лучшее покрытие
• Мегафон — выгодные тарифы
• Билайн — удобное приложение

💻 Интернет:
• Домашний: Ростелеком (от 500 ₽/мес)
• Мобильный: безлимит от 400 ₽/мес
• Wi-Fi: в кафе, парках, метро

📞 Международные звонки:
• Skype: 2 ₽/мин
• WhatsApp: бесплатно
• Локальные SIM: 15 ₽/мин

💡 Советы:
• Купите сим-карту в аэропорту
• Подключите роуминг перед вылетом
• Используйте VPN для доступа к некоторым сайтам`
        },
        {
            id: 92,
            title: 'Погода и климат',
            text: `🌡️ Особенности:
• Резкие перепады температур
• Долгая зима (октябрь–апрель)
• Короткое лето (июнь–август)

🧥 Одежда:
• Зимой: пуховик, термобелье, шапка
• Летом: дождевик, легкая куртка
• Всегда: зонт, удобная обувь

🌐 Ресурсы:
• Прогноз погоды: gismeteo.ru
• Уровень загрязнения воздуха: aqicn.org

💡 Советы:
• Скачайте приложение "Погода Яндекса"
• Следите за UV-индексом летом
• Зимой используйте кремы от обморожения`
        },
        {
            id: 93,
            title: 'Безопасность',
            text: `🚨 Экстренные номера:
• 112 — единый номер (с мобильного)
• 101 — пожарные
• 102 — полиция
• 103 — скорая

⚠️ Правила:
• Носите копию паспорта
• Избегайте темных переулков
• Не носите крупные суммы

💡 Советы:
• Установите приложение "Безопасный город"
• Сообщите в посольство о переезде
• Застрахуйте имущество

🌐 Ресурсы:
• МВД РФ: mvd.ru
• Посольства: mid.ru`
        },
        {
            id: 94,
            title: 'Подарки для принимающей стороны',
            text: `🎁 Идеи:
• Национальные сладости
• Алкоголь (если знаете, что принимают)
• Сувениры с родины
• Книги о вашей стране

💡 Советы:
• Упакуйте в красивую бумагу
• Приложите открытку на русском
• Уточните традиции (например, четное число цветов — на похороны)

⚠️ Табу:
• Острые предметы (ножницы, ножи)
• Часы (считаются плохой приметой)
• Пустые кошельки (к безденежью)`
        },
        {
            id: 95,
            title: 'Первые дни в России',
            text: `📅 План:
1. Заселение в жилье
2. Регистрация (7 дней)
3. Открытие счета в банке
4. Покупка сим-карты
5. Знакомство с районом

💡 Советы:
• Возьмите карту города
• Узнайте адрес ближайшего МФЦ
• Найдите аптеку и магазин

🌐 Ресурсы:
• Карты: 2gis.ru
• Транспорт: yandex.ru/maps
• Новости: rbc.ru`
        },
        {
            id: 96,
            title: 'Психологическая подготовка',
            text: `🧠 Что ожидать:
• Культурный шок (фазы: эйфория, раздражение, адаптация)
• Языковой барьер
• Ностальгия

💡 Советы:

• Учите язык ежедневно
• Ведите дневник переезда

🌐 Ресурсы:
• Форумы экспатов: expat.com
• Психологическая помощь: b17.ru
• Книги: "Культурный шок" К. Оберг`
        },
        {
            id: 97,
            title: 'Дети и переезд',
            text: `🏫 Школы:
• Международные (дорого)
• Государственные (бесплатно, но нужен русский)
• Частные (от 30 000 ₽/мес)

👶 Детсады:
• Очередь через портал госуслуг
• Частные: от 20 000 ₽/мес
• Няни: от 500 ₽/час

💡 Советы:
• Начните учить русский заранее
• Найдите кружки по интересам
• Подготовьте медицинскую карту

🌐 Ресурсы:
• Список школ: edu.gov.ru
• Детские центры: kidsreview.ru`
        },
        {
            id: 98,
            title: 'Питомцы и переезд',
            text: `🐕 Документы:
• Ветеринарный паспорт
• Прививка от бешенства (не ранее 30 дней до выезда)
• Чип (ISO 11784/11785)

✈️ Перевозка:
• Уточните правила авиакомпании
• Купите переноску
• Возьмите воду и корм

🏠 В России:
• Регистрация в ветклинике
• Обязательный выгул в наморднике (для собак)
• Страховка (от 2 000 ₽/год)

🌐 Ресурсы:
• Правила ввоза: fsvps.gov.ru
• Поиск клиник: zooclub.ru`
        },
        {
            id: 99,
            title: 'Бюджетный переезд',
            text: `💸 Экономия:
• Авиабилеты: купите за 2-3 месяца (skyscanner.ru)
• Транспорт: каршеринг вместо такси

💡 Лайфхаки:
• Берите минимум вещей
• Используйте студенческие скидки
• Покупайте билеты на поезд заранее

🌐 Ресурсы:
• Дешевые авиабилеты: aviasales.ru
• Совместные поездки: blablacar.ru
• Купоны: biglion.ru`
        },
        {
            id: 100,
            title: 'Чек-лист перед вылетом',
            text: `✅ Обязательно:
• Паспорт с визой
• Страховка
• Деньги (рубли + валюта)
• Адаптер для розеток

📱 Электроника:
• Зарядные устройства
• Power bank
• Ноутбук/планшет

💊 Аптечка:
• Обезболивающее
• Антигистаминные
• Личные лекарства

📄 Документы:
• Копии паспорта
• Приглашение
• Бронь жилья

💡 Советы:
• Уведомите банк о поездке
• Скачайте офлайн-карты
• Возьмите книгу/плеер для дороги`
        }
    ]);

    const [modalOpen, setModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
    const [modalTitle, setModalTitle] = useState(''); // Состояние для хранения заголовка карточки
    const [modalText, setModalText] = useState(''); // Состояние для хранения текста карточки

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const filteredCards = () => {
        if (!inputValue) return cards;

        const searchWords = inputValue.toLowerCase().split(' ');

        return cards.filter(card => {
            const cardTitle = card.title.toLowerCase();
            return searchWords.some(word => cardTitle.includes(word));
        });
    };

    const hasResults = filteredCards().length > 0;

    // Функция для открытия модального окна
    const openModal = (title, text) => {
        setModalTitle(title); // Устанавливаем заголовок карточки
        setModalText(text); // Устанавливаем текст карточки
        setModalOpen(true); // Открываем модальное окно
    };

    // Функция для закрытия модального окна
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='help-bar-wrapper' id="HELPBAR">
            <div className="help-bar">
                <p>На какой вопрос Вы хотите получить консультацию?</p>
                <div className="search-wrapper">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Введите ключевое слово например "переезд" '
                    />
                    <a id="lupa">
                        <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.9999 9.60507C25.9999 14.3638 22.1695 18.2101 17.4583 18.2101C12.7472 18.2101 8.91675 14.3638 8.91675 9.60507C8.91675 4.84636 12.7472 1 17.4583 1C22.1695 1 25.9999 4.84636 25.9999 9.60507Z"
                                stroke="black" strokeWidth="2"
                            />
                            <path d="M2 26.9615L12.306 16.3287" stroke="black" strokeWidth="3" />
                        </svg>
                    </a>
                </div>

                <div className="HelpList">
                    <div className="row-list">

                        {!hasResults && (
                            <div className="col-sm-6">
                                <div className="card" id="neyro">
                                    <div className="card-body">
                                        <h5 className="card-title">Результат нейросети</h5>
                                        <br />
                                        <a href="#" className="btn btn-primary">Открыть</a>
                                    </div>
                                </div>
                            </div>
                        )}


                        {filteredCards().map(card => (


                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <br />
                                        <a
                                            href="#"
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.preventDefault(); // Предотвращаем переход по ссылке
                                                openModal(card.title, card.text); // Открываем модальное окно с заголовком и текстом карточки
                                            }}
                                        >
                                            Открыть
                                        </a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>


            {modalOpen && (
                <div className="modal-overlay">
                    <div className="card" id="modal">
                        <div className="card-body" id="modal-body">
                            <button onClick={closeModal} className="btn" id="close">x</button>
                            <h5 className="card-title">{modalTitle}</h5> {/* Здесь выводится title карточки */}
                            <hr/>
                            <p className="card-text" id="modal-text" style={{ whiteSpace: 'pre-line' }}>{modalText}</p> {/* Здесь выводится text карточки */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelpBar;