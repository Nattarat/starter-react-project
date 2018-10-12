Default:

```jsx
<Input placeholder='Insert text...' />
<br />
<Input type='password' placeholder='Insert password...' />
```

Validation:

```jsx
<Input placeholder='Insert text...' message='Hint message' />
<br />
<Input placeholder='Insert text...' ui='error' message='Error message' />
<br />
<Input placeholder='Insert text...' ui='success' />
<br />
<Input placeholder='Insert text...' ui='disabled' />
```

Icon button:

```jsx
<Input placeholder='Insert text...'
  leftIconSource={require('./images/icon-search.svg')}
  onClickLeftIcon={() => {}}
/>
<br />
<Input placeholder='Insert text...'
  rightIconSource={require('./images/icon-close.svg')}
  onClickRightIcon={() => {}}
/>
<br />
<Input placeholder='Insert text...'
  outerIconSource={require('./images/icon-check-circle.svg')}
  onClickOuterIcon={() => {}}
/>
<br />
<Input placeholder='Insert text...'
  leftIconSource={require('./images/icon-search.svg')}
  onClickLeftIcon={() => {}}
  rightIconSource={require('./images/icon-close.svg')}
  onClickRightIcon={() => {}}
  outerIconSource={require('./images/icon-check-circle.svg')}
  onClickOuterIcon={() => {}}
/>
```

Icon button Width/Height:

```jsx
<Input placeholder='Insert text...'
  leftIconSource={require('./images/icon-search.svg')} leftIconWidth='14px' leftIconHeight='14px'
  onClickLeftIcon={() => {}}
  rightIconSource={require('./images/icon-close.svg')} rightIconWidth='18px' rightIconHeight='18px'
  onClickRightIcon={() => {}}
  outerIconSource={require('./images/icon-check-circle.png')} outerIconWidth='24px' outerIconHeight='12px'
  onClickOuterIcon={() => {}}
/>
<br />
<p><strong>Notice:</strong></p>
<ul>
  <li>- you can choose one props(width or height) for control icon image size.</li>
  <li>- you can choose two props(width or height) for control icon image size but image extension must jpg, png, gif.</li>
</ul>
```
