import React from 'react';
import './css/JobNoticeList.css';
import JobNotieItem from './JobNotieItem';
const mockData = [
  {
    id: 1,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 2,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 3,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 4,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 5,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학',
  },
  {
    id: 6,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 7,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 8,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 9,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pat_Mat.jpg/1200px-Pat_Mat.jpg',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
];
const JobNoticeList = () => {
  return (
    <div className="JobNoticeList">
      {mockData.map((item) => (
        <JobNotieItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default JobNoticeList;
