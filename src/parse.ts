import type { WorkSheet } from 'xlsx'
import type { ParseOptions, Question, Alternative } from './types'
import { shuffle as shuffleArr } from './util'

/**
 * Extracts alternatives from a worksheet.
 *
 * @param sheet The worksheet to look for alternatives on.
 * @param cols The columns that contain alternatives.
 * @param row The row to look for alternatives on.
 * @param shuffle Whether the alternatives should be shuffled or not.
 * @returns The array of alternatives.
 */
function getAlternatives (sheet: WorkSheet, cols: string[], row: number, shuffle: boolean): Alternative[] {
  const alternatives = [] as Alternative[]

  for (const c of cols) {
    const text = sheet[`${c}${row}`]?.v || null
    if (text === null) {
      continue
    }

    alternatives.push({
      text: text.replace(/^(\*)/, ''),
      correct: text.startsWith('*')
    })
  }

  shuffle && shuffleArr(alternatives)

  return alternatives
}

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

    const alternatives = getAlternatives(sheet, options?.alternativeCols || ['C', 'D', 'E', 'F'], q, options?.shuffleAlternatives || false)

    alternatives.length > 1 && questions.push(afterQuestionParse({
      stem,
      alternatives
    }))
  }

  options?.shuffleQuestions && shuffleArr(questions)

  return questions
}
