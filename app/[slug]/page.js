import {notFound} from 'next/navigation';
const data={
'lawn-care':['Lawn Care','A healthier lawn starts with the basics','Practical guides for mowing, watering, fertilizing, aeration, overseeding and weed control.'],
'lawn-diseases':['Lawn Diseases','Identify lawn problems before you treat them','Learn the signs, causes and practical treatment options for common turf diseases in the USA and Canada.'],
'garden-pests':['Garden Pests','Protect your garden from common pests','Identification and control guides for grubs, aphids, Japanese beetles and other yard pests.'],
'plant-diseases':['Plant Diseases','Spot plant disease symptoms early','Understand common fungal and bacterial symptoms and what to do next.'],
'seasonal-care':['Seasonal Care','The right yard task at the right time','Spring, summer, fall and winter checklists adapted to seasonal yard needs.'],
'winterization':['Winterization','Prepare your yard for freezing weather','Protect irrigation systems, lawns, trees and outdoor containers before winter.'],
'about':['About YardFixGuide','Smarter Lawn & Garden Solutions','YardFixGuide publishes clear, practical lawn and garden guidance for homeowners across the United States and Canada.'],
'contact':['Contact','Get in touch with YardFixGuide','Questions, corrections or feedback? Contact the YardFixGuide editorial team.']
};
export default async function Page({params}){const {slug}=await params;const d=data[slug];if(!d)notFound();return <main className="article"><div className="eyebrow">YARDFIXGUIDE</div><h1>{d[0]}</h1><div className="answer"><strong>{d[1]}</strong><p>{d[2]}</p></div><h2>What you’ll find here</h2><p>Our guides focus on identifying symptoms, understanding likely causes, choosing sensible step-by-step solutions, and preventing the problem from returning.</p><h2>Built for real seasonal conditions</h2><p>Recommendations consider the very different growing seasons, heat, rainfall and freezing conditions homeowners encounter across the USA and Canada.</p></main>}