/* =========================================================================
 * 천자문 어드벤처: 마법의 팝업 — 콘텐츠 데이터
 * 기초 100자 (25개 에피소드 × 4자) · 5개 장(章)
 * 천자문 실제 첫 100자: 天地玄黃 … 弔民伐罪
 * 퀴즈 보기는 런타임에서 다른 한자들의 훈음으로 동적 생성한다.
 * ======================================================================= */

const CH1 = '1장 — 천지창조';
const CH2 = '2장 — 계절과 기상';
const CH3 = '3장 — 산천의 보배';
const CH4 = '4장 — 만물의 이치';
const CH5 = '5장 — 문명과 성군';

const EPISODES_BASE = [
  /* ===================== 1장 — 천지창조 ===================== */
  {
    id: 'ep01', title: '우주의 시작', chapter: CH1,
    comboPhrase: '天地玄黃', comboTranslation: '하늘은 검고 땅은 누르다',
    characters: [
      { id: 'ep01-01', character: '天', meaning: '하늘', sound: '천', radical: '大', strokeCount: 4,
        originStory: '사람이 팔다리를 벌리고 선 모양(大) 위에, ‘가장 높은 곳’을 뜻하는 한 획을 그어 머리 위의 하늘을 나타냈다.',
        vocabulary: [{ word: '天國 (천국)', meaning: '하늘나라' }, { word: '天才 (천재)', meaning: '타고난 뛰어난 재주를 가진 사람' }] },
      { id: 'ep01-02', character: '地', meaning: '땅', sound: '지', radical: '土', strokeCount: 6,
        originStory: '흙(土)과 구불구불 뻗어가는 모양(也)이 합쳐져, 만물을 길러내며 끝없이 펼쳐진 땅을 의미한다.',
        vocabulary: [{ word: '地球 (지구)', meaning: '우리가 사는 행성' }, { word: '土地 (토지)', meaning: '사람이 쓰는 땅' }] },
      { id: 'ep01-03', character: '玄', meaning: '검을', sound: '현', radical: '玄', strokeCount: 5,
        originStory: '가느다란 실타래를 묶어 늘어뜨린 모양에서 유래했다. 깊고 아득하여 눈에 잘 보이지 않는, 검고 오묘한 빛을 뜻한다.',
        vocabulary: [{ word: '玄關 (현관)', meaning: '집의 출입구' }, { word: '玄妙 (현묘)', meaning: '헤아릴 수 없이 깊고 미묘함' }] },
      { id: 'ep01-04', character: '黃', meaning: '누를', sound: '황', radical: '黃', strokeCount: 12,
        originStory: '사람이 허리춤에 황금빛 옥(玉)을 차고 있는 모습에서, 풍요로운 흙과 황금의 누런 색을 나타냈다.',
        vocabulary: [{ word: '黃金 (황금)', meaning: '누런빛의 금' }, { word: '黃土 (황토)', meaning: '누렇고 거친 흙' }] }
    ]
  },
  {
    id: 'ep02', title: '드넓은 우주', chapter: CH1,
    comboPhrase: '宇宙洪荒', comboTranslation: '우주는 넓고 끝없이 거칠다',
    characters: [
      { id: 'ep02-01', character: '宇', meaning: '집', sound: '우', radical: '宀', strokeCount: 6,
        originStory: '지붕(宀)과 끝까지 뻗어나간다는 소리(于)가 합쳐져, 사방과 상하로 무한히 펼쳐진 공간(우주)을 뜻한다.',
        vocabulary: [{ word: '宇宙 (우주)', meaning: '온 세상의 공간' }] },
      { id: 'ep02-02', character: '宙', meaning: '집', sound: '주', radical: '宀', strokeCount: 8,
        originStory: '지붕(宀) 아래로 시간이 말미암아(由) 흐른다는 뜻으로, 과거와 미래로 무한히 이어지는 시간을 가리킨다.',
        vocabulary: [{ word: '宇宙 (우주)', meaning: '공간과 시간을 아우른 세계' }] },
      { id: 'ep02-03', character: '洪', meaning: '넓을', sound: '홍', radical: '氵', strokeCount: 9,
        originStory: '물(氵)이 여럿 모여 함께(共) 넘쳐흐르는 모습에서, 크고 넓다는 뜻이 되었다.',
        vocabulary: [{ word: '洪水 (홍수)', meaning: '크게 불어난 물' }, { word: '洪福 (홍복)', meaning: '큰 복' }] },
      { id: 'ep02-04', character: '荒', meaning: '거칠', sound: '황', radical: '艹', strokeCount: 9,
        originStory: '풀(艹)이 우거져 망(亡)하듯 버려진 들판을 나타내, 거칠고 황량함을 뜻한다.',
        vocabulary: [{ word: '荒野 (황야)', meaning: '거친 들판' }, { word: '荒廢 (황폐)', meaning: '거칠고 못쓰게 됨' }] }
    ]
  },
  {
    id: 'ep03', title: '해와 달', chapter: CH1,
    comboPhrase: '日月盈昃', comboTranslation: '해와 달은 차고 기운다',
    characters: [
      { id: 'ep03-01', character: '日', meaning: '날', sound: '일', radical: '日', strokeCount: 4,
        originStory: '둥근 해의 모양을 본떠 만든 글자로, 가운데 점은 해의 빛을 나타낸다. ‘해’와 ‘하루(날)’를 뜻한다.',
        vocabulary: [{ word: '日記 (일기)', meaning: '날마다 적는 기록' }, { word: '日出 (일출)', meaning: '해가 떠오름' }] },
      { id: 'ep03-02', character: '月', meaning: '달', sound: '월', radical: '月', strokeCount: 4,
        originStory: '이지러진 초승달의 모양을 본떠 만든 글자다. 늘 차고 기우는 달의 모습에서 ‘달’과 ‘한 달’을 뜻한다.',
        vocabulary: [{ word: '月光 (월광)', meaning: '달빛' }, { word: '歲月 (세월)', meaning: '흘러가는 시간' }] },
      { id: 'ep03-03', character: '盈', meaning: '찰', sound: '영', radical: '皿', strokeCount: 9,
        originStory: '그릇(皿)에 물건이 가득 담겨 넘치는 모습에서, ‘가득 차다’라는 뜻이 되었다.',
        vocabulary: [{ word: '盈滿 (영만)', meaning: '가득 참' }, { word: '盈虛 (영허)', meaning: '차고 빔' }] },
      { id: 'ep03-04', character: '昃', meaning: '기울', sound: '측', radical: '日', strokeCount: 8,
        originStory: '해(日)가 한쪽으로 기울어진(仄) 모습에서, ‘해가 서쪽으로 기울다’라는 뜻이 되었다.',
        vocabulary: [{ word: '日昃 (일측)', meaning: '해가 기욺' }] }
    ]
  },
  {
    id: 'ep04', title: '별들의 자리', chapter: CH1,
    comboPhrase: '辰宿列張', comboTranslation: '별과 별자리가 벌여 펼쳐져 있다',
    characters: [
      { id: 'ep04-01', character: '辰', meaning: '별', sound: '진', radical: '辰', strokeCount: 7,
        originStory: '조개가 껍데기를 벌린 모양에서 비롯되었고, 뒤에 ‘별’과 ‘때(시간)’를 뜻하게 되었다.',
        vocabulary: [{ word: '星辰 (성신)', meaning: '하늘의 별들' }, { word: '生辰 (생신)', meaning: '태어난 날(생일의 높임말)' }] },
      { id: 'ep04-02', character: '宿', meaning: '잘', sound: '숙', radical: '宀', strokeCount: 11,
        originStory: '지붕(宀) 아래 사람(亻)이 자리에 머물러 잠드는 모습에서 ‘자다, 머물다’를 뜻한다. 별자리를 뜻할 땐 ‘수’로 읽는다.',
        vocabulary: [{ word: '宿所 (숙소)', meaning: '머물러 자는 곳' }, { word: '星宿 (성수)', meaning: '별자리' }] },
      { id: 'ep04-03', character: '列', meaning: '벌일', sound: '렬', radical: '刀', strokeCount: 6,
        originStory: '칼(刂)로 뼈를 발라 가지런히 늘어놓는 모습에서, ‘줄지어 벌여 놓다’라는 뜻이 되었다.',
        vocabulary: [{ word: '列車 (열차)', meaning: '여러 칸을 줄지은 기차' }, { word: '羅列 (나열)', meaning: '죽 벌여 놓음' }] },
      { id: 'ep04-04', character: '張', meaning: '베풀', sound: '장', radical: '弓', strokeCount: 11,
        originStory: '활(弓)의 시위를 길게(長) 당겨 펼치는 모습에서, ‘넓게 펼치다, 베풀다’라는 뜻이 되었다.',
        vocabulary: [{ word: '主張 (주장)', meaning: '자기 의견을 내세움' }, { word: '緊張 (긴장)', meaning: '팽팽하게 당겨진 마음' }] }
    ]
  },
  {
    id: 'ep05', title: '추위와 더위', chapter: CH1,
    comboPhrase: '寒來暑往', comboTranslation: '추위가 오면 더위가 물러간다',
    characters: [
      { id: 'ep05-01', character: '寒', meaning: '찰', sound: '한', radical: '宀', strokeCount: 12,
        originStory: '집(宀) 안에서 사람이 풀더미로 몸을 감싸고 발 밑엔 얼음(冫)이 언 모습에서, ‘차다, 춥다’를 뜻한다.',
        vocabulary: [{ word: '寒冷 (한랭)', meaning: '차고 추움' }, { word: '寒波 (한파)', meaning: '갑작스러운 추위' }] },
      { id: 'ep05-02', character: '來', meaning: '올', sound: '래', radical: '人', strokeCount: 8,
        originStory: '잘 여문 보리의 이삭 모양을 본뜬 글자로, 하늘이 보내 ‘온’ 곡식이라는 데서 ‘오다’라는 뜻이 되었다.',
        vocabulary: [{ word: '未來 (미래)', meaning: '아직 오지 않은 때' }, { word: '來年 (내년)', meaning: '다가오는 해' }] },
      { id: 'ep05-03', character: '暑', meaning: '더울', sound: '서', radical: '日', strokeCount: 13,
        originStory: '해(日)가 사람들(者) 위로 내리쬐는 모습에서, ‘덥다, 더위’를 뜻한다.',
        vocabulary: [{ word: '暑氣 (서기)', meaning: '더운 기운' }, { word: '避暑 (피서)', meaning: '더위를 피함' }] },
      { id: 'ep05-04', character: '往', meaning: '갈', sound: '왕', radical: '彳', strokeCount: 8,
        originStory: '길을 걸어가는(彳) 발걸음에서 비롯되어, ‘가다, 지나가다’라는 뜻이 되었다.',
        vocabulary: [{ word: '往來 (왕래)', meaning: '가고 옴' }, { word: '往復 (왕복)', meaning: '갔다가 돌아옴' }] }
    ]
  },

  /* ===================== 2장 — 계절과 기상 ===================== */
  {
    id: 'ep06', title: '거두고 갈무리하다', chapter: CH2,
    comboPhrase: '秋收冬藏', comboTranslation: '가을에 거두고 겨울에 갈무리한다',
    characters: [
      { id: 'ep06-01', character: '秋', meaning: '가을', sound: '추', radical: '禾', strokeCount: 9,
        originStory: '익은 벼(禾)와 불(火)처럼 붉게 물든 들판에서, 곡식을 거두는 ‘가을’을 뜻한다.',
        vocabulary: [{ word: '秋收 (추수)', meaning: '가을에 곡식을 거둠' }, { word: '春秋 (춘추)', meaning: '봄과 가을, 또는 나이' }] },
      { id: 'ep06-02', character: '收', meaning: '거둘', sound: '수', radical: '攴', strokeCount: 6,
        originStory: '얽힌 것을 쳐서(攵) 한데 거두어 모으는 모습에서, ‘거두다, 모으다’라는 뜻이 되었다.',
        vocabulary: [{ word: '收穫 (수확)', meaning: '익은 곡식을 거둠' }, { word: '回收 (회수)', meaning: '도로 거두어들임' }] },
      { id: 'ep06-03', character: '冬', meaning: '겨울', sound: '동', radical: '冫', strokeCount: 5,
        originStory: '실의 양 끝을 맺어 마무리한 모양에 얼음(冫)이 더해져, 한 해의 끝이자 얼어붙는 ‘겨울’을 뜻한다.',
        vocabulary: [{ word: '冬眠 (동면)', meaning: '겨울잠' }, { word: '越冬 (월동)', meaning: '겨울을 남' }] },
      { id: 'ep06-04', character: '藏', meaning: '감출', sound: '장', radical: '艹', strokeCount: 17,
        originStory: '풀(艹)로 덮어 잘 간직한다는 데서, ‘감추다, 갈무리하다’라는 뜻이 되었다.',
        vocabulary: [{ word: '貯藏 (저장)', meaning: '모아서 간직함' }, { word: '埋藏 (매장)', meaning: '땅속에 묻어 감춤' }] }
    ]
  },
  {
    id: 'ep07', title: '윤달과 한 해', chapter: CH2,
    comboPhrase: '閏餘成歲', comboTranslation: '윤달의 남는 날을 모아 한 해를 이룬다',
    characters: [
      { id: 'ep07-01', character: '閏', meaning: '윤달', sound: '윤', radical: '門', strokeCount: 12,
        originStory: '왕(王)이 문(門) 안에 머무는 특별한 날의 제도에서, 정상 달 외에 더해지는 ‘윤달’을 뜻한다.',
        vocabulary: [{ word: '閏年 (윤년)', meaning: '2월이 29일인 해' }] },
      { id: 'ep07-02', character: '餘', meaning: '남을', sound: '여', radical: '食', strokeCount: 16,
        originStory: '먹을 것(食)이 넉넉히 남아 여유로운 데서, ‘남다, 넉넉하다’라는 뜻이 되었다.',
        vocabulary: [{ word: '餘裕 (여유)', meaning: '넉넉하고 남음' }, { word: '剩餘 (잉여)', meaning: '쓰고 남은 것' }] },
      { id: 'ep07-03', character: '成', meaning: '이룰', sound: '성', radical: '戈', strokeCount: 7,
        originStory: '무기(戊)로 평정해 일을 끝맺는 데서, ‘이루다, 완성하다’라는 뜻이 되었다.',
        vocabulary: [{ word: '成功 (성공)', meaning: '뜻을 이룸' }, { word: '完成 (완성)', meaning: '완전히 다 이룸' }] },
      { id: 'ep07-04', character: '歲', meaning: '해', sound: '세', radical: '止', strokeCount: 13,
        originStory: '세월이 걸음(止)처럼 끊임없이 지나가는 데서, ‘해, 나이’를 뜻한다.',
        vocabulary: [{ word: '歲月 (세월)', meaning: '흘러가는 시간' }, { word: '年歲 (연세)', meaning: '나이의 높임말' }] }
    ]
  },
  {
    id: 'ep08', title: '음률과 양기', chapter: CH2,
    comboPhrase: '律呂調陽', comboTranslation: '율과 려로 음양과 계절을 고르게 한다',
    characters: [
      { id: 'ep08-01', character: '律', meaning: '법칙', sound: '률', radical: '彳', strokeCount: 9,
        originStory: '길을 걸으며(彳) 붓(聿)으로 지켜야 할 법도를 적는 데서, ‘법칙, 가락’을 뜻한다.',
        vocabulary: [{ word: '法律 (법률)', meaning: '나라가 정한 규칙' }, { word: '規律 (규율)', meaning: '지켜야 할 질서' }] },
      { id: 'ep08-02', character: '呂', meaning: '음률', sound: '려', radical: '口', strokeCount: 7,
        originStory: '등뼈가 이어진 모양에서 비롯되어, 음악의 가락(음려)을 뜻한다.',
        vocabulary: [{ word: '律呂 (율려)', meaning: '음악의 가락과 음계' }] },
      { id: 'ep08-03', character: '調', meaning: '고를', sound: '조', radical: '言', strokeCount: 15,
        originStory: '말(言)을 두루(周) 맞추어 어울리게 하는 데서, ‘고르다, 어울리다’라는 뜻이 되었다.',
        vocabulary: [{ word: '調和 (조화)', meaning: '서로 잘 어울림' }, { word: '調節 (조절)', meaning: '알맞게 맞춤' }] },
      { id: 'ep08-04', character: '陽', meaning: '볕', sound: '양', radical: '阜', strokeCount: 12,
        originStory: '언덕(阝)에 해가 밝게 비치는 양지에서, ‘볕, 양(陽)’을 뜻한다.',
        vocabulary: [{ word: '太陽 (태양)', meaning: '해' }, { word: '陽地 (양지)', meaning: '볕이 드는 곳' }] }
    ]
  },
  {
    id: 'ep09', title: '구름과 비', chapter: CH2,
    comboPhrase: '雲騰致雨', comboTranslation: '구름이 올라 비를 이룬다',
    characters: [
      { id: 'ep09-01', character: '雲', meaning: '구름', sound: '운', radical: '雨', strokeCount: 12,
        originStory: '비(雨)를 머금고 피어오르는 김(云)의 모습에서, ‘구름’을 뜻한다.',
        vocabulary: [{ word: '雲海 (운해)', meaning: '바다처럼 펼쳐진 구름' }, { word: '風雲 (풍운)', meaning: '바람과 구름, 큰 형세' }] },
      { id: 'ep09-02', character: '騰', meaning: '오를', sound: '등', radical: '馬', strokeCount: 20,
        originStory: '말(馬)이 힘차게 뛰어오르는 모습에서, ‘오르다, 솟구치다’라는 뜻이 되었다.',
        vocabulary: [{ word: '騰落 (등락)', meaning: '오르고 내림' }, { word: '急騰 (급등)', meaning: '갑자기 크게 오름' }] },
      { id: 'ep09-03', character: '致', meaning: '이를', sound: '치', radical: '至', strokeCount: 10,
        originStory: '끝까지 다다르게(至) 한다는 데서, ‘이르다, 이루어 내다’라는 뜻이 되었다.',
        vocabulary: [{ word: '一致 (일치)', meaning: '서로 꼭 들어맞음' }, { word: '致命 (치명)', meaning: '목숨에 이를 만큼 큼' }] },
      { id: 'ep09-04', character: '雨', meaning: '비', sound: '우', radical: '雨', strokeCount: 8,
        originStory: '하늘(一)과 구름(冂)에서 물방울이 떨어지는 모양을 본떠, ‘비’를 뜻한다.',
        vocabulary: [{ word: '雨傘 (우산)', meaning: '비를 막는 도구' }, { word: '暴雨 (폭우)', meaning: '갑자기 쏟아지는 큰비' }] }
    ]
  },
  {
    id: 'ep10', title: '이슬과 서리', chapter: CH2,
    comboPhrase: '露結爲霜', comboTranslation: '이슬이 맺혀 서리가 된다',
    characters: [
      { id: 'ep10-01', character: '露', meaning: '이슬', sound: '로', radical: '雨', strokeCount: 21,
        originStory: '길(路)가의 풀잎에 맺힌 빗방울(雨) 같은 물방울에서, ‘이슬, 드러나다’를 뜻한다.',
        vocabulary: [{ word: '露店 (노점)', meaning: '길가에 드러내 놓고 파는 가게' }, { word: '露出 (노출)', meaning: '겉으로 드러남' }] },
      { id: 'ep10-02', character: '結', meaning: '맺을', sound: '결', radical: '糸', strokeCount: 12,
        originStory: '실(糸)을 묶어 매듭(吉)을 짓는 데서, ‘맺다, 매듭’을 뜻한다.',
        vocabulary: [{ word: '結果 (결과)', meaning: '맺어진 끝, 열매' }, { word: '結合 (결합)', meaning: '서로 맺어 합침' }] },
      { id: 'ep10-03', character: '爲', meaning: '할', sound: '위', radical: '爪', strokeCount: 12,
        originStory: '손(爪)으로 코끼리를 부려 일을 하는 모습에서, ‘하다, 되다, 위하다’를 뜻한다.',
        vocabulary: [{ word: '行爲 (행위)', meaning: '하는 짓, 행동' }, { word: '當爲 (당위)', meaning: '마땅히 해야 함' }] },
      { id: 'ep10-04', character: '霜', meaning: '서리', sound: '상', radical: '雨', strokeCount: 17,
        originStory: '서로(相) 엉겨 내린 찬 기운(雨)에서, 풀잎을 하얗게 덮는 ‘서리’를 뜻한다.',
        vocabulary: [{ word: '秋霜 (추상)', meaning: '가을 서리, 매서운 기세' }, { word: '霜害 (상해)', meaning: '서리로 입는 농작물 피해' }] }
    ]
  },

  /* ===================== 3장 — 산천의 보배 ===================== */
  {
    id: 'ep11', title: '금이 나는 물', chapter: CH3,
    comboPhrase: '金生麗水', comboTranslation: '금은 여수(麗水) 강에서 난다',
    characters: [
      { id: 'ep11-01', character: '金', meaning: '쇠', sound: '금', radical: '金', strokeCount: 8,
        originStory: '흙(土) 속에 금속 알갱이가 묻혀 빛나는 모양에서, ‘쇠, 금’을 뜻한다. 성씨로는 ‘김’으로 읽는다.',
        vocabulary: [{ word: '黃金 (황금)', meaning: '누런빛의 금' }, { word: '料金 (요금)', meaning: '값으로 내는 돈' }] },
      { id: 'ep11-02', character: '生', meaning: '날', sound: '생', radical: '生', strokeCount: 5,
        originStory: '땅(土)에서 새싹이 돋아 자라나는 모양에서, ‘나다, 살다, 낳다’를 뜻한다.',
        vocabulary: [{ word: '生命 (생명)', meaning: '목숨' }, { word: '誕生 (탄생)', meaning: '태어남' }] },
      { id: 'ep11-03', character: '麗', meaning: '고울', sound: '려', radical: '鹿', strokeCount: 19,
        originStory: '사슴(鹿)의 가지런한 두 뿔처럼 곱고 짝이 맞는 데서, ‘곱다, 아름답다’를 뜻한다.',
        vocabulary: [{ word: '華麗 (화려)', meaning: '빛나고 아름다움' }, { word: '高麗 (고려)', meaning: '우리나라의 옛 왕조 이름' }] },
      { id: 'ep11-04', character: '水', meaning: '물', sound: '수', radical: '水', strokeCount: 4,
        originStory: '굽이쳐 흐르는 물줄기의 모양을 본떠, ‘물’을 뜻한다.',
        vocabulary: [{ word: '水道 (수도)', meaning: '물이 흐르는 길' }, { word: '海水 (해수)', meaning: '바닷물' }] }
    ]
  },
  {
    id: 'ep12', title: '옥이 나는 산', chapter: CH3,
    comboPhrase: '玉出崑岡', comboTranslation: '옥은 곤륜산(崑岡)에서 난다',
    characters: [
      { id: 'ep12-01', character: '玉', meaning: '구슬', sound: '옥', radical: '玉', strokeCount: 5,
        originStory: '끈에 꿰어 늘어뜨린 옥구슬을 본뜬 글자로, ‘구슬, 옥’을 뜻한다.',
        vocabulary: [{ word: '玉璽 (옥새)', meaning: '임금의 도장' }, { word: '珠玉 (주옥)', meaning: '구슬과 옥, 매우 귀한 것' }] },
      { id: 'ep12-02', character: '出', meaning: '날', sound: '출', radical: '凵', strokeCount: 5,
        originStory: '초목이 위로 돋아 나오는 모양에서, ‘나다, 나가다, 내다’를 뜻한다.',
        vocabulary: [{ word: '出發 (출발)', meaning: '길을 떠남' }, { word: '出口 (출구)', meaning: '나가는 문' }] },
      { id: 'ep12-03', character: '崑', meaning: '산이름', sound: '곤', radical: '山', strokeCount: 11,
        originStory: '산(山)을 뜻하는 글자로, 옥이 많이 난다는 전설의 산 ‘곤륜산’을 가리킨다.',
        vocabulary: [{ word: '崑崙 (곤륜)', meaning: '옥이 난다는 전설의 산' }] },
      { id: 'ep12-04', character: '岡', meaning: '산등성이', sound: '강', radical: '山', strokeCount: 8,
        originStory: '산(山)의 등줄기를 뜻하여, ‘산등성이, 언덕’을 가리킨다.',
        vocabulary: [{ word: '岡陵 (강릉)', meaning: '언덕과 구릉' }] }
    ]
  },
  {
    id: 'ep13', title: '이름난 명검', chapter: CH3,
    comboPhrase: '劍號巨闕', comboTranslation: '명검으로는 거궐(巨闕)을 으뜸으로 일컫는다',
    characters: [
      { id: 'ep13-01', character: '劍', meaning: '칼', sound: '검', radical: '刀', strokeCount: 15,
        originStory: '양쪽에 날이 선 칼(刂)을 뜻하여, ‘칼, 검’을 가리킨다.',
        vocabulary: [{ word: '劍術 (검술)', meaning: '칼 쓰는 재주' }, { word: '名劍 (명검)', meaning: '이름난 좋은 칼' }] },
      { id: 'ep13-02', character: '號', meaning: '이름', sound: '호', radical: '虍', strokeCount: 13,
        originStory: '범(虎)처럼 크게 부르짖어 알린다는 데서, ‘부르다, 이름, 부호’를 뜻한다.',
        vocabulary: [{ word: '番號 (번호)', meaning: '차례를 매긴 수' }, { word: '記號 (기호)', meaning: '뜻을 나타내는 표시' }] },
      { id: 'ep13-03', character: '巨', meaning: '클', sound: '거', radical: '工', strokeCount: 5,
        originStory: '큰 곱자(자)를 손에 쥔 모양에서, ‘크다, 거대하다’를 뜻한다.',
        vocabulary: [{ word: '巨大 (거대)', meaning: '엄청나게 큼' }, { word: '巨人 (거인)', meaning: '몸집이 아주 큰 사람' }] },
      { id: 'ep13-04', character: '闕', meaning: '대궐', sound: '궐', radical: '門', strokeCount: 18,
        originStory: '문(門) 양옆에 망루를 세운 큰 궁궐에서, ‘대궐, 빠지다’를 뜻한다.',
        vocabulary: [{ word: '宮闕 (궁궐)', meaning: '임금이 사는 큰 집' }, { word: '闕席 (궐석)', meaning: '자리에 빠짐' }] }
    ]
  },
  {
    id: 'ep14', title: '밤을 밝히는 구슬', chapter: CH3,
    comboPhrase: '珠稱夜光', comboTranslation: '구슬로는 야광주(夜光珠)를 으뜸으로 일컫는다',
    characters: [
      { id: 'ep14-01', character: '珠', meaning: '구슬', sound: '주', radical: '玉', strokeCount: 10,
        originStory: '조개 속 붉은(朱) 알 같은 옥(玉)에서, ‘구슬, 진주’를 뜻한다.',
        vocabulary: [{ word: '眞珠 (진주)', meaning: '조개에서 나는 보석' }, { word: '念珠 (염주)', meaning: '꿰어 만든 구슬' }] },
      { id: 'ep14-02', character: '稱', meaning: '일컬을', sound: '칭', radical: '禾', strokeCount: 14,
        originStory: '벼(禾)를 저울로 달아 값을 매기는 데서, ‘일컫다, 칭찬하다, 저울’을 뜻한다.',
        vocabulary: [{ word: '稱讚 (칭찬)', meaning: '좋게 기림' }, { word: '名稱 (명칭)', meaning: '부르는 이름' }] },
      { id: 'ep14-03', character: '夜', meaning: '밤', sound: '야', radical: '夕', strokeCount: 8,
        originStory: '저녁(夕) 달빛 아래 사람이 쉬는 때에서, ‘밤’을 뜻한다.',
        vocabulary: [{ word: '夜間 (야간)', meaning: '밤 동안' }, { word: '深夜 (심야)', meaning: '깊은 밤' }] },
      { id: 'ep14-04', character: '光', meaning: '빛', sound: '광', radical: '儿', strokeCount: 6,
        originStory: '사람(儿) 위에 불(火)을 인 모양에서, 사방을 밝히는 ‘빛’을 뜻한다.',
        vocabulary: [{ word: '光線 (광선)', meaning: '빛의 줄기' }, { word: '榮光 (영광)', meaning: '빛나는 영예' }] }
    ]
  },
  {
    id: 'ep15', title: '진귀한 과일', chapter: CH3,
    comboPhrase: '果珍李柰', comboTranslation: '과일 중엔 자두와 능금을 진귀히 여긴다',
    characters: [
      { id: 'ep15-01', character: '果', meaning: '실과', sound: '과', radical: '木', strokeCount: 8,
        originStory: '나무(木) 위에 열매가 둥글게 달린 모양에서, ‘열매, 과일, 결과’를 뜻한다.',
        vocabulary: [{ word: '果實 (과실)', meaning: '나무의 열매' }, { word: '結果 (결과)', meaning: '맺어진 끝' }] },
      { id: 'ep15-02', character: '珍', meaning: '보배', sound: '진', radical: '玉', strokeCount: 9,
        originStory: '귀한 옥(玉)처럼 드물고 값진 데서, ‘보배, 진귀하다’를 뜻한다.',
        vocabulary: [{ word: '珍貴 (진귀)', meaning: '보배롭고 귀함' }, { word: '珍味 (진미)', meaning: '아주 좋은 맛' }] },
      { id: 'ep15-03', character: '李', meaning: '오얏', sound: '리', radical: '木', strokeCount: 7,
        originStory: '나무(木)의 열매(子)인 자두를 뜻하며, 흔한 성씨 ‘이(李)’로도 쓰인다.',
        vocabulary: [{ word: '李花 (이화)', meaning: '자두나무 꽃' }] },
      { id: 'ep15-04', character: '柰', meaning: '능금', sound: '내', radical: '木', strokeCount: 9,
        originStory: '나무(木)에 열리는 능금(사과 종류)을 뜻한다.',
        vocabulary: [{ word: '柰子 (내자)', meaning: '능금 열매' }] }
    ]
  },

  /* ===================== 4장 — 만물의 이치 ===================== */
  {
    id: 'ep16', title: '귀한 채소', chapter: CH4,
    comboPhrase: '菜重芥薑', comboTranslation: '나물 중엔 겨자와 생강을 중히 여긴다',
    characters: [
      { id: 'ep16-01', character: '菜', meaning: '나물', sound: '채', radical: '艹', strokeCount: 12,
        originStory: '풀(艹)을 손으로 캐어(采) 먹는 데서, ‘나물, 채소’를 뜻한다.',
        vocabulary: [{ word: '野菜 (야채)', meaning: '밭에서 기른 채소' }, { word: '菜蔬 (채소)', meaning: '먹을 수 있는 푸성귀' }] },
      { id: 'ep16-02', character: '重', meaning: '무거울', sound: '중', radical: '里', strokeCount: 9,
        originStory: '사람이 무거운 짐을 등에 진 모양에서, ‘무겁다, 거듭, 소중하다’를 뜻한다.',
        vocabulary: [{ word: '重要 (중요)', meaning: '매우 소중함' }, { word: '體重 (체중)', meaning: '몸무게' }] },
      { id: 'ep16-03', character: '芥', meaning: '겨자', sound: '개', radical: '艹', strokeCount: 8,
        originStory: '풀(艹) 가운데 알이 작고(介) 매운 ‘겨자’를 뜻한다.',
        vocabulary: [{ word: '芥子 (개자)', meaning: '겨자씨' }] },
      { id: 'ep16-04', character: '薑', meaning: '생강', sound: '강', radical: '艹', strokeCount: 17,
        originStory: '밭이랑(畺)에서 자라는 매운 풀(艹)에서, ‘생강’을 뜻한다.',
        vocabulary: [{ word: '生薑 (생강)', meaning: '맵고 향이 나는 뿌리채소' }] }
    ]
  },
  {
    id: 'ep17', title: '바다와 강', chapter: CH4,
    comboPhrase: '海鹹河淡', comboTranslation: '바닷물은 짜고 강물은 싱겁다',
    characters: [
      { id: 'ep17-01', character: '海', meaning: '바다', sound: '해', radical: '氵', strokeCount: 10,
        originStory: '온갖 물(氵)을 어머니(每)처럼 받아 모으는 데서, ‘바다’를 뜻한다.',
        vocabulary: [{ word: '海洋 (해양)', meaning: '넓고 큰 바다' }, { word: '航海 (항해)', meaning: '배로 바다를 건넘' }] },
      { id: 'ep17-02', character: '鹹', meaning: '짤', sound: '함', radical: '鹵', strokeCount: 20,
        originStory: '소금밭(鹵)의 짠맛에서, ‘짜다’를 뜻한다.',
        vocabulary: [{ word: '鹹味 (함미)', meaning: '짠맛' }] },
      { id: 'ep17-03', character: '河', meaning: '물', sound: '하', radical: '氵', strokeCount: 8,
        originStory: '본래 중국의 황하를 가리키던 큰 물(氵)에서, ‘강, 큰 물’을 뜻한다.',
        vocabulary: [{ word: '河川 (하천)', meaning: '강과 시내' }, { word: '銀河 (은하)', meaning: '밤하늘의 별 무리' }] },
      { id: 'ep17-04', character: '淡', meaning: '맑을', sound: '담', radical: '氵', strokeCount: 11,
        originStory: '물(氵)에 불기운(炎)이 옅어진 데서, ‘맑다, 묽다, 싱겁다, 담담하다’를 뜻한다.',
        vocabulary: [{ word: '淡白 (담백)', meaning: '욕심 없이 깨끗함' }, { word: '冷淡 (냉담)', meaning: '쌀쌀맞고 무관심함' }] }
    ]
  },
  {
    id: 'ep18', title: '물고기와 새', chapter: CH4,
    comboPhrase: '鱗潛羽翔', comboTranslation: '비늘 있는 고기는 잠기고 깃 있는 새는 난다',
    characters: [
      { id: 'ep18-01', character: '鱗', meaning: '비늘', sound: '린', radical: '魚', strokeCount: 23,
        originStory: '물고기(魚)의 몸을 겹겹이 덮은 데서, ‘비늘’을 뜻한다.',
        vocabulary: [{ word: '魚鱗 (어린)', meaning: '물고기 비늘' }, { word: '逆鱗 (역린)', meaning: '거꾸로 난 비늘, 임금의 노여움' }] },
      { id: 'ep18-02', character: '潛', meaning: '잠길', sound: '잠', radical: '氵', strokeCount: 15,
        originStory: '물(氵) 속에 가만히 숨어드는 데서, ‘잠기다, 숨다’를 뜻한다.',
        vocabulary: [{ word: '潛水 (잠수)', meaning: '물속에 들어감' }, { word: '潛在 (잠재)', meaning: '속에 숨어 있음' }] },
      { id: 'ep18-03', character: '羽', meaning: '깃', sound: '우', radical: '羽', strokeCount: 6,
        originStory: '새의 두 날개깃 모양을 본떠, ‘깃, 날개’를 뜻한다.',
        vocabulary: [{ word: '羽毛 (우모)', meaning: '깃털' }, { word: '羽化 (우화)', meaning: '날개가 돋아 날게 됨' }] },
      { id: 'ep18-04', character: '翔', meaning: '날', sound: '상', radical: '羽', strokeCount: 12,
        originStory: '깃(羽)을 활짝 펴고 빙빙 도는 데서, ‘날다, 빙빙 돌다’를 뜻한다.',
        vocabulary: [{ word: '飛翔 (비상)', meaning: '높이 날아오름' }] }
    ]
  },
  {
    id: 'ep19', title: '전설의 임금들', chapter: CH4,
    comboPhrase: '龍師火帝', comboTranslation: '용사(복희)와 화제(신농)가 있었다',
    characters: [
      { id: 'ep19-01', character: '龍', meaning: '용', sound: '룡', radical: '龍', strokeCount: 16,
        originStory: '구름과 비를 부린다는 신령한 동물 ‘용’의 모습을 본뜬 글자다.',
        vocabulary: [{ word: '龍宮 (용궁)', meaning: '바닷속 용왕의 궁전' }, { word: '恐龍 (공룡)', meaning: '먼 옛날의 거대한 파충류' }] },
      { id: 'ep19-02', character: '師', meaning: '스승', sound: '사', radical: '巾', strokeCount: 10,
        originStory: '많은 무리를 거느려 이끈다는 데서, ‘스승, 군사’를 뜻한다.',
        vocabulary: [{ word: '敎師 (교사)', meaning: '가르치는 선생님' }, { word: '師弟 (사제)', meaning: '스승과 제자' }] },
      { id: 'ep19-03', character: '火', meaning: '불', sound: '화', radical: '火', strokeCount: 4,
        originStory: '타오르는 불꽃의 모양을 본떠, ‘불’을 뜻한다.',
        vocabulary: [{ word: '火災 (화재)', meaning: '불이 나는 재앙' }, { word: '消火 (소화)', meaning: '불을 끔' }] },
      { id: 'ep19-04', character: '帝', meaning: '임금', sound: '제', radical: '巾', strokeCount: 9,
        originStory: '하늘에 제사를 주관하는 가장 높은 이에서, ‘임금, 황제’를 뜻한다.',
        vocabulary: [{ word: '皇帝 (황제)', meaning: '제국의 임금' }, { word: '帝國 (제국)', meaning: '황제가 다스리는 나라' }] }
    ]
  },
  {
    id: 'ep20', title: '벼슬과 임금', chapter: CH4,
    comboPhrase: '鳥官人皇', comboTranslation: '조관(소호)과 인황이 뒤를 이었다',
    characters: [
      { id: 'ep20-01', character: '鳥', meaning: '새', sound: '조', radical: '鳥', strokeCount: 11,
        originStory: '꽁지가 긴 새의 모양을 본떠, ‘새’를 뜻한다.',
        vocabulary: [{ word: '鳥類 (조류)', meaning: '새의 무리' }, { word: '白鳥 (백조)', meaning: '흰 큰 물새' }] },
      { id: 'ep20-02', character: '官', meaning: '벼슬', sound: '관', radical: '宀', strokeCount: 8,
        originStory: '집(宀) 안에서 공무를 맡아보는 데서, ‘벼슬, 관청’을 뜻한다.',
        vocabulary: [{ word: '官廳 (관청)', meaning: '나랏일을 보는 곳' }, { word: '長官 (장관)', meaning: '행정 부처의 우두머리' }] },
      { id: 'ep20-03', character: '人', meaning: '사람', sound: '인', radical: '人', strokeCount: 2,
        originStory: '서서 걸어가는 사람의 옆모습을 본떠, ‘사람’을 뜻한다.',
        vocabulary: [{ word: '人間 (인간)', meaning: '사람' }, { word: '人格 (인격)', meaning: '사람으로서의 품격' }] },
      { id: 'ep20-04', character: '皇', meaning: '임금', sound: '황', radical: '白', strokeCount: 9,
        originStory: '빛나는(白) 으뜸가는 임금에서, ‘황제, 임금’을 뜻한다.',
        vocabulary: [{ word: '皇室 (황실)', meaning: '황제의 집안' }, { word: '敎皇 (교황)', meaning: '가톨릭의 으뜸 지도자' }] }
    ]
  },

  /* ===================== 5장 — 문명과 성군 ===================== */
  {
    id: 'ep21', title: '글자를 만들다', chapter: CH5,
    comboPhrase: '始制文字', comboTranslation: '비로소 문자를 만들었다',
    characters: [
      { id: 'ep21-01', character: '始', meaning: '비로소', sound: '시', radical: '女', strokeCount: 8,
        originStory: '여인(女)이 아이를 배어 처음 생명이 시작되는 데서, ‘비로소, 처음’을 뜻한다.',
        vocabulary: [{ word: '始作 (시작)', meaning: '처음으로 함' }, { word: '開始 (개시)', meaning: '시작함' }] },
      { id: 'ep21-02', character: '制', meaning: '지을', sound: '제', radical: '刀', strokeCount: 8,
        originStory: '칼(刂)로 나무를 마름질해 다듬는 데서, ‘짓다, 만들다, 절제하다’를 뜻한다.',
        vocabulary: [{ word: '制度 (제도)', meaning: '정해 놓은 법이나 틀' }, { word: '制服 (제복)', meaning: '정해진 옷' }] },
      { id: 'ep21-03', character: '文', meaning: '글월', sound: '문', radical: '文', strokeCount: 4,
        originStory: '가슴에 새긴 무늬 모양에서 비롯되어, ‘글, 글월, 무늬’를 뜻한다.',
        vocabulary: [{ word: '文章 (문장)', meaning: '생각을 적은 글' }, { word: '文化 (문화)', meaning: '사람이 이룬 삶의 방식' }] },
      { id: 'ep21-04', character: '字', meaning: '글자', sound: '자', radical: '子', strokeCount: 6,
        originStory: '집(宀) 안에서 아이(子)가 불어나듯 늘어난 데서, ‘글자’를 뜻한다.',
        vocabulary: [{ word: '漢字 (한자)', meaning: '중국에서 만든 뜻글자' }, { word: '文字 (문자)', meaning: '말을 적는 기호' }] }
    ]
  },
  {
    id: 'ep22', title: '옷을 지어 입다', chapter: CH5,
    comboPhrase: '乃服衣裳', comboTranslation: '이에 옷을 지어 입었다',
    characters: [
      { id: 'ep22-01', character: '乃', meaning: '이에', sound: '내', radical: '丿', strokeCount: 2,
        originStory: '말이 부드럽게 이어지는 모양에서, ‘이에, 곧, 너’를 뜻한다.',
        vocabulary: [{ word: '乃至 (내지)', meaning: '얼마에서 얼마까지, 또는' }] },
      { id: 'ep22-02', character: '服', meaning: '옷', sound: '복', radical: '月', strokeCount: 8,
        originStory: '몸(月)에 맞추어 입고 따른다는 데서, ‘옷, 입다, 따르다’를 뜻한다.',
        vocabulary: [{ word: '衣服 (의복)', meaning: '옷' }, { word: '服從 (복종)', meaning: '명령을 따름' }] },
      { id: 'ep22-03', character: '衣', meaning: '옷', sound: '의', radical: '衣', strokeCount: 6,
        originStory: '윗옷의 깃과 소매 모양을 본떠, ‘옷’을 뜻한다.',
        vocabulary: [{ word: '衣類 (의류)', meaning: '옷의 종류' }, { word: '脫衣 (탈의)', meaning: '옷을 벗음' }] },
      { id: 'ep22-04', character: '裳', meaning: '치마', sound: '상', radical: '衣', strokeCount: 14,
        originStory: '아래에 둘러 입는 옷(衣)에서, ‘치마, 아랫도리 옷’을 뜻한다.',
        vocabulary: [{ word: '衣裳 (의상)', meaning: '겉에 입는 옷차림' }] }
    ]
  },
  {
    id: 'ep23', title: '자리를 물려주다', chapter: CH5,
    comboPhrase: '推位讓國', comboTranslation: '자리를 미루고 나라를 물려주니',
    characters: [
      { id: 'ep23-01', character: '推', meaning: '밀', sound: '추', radical: '扌', strokeCount: 11,
        originStory: '손(扌)으로 밀어 옮긴다는 데서, ‘밀다, 미루다, 헤아리다’를 뜻한다.',
        vocabulary: [{ word: '推進 (추진)', meaning: '밀고 나아감' }, { word: '推理 (추리)', meaning: '이치를 미루어 헤아림' }] },
      { id: 'ep23-02', character: '位', meaning: '자리', sound: '위', radical: '亻', strokeCount: 7,
        originStory: '사람(亻)이 일정한 곳에 서(立) 있는 데서, ‘자리, 벼슬’을 뜻한다.',
        vocabulary: [{ word: '位置 (위치)', meaning: '자리, 있는 곳' }, { word: '地位 (지위)', meaning: '사회에서의 자리' }] },
      { id: 'ep23-03', character: '讓', meaning: '사양할', sound: '양', radical: '言', strokeCount: 24,
        originStory: '말(言)로 겸손히 물러나 내어준다는 데서, ‘사양하다, 양보하다’를 뜻한다.',
        vocabulary: [{ word: '讓步 (양보)', meaning: '남에게 내어줌' }, { word: '謙讓 (겸양)', meaning: '겸손히 사양함' }] },
      { id: 'ep23-04', character: '國', meaning: '나라', sound: '국', radical: '囗', strokeCount: 11,
        originStory: '경계(囗) 안의 영토를 무기(戈)로 지키는 데서, ‘나라’를 뜻한다.',
        vocabulary: [{ word: '國家 (국가)', meaning: '나라' }, { word: '愛國 (애국)', meaning: '나라를 사랑함' }] }
    ]
  },
  {
    id: 'ep24', title: '요임금과 순임금', chapter: CH5,
    comboPhrase: '有虞陶唐', comboTranslation: '유우(순)와 도당(요)이 다스렸다',
    characters: [
      { id: 'ep24-01', character: '有', meaning: '있을', sound: '유', radical: '月', strokeCount: 6,
        originStory: '손(又)에 고기(月)를 쥔 모양에서, ‘있다, 가지다’를 뜻한다.',
        vocabulary: [{ word: '有名 (유명)', meaning: '이름이 널리 알려짐' }, { word: '所有 (소유)', meaning: '가지고 있음' }] },
      { id: 'ep24-02', character: '虞', meaning: '나라이름', sound: '우', radical: '虍', strokeCount: 13,
        originStory: '순임금이 다스린 나라 이름이며, 본래 ‘헤아리다, 염려하다’의 뜻도 지닌다.',
        vocabulary: [{ word: '有虞 (유우)', meaning: '순임금의 나라' }, { word: '虞犯 (우범)', meaning: '죄를 지을 염려가 있음' }] },
      { id: 'ep24-03', character: '陶', meaning: '질그릇', sound: '도', radical: '阝', strokeCount: 11,
        originStory: '언덕(阝)의 가마에서 흙을 구워 그릇을 만든 데서, ‘질그릇, 빚다’를 뜻한다. 요임금의 땅 이름이기도 하다.',
        vocabulary: [{ word: '陶瓷器 (도자기)', meaning: '흙을 구워 만든 그릇' }, { word: '陶醉 (도취)', meaning: '흠뻑 취해 빠짐' }] },
      { id: 'ep24-04', character: '唐', meaning: '당나라', sound: '당', radical: '口', strokeCount: 10,
        originStory: '본래 ‘크다, 황당하다’의 뜻에서, 나라 이름 ‘당(唐)’으로 널리 쓰인다.',
        vocabulary: [{ word: '唐慌 (당황)', meaning: '놀라 어쩔 줄 모름' }, { word: '唐詩 (당시)', meaning: '당나라 때의 시' }] }
    ]
  },
  {
    id: 'ep25', title: '백성을 위로하다', chapter: CH5,
    comboPhrase: '弔民伐罪', comboTranslation: '백성을 위로하고 죄지은 자를 친다',
    characters: [
      { id: 'ep25-01', character: '弔', meaning: '조문할', sound: '조', radical: '弓', strokeCount: 4,
        originStory: '활(弓)을 메고 죽음을 위문하러 간 옛 풍습에서, ‘조문하다, 위로하다’를 뜻한다.',
        vocabulary: [{ word: '弔問 (조문)', meaning: '죽음을 위로함' }, { word: '慶弔 (경조)', meaning: '경사와 흉사' }] },
      { id: 'ep25-02', character: '民', meaning: '백성', sound: '민', radical: '氏', strokeCount: 5,
        originStory: '많은 사람을 두루 가리키는 데서, ‘백성, 국민’을 뜻한다.',
        vocabulary: [{ word: '國民 (국민)', meaning: '나라를 이루는 사람들' }, { word: '民族 (민족)', meaning: '같은 핏줄의 무리' }] },
      { id: 'ep25-03', character: '伐', meaning: '칠', sound: '벌', radical: '亻', strokeCount: 6,
        originStory: '사람(亻)이 창(戈)을 들고 친다는 데서, ‘치다, 베다’를 뜻한다.',
        vocabulary: [{ word: '討伐 (토벌)', meaning: '쳐서 무찌름' }, { word: '伐木 (벌목)', meaning: '나무를 벰' }] },
      { id: 'ep25-04', character: '罪', meaning: '허물', sound: '죄', radical: '网', strokeCount: 13,
        originStory: '법의 그물(罒)에 걸린 잘못에서, ‘죄, 허물’을 뜻한다.',
        vocabulary: [{ word: '犯罪 (범죄)', meaning: '죄를 저지름' }, { word: '謝罪 (사죄)', meaning: '잘못을 빎' }] }
    ]
  }
];

