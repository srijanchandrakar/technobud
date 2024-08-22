console.log('***** topic.js')

const state= localStorage.getItem('data')

const firstele = document.getElementById('first')
const secondele= document.getElementById('second')
const introduction= document.getElementById('introduction')
const detail1= document.getElementById('detail1')
const detail2= document.getElementById('detail2')
const quote= document.getElementById('quote')
const afterimage= document.getElementById('afterimage')



if(state==='website'){
    console.log('***** here')
    firstele.innerText='webpage'
    secondele.innerText='website development'
    introduction.innerText="Introduction to Website development"
    detail1.innerText="So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website templates."
    detail2.innerText="There are so many ways to make money online. Below are several platforms you can use to find success. Keep in mind that there is no one path everyone can take. If that were the case, everyone would have a million dollars."
    quote.innerText="Grow you bussiness by digitalizing your product/service"
    afterimage.innerText="Most people start with freelancing skills they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build business."
}

console.log('****',state)