

# Project Documentation

## Table of Contents
1. Basic Information
2. About the Website/Project
3.Steps on how to use the Primero1 web and android app
4. Description of Files and Folders
5. Design Layout of Website/Project
6. Developers
7. Important Points to be Noted
8. Answers to Few Questions
9. Credits

## Basic Information

* Project Name - **Primero1 (Sugarizer Primero)**.
* Organisation - **Sugar Labs**.
* Developer - **Iqra Muhammad**.
* Project Mentors - **Samson Goddy, Caryl Bigehnio, Perrie Fiedels**.
* As part of - **Google Summer Of Code(GSOC) 2018**

## About the Project

### Introduction
This repository contains the code for the primero version of sugarizer (https://github.com/iqraceme/Primero1). This repository code base was used for the development of the GSOC 2018 project **Primero1** under the organization **Sugar Labs**. The changes made during the **GSOC** period can be viewed at [https://github.com/iqraceme/Primero1/]. The repository of the original sugarizer website is located at [https://github.com/sugarlabs/sugarizer]. The work during **GSOC** was done in the repository [https://github.com/iqraceme/Primero1/]. A live preview of the website is hosted using can be viewed at [http://iqragsoc.com/iqragsoc.com/primero/]. Do check out the code! 

### Major Services
We have the following major features in Primero1:
1. Primero Animated Loader
2. Animated background in homeview
3. Colored icons of all activities
4. Colors added to specific activities
5. Yellow and Green dropdowns for each activity
6. New Audio based math sticks activity added to primero web version
7. Primero android app
8. Primero Amazon Kindle app
9. Primero web app
10. All the web, android and amazon apps made mobile responsive for all screen sizes.
11. Certain features of some activities removed and adjusted for small children
12. Extensive documentation of the project

### Internal URLs
All internal URLs are referenced through absolute paths and not relative paths.

### Languages and Technologies
HTML
CSS
Javascript

### Libraries used
All libraries, dependencies and license related information is available in the **LicenseInformation.txt** file in root directory.


### Loader
The loader screen is enabled for:
1. Safari
2. Chrome
3. Opera
4. Firefox
5. Edge
6. Internet Explorer
7. Small devices browsers like on Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile
#### Note
To reduce animations, we disabled the loader for all the other browsers.

### Font:
The font being used is the Google font, Varela round. When we call the font sheet directly, it is not properly rendered on certain browsers, so we hosted the required font sheets in the **fonts** folder itself. For more details, please refer to the  **How to add/change new font?** subsection in the **Answers to few questions** section.

## Description of Files and Folders

### Assets folder:
This folder contains all image assets, SVG assets and any other assets.



### Root folder:
This will contain:
1. All html pages
2. .htaccess file
3. README.md file 
4. LicenseInformation.txt
5. sitemap.txt file
6. documentation.md file
7. Other folders

### css folder:
This folder contains all CSS files.

### js folder:
This folder contains all Javascript files.

###  folder:
This folder contains all fonts related files.

### press folder:
This folder contains all press related information of Sugar Labs.

### en_US folder:
This folder contains profile.md file which contains the information of all Sugar Labs contributors.

### Remaining folders:
All the remaining folders are as per Jekyll structure.

## Design Layout of Website/Project

The following pages share a similar design:
**index.html


The following pages share a similar design:
**parents.html
school-administrators.html
students.html
sugar-for-raspbian.html
sugar-lesson-plans.html
sugar-stories.html**

The relevant pages can be checked to adopt a similar design.

## Developers

### Code and Contribution
The code has been restructured, unnecessary code has been removed, comments were added wherever required, proper indentation was provided, and simple names were used which makes it a contributor-friendly codebase. So, hope on and contribute now!

### Feedback/Suggestions and Issues
Feedback/Suggestions are always welcome and do mention any issues found. They can be provided through:
1)Issues section of this repository
2)[https://github.com/sugarlabs/www-sugarlabs/issues/63](https://github.com/sugarlabs/www-sugarlabs/issues/63)

### How to run the code
#### Getting the code
Clone the repository
### Installation
Install

    bundle install;
#### Running
Jekyll can run a local web server that rebuilds each time you save a page while editing (Execute the below command from root directory):

    jekyll serve --incremental;

Then open [http://localhost:4000](http://localhost:4000)
#### Note
If some changes are not visible (after saving a page while editing), please restart the Jekyll local web server and reload [http://localhost:4000](http://localhost:4000).

## Important Points to be Noted

1. Whenever the code is changed, please ensure that the relevant code changes are reflected in **main.js** file (For example, if a slideshow is disabled, make sure the id of the slideshow element/section is also disabled in the **main.js** file if it exists).
2. Whenever a new commit is made and the changes are made to any one of airspace.css, main.js, or plugins.js files, try to use a minification service and add the minified version of new code in respective **minified** folder. (css and js folders have a **minified** folder)
3. Few dependencies/libraries do not work well with other dependencies/libraries, so make sure to test before updating the dependencies/libraries.
4. Whenever the website hosting is shifted to another url/domain, please ensure to change the internal url references and also the **sitemap.txt** file.
5. Do check **Answers to few questions** section to get answers to few of the questions you might have or for steps to be followed.
6. Be careful when changing the cache control code present in the **.htaccess** file.
7. Whenever the dependency/library versions are changed, please update the local files of those dependencies as these local files are referenced when the cdn does not work.
8. The current website uses customized versions of few social media icons (service provided by [Social Share Kit](http://socialsharekit.com)). So we use the local files of the service and do our customizations in the css file of the service (**/assets/dist/css/social-share-kit.css** file in our case). Please be careful when updating the files of this service. (Also refer to **How to change social media icon colors?** subsection in **Answers to few questions** section)

## Answers to Few Questions

### How to remove loader?
1. Go to **index.html** file.
2. Go to the **Loader section** (check comments) and remove the whole section.

### How to remove chat window?
1. Go to **footer.html** file.
2. Go to the **Chat window for screens with width <= 991px** section (check comments) and remove the whole section.
3. Go to the **Chat window for screens with width > 991px** section (check comments) and remove the whole section.

### How to change IRC service?
1. Go to **main.js** file.
2. Go to **Disabling code** section (check comments). 
2. The request url of the new IRC service can be written as the source to the **iframes** in place of the existing [Kiwi IRC](https://kiwiirc.com) service call.

### How to disable search functionality?
1. Go to **search.html** file.
2. Go to the **Search functionality Javascript code** section (check comments) and remove the whole section.

### How to alter disabling?
1. Go to **main.js** file.
2. Go to **Disabling code** section (check comments) and change the code accordingly.
3. Take a look at the attributes of elements being changed in the **airspace.css** file also and carefully change the code.

### How to change background image in main page?
1. Go to airspace.css file.
2. Under the **slider** id css, enter the url of new background image in the **background** attribute.

### How to add new page?
1. Create a new html page in the root directory.
2. Enter the required intial information for the new page (Take the help of the intial information available in other html pages).
3. In the **sitemap.txt** file, add the declaration of the new page (take the help of other page declarations).

### How to change video thumbnail?
1. Go to **index.html** file.
2. Go to the **About Sugar** section (check comments) adn add the new thumbnail url in the **poster** attribute of the **html video tag**.

### How to add/change new font?
1. Go to [fontsquirrel](https://www.fontsquirrel.com/).
2. Search the required font and go the specified page.
3. Under **Webfont Kit**, enable all font formats and click **Download @font-face kit**.
4. Add all the font format files to the **fonts** folder.
5. Go to the **googlefonts.css** file and add those references.

### How to alter Goggle custom search engine customizations?
1. Go to [Google custom search engine](https://www.google.co.in/cse).
2. Log in using the "Sugar Labs" account.
3. You can do any customizations and get the final code.
4. Go to **search.html** file.
5. Replace the existing code with the final code under the **Search functionality Javascript code** section (check comments).

### How to alter Google analytics code?
1. Go to [Google Analytics](https://analytics.google.com/).
2. Your account needs admin rights so ask Samson Goddy for admin permissions.
3. Log in using this account.
4. Get the final code from website.
5. Go to **footer.html** file 
6. Replace the existing code with the final code under the **Google analytics code** section (check comments).

### How to change logo?
1. Go to **nav.html** file.
2. Please be aware that we have 2 types of headers/navigation bars and for each header we have 2 logos associated(static and dynamic)(refer to **Logo** subsection in **About the website / project** section). Code is written to accommodate both the logos and the necessary disabling is done in **main.js** file.
#### Changing dynamic logo
1. To change the dynamic logo, replace the new svg in space of the existing svg logo path in **nav.html** file.
2. Do this for the 2 header sections in **nav.html** file.
3. Go to **main.js** file.
4. We have code to change colours of dynamic logo under **Colour changing affect of logo** section (check comments).
5. Change/add code there.
#### Changing static logo
1. To change the static logo, replace the new png in space of the existing png logo path in **nav.html** file.
2. Do this for the 2 header sections in **nav.html** file.

### How to change cache control?
1. Go to **.htaccess** file 
2. Change/Edit the code there.

### How to change social media icon colors?
1. Go to **footer.html** file.
2. Go to social media icons and check the classes of the relevant icon.
3. Go to **/assets/dist/css/social-share-kit.css** file.
4. Go to the relevant classes and change the **background-color**/**color** attributes of the icon associated classes.

## Credits

### License Information
The license information of all the dependencies/libraries used in the code can be found in the **LicenseInformation.txt** file in the root folder.

### Usage of code snippets:
For few parts of the code, I have used code snippets available online. The list of all the code snippets which I referred to are:




