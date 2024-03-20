# test-brand

## Features
- Express JS
- Sequelize (ORM)

## Installation & Running Project

### Step 1: Install package modules
        
    npm install

### Step 2: Environment configuration
        
    change database name, username and password on .env

### Step 3: Run migration
        
    npm run migrate

### Step 5: Run application
    
    npm run dev

### Step 5: Run test
    
    npm run test

### API
    
    1. [POST] /register => this endpoint will create new user
   
    2. [POST] /login => this endpoint will get token
   
    3. [POST] /brand => this endpoint will create brand

    4. [POST] /switch-brand => this endpoint will switch or create permission for user brand

    5. [GET] /brands => this endpoint will get list brand
   
    6. [POST] /collection => this endpoint will create collection 
   
    7. [GET] /collection => this endpoint will get collection by brand id

### Postman Collection: https://www.postman.com/grey-shuttle-7103/workspace/grey-shuttle-7103-s-public-workspace/collection/4835843-f3ca6b31-ba86-4760-9fcc-bcbb11bdc7fe?action=share&creator=4835843

## License

[anangnovriadi](https://github.com/anangnovriadi)