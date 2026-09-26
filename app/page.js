const guides=[
{title:"Lawn Care",desc:"Mowing, watering, fertilizing and a healthier lawn.",href:"/lawn-care",img:"https://yardyum.com/storage/app/media/22794.jpg",icon:"🌱",tone:"mint"},
{title:"Lawn Diseases",desc:"Identify and treat common lawn problems.",href:"/lawn-diseases",img:"https://myelitelawncare.com/media/images/imported/2022/08/elite-lawn-care-common-lawn-disease-07.jpg?width=1920",icon:"●",tone:"sand"},
{title:"Garden Pests",desc:"Stop pests and protect your plants.",href:"/garden-pests",img:"https://botanix.com/cdn/shop/articles/Scarabee_Japonais_e78286a5-a2d5-4abf-b5c3-4edd171f7ff4.jpg?v=1783956229",icon:"🐞",tone:"rose"},
{title:"Plant Diseases",desc:"Diagnose and treat plant diseases.",href:"/plant-diseases",img:"https://www.prot-eco.com/cdn/shop/articles/fofo_oidio_be21b9e8-1c80-4ebc-b44c-bc55f4cd8772.png?v=1749037236",icon:"◆",tone:"lavender"},
{title:"Seasonal Care",desc:"Spring, summer, fall and winter yard tips.",href:"/seasonal-care",img:"https://ik.imagekit.io/tvlk/blog/2022/02/Keukenhof-2.jpg?tr=q-70%2Cc-at_max%2Cw-1000%2Ch-600",icon:"❄",tone:"blue"}
];
export default function Home(){return <main className="homePage">
<section className="heroV2"><div className="leafGlow left"/><div className="leafGlow right"/><div className="heroInner">
<div className="heroCopy"><div className="eyebrow heroEye">USA &amp; CANADA YARD CARE</div><h1>Fix Your Yard.<br/><span>Grow With Confidence.</span></h1><p>Clear, practical solutions for lawn problems, garden pests, plant diseases and seasonal maintenance—without the guesswork.</p><div className="heroActions"><a className="primaryCta" href="/lawn-diseases">🍃 <b>Diagnose a Lawn Problem</b> →</a><a className="secondaryCta" href="/seasonal-care">▣ <b>Explore Seasonal Care</b></a></div><div className="heroTrust"><span>● &nbsp;Practical fixes</span><span>◒ &nbsp;Seasonal guidance</span><span>● &nbsp;USA + Canada</span></div></div>
<div className="heroPhoto"><img src="https://images.pexels.com/photos/589/garden-gardening-grass-lawn.jpg?auto=compress&cs=tinysrgb&w=1400" alt="Healthy landscaped yard with green lawn and garden"/></div>
</div></section>
<section className="guideSection"><div className="guideHeading"><div><div className="eyebrow">BROWSE BY CATEGORY</div><h2>Popular Yard Care Guides</h2></div><a href="/lawn-care" className="allGuides">View All Guides →</a></div>
<div className="guideGrid">{guides.map(g=><a href={g.href} className={'guideCard '+g.tone} key={g.title}><div className="guideImage"><img src={g.img} alt={g.title}/></div><div className="guideBody"><div className="guideIcon">{g.icon}</div><span className="arrow">›</span><h3>{g.title}</h3><p>{g.desc}</p></div></a>)}</div>
</section>
<section className="homeIntro"><div><div className="eyebrow">YARD PROBLEM SOLVER</div><h2>Find the cause before you treat the problem.</h2></div><p>Start with the symptom you can see, then use our focused guides to narrow down likely causes, practical fixes and prevention steps.</p><a href="/lawn-diseases">Start diagnosing →</a></section>
</main>}