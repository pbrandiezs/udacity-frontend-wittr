self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  console.log(event.request.url.split('.')[1]);
  if ((event.request.url.split('.')[1]) === "jpg") {
    console.log("It's a jpg!");
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  }
});