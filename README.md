# learn_vuejs

터미널에서 뷰프로젝트 생성하기
vue create 프로젝트이름


dev 서버켜기
npm run serve

----
서버통신을위해 npm으로 axios 설치 (fetch와 비슷한사용법)

개발단계에서 문제없게하기위해 (dev서버에)
프록시설정해야함. 
(vue.config.js에서)
 devServer: {
    proxy: {
      "/": {
        target: "http://localhost",
      },
    },
  },

--
배포를 위한 build
npn run build




-----------
vue add vuex 
vue add router
npm i --s axios

npm i --s vuex-persistedstate 
vuex 새로고침해도 데이터 안날아가는 라이브러리

