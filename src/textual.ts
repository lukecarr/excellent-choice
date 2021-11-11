import { Question } from './types'

/**
 * Converts questions into an H5P textual file.
 *
 * @param questions The questions to convert.
 * @returns The H5P textual file as a string.
 */
export function textual (questions: Question[]): string {
  let textual = ''

  for (const question of questions) {
    textual += `${question.stem}\n`

    for (const alternative of question.alternatives) {
      textual += `${alternative.correct ? '*' : ''}${alternative.text}\n`
    }
  }

  return textual
}
