import pedro1 from "./pedro-1.png"
import linkedinBanner from "./linkedin-banner.png" 
import icon1 from "./skills-icon-1.png"
import icon2 from "./skills-icon-2.png"
import icon3 from "./skills-icon-3.png"
import icon4 from "./skills-icon-4.png"
import icon5 from "./skills-icon-5.png"
import icon6 from "./skills-icon-6.png"
import icon7 from "./skills-icon-7.png"
import icon8 from "./skills-icon-8.png"
import icon9 from "./skills-icon-9.png"
import icon10 from "./skills-icon-10.png"
import pedro2 from "./pedro-2.jpg"
import educationLogo1 from "./education-1.png"
import educationLogo2 from "./education-2.png"
import educationLogo3 from "./education-3.png"
import linkedInIcon from "./linkedin.png"
import lineIcon from "./line.png"
import whatsappIcon from "./whatsapp.png"
import viberIcon from "./viber.png"
import instagramIcon from "./instagram.png"
import xIcon from "./x.png"
import emailIcon from "./email.png"
import linktreeImage1 from "./linktree-1.png"
import linktreeImage2 from "./linktree-2.png"
import linktreeImage3 from "./linktree-3.png"
import linktreeImage4 from "./linktree-4.png"
import linktreeImage5 from "./linktree-5.png"
import linktreeImage6 from "./linktree-6.png"
import linktreeImage7 from "./linktree-7.png"
import linktreeImage8 from "./linktree-8.png"
import linktreeImage9 from "./linktree-9.png"
import linktreeImage10 from "./linktree-10.png"

import hochdorfLogo from "./hochdorf.png"
import hero1Logo from "./hero-1.png"
import hero2Logo from "./hero-2.png"
import hero3Logo from "./hero-3.png"
import pgLogo from './pg-logo.PNG'
import pedro3 from './pedro-3.jpg';


// hero section 1
const section1 = () => {

    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-1";

    const bgContainer = document.createElement("div");
    bgContainer.className = "bg-containers";
    
    // Set the background image using the imported image
bgContainer.style.backgroundImage = `url(${pedro1})`;
// bgContainer.style.backgroundSize = "contain"; // Ensures the image covers the container
bgContainer.style.backgroundPosition = "50px 0"; // Centers the image

// if (window.innerWidth < 768) {
//     bgContainer.style.backgroundSize = "cover"; // Ensures the image covers the container on mobile
// } else {
//     bgContainer.style.backgroundSize = "contain"; // Ensures the image covers the container on larger screens
//     bgContainer.style.backgroundPosition = "right center"; // Centers the image
// }
bgContainer.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
// bgContainer.style.backgroundAttachment = "fixed"; // Ensures the image remains fixed in the viewport

const gradientOverlay = document.createElement("div");
gradientOverlay.className = "gradient-overlays";

bgContainer.appendChild(gradientOverlay);

    const textContainer = document.createElement("div");
textContainer.className = "text-containers";
textContainer.id = "text-container-1";
const h1 = document.createElement("h1");
h1.innerHTML = "Hey! I'm<br>Cliffton Kaewkarn";
const p = document.createElement("p");
p.innerHTML = "I'm a Web Developer<br><br>With strong fundamentals in HTML, CSS & Javascript.<br><br>I value clean code, user-friendly design, and efficient problem-solving.<br><br>Let's build something amazing together!";
const cta = document.createElement("a");
cta.href = "https://www.linkedin.com/in/cliffton-kaewkarn-5ba6b1203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app";
cta.target = "_blank";
cta.className = "ctas";
cta.innerHTML = "View My GitHub Profile";

textContainer.appendChild(h1);
textContainer.appendChild(p);
textContainer.appendChild(cta);



parentContainer.appendChild(textContainer);
parentContainer.appendChild(bgContainer);


return parentContainer;
}
const linkedInBannerSection = () => {
const parentContainer = createParentContainer("parent-container-7");
parentContainer.style.backgroundImage = `url(${linkedinBanner})`;
parentContainer.style.backgroundSize = "contain"; 
parentContainer.style.backgroundPosition = "center";
parentContainer.style.backgroundRepeat = "no-repeat";

    
    return parentContainer;
}
// section 2
const section2 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-2";

    parentContainer.style.backgroundImage = `url(${pedro3})`;
    if (window.innerWidth < 768) {
        parentContainer.style.backgroundSize = "cover";
        parentContainer.style.backgroundPosition = "center";
    
    } else {
        parentContainer.style.backgroundSize = "contain";
        parentContainer.style.backgroundPosition = "right";
    }
    parentContainer.style.backgroundRepeat = "no-repeat";
    

    const textContainer = document.createElement("div");
    textContainer.className = "text-containers";
    textContainer.id = "text-container-2";
    // const h2 = document.createElement("h2");
    // h2.innerHTML = "Who I Am & What I Do";
    const h2 = createH2Component("Who I Am & What I Do");
    const p = document.createElement("p");
    p.innerHTML = "<span class='span-bolds'>My name is Pedro Garda.</span><br>Sales Director & Consumer Goods with<br>+10 years directing market expansion in FMCG.";
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.innerHTML = "P&L Management";
    const li2 = document.createElement("li");
    li2.innerHTML = "Go-to Market Strategies";
    const li3 = document.createElement("li");
    li3.innerHTML = "Customer Metrics Assesment";
    const li4 = document.createElement("li");
    li4.innerHTML = "Team Leadership & Mentorship";

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    const expandable = document.createElement("p");
    expandable.className = "expandables";
    expandable.innerHTML = "Read more";

