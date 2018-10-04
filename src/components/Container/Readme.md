Default:

```jsx
<Container>Default</Container>
<br />
<Container>
  Default
  <Container.Content>Content</Container.Content>
</Container>
```

Width:

```jsx
<Container width='fluid'>Fluid</Container>
```

Height:

```jsx
<Container height='viewport-half'>Half viewport height</Container>
```

Padding:

```jsx
<Container padding='content-mobile'>Content padding for mobile</Container>
```

Flex aligns:

```jsx
<Container flexAlign='right'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Right content</div>
  </Container.Content>
</Container>
<br />
<Container flexAlign='center'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Center content</div>
  </Container.Content>
</Container>
<br />
<Container flexAlign='spacebetween'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Left content</div>
  </Container.Content>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Right content</div>
  </Container.Content>
</Container>
```

Flex align items:

```jsx
<Container flexAlign='spacebetween' flexAlignItems='middle'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray', width: '100px', height: '100px' }}>Content</div>
  </Container.Content>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Middle content</div>
  </Container.Content>
</Container>
<br />
<Container flexAlign='spacebetween' flexAlignItems='bottom'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray', width: '100px', height: '100px' }}>Content</div>
  </Container.Content>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Bottom content</div>
  </Container.Content>
</Container>
```

Top - Bottom content:

```jsx
<Container height='viewport-half' flexAlign='spacebetween-vertical'>
  <Container.Content>
    <div style={{ backgroundColor: 'gray', width: '100px', height: '100px' }}>Top content</div>
  </Container.Content>
  <Container.Content>
    <div style={{ backgroundColor: 'gray' }}>Bottom content</div>
  </Container.Content>
</Container>
```
