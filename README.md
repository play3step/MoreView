# 🚀 MoreView: 3D/2D 하이브리드 프레젠테이션 플랫폼

> **"PowerPoint의 사용성을 3D로 확장하다"**
>
> 2D 슬라이드와 3D 오브젝트를 결합하여 **누구나 쉽게 입체적인 발표 자료를 제작할 수 있는 웹 기반 에디터**입니다.

<br/>

## 🛠 Tech Stack

| Category          | Technologies                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**      | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Graphics**      | ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white) ![React Three Fiber](https://img.shields.io/badge/R3F-000000?style=flat-square&logo=three.js&logoColor=white) ![Konva](https://img.shields.io/badge/Konva-0D83CD?style=flat-square)                                                                                                                                                                  |
| **State**         | ![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white)                                                                                                                                                                                                                                                                                                                                                            |
| **Communication** | ![WebSocket](https://img.shields.io/badge/WebSocket-000000?style=flat-square&logo=socket.io&logoColor=white) ![SSE](https://img.shields.io/badge/SSE-server_sent_events-green?style=flat-square)                                                                                                                                                                                                                                                               |
| **AI Tools**      | ![Meshy AI](https://img.shields.io/badge/Meshy_AI-Integration-blueviolet?style=flat-square)                                                                                                                                                                                                                                                                                                                                                                    |

<br/>

## ✨ Key Features

### 🎨 2D·3D 통합 에디팅

- 텍스트, 이미지 등 **2D 객체**와 외부 **3D 모델(GLTF 등)**을 한 화면에서 자유롭게 배치 및 조작할 수 있습니다.
- 직관적인 드래그 앤 드롭 인터페이스를 제공합니다.

### 🤖 AI 기반 3D 에셋 생성

- **Meshy AI 연동**: 프롬프트 입력만으로 발표용 3D 오브젝트를 즉시 생성 및 삽입합니다.
- 복잡한 모델링 툴 없이도 고퀄리티 3D 에셋을 확보할 수 있습니다.

### 👥 실시간 협업 시스템

- **WebSocket 기반**: 팀 단위로 프로젝트를 공유하고 편집 사항을 실시간으로 동기화합니다.
- 다른 사용자의 마우스 커서 위치와 작업 내역을 시각적으로 공유합니다.

<br/>

## 💡 Technical Decision Making

### **[Three.js & Konva 조합]**

> 3D 공간의 입체감과 2D 그래픽의 세밀한 편집 기능을 동시에 충족하기 위해 **두 라이브러리를 레이어 형태로 결합**했습니다.

### **[Recoil 상태 관리]**

> 에디터 내 수많은 객체의 상태를 효율적으로 관리하고, 필요한 컴포넌트만 **국소적으로 리렌더링**하기 위해 선택했습니다.

<br/>

## ⚡ Trouble Shooting & Optimization

<details>
<summary><strong>1. Undo/Redo 히스토리 관리 및 메모리 누수 해결</strong></summary>

- **🚨 Problem**

  - 초기에는 `JSON.stringify`를 이용해 전체 상태 객체를 비교하여 히스토리에 저장.
  - 객체 비교 정확도 저하 및 배열 무제한 증가로 인한 **브라우저 메모리 누수 발생**.

- **✅ Solution**

  - `lodash`의 `isEqual` 도입: Deep Equality 체크로 정확도 향상.
  - 히스토리 배열 최대 개수 **50개 제한**: 불필요한 메모리 점유 방지.

- **📈 Result**
  - 메모리 사용량 안정화 및 끊김 없는 실행 취소/다시 실행 경험 제공.

</details>

<details>
<summary><strong>2. SSE(Server-Sent Events)를 활용한 AI 생성 UX 개선</strong></summary>

- **🚨 Problem**

  - AI 3D 모델 생성 시 최대 5분 이상 소요.
  - 단순 HTTP 요청 타임아웃 위험 및 로딩 중 **UX 저하**.

- **✅ Solution**

  - 클라이언트가 서버 상태를 실시간 수신하도록 **SSE 구조 도입**.

- **📈 Result**
  - 모델 생성 중에도 에디터의 다른 기능 사용 가능.
  - 중복 요청 방지로 서버 부하 감소.

</details>

<details>
<summary><strong>3. 3D 카메라 컨트롤 최적화 및 이벤트 핸들링</strong></summary>

- **🚨 Problem**

  - `Edit3d` 컴포넌트 카메라 회전 시, React State 업데이트로 인한 **과도한 리렌더링 및 화면 끊김**.

- **✅ Solution**

  - `window.addEventListener`로 이벤트 직접 수신.
  - 마우스 이동량을 계산해 `camera.quaternion` 직접 조작.

- **📈 Result**
  - 리렌더링 없는 부드러운 카메라 회전 및 GPU 가속 활용.

</details>

<br/>

## 🏗 Project Structure

> **Standard React Folder Structure**를 기반으로 기능 단위로 명확하게 분리된 구조입니다.

```bash
src/
 ├── components/       # 🧩 UI 및 에디터 핵심 모듈 (EditPage/, Edit3d/ 등)
 ├── pages/            # 📄 라우팅 페이지 (EditPage.jsx, ItemPage.jsx 등)
 ├── hooks/            # 🎣 비즈니스 로직 분리 (useShapeHandlers, useItemValue 등)
 ├── store/            # 💾 전역 상태 관리 (recoil.js, toolState.js)
 ├── apis/             # 🌐 외부 API 통신
 └── assets/           # 🖼️ 정적 리소스
```

<br/>

## 🏆 Achievements & Lessons Learned

- **WebSocket 프로토콜 설계**: 실시간 에디터 구현을 통해 단순 채팅을 넘어선 '상태 동기화'를 위한 이벤트 설계 경험.
- **3D 웹 기술 습득**: Three.js의 카메라, 조명, 지오메트리 개념을 익히고 React 생명주기와 조화시키는 노하우 습득.