/* =========================================================================
 * 천자문 101~1000자 (26~250구) — 전체 1000자 뼈대
 * 형식: '漢 훈 음,漢 훈 음,漢 훈 음,漢 훈 음'  (한 줄 = 한 구 = 4자)
 * ⚠️ 훈음은 검수가 필요합니다. 어원·예문은 추후 보강(현재 "준비 중" 표시).
 * ======================================================================= */
const RAW_REST = [
  '周 두루 주,發 필 발,殷 은나라 은,湯 끓일 탕',
  '坐 앉을 좌,朝 아침 조,問 물을 문,道 길 도',
  '垂 드리울 수,拱 팔짱낄 공,平 평평할 평,章 글 장',
  '愛 사랑 애,育 기를 육,黎 검을 려,首 머리 수',
  '臣 신하 신,伏 엎드릴 복,戎 오랑캐 융,羌 오랑캐 강',
  '遐 멀 하,邇 가까울 이,壹 한 일,體 몸 체',
  '率 거느릴 솔,賓 손 빈,歸 돌아갈 귀,王 임금 왕',
  '鳴 울 명,鳳 봉새 봉,在 있을 재,樹 나무 수',
  '白 흰 백,駒 망아지 구,食 밥 식,場 마당 장',
  '化 될 화,被 입을 피,草 풀 초,木 나무 목',
  '賴 힘입을 뢰,及 미칠 급,萬 일만 만,方 모 방',
  '蓋 덮을 개,此 이 차,身 몸 신,髮 터럭 발',
  '四 넉 사,大 큰 대,五 다섯 오,常 떳떳할 상',
  '恭 공손할 공,惟 생각할 유,鞠 기를 국,養 기를 양',
  '豈 어찌 기,敢 감히 감,毀 헐 훼,傷 상할 상',
  '女 계집 녀,慕 사모할 모,貞 곧을 정,烈 매울 렬',
  '男 사내 남,效 본받을 효,才 재주 재,良 어질 량',
  '知 알 지,過 지날 과,必 반드시 필,改 고칠 개',
  '得 얻을 득,能 능할 능,莫 말 막,忘 잊을 망',
  '罔 없을 망,談 말씀 담,彼 저 피,短 짧을 단',
  '靡 아닐 미,恃 믿을 시,己 몸 기,長 긴 장',
  '信 믿을 신,使 하여금 사,可 옳을 가,覆 회복할 복',
  '器 그릇 기,欲 하고자할 욕,難 어려울 난,量 헤아릴 량',
  '墨 먹 묵,悲 슬플 비,絲 실 사,染 물들 염',
  '詩 글 시,讚 기릴 찬,羔 염소 고,羊 양 양',
  '景 볕 경,行 다닐 행,維 벼리 유,賢 어질 현',
  '克 이길 극,念 생각 념,作 지을 작,聖 성인 성',
  '德 큰 덕,建 세울 건,名 이름 명,立 설 립',
  '形 형상 형,端 끝 단,表 겉 표,正 바를 정',
  '空 빌 공,谷 골 곡,傳 전할 전,聲 소리 성',
  '虛 빌 허,堂 집 당,習 익힐 습,聽 들을 청',
  '禍 재앙 화,因 인할 인,惡 악할 악,積 쌓을 적',
  '福 복 복,緣 인연 연,善 착할 선,慶 경사 경',
  '尺 자 척,璧 구슬 벽,非 아닐 비,寶 보배 보',
  '寸 마디 촌,陰 그늘 음,是 이 시,競 다툴 경',
  '資 재물 자,父 아비 부,事 일 사,君 임금 군',
  '曰 가로 왈,嚴 엄할 엄,與 더불 여,敬 공경 경',
  '孝 효도 효,當 마땅 당,竭 다할 갈,力 힘 력',
  '忠 충성 충,則 곧 즉,盡 다할 진,命 목숨 명',
  '臨 임할 림,深 깊을 심,履 밟을 리,薄 엷을 박',
  '夙 이를 숙,興 일 흥,溫 따뜻할 온,凊 서늘할 청',
  '似 같을 사,蘭 난초 란,斯 이 사,馨 꽃다울 형',
  '如 같을 여,松 소나무 송,之 갈 지,盛 성할 성',
  '川 내 천,流 흐를 류,不 아닐 불,息 쉴 식',
  '淵 못 연,澄 맑을 징,取 가질 취,映 비칠 영',
  '容 얼굴 용,止 그칠 지,若 같을 약,思 생각 사',
  '言 말씀 언,辭 말씀 사,安 편안 안,定 정할 정',
  '篤 도타울 독,初 처음 초,誠 정성 성,美 아름다울 미',
  '愼 삼갈 신,終 마칠 종,宜 마땅 의,令 하여금 령',
  '榮 영화 영,業 업 업,所 바 소,基 터 기',
  '籍 호적 적,甚 심할 심,無 없을 무,竟 마침내 경',
  '學 배울 학,優 넉넉할 우,登 오를 등,仕 벼슬 사',
  '攝 잡을 섭,職 벼슬 직,從 좇을 종,政 정사 정',
  '存 있을 존,以 써 이,甘 달 감,棠 아가위 당',
  '去 갈 거,而 말이을 이,益 더할 익,詠 읊을 영',
  '樂 풍류 악,殊 다를 수,貴 귀할 귀,賤 천할 천',
  '禮 예도 례,別 다를 별,尊 높을 존,卑 낮을 비',
  '上 윗 상,和 화할 화,下 아래 하,睦 화목할 목',
  '夫 지아비 부,唱 부를 창,婦 며느리 부,隨 따를 수',
  '外 바깥 외,受 받을 수,傅 스승 부,訓 가르칠 훈',
  '入 들 입,奉 받들 봉,母 어미 모,儀 거동 의',
  '諸 모두 제,姑 시어미 고,伯 맏 백,叔 아재비 숙',
  '猶 같을 유,子 아들 자,比 견줄 비,兒 아이 아',
  '孔 구멍 공,懷 품을 회,兄 맏 형,弟 아우 제',
  '同 한가지 동,氣 기운 기,連 이을 련,枝 가지 지',
  '交 사귈 교,友 벗 우,投 던질 투,分 나눌 분',
  '切 끊을 절,磨 갈 마,箴 경계 잠,規 법 규',
  '仁 어질 인,慈 사랑 자,隱 숨을 은,惻 슬플 측',
  '造 지을 조,次 버금 차,弗 아닐 불,離 떠날 리',
  '節 마디 절,義 옳을 의,廉 청렴 렴,退 물러갈 퇴',
  '顚 엎드러질 전,沛 자빠질 패,匪 아닐 비,虧 이지러질 휴',
  '性 성품 성,靜 고요할 정,情 뜻 정,逸 편안할 일',
  '心 마음 심,動 움직일 동,神 귀신 신,疲 피곤할 피',
  '守 지킬 수,眞 참 진,志 뜻 지,滿 찰 만',
  '逐 쫓을 축,物 물건 물,意 뜻 의,移 옮길 이',
  '堅 굳을 견,持 가질 지,雅 맑을 아,操 잡을 조',
  '好 좋을 호,爵 벼슬 작,自 스스로 자,縻 얽을 미',
  '都 도읍 도,邑 고을 읍,華 빛날 화,夏 여름 하',
  '東 동녘 동,西 서녘 서,二 두 이,京 서울 경',
  '背 등 배,邙 산이름 망,面 낯 면,洛 물이름 락',
  '浮 뜰 부,渭 물이름 위,據 의거할 거,涇 통할 경',
  '宮 집 궁,殿 전각 전,盤 소반 반,鬱 답답할 울',
  '樓 다락 루,觀 볼 관,飛 날 비,驚 놀랄 경',
  '圖 그림 도,寫 베낄 사,禽 새 금,獸 짐승 수',
  '畫 그림 화,綵 채색 채,仙 신선 선,靈 신령 령',
  '丙 남녘 병,舍 집 사,傍 곁 방,啓 열 계',
  '甲 갑옷 갑,帳 장막 장,對 대할 대,楹 기둥 영',
  '肆 베풀 사,筵 자리 연,設 베풀 설,席 자리 석',
  '鼓 북 고,瑟 비파 슬,吹 불 취,笙 생황 생',
  '升 오를 승,階 섬돌 계,納 들일 납,陛 섬돌 폐',
  '弁 고깔 변,轉 구를 전,疑 의심 의,星 별 성',
  '右 오른 우,通 통할 통,廣 넓을 광,內 안 내',
  '左 왼 좌,達 통달할 달,承 이을 승,明 밝을 명',
  '旣 이미 기,集 모을 집,墳 무덤 분,典 법 전',
  '亦 또 역,聚 모을 취,群 무리 군,英 꽃부리 영',
  '杜 막을 두,稾 볏짚 고,鍾 쇠북 종,隸 글씨 례',
  '漆 옻 칠,書 글 서,壁 벽 벽,經 글 경',
  '府 마을 부,羅 벌일 라,將 장수 장,相 서로 상',
  '路 길 로,俠 낄 협,槐 회화나무 괴,卿 벼슬 경',
  '戶 집 호,封 봉할 봉,八 여덟 팔,縣 고을 현',
  '家 집 가,給 줄 급,千 일천 천,兵 군사 병',
  '高 높을 고,冠 갓 관,陪 모실 배,輦 가마 련',
  '驅 몰 구,轂 바퀴 곡,振 떨칠 진,纓 갓끈 영',
  '世 인간 세,祿 녹 록,侈 사치할 치,富 부자 부',
  '車 수레 거,駕 멍에 가,肥 살찔 비,輕 가벼울 경',
  '策 꾀 책,功 공 공,茂 무성할 무,實 열매 실',
  '勒 새길 륵,碑 비석 비,刻 새길 각,銘 새길 명',
  '磻 반계 반,溪 시내 계,伊 저 이,尹 다스릴 윤',
  '佐 도울 좌,時 때 시,阿 언덕 아,衡 저울대 형',
  '奄 문득 엄,宅 집 택,曲 굽을 곡,阜 언덕 부',
  '微 작을 미,旦 아침 단,孰 누구 숙,營 경영할 영',
  '桓 굳셀 환,公 귀 공,匡 바를 광,合 합할 합',
  '濟 건널 제,弱 약할 약,扶 도울 부,傾 기울 경',
  '綺 비단 기,回 돌아올 회,漢 한수 한,惠 은혜 혜',
  '說 기쁠 열,感 느낄 감,武 호반 무,丁 고무래 정',
  '俊 준걸 준,乂 어질 예,密 빽빽할 밀,勿 말 물',
  '多 많을 다,士 선비 사,寔 이 식,寧 편안 녕',
  '晉 나아갈 진,楚 초나라 초,更 다시 갱,霸 으뜸 패',
  '趙 나라 조,魏 나라 위,困 곤할 곤,橫 비낄 횡',
  '假 거짓 가,途 길 도,滅 멸할 멸,虢 나라 괵',
  '踐 밟을 천,土 흙 토,會 모일 회,盟 맹세 맹',
  '何 어찌 하,遵 좇을 준,約 맺을 약,法 법 법',
  '韓 나라 한,弊 폐단 폐,煩 번거할 번,刑 형벌 형',
  '起 일어날 기,翦 자를 전,頗 자못 파,牧 칠 목',
  '用 쓸 용,軍 군사 군,最 가장 최,精 정할 정',
  '宣 베풀 선,威 위엄 위,沙 모래 사,漠 아득할 막',
  '馳 달릴 치,譽 기릴 예,丹 붉을 단,靑 푸를 청',
  '九 아홉 구,州 고을 주,禹 임금 우,跡 자취 적',
  '百 일백 백,郡 고을 군,秦 나라 진,幷 아우를 병',
  '嶽 큰산 악,宗 마루 종,恒 항상 항,岱 산이름 대',
  '禪 봉선 선,主 임금 주,云 이를 운,亭 정자 정',
  '雁 기러기 안,門 문 문,紫 붉을 자,塞 변방 새',
  '雞 닭 계,田 밭 전,赤 붉을 적,城 재 성',
  '昆 맏 곤,池 못 지,碣 비석 갈,石 돌 석',
  '鉅 클 거,野 들 야,洞 골 동,庭 뜰 정',
  '曠 빌 광,遠 멀 원,綿 솜 면,邈 멀 막',
  '巖 바위 암,岫 묏부리 수,杳 아득할 묘,冥 어두울 명',
  '治 다스릴 치,本 근본 본,於 어조사 어,農 농사 농',
  '務 힘쓸 무,玆 이 자,稼 심을 가,穡 거둘 색',
  '俶 비로소 숙,載 실을 재,南 남녘 남,畝 이랑 묘',
  '我 나 아,藝 재주 예,黍 기장 서,稷 피 직',
  '稅 구실 세,熟 익을 숙,貢 바칠 공,新 새 신',
  '勸 권할 권,賞 상줄 상,黜 내칠 출,陟 오를 척',
  '孟 맏 맹,軻 수레 가,敦 도타울 돈,素 본디 소',
  '史 사기 사,魚 고기 어,秉 잡을 병,直 곧을 직',
  '庶 무리 서,幾 거의 기,中 가운데 중,庸 떳떳할 용',
  '勞 수고 로,謙 겸손 겸,謹 삼갈 근,勅 칙서 칙',
  '聆 들을 령,音 소리 음,察 살필 찰,理 다스릴 리',
  '鑑 거울 감,貌 모양 모,辨 분별할 변,色 빛 색',
  '貽 끼칠 이,厥 그 궐,嘉 아름다울 가,猷 꾀 유',
  '勉 힘쓸 면,其 그 기,祗 공경 지,植 심을 식',
  '省 살필 성,躬 몸 궁,譏 나무랄 기,誡 경계할 계',
  '寵 사랑 총,增 더할 증,抗 겨룰 항,極 다할 극',
  '殆 위태할 태,辱 욕될 욕,近 가까울 근,恥 부끄러울 치',
  '林 수풀 림,皋 언덕 고,幸 다행 행,卽 곧 즉',
  '兩 두 량,疏 성길 소,見 볼 견,機 베틀 기',
  '解 풀 해,組 짤 조,誰 누구 수,逼 핍박할 핍',
  '索 찾을 색,居 살 거,閒 한가할 한,處 곳 처',
  '沈 잠길 침,默 잠잠할 묵,寂 고요할 적,寥 고요할 료',
  '求 구할 구,古 예 고,尋 찾을 심,論 의논할 론',
  '散 흩을 산,慮 생각 려,逍 노닐 소,遙 멀 요',
  '欣 기쁠 흔,奏 아뢸 주,累 더럽힐 루,遣 보낼 견',
  '慼 슬플 척,謝 사례 사,歡 기쁠 환,招 부를 초',
  '渠 도랑 거,荷 연 하,的 과녁 적,歷 지날 력',
  '園 동산 원,莽 풀 망,抽 뺄 추,條 가지 조',
  '枇 비파 비,杷 비파 파,晚 늦을 만,翠 푸를 취',
  '梧 오동 오,桐 오동 동,早 이를 조,凋 시들 조',
  '陳 묵을 진,根 뿌리 근,委 맡길 위,翳 가릴 예',
  '落 떨어질 락,葉 잎 엽,飄 나부낄 표,颻 나부낄 요',
  '遊 놀 유,鯤 곤어 곤,獨 홀로 독,運 옮길 운',
  '凌 업신여길 릉,摩 만질 마,絳 붉을 강,霄 하늘 소',
  '耽 즐길 탐,讀 읽을 독,翫 구경 완,市 저자 시',
  '寓 부칠 우,目 눈 목,囊 주머니 낭,箱 상자 상',
  '易 쉬울 이,輶 가벼울 유,攸 바 유,畏 두려울 외',
  '屬 붙일 속,耳 귀 이,垣 담 원,牆 담 장',
  '具 갖출 구,膳 반찬 선,飡 밥 손,飯 밥 반',
  '適 맞을 적,口 입 구,充 채울 충,腸 창자 장',
  '飽 배부를 포,飫 배부를 어,烹 삶을 팽,宰 재상 재',
  '飢 주릴 기,厭 싫을 염,糟 지게미 조,糠 겨 강',
  '親 친할 친,戚 겨레 척,故 연고 고,舊 예 구',
  '老 늙을 로,少 적을 소,異 다를 이,糧 양식 량',
  '妾 첩 첩,御 모실 어,績 길쌈 적,紡 길쌈 방',
  '侍 모실 시,巾 수건 건,帷 장막 유,房 방 방',
  '紈 깁 환,扇 부채 선,圓 둥글 원,潔 깨끗할 결',
  '銀 은 은,燭 촛불 촉,煒 빛날 위,煌 빛날 황',
  '晝 낮 주,眠 졸 면,夕 저녁 석,寐 잘 매',
  '藍 쪽 람,筍 죽순 순,象 코끼리 상,牀 평상 상',
  '絃 줄 현,歌 노래 가,酒 술 주,讌 잔치 연',
  '接 이을 접,杯 잔 배,擧 들 거,觴 잔 상',
  '矯 들 교,手 손 수,頓 두드릴 돈,足 발 족',
  '悅 기쁠 열,豫 미리 예,且 또 차,康 편안 강',
  '嫡 맏 적,後 뒤 후,嗣 이을 사,續 이을 속',
  '祭 제사 제,祀 제사 사,蒸 찔 증,嘗 맛볼 상',
  '稽 조아릴 계,顙 이마 상,再 두 재,拜 절 배',
  '悚 두려울 송,懼 두려울 구,恐 두려울 공,惶 두려울 황',
  '牋 글 전,牒 편지 첩,簡 대쪽 간,要 요긴할 요',
  '顧 돌아볼 고,答 대답 답,審 살필 심,詳 자세할 상',
  '骸 뼈 해,垢 때 구,想 생각 상,浴 목욕 욕',
  '執 잡을 집,熱 더울 열,願 원할 원,凉 서늘할 량',
  '驢 나귀 려,騾 노새 라,犢 송아지 독,特 특별할 특',
  '駭 놀랄 해,躍 뛸 약,超 뛰어넘을 초,驤 달릴 양',
  '誅 벨 주,斬 벨 참,賊 도둑 적,盜 도둑 도',
  '捕 잡을 포,獲 얻을 획,叛 배반할 반,亡 망할 망',
  '布 베 포,射 쏠 사,僚 동료 료,丸 둥글 환',
  '嵇 산이름 혜,琴 거문고 금,阮 성 완,嘯 휘파람 소',
  '恬 편안 념,筆 붓 필,倫 인륜 륜,紙 종이 지',
  '鈞 서른근 균,巧 공교할 교,任 맡길 임,釣 낚시 조',
  '釋 풀 석,紛 어지러울 분,利 이로울 리,俗 풍속 속',
  '並 아우를 병,皆 다 개,佳 아름다울 가,妙 묘할 묘',
  '毛 터럭 모,施 베풀 시,淑 맑을 숙,姿 모양 자',
  '工 장인 공,嚬 찡그릴 빈,姸 고울 연,笑 웃을 소',
  '年 해 년,矢 살 시,每 매양 매,催 재촉할 최',
  '曦 햇빛 희,暉 빛 휘,朗 밝을 랑,曜 빛날 요',
  '璇 구슬 선,璣 구슬 기,懸 달 현,斡 돌 알',
  '晦 그믐 회,魄 넋 백,環 고리 환,照 비칠 조',
  '指 가리킬 지,薪 섶 신,修 닦을 수,祐 복 우',
  '永 길 영,綏 편안할 수,吉 길할 길,劭 힘쓸 소',
  '矩 모날 구,步 걸음 보,引 끌 인,領 거느릴 령',
  '俯 굽을 부,仰 우러를 앙,廊 행랑 랑,廟 사당 묘',
  '束 묶을 속,帶 띠 대,矜 자랑 긍,莊 씩씩할 장',
  '徘 노닐 배,徊 노닐 회,瞻 볼 첨,眺 볼 조',
  '孤 외로울 고,陋 더러울 루,寡 적을 과,聞 들을 문',
  '愚 어리석을 우,蒙 어릴 몽,等 무리 등,誚 꾸짖을 초',
  '謂 이를 위,語 말씀 어,助 도울 조,者 놈 자',
  '焉 어찌 언,哉 어조사 재,乎 어조사 호,也 이끼 야'
];

