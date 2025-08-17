const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // CORS 허용

// 추천 유튜브 영상 목록 API
app.get('/api/youtube/curated', (req, res) => {
  const videos = [
  {
    id: '1',
    title: '담배를 끊는 최고의 방법 (feat. 의사)',
    url: 'https://www.youtube.com/watch?v=B7kTG_jOeQs'
  },
  {
    id: '2',
    title: '금연 챌린지 30일 후기',
    url: 'https://www.youtube.com/watch?v=KGeOg6L9YvY'
  },
  {
    id: '3',
    title: '금연을 하면 생기는 놀라운 변화',
    url: 'https://www.youtube.com/watch?v=O2bZxq0aAaE'
  },
  {
    id: '4',
    title: '전자담배도 끊어야 할까요?',
    url: 'https://www.youtube.com/watch?v=w6jxV-CM5ew'
  },
  {
    id: '5',
    title: '금연하면 몸에 생기는 변화들',
    url: 'https://www.youtube.com/watch?v=2YJ0Q2R3Clc'
  },
  {
    id: '6',
    title: '하루에 담배 1개비 줄이기',
    url: 'https://www.youtube.com/watch?v=PoL-L1Gk7Xc'
  },
  {
    id: '7',
    title: '금연을 위한 식습관',
    url: 'https://www.youtube.com/watch?v=Fcm3fMObw6o'
  },
  {
    id: '8',
    title: '심리학자가 알려주는 금연법',
    url: 'https://www.youtube.com/watch?v=bOHkXlJsazA'
  },
  {
    id: '9',
    title: '금연을 위한 명상과 호흡법',
    url: 'https://www.youtube.com/watch?v=JUnkHUY96L4'
  },
  {
    id: '10',
    title: '10년차 금연 성공자의 조언',
    url: 'https://www.youtube.com/watch?v=2Sh8o9z9Iq8'
  },
];

  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});