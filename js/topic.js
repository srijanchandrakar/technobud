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
    firstele.innerText='Website'
    secondele.innerText='Website Development'
    introduction.innerText="Introduction to Website development"
    detail1.innerText="If you have not developed a website for your business yet then you are missing the online visibility you deserve and your competitors are stealing your leads by creating a website for their business.With a business website, you can show your products and services to your online audience and get their contact details when they visit your website to find out the service you offer."
    detail2.innerText="Your website is an online store/address of your business where your buyers can go and check your services and contact you even if you are sleeping. You will be able to get the data they have provided on your website and you can contact them later to know what services or products they are looking for. This is one of the most important benefits of having a website for your business"
    quote.innerText="Grow you bussiness by digitalizing your product/service"
    afterimage.innerText="technobud knows how to create a user-friendly website that converts well. technobud Technologies has a team of expert website developers, graphic designers, content writers and SEO experts who can work together to make your website user and search-engine friendly."
}
else if(state==='software'){
    firstele.innerText='CustomSoftware '
    secondele.innerText='Custom Software Development'
    introduction.innerText="Introduction to Custom Software Development"
    detail1.innerText="Custom software development crafts technology solutions to precisely fit the distinctive needs of businesses. This bespoke approach, different from generic off-the-shelf software, is meticulously designed to address the specific challenges and requirements of your business. It provides unmatched flexibility and efficiency, leading to a more effective software experience tailored to your needs."
    detail2.innerText="Our approach is geared towards catalyzing growth across various industries. Opting for our services translates into high-quality software development that is cost-effective due to flexible models, thereby boosting your return on investment (ROI) and enhancing the overall user experience."
    quote.innerText="Elevating Your Business with Custom Software Development Services"
    afterimage.innerText="In the dynamic and fast-evolving digital landscape of today, businesses need specialized solutions to maintain their competitive edge and operational efficiency. Our comprehensive array of custom software development services is designed to meet these varied demands. Ranging from initial consulting to the final stages of development and integration, we provide an extensive suite of services to convert your unique challenges into innovative custom software solutions."
}
else if(state==='mobile'){
    firstele.innerText='MobileApp'
    secondele.innerText="Mobile App Development"
    introduction.innerText="Introduction to Mobile App Development"
    detail1.innerText="The excellent services we have established for our clients are continually improving. Development, integration, and administration of mobile software applications are all a part of what we do. We constantly appreciate the understanding and strong relationship between technobud and clients to produce the best potential outcomes, from conception and design through delivery and ongoing support."
    detail2.innerText="By acquiring high-quality mobile apps that work across many platforms, you can serve your customers with an app that is compatible with their OS. From there, improve the convenience and speed for users when experiencing the service you provide."
    quote.innerText="THE SUPERIOR MOBILE APP DEVELOPMENT SERVICES WE OFFER"
    afterimage.innerText="We will undoubtedly deliver the best quality to corporate clients and end-users, better the target customers' experience, and bring many additional advantages to the company with the following service items."
}
else if(state==='saas'){
    firstele.innerText='SaaS'
    secondele.innerText='SaaS development'
    introduction.innerText="Introduction to Saas development"
    detail1.innerText="SaaS development refers to the process of creating and deploying software applications which are provided over the internet, hence the term Software as a Service. It eliminates the need for users to install or maintain software on individual computers, as these applications are hosted in the cloud. In 2023, the SaaS market has witnessed exponential growth, with the global revenue forecasted to exceed expectations. "
    detail2.innerText="SaaS revolutionizes the way businesses approach software investments. Gone are the days of hefty initial expenditures on software infrastructure. Instead, with SaaS, businesses can access state-of-the-art functionalities through a manageable subscription model. This not only alleviates the financial strain but also aligns costs with usage."
    quote.innerText="Discover the Premier SaaS Development Company for Your Needs"
    afterimage.innerText="As a pioneer SaaS application development company, we prioritize your business continuity and efficiency. Our applications come equipped with automatic updates, ensuring you always operate with the latest features and security enhancements without lifting a finger."
}
else if(state==='frontend'){
    firstele.innerText='Frontend'
    secondele.innerText='Frontend development'
    introduction.innerText="Introduction to Frontend development"
    detail1.innerText="Front-end development is all about crafting the user-facing side of applications or platforms. These include the user interface (UI) and user experience (UX). It's the process of designing and constructing elements on a website or application that users engage with directly via their web browsers."
    detail2.innerText="We are specialize in front-end development, creating seamless, interactive digital experiences. Our commitment to custom design and development and expertise make us a reliable partner in the digital landscape. By working together with us, your ideas turn into reality with technical excellence."
    quote.innerText="An Innovative Front-End Development Company"
    afterimage.innerText="Explore our commitment to high-quality, interactive user interfaces in front-end development services. We're excited to share how our expertise can transform your digital presence, creating seamless and interactive experiences for your users. Let's explore what we have to offer!"
}
else if(state==='backend'){
    firstele.innerText='Backend'
    secondele.innerText='Backend/ webApp development'
    introduction.innerText="Introduction to Backend development"
    detail1.innerText="The backend, the unseen part of a computer system, handles data storage and manipulation. It's the server side of an application, hidden from the user's view. A robust backend guarantees smooth application performance and resistance to high loads. It's paramount for cybersecurity and sets the stage for future app integrations."
    detail2.innerText="We concentrate on backend development services with a focus on functional core development. There’s seamless integration and optimal performance to ensure a robust infrastructure on client-side operations."
    quote.innerText="Your Reliable Backend Development Company"
    afterimage.innerText="We are your dependable partner in backend development. Our passion is to ignite innovation. We strive to help businesses to meet their goals. Experience the difference that our expertise and dedication make firsthand."
}