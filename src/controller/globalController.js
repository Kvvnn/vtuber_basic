import AIResponse from "./AI/gemini.js"

// const AIResponse = "Hi, I'm AI!"

export const home = (req, res, next) => {
    res.render('home',{AIResponse})
}
