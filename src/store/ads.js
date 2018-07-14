export  default {
  state: {
    ads: [
      {title: 'first img',
        description: 'first desc',
        promo: false,
        imageSrc: 'https://dummyimage.com/1440x500',
        id: '123'
      },
      {title: 'second img',
        description: 'second desc',
        promo: true,
        imageSrc: 'https://dummyimage.com/1440x500/f2f2f2',
        id: '1234'
      },
      {title: 'third img',
        description: 'third desc',
        promo: true,
        imageSrc: 'https://dummyimage.com/1440x500/b3f2a4',
        id: '12345'
      }
    ]
  },
  mutatins: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}