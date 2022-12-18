#### Box component:

Box is the base component for binding theme-based styles to an individual element on the screen based on our design system tokens. Internally, all our components are made up of Boxes.

By default, Box renders a View element. You can customise this via the BaseComponent prop.

##### Spacing:

Our grid is built on a 4px scale and have predefined sizes:

| **-M** | **-S** | **-XS** | **-XXS** | **-XXXS** |  0  | **XXXS** | **XXS** | **XS** | **S** | **M** | **L** | **XL** | **XXL** |
| :----: | :----: | :-----: | :------: | :-------: | :-: | :------: | :-----: | :----: | :---: | :---: | :---: | :----: | :-----: |
|  -24   |  -16   |   -12   |    -8    |    -4     |  0  |    4     |    8    |   12   |  16   |  24   |  36   |   60   |   88    |

These sizes can be used for margin and padding and they're integrated with our theme file. We should always try to use one of these tokens for spacing-related values.

Example of usage below:

```js

// Example using styles in a const - note that this is the preferred way to style components
const boxStyles: BoxOwnProps = { margin: 'S', padding: 'M' }
<Box {...boxStyles } />

```