/* 101자 이후 상세 콘텐츠 오버레이 (점진 보강).
 *   LORE_EXTRA: 글자 id -> { originStory, vocabulary, radical, strokeCount }
 *   EP_TRANS  : 구 id   -> { title, comboTranslation } */
const LORE_EXTRA = (typeof LORE_EXTRA_101 !== 'undefined') ? LORE_EXTRA_101 : {};
const EP_TRANS = (typeof EP_TRANS_101 !== 'undefined') ? EP_TRANS_101 : {};

/* RAW_REST(26~250구)를 에피소드 객체로 변환. 오버레이가 있으면 병합 */
const EPISODES_REST = RAW_REST.map((line, idx) => {
  const epNum = idx + 26;                 // 26 ~ 250
  const epId = `ep${String(epNum).padStart(3, '0')}`;
  const chars = line.split(',').map((tok, k) => {
    const parts = tok.trim().split(/\s+/);
    const character = parts[0];
    const sound = parts[parts.length - 1];
    const meaning = parts.slice(1, parts.length - 1).join(' ');
    const id = `${epId}-${String(k + 1).padStart(2, '0')}`;
    return { id, character, meaning, sound, originStory: '', vocabulary: [], ...(LORE_EXTRA[id] || {}) };
  });
  const trans = EP_TRANS[epId] || {};
  return {
    id: epId,
    title: trans.title || `제${epNum}구`,
    chapter: '',                 // 아래 CHAPTER_TITLES에서 5구씩 일괄 배정
    comboPhrase: chars.map((c) => c.character).join(''),
    comboTranslation: trans.comboTranslation || '',
    characters: chars
  };
});