const expandableContainer = document.createElement("div");
expandableContainer.className = "expandable-container hidden";
// expandableContainer.setAttribute('aria-hidden', 'true');

const expandableParagraph1 = `
<p>As a highly accomplished Sales Director with over 18 years of experience in the FMCG industry, I have a proven track record of driving business growth and profitability. My expertise lies in steering business direction, leading new business development, and orchestrating strategic branding and marketing initiatives for FMCG, Retailers, Distributors, and E-commerce companies. My leadership has consistently fueled growth across these sectors.</p>
<p>In addition to my role as a Sales Director, I have extensive experience in Interim Management and Consulting. I specialize in evaluating current business positions, customer metrics, and P&L activities to ensure alignment with growth targets. My unique ability to create and innovate cutting-edge strategic plans has driven superior profitability and market expansion.</p>
<p>My leadership style is adaptive and tailored to the needs of the team. I primarily employ a delegative approach, emphasizing trust and autonomy. For apprentices, I offer clear guidance through a more directive style. As the team develops, I transition to a delegating style to encourage autonomy. With skilled members, I use a coaching approach to foster growth, and for experts, an empowering style allows them to thrive independently. This tailored approach optimizes team performance at every stage of development.</p>
<p>I have successfully overseen a team of five members directly at a leading Swiss nutrition company and directly managed an Area Sales Manager at a global food company in Hong Kong. Additionally, I have managed approximately 300 indirect distributor staff across Asia.</p>
<p>My passion lies in cultivating robust, sustainable, and mutually beneficial relationships with both internal and external stakeholders. This dedication ensures that accounts remain optimized and profitable, contributing to the overall success of the organization.</p>
<p>Whether in a full-time leadership role or as an interim manager and consultant, I am committed to driving excellence and achieving outstanding results.</p>
`;

expandableContainer.innerHTML = expandableParagraph1;



    textContainer.appendChild(h2);
    textContainer.appendChild(p);
    textContainer.appendChild(ul);
    textContainer.appendChild(expandable);
    textContainer.appendChild(expandableContainer);
    

    parentContainer.appendChild(textContainer);
    


    return parentContainer;
}

const section3 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-3";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-containers";

    const cardItem1 = createCardItem(icon1, "Strategic Branding & Growth");
    const cardItem2 = createCardItem(icon2, "P&L Growth & Financial Performance");
    const cardItem3 = createCardItem(icon3, "E-Commerce & Digital Excellence");
    const cardItem4 = createCardItem(icon4, "Brand Activation & Launches");
    const cardItem5 = createCardItem(icon5, "Senior Team Recruitment & Development");
    const cardItem6 = createCardItem(icon6, "Distributor, Partner & Agent Management");
    const cardItem7 = createCardItem(icon7, "Local & International Regulatory Compliance");
    const cardItem8 = createCardItem(icon8, "Merchandising Partnerships & Seasonality");
    const cardItem9 = createCardItem(icon9, "Route-To-Market Strategies");
    const cardItem10 = createCardItem(icon10, "Project Management Certified Agile Associate IPMA®");


    cardContainer.appendChild(cardItem1);
    cardContainer.appendChild(cardItem2);
    cardContainer.appendChild(cardItem3);
    cardContainer.appendChild(cardItem4);
    cardContainer.appendChild(cardItem5);
    cardContainer.appendChild(cardItem6);
    cardContainer.appendChild(cardItem7);
    cardContainer.appendChild(cardItem8);
    cardContainer.appendChild(cardItem9);
    cardContainer.appendChild(cardItem10);
    

    parentContainer.appendChild(cardContainer);
    

return parentContainer;
}

const createCardItem = (icon, innerHtml) => {
    const cardItem = document.createElement("div");
    cardItem.className = "card-items";

const image = document.createElement("img");
image.src = icon;

    const h3 = document.createElement("h3");
    h3.innerHTML = innerHtml;
    
    cardItem.appendChild(image);
    cardItem.appendChild(h3);

    return cardItem;
}

