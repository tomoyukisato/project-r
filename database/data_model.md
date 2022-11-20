## テーブル一覧
1. 番組表テーブル
2. 放送局テーブル
3. パーソナリティテーブル
4. タグテーブル
5. ジャンルテーブル
6. エリアテーブル

### programs: 番組表
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
| id |  |  |  |  |
| external_program_id |  |  |  |  |
| title |  |  |  |  |
| url |  |  |  |  |
| img |  |  |  |  |
| start_datetime |  |  |  | ftl |
| end_datetime |  |  |  | tol |



### stations: 放送局
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
| id |  |  |  |  |
| external_station_id |   |  |  |  |
| name |  |  |  |  |
| url |  |  |  |  |
| id |  |  |  |  |

### talent: タレント
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
| id |  |  |  |  |

### personalities: パーソナリティ
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
| id |  |  |  |  |
| talent_id |  |  |  |  |
| program_id |  |  |  |  |
| main_flag |  |  |  |  |


### tags: タグ
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
|  |  |  |  |  |
### genres: ジャンル
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
|  |  |  |  |  |
### areas: 地域
| 物理名 | 論理名 | type | null | 説明 |
|---|---|---|---|---|
|  |  |  |  |  |
