Default:

```jsx
<Grid>
  <Grid.Column>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

12 Columns system:

```jsx
<Grid gutter='30'>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Offset:

```jsx
<Grid gutter='30'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='2'></Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Narrow column:

```jsx
<Grid gutter='30'>
  <Grid.Column flexCol='1'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column flexCol='2'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column>
    <div style={{ backgroundColor: 'gray' }}>Narrow col</div>
  </Grid.Column>
</Grid>
```

Mobile stack column:

```jsx
<Grid gutter='30' gutterVerticalMobile='30'>
  <Grid.Column isStackMobile col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column isStackMobile col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column isStackMobile col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
<div style={{ paddingTop: 15, paddingBottom: 15, textAlign: 'center' }}>- or -</div>
<Grid gutter='30' gutterVerticalMobile='30'>
  <Grid.Column col='12' colPhablet='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='12' colPhablet='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='12' colPhablet='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Different column sizes per breakpoint:

```jsx
<Grid gutter='30' gutterVerticalMobile='30'>
  <Grid.Column colMobile='12' colPhablet='4' colTablet='4' colLaptop='4' colDesktop='12' colLargeDesktop='4'>
    <div style={{ backgroundColor: 'gray' }}>Col 12 at Mobile, Desktop</div>
  </Grid.Column>
  <Grid.Column colMobile='4' colPhablet='12' colTablet='4' colLaptop='12' colDesktop='4' colLargeDesktop='12'>
    <div style={{ backgroundColor: 'gray' }}>Col 12 at Phablet, Laptop, Large_Desktop</div>
  </Grid.Column>
  <Grid.Column colMobile='4' colPhablet='4' colTablet='12' colLaptop='4' colDesktop='4' colLargeDesktop='4'>
    <div style={{ backgroundColor: 'gray' }}>Col 12 at Tablet</div>
  </Grid.Column>
</Grid>
```

Nesting:

```jsx
<Grid gutter='30' gutterVerticalMobile='30'>
  <Grid.Column col='12' colPhablet='6'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
    <Grid gutter='15'>
      <Grid.Column col='4'>
        <div style={{ backgroundColor: 'lightgray' }}>Nesting Col</div>
      </Grid.Column>
      <Grid.Column col='4'>
        <div style={{ backgroundColor: 'lightgray' }}>Nesting Col</div>
      </Grid.Column>
      <Grid.Column col='4'>
        <div style={{ backgroundColor: 'lightgray' }}>Nesting Col</div>
      </Grid.Column>
    </Grid>
  </Grid.Column>
  <Grid.Column col='12' colPhablet='6'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Gutterless:

```jsx
<Grid>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Horizontal & Vertical gutter:

```jsx
<Grid gutter='15' gutterVertical='15'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```

Align:

```jsx
<Grid gutter='30' align='right'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
<div style={{ paddingTop: 15, paddingBottom: 15, textAlign: 'center' }}>- or -</div>
<Grid gutter='30' align='center'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
<div style={{ paddingTop: 15, paddingBottom: 15, textAlign: 'center' }}>- or -</div>
<Grid gutter='30' align='spacebetween'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
<div style={{ paddingTop: 15, paddingBottom: 15, textAlign: 'center' }}>- or -</div>
<Grid gutter='30' alignMobile='right' alignPhablet='spacebetween'>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
  <Grid.Column col='4'>
    <div style={{ backgroundColor: 'gray' }}>Col</div>
  </Grid.Column>
</Grid>
```