const section4 = () => {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = "parent-container-4";

    const img1 = document.createElement("img");
    img1.src = pedro2;
    img1.alt = "Pedro Garda";
    img1.id = "pedro-2";
    
    const heading1 = createH2Component("Career History");
    
    const experienceParentContainer = document.createElement("div");
    experienceParentContainer.className = "experience-parent-containers";
    
    const card1ExpandableContent = `   
        <ul>
            <li><strong>International Expansion:</strong> Spearheaded the international expansion of Bimbosan and Babina, successfully launching in multiple new markets including Hong Kong, Macao, Cambodia, and Greece for 2021 and 2022.</li>
            <li><strong>Project Management:</strong> Led project management initiatives for both branded and private label businesses, with clearly defined priorities and a strategic approach tailored to different projects.</li>
            <li><strong>Team Leadership:</strong> Directly managed and inspired a global team of five sales members, fostering a collaborative and high-performing environment.</li>
            <li><strong>Strategic Planning:</strong> Developed and executed aligned strategic plans to drive market penetration and brand growth across diverse regions.</li>
            <li><strong>Market Launch:</strong> Orchestrated comprehensive launch plans, ensuring seamless market entry and brand activation in new territories.</li>
            <li><strong>Cross-Functional Collaboration:</strong> Worked closely with various departments to ensure cohesive and effective implementation of strategic initiatives.</li>
            <li><strong>Performance Metrics:</strong> Monitored and analyzed key performance indicators to optimize strategies and achieve targeted growth objectives.</li>
        </ul>
        <p>My tenure at Hochdorf Swiss Nutrition AG was marked by significant achievements in market expansion, brand growth, and strategic leadership, contributing to the overall success and reputation of the company.</p>


    `;
    const card1 = createSection4CardVersion2(hochdorfLogo, "hochdorf", "Head of Sales Brand International", "Hochdorf Swiss Nutrition AG (Switzerland)", "May 2020 - July 2023", "As the Head of Sales Brand International at Hochdorf Swiss Nutrition AG, I reported directly to the CEO, leading the formulation and execution of strategic plans for the Baby Care division across regions such as China CBEC, APAC, LATAM, and EMEA. My responsibilities included managing the categories of Infant Milk and Baby Food, with a focus on the brands Bimbosan and Babina. Key achievements included:", card1ExpandableContent);

    const card2ExpandableContent = `
    <ul>
        <li><strong>P&L Improvement:</strong> Drove substantial improvements in the P&L of key countries, ensuring financial health and operational efficiency.</li>
        <li><strong>Team Management:</strong> Oversaw 25 distributors and teams, delivering meticulous training to over 300 distributor staff across Asia to enhance performance and alignment.</li>
        <li><strong>Multicultural Collaboration:</strong> Collaborated with diverse partners and stakeholders across five production sites in Switzerland, Germany, Spain, the UK, Egypt, and Turkey, managing various categories and brands within the Hero Group.</li>
        <li><strong>Retail Strategy:</strong> Designed and executed a comprehensive retail strategy, focusing on expansion across Retail, Food Service, Hospitality, E-commerce, and Global Retail Duty-Free sectors.</li>
        <li><strong>Market Expansion:</strong> Spearheaded market expansion initiatives, ensuring the brand's presence and growth in key Asian markets.</li>
        <li><strong>Stakeholder Engagement:</strong> Built and maintained strong relationships with internal and external stakeholders to drive strategic initiatives and achieve business objectives.</li>
        <li><strong>Performance Optimization:</strong> Continuously monitored and optimized performance metrics to ensure alignment with growth targets and strategic goals.</li>
    </ul>
    <p>My tenure at Hero AG was characterized by significant advancements in market expansion, financial performance, and strategic leadership, contributing to the company's success and market position.</p>

    ` 

    const card2 = createSection4CardVersion2(
        hero1Logo,
        "hero-1",
        "Sales Director (Asia Pacific)",
        "Hero AG (Hong Kong)",
        "July 2019 - May 2020",
"As the Sales Director for Asia at Hero Group, I reported directly to the Vice-President of Global Export, steering a comprehensive portfolio of responsibilities. My role extended beyond achieving targets in P&L, A&P, sales, business development, and marketing to encompass the intricate design and execution of our retail strategy. I managed various categories including Infant Milk, Baby Food, Jams, Cereal and Energy Bars, Organic Baby Food, and Juices, with a focus on brands such as Hero, Organix, Hero Baby, Schwartau, and Corny. Key achievements included:",
card2ExpandableContent

    );
    const card3ExpandableContent = `
    <p><strong>Operational Excellence:</strong> Aided the Hong Kong Office in increasing operational productivity and turnover, delivering double-digit growth.</p>
    <p><strong>Regional Growth:</strong> Took responsibility for APAC for all brands and growth, achieving significant increases: +11% for Indonesia, +66% for the Philippines, +15% for Australia, +730% for Vietnam, +58% for Cambodia, and +126% for the Maldives.</p>
    <p><strong>Brand Launch:</strong> Operated as Project Leader for the launch of the Hero Baby brand, overseeing all strategic activities including regulatory compliance, road-to-market strategies, pricing, category strategy, channel strategy, product portfolio strategy, trade, and marketing activities. Additionally, provided training to the distribution team to ensure successful market entry and brand activation.</p>
    <p>My tenure at Hero AG was marked by substantial market growth, strategic brand management, and operational excellence, contributing to the company's success and market leadership in the APAC region.</p>

    `;
const card3 = createSection4CardVersion2(
    hero2Logo,
    "hero-2",
    "Regional Sales Manager, APAC",
    "Hero AG, (Hong Kong)",
    "July 2015 - June 2019",
    "As the Regional Sales Manager for APAC at Hero AG, reporting to the Export Director, I was responsible for business delivery across APAC countries, operating from Hong Kong. I represented all brands of the Hero Group, including Hero (Jams), Hero Baby, Organix (Baby Food), Corny (Healthy Snacks), and Schwartau (Jams). Key achievements included:",
    card3ExpandableContent

);
const card4ExpandableContent = `
    <ul>
        <li><strong>Business Development:</strong> Developed business directly with retailers and indirectly with distributors, managing a €3 million portfolio.</li>
        <li><strong>Market Launch:</strong> Successfully launched the Hero Baby brand in Chile and Peru, securing placements in major modern trade accounts such as Walmart, Cencosud, Unimart, and Tottus Supermarket.</li>
        <li><strong>Strategic Planning:</strong> Implemented strategic plans to drive market penetration and brand growth across LATAM and APAC regions.</li>
        <li><strong>Stakeholder Engagement:</strong> Built and maintained strong relationships with key retailers and distributors to ensure successful market entry and sustained growth.</li>
    </ul>
    <p>My tenure at Hero AG was characterized by strategic market entry, brand growth, and effective stakeholder management, contributing to the company's success and market expansion in LATAM and APAC regions.</p>
`;

const card4 = createSection4CardVersion2(
    hero3Logo,
    "hero-3",
    "Export Key Account Manager (LATAM & APAC)",
    "Hero AG (Spain)",
    "January 2012 - June 2015",
    "As the Export Key Account Manager for LATAM and APAC at Hero AG, reporting to the Export Director, I was responsible for managing the Hero Jams and Baby Food categories, operating from Murcia, Spain. Key achievements included:",
card4ExpandableContent    
);

experienceParentContainer.appendChild(card1)
experienceParentContainer.appendChild(card2)
experienceParentContainer.appendChild(card3)
experienceParentContainer.appendChild(card4)

const relevantEarlierCareerTitle = createH2Component("Relevant Earlier Career")

const relevantEarlierCareerContainer = document.createElement("div");
relevantEarlierCareerContainer.className = "section-4-card-containers";
relevantEarlierCareerContainer.id = "relevant-earlier-career";
const relevantEarlierCareerContent = `
        <ul class="">
            <li><time datetime="2010-03">03/2010</time> - <time datetime="2011-12">12/2011</time>: SP Group: Export Business Development (ES)</li>
            <li><time datetime="2005-01">01/2005</time> - <time datetime="2009-02">02/2009</time>: Brioche Pasquier Recondo S.L.: Sales Manager / Regional KAM (ES)</li>
            <li><time datetime="2001-09">09/2001</time> - <time datetime="2004-12">12/2004</time>: Elios Shipping S.L Forwarding Agency: Sales Manager (ES)</li>
            <li><time datetime="2001-02">02/2001</time> - <time datetime="2001-08">08/2001</time>: Safetrading S.L.: Financial Advisor (ES)</li>
        </ul>
`

relevantEarlierCareerContainer.innerHTML = relevantEarlierCareerContent;



const heading2 = createH2Component("Education");

const educationCardsContainer = document.createElement("div");
educationCardsContainer.id = 'education-card-container';

const education1 = createEducationCard(educationLogo1, "<span class='span-bolds'>Degree in Business Administration</span><br>Universidad Nacional del Centro<br>Argentina<br>2000");
const education2 = createEducationCard(educationLogo2, "<span class='span-bolds'>Masters Degree in Marketing & Sales Directorship</span><br>ESIC Business School<br>Spain<br>2007");
const education3 = createEducationCard(educationLogo3, "<span class='span-bolds'>IPMA: Project Management Swiss CERTIFIED AGILE ASSOCIATE<br>IPMA®️ LEVEL D</span><br>2024");

educationCardsContainer.appendChild(education1);
educationCardsContainer.appendChild(education2);
educationCardsContainer.appendChild(education3);

parentContainer.appendChild(img1);
parentContainer.appendChild(heading1);
parentContainer.appendChild(experienceParentContainer);
parentContainer.appendChild(relevantEarlierCareerTitle);
parentContainer.appendChild(relevantEarlierCareerContainer);
parentContainer.appendChild(heading2);
parentContainer.appendChild(educationCardsContainer);


    return parentContainer;

}
// function createSection4Card(image,title, company, duration, description, bulletPoints) {
    
