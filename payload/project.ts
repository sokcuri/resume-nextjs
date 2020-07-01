import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '프리코네 지금 열렸니?',
      startedAt: '2020-05',
      endedAt: '2020-05',
      where: 'Personal (Hobby)',
      descriptions: [
        {
          content:
            '카카오게임즈에서 서비스하는 프린세스 커넥트! Re:Dive의 점검 현황을 체크해 주는 페이지입니다. 점검 기간에는 안내 메시지가 나오고 서버가 열리면 음악이 나옵니다.',
        },
      ],
    },
    {
      title: '스피커 원클릭 전환 툴 스피카',
      startedAt: '2020-05',
      endedAt: '2020-05',
      where: 'Personal (Hobby)',
      descriptions: [
        {
          content:
            '피시방에 있는 스피커-헤드셋 전환 프로그램과 비슷한 원클릭 전환 프로그램입니다. 헤드셋이나 스피커에 해당하는 프로그램을 실행하면 해당 오디오 폼팩터로 기본 장치가 전환됩니다. 기존 스피커-헤드셋 전환은 상당히 복잡해 설정이 어려워 어려움을 겪는 것을 보고 조금 더 쉬운 방법이 있을까 고민이 되다가 만들게 된 프로그램입니다.',
        },
      ],
    },
    {
      title: '샌드박스 기반 신작 프로젝트 개발',
      startedAt: '2019-08',
      endedAt: '2019-11',
      where: '5minlab',
      descriptions: [
        {
          content:
            '언리얼 물리엔진을 이용한 샌드박스 게임에서 기획 및 산출물 제작에 필요한 데이터 변환 툴들을 제작하였고 Modding 지원을 위한 기술검토를 진행했습니다.',
        },
      ],
    },
    {
      title: 'TypeScript to C# Transpiler, Auto Binder 제작',
      startedAt: '2019-06',
      endedAt: '2019-08',
      where: '5minlab',
      descriptions: [
        {
          content:
            '신작 게임의 아웃게임 서버는 TypeScript-Express.js로 작성되었고 게임 클라이언트는 유니티를 사용중이기 때문에 C#으로 만들어졌습니다. 서버의 스펙이 변경되면 클라이언트에서 바인더 코드를 서버의 스펙에 맞춰 작성해줘야 하는 번거로움이 있었습니다',
        },
        {
          content:
            'Typescript Compiler API를 이용해 변수 및 구조체의 타입을 추론할 수 있고, JSDoc과 같은 Annotation을 달아 Request 및 Response 구조체를 추출해 CI 빌드시 자동으로 바인딩 코드를 제작하는 프로젝트를 진행하였습니다',
        },
      ],
    },
    {
      title: '모바일 프로토타입 게임 개발',
      startedAt: '2019-05',
      endedAt: '2019-06',
      where: '5minlab',
      descriptions: [
        {
          content:
            '유니티 기반 캐주얼 프로토타입 게임 개발에 참여해 UI 제작 및 코드 리팩토링 작업을 진행하였습니다',
        },
      ],
    },
    {
      title: '오토체스 프로토타입 게임 개발',
      startedAt: '2019-01',
      endedAt: '2019-04',
      where: '5minlab',
      descriptions: [
        {
          content:
            'Dota2의 모델과 스크립트들을 가져와 오토체스 프로토타입을 제작하는 것이 목적인 프로젝트입니다. 본 프로젝트에서 모델 및 애니메이션 추출을 진행하였고, 프로젝트 진행과 기획자에게 필요한 모델링 뷰어와 인스펙터 툴 등을 제작하고 개선하였습니다. ',
        },
        {
          content:
            '프로토타입 게임은 유니티로 C# ReactiveX를 사용하였으며 상점 구매 및 전투 로직을 작성하였습니다.',
        },
      ],
    },
    {
      title: '퀴즈쇼 웹 게임 개발',
      startedAt: '2018-09',
      endedAt: '2018-12',
      where: '5minlab',
      descriptions: [
        {
          content:
            '라인 LIFF 플랫폼으로 서비스중인 퀴즈쇼 게임의 서버, 클라이언트, 어드민 툴의 개발을 진행했습니다.',
        },
        {
          content:
            '이슈 분석을 위한 LIFF 대응 디버깅 클라이언트를 제작해 능동적으로 이슈에 대응할 수 있도록 하였습니다',
        },
      ],
    },
    {
      title: '프로토타이핑 툴 dexign.us 개발',
      startedAt: '2017-01',
      endedAt: '2017-05',
      where: '소프트웨어 마에스트로',
      descriptions: [
        {
          content:
            'GUI로 프로토타이핑하고 apk로 빌드할 수 있는 dexign.us의 개발 및 로직 코드 개발에 참여했습니다.',
        },
      ],
    },
    {
      title: '정규표현식 테스터 웹 앱 개발',
      startedAt: '2016-08',
      endedAt: '2016-10',
      where: '소프트웨어 마에스트로',
      descriptions: [
        {
          content:
            '정규표현식을 실시간으로 테스트하고 공유할 수 있는 regular.express의 Electron 기반 데스크톱 웹 앱 파트를 맡아 개발했습니다.',
        },
      ],
    },
    {
      title: 'Noginogi Party',
      startedAt: '2006-05',
      endedAt: '2009-04',
      where: 'Personal (Hobby)',
      descriptions: [
        { content: '온라인 게임 "마비노기"의 비공식 애드온 프로그램' },
        { content: 'https://github.com/sokcuri/noginogi-party' },
        {
          content:
            '게임 내 불편한 요소들을 수정해주거나 제거해 원활한 게임 플레이 경험에 초점을 맞춘 프로그램입니다. 당시에는 클로즈드 소스로 배포되었으며, 프로세스 후킹, 메모리 패치를 통해 클라이언트를 변조합니다',
        },
      ],
    },
  ],
};

export default project;
