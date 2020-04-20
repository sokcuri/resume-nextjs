import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'NaraeChat',
      descriptions: [
        {
          content: '한글 상태에서도 키 조작이 가능한 마인크래프트 한글 채팅 모드',
        },
        {
          content: 'Maintainer',
        },
        {
          content: 'https://github.com/sokcuri/naraechat',
        },
        {
          content:
            '한글 IME를 지원해주지 않은 마인크래프트의 한글 지원을 위한 한글 채팅 모드이며 한/영 키를 이용해 한영 전환을 할 수 있게끔 만들어줍니다.',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/sokcuri/naraechat.svg?style=popout',
        },
      ],
    },
    {
      title: 'Tweetdeck Player',
      descriptions: [
        {
          content: 'Electron 기반의 트위터 데스크톱 웹 앱',
        },
        {
          content: 'Maintainer',
        },
        {
          content: 'https://github.com/sokcuri/TweetDeckPlayer',
        },
        {
          content:
            '트윗덱 공식 데스크톱 앱의 종료로 만들게 된 프로젝트입니다. 초창기에는 Chromium Embedded Framework(CEF)를 직접 빌드하였으며, 추후에는 Electron으로 포팅하였습니다',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/sokcuri/tweetdeckplayer.svg?style=popout',
        },
      ],
    },
    {
      title: 'Ehnd',
      descriptions: [
        {
          content: '일본어 번역기 ezTrans 성능향상 애드온',
        },
        {
          content: 'Maintainer',
        },
        {
          content: 'https://github.com/sokcuri/ehnd',
        },
        {
          content:
            '현재 유지보수가 되고 있지 않은 보편적인 일본어 번역기인 ezTrans XP의 성능을 향상시키고 정규식 기반의 필터 기능을 지원하게끔 만드는 프로그램입니다.',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/sokcuri/ehnd.svg?style=popout',
        },
      ],
    },
    {
      title: 'Anemone',
      descriptions: [
        {
          content: '미소녀 게임용 텍스트 번역 오버레이 프로그램',
        },
        {
          content: 'Maintainer',
        },
        {
          content: 'https://github.com/sokcuri/anemone',
        },
        {
          content:
            '인게임 텍스트를 가져오는 Text Hooker와 일본어 기계 번역기와 연동해 실시간으로 게임 텍스트를 출력해주는 프로그램입니다.',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/sokcuri/anemone.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