//     const container = document.createElement("div");
//     container.className = "section-4-card-containers";
    

//     const imgContainer = document.createElement("div");
//     imgContainer.className = "gradient-img-containers";
//     const img = document.createElement("img");
//     img.src = image;
//     img.alt = company;
//     img.ariaHidden = true;

//     const gradientOverlay = document.createElement("div");
//     gradientOverlay.className = "gradient-overlays";

//     imgContainer.appendChild(img);
//     imgContainer.appendChild(gradientOverlay);

//     const h3 = document.createElement("h3");
//     h3.innerHTML = title;

//     const p1 = document.createElement("p");
//     p1.innerHTML = company;

//     const p2 = document.createElement("p");
//     p2.innerHTML = duration;

//     const p3 = document.createElement("p");
//     p3.innerHTML = description;

//     const p4 = document.createElement("p");
//     p4.className = 'expandables';
//     p4.innerHTML = "Read more";

//     // Append the elements to the container
//     container.appendChild(imgContainer);
//     container.appendChild(h3);
//     container.appendChild(p1);
//     container.appendChild(p2);
//     container.appendChild(p3);
//     container.appendChild(p4);

    
// if (bulletPoints){
//     const ul = document.createElement("ul");
//     ul.className = 'list hidden'
//     ul.setAttribute('aria-hidden', 'true');
//     bulletPoints.forEach((point) => {
//         const li = document.createElement("li");
//         li.innerHTML = point;
//         ul.appendChild(li);
//     });
//     container.appendChild(ul);
// }

//     return container;
// }
function createSection4CardVersion2(image, id, title, company, duration, description,  expandableContent) {
    
    const container = document.createElement("div");
    container.className = "section-4-card-containers";
    container.id = id;

    const imgContainer = document.createElement("div");
    imgContainer.className = "gradient-img-containers";
    const img = document.createElement("img");
    img.src = image;
    img.alt = company;
    img.ariaHidden = true;

    const gradientOverlay = document.createElement("div");
    gradientOverlay.className = "gradient-overlays";

    imgContainer.appendChild(img);
    imgContainer.appendChild(gradientOverlay);

    const h3 = document.createElement("h3");
    h3.innerHTML = title;

    const p1 = document.createElement("p");
    p1.innerHTML = company;

    const p2 = document.createElement("p");
    p2.innerHTML = duration;

    const p3 = document.createElement("p");
    p3.innerHTML = description;

    const p4 = document.createElement("p");
    p4.className = 'expandables';
    p4.innerHTML = "Read more";

    // Append the elements to the container
    container.appendChild(imgContainer);
    container.appendChild(h3);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(p4);

const expandableContainer = document.createElement("div");
expandableContainer.className = "list hidden";
expandableContainer.setAttribute('aria-hidden', 'true');
expandableContainer.innerHTML = expandableContent;


    container.appendChild(expandableContainer);


    return container;
}




