# dark-mode-code

```js
const darkModeCode = require('dark-mode-code')

...
  <script dangerouslySetInnerHTML={{ __html: darkModeCode }} />
...
```

### Features

* Automatically set `<body class="dark">` if the client OS is in dark mode.
* Automatically update the former class when the client changes the mode when using the website.
* Expose a method to manually toggle the theme: `window.__toggleDarkMode()`



## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100) |
| ---------------------------------------------------------------------------- |
| [Pablo Varela](https://pablo.pìnk)                                           |
