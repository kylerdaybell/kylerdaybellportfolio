import React, { Component } from 'react';
import '../../public/css/prism.css';
import '../../public/css/code.css';



class MysqlExample extends Component {
    render() {
        return (
            <>
                <h1 className="header">MySQL database</h1>
                <pre className="code language-plsql">{`
                    DROP DATABASE greenbeans;
                    create DATABASE greenbeans;
                    USE greenbeans;

                    CREATE TABLE USER(
                        ID int NOT NULL AUTO_INCREMENT,
                        EMAIL varchar(255) NOT NULL,
                        PASSWORD varchar(255) NOT NULL,
                        ROLE varchar(2555) NOT NULL,
                        PRIMARY KEY (ID),
                        UNIQUE KEY unique_email (EMAIL)
                    );

                    CREATE TABLE RECIPE(
                        ID int NOT NULL AUTO_INCREMENT,
                        USER_ID int NOT NULL,
                        NAME varchar(255) NOT NULL,
                        DESCRIPTION varchar(5500) NOT NULL,
                        PICTURE varchar(255),
                        PREP_TIME TIME,
                        COOK_TIME TIME,
                        INSTRUCTIONS varchar(5500) NOT NULL,
                        CATEGORY varchar(255),
                        FOREIGN KEY (USER_ID) REFERENCES USER(ID),
                        PRIMARY KEY (ID)
                    );
                    
                    CREATE UNIQUE INDEX userid_recipename
                    ON RECIPE (USER_ID,NAME);

                    CREATE TABLE INGREDIENT(
                        ID int NOT NULL AUTO_INCREMENT,
                        NAME varchar(255) NOT NULL,
                        PRIMARY KEY(ID),
                        UNIQUE KEY unique_ingredient_name (NAME)
                    );

                    CREATE TABLE RECIPETOINGREDIENT(
                        ID int NOT NULL AUTO_INCREMENT,
                        RECIPE_ID int NOT NULL,
                        INGREDIENT_ID int NOT NULL,
                        AMOUNT float NOT NULL,
                        UNIT varchar(255) NOT NULL,
                        FOREIGN KEY (RECIPE_ID) REFERENCES RECIPE(ID),
                        FOREIGN KEY (INGREDIENT_ID) REFERENCES INGREDIENT(ID),
                        PRIMARY KEY (ID)
                    );

                    CREATE UNIQUE INDEX duplicaterecipetoingredients
                    ON RECIPETOINGREDIENT (RECIPE_ID,INGREDIENT_ID);
                    `}</pre>
            </>
        );
    }
}

export default MysqlExample;