function createH2Component(innerHtml) {
    const container = document.createElement("div");
    container.className = "h2-containers";
    const h2 = document.createElement("h2");
    h2.innerHTML = innerHtml;

    container.appendChild(h2);

    return container
}
function createEducationCard(img,title) {
    const card = document.createElement("div");
    card.className = "education-cards";

    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = img;

    imgContainer.appendChild(image);
    

    const h3 = document.createElement("h3");
    h3.innerHTML = title;

    card.appendChild(imgContainer);
    card.appendChild(h3);


    return card;

}
const section5 = () => {
 const parentContainer = createParentContainer('parent-container-5');   
 const button = document.createElement("button");
 button.id = "case-studies";
 const h2 = createH2Component("Case Studies<span>+</span>");

 

 button.appendChild(h2);

 const accordionContainer = createAccordionContainer('accordion-container-1');
 accordionContainer.style.display = "none";

//  const accordionItem1 = createAccordionItem("Hochdorf Swiss Nutrition AG", "In response to the need for a three-year strategic plan for international sales at Hochdorf Swiss Nutrition, I, as the Head of Brand, collaborated with the CEO and the Board of Directors. The task involved defining five key development pillars for international sales. I repositioned the team by specialties, recruited a senior team for European Retail and identified target countries for product launches. I provided sales projections and enhanced the BABINA brand for LATAM/Macau markets. Additionally, I led an International Consultant project with 6 figures budget, to assess the launch for the Bimbosan Infant Milk brand in China, while measures were implemented to improve ROI, Advertising and Promotion (A&P) efficiency, and Cross-Border e-commerce. These efforts resulted in a significant boost in sales projections, successful penetration of the LATAM/Macau markets with the upgraded BABINA brand, and a streamlined approach to international sales. The integrated and scalable platform implemented under my leadership substantially increased ROI");
//  const accordionItem2 = createAccordionItem("Hochdorf Swiss Nutrition AG","needed to upgrade Babina / launch Bimbosan in 3 countries in <2 years. As Sales Director, upgraded Babina for Asia and RTM to HK, MC, CBD markets. Aided external agent / Marketing team to upgrade brands to premium level; registered product, formula and brand in Macau; defined 3 markets for Bimbosan Premium Infant Milk launch; adapted labels to meet local regulations and compliance; and incorporated full Brand activation with PR events and Trade Marketing activities. Succeeded in growing Babina in Macau by + 25% and Bimbosan in Vietnam, H- Kong / Cambodia by +75%. ▪ Hero AG As the Sales Director at ");
//  const accordionItem3 = createAccordionItem("Hero AG", "As the Sales Director at Hero AG, entrusted with steering the company's course in Asia (excluding China), I played a pivotal role in optimizing both the top and bottom lines. Implementing a comprehensive approach to accounts management and profit and loss (P&L) analysis, I successfully revitalized the three-year strategic plan. This initiative involved a dynamic response to identified white-spots in sales, profit, and new product launches. One of the key strategic enhancements was the professionalization of distributor management, a move that significantly augmented numeric distribution and amplified brand activation. Concurrently, I instituted a standard monthly reporting system, facilitating a more robust oversight of performance metrics. By strategically eliminating lean costs within the P&L structure, I achieved a streamlined and optimized Return on Investment (ROI). A noteworthy accomplishment was the substantial improvement in Advertising and Promotion (A&P) allocation, resulting in a remarkable boost in market share across various territories. Leveraging the STAR framework, I excelled in enhancing Integrated Distribution Network (IDN) by +35%, Sales Growth Network (SGN) by +25%, Japan (JPN) by +10%, Hong Kong (HK) by +12%, Philippines (PH) by +75%, and South Korea (SK) by +14%. In addition to my achievements at Hero AG, I have demonstrated leadership in managing key distributor relationships across Asia, such as SIMS Trading (HK), PT Pandurasa Kharisma (Ind), Sino Pacific trading (TH) among others, who deals with top international consumer brands. This experience underscores my ability to navigate complex market landscapes and contribute to the success of global enterprise");
 const accordionItem1 = createAccordionItemVersion2('Strategic Leadership and Transformative Results',caseStudy1Array)
    const accordionItem2 = createAccordionItemVersion2('Brand Transformation and Market Expansion',caseStudy2Array)
    const accordionItem3 = createAccordionItemVersion2('Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company',caseStudy3Array)
    const accordionItem4 = createAccordionItemVersion2('Expanding Market Footprint for the Baby and Infant Milk Category',caseStudy4Array)
    const accordionItem5 = createAccordionItemVersion2('Rebranding and Market Expansion for a Premium Food Brand',caseStudy5Array)
    const accordionItem6 = createAccordionItemVersion2('Integrating and Optimizing Business Operations for a Premium Organic Brand',caseStudy6Array)

 
 accordionContainer.appendChild(accordionItem1);
    accordionContainer.appendChild(accordionItem2);
    accordionContainer.appendChild(accordionItem3);
    accordionContainer.appendChild(accordionItem4);
    accordionContainer.appendChild(accordionItem5);
    accordionContainer.appendChild(accordionItem6);

    parentContainer.appendChild(button);
    parentContainer.appendChild(accordionContainer);

    return parentContainer
}
function createAccordionItemVersion2(title,array) {
const container = document.createElement("div");
container.className = "accordion-items";

const button = document.createElement("button");
button.className = "accordion-questions";
button.setAttribute("aria-expanded", "false");
button.setAttribute("aria-controls", "accordion-answers");

const h3 = document.createElement("h3");
h3.innerHTML = `${title}<span>+</span>`;

button.appendChild(h3);
container.appendChild(button);

const answerContainer = document.createElement("div");
answerContainer.className = "accordion-answers";
answerContainer.style.display = "none";    


array.forEach(section => {
    const sectionElement = createContentSection(section);
    answerContainer.appendChild(sectionElement);

    
})

container.appendChild(answerContainer);


return container;


}
const caseStudy1Array= [
    {
        title: "Strategic Leadership and Transformative Results",
        paragraphs: [
            "In my role as Head of Brand Sales in Baby Care International at a leading Swiss nutrition company, I was tasked with defining a comprehensive three-year strategic plan for the International Sales department. This plan was built on five key development pillars, each designed to drive growth and innovation."
        ]
    },
    {
        title: "Pillar 1: Strengthening the Sales Team",
        paragraphs: [
            "I spearheaded the enhancement of the sales team by recruiting specialists and building a senior team to create and validate the roadmap for e-commerce and digital transformation. This included expanding the team with a new e-commerce specialist and a senior Key Account Manager (KAM) for retail in Europe."
        ]
    },
    {
        title: "Pillar 2: Strategic Market Expansion",
        paragraphs: [
            "I identified strategic countries in Asia and Europe for launching branded products, complete with medium- and long-term sales projections. This strategic focus ensured that our market entry was well-planned and executed."
        ]
    },
    {
        title: "Pillar 3: Brand Rebranding and Expansion",
        paragraphs: [
            "I led the rebranding and upgrade of a key brand to facilitate its rollout and expansion in LATAM and Macau. This initiative was crucial for increasing brand visibility and market penetration in these regions."
        ]
    },
    {
        title: "Pillar 4: Exploring the Chinese Market",
        paragraphs: [
            "To assess the potential of launching our infant milk brand in China, I secured a $200,000 investment for a professional consultant. As a member of the steering committee, I provided strategic advice to the Board of Directors, ensuring that the road to market was well-defined and executed."
        ]
    },
    {
        title: "Pillar 5: E-commerce Optimization",
        paragraphs: [
            "I focused on improving ROI and A&P efficiency for our e-commerce operations in China and Singapore. In China, we enhanced brand leadership in Cross Border E-commerce (CBEC). In Singapore, I set up an enabler platform (I Store I Send) to operate more efficiently, gaining new customers faster with better ROI."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Team Building: Successfully placed the sales team within the agreed deadline.",
            "Market Strategy: Defined and allocated strategic countries to each KAM with clear goals and deadlines for 2022 and 2023.",
            "Consultant Report: Completed the consultant report within the deadline, leading to timely decision-making.",
            "Cost Efficiency: Achieved a 30% reduction in lean costs, allowing for increased investment in brand activation.",
            "These strategic initiatives not only strengthened our market position but also drove significant growth and operational efficiency."
        ]
    }
];
const caseStudy2Array = [
    {
        title: "Brand Transformation and Market Expansion",
        paragraphs: [
            "As Head of Sales for Brand International at a prominent Swiss nutrition company, I was tasked with upgrading Swiss Premium Brand 1 and launching Swiss Premium Brand 2 in three strategic countries within two years. This ambitious project required a meticulous approach to branding, regulatory compliance, and market activation."
        ]
    },
    {
        title: "Swiss Premium Brand 1 Upgrade",
        paragraphs: [
            "I collaborated with an external agency and the marketing team to elevate Swiss Premium Brand 1, giving it a premium look and feel tailored for the Asian market. This rebranding effort distinguished Swiss Premium Brand 1 from mainstream formulas and designs, positioning it as a high-end product. We successfully registered the product, formula, and brand in Macau, leading to a launch in 2022."
        ]
    },
    {
        title: "Swiss Premium Brand 2 Market Launch",
        paragraphs: [
            "For Swiss Premium Brand 2, I identified three strategic markets for the launch of Swiss Premium Brand 2 Premium Infant Milk: Vietnam, Hong Kong, and Cambodia. We adapted the labels to comply with local regulations and ensured full compliance. The launch was supported by comprehensive brand activation, including PR events and trade marketing activities."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Swiss Premium Brand 1: The label was fully adapted and upgraded with a premium design, resulting in a successful launch in Macau and a remarkable 25% brand growth.",
            "Swiss Premium Brand 2: Successfully launched in Vietnam, Hong Kong, and Cambodia, achieving an impressive 75% international brand growth.",
            "These strategic initiatives not only enhanced our brand presence but also drove significant market growth and customer engagement."
        ]
    }

];

