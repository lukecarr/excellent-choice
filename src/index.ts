import { read, readFile, WorkBook } from 'xlsx'
import { parseWorksheet } from './parse'
import type { ParseOptions, Question } from './types'
export * from './types'
export * from './textual'

/**
 * Parses tests (containing multi-choice questions) from an Excel WorkBook.
 *
 * @param wb The workbook to parse.
 * @param options Parse options.
 * @returns The parsed multi-choice tests.
 */
export function parseWorkbook (wb: WorkBook, options?: Partial<ParseOptions>): { [test: string]: Question[] } {
  return wb.SheetNames.filter(x => !(options?.ignore || ['Overview']).includes(x)).reduce((a, sheet) => ({ ...a, [sheet]: parseWorksheet(wb.Sheets[sheet], options) }), {})
}

/**
 * Parses tests (containing multi-choice questions) from an Excel WorkBook file (.xlsx).
 *
 * @param buf The ArrayBuffer of the .xlsx file to parse.
 * @param options Parse options.
 * @returns The parsed multi-choice tests.
 */
export function parse (buf: ArrayBuffer, options?: Partial<ParseOptions>) {
  return parseWorkbook(read(buf), options)
}

/**
 * Parses tests (containing multi-choice questions) from an Excel WorkBook file (.xlsx).
 *
 * @param filename The name of/path to the .xlsx file to parse.
 * @param options Parse options.
 * @returns The parsed multi-choice tests.
 */
export function parseFile (filename: string, options?: Partial<ParseOptions>) {
  return parseWorkbook(readFile(filename), options)
}
