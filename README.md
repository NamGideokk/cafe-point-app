# 카페 포인트 적립 앱



## 기획 의도

- 카페를 하는 지인이 포인트 적립 시스템이 필요하다는 얘기를 들었는데, 아직 내 실력에서 상업화 할수 있는 서비스를 내기엔 힘들지만 내가 할 수 있는 수준에서 서비스를 기획하고 구현 해보고 싶었다.

## 개발 환경

- BACKEND

  - 미정 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- FRONTEND
  - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 서비스 다이어그램

![적립프로그램 다이어그램](https://user-images.githubusercontent.com/96227239/182618073-b1807b63-77f2-4e01-8080-f9f854f10ff0.png)

- 서비스를 사용할 주 디바이스는 패드(태블릿)를 생각했으나 일단 웹서비스로 구현한다. POS의 결제 데이터와 연동되어 결제금액을 받아올 수 있는 경우와 그렇지 않은 두 경우를 생각했다. 하지만 연동 유무의 정보를 얻기엔 힘들어서 일단은 POS의 데이터 연동 없이 서비스를 구축하고자 한다.

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

- 22.08.03 ~
  - 프론트엔드 개발부터 시작

## 화면 구성

- Figma - https://www.figma.com/file/AX9hjhwbyIE3Wiq9LMubWn/cafe-point-app?node-id=0%3A1

- 설계 순서
  - 디자인, UI 그리기 -> 컴포넌트 or 요소로 구조 분해 -> 컴포넌트 계층도 작성 -> 컴포넌트 별 기능 작성
  - ![image](https://user-images.githubusercontent.com/96227239/183342124-3cc9f2af-12d9-42bc-922a-438e39bc1b59.png)

![image](https://user-images.githubusercontent.com/96227239/182629256-cf92e4c1-0090-47b2-a28f-5dba4e9abfe9.png)
![image](https://user-images.githubusercontent.com/96227239/182629335-8234a1c8-4b07-421d-bfcc-6d93763e99ec.png) 
![image](https://user-images.githubusercontent.com/96227239/182850167-c7b1f6cb-d408-4251-b83c-dcbb528adc30.png)
![image](https://user-images.githubusercontent.com/96227239/183692005-f1f4dc4c-0846-4d88-9298-cdb688f3c59e.png)
![image](https://user-images.githubusercontent.com/96227239/183692234-f2e2f6b1-8630-40be-80b8-9b1c3d5995b3.png)


