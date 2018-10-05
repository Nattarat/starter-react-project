Default:

```jsx
<Example>
  <Example.Children>Default</Example.Children>
</Example>
```

User interface:

```jsx
<Example ui='error'>
  <Example.Children>Error</Example.Children>
</Example>
<br />
<Example ui='success'>
  <Example.Children>Success</Example.Children>
</Example>
```

Children alignment:

```jsx
<Example flexAlign='right'>
  <Example.Children>Right</Example.Children>
</Example>
<br />
<Example flexAlign='center'>
  <Example.Children>Center</Example.Children>
</Example>
<br />
<Example flexAlign='spacebetween'>
  <Example.Children>Space between</Example.Children>
</Example>
```

Source icon:

```jsx
<Example srcIcon={require('./images/icon-info.svg')}>
  <Example.Children>Path</Example.Children>
</Example>
<br />
<Example srcIcon='https://material.io/tools/icons/static/ic_icons_192px_light.svg'>
  <Example.Children>Url</Example.Children>
</Example>
```

Children props:

```jsx
<Example>
  <Example.Children fontColor='red' bgColor='black'>Path</Example.Children>
</Example>
<br />
<Example>
  <Example.Children fontColor='white' bgColor='red'>Path</Example.Children>
</Example>
```
