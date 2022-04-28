---
layout: layout.njk
title: Law Firm of Adriel Colon-Casiano
---
<!-- {% from './_includes/_components.njk' import hero, categorytiles, card, bio  %} -->

{{ hero({ 
    title:"Defending The People",
    date: "February 16, 2022",
    image:"capitol.jpg",
    description:"A short sentence that is really catching and informative. Adirel is super smart, kind, and is also 6'2' so basically the whole package.",
    buttons: [
        {
            text:"Contact Him",
            link:"google.com",
            arialabel:""
        }
    ]
   

})}}

{{ bio({
    title:"Adirel Colon",
    content:"A short paragraph of content that probably shouldn't exceed two really good and direct sentences. We're highlighting something, not telling the whole story here.",
    attribute:"Adirel",
    link:"/about",
    linktext:"Read His Bio",
    arialabel:"",
    image:"/img/headshot.jpg",
    imagealt:"Adirel Colon-Casiano"
})}}


{{ card({ 
    frametitle:"A Row of Cards",
    cards: [
        {
           title:"First Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"",
           arialabel:"",
           image:"/img/lob2.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        },
        {
           title:"Second Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"",
           arialabel:"",
           image:"/img/adrielonstairs.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        },
        {
           title:"Third Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page. This one is longer to show that the cards stretch to the height of the tallest card.",
           link:"",
           arialabel:"",
           image:"/img/lob.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        }
    ]
})}}



