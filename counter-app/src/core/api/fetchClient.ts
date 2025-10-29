import axios from "axios"

/**
 * @fileoverview 外部APIとの通信に使用するAxiosクライアント設定
 * VITE_API_URL環境変数が設定されていない場合、ローカル環境のAPI URLをフォールバックとして使用する
 */

export const fetchClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http:localhost:8000",
  headers: {"Content-Type": "application/json"}
})
