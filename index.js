const { Util } = require('./util/util')

async function SendText(...messages) {
  try {
    const obj = {
      type: 'text',
      elements: [...messages]
    }

    return obj
  } catch (e) {
    return e
  }
}


async function SendQuickReplies(title, delay=2000, ...buttonObject) {
  try {
   const obj = {
     type: 'quickReplies',
     delay: delay,
     title: title,
     buttons: [...buttonObject]
   }

   return obj
  } catch (e) {
    return e
  }
}

async function SendGallery(title, sub, imgUrl, ...buttonObject) {
  try {
    let t = sub.length
    let subtitle = ''

    if (t >= 81) {
      subtitle = `${sub.slice(0, 74)}. . .`
    } else {
      subtitle = sub
    }
    const _ob = {
      title: title,
      imageUrl: imgUrl,
      subtitle: subtitle,
      buttons: [...buttonObject]
    }
    const obj = {
      type: 'cards',
      elements: [_ob]
    }

    return obj
  } catch (e) {
    return e
  }
}

async function RedirectToInteraction(interactionId) {
  try {
    const obj = {
      type: 'goto',
      interactionId: interactionId
    }
  } catch (e) {
    return e
  }
}

module.exports = { SendText, SendQuickReplies, SendGallery, RedirectToInteraction, Util }