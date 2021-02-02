# multiple masks with clip-path
``` css
.clip-svg {
  clip-path: url(#myClip);
}
```
```html
<img class="clip-svg" src="https://picsum.photos/id/1015/600/400">

<svg width="0" height="0">
  <defs>
    <clipPath id="myClip">
      <polygon points="400,50 400,320, 140,300"/>
      <polygon points="450,10 500,200 600,100" />
      <polygon points="150,10 100,200 300,100" />
    </clipPath>
  </defs>
</svg>
```