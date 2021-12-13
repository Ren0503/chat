# Infinity

![infinity](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/header.png)

> Trang ứng dụng nhắn tin với M.E.R.N Stack. Repo chia làm hai phần chính:
- **server** là package chứa API cho ứng dụng sử dụng Node.js, Express, MongoDB và Socket.io
- **client** là trang giao diện ứng dụng sử dụng React, Context API và Socket.io-client.

## Chức năng

- Đăng nhập, đăng ký tài khoản.
- Nhắn tin thời gian thực.
- Bộ emoji cho nhắn tin
- Tạo group/ rời group.
- Thêm, xoá thành viên khỏi group.
- Thông báo cho người dùng khi có tin nhắn.
- Tìm kiếm người dùng.

### Server

| Plugin | README |
| ------ | ------ |
| bcryptjs | [plugins/bcryptjs/README.md](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md) |
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| express-async-handler | [plugins/express-async-handler/README.md](https://github.com/abazhenov/express-async-handler/blob/master/README.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| mongoose | [plugins/mongoose/README.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
| multer | [plugins/multer/README.md](https://github.com/expressjs/multer/blob/master/README.md)|
| morgan | [plugins/morgan/README.md](https://github.com/expressjs/morgan/blob/master/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |
| socket.io | [plugins/socket.io/README.md](https://github.com/socketio/socket.io/blob/master/Readme.md) |

### Client

| Plugin | README |
| ------ | ------ |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| chakra-ui | [plugins/chakra-ui/README.md](https://github.com/chakra-ui/chakra-ui/blob/main/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-notification-badge | [plugins/react-notification-badge/README.md](https://github.com/mobilusoss/react-notification-badge/blob/master/README.md) |
| react-router-dom | [plugins/react-router/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| socket.io-client | [plugins/socket.io-client/README.md]https://github.com/socketio/socket.io-client/blob/master/README.md) |

## Cấu trúc
    code
      ├── package.json
      │
      ├── server
      │   ├── src
      │   │   ├── config
      │   │   ├── controllers
      │   │   ├── middleware
      │   │   ├── models
      │   │   ├── routes
      │   │   ├── utils
      │   │   ├── index.js
      │   │   └── server.js
      │   │
      │   └── package.json
      │
      ├── client
      │   ├── public
      │   ├── src
      │   │   ├── assets
      │   │   ├── components
      │   │   ├── context
      │   │   ├── screens
      │   │   ├── utils
      │   │   ├── App.js
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


### Screenshots

|                                        Home                                        |                                        Profile                                        |                                        Chat                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/home.png) | ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/profile.png) | ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/chat.png) |

|                                        Create                                        |                                        Search                                        |                                        Group                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/create.png) | ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/search.png) | ![](https://github.com/Ren0503/infinity-js-chat/blob/master/client/src/assets/screenshots/group.png) |
