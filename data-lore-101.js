/* =========================================================================
 * 천자문 101자 이후 상세 콘텐츠 오버레이 (점진 보강)
 * data.js 보다 먼저 로드되어야 한다 (index.html 순서).
 *   LORE_EXTRA_101: 글자 id -> { originStory, vocabulary:[{word,meaning}], radical, strokeCount }
 *   EP_TRANS_101  : 구 id   -> { title, comboTranslation }
 * 글자 id 규칙: ep + 3자리 구번호(첫 줄=026) + '-' + 2자리 위치(01~04)
 * ⚠️ 어원/획수는 학습용 보조 자료이며, 일부는 검수가 필요할 수 있다.
 * 현재 채워진 범위: 구 26~40 (글자 101~160)
 * ======================================================================= */

var LORE_EXTRA_101 = (typeof LORE_EXTRA_101 !== 'undefined') ? LORE_EXTRA_101 : {};
var EP_TRANS_101 = (typeof EP_TRANS_101 !== 'undefined') ? EP_TRANS_101 : {};

/* === 구 26~40 (글자 101~160) === */
Object.assign(LORE_EXTRA_101, {
  'ep026-01': { originStory: '성을 둘러싼 땅 안에 입(口)을 그려 사람들이 빙 둘러 사는 모습을 나타낸 글자로, ‘두루·둘레’라는 뜻이 되었어요. 나중에 나라 이름 ‘주(周)’로도 쓰였어요.', vocabulary: [{ word: '周邊 (주변)', meaning: '어떤 것의 둘레나 가까운 곳' }, { word: '周圍 (주위)', meaning: '어떤 곳을 빙 둘러싼 둘레' }], radical: '口', strokeCount: 8 },
  'ep026-02': { originStory: '활(弓)을 두 손으로 당겨 화살을 ‘쏘아 내보내는’ 모습에서 나온 글자로, ‘쏘다·피다·떠나다’라는 뜻을 가져요. 여기서는 주나라 무왕의 이름 ‘발(發)’을 가리켜요.', vocabulary: [{ word: '出發 (출발)', meaning: '길을 떠나 나아감' }, { word: '發見 (발견)', meaning: '아직 알려지지 않은 것을 처음 찾아냄' }], radical: '癶', strokeCount: 12 },
  'ep026-03': { originStory: '몸을 돌려 손에 도구를 든 모습을 그린 글자로, 본래 풍성하고 성대함을 뜻했고 뒤에 나라 이름 ‘은(殷)’으로 쓰였어요.', vocabulary: [{ word: '殷盛 (은성)', meaning: '기운차고 성대함' }], radical: '殳', strokeCount: 10 },
  'ep026-04': { originStory: '물(氵)을 불 위에 올려 따뜻하게 ‘끓이는’ 모습을 나타낸 글자예요. 여기서는 은나라를 세운 탕왕(湯)의 이름으로 쓰였어요.', vocabulary: [{ word: '溫湯 (온탕)', meaning: '따뜻한 물이 담긴 탕' }, { word: '湯藥 (탕약)', meaning: '달여서 먹는 한약' }], radical: '氵', strokeCount: 12 },

  'ep027-01': { originStory: '흙(土) 위에 두 사람이 마주 앉은 모습을 그린 글자로, ‘앉다’라는 뜻이 되었어요.', vocabulary: [{ word: '坐席 (좌석)', meaning: '앉는 자리' }, { word: '靜坐 (정좌)', meaning: '몸을 바르게 하고 조용히 앉음' }], radical: '土', strokeCount: 7 },
  'ep027-02': { originStory: '풀숲(艹) 사이로 해(日)가 떠오르고 달(月)이 아직 남아 있는 새벽 모습에서 ‘아침’을 뜻하게 되었고, 임금을 뵙는 ‘조정’의 뜻도 가져요.', vocabulary: [{ word: '朝廷 (조정)', meaning: '임금이 나라 일을 보던 곳' }, { word: '朝會 (조회)', meaning: '아침에 모여 인사하고 보고하는 일' }], radical: '月', strokeCount: 12 },
  'ep027-03': { originStory: '문(門) 앞에서 입(口)으로 말을 건네 ‘묻는’ 모습을 나타낸 글자예요.', vocabulary: [{ word: '質問 (질문)', meaning: '모르는 것을 물음' }, { word: '問答 (문답)', meaning: '묻고 대답함' }], radical: '口', strokeCount: 11 },
  'ep027-04': { originStory: '길(辶)을 가는 머리(首)를 합쳐, 사람이 마땅히 걸어가야 할 ‘길·도리’를 나타낸 글자예요.', vocabulary: [{ word: '道路 (도로)', meaning: '사람과 차가 다니는 길' }, { word: '道理 (도리)', meaning: '사람이 마땅히 지켜야 할 바른 길' }], radical: '辶', strokeCount: 13 },

  'ep028-01': { originStory: '가지에 잎과 꽃이 아래로 ‘드리워진’ 모습을 그린 글자로, ‘드리우다·늘어뜨리다’라는 뜻을 가져요.', vocabulary: [{ word: '垂直 (수직)', meaning: '곧게 아래로 드리워 직각을 이룸' }], radical: '土', strokeCount: 8 },
  'ep028-02': { originStory: '손(扌)을 마주 모아 ‘팔짱을 끼고’ 공손히 있는 모습을 나타낸 글자예요. 여기서는 일하지 않고도 나라가 잘 다스려짐을 뜻해요.', vocabulary: [{ word: '拱手 (공수)', meaning: '두 손을 마주 잡아 공경의 뜻을 나타냄' }], radical: '扌', strokeCount: 9 },
  'ep028-03': { originStory: '저울이 양쪽으로 고르게 균형 잡힌 모습에서 ‘평평하다·고르다’라는 뜻이 나온 글자예요.', vocabulary: [{ word: '平和 (평화)', meaning: '다툼 없이 평온하고 화목함' }, { word: '公平 (공평)', meaning: '어느 쪽에도 치우치지 않고 고름' }], radical: '干', strokeCount: 5 },
  'ep028-04': { originStory: '소리(音)와 마디(十)를 합쳐, 노래나 글이 한 단락으로 마무리되는 ‘글·문장’을 나타낸 글자예요.', vocabulary: [{ word: '文章 (문장)', meaning: '생각을 글로 적어 나타낸 것' }, { word: '圖章 (도장)', meaning: '이름 따위를 새겨 찍는 물건' }], radical: '立', strokeCount: 11 },

  'ep029-01': { originStory: '마음(心)을 다해 누군가를 아끼며 차마 발걸음을 돌리지 못하는 모습에서 ‘사랑’을 뜻하게 된 글자예요.', vocabulary: [{ word: '愛情 (애정)', meaning: '사랑하는 마음' }, { word: '愛國 (애국)', meaning: '나라를 사랑함' }], radical: '心', strokeCount: 13 },
  'ep029-02': { originStory: '갓 태어난 아이(子)를 거꾸로 그리고 살(月)을 붙여, 아이를 잘 먹여 ‘기르는’ 모습을 나타낸 글자예요.', vocabulary: [{ word: '育成 (육성)', meaning: '잘 길러 자라게 함' }, { word: '敎育 (교육)', meaning: '가르쳐 기름' }], radical: '肉', strokeCount: 8 },
  'ep029-03': { originStory: '무리를 이룬 기장(黍)에서 나온 글자로, 본래 ‘많다’를 뜻했고 ‘검다’라는 뜻으로도 쓰여요. ‘여민(黎民)’은 머리가 검은 일반 백성을 가리켜요.', vocabulary: [{ word: '黎明 (여명)', meaning: '날이 밝아 오는 새벽빛' }], radical: '黍', strokeCount: 15 },
  'ep029-04': { originStory: '사람의 머리카락과 얼굴, 목까지 옆모습을 그린 글자로, ‘머리·우두머리·처음’을 뜻해요.', vocabulary: [{ word: '首都 (수도)', meaning: '한 나라의 중심이 되는 도시' }, { word: '首席 (수석)', meaning: '맨 윗자리, 1등' }], radical: '首', strokeCount: 9 },

  'ep030-01': { originStory: '임금 앞에서 몸을 숙인 눈(臣) 모양을 그린 글자로, 임금을 섬기는 ‘신하’를 뜻해요.', vocabulary: [{ word: '臣下 (신하)', meaning: '임금을 섬기는 벼슬아치' }, { word: '忠臣 (충신)', meaning: '충성스러운 신하' }], radical: '臣', strokeCount: 6 },
  'ep030-02': { originStory: '사람(亻)이 개(犬)처럼 몸을 낮게 ‘엎드린’ 모습을 나타낸 글자예요.', vocabulary: [{ word: '伏兵 (복병)', meaning: '숨어서 기다리는 군사' }, { word: '屈伏 (굴복)', meaning: '힘에 눌려 무릎을 꿇음' }], radical: '亻', strokeCount: 6 },
  'ep030-03': { originStory: '창(戈)과 방패를 함께 그린 글자로, 본래 무기를 뜻했고 서쪽의 이민족 ‘융(戎)’을 가리키게 되었어요.', vocabulary: [{ word: '戎狄 (융적)', meaning: '옛날 중국에서 변방의 이민족을 이르던 말' }], radical: '戈', strokeCount: 6 },
  'ep030-04': { originStory: '양(羊)을 치며 살던 서쪽 사람들을 가리킨 글자로, 옛 중국에서 서쪽 이민족 ‘강(羌)’을 뜻해요.', vocabulary: [{ word: '羌族 (강족)', meaning: '중국 서부에 살던 옛 민족' }], radical: '羊', strokeCount: 8 },

  'ep031-01': { originStory: '길(辶)을 가도 끝이 멀어 ‘멀다’를 뜻하는 글자예요.', vocabulary: [{ word: '遐邇 (하이)', meaning: '멂과 가까움' }], radical: '辶', strokeCount: 13 },
  'ep031-02': { originStory: '길(辶)을 조금만 가도 닿을 만큼 ‘가깝다’를 뜻하는 글자예요.', vocabulary: [{ word: '遐邇 (하이)', meaning: '먼 곳과 가까운 곳' }], radical: '辶', strokeCount: 18 },
  'ep031-03': { originStory: '‘하나’를 뜻하는 一을 함부로 고치지 못하도록 획을 더해 갖춘 글자로, ‘하나·한결같음’을 뜻해요.', vocabulary: [{ word: '壹是 (일시)', meaning: '모두 한결같이' }], radical: '士', strokeCount: 12 },
  'ep031-04': { originStory: '뼈(骨)와 풍성함(豊)을 합쳐, 뼈와 살로 이루어진 사람의 ‘몸’을 나타낸 글자예요.', vocabulary: [{ word: '身體 (신체)', meaning: '사람의 몸' }, { word: '體驗 (체험)', meaning: '몸소 직접 겪음' }], radical: '骨', strokeCount: 23 },

  'ep032-01': { originStory: '그물의 양옆으로 실이 늘어진 모습에서, 새나 짐승을 잡듯 사람들을 ‘거느리다’라는 뜻이 나온 글자예요. ‘비율’을 뜻할 때는 ‘률’로 읽어요.', vocabulary: [{ word: '統率 (통솔)', meaning: '무리를 거느려 다스림' }, { word: '引率 (인솔)', meaning: '여럿을 이끌고 감' }], radical: '玄', strokeCount: 11 },
  'ep032-02': { originStory: '집(宀) 안으로 조개(貝) 선물을 들고 찾아온 ‘손님’을 나타낸 글자로, ‘손님·따르다’를 뜻해요.', vocabulary: [{ word: '賓客 (빈객)', meaning: '귀한 손님' }, { word: '國賓 (국빈)', meaning: '나라가 예로 맞이하는 외국 손님' }], radical: '貝', strokeCount: 14 },
  'ep032-03': { originStory: '시집간 여자가 본디 자리로 돌아오듯 제자리로 ‘돌아가다’를 뜻하는 글자예요.', vocabulary: [{ word: '歸國 (귀국)', meaning: '외국에서 자기 나라로 돌아옴' }, { word: '復歸 (복귀)', meaning: '본디 자리로 다시 돌아옴' }], radical: '止', strokeCount: 18 },
  'ep032-04': { originStory: '하늘·땅·사람을 잇는 큰 도끼나 세 줄을 하나로 꿰뚫은 모습에서, 세상을 다스리는 ‘임금’을 뜻하게 된 글자예요.', vocabulary: [{ word: '王國 (왕국)', meaning: '임금이 다스리는 나라' }, { word: '國王 (국왕)', meaning: '나라의 임금' }], radical: '玉', strokeCount: 4 },

  'ep033-01': { originStory: '새(鳥)가 입(口)을 벌려 ‘우는’ 모습을 나타낸 글자예요.', vocabulary: [{ word: '悲鳴 (비명)', meaning: '몹시 놀라거나 다급할 때 지르는 소리' }, { word: '鳴動 (명동)', meaning: '소리 내며 울리어 움직임' }], radical: '鳥', strokeCount: 14 },
  'ep033-02': { originStory: '상상의 새를 그린 글자로, 태평성대에 나타난다는 상서로운 ‘봉황새’를 뜻해요.', vocabulary: [{ word: '鳳凰 (봉황)', meaning: '상서로움을 상징하는 상상의 새' }], radical: '鳥', strokeCount: 14 },
  'ep033-03': { originStory: '흙(土)에 새싹이 돋아 자리를 잡은 모습에서 ‘있다·존재하다’를 뜻하게 된 글자예요.', vocabulary: [{ word: '存在 (존재)', meaning: '실제로 있음' }, { word: '在學 (재학)', meaning: '학교에 다니고 있음' }], radical: '土', strokeCount: 6 },
  'ep033-04': { originStory: '나무(木)를 손으로 심고 세우는 모습을 나타낸 글자로, ‘나무·심다’를 뜻해요.', vocabulary: [{ word: '樹木 (수목)', meaning: '살아 있는 나무' }, { word: '植樹 (식수)', meaning: '나무를 심음' }], radical: '木', strokeCount: 16 },

  'ep034-01': { originStory: '햇빛이나 촛불의 환한 빛을 그린 글자로, ‘희다·밝다’를 뜻해요.', vocabulary: [{ word: '白色 (백색)', meaning: '흰 빛깔' }, { word: '白紙 (백지)', meaning: '아무것도 쓰지 않은 흰 종이' }], radical: '白', strokeCount: 5 },
  'ep034-02': { originStory: '말(馬)에 작음을 뜻하는 句를 더해, 어린 말 곧 ‘망아지’를 나타낸 글자예요.', vocabulary: [{ word: '白駒 (백구)', meaning: '흰 망아지' }], radical: '馬', strokeCount: 15 },
  'ep034-03': { originStory: '그릇에 음식을 담은 모습을 그린 글자로, ‘밥·먹다’를 뜻해요.', vocabulary: [{ word: '食事 (식사)', meaning: '끼니로 음식을 먹음' }, { word: '飮食 (음식)', meaning: '먹고 마시는 것' }], radical: '食', strokeCount: 9 },
  'ep034-04': { originStory: '흙(土)이 넓게 펼쳐져 햇빛 드는 너른 ‘마당·터’를 나타낸 글자예요.', vocabulary: [{ word: '場所 (장소)', meaning: '어떤 일이 이루어지는 곳' }, { word: '運動場 (운동장)', meaning: '운동을 하는 넓은 마당' }], radical: '土', strokeCount: 12 },

  'ep035-01': { originStory: '바로 선 사람(亻)과 거꾸로 된 사람(匕)을 함께 그려, 모습이 바뀌어 가는 ‘변화’를 나타낸 글자예요.', vocabulary: [{ word: '變化 (변화)', meaning: '모양이나 성질이 달라짐' }, { word: '化石 (화석)', meaning: '오래전 생물이 돌처럼 변해 남은 것' }], radical: '匕', strokeCount: 4 },
  'ep035-02': { originStory: '옷(衤)을 몸에 걸쳐 ‘입다·덮다·당하다’를 뜻하는 글자예요.', vocabulary: [{ word: '被害 (피해)', meaning: '손해나 해를 입음' }, { word: '被服 (피복)', meaning: '옷, 입는 것' }], radical: '衣', strokeCount: 10 },
  'ep035-03': { originStory: '풀(艹)이 이른 아침 일찍 돋아나는 모습을 나타낸 글자로, ‘풀’을 뜻해요.', vocabulary: [{ word: '草木 (초목)', meaning: '풀과 나무' }, { word: '雜草 (잡초)', meaning: '저절로 나서 자라는 여러 풀' }], radical: '艹', strokeCount: 9 },
  'ep035-04': { originStory: '가지와 뿌리를 갖춘 나무의 모습을 그대로 그린 글자로, ‘나무’를 뜻해요.', vocabulary: [{ word: '木材 (목재)', meaning: '집이나 물건을 만드는 데 쓰는 나무' }, { word: '植木 (식목)', meaning: '나무를 심음' }], radical: '木', strokeCount: 4 },

  'ep036-01': { originStory: '남의 것에 기대어 도움을 받는다는 데서 ‘힘입다·의지하다’를 뜻하는 글자예요.', vocabulary: [{ word: '信賴 (신뢰)', meaning: '믿고 의지함' }, { word: '依賴 (의뢰)', meaning: '남에게 부탁해 맡김' }], radical: '貝', strokeCount: 16 },
  'ep036-02': { originStory: '앞서가는 사람(人)을 뒤따르던 손(又)이 마침내 따라잡은 모습에서, ‘미치다·이르다’를 뜻하게 된 글자예요.', vocabulary: [{ word: '普及 (보급)', meaning: '널리 펴서 미치게 함' }, { word: '言及 (언급)', meaning: '어떤 것에 대해 말함' }], radical: '又', strokeCount: 4 },
  'ep036-03': { originStory: '본래 전갈을 그린 글자였으나, 수가 매우 많음을 빌려 ‘일만·많다’를 뜻하게 되었어요.', vocabulary: [{ word: '萬物 (만물)', meaning: '세상에 있는 온갖 것' }, { word: '萬若 (만약)', meaning: '혹시 그런 경우라면' }], radical: '艹', strokeCount: 13 },
  'ep036-04': { originStory: '쟁기로 흙을 가르는 모습에서 나온 글자로, ‘모서리·방향·방법’을 뜻해요.', vocabulary: [{ word: '方向 (방향)', meaning: '향하는 쪽' }, { word: '四方 (사방)', meaning: '동서남북 네 방향, 둘레 모든 곳' }], radical: '方', strokeCount: 4 },

  'ep037-01': { originStory: '풀(艹)을 엮어 그릇을 위에서 ‘덮는’ 뚜껑을 나타낸 글자로, ‘덮다’를 뜻하고 글머리에서 ‘대개’라는 뜻으로도 쓰여요.', vocabulary: [{ word: '覆蓋 (복개)', meaning: '덮어 가림, 위를 덮음' }], radical: '艹', strokeCount: 14 },
  'ep037-02': { originStory: '걸음을 멈추고(止) 가까운 것을 가리키는 모습에서 ‘이·이것’을 뜻하게 된 글자예요.', vocabulary: [{ word: '此後 (차후)', meaning: '이다음, 지금부터 뒤' }], radical: '止', strokeCount: 6 },
  'ep037-03': { originStory: '여자가 아이를 밴 몸의 모습을 그린 글자로, 사람의 ‘몸’을 뜻해요.', vocabulary: [{ word: '身體 (신체)', meaning: '사람의 몸' }, { word: '自身 (자신)', meaning: '제 몸, 그 사람 자기' }], radical: '身', strokeCount: 7 },
  'ep037-04': { originStory: '머리털(髟)에 소리를 나타내는 글자를 더한 것으로, 가늘고 긴 ‘터럭·머리카락’을 뜻해요.', vocabulary: [{ word: '毛髮 (모발)', meaning: '몸에 난 털과 머리카락' }, { word: '理髮 (이발)', meaning: '머리털을 깎아 다듬음' }], radical: '髟', strokeCount: 15 },

  'ep038-01': { originStory: '막대 네 개를 늘어놓던 데서 바뀌어, 입(口) 안에 나눔을 그려 숫자 ‘넷’을 나타낸 글자예요.', vocabulary: [{ word: '四方 (사방)', meaning: '동서남북 네 방향' }, { word: '四季 (사계)', meaning: '봄·여름·가을·겨울 네 계절' }], radical: '囗', strokeCount: 5 },
  'ep038-02': { originStory: '사람이 팔다리를 활짝 벌리고 선 모습을 그린 글자로, ‘크다’를 뜻해요.', vocabulary: [{ word: '大小 (대소)', meaning: '크고 작음' }, { word: '巨大 (거대)', meaning: '엄청나게 큼' }], radical: '大', strokeCount: 3 },
  'ep038-03': { originStory: '위아래 두 선 사이에 X 모양을 넣어, 서로 엇갈려 셈하던 데서 숫자 ‘다섯’을 나타낸 글자예요.', vocabulary: [{ word: '五感 (오감)', meaning: '보고 듣고 맡고 맛보고 만지는 다섯 감각' }, { word: '五行 (오행)', meaning: '물·불·나무·쇠·흙의 다섯 요소' }], radical: '二', strokeCount: 4 },
  'ep038-04': { originStory: '늘 펼쳐 쓰는 긴 천(巾)에서 나온 글자로, ‘늘·항상·떳떳하다·법도’를 뜻해요.', vocabulary: [{ word: '日常 (일상)', meaning: '날마다 반복되는 보통의 생활' }, { word: '常識 (상식)', meaning: '누구나 알고 있어야 할 보통의 지식' }], radical: '巾', strokeCount: 11 },

  'ep039-01': { originStory: '마음(心)을 공손히 받들어 모시는 모습에서 ‘공손하다’를 뜻하는 글자예요.', vocabulary: [{ word: '恭敬 (공경)', meaning: '공손히 받들어 모심' }, { word: '恭遜 (공손)', meaning: '예의 바르고 겸손함' }], radical: '心', strokeCount: 10 },
  'ep039-02': { originStory: '마음(忄)으로 곰곰이 헤아리는 모습에서 ‘생각하다·오직’을 뜻하는 글자예요.', vocabulary: [{ word: '思惟 (사유)', meaning: '마음으로 깊이 생각함' }], radical: '忄', strokeCount: 11 },
  'ep039-03': { originStory: '가죽(革)으로 만든 공을 어린아이를 보살피듯 다룬다는 데서, ‘기르다’와 ‘공·국문하다’의 뜻을 가져요. 여기서는 ‘기르다’로 쓰여요.', vocabulary: [{ word: '鞠育 (국육)', meaning: '어린아이를 사랑으로 기름' }], radical: '革', strokeCount: 17 },
  'ep039-04': { originStory: '양(羊)을 잘 먹여(食) 살찌게 키우는 모습에서 ‘기르다·먹이다’를 뜻하게 된 글자예요.', vocabulary: [{ word: '養育 (양육)', meaning: '아이를 보살펴 기름' }, { word: '養成 (양성)', meaning: '가르쳐 길러 냄' }], radical: '食', strokeCount: 15 },

  'ep040-01': { originStory: '본래 군대가 돌아올 때 치던 북을 그린 글자였으나, 빌려서 ‘어찌’라는 물음말로 쓰이게 되었어요.', vocabulary: [{ word: '豈敢 (기감)', meaning: '어찌 감히' }], radical: '豆', strokeCount: 10 },
  'ep040-02': { originStory: '손에 도구를 들고 두려움 없이 맞서는 모습에서 ‘감히·구태여’를 뜻하게 된 글자예요.', vocabulary: [{ word: '勇敢 (용감)', meaning: '용기가 있고 씩씩함' }, { word: '敢行 (감행)', meaning: '어려움을 무릅쓰고 해냄' }], radical: '攴', strokeCount: 12 },
  'ep040-03': { originStory: '절구(臼)에 물건을 넣고 창(殳)으로 쳐서 부수는 모습에서 ‘헐다·부수다·헐뜯다’를 뜻하게 된 글자예요.', vocabulary: [{ word: '毁損 (훼손)', meaning: '헐거나 깨뜨려 상하게 함' }, { word: '毁謗 (훼방)', meaning: '남을 헐뜯거나 일을 방해함' }], radical: '殳', strokeCount: 13 },
  'ep040-04': { originStory: '사람(亻)이 다쳐 아파하는 모습에서 ‘다치다·상하다’를 뜻하는 글자예요.', vocabulary: [{ word: '傷處 (상처)', meaning: '다쳐서 상한 자리' }, { word: '負傷 (부상)', meaning: '몸을 다침' }], radical: '亻', strokeCount: 13 }
});

