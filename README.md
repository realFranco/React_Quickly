# React_Quickly
Lectures from the Book "React Quickly - Painless web apps ..." by Azat Mardan

**PD**: I know that exist the official repo, you can follow here actually (click on the github's icon) <img src="https://image.flaticon.com/icons/svg/599/599340.svg" width="16"> <img src="https://simpleicons.org/icons/github.svg" width="12">, azat-co/reqct-quickly.

But I want to keep my own notes too!! So, I create my own set of chapters.

Actually I am not finish the entire book <img src="https://image.flaticon.com/icons/svg/2933/2933266.svg" width="16">, I will do it in the near future.


### Recommendations

- Read the first 2 chapters and then comeback for the *Resources & Installations* section, only in case you miss configs.
- Try to read and understand as much you can.
- Do not focus on fiinsh the book - focus on learning what you do not know!

### Resources & Installations

If youu have some issues installing the resources, this is my approach to do that:

 - [React Dev. tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related) 

 - Add .js files into the Script headers from the .html from your projects. (you can founded in this repo too.)
   - [react.js](https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.js)
   - [react-dom.js](https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.js)


- Install the babel transpiler enable for this book
    ```console
    >: npm i babel-cli@6.9.0 babel-preset-react@6.5.0 --save-dev
    >: # Yep, a quite old.
    ```
    
 - At the **package.json** file add this property:
    ```javascript
     "babel": {
        "presets": ["react"]
    }   
    ```
   

