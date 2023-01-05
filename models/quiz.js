// @ts-check
import { Question } from "./question.js"

export class Quiz {

    questionIndex = 0
    score = 0

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions) {
        this.questions = questions
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @returns {Question} the question found
     */

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    /**
     * 
     * @param {string} answer some text
     */

    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++
    }
}