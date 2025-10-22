import AIResponse from "./AI/gemini.js"

// const AIResponse = "Hi, I'm AI!"

export const home = (req, res, next) => {
    res.render('home',{AIResponse})
}

export const live2d = (req, res) => {
    res.render('live2d');
}