/* 기초 100자(상세) + 나머지 900자(뼈대) = 천자문 전체 1000자 */
const EPISODES = [...EPISODES_BASE, ...EPISODES_REST];

/* 50개 장(章) — 5구(20자)씩 주제별로 묶음. 처음 5장은 상세본과 동일,
 * 6~50장은 각 5구의 내용을 관통하는 주제로 명명. */
const CHAPTER_TITLES = [
  CH1, CH2, CH3, CH4, CH5,
  '6장 — 무위의 다스림', '7장 — 태평성대의 상서', '8장 — 부모가 주신 몸', '9장 — 남녀의 수신', '10장 — 신의와 도량',
  '11장 — 덕을 세우다', '12장 — 화복과 시간', '13장 — 효와 충', '14장 — 효자의 향기', '15장 — 처신과 마무리',
  '16장 — 배움과 벼슬', '17장 — 예악과 화목', '18장 — 가족의 도리', '19장 — 벗과 어진 마음', '20장 — 마음을 지키다',
  '21장 — 지조와 도읍', '22장 — 궁궐의 위용', '23장 — 궁중의 잔치', '24장 — 서고와 인재', '25장 — 전적과 공신',
  '26장 — 공신의 영화', '27장 — 공을 새기다', '28장 — 나라를 세운 신하', '29장 — 패권과 책략', '30장 — 명신과 명장',
  '31장 — 강토의 형세', '32장 — 명산대천', '33장 — 농사의 근본', '34장 — 곡식과 절개', '35장 — 중용의 처세',
  '36장 — 물러남의 지혜', '37장 — 은거의 삶', '38장 — 한가로운 정취', '39장 — 초목의 사계', '40장 — 책 읽는 즐거움',
  '41장 — 음식과 인정', '42장 — 안방의 살림', '43장 — 잔치의 흥취', '44장 — 제사와 효성', '45장 — 일상의 도리',
  '46장 — 치안과 명인', '47장 — 재주와 미인', '48장 — 세월과 천체', '49장 — 복과 위의', '50장 — 어조사로 맺다'
];
EPISODES.forEach((ep, i) => { ep.chapter = CHAPTER_TITLES[Math.floor(i / 5)]; });

/* 어휘 보강 오버레이: 1개뿐이던 글자에 2번째 실재 한자어를 덧붙인다.
 * (ALL_CHARACTERS를 만들기 전에 EPISODES 원본 글자에 적용) */
if (typeof VOCAB_EXTRA !== 'undefined') {
  EPISODES.forEach((ep) => ep.characters.forEach((c) => {
    const extra = VOCAB_EXTRA[c.id];
    if (extra && extra.length) c.vocabulary = c.vocabulary.concat(extra);
  }));
}

/* 모든 한자를 펼친 평면 목록 — 퀴즈 오답 보기 풀(pool)로 사용 */
const ALL_CHARACTERS = EPISODES.flatMap((ep) =>
  ep.characters.map((c) => ({ ...c, episodeId: ep.id }))
);

/* 등급 정의: 수집 카드 수 기준 (기획서 5.3) */
const RANKS = [
  { name: '초동달인', min: 0 },
  { name: '문장가', min: 150 },
  { name: '대제학', min: 600 }
];