Object.assign(EP_TRANS_101, {
  'ep026': { title: '어진 임금들', comboTranslation: '주나라를 일으킨 무왕 발(發)과 은나라를 세운 탕왕(湯)이다.' },
  'ep027': { title: '앉아서 도를 묻다', comboTranslation: '조정에 앉아 백성을 다스리는 도리를 물었다.' },
  'ep028': { title: '팔짱 끼고 다스리다', comboTranslation: '옷을 드리우고 팔짱만 끼고도 천하가 고르게 잘 다스려졌다.' },
  'ep029': { title: '백성을 사랑으로', comboTranslation: '검은 머리 백성을 사랑으로 아끼고 길렀다.' },
  'ep030': { title: '이민족도 따르다', comboTranslation: '신하로서 엎드려 따르니 융(戎)과 강(羌) 같은 변방 이민족까지 복종하였다.' },
  'ep031': { title: '먼 곳도 한 몸', comboTranslation: '멀고 가까운 곳이 하나가 되어 한 몸처럼 되었다.' },
  'ep032': { title: '임금에게 돌아오다', comboTranslation: '백성을 거느리고 손님처럼 모여들어 임금에게로 돌아와 따랐다.' },
  'ep033': { title: '나무에 우는 봉황', comboTranslation: '봉황이 나무에 깃들어 우니, 태평성대의 상서로움이다.' },
  'ep034': { title: '마당의 흰 망아지', comboTranslation: '흰 망아지가 마당에 와서 풀을 뜯으니, 어진 이가 머무는 평화로운 모습이다.' },
  'ep035': { title: '풀과 나무에 미친 덕', comboTranslation: '임금의 교화가 풀과 나무에까지 입혀졌다.' },
  'ep036': { title: '온 세상에 미치다', comboTranslation: '그 힘입은 은혜가 온 세상 모든 곳에 미쳤다.' },
  'ep037': { title: '이 몸과 터럭', comboTranslation: '대개 이 몸과 터럭은 모두 부모에게서 받은 것이다.' },
  'ep038': { title: '네 가지와 다섯 가지', comboTranslation: '하늘·땅·임금·부모의 네 가지 큰 것과, 인의예지신 다섯 떳떳한 도리가 있다.' },
  'ep039': { title: '길러 주신 은혜', comboTranslation: '부모가 길러 주신 은혜를 공손히 생각해야 한다.' },
  'ep040': { title: '몸을 함부로 말라', comboTranslation: '어찌 감히 이 몸을 헐고 상하게 할 수 있겠는가.' }
});
