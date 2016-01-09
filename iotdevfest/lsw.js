if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(function(reg) {
    console.log('Yey serivceworker!', reg);

  }).catch(function(err) {
    console.log('Boo no serviceWorker!', err);
  });
}