const caseStudy3Array = [
    {
        title: "Case Study 3: Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company",
        paragraphs: [
            "As Sales Director for a leading global Swiss multi-brand company, I took full responsibility for the company's operations in Asia, excluding China. My mandate was to optimize both top-line and bottom-line performance by managing all accounts and the profit and loss (P&L) statement."
        ]
    },
    {
        title: "Strategic Planning and Execution",
        paragraphs: [
            "I developed and implemented a comprehensive three-year strategic plan aimed at improving both top-line and bottom-line performance. This plan focused on:",
            "Covering White Spots: Identifying and addressing gaps in sales, profit, new product launches, and distributor management.",
            "Professionalization: Enhancing distributor management professionalism to increase numeric distribution, brand activation, and standard monthly reporting.",
            "Cost Optimization: Streamlining the P&L structure by removing unnecessary costs to optimize ROI and bottom-line performance.",
            "A&P Allocation: Improving the allocation of advertising and promotion (A&P) budgets to leverage both top-line and bottom-line growth."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Through these strategic initiatives, we achieved significant increases in numeric distribution across key markets:",
            "Indonesia: +35%",
            "Singapore: +25%",
            "Japan: +10%",
            "Hong Kong: +12%",
            "Philippines: +75%",
            "South Korea: +14%",
            "These results demonstrate my ability to drive substantial growth and optimization in complex, multinational environments for a global Swiss multi-brand company."
        ]
    }
];
const caseStudy4Array = [
    {
        title: "Case Study 4: Expanding Market Footprint for the Baby and Infant Milk Category",
        paragraphs: [
            "As Sales Director for a leading global Swiss multi-brand company, I was tasked with increasing the footprint of the Baby and Infant Milk category in the region. My specific goal was to launch our premium baby food brand in Hong Kong, China, and the Philippines while doubling the business of infant milk."
        ]
    },
    {
        title: "Strategic Launch Initiatives",
        paragraphs: [
            "Hong Kong Launch: I spearheaded the launch of our premium baby food brand in Hong Kong in collaboration with a major airline. This strategic partnership significantly enhanced brand visibility.",
            "Philippines Launch: Leveraging our existing network, I successfully launched our premium baby food brand in the Philippines. This initiative not only expanded our market reach but also drove substantial sales growth."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Hong Kong: Successfully listed our baby food brand with a major airline, improving brand visibility and market penetration.",
            "Philippines: Achieved a significant 12% increase in sales across the entire country by listing our baby food brand in major retail outlets.",
            "These strategic launches demonstrate my ability to drive market expansion and sales growth for a global Swiss multi-brand company in the Baby and Infant Milk category."
        ]
    }
]
const caseStudy5Array = [
    {
        title: "Case Study 5: Rebranding and Market Expansion for a Premium Food Brand",
        paragraphs: [
            "As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating a rebranding and upgrade of our premium jam brand while coordinating between distributors and internal stakeholders to ensure project success. The goal was to increase sales and activate the brand launch in top retailers across Asia."
        ]
    },
    {
        title: "Strategic Initiatives",
        paragraphs: [
            "Project Planning: Defined comprehensive project guidelines and objectives, gathering requirements to ensure a smooth rebranding process.",
            "Task Allocation: Clearly outlined key tasks for each country and internal department to ensure aligned efforts.",
            "Execution Plan: Developed a detailed timeline, checklist, and execution plan to guide the project from start to finish.",
            "Supply Chain Management: Established supply chain timelines and priorities to accommodate changes and ensure seamless product delivery.",
            "Brand Activation: Secured and executed a new brand activation plan efficiently, registering all new products with updated labels across all APAC countries."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Indonesia: +11%",
            "Philippines: +66%",
            "Australia: +15%",
            "Vietnam: +730%",
            "Cambodia: +58%",
            "Maldives: +126%",
            "These results demonstrate my ability to drive successful rebranding efforts and market expansion, leading to substantial sales growth for a global Swiss multi-brand company."
        ]
    }
];
const caseStudy6Array = [
    {
        title: "Case Study 6: Integrating and Optimizing Business Operations for a Premium Organic Brand",
        paragraphs: [
            "As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating the business of a premium organic brand into our Hong Kong (HK) business unit and headquarters for the APAC region (HQ). This involved coordinating with teams in the UK, Switzerland, and customers across the Asia-Pacific (APAC) region."
        ]
    },
    {
        title: "Strategic Initiatives",
        paragraphs: [
            "Integration: Successfully integrated sales, supply chain, and customer management into the APAC business unit.",
            "Portfolio Optimization: Optimized the product portfolio for the APAC region based on top sellers, profit margins, shelf life, brand strategy, and local adaptations.",
            "Retailer Transition: Facilitated a smooth transition of all retailers in APAC from UK Key Account Managers (KAMs) to APAC KAMs.",
            "SKU Selection: Defined top-selling SKUs and established weighted margin criteria for SKU selection and optimization."
        ]
    },
    {
        title: "Results",
        paragraphs: [
            "Portfolio Streamlining: Reduced the portfolio from 70 SKUs to 25 core SKUs, gaining efficiencies and reducing complexity.",
            "Profitability Increase: Improved profitability per country by 15%.",
            "Timely Integration: Fully integrated accounting and the business unit within the set deadline.",
            "These results demonstrate my ability to drive successful business integration and optimization, leading to enhanced operational efficiency and profitability for a global Swiss multi-brand company."
        ]
    }
];





