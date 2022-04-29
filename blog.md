---
layout: layout.njk
title: Blog of Adriel Colon-Casiano
---
<!-- {% from './_includes/_components.njk' import hero, categorytiles, card, bio, filtercard  %} -->

{{ hero({ 
    title:"The beat on the street",
    date: "February 16, 2022",
    image:"lob.jpg",
    description:"What has Adriel been up to?"
})}}

{{ filtercard({
    heading:"",
    filtercards: [
        {
            title:"The title of the first blog post",
            description:"Some really good content here. Adriel does all kinds of awesome stuff and likes to write about it.",
            link:"#",
            date:"April 28, 2022"
        },
        {
            title:"The title of the second blog post",
            description:"Some really good content here. Adriel does all kinds of awesome stuff and likes to write about it.",
            link:"#",
            date: "April 21, 2022"
        }

    ]


})
}}



