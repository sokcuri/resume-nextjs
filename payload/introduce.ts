import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '기술로 사람들의 삶의 양식을 더 나은 방향으로 바꿀 수 있다고 믿는 3년차 주니어 개발자입니다.',
    '주력 언어는 TypeScript/Node.js와 C/C++이지만 Python의 Django 프레임워크를 사용해 보았고 Rust와 Vue.js과 같은 스택을 이용해 서비스를 개발해 본 경험이 있습니다. 다양한 경험들로 지금 갖추지 않은 역량도 빠르게 달성할 수 있다고 자부합니다.',
    '궁금한 것은 참지 못하는 성격에 호기심이 많아 자신이 모르는 분야라도 공부하고 만들어나가고 있습니다. 컴포트 존을 지향하는 것이 아닌 내가 모르는, 앞으로 더 알아나가야 할 필요가 있는 영역을 돌파하고 알아내는 것을 선호합니다.',
    '"어떻게" 보다는 "왜"에 관심을 많이 가지는 편입니다. 어째서 지금 이 일을 해야 하는가 맥락을 판단하는 것은 업무의 효율성과 프로젝트 성패에 큰 이유가 됩니다. 근거에 따른 테스크를 바탕으로 개발을 하고 있습니다.',
    '개발이란 혼자 프로덕트를 만들어 가는 것이 아니라 사내외의 수많은 사람들과 함께 만들어 나가는 공동 작업인 만큼 팀웍이 무엇보다 중요하다고 생각합니다. 내게 주어진 일만 하는 것이 아닌, 어려운게 있으면 같이 고민해보고 더 나은 방법을 알아보고 고민해보면 생산성에도 많은 플러스가 될 것이라 믿습니다.',
    '제 꿈은 많은 사람들이 제가 만든 코드를, 상품을, 서비스를 사용하는 것입니다. 내가 실생활에서 이 서비스를 쓴다는 마음으로 항상 진심으로 업무에 임하고 있습니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
