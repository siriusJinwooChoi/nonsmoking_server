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
    url: 'https://www.youtube.com/watch?v=ICBTIZsfz_o'
  },
  {
    id: '2',
    title: '금연 챌린지 30일 후기',
    url: 'https://www.youtube.com/watch?v=QKvtwMXp_og'
  },
];

  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});