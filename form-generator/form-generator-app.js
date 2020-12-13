var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var app;
(function (app) {
    var ScaffoldDefault = form.Scaffold;
    var components;
    (function (components) {
        /**
         * Компонент Scaffold был вынесен в общий код
         * библиотеки form-tools для повторного
         * использования
         */
        components.Scaffold = ScaffoldDefault;
    })(components = app.components || (app.components = {})); // namespace components
})(app || (app = {})); // namespace app
/// <reference path="./scaffold.tsx"/>
var app;
(function (app) {
    var data;
    (function (data) {
        /**
         *
         * Фейковая база профилей была сгенерирована следующим скриптом
         *
         * const faker = require('faker')
         * console.log(JSON.stringify([...new Array(50)].map(() => ({
         *   id: faker.random.uuid(),
         *   firstName: faker.name.firstName(),
         *   lastName: faker.name.lastName(),
         *   email: faker.internet.email(),
         *   jobTitle: faker.name.jobTitle(),
         *   prefix: faker.name.prefix(),
         *   suffix: faker.name.suffix(),
         *   jobArea: faker.name.jobArea(),
         *   age: faker.random.number(),
         *   keyword: faker.random.words(6),
         *   address: faker.address.streetAddress(),
         *   phonenumber:faker.phone.phoneNumber(),
         *   city:faker.address.city(),
         *   state:faker.address.state(),
         *   country:faker.address.country()
         * }))))
         */
        var peoples = [
            {
                "id": "81675987-a63e-4c12-af15-c0b6615f60f7",
                "firstName": "Felton",
                "lastName": "Cruickshank",
                "email": "Bradford94@gmail.com",
                "subscribed": true,
                "jobTitle": "Global Markets Officer",
                "prefix": "Mr.",
                "suffix": "IV",
                "jobArea": "Accounts",
                "age": 33469,
                "keyword": "Taka utilisation SAS Gorgeous COM Walks",
                "address": "247 Vinnie Extensions",
                "phonenumber": "414.736.3825 x7282",
                "city": "New Katelyn",
                "state": "Tennessee",
                "country": "Wallis and Futuna"
            },
            {
                "id": "204f9a0d-f715-449c-b4b5-f18064054a9d",
                "firstName": "Cheyenne",
                "lastName": "Pacocha",
                "email": "Amely_Schumm@yahoo.com",
                "subscribed": true,
                "jobTitle": "Legacy Paradigm Planner",
                "prefix": "Mrs.",
                "suffix": "III",
                "jobArea": "Infrastructure",
                "age": 76656,
                "keyword": "sexy Avon Tasty Soft Shirt Team-oriented indigo payment",
                "address": "4982 Fay Roads",
                "phonenumber": "910.198.4137 x000",
                "city": "South Moriahfort",
                "state": "Rhode Island",
                "country": "Palau"
            },
            {
                "id": "44ad747a-eba2-4222-b6f2-d3a092be2b92",
                "firstName": "Donny",
                "lastName": "Hickle",
                "email": "Donnell_Weimann@hotmail.com",
                "subscribed": true,
                "jobTitle": "Internal Integration Consultant",
                "prefix": "Mrs.",
                "suffix": "II",
                "jobArea": "Usability",
                "age": 23738,
                "keyword": "withdrawal Wisconsin lavender Lebanese Pound array Sports",
                "address": "24981 Johnston Lights",
                "phonenumber": "179.505.4694 x55546",
                "city": "Kozeyburgh",
                "state": "Nebraska",
                "country": "Kazakhstan"
            },
            {
                "id": "24a0432f-6400-4030-bca6-fb66fc20d107",
                "firstName": "Gia",
                "lastName": "Kunde",
                "email": "Jakob33@gmail.com",
                "subscribed": true,
                "jobTitle": "Chief Branding Consultant",
                "prefix": "Mr.",
                "suffix": "Sr.",
                "jobArea": "Markets",
                "age": 52213,
                "keyword": "Generic Brazil pink Borders Georgia Tunnel",
                "address": "432 Emilio Drive",
                "phonenumber": "643-910-1708 x676",
                "city": "West Stefanie",
                "state": "Illinois",
                "country": "Isle of Man"
            },
            {
                "id": "22ff4bea-d45f-4b78-904e-79c7308723e3",
                "firstName": "Edyth",
                "lastName": "Beahan",
                "email": "Elinore.Torp48@yahoo.com",
                "subscribed": true,
                "jobTitle": "Central Integration Facilitator",
                "prefix": "Mr.",
                "suffix": "V",
                "jobArea": "Creative",
                "age": 40109,
                "keyword": "Generic Frozen Sausages bandwidth Nepal Alabama Corporate responsive",
                "address": "1771 Hardy Lights",
                "phonenumber": "337.583.5472 x16470",
                "city": "Mrazchester",
                "state": "Mississippi",
                "country": "New Caledonia"
            },
            {
                "id": "47c67e22-1698-4dae-ba3b-ccd5340636e1",
                "firstName": "Noah",
                "lastName": "Bergnaum",
                "email": "Brant.Jacobi@hotmail.com",
                "subscribed": true,
                "jobTitle": "Regional Security Facilitator",
                "prefix": "Miss",
                "suffix": "PhD",
                "jobArea": "Markets",
                "age": 45037,
                "keyword": "systemic invoice Dynamic magenta payment transmitting",
                "address": "3235 Gay Turnpike",
                "phonenumber": "(568) 115-8960 x4621",
                "city": "South Kendra",
                "state": "Hawaii",
                "country": "Taiwan"
            },
            {
                "id": "e6524233-bce3-41c4-8915-8b5c5a494828",
                "firstName": "Haley",
                "lastName": "Rohan",
                "email": "Naomi_DAmore@hotmail.com",
                "subscribed": true,
                "jobTitle": "Dynamic Applications Coordinator",
                "prefix": "Mr.",
                "suffix": "Sr.",
                "jobArea": "Optimization",
                "age": 92372,
                "keyword": "Falls New Jersey Small Credit Card Account application GB",
                "address": "2770 Zena Stravenue",
                "phonenumber": "576-565-9715 x0957",
                "city": "Chaunceymouth",
                "state": "Indiana",
                "country": "Maldives"
            },
            {
                "id": "2b00881b-44ba-4431-a8df-9168e3065fbb",
                "firstName": "Reyes",
                "lastName": "Gerlach",
                "email": "Terrence32@gmail.com",
                "subscribed": true,
                "jobTitle": "Investor Solutions Orchestrator",
                "prefix": "Mrs.",
                "suffix": "MD",
                "jobArea": "Accounts",
                "age": 51234,
                "keyword": "Fantastic Metal Cheese methodology parallelism program Guyana Metal",
                "address": "1412 Caroline Skyway",
                "phonenumber": "812.385.8980",
                "city": "Boehmshire",
                "state": "Oklahoma",
                "country": "Moldova"
            },
            {
                "id": "e60d606b-727a-4a40-a3c6-449e207c90b8",
                "firstName": "Rollin",
                "lastName": "Langosh",
                "email": "Gaylord42@hotmail.com",
                "subscribed": true,
                "jobTitle": "Legacy Metrics Producer",
                "prefix": "Ms.",
                "suffix": "III",
                "jobArea": "Creative",
                "age": 14422,
                "keyword": "Home Loan Account driver eyeballs Shoes blue info-mediaries",
                "address": "15653 Anderson Way",
                "phonenumber": "(318) 555-6882",
                "city": "North Myrtisstad",
                "state": "Louisiana",
                "country": "Swaziland"
            },
            {
                "id": "e457c0e1-45c9-4267-9c42-6a923b6667a4",
                "firstName": "Keon",
                "lastName": "Swaniawski",
                "email": "Scarlett.Mertz@yahoo.com",
                "subscribed": true,
                "jobTitle": "Regional Identity Designer",
                "prefix": "Miss",
                "suffix": "Sr.",
                "jobArea": "Division",
                "age": 34179,
                "keyword": "indigo Awesome Central copy panel Kuwaiti Dinar",
                "address": "1408 Name Landing",
                "phonenumber": "(975) 935-2084 x217",
                "city": "Port Adrielton",
                "state": "Idaho",
                "country": "Malawi"
            },
            {
                "id": "1446ad75-de8e-4bae-b060-b0cba542d10b",
                "firstName": "Jackeline",
                "lastName": "Wiegand",
                "email": "Sandrine48@gmail.com",
                "subscribed": true,
                "jobTitle": "Lead Markets Analyst",
                "prefix": "Mr.",
                "suffix": "IV",
                "jobArea": "Solutions",
                "age": 32257,
                "keyword": "optical envisioneer Usability Bedfordshire Liaison XSS",
                "address": "6400 Emily Meadow",
                "phonenumber": "(618) 928-1388 x7493",
                "city": "New Larueton",
                "state": "Mississippi",
                "country": "Anguilla"
            },
            {
                "id": "a3ce0a6a-d591-4170-a890-499f55c9584c",
                "firstName": "Sage",
                "lastName": "Daugherty",
                "email": "Deshawn55@gmail.com",
                "subscribed": true,
                "jobTitle": "International Research Supervisor",
                "prefix": "Miss",
                "suffix": "DDS",
                "jobArea": "Marketing",
                "age": 24674,
                "keyword": "Music Gorgeous Accounts Illinois Designer Avon",
                "address": "1270 Oral Roads",
                "phonenumber": "869.327.7813 x61640",
                "city": "Vivianneshire",
                "state": "Hawaii",
                "country": "Bermuda"
            },
            {
                "id": "5d9ee3ff-b92a-48e2-8c3b-a7302cf03cbf",
                "firstName": "Kameron",
                "lastName": "Hirthe",
                "email": "Buddy.Lesch68@yahoo.com",
                "subscribed": true,
                "jobTitle": "Human Metrics Manager",
                "prefix": "Mrs.",
                "suffix": "MD",
                "jobArea": "Intranet",
                "age": 45587,
                "keyword": "Montana Intelligent Frozen Chips Fresh Guernsey index Washington",
                "address": "458 Graham Turnpike",
                "phonenumber": "(722) 498-9359 x61996",
                "city": "Lake Tyreetown",
                "state": "Vermont",
                "country": "Seychelles"
            },
            {
                "id": "e0e665b2-0327-4531-b3de-7646b9d16960",
                "firstName": "Litzy",
                "lastName": "Bahringer",
                "email": "Lawson3@hotmail.com",
                "subscribed": true,
                "jobTitle": "Senior Implementation Coordinator",
                "prefix": "Mrs.",
                "suffix": "MD",
                "jobArea": "Infrastructure",
                "age": 49072,
                "keyword": "Brand Bike Open-source Planner Investment Account Senior",
                "address": "4450 Dino Ville",
                "phonenumber": "381-820-6882 x347",
                "city": "Lake Aronshire",
                "state": "Oregon",
                "country": "Syrian Arab Republic"
            },
            {
                "id": "4e49a75e-efe5-44f5-84f9-89035ab8d37a",
                "firstName": "Alyce",
                "lastName": "Smith",
                "email": "Waylon_Johnston1@hotmail.com",
                "subscribed": true,
                "jobTitle": "Legacy Usability Assistant",
                "prefix": "Mr.",
                "suffix": "III",
                "jobArea": "Creative",
                "age": 86207,
                "keyword": "Credit Card Account PCI hierarchy Practical National syndicate",
                "address": "2236 Aurelie Meadow",
                "phonenumber": "112.834.6483 x055",
                "city": "Loyalfort",
                "state": "Ohio",
                "country": "Kazakhstan"
            },
            {
                "id": "0a6e27d4-14ac-46df-953a-5222f1a42531",
                "firstName": "Giovanny",
                "lastName": "Howe",
                "email": "Briana.Adams@hotmail.com",
                "subscribed": true,
                "jobTitle": "Corporate Intranet Coordinator",
                "prefix": "Mr.",
                "suffix": "Sr.",
                "jobArea": "Response",
                "age": 85973,
                "keyword": "California adapter FTP Rand copying interface",
                "address": "3864 Zakary Ports",
                "phonenumber": "908-086-7274 x55591",
                "city": "Marilouberg",
                "state": "Maryland",
                "country": "Canada"
            },
            {
                "id": "9a33038a-b31f-44e1-a97b-fba203628c81",
                "firstName": "Helga",
                "lastName": "Hand",
                "email": "Fiona_Hartmann2@hotmail.com",
                "subscribed": true,
                "jobTitle": "Legacy Creative Specialist",
                "prefix": "Miss",
                "suffix": "DDS",
                "jobArea": "Research",
                "age": 35564,
                "keyword": "auxiliary project Vermont Tactics gold quantifying",
                "address": "7312 Kaci Club",
                "phonenumber": "(085) 060-6128 x57602",
                "city": "Lake Raegan",
                "state": "Illinois",
                "country": "Afghanistan"
            },
            {
                "id": "a758d031-49f3-458d-ae0b-19dcd9af994c",
                "firstName": "Adah",
                "lastName": "Reichel",
                "email": "Kattie_Hintz@gmail.com",
                "subscribed": true,
                "jobTitle": "Forward Directives Representative",
                "prefix": "Dr.",
                "suffix": "V",
                "jobArea": "Identity",
                "age": 72993,
                "keyword": "synthesize digital Idaho copying driver Garden",
                "address": "86376 Brook Fall",
                "phonenumber": "1-307-562-7887 x3677",
                "city": "Gibsonborough",
                "state": "West Virginia",
                "country": "Tokelau"
            },
            {
                "id": "fcf00e30-b253-4895-a638-21ce622cc191",
                "firstName": "Ceasar",
                "lastName": "Cassin",
                "email": "Mertie_Sipes22@hotmail.com",
                "subscribed": true,
                "jobTitle": "Global Data Representative",
                "prefix": "Miss",
                "suffix": "III",
                "jobArea": "Brand",
                "age": 34203,
                "keyword": "Arizona Cambridgeshire collaboration Syrian Pound communities olive",
                "address": "67679 Von Islands",
                "phonenumber": "1-234-103-7660 x3672",
                "city": "East Claireview",
                "state": "Georgia",
                "country": "Libyan Arab Jamahiriya"
            },
            {
                "id": "7a74a17c-e0cd-449c-8472-677536a628de",
                "firstName": "Jessika",
                "lastName": "Kunde",
                "email": "Reid_Gleason@yahoo.com",
                "subscribed": true,
                "jobTitle": "District Marketing Manager",
                "prefix": "Mr.",
                "suffix": "DVM",
                "jobArea": "Infrastructure",
                "age": 20939,
                "keyword": "Washington Syrian Arab Republic Towels Oklahoma JBOD Nevada",
                "address": "468 Fritsch Tunnel",
                "phonenumber": "(699) 210-0252",
                "city": "Yesenialand",
                "state": "Delaware",
                "country": "Tajikistan"
            },
            {
                "id": "483b868a-0c57-4c2c-b425-90bbede199c2",
                "firstName": "Robbie",
                "lastName": "Sipes",
                "email": "Muhammad6@hotmail.com",
                "subscribed": true,
                "jobTitle": "Future Infrastructure Consultant",
                "prefix": "Miss",
                "suffix": "V",
                "jobArea": "Mobility",
                "age": 38790,
                "keyword": "leading edge Car Borders Oklahoma bypass Mission",
                "address": "52354 Lenny Walk",
                "phonenumber": "601-585-8158 x7398",
                "city": "Windlermouth",
                "state": "South Dakota",
                "country": "Gibraltar"
            },
            {
                "id": "47029307-1086-47dc-bd4f-0bf38aaa2f6f",
                "firstName": "Jameson",
                "lastName": "Kerluke",
                "email": "Cindy.Durgan@hotmail.com",
                "subscribed": true,
                "jobTitle": "Principal Brand Officer",
                "prefix": "Miss",
                "suffix": "V",
                "jobArea": "Quality",
                "age": 89484,
                "keyword": "Practical Wooden Computer quantifying motivating strategize SDD Island",
                "address": "71019 Kiera Rue",
                "phonenumber": "506-306-9511 x4347",
                "city": "Pricebury",
                "state": "New Hampshire",
                "country": "Zambia"
            },
            {
                "id": "bc801b02-214f-4f88-a7d8-1f7a1fddcd44",
                "firstName": "Carli",
                "lastName": "Koepp",
                "email": "Jalon.Cole@gmail.com",
                "subscribed": true,
                "jobTitle": "National Identity Supervisor",
                "prefix": "Ms.",
                "suffix": "DVM",
                "jobArea": "Usability",
                "age": 32011,
                "keyword": "application homogeneous neural Personal Loan Account Practical Enterprise-wide",
                "address": "011 Daniel Fall",
                "phonenumber": "831.713.9277",
                "city": "Colliermouth",
                "state": "Montana",
                "country": "Christmas Island"
            }
        ];
        data.get = function (id) { return new Promise(function (res) { return setTimeout(function () { return res(peoples.find(function (p) { return p.id === id; })); }, 500); }); };
        data.list = function (_a) {
            var _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c, _d = _a.order, order = _d === void 0 ? 'asc' : _d, _e = _a.orderBy, orderBy = _e === void 0 ? '' : _e, _f = _a.keyword, keyword = _f === void 0 ? '' : _f;
            return new Promise(function (res) { return setTimeout(function () {
                var copy = peoples.slice(0);
                if (keyword) {
                    copy = copy.filter(function (_a) {
                        var firstName = _a.firstName, lastName = _a.lastName;
                        return ("" + firstName + lastName).toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                    });
                }
                if (order && orderBy) {
                    copy = copy.sort(function (a, b) { return ("" + a[orderBy]).localeCompare("" + b[orderBy]); });
                    if (order === 'desc') {
                        copy = copy.reverse();
                    }
                }
                copy = copy.slice(offset).slice(0, limit);
                var result = {
                    items: copy,
                    limit: limit, offset: offset,
                    total: peoples.length
                };
                console.log({ limit: limit, offset: offset, order: order, orderBy: orderBy, keyword: keyword, result: result });
                res(result);
            }, 500); });
        };
        data.remove = function (id) { return new Promise(function (res) { return setTimeout(function () { return res(peoples = peoples.filter(function (p) { return p.id !== id; })); }, 500); }); };
        data.patch = function (people) { return peoples = peoples.map(function (p) {
            if (p.id === people.id) {
                return people;
            }
            else {
                return p;
            }
        }); };
    })(data = app.data || (app.data = {})); // namespace data
})(app || (app = {})); // namespace app
/// <reference path="../data/peoples.ts"/>
var app;
/// <reference path="../data/peoples.ts"/>
(function (app) {
    var Breadcrumbs = form.Breadcrumbs, FieldType = form.FieldType, One = form.One;
    var useSnack = other.snack.useSnack;
    var Box = material.core.Box;
    var useRouter = router.useRouter;
    var useState = React.useState, useCallback = React.useCallback;
    var Fragment = React.Fragment;
    var pages;
    (function (pages) {
        var fields = [
            {
                type: FieldType.Group,
                fields: [
                    {
                        type: FieldType.Group,
                        fields: [
                            {
                                type: FieldType.Group,
                                columns: "2",
                                fields: [
                                    {
                                        type: FieldType.Component,
                                        compute: function () { return (React.createElement(Box, { display: "flex", justifyContent: "center" },
                                            React.createElement(Box, { style: {
                                                    background: "#54545447",
                                                    height: '200px',
                                                    width: '100%'
                                                } }))); }
                                    },
                                    {
                                        type: FieldType.Rating,
                                        name: 'rate'
                                    }
                                ]
                            },
                            {
                                type: FieldType.Group,
                                columns: "10",
                                fields: [
                                    {
                                        type: FieldType.Line,
                                        title: 'Профиль'
                                    },
                                    {
                                        type: FieldType.Combo,
                                        title: 'Пол',
                                        placeholder: 'Выберите один',
                                        name: 'gender',
                                        itemList: ['Male', 'Female', 'Other']
                                    },
                                    {
                                        type: FieldType.Items,
                                        title: 'Списки',
                                        placeholder: 'Выберите несколько',
                                        name: 'list',
                                        itemList: ['Blocklist', 'VIP', 'Other people']
                                    },
                                    {
                                        type: FieldType.Group,
                                        fields: [
                                            {
                                                type: FieldType.Group,
                                                columns: "9",
                                                fields: [
                                                    {
                                                        type: FieldType.Text,
                                                        outlined: false,
                                                        title: 'Кодовая фраза',
                                                        name: 'keyword',
                                                        placeholder: 'September',
                                                        isDisabled: function (obj) { return !obj.keywordEnabled; }
                                                    },
                                                ]
                                            },
                                            {
                                                type: FieldType.Group,
                                                columns: "3",
                                                fields: [
                                                    {
                                                        type: FieldType.Checkbox,
                                                        title: 'Кодовая фраза',
                                                        name: 'keywordEnabled'
                                                    },
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: FieldType.Line,
                        title: 'Общая информация'
                    },
                    {
                        name: 'firstName',
                        type: FieldType.Text,
                        title: 'Имя',
                        description: 'Felton'
                    },
                    {
                        name: 'lastName',
                        type: FieldType.Text,
                        title: 'Фамилия',
                        description: 'Cruickshank'
                    },
                    {
                        name: 'age',
                        type: FieldType.Text,
                        title: 'Возраст',
                        description: '42',
                        isInvalid: function (obj) {
                            var value = Number(obj.age);
                            if (!Number.isInteger(value)) {
                                return 'Возраст должен быть числом';
                            }
                            else if (value < 1) {
                                return 'Возраст должен быть больше 1';
                            }
                            else {
                                return null;
                            }
                        }
                    },
                    {
                        type: FieldType.Expansion,
                        title: 'Подписка',
                        description: 'Подписка на уведомления',
                        fields: [
                            {
                                type: FieldType.Switch,
                                name: 'subscribed',
                                title: 'Разрешить рассылку'
                            },
                            {
                                name: 'email',
                                type: FieldType.Text,
                                isDisabled: function (obj) { return !obj.subscribed; },
                                title: 'Почта',
                                description: 'tripolskypetr@gmail.com'
                            },
                        ]
                    },
                    {
                        type: FieldType.Group,
                        fields: [
                            {
                                type: FieldType.Group,
                                columns: '6',
                                fields: [
                                    {
                                        type: FieldType.Line,
                                        title: 'Работа'
                                    },
                                    {
                                        name: 'jobTitle',
                                        type: FieldType.Text,
                                        title: 'Должность'
                                    },
                                    {
                                        name: 'jobArea',
                                        type: FieldType.Text,
                                        title: 'Место работы'
                                    },
                                ]
                            },
                            {
                                type: FieldType.Group,
                                columns: '6',
                                fields: [
                                    {
                                        type: FieldType.Line,
                                        title: 'Домашний адрес'
                                    },
                                    {
                                        name: 'country',
                                        type: FieldType.Text,
                                        title: 'Страна'
                                    },
                                    {
                                        name: 'city',
                                        type: FieldType.Text,
                                        title: 'Город'
                                    },
                                    {
                                        name: 'state',
                                        type: FieldType.Text,
                                        title: 'Область'
                                    },
                                    {
                                        name: 'address',
                                        type: FieldType.Text,
                                        title: 'Адрес'
                                    },
                                ]
                            },
                        ]
                    },
                ]
            }
        ];
        pages.OnePage = function (_a) {
            var _b = _a.id, id = _b === void 0 ? '' : _b;
            var _c = useState(null), changedObj = _c[0], setChangedObj = _c[1];
            var snack = useSnack();
            var go = useRouter();
            var back = function () { return go('/list'); };
            var handler = function () { return app.data.get(id); };
            var change = function (obj) { return setChangedObj(obj); };
            var onSave = useCallback(function () {
                app.data.patch(changedObj);
                snack('Сохранено!');
                setChangedObj(null);
            }, [changedObj]);
            return (React.createElement(Fragment, null,
                React.createElement(Breadcrumbs, { currentTitle: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C", backwardTitle: "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439", saveDisabled: !changedObj, save: function () { return onSave(); }, back: back }),
                React.createElement(One, { fields: fields, handler: handler, change: change })));
        };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace app
/// <reference path="../data/peoples.ts"/>
var app;
/// <reference path="../data/peoples.ts"/>
(function (app) {
    var SelectionMode = form.SelectionMode, FieldType = form.FieldType, List = form.List;
    var makeStyles = material.core.makeStyles;
    var useRouter = router.useRouter;
    var pages;
    (function (pages) {
        var useStyles = makeStyles({
            root: {
                width: '100vw - 20px',
                height: 'calc(100vh - 85px)'
            }
        });
        var fields = [
            {
                name: 'id',
                type: FieldType.Text,
                title: 'Идентификатор'
            },
            {
                name: 'firstName',
                type: FieldType.Text,
                title: 'Имя'
            },
            {
                name: 'lastName',
                type: FieldType.Text,
                title: 'Фамилия'
            },
        ];
        pages.ListPage = function () {
            var classes = useStyles();
            var go = useRouter();
            var handler = function (_a) {
                var limit = _a.limit, offset = _a.offset, order = _a.order, orderBy = _a.orderBy, keyword = _a.keyword;
                return app.data.list({ limit: limit, offset: offset, order: order, orderBy: orderBy, keyword: keyword });
            };
            var select = function (items) { return console.log('select', { items: items }); };
            var remove = function (_a) {
                var id = _a.id;
                return app.data.remove(id);
            };
            var click = function (_a) {
                var id = _a.id;
                return go("/one/" + id);
            };
            return (React.createElement("div", { className: classes.root },
                React.createElement(List, { selection: SelectionMode.Single, remove: remove, handler: handler, fields: fields, click: click, select: select })));
        };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace app
var app;
(function (app) {
    var Fragment = React.Fragment;
    var _a = material.core, Typography = _a.Typography, makeStyles = _a.makeStyles;
    var useRouter = router.useRouter, Link = router.Link;
    var pages;
    (function (pages) {
        var useStyles = makeStyles(function (theme) { return ({
            adjust: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2)
            },
            line: {
                marginBottom: theme.spacing(2)
            }
        }); });
        var b = function (_a) {
            var _b = _a.children, children = _b === void 0 ? null : _b;
            return React.createElement(React.Fragment, null,
                "<",
                children,
                ">");
        };
        pages.BriefPage = function () {
            var go = useRouter();
            var classes = useStyles();
            return (React.createElement(Fragment, null,
                React.createElement(Typography, { className: classes.adjust, variant: "h4" }, "Form generator app"),
                React.createElement(Typography, { variant: "body1", className: classes.line },
                    "\u042D\u0442\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 ",
                    React.createElement("em", null, "router-tools"),
                    " \u0438 ",
                    React.createElement("em", null, "form-tools"),
                    ". \u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439"),
                React.createElement(Typography, { variant: "body", className: classes.line, component: "p" },
                    "\u0420\u043E\u0443\u0442\u0435\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430 ",
                    React.createElement("b", null, "Router"),
                    ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0432 \u043C\u0435\u0441\u0442\u0435, \u0433\u0434\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C \u0440\u043E\u0443\u0442\u0438\u043D\u0433. \u0412 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0435\u0433\u043E \u043F\u043E\u0442\u043E\u043C\u043A\u0430\u043C\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B ",
                    React.createElement("b", null, "Route"),
                    ", \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0449\u0438\u0435 \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0448\u0430\u0431\u043B\u043E\u043D\u043D\u0443\u044E \u0441\u0441\u044B\u043B\u043A\u0443 \u0438 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442. \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0438\u0437 \u0441\u0441\u044B\u043B\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u0432 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043F\u0440\u0438 \u0438\u043D\u0441\u0442\u0430\u043D\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u0420\u043E\u0443\u0442\u0435\u0440 \u043F\u0440\u043E\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0435\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0441\u044B\u043B\u043A\u0443 (",
                    React.createElement("i", null, "routerUrl"),
                    ") \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 (",
                    React.createElement("i", null, "routerGo"),
                    ")"),
                React.createElement(Typography, { variant: "body", className: classes.line, component: "p" },
                    "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0444\u043E\u0440\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 json \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 (List) \u0438 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u043E\u0432 (One). \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u044D\u0442\u043E \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u043F\u0440\u043E\u0444\u0438\u043B\u0435\u0439, \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u044D\u0442\u0430 \u0441\u0430\u043C\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u044F. \u041E\u0431\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0432\u044B\u0432\u043E\u0434\u044F\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 (handler), \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u044D\u0442\u043E \u043F\u0440\u043E\u043C\u0438\u0441 \u0441 http \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440. \u0428\u0430\u0431\u043B\u043E\u043D \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u043F\u043E\u043B\u044F\u043C\u0438 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F ",
                    React.createElement("i", null, "type"),
                    " - \u0442\u0438\u043F \u043F\u043E\u043B\u044F, ",
                    React.createElement("i", null, "name"),
                    " - \u043F\u0443\u0442\u044C \u0434\u043E \u0446\u0435\u043B\u0435\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u0430 \u0438\u0437 handler \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 lodash get, ",
                    React.createElement("i", null, "fields"),
                    " - \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432, \u0435\u0441\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0438\u043C\u0435\u0435\u0442 \u0442\u0438\u043F \u0433\u0440\u0443\u043F\u043F\u044B. \u041F\u043E\u043B\u044F \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043F\u0438\u043F\u0430\u0441\u0442\u0438\u0442\u044C \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0430."),
                React.createElement(Typography, { variant: "body", className: classes.line, component: "p" },
                    "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043C\u0435\u0436\u0434\u0443 \u0441\u0441\u044B\u043B\u043A\u0430\u043C\u0438 \u0443 \u0440\u043E\u0443\u0442\u0435\u0440\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ",
                    React.createElement(Link, { url: "/list", style: { color: 'blue', cursor: 'pointer' } }, "\u0441\u0441\u044B\u043B\u043A\u0438"),
                    " \u0438\u043B\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0445\u0443\u043A ",
                    React.createElement("a", { style: { color: 'blue', cursor: 'pointer' }, onClick: function () { return go('/list'); } }, "useRouter"))));
        };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace app
var app;
(function (app) {
    var One = form.One, FieldType = form.FieldType, Breadcrumbs = form.Breadcrumbs;
    var _a = other.snack, useSnack = _a.useSnack, SnackType = _a.SnackType, TransitionType = _a.TransitionType, VerticalAlign = _a.VerticalAlign, HorizontalAlign = _a.HorizontalAlign, TransitionDirection = _a.TransitionDirection;
    var useState = React.useState, useCallback = React.useCallback;
    var Button = material.core.Button;
    var Fragment = React.Fragment;
    var pages;
    (function (pages) {
        var fields = [
            {
                type: FieldType.Line,
                title: 'Опциональные параметры'
            },
            {
                type: FieldType.Combo,
                itemList: [
                    SnackType.Error,
                    SnackType.Info,
                    SnackType.Success,
                    SnackType.Warning,
                    SnackType.Normal,
                ],
                tr: function (v) {
                    if (v === SnackType.Error) {
                        return "Ошибка";
                    }
                    else if (v === SnackType.Info) {
                        return "Информация";
                    }
                    else if (v === SnackType.Success) {
                        return "Удачно";
                    }
                    else if (v === SnackType.Warning) {
                        return "Предупреждение";
                    }
                    else if (v === SnackType.Normal) {
                        return "Material";
                    }
                },
                name: 'type',
                title: 'Тип уведомления'
            },
            {
                type: FieldType.Combo,
                itemList: [
                    TransitionType.Grow,
                    TransitionType.Slide,
                ],
                name: 'transition',
                title: 'Тип появления'
            },
            {
                type: FieldType.Combo,
                itemList: [
                    TransitionDirection.Up,
                    TransitionDirection.Down,
                    TransitionDirection.Left,
                    TransitionDirection.Right,
                ],
                name: 'transitionDirection',
                title: 'Направление появления'
            },
            {
                type: FieldType.Combo,
                itemList: [
                    VerticalAlign.Top,
                    VerticalAlign.Bottom,
                ],
                name: 'anchorVertical',
                title: 'Вертикальный якорь'
            },
            {
                type: FieldType.Combo,
                itemList: [
                    HorizontalAlign.Left,
                    HorizontalAlign.Center,
                    HorizontalAlign.Right,
                ],
                name: 'anchorHorizontal',
                title: 'Горизонтальный якорь'
            },
            {
                type: FieldType.Text,
                name: 'timeout',
                title: 'Таймаут',
                inputType: 'number'
            },
            {
                type: FieldType.Text,
                name: 'action',
                title: 'Действие'
            },
            {
                type: FieldType.Line,
                title: 'Обязательные параметры'
            },
            {
                type: FieldType.Text,
                name: 'message',
                title: 'Сообщение',
                defaultValue: 'Привет, мир!'
            },
        ];
        pages.SnackPage = function () {
            var _a = useState(null), object = _a[0], setObject = _a[1];
            var snack = useSnack();
            var onClose = function () { return console.log('close'); };
            var onAction = function () { return console.log('action'); };
            var onClick = useCallback(function () {
                snack(object.message, __assign(__assign({}, object), { onClose: onClose, onAction: onAction }));
                // tslint:disable-next-line: no-string-literal
                window["showSnack"] = onClick;
            }, [object]);
            return (React.createElement(Fragment, null,
                React.createElement(Breadcrumbs, { currentTitle: "Snack", backwardTitle: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", saveDisabled: !object, save: function () { return onClick(); }, saveLabel: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C" }),
                React.createElement(One, { change: function (s) { return setObject(s); }, fields: fields })));
        };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace app
var app;
(function (app) {
    var Fragment = React.Fragment;
    var Button = material.core.Button;
    var DateProvider = pickers.DateProvider, useDate = pickers.useDate;
    var TimeProvider = pickers.TimeProvider, useTime = pickers.useTime;
    var pages;
    (function (pages) {
        var View = function () {
            var date = useDate();
            var time = useTime();
            var dateCallback = function () { return date().then(function (m) {
                if (m) {
                    alert(m.format('MM-DD-YYYY'));
                }
                else {
                    alert('rejected');
                }
            }); };
            var timeCallback = function () { return time().then(function (m) {
                if (m) {
                    alert(m.format('H:mm'));
                }
                else {
                    alert('rejected');
                }
            }); };
            return (React.createElement(Fragment, null,
                React.createElement(Button, { onClick: dateCallback }, "Pick date"),
                React.createElement(Button, { onClick: timeCallback }, "Pick time")));
        };
        pages.PickerPage = function () { return (React.createElement(DateProvider, null,
            React.createElement(TimeProvider, null,
                React.createElement(View, null)))); };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace pages
var app;
(function (app) {
    var useState = React.useState;
    var One = form.One, FieldType = form.FieldType;
    var Chart = chart.Chart, ChartType = chart.ChartType;
    var pages;
    (function (pages) {
        var applyData = function (options) { return (__assign({ data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            } }, options)); };
        pages.ChartPage = function () {
            var fields = [
                {
                    type: FieldType.Component,
                    style: {
                        minHeight: 'calc(100vh - 100px)',
                        position: 'sticky',
                        padding: '10px'
                    },
                    columns: '6',
                    compute: function (props) { return React.createElement(Chart, __assign({}, applyData(props))); }
                },
                {
                    type: FieldType.Group,
                    columns: '6',
                    fields: [
                        {
                            type: FieldType.Line,
                            title: 'Общие параметры'
                        },
                        {
                            type: FieldType.Checkbox,
                            name: 'redraw',
                            title: 'Полная перерисовка',
                            defaultValue: true
                        },
                        {
                            type: FieldType.Combo,
                            name: 'type',
                            itemList: [
                                ChartType.Scatter,
                                ChartType.Bubble,
                                ChartType.Polar,
                                ChartType.Radar,
                                ChartType.HorizontalBar,
                                ChartType.Bar,
                                ChartType.Pie,
                                ChartType.Doughnut,
                            ],
                            defaultValue: ChartType.Doughnut
                        },
                    ]
                },
            ];
            return React.createElement(One, { fields: fields });
        };
    })(pages = app.pages || (app.pages = {})); // namespace pages
})(app || (app = {})); // namespace app
/// <reference path="./one.tsx"/>
/// <reference path="./list.tsx"/>
/// <reference path="./brief.tsx"/>
/// <reference path="./snack.tsx"/>
/// <reference path="./picker.tsx"/>
/// <reference path="./chart.tsx"/>
/// <reference path="./components/index.ts"/>
/// <reference path="./pages/index.ts"/>
var app;
/// <reference path="./components/index.ts"/>
/// <reference path="./pages/index.ts"/>
(function (app) {
    var _a = material.core, MuiThemeProvider = _a.MuiThemeProvider, createMuiTheme = _a.createMuiTheme;
    var Scaffold = app.components.Scaffold;
    var PickerPage = app.pages.PickerPage, ChartPage = app.pages.ChartPage, BriefPage = app.pages.BriefPage, SnackPage = app.pages.SnackPage, ListPage = app.pages.ListPage, OnePage = app.pages.OnePage;
    var SnackProvider = other.snack.SnackProvider;
    var Router = router.Router, Route = router.Route;
    var _b = material.icons, LooksOne = _b.LooksOne, LooksTwo = _b.LooksTwo, Looks3 = _b.Looks3, Looks4 = _b.Looks4;
    var useRef = React.useRef;
    var theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#f48fb1'
            },
            secondary: {
                main: '#90cbf9'
            },
            text: {
                primary: "#fff",
                secondary: "rgba(255, 255, 255, 0.7)",
                disabled: "rgba(255, 255, 255, 0.5)",
                hint: "rgba(255, 255, 255, 0.5)",
                icon: "rgba(255, 255, 255, 0.5)"
            },
            background: {
                paper: "#424242",
                "default": "#212121",
                level2: "#333333",
                level1: "#212121"
            }
        }
    });
    var App = function () {
        var router = useRef(null);
        var pages = [
            { icon: LooksOne, title: "Документ со Справочником", click: function () { router.current("/list"); } },
            { icon: LooksTwo, title: "Использование other-tools", click: function () { router.current("/snack"); } },
            { icon: Looks3, title: "Использование pickers-tools", click: function () { router.current("/picker"); } },
            { icon: Looks4, title: "Использование chart-tools", click: function () { router.current("/chart"); } },
        ];
        return (React.createElement(MuiThemeProvider, { theme: theme },
            React.createElement(SnackProvider, null,
                React.createElement(Scaffold, { title: "Form generator app", pages: pages },
                    React.createElement(Router, { ref: router },
                        React.createElement(Route, { url: "/", component: BriefPage }),
                        React.createElement(Route, { url: "/list", component: ListPage }),
                        React.createElement(Route, { url: "/one/:id", component: OnePage }),
                        React.createElement(Route, { url: "/snack", component: SnackPage }),
                        React.createElement(Route, { url: "/picker", component: PickerPage }),
                        React.createElement(Route, { url: "/chart", component: ChartPage }))))));
    };
    app.main = function () {
        return ReactDOM.render(React.createElement(App, null), document.querySelector('#mount-point'));
    };
})(app || (app = {})); // namespace app
//# sourceMappingURL=form-generator-app.js.map