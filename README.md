# Phase 4 Project - Super Host app

## Demo
![appDemo](client/demo/superhost.gif)


## Overview
Phase 4 project for Flatiron School's software engineering program. This is a full stack application built with React on the front end and Rails on the backend. The three models used on the backend are users, guests and rentals. Bcrypt was used for user authentication and material UI was used for styling. Images used are from Architectural Digest.                                                                                                                               

## Description
Super Host is an application for users to list their rentals. Users who are not logged in are able to see the main listings. Super hosts who sign up or log in are able to see the main listings in addition to their own listings. A super host is able to add, edit or delete their own rentals. A user is only able to edit or delete their own listings. 


## Requirements
- Ruby v2.7.4
- Rails v6.1.3
- node v16.13.2
- Postgresql v1.1
- bcrypt v3.1.7


## Installation
1. Fork and clone this repository

2. cd into the project and run 

```console 
$ bundle install
$ npm install --prefix client
```

3. To start the application

```console 
$ rails s
$ npm start --prefix client
```

4. The backend will run on http://localhost:3000

5. The frontend will run on http://localhost:4000


## Contributing
Pull requests are welcome. For any major changes, please feel free to reach out to discuss the changes. 


## License
MIT License

Copyright (c) [2022] [Janice Chan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.