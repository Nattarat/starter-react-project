Default:

```jsx
<SimpleStatic>
  <SimpleStatic.Header>
    <h1 className='simplestatic-text-heading'>
      Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
    </h1>
  </SimpleStatic.Header>
  <SimpleStatic.Body>
    <p className='simplestatic-text-description'>
      Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
    </p>
  </SimpleStatic.Body>
  <SimpleStatic.Footer>
    <a className='simplestatic-text-link' href=''>
      Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
    </a>
  </SimpleStatic.Footer>
</SimpleStatic>
```

Error:

```jsx
<SimpleStatic className='is-error'>
  <SimpleStatic.Header>
    <h1 className='simplestatic-text-heading'>
      Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
    </h1>
  </SimpleStatic.Header>
  <SimpleStatic.Body>
    <p className='simplestatic-text-description'>
      Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
    </p>
  </SimpleStatic.Body>
  <SimpleStatic.Footer>
    Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
  </SimpleStatic.Footer>
</SimpleStatic>
```

Success:

```jsx
<SimpleStatic className='is-success'>
  <SimpleStatic.Header>
    <h1 className='simplestatic-text-heading'>
      Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
    </h1>
  </SimpleStatic.Header>
  <SimpleStatic.Body>
    <p className='simplestatic-text-description'>
      Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
    </p>
  </SimpleStatic.Body>
  <SimpleStatic.Footer>
    Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
  </SimpleStatic.Footer>
</SimpleStatic>
```

Show special message:

```jsx
<SimpleStatic>
  <SimpleStatic.Header>
    <h1 className='simplestatic-text-heading'>
      Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design
    </h1>
  </SimpleStatic.Header>
  <SimpleStatic.Body>
    <p className='simplestatic-text-description'>
      Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.
    </p>
  </SimpleStatic.Body>
  <SimpleStatic.Footer>
    Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
  </SimpleStatic.Footer>
  <SimpleStatic.SpecialMessage>
    Next stop - awwwards Conference New York November 15th & 16th 2018, digital designers network and learn key tools from visionaries and leading agencies about current trends and emerging web technologies, tickets on sale now!
  </SimpleStatic.SpecialMessage>
</SimpleStatic>
```
