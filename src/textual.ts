import { Question } from './types'

/**
 * Converts a question into a H5P textual file.
 *
 * @param question The question to convert.
 * @returns The H5P textual file as a string.
 */
function question (question: Question): string {
  let textual = `${question.stem}\n`

  for (const alternative of question.alternatives) {
    textual += `${alternative.correct ? '*' : ''}${alternative.text}\n`
  }

  return textual
}

/**
 * Converts questions into an H5P textual file.
 *
 * @param questions The questions to convert.
 * @returns The H5P textual file as a string.
 */
export function textual (questions: Question[]): string {
  let textual = ''

  for (const q of questions) {
    textual += question(q)
  }

  return textual
}
