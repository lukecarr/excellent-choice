import type { WorkSheet } from 'xlsx'
import type { ParseOptions, Question, Alternative } from './types'
import { shuffle } from './util'

/**
 * Parses questions from a WorkSheet from an Excel WorkBook.
 *
 * @param sheet The worksheet to parse.
 * @param options Parse options.
 * @returns The parsed questions.
 */
export function parseWorksheet (sheet: WorkSheet, options?: Partial<ParseOptions>): Question[] {
  const questions = [] as Question[]
  const afterQuestionParse = options?.afterQuestionParse || (x => x)

  for (const q of [...new Array(options?.rows || 10).keys()].map(x => x + (options?.start || 3))) {
    const stem = sheet[`${options?.stemCol || 'B'}${q}`]?.v || null
    if (stem === null) {
      continue
    }

    const alternatives = [] as Alternative[]
    for (const c of options?.alternativeCols || ['C', 'D', 'E', 'F']) {
      const text = sheet[`${c}${q}`]?.v || null
      if (text === null) {
        continue
      }

      alternatives.push({
        text: text.replace(/^(\*)/, ''),
        correct: text.startsWith('*')
      })
    }

    options?.shuffleAlternatives && shuffle(alternatives)

    alternatives.length > 1 && questions.push(afterQuestionParse({
      stem,
      alternatives
    }))
  }

  options?.shuffleQuestions && shuffle(questions)

  return questions
}
