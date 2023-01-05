export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */

    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */

    showChoices(choices) {
        const choicesContainer =  document.getElementById('choices')

        choices.map(choice => {
            const button = document.createElement('button')
            button.innerText = choice
            button.className = 'button'
            choicesContainer.append(button)
        })
    }
}