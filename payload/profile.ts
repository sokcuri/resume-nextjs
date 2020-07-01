import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/pic.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박진수',
    small: '(Sokcuri)',
  },
  contact: [
    {
      title: 'sokcuri@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'https://github.com/sokcuri',
      link: 'https://github.com/sokcuri',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이력서를 검토해 주셔서 감사합니다',
    icon: faBell,
  },
};

export default profile;
