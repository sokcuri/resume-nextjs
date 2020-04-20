import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '5minlab',
      position: '테크팀 소프트웨어 엔지니어',
      startedAt: '2018-07',
      endedAt: '2019-11',
      descriptions: [
        '캐주얼 모바일 게임 제작 및 유지보수 개발 업무',
        'DevOps: Jenkins CI를 통한 지속 가능한 개발 환경 구축',
        'Security: 게임 내 부정행위 차단을 위한 보안성 검토 진행',
        'Technical: 개발 중 이슈 발생시 문제 해결을 위한 리뷰',
        '서비스 중인 퀴즈쇼 게임의 QA 툴 제작 및 개발문서 확립',
        '프로토타입 게임 모델에서 사용할 리소스 확보 및 추출',
        '유니티 및 언리얼 엔진을 활용한 신작 게임 프로젝트 개발',
      ],
      skillKeywords: [
        'Node.js',
        'TypeScript',
        'Express.js',
        'C#',
        'C++',
        'MySQL',
        'Docker',
        'Jenkins',
      ],
    },
  ],
};

export default experience;
