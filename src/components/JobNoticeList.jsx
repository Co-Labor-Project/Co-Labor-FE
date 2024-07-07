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
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
    name: '(주) pat & mat',
    title: '패트와 매트',
    condition: '4년제 대학, 경력 2년 이상, javascript, java',
  },
  {
    id: 3,
    photo:
      'https://i.namu.wiki/i/QOUTQMGDe_1bYjmSynth15yX60-x-r-rna8uYAcMK0GRlm4eupUd44ptISDqP30um7YGkCVxuGCnyOtfgfBDUw.webp',
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
];
const JobNoticeList = () => {
  return (
    <div className="JobNoticeList">
      <div className="JobNoticeListWrapper">
        {mockData.map((item) => (
          <JobNotieItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default JobNoticeList;
