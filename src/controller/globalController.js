let videos = [
    {
        title:"first",
        description:"Hi",
        rating:"1"
    },{
        title:"second",
        description:"2nd",
        rating:"2"
    },{
        title:"third",
        description:"3rd",
        rating:"3"
    },{
        title:"fourth",
        description:"4th",
        rating:"4"
    }

]

import AIResponse from "./AI/gemini.js"

// const AIResponse = "Hi, I'm AI!"

export const home = (req, res, next) => {
    res.render('home',{videos,AIResponse})
}

export const live2d = (req, res) => {
    res.render('live2d');
}