function createContentSection(section) {

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'content-sections';
    
    
    const h3 = document.createElement('h3');
    h3.textContent = section.title;
    sectionDiv.appendChild(h3);
    
    section.paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        sectionDiv.appendChild(p);
    });
    
    



    return sectionDiv;
}




function createParentContainer(id) {
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-containers";
    parentContainer.id = id;

    return parentContainer;
}
function createAccordionContainer(id) {
    const accordionContainer = document.createElement("div");
    accordionContainer.className = "accordion-containers";
    accordionContainer.id = id;

    return accordionContainer;
}


function createAccordionItem(title, content) {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-items";

        const button = document.createElement("button");
        button.className = "accordion-questions";
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "accordion-answers");
    
        const h3 = document.createElement("h3");
        h3.innerHTML = title;
    
        button.appendChild(h3);
    
        
        // button.addEventListener("click", () => {
        //     const isExpanded = button.getAttribute("aria-expanded") === "true";
        //     button.setAttribute("aria-expanded", !isExpanded);
        //     p.style.display = isExpanded ? "none" : "flex";
        // });
            

    const p = document.createElement("p");
    p.className = "accordion-answers";
    p.innerHTML = content;
    p.style.display = "none";

    accordionItem.appendChild(button);
    accordionItem.appendChild(p);

    return accordionItem;
}

