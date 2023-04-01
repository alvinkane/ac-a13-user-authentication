# User Authentication
一個使用Node.js + Express製作的使用者帳密驗證機制

## 功能
1. 使用者輸入帳密(目前只能輸入在資料庫的帳密)
2. 使用者輸入的帳密與資料庫資料不合會跳出提示
3. 使用者輸入對的帳密，會到welcome page


## 安裝流程：
1. 打開terminal, clone此專案
    ```
    git clone https://github.com/alvinkane/ac-a13-user-authentication.git
    ```
2. 移到存取的資料夾(ac-a13-user-authentication)
3. 安裝npm套件
    ```
    npm install
    ```
4. 安裝nodemon套件(若有可省略)
5. 在專案內創造一個env檔案，並在其中輸入MongoDB connection string
    ```
    MONGODB_ENV=mongodb+srv://<username>:<password>@<cluster>.pk4dwnp.mongodb.net/restaurant-list?retryWrites=true&w=majority
    ```
6. 匯入種子檔案
   ```
   npm run seed
   ```
7. 出現 'userSeeder done!' 代表成功
8. 執行專案
    ```
    npm run dev
    ```
9. 出現 "This is listening on http://localhost:3000" 'mongodb connected'代表成功
10. 開啟任一瀏覽器輸入This is listening on http://localhost:3000

## 初始頁面

![index](https://user-images.githubusercontent.com/118908615/229295547-ed3d9f8c-d44e-457e-8b1a-711ace0351ca.png)
## welcome頁面

![welcome](https://user-images.githubusercontent.com/118908615/229295550-9843f8bf-d376-4221-8fae-cabfd508cb29.png)

## 測試帳號密碼
Email: tony@stark.com  
Password: iamironman


## 使用版本
node: 14.16.0  
npm: 6.14.11  
nodemon: 2.0.21
