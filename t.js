const { SendGallery } = require('./index');

(async () => {
  const t = await SendGallery('This is a gallery', 'sdkfjdkfkdjfdkfjdkfjkdjfkdfjdkfadksojfpksdjopeifeojfiffffffffffffffffffffffffffffffffffffff', 'img_url', {type: 'url', title: 'fgkfjgkfjg', value: 'url-here'})
  console.log(t)
})()