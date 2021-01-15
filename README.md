## React-Redux Blog

一個串接 Lidemy API 的部落格系統，註冊用戶可以檢視、上傳、編輯及刪除文章。

- [Demo](https://v61265.github.io/redux-blog/#/)
- [Lidemy API](https://github.com/Lidemy/lidemy-student-json-api-server)

### 功能

**文章系統**

- 首頁顯示最新四篇文章。
- 顯示所有文章列表。
- 點擊作者名稱顯示該作者所有文章列表（標題、發文時間以及文章內容）。
- 點擊顯示單頁文章內容（標題、發文時間以及文章內容）。
- 分頁功能，文章列表排序從新到舊，以 5 筆為一頁。
- 登入後可發佈文章，並編輯與修改自己建立的文章。

**會員系統**

- 註冊 / 登入功能。
- 由於密碼以明碼存於後端，考量資安，密碼一律預設存為「Lidemy」。
- JWT Token 機制。

### 使用技術

- 以 React 搭配 Redux、React-router 建立具備會員系統的部落格。
- 以 JSX 語法撰寫元件。
- 支援 RWD，使用 styled-components 進行排版。
- 使用 funciton component 及 hooks 。
- 以 Redux 進行狀態管理，瞭解 reducer、action 及 dispatch 作用，使用 Redux-toolkit 及 redux-thunk 標準化流程。
- react-router-dom 路由導向。
- 導入 Prettier 讓程式碼格式統一。

### 專案結構

- /src
  - /components
  - /constants
    - breakpoint.js
    - /images
  - /pages 
    - /AboutPage 
    - /AddPostPage 
    - /EditPostPage 
    - /HomePage
    - /LoginPage
      - /PostPage
      - /PostsPage
        -AuthorPostsPage.js
        -PostsPage.js
      - /RegisterPage
    - /redux
      - store.js
      - selectors.js
      - /reducers
        - postsReducer.js
        - userReducer.js
    - index.js
    - index.css
    - utills.js
    - WebAPI.js