const section6 = () => {
    const parentContainer = createParentContainer('parent-container-6');
    const img1 = document.createElement("img");
    img1.src = pedro2;
    const h2 = document.createElement("h2");
    h2.innerHTML = "CK @cliffykaewkarn";
    const p = document.createElement("p");
    p.innerHTML = "Web Developer | Digital Nomads Thailand | Community & Business Developer | Meditation & Fitness | Matcha Lover";

    const socialsContainer = createSocialsComponent(socialsArray);
    const linkTreeContainer = createLinkTrreeComponent(linkTreeArray);


    parentContainer.appendChild(img1);
    parentContainer.appendChild(h2);
    parentContainer.appendChild(p);
    parentContainer.appendChild(socialsContainer);
    parentContainer.appendChild(linkTreeContainer);
    
    return parentContainer;
}    
const socialsArray = [
    { icon: linkedInIcon, link: "https://www.linkedin.com/in/cliffton-kaewkarn-5ba6b1203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", alt: "LinkedIn" },
    { icon: lineIcon, link: "https://line.me/ti/p/K6b7kw42yF", alt: "Twitter" },
    { icon: whatsappIcon, link: "https://api.whatsapp.com/send?phone=66842531557", alt: "Instagram" },
    // { icon: viberIcon, link: "https://www.facebook.com/pedrogarda/", alt: "Facebook" },
    { icon: emailIcon, link: "mailto:sales@phanganist.com", alt: "Email" },
    { icon: instagramIcon, link: "https://www.instagram.com/cliffykaewkarn?igsh=MWpyZDRtcjMyYnplNQ%3D%3D&utm_source=qr", alt: "Instagram" },
    // { icon: xIcon, link: "]https://x.com/Peterg12933591", alt: "x / twitter" },

    
];

function createSocialsComponent(array) {
    const socialsContainer = document.createElement("div");
    socialsContainer.className = "socials-containers";

    array.forEach((social) => {
        const wrapper = document.createElement("div");
        wrapper.className = "socials-wrapper";
        const anchor = document.createElement("a");
        anchor.href = social.link;
        anchor.target = "_blank";
    
        const img = document.createElement("img");
        img.src = social.icon;
        img.alt = social.alt;
        
        anchor.appendChild(img);
        wrapper.appendChild(anchor);
        socialsContainer.appendChild(wrapper);
    });

    return socialsContainer;
}
const linkTreeArray = [
    {icon: linktreeImage1, link: "https://ck-js.github.io/Nutranation/", text: "German Fitness & Nutrition"},
    {icon: linktreeImage2, link: "https://ck-js.github.io/Pedro-G/", text: "Swiss FMCG Consulting & Advisory"},
    {icon: linktreeImage3, link: "https://ck-js.github.io/DKC-Biotech/", text: "UK / Thai Biotech & Health"},
    {icon: linktreeImage4, link: "https://pureorigincoffeelab.com", text: "Laos / Thailand Coffee Import & Export"},
    {icon: linktreeImage5, link: "https://www.glowonflow.com", text: "Thailand Spa & Beauty"},
    {icon: linktreeImage6, link: "https://ck-js.github.io/Sendatradie-Task-Manager/", text: "React Task Manager App"},    
    {icon: linktreeImage7, link: "https://www.phanganist.com", text: "Thailand Travel & Events"},
    {icon: linktreeImage8, link: "https://www.facebook.com/groups/thailanddigitalnomads/?ref=share_group_link", text: "The largest community of Digital Nomads in Thailand"},
    {icon: linktreeImage9, link: "https://www.instagram.com/koh.samui.thailand?igsh=MXV5NTZuZnJqMnFjcw==", text: "Grow & Promote your business on Koh Samui"},
    {icon: linktreeImage10, link: "https://www.instagram.com/koh.phangan.thailand?igsh=MW5tb2M5aGhneWhnNg==", text: "Grow & Promote your business on Koh Phangan"},

]
function createLinkTrreeComponent(array) {
    const linkTreeContainer = document.createElement("div");
    linkTreeContainer.className = "link-tree-containers";

    array.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.className = "link-tree-wrappers";
        const anchor = document.createElement("a");
        anchor.href = item.link;
        anchor.target = "_blank";
    
const img = document.createElement("img");
img.src = item.icon;
img.ariaHidden = true;

        
const h4 = document.createElement("h4");
h4.innerHTML = item.text;

anchor.appendChild(img);    
anchor.appendChild(h4);
        
        wrapper.appendChild(anchor);
        linkTreeContainer.appendChild(wrapper);
    });

    return linkTreeContainer;
}

const onPageLoadScreen = () => {
const parentContainer = document.createElement("div");
parentContainer.id = "loading-screen";
parentContainer.setAttribute("aria-label", "Loading screen");
    parentContainer.setAttribute("role", "alert");

const img = document.createElement("img");
img.src = pgLogo;
img.alt = "Pedro Garda logo loading screen with dark gray background";

parentContainer.appendChild(img);


return parentContainer;

}









export { section1, section2, section3, section4 , section5,
section6, linkedInBannerSection, onPageLoadScreen
};
