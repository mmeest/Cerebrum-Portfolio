# Cerebrum-Portfolio
3 manual and 3 automation software testing projects in Cerebrum Hub

## Contents
- [PROJECT 1 - Food ordering app](#project-1)
- [PROJECT 2 - Company collaboration app](#project-2)
- [PROJECT 3 - CRM app](#project-3)
- [PROJECT 4 - Registration forms](#project-4)
- [PROJECT 5 - Jira clone front-end](#project-5)
- [PROJECT 6 - Jira clone back-end](#project-6)


***

# PROJECT 1
Food ordering app

**Basics**
* Software Development
* Process (Agile and Scrum)
* Testing Process
* Agile Teamwork Fundamentals
 *Self-management Fundamentals

**Testing Techniques**
* Use Case Testing
* Checklist Based Testing
* Cross-Browser Testing

**Documentation & Reporting**
* Testing Dcoumentation
* Bug/Defect Lifecycle
* Bug Reporting


Submiting order:

```
QA tester: Martin

Environment:

    OS: Windows 10

    Browser:

    Firefox Version 114.0.1 (64 bit)

    Edge Version 114.0.1823.51 (Official build) (64-bit)

    Chrome Version 114.0.5735.134 (Official Build) (64-bit)

    Opera Version:99.0.4788.65

Date of test: 15.07.2023

 

    User can submit order on ‘Order submit’ screen by adding:

        Table number :check_mark:

        Allergen info (if client has allergies) :check_mark:

        Customer name :check_mark:

        Customer phone number :check_mark:

        Customer Email (page validates correct Email format - email@domain.com) :cross_mark: Bug report

    User sees notification about personal data collection:

        Exact text: “As Part of GDPR requirements, please complete the following fields. We will delete your information after the required 21 day holding period.” :cross_mark: Bug report * Bug report updated on version 0.0.3

    By pressing ‘Submit’ button:

        If not all mandatory fields('Table number'; ‘Name’; ‘Email’) are filled then user will not be redirected and according error messages are displayed. :check_mark:

        If all mandatory fields are filled the page is redirected to order information page :check_mark:

        * Empty orders(With 0 products) cannot be confirmed :cross_mark: Bug report

    Order conformation page displays:

        All ordered products with quantities :check_mark:

        Total price of order :check_mark:

        User can navigate back to menu :check_mark:

    After submitting order user must receive the order by email (address entered on Basket page) :check_mark:
```

Product management:
```
QA tester: Martin

Environment:

    OS: Windows 10

    Browser:

    Firefox Version 114.0.1 (64 bit)

    Edge Version 114.0.1823.51 (Official build) (64-bit)

    Chrome Version 114.0.5735.134 (Official Build) (64-bit)

    Opera Version:99.0.4788.65

Date of test: 10.07.2023
Adding products
Pre required:

    user must be logged in as Administrator

    Logged in user (as an administrator) should see ‘Add new product' button (same on 'Administration options’ page and on hamburger menu on the right top corner) :cross_mark: Bug report

    For each product there are mandatory fields, that are marked with asterisk * Those fields are: :cross_mark: Bug report

        Product name (Maximum allowed product name length is 50 characters) :cross_mark: Bug report

        'Out of stock' selection in a form of radio button (Yes/No) :cross_mark: Bug report

        Product description (Maximum allowed length of text input discussed with product owner!) :check_mark:

        Product Category - in a form of dropdown list with selection in alphabetic order: :cross_mark: Bug report

            Cold drinks :check_mark:

            Desserts :check_mark:

            Hot drinks :check_mark:

            Pasta :check_mark:

            Pizza :check_mark:

            Salads :check_mark:

            Soups :cross_mark: Bug report

            Starters :check_mark:

        Price (numeric field text input): :check_mark:

            Field accepts only numeric input ( 0 1 2 3 4 5 6 7 8 . and , ) :check_mark:

            In a good practice comma ‘,' or dot '.’ can be used for separating decimal points, but on products list decimal points are separated (in one format) with a dot. :cross_mark: Bug report

            Maximum two digits after comma :check_mark:

            When entering only one digit after comma, system will add zero '0' at the end( Example: 5.6 → 5.60 ) :cross_mark: Bug report

            Field accepts maximum of 15 characters (by current setup / point of discussion) :check_mark:

        Size - text element (Maximum allowed length of text input discussed with product owner!) :check_mark:

        Unit type in a form of dropdown list with values: :check_mark:

            serve :check_mark:

            ml :check_mark:

            cl :check_mark:

            litre :check_mark:

            kg :check_mark:

            small :check_mark:

            medium :check_mark:

            large :check_mark:

            extra large :check_mark:

                No extra values :cross_mark: Bug report

        Image - images in format '.jpg' and '.png' can be uploaded for products :check_mark:

        Allergy information in a form of dropdown in alphabetic order: :cross_mark: Bug report (list in a form of dropdown list) :cross_mark: Bug report(list not in alphabetical order)

            Celery :check_mark:

            Gluten :cross_mark: Bug report

            Eggs :cross_mark: Bug report

            Fish :check_mark:

            Lupin :check_mark:

            Milk :cross_mark: Bug report

            Molluscs :check_mark:

            Mustard :check_mark:

            Nuts :check_mark:

            Sesame :check_mark:

            Soybeans :check_mark:

            Sulphur dioxide and sulphites :check_mark:

    Optional fields for each product:

        Highlight in a form of dropdown list with selection in alphabetic order: :cross_mark: Bug report(list in a form of dropdown)

            House special :check_mark:

            Spicy :check_mark:

            Vegan :check_mark:

            Vegetarian :check_mark:

                NB! Optional selection for ‘Highlight’ that contradicts UC2 (Required) is acceptable in current workflow (Subject in discussion board)

    When all required information has added after pressing 'Enter' new product is added to the products list :cross_mark: Bug report

        Should not be possible to add two or more products with exactly same name/each product name should be unique. :cross_mark: Bug report

    Valid input appears with administrator’s entered data in product list as described in UC1
```



***

# PROJECT 2
Company collaboration app

**Deepening Knowledge**
* Exploratroy Testing
* Regression Testing
* Test Design Techniques
* Business Process Fundamentals

**Advanced Documentation**
* Test Cases and Test Scenarios

**Tools & Processes**
* Test Management Tools
* Time Reporting
* Scrum Routines

***

# PROJECT 3
CRM app

**Advanced Testing**
* API Testing with Postman
* API Testing Test Cases
* End-to-End Testing

**Techincal Knowlege**
* Network Fundamentals
* Database and SQL Fundamentals

**Teamwork Skills
* Team Communication and Conflict Management
* Constructive feedback
* Scrum Routines

***

# Project 4
Registration forms

**Foundations**
* UI Testing Automation Fundamentals
* Technical Workspace for Automation QA
* Cypress Basics
* HTML and CSS Basics
* Git WorkFlow
* GitHub

**Project Management**
* Self-management
* Time Reporting

***

# Project 5
Jira clone front-end

**Advanced Automation**
* Advanced Automation with Cypress
* Automation Test Cases
* Page Object Model Approach (POM)

**Programming Knowlege**
* JavaScript Basics

**Project Management**
* Self-management
* Problem-solving

***

# Project 6
Jira clone back-end

**API Automation**
* API Testing Automation
* API Testing Automation with Postman
* API Testing Automation Documentation

**Project Management**
* Self-management
* Time Reporting
* Problem-solving
