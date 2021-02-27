# user managment for LEAN NODE

![Image of app](https://raw.githubusercontent.com/mina-adibe/user_management/master/src/listofusers.PNG)


![Image of app](https://raw.githubusercontent.com/mina-adibe/user_management/master/src/modify.PNG)




## functionality (what is already completed ):


## first page : list of users 

1. display table of users from redux .
2. delete functionality for each single recorde .
3. warnning msg when apply to delete any recorde.
4. pagination and display 10 item per page 
5. responsive 


## second page : modify user:
### filelds :
1. user name 
validation : 
a-required 
b-no spaces + warnning msg 
c-lenght of char min= 8 max = 16

2. phone numver 
validation : 
a-required 
b-numbers only 

3. Email:
validation : 
a-required 
b-email format 

4. country :
validation : 
a-required 

**Note: get the countries by using axios + useState + useEffect hooks **

5. uplading photo by dragging 
optional 

6. brief text area 
optional
validation : 
lenght of char min= 10 max = 100

## save new recordes in fake database using redux 
## save the updated database to local storage 


### comming features :
1. edit record throught redux 
2. add location fiels with custom map 
3. add search for users 


# teach and packages  :
## react : https://www.npmjs.com/package/react
## redux + react-redux  : https://www.npmjs.com/package/redux | https://www.npmjs.com/package/react-redux
## react router : https://www.npmjs.com/package/react-router
## ant design : https://www.npmjs.com/package/antd
## react hooks  
## generate short id  :https://www.npmjs.com/package/shortid





