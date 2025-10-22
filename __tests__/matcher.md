# 主要マッチャー (Jest互換)
| マッチャー                                                 | 用途                     |
| ----------------------------------------------------- | ---------------------- |
| `.toBe(value)`                                        | `===` による厳密比較（プリミティブ用） |
| `.toEqual(obj)`                                       | 深い比較（オブジェクト・配列用）       |
| `.toBeTruthy()` / `.toBeFalsy()`                      | 真偽値的な評価                |
| `.toBeNull()` / `.toBeDefined()` / `.toBeUndefined()` | null/undefined 判定      |
| `.toThrow([message])`                                 | 関数が例外を投げるか検証           |
| `.toMatch(/regex/)`                                   | 文字列が正規表現にマッチするか        |

---