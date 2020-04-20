import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '독학학위제',
      subTitle: '컴퓨터과학과 학사 • 독학학위제로 컴퓨터과학과 학사를 받았습니다',
      startedAt: '2018-03',
      endedAt: '2019-02',
    },
    {
      title: '순천향대학교',
      subTitle: '컴퓨터소프트웨어공학과 중퇴',
      startedAt: '2009-03',
      endedAt: '2016-07',
    },
    {
      title: '창현고등학교',
      subTitle: '졸업',
      startedAt: '2006-03',
      endedAt: '2008-02',
    },
  ],
};

export default education;
