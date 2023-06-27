const quotes = [
    {
        quote: "친구란 무엇인가? 두 개의 몸에 깃든 하나의 영혼이다.",
        author: "Aristotle",
    },
    {
        quote: "인생은 거짓된 상황의 끝없는 연속이다.",
        author: "Thornton Wilder",
    },
    {
        quote: "모든것을 용서받은 젊음은 스스로 아무것도 용서하지 않는다. 스스로 모든 것을 용서하는 노년기는 아무것도 용서받지 못한다.",
        author: "George Bernard Shaw",
    },
    {
        quote: "제자가 계속 제자로만 남는다면 스승에 대한 고약한 보답이다.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "성공은 중요한 생일이 다가왔는데 당신은 전과 똑같다는 사실을 발견하는 것이다.",
        author: "Audrey Hepburn",
    },
    {
        quote: "내가 책을 읽을 때 눈으로만 읽는 것 같지만 가끔씩 나에게 의미가 있는 대목, 어쩌면 한 구절만이라도 우연히 발견하면 책은 나의 일부가 된다.",
        author: "William Somerset Maugham",
    },
    {
        quote: "인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
        author: "Jean Paul Richter",
    },
    {
        quote: "미래는 여기 있다. 아직 널리 퍼지지 않았을 뿐이다.",
        author: "William Gibson",
    },
    {
        quote: "도전을 받아들여라. 그러면 승리의 쾌감을 맛볼 지도 모른다.",
        author: "George S. Patton",
    },
    {
        quote: "행동이 비열하고 하찮다면 그 정신이 자랑스럽고 의로울 수 없습니다. 사람의 행동이야말로 그의 정신이기 때문입니다.",
        author: "Demosthenes",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;