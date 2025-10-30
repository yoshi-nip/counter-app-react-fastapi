import { z } from "zod"

/**
 * @fileoverview
 * カウンター機能のスキーマ定義ファイル
 */
export const CounterSchema = z.object({
  value: z.number(),
})

/**
 * @typedef {z.infer<typeof CounterSchema>} Counter
 * カウンターオブジェクトのTypeScript型。
 * 主にアプリケーション全体で利用される。
 */
export type Counter = z.infer<typeof CounterSchema>
