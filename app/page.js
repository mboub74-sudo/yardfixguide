const guides=[
{title:"Lawn Care",desc:"Mowing, watering, fertilizing and a healthier lawn.",href:"/lawn-care",img:"https://yardyum.com/storage/app/media/22794.jpg",icon:"🌱",tone:"mint"},
{title:"Lawn Diseases",desc:"Identify and treat common lawn problems.",href:"/lawn-diseases",img:"https://myelitelawncare.com/media/images/imported/2022/08/elite-lawn-care-common-lawn-disease-07.jpg?width=1920",icon:"●",tone:"sand"},
{title:"Garden Pests",desc:"Stop pests and protect your plants.",href:"/garden-pests",img:"https://botanix.com/cdn/shop/articles/Scarabee_Japonais_e78286a5-a2d5-4abf-b5c3-4edd171f7ff4.jpg?v=1783956229",icon:"🐞",tone:"rose"},
{title:"Plant Diseases",desc:"Diagnose and treat plant diseases.",href:"/plant-diseases",img:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Powdery%20mildew%20on%20maple%20leaf.jpg?width=800",icon:"◆",tone:"lavender"},
{title:"Seasonal Care",desc:"Spring, summer, fall and winter yard tips.",href:"/seasonal-care",img:"https://ik.imagekit.io/tvlk/blog/2022/02/Keukenhof-2.jpg?tr=q-70%2Cc-at_max%2Cw-1000%2Ch-600",icon:"❄",tone:"blue"}
];
const recentPosts=[
{title:"Fall Lawn Care Checklist 2026",category:"Lawn Care",href:"/lawn-care/fall-lawn-care-checklist-2026",img:"https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=82"},
{title:"Lawn Rust in Fall: How to Identify Orange Grass and Fix It",category:"Lawn Diseases",href:"/lawn-diseases/how-to-identify-lawn-rust-in-fall",img:"https://myelitelawncare.com/media/images/imported/2022/08/elite-lawn-care-common-lawn-disease-07.jpg?width=900"},
{title:"Fall Garden Pests 2026: Yellowjackets & Boxelder Bugs",category:"Garden Pests",href:"/garden-pests/fall-garden-pests-yellowjackets-boxelder-bugs",img:"https://botanix.com/cdn/shop/articles/Scarabee_Japonais_e78286a5-a2d5-4abf-b5c3-4edd171f7ff4.jpg?v=1783956229"},
{title:"Powdery Mildew on Plants: Identify, Treat and Prevent It",category:"Plant Diseases",href:"/plant-diseases/how-to-treat-powdery-mildew-on-plants",img:"https://www.koppert.gr/content/_processed_/9/6/csm_powdery_mildew_cucumber_damage_5_koppert_41bbb6e845.jpg"},
{title:"Fall Yard Cleanup Checklist 2026",category:"Seasonal Care",href:"/seasonal-care/fall-yard-cleanup-checklist-2026",img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=82"}
];

export default function Home(){return <main className="homePage">
<section className="heroV2"><div className="leafGlow left"/><div className="leafGlow right"/><div className="heroInner">
<div className="heroCopy"><div className="eyebrow heroEye">USA &amp; CANADA YARD CARE</div><h1>Fix Your Yard.<br/><span>Grow With Confidence.</span></h1><p>Clear, practical solutions for lawn problems, garden pests, plant diseases and seasonal maintenance—without the guesswork.</p><div className="heroActions"><a className="primaryCta" href="/lawn-diseases">🍃 <b>Diagnose a Lawn Problem</b> →</a><a className="secondaryCta" href="/seasonal-care">▣ <b>Explore Seasonal Care</b></a></div><div className="heroTrust"><span>● &nbsp;Practical fixes</span><span>◒ &nbsp;Seasonal guidance</span><span>● &nbsp;USA + Canada</span></div></div>
<div className="heroPhoto"><img src="https://www.rynolawncare.com/img/uploads/1773691128987129987.png" alt="Healthy landscaped yard with green lawn and garden"/></div>
</div></section>
<section className="guideSection"><div className="guideHeading"><div><div className="eyebrow">BROWSE BY CATEGORY</div><h2>Popular Yard Care Guides</h2></div><a href="/lawn-care" className="allGuides">View All Guides →</a></div>
<div className="guideGrid">{guides.map(g=><a href={g.href} className={'guideCard '+g.tone} key={g.title}><div className="guideImage"><img src={g.img} alt={g.title}/></div><div className="guideBody"><div className="guideIcon">{g.icon}</div><span className="arrow">›</span><h3>{g.title}</h3><p>{g.desc}</p></div></a>)}</div>
</section>
<section className="recentSection"><div className="guideHeading"><div><div className="eyebrow">LATEST FROM YARDFIXGUIDE</div><h2>Recent Posts</h2></div></div><div className="recentGrid">{recentPosts.map(p=><a className="recentCard" href={p.href} key={p.href}><div className="recentImage"><img src={p.img} alt={p.title}/></div><div className="recentBody"><div className="recentCategory">{p.category}</div><h3>{p.title}</h3><span>Read the guide →</span></div></a>)}</div></section>
<section className="homeIntro"><div><div className="eyebrow">YARD PROBLEM SOLVER</div><h2>Find the cause before you treat the problem.</h2></div><p>Start with the symptom you can see, then use our focused guides to narrow down likely causes, practical fixes and prevention steps.</p><a href="/lawn-diseases">Start diagnosing →</a></section>
</main>}