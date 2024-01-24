Eosphorus
ATCC, Far EasTone

## 開發
python 版本建議為：`3.9`

### 取得專案

```bash
git clone https://github.com/heyaustin/Eosphorus.git
```

### 安裝套件

```bash
pip install -r requirements.txt
```

### 環境變數設定

執行下列python程式碼並記錄 `secret_key`
```python
from django.core.management.utils import get_random_secret_key
secret_key = get_random_secret_key()
print(secret_key)
```

建立 `.env` 檔案並加入下列變數，其中 `Django_SECRET_KEY` 為剛生成之 `secret_key`
```bash
superuser_key='mypassword'
Django_SECRET_KEY=secret_key

secret=""
client_id=""
line_token=""
line_secret=""
DEV=""
```

### 運行專案

Run DB migration
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```
Run server
```bash
python3 manage.py runserver
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:8000/
```

## 資料夾說明

- base - 主要網頁開發
  - api - api相關設定(目前網站暫時不支持RESTFUL)
  - migrations - 資料庫更新
  - template - 覆寫主要模板的前端小組件
  - models.py - 資料庫設定
  - forms.py - 覆寫django預設的表單格式
  - admin.py - 控制後台監測設定
  - urls.py - 決定url與對應的 view function
  - views.py - 網頁核心邏輯實現
- eosphorus - 後端設定
- template - 供base中template覆寫的網頁模板
- static - 靜態資源放置處
...

## 專案技術

- django v4.2.1
- pillow v10.0.0
- line-bot-sdk v3.2.0
- Bootstrap v5.1.3
- python-dotenv v0.21.0
...

## 貢獻者
- Austin
- 家宏
- Favicon: <a href="https://www.freepik.com/icon/travel_12694655#fromView=search&term=ship+red&track=ais&page=1&position=14&uuid=4d41b385-dc47-4310-b764-6c0996561c9b">Icon by Ylivdesign</a>
