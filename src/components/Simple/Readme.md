Default:

```jsx
<Simple
  heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
  description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
  footer={
    <a className='simple-text-link' href='#'>
      Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.
    </a>
  }
/>
```

Error:

```jsx
<Simple className='is-error'
  heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
  description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
  footer='Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.'
/>
```

Success:

```jsx
<Simple className='is-success'
  heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
  description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
  footer='Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.'
/>
```

Show special message:

```jsx
<Simple className='is-special-message'
  heading='Talk - Design Director at Dropbox, Kurt Varner - The Conditions for Great Design'
  description='Kurt Varner, Design Director at Dropbox presents three fundamental elements necessary on any team to achieve great digital design output. He gives us an in-depth look inside the design process at Dropbox using Dropbox Paper, the advantages of hacky hour, participatory design, and composer teams, and gives practical tips on how to build a team that cares.'
  footer='Subscribe now - watch the hottest digital design talks and interviews from Awwwards, on our official YouTube Channel.'
  specialMessage='Next stop - awwwards Conference New York November 15th & 16th 2018, digital designers network and learn key tools from visionaries and leading agencies about current trends and emerging web technologies, tickets on sale now!'
/>
```
