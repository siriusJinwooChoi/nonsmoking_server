const express = require('express');
const cors = require('cors'); // CORS 허용을 위한 미들웨어
const app = express();
const port = 3000;

app.use(cors()); // 모든 origin 허용

// 간단한 헬스체크
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 금연 관련 추천 유튜브 영상 리스트 API
app.get('/api/youtube/curated', (req, res) => {
  const videos = [
    {
      videoId: 'dQw4w9WgXcQ',
      title: '금연을 결심한 당신을 위한 영상',
      channelTitle: 'Quit Smoking Motivation',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    {
      videoId: 'V-_O7nl0Ii0',
      title: '금연 후 몸의 변화',
      channelTitle: 'Health Insights',
      thumbnail: 'https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg',
    },
    {
      videoId: 'U06jlgpMtQs',
      title: '스트레스를 해소하는 호흡 명상',
      channelTitle: 'Mindfulness Lab',
      thumbnail: 'https://img.youtube.com/vi/U06jlgpMtQs/hqdefault.jpg',
    }
  ];

  res.json({ items: videos });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});