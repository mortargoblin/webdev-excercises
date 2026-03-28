const target = document.querySelector('#target');

const dateTime = Temporal.Now.zonedDateTimeISO()
  .toLocaleString('fi-FI', {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

target.innerHTML =
`
<p>
UA: ${navigator.userAgent}
</p>
<p>
screen size: ${screen.width} x ${screen.height}
</p>
<p>
available screen size: ${screen.availWidth} x ${screen.availHeight}
</p>
<p>
Date and time: ${dateTime}
</p>
`
