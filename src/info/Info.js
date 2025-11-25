import self from "../img/IMG_0110.png"
import mock1 from "../img/mock1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */


export let greenColor = ["rgba(72, 189, 9, 1)"];
export let colors = ["rgb(240, 140, 45), rgba(164, 248, 119, 1)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Дарья",
    lastName: " Мелюх",
    patronymic: " Павловна",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Frontend разработчик",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: '🌎',
            text: 'Нахожусь в Минске'
        },
        {
            emoji: '📱',
            text: '+375 44 475 68 99'
        },
        {
            emoji: "📧",
            text: 'darya.meliukh@gmail.com'
        }
    ],
    socials: [
        {
            link: "https://github.com/Kalanho",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://t.me/violegrei",
            icon: "fa fa-telegram",
            label: 'Telegram'
        },


        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: [
        "Я Мелюх Дарья Павловна. Студентка 4-го курса",
        " Белорусской государственной академии связи",
        ", специальность «Информационные технологии в телекоммуникационных системах». Ищу возможность применить свои навыки программирования в реальных проектах динамичной IT-компании. Готова активно включиться в работу, быстро обучаться новому и вносить вклад в общие цели. Ответственная, легко нахожу общий язык с коллегами и получаю удовольствие от поиска решений для нетривиальных задач."],
    skills:
    {
        proficientWith: ['javascript (ES2025)', 'typescript', 'react (MobX, Redux)', 'git', 'html5', 'css3 (Sass, Bootstrap, Less, Stylus)','Кросс-браузерная и адаптивная верстка по макетам Figma, Sketch'],
        exposedTo: ['node.js']
    }
    ,
    hobbies: [
        {
            label: 'Участие в хакатонах',
        },
        {
            label: 'Codewars',
        },
        {
            label: 'Leet Code',
        },

        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Приложение на React с отоброжением информации о погоде",
            image: mock1
        }


    ]
}