# react-css-modules-bootstrap-theming-demo
Small app combining react/css-modules/react-bootstrap/css global scope and adding the ability to swap themes on the fly.

This project started from the ideas provided by [vectorsize](https://github.com/vectorsize) in a workshop to explore css-modlues.

## Scope:
* limit react components' class names to local scope.
* Combine css-modules with a global framework (Bootstrap 3) and css utility classes.
* Combine with Sass prepocessor.
* Keep react components' `className` clean using css-modules `compose:`.
* Generate themes overwriting either global classes or component classes.
* Ability to compile css themes independently of the react application.
* Components should not know about the theme.
* Load only the styles for the required theme. Not every theme should be loaded in the core css.

### Install:
`npm install`

### Run dev:
`npm run dev`
and go to `http://localhost:8080/`

### Compile themes:
`nmp run themes`

### Generate a new theme:
(Two samples already in themes folder)

1. Go to `./themes`.
2. Create a new directory named as the new theme (do not use spaces).
3. Create two directories within the new theme. `modules` and `global`.
4. `.scss` files in `modules` will need to be named as the component css-module to modify.
5. Run `nmp run themes`.

### To do:
Improve the workflow to generate themes. Currenly the sass syntax is very limited due to the Gulp script in charge of processing the files and generate the themes.
