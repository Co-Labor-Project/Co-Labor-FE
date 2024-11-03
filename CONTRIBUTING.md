# Co-Labor 기여 가이드라인

[English Version](https://github.com/Co-Labor-Project/Co-Labor-BE/blob/develop/CONTRIBUTING-EN.md)

Co-Labor 프로젝트에 관심을 가져 주셔서 감사합니다! 🎉

<br />

## 📌 Introduction

- ISSUE를 확인하여 이미 보고된 문제인지, 논의된 기능인지 확인해주세요.

- 새로운 기능을 제안하고 싶거나 버그를 제보하고 싶다면, 이슈를 생성해주세요.

<br />

## Configuration

먼저 아래의 글들을 참조하여 개발 환경을 세팅하고, 기여를 준비해주세요!

- [Backend](https://github.com/Co-Labor-Project/Co-Labor-BE/blob/develop/README.md)
- [Frontend](https://github.com/Co-Labor-Project/Co-Labor-FE/blob/main/README.ko.md)
- [QuickStart](https://github.com/Co-Labor-Project/deploy/blob/main/README.md)

<br />

## 🛠️ How to Contirbute

1.  이슈 생성

    - Contribute를 원하는 부분에 대해 이슈를 생성해주세요.

2.  브랜치 생성

    - 생성된 이슈 번호에 맞게 브랜치를 생성해주세요.
    - 브랜치 네이밍 규칙: `feat/#이슈번호` 또는 `fix/#이슈번호`

3.  코드 변경

    - 가독성과 패키지, 파일 이름을 잘 지켜주세요.
    - 특히 변수와 클래스는 Camel 규칙으로 네이밍해주세요.
    - 주석을 상세하게 달아주세요.

4.  커밋

    - 컨벤션을 잘 지켜서 커밋 메시지를 작성해주세요.
      ```
      feat: 새로운 기능에 대한 커밋
      fix: 버그 수정에 대한 커밋
      build: 빌드 관련 파일 수정 / 모듈 설치 또는 삭제에 대한 커밋
      chore: 그 외 자잘한 수정에 대한 커밋
      ci: CI 관련 설정 수정에 대한 커밋
      docs: 문서 수정에 대한 커밋
      style: 코드 스타일 혹은 포맷 등에 관한 커밋
      refactor: 코드 리팩토링에 대한 커밋
      test: 테스트 코드 수정에 대한 커밋
      perf: 성능 개선에 대한 커밋
      ```

5.  Pull Request 생성

    - PR 룰을 잘 지켜 생성해주세요.
    - PR 제목 예시: `[feat] #69 - Add search functionality`

6.  리뷰 및 피드백
    - PR 생성 후 GitHub의 코멘트를 통해 팀과 협의하여 필요한 피드백을 반영합니다.
    - 피드백 반영이 완료되면, PR에 해당 변경 사항을 커밋하고 리뷰어에게 다시 확인 요청을 합니다.
    - 최종적으로 팀의 승인을 받으면, PR이 병합됩니다.

<br />

## Pull Request Checklist

[ ] 코드 스타일 가이드를 준수했나요?  
[ ] 테스트를 추가했나요?  
[ ] 커밋 컨벤션을 잘 지켰나요?

<br />

## License

이 프로젝트에 기여함으로써, 귀하는 귀하의 기여가 이 프로젝트의 라이선스 하에 공개됨에 동의합니다.
