/**
 * A multi-choice question's option.
 */
 export type Alternative = {
  /**
   * The alternative's text contents.
   */
  text: string
  /**
   * Whether the alternative is correct or incorrect.
   */
  correct: boolean
}

/**
 * A multi-choice question with a stem (question text) and alternatives (options).
 */
export type Question = {
  /**
   * The question's stem.
   */
  stem: string
  /**
   * The question's alternatives.
   */
  alternatives: Alternative[]
}

/**
 * Options to pass to the test parser functions (`parse` and `parseFile`)
 */
export type ParseOptions = {
  /**
   * The row number to start looking for questions on.
   */
  start: number
  /**
   * The number of questions that each sheet can contain.
   */
  rows: number
  /**
   * Sheetnames to exclude from the parsing.
   */
  ignore: string[]
  /**
   * The column that the question stem is found in.
   */
  stemCol: string
  /**
   * The columns that the question alternatives are found in.
   */
  alternativeCols: string[]
  /**
   * A function that allows you to transform a question after it's parsed.
   */
  afterQuestionParse: (question: Question) => Question
  /**
   * Should the questions be shuffled?
   */
  shuffleQuestions: boolean
  /**
   * Should each question's alternatives be shuffled?
   */
  shuffleAlternatives: boolean
}
