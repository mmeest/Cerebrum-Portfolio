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


Exploratory testing notes in Google Chrome
```
Login Page:

    Email field accepts valid format email(checks for @ and registered email)

    Email field does not accept code input

    Email field does not accept not valid symbols(: ; < > and so on)

    Email field and Password field both must be filled

    Password field checks for registered users

    Password field does not accept code for input

    Too many wrong sign-in attempts will put user idle for 5 minutes

    With valid email AND password users can log in

Logged in:

    Logged in user should be taken to ‘Home page’ - on current setup user will be directed on directory page after logging in.

Logged in - Menu:

    Menu bar should appear by default on top of the screen(currently it’s on the bottom of the page at 100% and above zoom). Only when page zoom level in browser is below 100% menu bar is displayed on top of the page.

Logged in - Home:

    Discöver - wrongly spelled text on top of the page(should be Discover)

    Directory - button on page body takes user to directory(same as bottom menu directory)

    My profile - button takes user to profile page(same as bottom menu profile)

    Happy place - takes logged in user to weird bug page that should be reported (so called ‘Easter egg’)

Logged in - Directory:

    Dicectory - spelling mistake in the name of the page(should be ‘Directory’)

    *User photos - reused photos for different users ?

    Filters menu always displayed - there is no option to hide filters sidebar. By default filters sidebar should be hidden.

    When clicking ‘Filters’ icon menu bar will be(sent back) hidden behind user profiles!? By clicking ‘Apply’ button on filters sidebar menu will be brought back in front once again.

    Number of filtered results - when filtering users the number should be displayed of the actual result.

    Sorting icons for 3 options(by 3 selections: ‘First name’; ‘Last name’; ‘Office’) - Ascending; Descending; Off. When displaying selection ascending next to selection should be displayed down arrow - 
    firefox_2023-07-25_21-31-36.png

    . And with descending option should be displayed up arrow - 
    firefox_2023-07-25_21-31-12.png

     .(Currently on ascending and descending selection will not display any icons. Only off selection displays up/down arrow - 
    firefox_2023-07-25_21-30-55.png

    )

    Sorting by ‘last name’ should be only 2 options - on current setup there are 3 options: Ascending; Descending; Off. Off selection is an excess because users in directory are listed already by default by their last name.

    Icons descriptions - when hovering over icons on the page short descriptions should appear(Flag ; Filter ; Sorting ; Email ; Phone call)

    Filter by - Apply button - Apply button is unused. By selecting different filters results are displayed without the need to use Apply button.

    Directory will display 10 users by default

    When selecting filters - for example all available countries in application(Estonia; US; UK) - all results will be displayed on one page(no pagination).

    It’s impossible to browse more than 10 first users without setting any filters or sorting(or select how many users displayed on one page)

Logged in - Directory - Modal window

    No scroll bar on modal window - when clicking on any user name, modal window will pop up but user can read only info that fits on modal window frame. Info beyond that is unaccessible because there is no option to scroll up or down.

    < - sign in modal popup window - when clicking on any user name, modal window will pop up. There are 6 icons: Email; Call; Chat; Linkedin; Bio link; Org chart. There is small '<' sign between Linkedin and Bio link

    *Bio link unused - when clicking on any user name, modal window will pop up. By selecting ‘Bio link’ does not take anywhere or does not display any info. Bug or data not inserted?

    Modal window - Edit user - Pronoun. When open up modal window of any user in directory and clicking ‘Edit’ button on bottom of modal window, ‘Edit user' page is displayed. When selecting drop down next to ‘Pronoun’ there is extra selection - ‘Ze/hir’.

Logged in - Profile:

    Pfefix - misspelling in edit profile form. Should be Prefix

    Birthday input - missing description. At the moment displayed: ‘//to-do: add description later’

    Birthday input - users can enter upcoming dates as their day of birth

    Country input - should be drop down list of available countries. On current set up it is text input field, where users can write anything.

    Notify me using input - At the moment it’s set up as radio button, so users can select only one option(Email or Phone). There should be available to select multiple notification channels.

    Bio - text input field should be multiline. Currently it is a one line input.

    Skills selection with radio button - should be with checkbox. With radio button selection every user can be registered with only one skill.

Logged in - Log out:

    Log Out button will take user to ‘Login’ page

    After logging out pressing ‘Back’ button will take user back to logged in page
```

Example Test Case:

| Test case ID | LI001 - Login page 1 |
| - | - |
| Description | Check that system behaves correctly when correct username and password are given |
| Precondition | Login page of ‘Company Collaboration Application’ v.1.0.3 opened in browser: |
| Test data | **Username/Email:** team6_user@email.com **Password:** user |
| Test steps |  1.  Open login page 2. Enter correct username to the username field 3. Enter correct password to the password field 4. Click login button |
| Expected result | 1. Login page displayed on browser 2. Username displayed on username field 3. Password in form of dots displayed on password field 4. Page is redirected to ‘Home’ page. User is logged in, no error message is shown |


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
