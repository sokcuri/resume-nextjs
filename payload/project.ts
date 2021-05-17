import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'We:Jet API 백엔드 서버 구축',
      startedAt: '2021-04',
      endAt: '2021-05',
      where: 'Seoul Ventures',
      descriptions: [
        {
          content:
            'Cafe24와 같은 플랫폼 쇼핑몰의 컴포넌트들을 위젯과 같은 개념으로 더하고 뺄 수 있는 We:Jet의 백엔드 서버를 구축하는 프로젝트이며, API 서버는 NestJS로 구현하였습니다.\n타사의 플랫폼에 솔루션을 삽입하기 위해서는 스크립트를 삽입해야 합니다. 개념증명을 위한 조사 결과 타사의 솔루션들은 최초 스크립트를 페이지에 삽입시키고 이후 XHR 요청 후 해당하는 플러그인을 추가로 삽입하는 형태로 구현이 되어 있었습니다.\n\n다만 위의 방식은 회선 상태에 따라 TTFB가 길어지게 되어 페이지의 로드 속도에 영향을 미치고 개별 Svelte 컴포넌트로 빌드시 디펜던시로 인한 용량 증가가 눈에 띄게 늘어남을 확인할 수 있었습니다.\nESM으로 번들링시 Tree-Shaking이 되는 점에 착안해 We:Jet에서 쓰이는 모든 Plugin과 Component를 사전 빌드 및 번들링하고, 쇼핑몰 삽입 스크립트 엔드포인트 호출 시 DB에서 쇼핑몰에 쓰일 컴포넌트와 플러그인 목록을 가져와 선택적으로 번들링하도록 구현하였습니다. 개별 플러그인 형태로 퍼블리싱하는 것보다 JS 및 API 요청이 유의미적으로 줄어들고 번들링으로 인한 파일 크기 감소로 initialize까지 약 < 100ms, 트래픽이 70% 가량 감소하는 성과를 얻었습니다'
        }
      ]
    },
    {
      title: '스마트 리포트',
      startedAt: '2020-12',
      endedAt: '2021-03',
      where: 'Seoul Ventures',
      descriptions: [
        {
          content:
            '온라인 광고를 대행해주는 에이전시 회사를 위한 플랫폼입니다. 고객사의 광고 효율이나 인사이트를 분석할 수 있고 고객에게 발송하는 리포트를 쉽게 만들어주는 웹 기반 리포팅 서비스입니다'
        }
      ]
    },
    {
      title: '시나리오 기반 추천 상품 알고리즘 시스템',
      startedAt: '2020-11',
      endedAt: '2020-12',
      where: 'Seoul Ventures',
      descriptions: [
        {
          content:
            '기존에 서비스되던 쇼핑몰의 추천 상품 알고리즘은 하드코딩되어 있어 명확한 기준이나 추적이 힘들었는데, 이를 시나리오 기반으로 재구성하고 DB의 수정만으로도 추천 알고리즘의 종류와 범위 등을 다이나믹하게 변경할 수 있는 시스템을 구축하였습니다'
        }
      ]
    },
    {
      title: 'Project We:Jet',
      startedAt: '2020-09',
      endedAt: '2020-12',
      where: 'Seoul Ventures',
      descriptions: [
        {
          content:
            '위젯 형태의 컴포넌트들을 쉽게 붙여 쇼핑몰 사이트의 유입 및 매출 증대를 돕는 위젯 프로젝트의 설계와 프로토타이핑을 진행하였으며 어드민 프론트엔드와 백엔드, 쇼핑몰에 들어가는 인젝션되는 스크립트 엔트리 및 플러그인을 개발하였습니다. 프론트엔드는 Vue를, 백엔드는 Laravel과 PHP로 이루어져 있습니다.'
        }
      ]
    },
    {
      title: '쇼핑몰 이탈방지 솔루션 리타쿠 플로트',
      startedAt: '2020-08',
      endedAt: '2020-09',
      where: 'Seoul Ventures',
      descriptions: [
        {
          content:
            '쇼핑몰에서 외부 사이트로 나가려고 주소창으로 마우스 포인터를 이동하면 관심이 있는 상품을 띄워 주는 쇼핑몰 이탈방지 솔루션인 리타쿠 플로트를 만들었습니다. 추천 상품과 함께 캠페인 배너도 노출합니다.'
        }
      ]
    },
    {
      title: 'AxWeb',
      startedAt: '2020-06',
      endedAt: '2020-08',
      where: 'guardtec',
      descriptions: [
        {
          content:
            '출입통제 시스템인 Ax의 웹 포팅 작업을 진행했습니다. 개발 일정 조율과 이슈 해결을 주로 해왔으며, 디자인 가이드에 맞춰 레이아웃과 컴포넌트를 제작하였습니다.'
        }
      ]
    },
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
