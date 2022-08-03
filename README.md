# 카페 포인트 적립 앱

　
 
## 기획 의도

- 카페를 하는 지인이 포인트 적립 시스템이 필요하다는 얘기를 들었는데, 아직 내 실력에서 상업화 할수 있는 서비스를 내기엔 힘들지만 내가 할 수 있는 수준에서 서비스를 기획하고 구현 해보고 싶었다.

## 개발 환경

- BACKEND
  - 미정 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- FRONTEND
   - 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 	![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
   
## 서비스 다이어그램

![적립프로그램 다이어그램](https://user-images.githubusercontent.com/96227239/182618073-b1807b63-77f2-4e01-8080-f9f854f10ff0.png)

- 서비스를 사용할 주 디바이스는 패드(태블릿)을 생각했으나 일단 웹서비스로 구현한다. POS의 결제 데이터와 연동되어 결제금액을 받아올 수 있으면 좋겠지만, 그 정도까지는 정보를 얻을 수 없기에 일단은 POS의 데이터 연동없이 서비스를 구축하고자 한다.

## 서비스 기능

- 주요 기능
  - 회원가입 (필요 정보 : 휴대폰 번호, 성함)
  - 포인트 적립
  - 포인트 사용
  - 포인트 조회
  - 포인트 이력
  
- 부가 기능
  - 포인트 적립 취소 (관리자 권한, 이용자 본인 확인 필요)
  - 회원 등급 (총 결제 금액에 따른 등급 세분화, 적립율 차이 등)
  
## 일정

- 22.08.34 ~
