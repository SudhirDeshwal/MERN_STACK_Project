## Project Details(server)
## Project Name: MERCH
## Developer Name : Sudhir

## Users/Role : 
•	Admin 
•	Normal user

## Concept Summary :
•	Project is created to sell products online where admin can create product category and new products and can assign categories to products. While users can check the products listed by admin using different filters such as new arrival, most seller etc.

## Functionality :
### `Register`  
•	Login
•	Sign up
•	Sign out
•	Private user who only logged on.

### `Product`
•	New Product(only admin can create)
•	Photo upload function during form create.
•	Category will be automatically load in drop down from category table during from create.
•	List and Update Products using filters.

### `Categories`
•	New Category
•	List ,Update and delete Category
•	Assign category to product as ref relationship in tables.

### `Role Management and Two Dashboards` 
•	User can sign up and check products with user dashboard
•	Admin can Manage Product Categories and Products Listing with admin dashboard

### `Product Manipulation`
•	List product
•	Search Product
•	Filter Sort Product by arrival, sold by , price range.

### `Validation`
•	Error handling on backend and front end on all fields in whole website.
•	Validation for all parameters in helpers.

## Assignment of work:
•	All functionality created by me(Sudhir) as its an individual  project for me.

## Developer Details
Name : Sudhir
Id: N01324321
Email: deshwalsudhir07@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the app in the development mode locally.<br />
Open [http://localhost:4000/api](http://localhost:4000/api) to view it in the browser.

## Deployment

Website Deploment is done at https://merchsid.herokuapp.com/

## Api End Points
These are the major end points website have , detailed explanation will be done during presentation.
### `Login and Sign up`
Login:
1.Post - https://merchsid.herokuapp.com/api/signin

Sign up:
2.Post -  https://merchsid.herokuapp.com/api/signup

Logout:
3.Get - https://merchsid.herokuapp.com/api/signout


There are more private routes as well where user can go only if he signed user for exmaple.

---Testing Purpose : I can explain drung ppt---
4.GET -  https://merchsid.herokuapp.com/api/onlyLogged/:userId
5.GET -  https://merchsid.herokuapp.com/api/user/:userId


### `Product`
1.GET -  https://merchsid.herokuapp.com/api/products
2.GET -  https://merchsid.herokuapp.com/api/products/related/:productId
3.GET -  https://merchsid.herokuapp.com/api/products/categories
4.GET -  https://merchsid.herokuapp.com/api/product/photo/:productId
5.DELETE -  https://merchsid.herokuapp.com/api/product/:productId/:userId
6.POST -  https://merchsid.herokuapp.com/api/product/create/:userId
7.GET -  https://merchsid.herokuapp.com/api/product/:productId
8.PUT -  https://merchsid.herokuapp.com/api/product/:productId/:userId

### `Category`

1.GET -  https://merchsid.herokuapp.com/api/categories
2.PUT -  https://merchsid.herokuapp.com/api/category/:categoryId/:userId
3.POST -  https://merchsid.herokuapp.com/api/category/create/:userId
4.GET -  https://merchsid.herokuapp.com/api/category/:categoryId
5.DELETE -  https://merchsid.herokuapp.com/api/category/:categoryId/:userId