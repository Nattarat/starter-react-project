Default:

```jsx
<Example>
  <Example.Children>Default</Example.Children>
</Example>
```

User interface:

```jsx
<React.Fragment>
  <Example ui='error'>
    <Example.Children>Error</Example.Children>
  </Example>
  <br />
  <Example ui='success'>
    <Example.Children>Success</Example.Children>
  </Example>
</React.Fragment>
```

Children alignment:

```jsx
<React.Fragment>
  <Example flexAlign='horizontal-end'>
    <Example.Children>Right</Example.Children>
  </Example>
  <br />
  <Example flexAlign='horizontal-spacebetween'>
    <Example.Children>Left-Right</Example.Children>
  </Example>
</React.Fragment>
```

Source icon:

```jsx
<React.Fragment>
  <Example srcIcon={require('./styleguide-images/icon-info.svg')}>
    <Example.Children>Path</Example.Children>
  </Example>
  <br />
  <Example srcIcon='https://material.io/tools/icons/static/ic_icons_192px_light.svg'>
    <Example.Children>Url</Example.Children>
  </Example>
</React.Fragment>
```

Children props:

```jsx
<React.Fragment>
  <Example>
    <Example.Children textColor='red' bgColor='black'>Path</Example.Children>
  </Example>
  <br />
  <Example>
    <Example.Children textColor='white' bgColor='red'>Path</Example.Children>
  </Example>
</React.Fragment>
```
