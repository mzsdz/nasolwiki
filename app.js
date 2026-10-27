/* NASOL WIKI magazine MVP · Vanilla JS, no login or external dependencies */
const ARTICLES = [
{
 id:'attraction-is-room',tag:'진동',theme:'rose',art:'SPACE\nTO LOVE',title:'매력의 정체는 여유일지도 모른다',desc:'사람들이 좋아하는 침착함, 배려, 자신감. 그 공통분모는 무엇일까?',author:'진동',min:4,date:'2026.10.27',featured:true,
 body:`<p>좋아하는 사람 앞에서 누구나 조금은 긴장한다. 그런데 유독 편안해 보이는 사람들이 있다. 상대의 말을 끝까지 듣고, 대답을 재촉하지 않으며, 작은 실수 하나쯤은 웃어넘긴다. 우리는 그런 사람에게 종종 ‘여유가 있다’고 말한다.</p>
<h2>우리가 좋아하는 사람의 공통점</h2>
<p>초조한 사람과 침착한 사람, 작은 손해에 예민한 사람과 너그러운 사람, 한 번의 거절에 무너지는 사람과 자신의 일상으로 돌아갈 줄 아는 사람. 이 두 사람 중 누가 매력적인지 물으면 많은 이가 후자를 택할 것이다.</p>
<p>물론 질문을 그렇게 만들면 답은 어느 정도 정해진 셈이다. 하지만 이 비교가 던지는 질문은 살아남는다. 왜 우리는 그 많은 좋은 성질을 ‘여유’라는 한 단어로 묶어 설명할까?</p>
<h2>여유는 표정이 아니라 자산이다</h2>
<p>여유는 천천히 말하는 기술이 아니다. 실제로 선택할 수 있는 것이 많을 때 생겨나는 삶의 상태에 가깝다. 돈이 넉넉하면 작은 지출에 덜 흔들릴 수 있고, 시간이 넉넉하면 상대를 기다리기가 쉬워진다. 건강, 경험, 능력, 관계 역시 누군가에게 기대지 않고 자신의 삶을 지탱할 여력을 만든다.</p>
<blockquote>여유로운 척하는 것과 여유로워질 만큼 삶을 가꾸는 것은 다르다.</blockquote>
<p>다만 풍요가 곧 인격은 아니다. 가진 것이 많아도 타인을 함부로 대할 수 있고, 가진 것이 적어도 깊이 배려하는 사람이 있다. 그럼에도 여유가 배려를 실천하기 좋은 조건이 될 수 있다는 점은 생각해볼 만하다.</p>
<h2>연애를 잘하고 싶다면</h2>
<p>상대가 답장을 늦게 보냈을 때 휴대폰만 바라보며 애타는 대신, 자신의 일과 사람들과의 약속으로 하루를 채울 수 있다면 어떨까. 이건 상대를 밀어내는 ‘밀당’이 아니다. 한 사람의 반응에 자신의 하루 전체를 맡기지 않는 방식이다.</p>
<p>연애에서 매력적인 사람이 되고 싶다면 연애 기술만 연습하지 말자. 잘 쉬고, 잘 먹고, 운동하고, 돈을 관리하고, 친구를 만나고, 새로운 것을 배우는 것. 조금 돌아가는 길 같아도 그 길이 더 오래가는 매력을 만들 수 있다.</p>
<p><strong>결국 질문은 하나다. 나는 상대에게 매력적으로 보이려고 애쓰는 중일까, 아니면 실제로 더 풍요로운 사람이 되는 중일까?</strong></p>`
},
{
 id:'appearance-and-interiority',tag:'외모',theme:'charcoal',art:'FIRST\nLOOK',title:'외모보다 내면이 중요하다는 말의 함정',desc:'사람을 어떻게 대해야 하는지와 연애가 어떻게 시작되는지는 다른 이야기다.',author:'진동',min:4,date:'2026.10.27',
 body:`<p>우리는 어린 시절부터 배운다. 사람을 외모로 판단하지 말라고. 맞는 말이다. 그런데 어느 날 소개팅 제안이 들어오면 많은 사람은 이렇게 묻는다. “사진 있어?”</p>
<p>이 장면이 곧 위선의 증거는 아니다. 다만 우리가 지향하는 가치와 실제로 상대를 선택하는 과정이 다를 수 있다는 사실을 드러낸다.</p>
<h2>좋은 사람을 판단하는 일과 끌리는 일</h2>
<p>내면이 훌륭한 사람은 존중받을 만하다. 하지만 내가 존중하는 모든 사람과 연애하고 싶은 건 아니다. 예의 바른 동료, 믿을 만한 친구, 책임감 있는 선배는 모두 좋은 사람일 수 있지만, 그중 누구에게도 이성적인 끌림을 느끼지 않을 수 있다.</p>
<p>소개팅 앱이나 사진을 먼저 보는 소개팅에서는 외적인 인상이 초반의 선택에 큰 영향을 줄 수밖에 없다. 처음에는 아직 상대의 내면을 충분히 모르기 때문이다. 그렇다고 외모의 영향이 정확히 80%라거나 모든 선택이 외모로 결정된다는 뜻은 아니다.</p>
<h2>외모가 중요하다고 말하는 이유</h2>
<p>외모의 영향력을 인정한다는 건 사람에게 등급표를 붙이자는 뜻이 아니다. 현실에서 다른 사람의 반응을 경험했다면, 그 경험을 이해하고 자신의 선택을 넓히자는 이야기다. 체력과 건강을 위해 운동하고, 자신에게 맞는 옷을 찾아보고, 잠과 식습관을 바꾸는 일은 외모를 넘어 삶 전체에 도움이 될 수 있다.</p>
<blockquote>‘외모를 보지 말라’는 윤리적 요청과 ‘외모의 영향이 없다’는 사실 판단은 다르다.</blockquote>
<p>또 하나 기억할 것. 누구든 외적인 매력과 별개로 존중받아야 한다. 외모 때문에 기회가 달라지는 현실을 관찰하면서도, 그 불공정을 정당화할 필요는 없다.</p>
<h2>알고 발전하자</h2>
<p>현실을 인정하는 목적은 누군가를 비웃기 위해서가 아니다. 우리가 바꿀 수 있는 것들을 알아보기 위해서다. 멋있어 보이기 위한 기술보다 자신을 돌보는 습관부터 시작해보자.</p>`
},
{
 id:'the-directness-paradox',tag:'연애',theme:'orange',art:'GO\nSLOW?',title:'직진에서 중요한 건 속도가 아니라 운전자다',desc:'같은 호감 표현도 누가, 언제, 어떻게 하느냐에 따라 달라진다.',author:'진동',min:3,date:'2026.10.27',
 body:`<p>누군가 적극적으로 다가오면 설레기도 하고 부담스럽기도 하다. 그런데 흥미롭게도 우리는 같은 행동을 한 사람에게는 ‘자신감 있다’고 하고, 다른 사람에게는 ‘너무 빠르다’고 말한다.</p>
<h2>문제는 속도 하나가 아니다</h2>
<p>호감을 표현하는 순간 상대에게 이미 어떤 인상이 형성되어 있는지가 중요할 수 있다. 끌림이 있는 사람의 적극성은 확신으로 받아들여지지만, 아직 마음이 움직이지 않은 상대의 적극성은 대답을 강요하는 것처럼 느껴질 수 있다.</p>
<p>그러나 상대가 매력적이라고 느껴도 과한 행동은 부담스러울 수 있다. 특히 여러 사람이 지켜보는 자리라면, 공개적으로 감정을 표현해야 하는 압박도 생긴다. 상대가 속도를 늦춰달라고 말하면 이유를 추측하기 전에 그 요청을 존중하는 편이 좋다.</p>
<h2>배려와 어필의 미묘한 차이</h2>
<p>필요한 것을 챙겨주는 행동은 따뜻하다. 그러나 그다음에 “내가 이렇게까지 했는데”라고 반응을 요구한다면 상대는 호의를 빚처럼 느낄 수 있다. 반대로 도와준 뒤 자연스럽게 일상으로 돌아가는 태도는 편안한 인상을 줄 수 있다.</p>
<blockquote>호감을 표현하는 용기만큼 중요한 건 상대가 자신의 마음을 선택할 자유다.</blockquote>
<p>적극성은 장점이다. 다만 상대의 표정과 반응에 맞춰 조절할 수 있는 적극성일 때 더 그렇다. 좋은 직진은 속도계만 보는 운전이 아니라 옆자리 사람도 살피는 운전과 닮았다.</p>`
},
{
 id:'second-date-conversation',tag:'관계',theme:'mint',art:'DATE\nTWO',title:'첫 데이트에서 대화가 잘 통했다면, 정말 잘 맞는 걸까?',desc:'즐거운 한 시간과 오래 이어질 관계를 구분하는 몇 가지 질문.',author:'진동',min:3,date:'2026.10.27',
 body:`<p>첫 데이트를 마치고 우리는 자주 말한다. “대화가 정말 잘 통했어.” 신나는 신호다. 하지만 대화가 재미있었다는 사실 하나로 두 사람이 잘 맞는다고 결론 내릴 수 있을까?</p>
<h2>대화의 속도와 관계의 방향</h2>
<p>말을 잘하는 사람은 즐거운 시간을 만들어준다. 하지만 혼자 이야기하는 데 능숙한 것과 서로를 알아가는 데 능숙한 것은 다르다. 대화가 끝난 뒤 상대가 무슨 이야기를 했는지 떠오르는가? 나를 궁금해했고, 내 말을 따라 질문을 이어갔는가?</p>
<p>좋은 대화는 재미있는 말의 총량보다 서로에게 향한 관심으로 기억될 때가 많다. 긴 침묵을 견딜 수 있는지도 훗날에는 의외로 중요한 부분이 된다.</p>
<h2>두 번째 만남의 기준</h2>
<p>첫인상이 압도적이지 않아도 다시 만나면 좋겠다고 느끼는 경우가 있다. 함께 있을 때 마음이 편안했고, 더 알고 싶은 부분이 남았기 때문이다. 반대로 매우 즐거운 데이트였어도 매번 공연을 보듯 상대를 감탄하며 바라보기만 했다면, 실제 관계는 아직 시작되지 않았을 수도 있다.</p>
<blockquote>잘 통하는 사람을 찾는 것만큼 중요한 건, 서로를 알아가고 싶은 마음이 남았는지다.</blockquote>
<p>다음 데이트를 고민한다면 점수를 매기기보다 이것부터 물어보자. ‘내가 이 사람에게 궁금한 것이 하나라도 더 남아 있는가?’</p>`
},
{
 id:'more-than-a-first-impression',tag:'진동',theme:'olive',art:'MORE\nCHOICE',title:'우리는 얼굴에서 상대의 선택권을 읽는다',desc:'실제 인기와 남들이 추정하는 인기. 그 간격에서 매력이 움직인다.',author:'진동',min:4,date:'2026.10.27',
 body:`<p>처음 만난 사람에게 연애 상대가 몇 명 있는지 알 방법은 없다. 그런데도 사람들은 그 사람이 얼마나 많은 선택권을 가지고 있을지 놀라울 만큼 빠르게 짐작한다. 외모, 스타일, 자세, 말투, 상대를 대하는 태도 등이 모두 단서가 될 수 있다.</p>
<h2>선택권과 선택권 추정</h2>
<p>실제 선택권은 내가 어떤 사람과 관계를 맺을 수 있는지에 관한 현실적인 가능성이다. 반면 추정 선택권은 타인이 내 인상만 보고 ‘저 사람은 인기가 많겠구나’라고 생각하는 정도다.</p>
<p>둘은 같지 않다. 인기 있어 보이는 사람이 실제로는 관계를 시작하는 데 어려움을 겪을 수도 있고, 조용해 보이는 사람에게 깊은 관계가 여럿 있을 수도 있다. 그래도 그 첫 추정은 때로 상대를 바라보는 태도에 영향을 준다.</p>
<h2>인기 있는 척할 필요는 없다</h2>
<p>연애 상담에서 흔히 듣는 조언은 ‘여유롭게 굴라’는 말이다. 하지만 답장을 일부러 늦추고 바쁜 척하는 기술은 실제 여유와 다르다. 내 하루를 풍요롭게 채워놓으면 한 사람의 반응에 덜 휘둘릴 수 있다.</p>
<blockquote>선택권을 과장하기보다 실제로 선택할 수 있는 삶을 만들자.</blockquote>
<p>그 방법은 의외로 평범하다. 친구를 만나고, 건강을 관리하고, 즐거운 일을 찾고, 새로운 것을 배우는 것. 당신의 세계가 넓어질수록 하나의 관계가 삶 전체를 차지할 가능성은 줄어든다.</p>`
},
{
 id:'motion-sickness-driving',tag:'라이프',theme:'blue',art:'SLOW\nRIDE',title:'왜 어떤 사람의 차만 타면 멀미가 날까?',desc:'빠르게 운전하는 것보다 중요한 건 따로 있다. 조수석이 편안해지는 과학.',author:'나솔위키 편집부',min:3,date:'2026.10.27',
 body:`<p>똑같은 길인데도 누구의 차를 탔느냐에 따라 몸의 반응이 달라질 수 있다. 어떤 운전자의 차에서는 괜찮다가도, 다른 차에서는 속이 울렁거리기 시작한다. 왜 그럴까?</p>
<h2>속도보다 움직임의 예측 가능성</h2>
<p>멀미는 눈과 몸이 감지하는 움직임의 정보가 잘 맞지 않을 때 생길 수 있다. 특히 반복적인 급가속과 급제동, 갑작스러운 방향 전환, 좌우로 흔들리는 움직임은 승객을 불편하게 만들기 쉽다.</p>
<p>운전자는 핸들을 돌리거나 브레이크를 밟을 순간을 알고 있다. 그러나 승객은 다음 움직임을 예측하지 못할 수 있다. 운전자는 괜찮은데 옆자리 사람만 힘든 이유 중 하나다.</p>
<h2>승객이 편안해지는 운전</h2>
<p>출발과 정지를 부드럽게 하고, 코너에 들어가기 전 충분히 감속하며, 차간 거리를 확보해 급제동을 줄이는 게 도움이 된다. 승객에게는 전방의 먼 곳을 보도록 권하고, 휴대전화 화면을 오래 내려다보지 않게 하는 것이 좋다. 증상이 심하면 잠시 정차하고 쉬어가는 편이 낫다.</p>
<blockquote>운전을 잘한다는 건 목적지에 빨리 도착하는 능력만이 아니다. 옆자리 사람이 편안하게 도착하게 하는 능력이기도 하다.</blockquote>
<p class="source">참고: 미국 질병통제예방센터(CDC) Yellow Book의 멀미 안내, 영국 NHS의 멀미 예방 수칙. 이 기사는 일반적인 정보이며 증상이 반복되거나 심하면 의료진과 상담하는 것이 좋아.</p>`
},
{
 id:'people-can-change',tag:'관계',theme:'purple',art:'NEXT\nVERSION',title:'사람은 정말 달라질 수 있을까?',desc:'외모가 바뀌면 성격도 바뀔까? 자기개선과 자신감의 선순환.',author:'진동',min:3,date:'2026.10.27',
 body:`<p>오랜만에 만난 사람이 몰라보게 달라져 있으면 놀랍다. 몸을 만들고 옷을 바꾼 건 한눈에 보인다. 그런데 더 놀라운 변화는 말을 건네는 방식에서 나타날 때가 있다. 전보다 여유롭고, 친절하고, 자기 생각을 분명히 이야기한다.</p>
<h2>성격이 바뀐 걸까, 자신감이 드러난 걸까</h2>
<p>우리는 사람의 성격을 쉽게 고정된 것으로 생각한다. 하지만 환경과 경험, 자기관리 습관이 바뀌면 행동도 달라질 수 있다. 운동 후 신체감각이 달라졌을 수도 있고, 여러 번의 실패에서 대화하는 법을 배웠을 수도 있다.</p>
<p>외모만 바꾸면 성격까지 좋아진다는 식의 결론은 성급하다. 중요한 건 그 사람이 어떤 경험을 거쳐 어떤 태도를 새로 선택했는지다.</p>
<h2>실패한 무대에 다시 서는 용기</h2>
<p>누구나 예전의 자기 모습을 다시 보는 일이 괴롭다. 그렇기 때문에 과거의 실수와 어색함을 인정하고, 오랜 시간 연습해 다시 도전하는 사람에게는 특별한 매력이 있다.</p>
<blockquote>자기개선의 결과는 거울에만 나타나지 않는다. 다른 사람과 관계 맺는 방식에도 남는다.</blockquote>
<p>우리는 얼마나 달라질 수 있을까? 모든 것을 한 번에 바꿀 수는 없어도, 반복하는 하루를 바꿀 수는 있다. 그것만으로도 다음 버전의 나는 지금과 다를 수 있다.</p>`
},
{
 id:'romeo-in-2026',tag:'연애',theme:'yellow',art:'ROMEO\n2026',title:'로미오가 2026년에 태어났다면?',desc:'한때 위대한 사랑의 증거였던 행동이 지금은 위험 신호가 되는 이유.',author:'나솔위키 편집부',min:3,date:'2026.10.27',
 body:`<p>며칠 만난 사람을 위해 모든 것을 포기한다. 가족의 반대를 거스르고, 위험을 감수하고, 상대가 없으면 살 수 없다고 말한다. 오랜 세월 이런 이야기는 강렬한 사랑의 상징이었다.</p>
<p>그런데 오늘날 누군가 똑같이 행동한다면 우리는 설레기보다 걱정부터 할지도 모른다. “서로 얼마나 안다고 저러지?”</p>
<h2>감정이 강하다는 것과 관계가 좋다는 것</h2>
<p>사랑의 강렬함은 문학과 영화에서 이야기를 움직이는 좋은 연료다. 하지만 현실의 연애에서는 감정의 크기만큼이나 서로의 선택을 존중하는 태도가 중요하다.</p>
<p>상대가 거절했는데도 끝없이 설득하는 사람은 옛날 로맨스의 주인공처럼 보일 수도 있다. 하지만 현실에서는 상대에게 부담이나 두려움을 줄 수 있다. 감정을 느끼는 것은 자유지만, 감정이 모든 행동을 정당화하지는 않는다.</p>
<h2>낭만이 사라진 걸까</h2>
<p>그렇다고 현대인은 사랑을 덜 믿는다고 단정할 수 없다. 어쩌면 사랑을 표현하는 방법을 더 다양하게 배우는 중인지도 모른다. 사랑을 위해 모든 것을 잃는 이야기에서, 사랑하면서도 각자의 삶을 지키는 이야기로.</p>
<blockquote>사랑에 휩싸이는 순간은 아름다울 수 있다. 그 순간에도 상대의 자유를 남겨두는 일은 더 아름답다.</blockquote>
<p>로미오가 지금 태어났다면? 아마 줄리엣에게 마음을 전하기 전에 “우리 조금 더 알아갈까?”라고 묻는 사람도 있었을 것이다.</p>`
},
{
 id:'familiar-face',tag:'심리',theme:'rose',art:'FAMILIAR\nFACE',title:'내 이상형은 타고난 걸까, 만들어진 걸까?',desc:'우리가 묘하게 익숙한 얼굴과 분위기에 끌리는 이유를 생각하다.',author:'나솔위키 편집부',min:4,date:'2026.10.27',
 body:`<p>좋아하는 얼굴에는 공통점이 있을까? 눈매일 수도, 웃는 표정일 수도, 누군가를 바라볼 때의 분위기일 수도 있다. 어떤 사람은 처음 보는 얼굴 앞에서 묘하게 익숙한 느낌을 받기도 한다.</p>
<h2>좋았던 기억은 취향을 만들까</h2>
<p>어릴 때 긍정적인 관계를 맺었던 사람의 외모나 표정이 나중에 이상형에 영향을 줄 수 있다는 가설이 있다. 부모와 닮은 외모의 상대를 선호하는지 살펴본 연구도 있었다. 그러나 연구 결과는 일관적이지 않으며, 특정한 얼굴이 ‘운명적인 이상형’으로 정해진다는 결론은 아니다.</p>
<p>여기에는 친숙함, 정서적 연합, 문화적 학습 등 여러 설명이 가능하다. 우리는 좋아하는 사람이 생기면 이유를 한 문장으로 말하지만, 그 이유는 훨씬 복잡할 수 있다.</p>
<h2>취향을 알아차리는 재미</h2>
<p>과거에 좋아했던 사람들을 떠올려보자. 얼굴 자체가 닮았을까? 웃는 방식이 비슷했을까? 아니면 나를 편안하게 해준 태도가 반복됐을까?</p>
<blockquote>좋아하는 이유가 본능처럼 느껴져도, 그 취향의 일부는 살아온 시간이 만들어냈을지 모른다.</blockquote>
<p>이 질문에 정답이 필요한 건 아니다. 자신이 어떤 사람에게 끌리는지 이해하면, 다음에 누군가를 만날 때 자기 마음을 조금 더 자세히 관찰할 수 있을 테니까.</p>`
}
,
{
 id:'why-multi-date-is-hard',tag:'나는 SOLO',theme:'orange',art:'3:1\nDATE',title:'다대일 데이트를 잘한다는 건 무엇일까?',desc:'모두에게 친절한 것과 모두가 좋은 데이트를 했다는 것은 다르다.',author:'나솔위키 편집부',min:4,date:'2026.10.27',
 body:`<p>〈나는 SOLO〉를 보다 보면 유독 보기 어려운 장면이 있다. 한 사람이 여러 사람의 선택을 받아 함께 데이트하는 순간이다. 웃으며 출발한 자리도 금세 어색해진다. 누구에게 말을 걸어야 할지, 누구를 더 챙겨야 할지, 누구의 마음을 상하게 하지 말아야 할지 생각할 일이 많아진다.</p>
<h2>친절함은 기본, 운영은 별개</h2>
<p>과거 33기 영식의 다대일 데이트에서는 미리 식당을 알아보고, 동행한 사람들을 세심하게 챙기는 모습이 화제가 됐다. 준비와 매너라는 점에서는 칭찬할 만하지만, 모두가 그 자리를 로맨틱한 데이트로 느꼈는지는 또 다른 문제다.</p>
<p>다대일 데이트의 어려움은 공평함과 특별함을 동시에 요구한다는 데 있다. 누군가만 계속 바라보면 다른 사람이 소외될 수 있고, 모든 사람에게 똑같이 다정하면 마음이 어디로 향하는지 알기 어려워진다.</p>
<h2>좋은 진행자는 대화의 주인공이 아니다</h2>
<p>한 사람씩 질문하고 대답하는 면접보다, 참석자끼리 서로를 알 수 있는 자연스러운 대화가 더 편할 때가 있다. 분위기가 무거워진다면 가벼운 주제로 옮기고, 말이 적은 사람이 있다면 부담스럽지 않게 끼어들 기회를 만드는 것. 관계를 잘 다루는 능력은 말솜씨보다 이런 작은 판단에 드러난다.</p>
<blockquote>데이트를 잘한다는 건 가장 돋보이는 사람이 되는 게 아니라, 함께 있는 사람들을 편안하게 만드는 능력일지도 모른다.</blockquote>
<p>그리고 마음이 가는 사람이 있다면, 그 마음을 표현할 별도의 일대일 시간을 만드는 게 나을 수 있다. 모든 것을 공개적인 자리에서 해결하려 들 필요는 없으니까.</p>
<p class="source">편집 노트: 오래된 방송의 장면을 소재로 한 의견 칼럼입니다. 특정 출연자의 개인적 동기를 단정하지 않습니다.</p>`
},
{
 id:'what-is-an-oksun',tag:'나는 SOLO',theme:'purple',art:'OK\nSOON',title:'옥순은 언제부터 가장 예쁜 사람이라는 뜻이었을까?',desc:'영철은 상남자, 옥순은 미녀? 오래된 출연자 이름이 만드는 기대와 실제.',author:'나솔위키 편집부',min:3,date:'2026.10.27',
 body:`<p>〈나는 SOLO〉를 처음 볼 때는 출연자의 이름이 일종의 예고편처럼 느껴진다. 영철이라면 듬직할 것 같고, 옥순이라면 가장 눈에 띄는 미모의 소유자일 것 같다. 하지만 여러 기수를 보다 보면 그 예측이 자꾸 빗나간다.</p>
<h2>이름 하나가 만드는 첫인상</h2>
<p>누군가를 실제로 만나기 전에 이름과 직업, 출신 지역을 알면 우리는 이미 머릿속에서 작은 인물상을 그린다. 출연자 가명은 매 기수 반복되기 때문에 그 효과가 더 크다. 새로운 영철을 만나면서 과거의 영철들을 무의식적으로 떠올리는 것이다.</p>
<p>제작진은 옥순이라는 이름의 미모 기준을 설명하면서도 지성미처럼 다양한 매력을 언급한 적이 있다. 그렇다면 시청자가 생각하는 ‘옥순다움’과 제작진이 부여하는 이름의 기준은 처음부터 조금 달랐던 셈이다.</p>
<h2>반복되면 기대가 느슨해진다</h2>
<p>오래 본 시청자들은 더 이상 이름만으로 출연자를 판단하지 않는다. 새 출연자가 자기소개를 하고, 데이트를 하고, 예상하지 못한 반응을 보여줄 때 이미 익숙하던 이름에 다른 의미가 덧입혀진다.</p>
<blockquote>이름은 사람을 설명하는 것 같지만, 결국 그 이름의 의미를 바꾸는 건 사람 자신이다.</blockquote>
<p>출연자 이름에 대한 편견도 작은 연애 실험처럼 보인다. 우리는 처음 만난 사람에게 얼마나 많은 의미를 미리 덧씌우고 있을까?</p>
<p class="source">편집 노트: 출연자 이름에 관한 문화적 해석입니다. 영철·옥순의 일관된 선발 규칙이 있다는 뜻은 아닙니다.</p>`
},
{
 id:'back-to-the-stage',tag:'나는 SOLO',theme:'olive',art:'BACK\nAGAIN',title:'실패했던 무대에 스스로 다시 돌아온 남자',desc:'18기 영철의 재도전에서 발견한, 외모 변화보다 인상적인 용기.',author:'진동',min:4,date:'2026.10.27',
 body:`<p>오랜만에 등장한 사람을 보고 한눈에 알아보지 못할 때가 있다. 머리 모양과 옷차림, 몸의 형태가 바뀐 걸까. 아니면 그 사람의 눈빛과 태도가 달라진 걸까.</p>
<p>〈나는 SOLO〉 18기 영철의 〈나솔사계〉 재출연은 그런 놀라움을 떠올리게 했다. 방송에서 그는 과거 자신의 모습이 아쉬워 제작진에게 먼저 다시 출연하고 싶다는 뜻을 전했다고 밝혔다.</p>
<h2>돌아가기 어려운 곳으로 돌아가는 선택</h2>
<p>사람은 자신의 실패가 기록된 장소를 다시 찾고 싶지 않을 수 있다. 특히 수많은 사람이 그 모습을 봤다면 더 그렇다. 그럼에도 다시 출연하겠다고 연락했다는 이야기가 인상적인 이유는, 스스로 바뀌었다는 사실을 보여주기 위해 다시 검증받을 자리에 선 것이기 때문이다.</p>
<p>외모의 변화는 사진 두 장만으로도 볼 수 있다. 그러나 사람을 대하는 태도의 변화는 시간이 걸린다. 반응을 읽는 방식, 웃는 순간, 말을 고르는 여유. 이런 것들은 단순한 스타일링으로 설명하기 어렵다.</p>
<h2>사람은 달라질 수 있을까</h2>
<p>성격이 하루아침에 바뀐다고 말할 수는 없다. 우리가 본 것은 어디까지나 편집된 방송 속 모습이기도 하다. 그래도 하나는 분명하다. 어떤 사람은 과거의 자신을 그냥 운명으로 받아들이지 않는다.</p>
<blockquote>달라진 모습을 증명하는 가장 큰 용기는, 예전의 나를 부끄러워하면서도 다시 시작하는 것이다.</blockquote>
<p>완벽한 사람으로 변신할 필요는 없다. 지난번과 다른 선택을 한 번 더 할 수 있다면, 그것만으로도 다음 이야기는 달라질 수 있으니까.</p>
<p class="source">편집 노트: 18기 영철의 출연 경위에 관한 공개 발언을 출발점으로 쓴 칼럼입니다. 본문은 필자의 해석이며 사적인 심리·성격 변화의 원인을 확정하지 않습니다.</p>`
}

];

const TAGS=['전체','나는 SOLO','연애','외모','관계','심리','라이프','진동'];
const $=selector=>document.querySelector(selector);
const e=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store=(()=>{try{window.localStorage.setItem('__nasol_test','1');window.localStorage.removeItem('__nasol_test');return window.localStorage}catch{const m={};return {getItem:k=>m[k]??null,setItem:(k,v)=>{m[k]=String(v)}}}})();
const keySaved='nasol-magazine-saved-v1'; const keyInterest='nasol-magazine-ebook-interest-v1';
const saved=()=>JSON.parse(store.getItem(keySaved)||'[]');
let activeTag='전체';let searchTerm='';let onlySaved=false;let toastTimer;
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2300)}
function art(article,large=false){return `<div class="${large?'article-cover':'thumb'} art-${article.theme}" aria-hidden="true"><span class="${large?'cover-word':''}">${e(article.art).replaceAll('\n','<br>')}</span></div>`}
function card(article){const isSaved=saved().includes(article.id);return `<article class="article-row"> <a href="#/article/${article.id}" aria-label="${e(article.title)}">${art(article)}</a><div class="article-summary"><span class="article-meta">${e(article.tag)} · ${e(article.author)}</span><h3><a href="#/article/${article.id}">${e(article.title)}</a></h3><p>${e(article.desc)}</p><div class="article-info">${e(article.date)}　·　${article.min}분 읽기</div></div><button class="save-icon ${isSaved?'saved':''}" title="${isSaved?'저장 취소':'저장'}" aria-label="${isSaved?'저장 취소':'저장'}" data-save="${article.id}">${isSaved?'♥':'♡'}</button></article>`}
function tagbar(){return `<div class="tagbar" role="group" aria-label="카테고리 필터">${TAGS.map(t=>`<button class="chip ${activeTag===t?'active':''}" data-tag="${e(t)}">${e(t)}</button>`).join('')}</div>`}
function sidebar(){return `<aside class="aside"><div class="side-label">JINDONG'S LOVE GUIDE</div><div class="side-book"><div class="mini-cover"><span class="ed">THE UGLY TRUTH · VOL. 01</span><strong>왜 두 번째<br>데이트는<br>없을까?</strong><small>진동 · PDF GUIDE</small></div><p>첫인상, 호감, 대화와 선택권. 두 번째 만남을 위한 실전 연애 가이드.</p><a href="#/ebook">출시 예정 전자책 보기 ↗</a></div><div class="side-note"><span class="eyebrow">FROM THE EDITOR</span><h3>방송은 영감일 뿐.</h3><p>연애 예능을 보지 않아도 읽을 가치가 있는 글을 만듭니다. 가볍게 읽고, 오래 생각하고, 친구에게 보내고 싶어지는 이야기.</p><a href="#/about">우리의 편집 원칙 →</a></div><div class="side-note"><span class="eyebrow">WIKI ARCHIVE</span><h3>출연자가 궁금할 때</h3><p>기존 나솔위키의 출연자·기수 정보는 별도로 계속 열람할 수 있어요.</p><a href="#/wiki">위키 바로가기 →</a></div></aside>`}
function homePage(){let list=ARTICLES.filter(a=>((activeTag==='전체'||(activeTag==='나는 SOLO' ? false : a.tag===activeTag))&&(!onlySaved||saved().includes(a.id))&&(!searchTerm||[a.title,a.desc,a.tag,a.body.replace(/<[^>]*>/g,'')].join(' ').toLowerCase().includes(searchTerm.toLowerCase()))));return `<div class="sectiontop"><div><span class="eyebrow">THE NEW LOVE MAGAZINE</span><h1>사람과 사랑을 읽는<br>새로운 방식.</h1><p class="lead">방송은 영감일 뿐. 가볍게 읽고, 친구에게 보내고 싶은 이야기.</p></div></div><a class="hero" href="#/article/attraction-is-room"><div class="hero-copy"><span class="hero-kicker">EDITOR'S PICK · 진동의 칼럼</span><h2>매력의 정체는<br>여유일지도 모른다</h2><p>연애를 잘하고 싶다면, 연애만 잘하려고 하지 마라.</p><span class="readlink">이야기 읽기 ↗</span></div><div class="hero-art"></div></a>${tagbar()}<div class="content-layout"><section><div class="list-header"><h2>${onlySaved?'저장한 기사':searchTerm?'검색 결과':activeTag==='전체'?'오늘의 읽을거리':activeTag}</h2><span class="count">${list.length} ARTICLES</span></div>${list.length?list.map(card).join(''):`<div class="empty"><strong>아직 기사가 없어요.</strong>${activeTag==='나는 SOLO'?'최신 방송 내용은 스포일러를 피하기 위해 아직 발행하지 않았어요.':onlySaved?'마음에 드는 기사에 ♡를 눌러 저장해 보세요.':'다른 카테고리나 검색어를 선택해 보세요.'}</div>`}</section>${sidebar()}</div>`}
function articlePage(id){const a=ARTICLES.find(x=>x.id===id);if(!a)return notFound();const similar=ARTICLES.filter(x=>x.id!==id).sort((x,y)=>Number(y.tag===a.tag)-Number(x.tag===a.tag)).slice(0,4);return `<article class="article-page"><a class="back" href="#/">← 모든 읽을거리</a><header><span class="eyebrow">${e(a.tag)} · NASOL WIKI</span><h1>${e(a.title)}</h1><p class="article-dek">${e(a.desc)}</p><div class="article-byline"><div class="avatar">${a.author==='진동'?'진동':'NW'}</div><div class="byline-text"><strong>${e(a.author)}</strong><br><span>${e(a.date)} · ${a.min}분 읽기</span></div><div class="article-actions"><button data-save="${a.id}">${saved().includes(id)?'♥ 저장됨':'♡ 저장'}</button><button data-share="${a.id}">↗ 공유</button></div></div></header>${art(a,true)}<div class="story">${a.body}</div><div class="story-end"><span class="small muted">이 글을 읽고 떠오른 사람이 있나요?</span><button data-share="${a.id}">친구에게 공유 ↗</button></div><section class="related"><h2>이어서 읽기</h2><div class="related-grid">${similar.map(card).join('')}</div></section></article>`}
function columnPage(){activeTag='진동';onlySaved=false;searchTerm='';return `<div class="pagehead"><span class="eyebrow">JINDONG'S COLUMN</span><h1>진동의 칼럼<span class="highlight">.</span></h1><p class="lead">불편한 현실도 피하지 않지만, 냉소에 머물지는 않습니다.<br>알고 발전하자. 조금 더 풍요로운 사람이 되는 이야기.</p></div><div class="content-layout"><section><div class="list-header"><h2>진동의 글</h2><span class="count">${ARTICLES.filter(a=>a.author==='진동').length} ARTICLES</span></div>${ARTICLES.filter(a=>a.author==='진동').map(card).join('')}</section>${sidebar()}</div>`}
function wikiPage(){return `<div class="pagehead"><span class="eyebrow">THE ARCHIVE</span><h1>나솔위키, 그대로<span class="highlight">.</span></h1><p class="lead">기수와 출연자 정보는 기존 위키에서 계속 확인하세요. 이 매거진 시안은 원본 데이터나 주소를 변경하지 않습니다.</p></div><div class="wiki-box"><div class="wiki-card"><span class="symbol">▦</span><h2>기존 나솔위키 열기</h2><p>그동안 쌓아둔 출연자 정보는 기존 사이트에 그대로 남겨두었어요. 아래 링크는 새 창에서 열립니다.</p><a target="_blank" rel="noopener noreferrer" href="https://nasol.wiki/">nasol.wiki 방문 ↗</a></div><div class="wiki-card"><span class="symbol">✦</span><h2>매거진에서 읽기</h2><p>〈나는 SOLO〉는 소재를 발견하는 영감의 원천. 출연자를 몰라도 재미있는 독립적인 이야기를 읽어보세요.</p><a href="#/">오늘의 기사 보기 →</a></div></div>`}
function ebookPage(){const liked=store.getItem(keyInterest)==='yes';return `<section class="book-hero"><div class="book-cover"><span class="serial">JINDONG'S LOVE GUIDE · 001</span><div><h2>왜 두 번째<br>데이트는<br>없을까?</h2><p>첫인상, 매력, 대화 그리고 여유.<br>다음 만남이 시작되는 지점.</p></div><span class="author">진동 지음</span></div><div class="book-intro"><span class="eyebrow">COMING SOON · PDF E-BOOK</span><h1>첫 만남은 했는데,<br>왜 다음은 없을까?</h1><p>막연한 ‘연애 잘하는 법’ 대신, 상대가 나를 어떻게 받아들이는지 돌아볼 수 있는 구체적인 질문과 연습을 담습니다. 관계를 조종하는 비법이 아니라 나 자신을 개선하는 실전 가이드.</p><div class="price">19,900원 <span>예상 판매가 · 아직 판매하지 않습니다</span></div><div class="interest"><button id="interestButton" class="${liked?'joined':''}">${liked?'♥ 관심 표시 완료':'♡ 이 책 관심 있어요'}</button><p class="fine" id="interestNotice">${liked?'이 기기에 관심 표시가 저장됐어요.':'관심 표시를 눌러보세요. 현재 시안에서는 이 기기에만 저장되고 이메일이나 서버에는 전송되지 않습니다.'}</p></div></div></section><div class="book-body"><div><span class="eyebrow">WHAT'S INSIDE</span><h2>책에 담을 이야기</h2><ol><li>사진과 첫인상: 처음부터 유리한 사람은 왜 유리할까?</li><li>선택권 추정: 사람들은 내게서 어떤 신호를 읽을까?</li><li>말을 잘하는 것과 관계를 잘 만드는 것의 차이</li><li>호감 표현의 속도보다 중요한 것</li><li>나를 돌아보는 첫 만남 체크리스트</li></ol></div><div><span class="eyebrow">OUR PROMISE</span><h2>알고 발전하자.</h2><p>불편한 진실을 외면하지 않되, 사람을 외모나 연애 경험으로 깎아내리지 않습니다. 모든 사람이 같다고 단정하지 않고, 각자가 개선할 수 있는 현실적인 선택을 이야기합니다.</p><p>전자책 출시 전 이 페이지는 수요 확인을 위한 미리보기입니다. 실제 판매·결제·메일 알림은 아직 연결되어 있지 않습니다.</p></div></div><div class="faq"><h2>자주 묻는 질문</h2><details><summary>지금 구매할 수 있나요?</summary><p>아직 아닙니다. 전자책 본문과 결제 시스템을 구축하기 전의 소개 페이지입니다.</p></details><details><summary>관심 표시를 누르면 연락이 오나요?</summary><p>아니요. 현재는 브라우저의 localStorage에만 저장됩니다. 이메일이나 개인 정보를 수집하지 않습니다.</p></details><details><summary>연애 성공을 보장하나요?</summary><p>아니요. 책의 목표는 자신의 관계 경험을 이해하고 실천 가능한 개선점을 찾도록 돕는 것입니다.</p></details></div>`}
function aboutPage(){return `<div class="about-page"><span class="eyebrow">ABOUT US</span><h1>우리는 읽고 싶은<br>이야기를 만듭니다<span class="highlight">.</span></h1><p>〈나는 SOLO〉를 보다가 생긴 질문, 친구와 나눈 뜻밖의 대화, 평범한 일상에서 발견한 작은 모순. 어디서 영감을 얻든 기사는 독립적으로 재미있어야 합니다.</p><p>우리가 추구하는 건 가볍지만 얕지 않은 이야기입니다. 방송을 보지 않은 친구에게도 보내고 싶은 글, 읽고 나면 자신의 경험을 떠올리게 하는 글.</p><h2>편집 원칙</h2><p><strong>01. 방송은 영감의 원천.</strong> 방송 인물의 행동을 단순히 요약하지 않습니다. 다만 보도의 대상이 그 방송 자체일 때는 맥락을 정확히 확인합니다.</p><p><strong>02. 사실과 해석을 구별.</strong> 도발적인 제목이라도 검증 가능한 사실을 왜곡하지 않습니다. 연구 결과의 불확실성도 정직하게 씁니다.</p><p><strong>03. 알고 발전하자.</strong> 외모, 관계, 선택권의 현실을 직시하지만 독자를 비하하거나 절망시키지 않습니다. 삶을 조금 더 풍요롭게 만드는 이야기를 합니다.</p><p><strong>04. 읽는 재미가 먼저.</strong> 설교하거나 가르치려고 하지 않습니다. 한 편의 기사에는 이야기하고 싶은 질문 하나를 남깁니다.</p><hr class="divider"><p class="small muted">나솔위키는 방송 공식 사이트가 아닌 독립 콘텐츠 시안입니다. 기사 내용은 예시 원고이며, 출처 표기·사실 검증·발행 승인 후 정식 발행합니다.</p></div>`}
function notFound(){return `<div class="empty"><strong>페이지를 찾지 못했어요.</strong><a class="cta" href="#/" style="max-width:220px;margin:18px auto">홈으로 돌아가기</a></div>`}
function route(){const hash=decodeURI(location.hash.replace(/^#/,''))||'/';const parts=hash.split('/').filter(Boolean);let html='';if(parts[0]==='article'){html=articlePage(parts[1])}else if(parts[0]==='ebook'){html=ebookPage()}else if(parts[0]==='wiki'){html=wikiPage()}else if(parts[0]==='column'){html=columnPage()}else if(parts[0]==='about'){html=aboutPage()}else if(parts[0]==='saved'){onlySaved=true;activeTag='전체';html=homePage()}else if(parts.length===0){html=homePage()}else{html=notFound()}$('#app').innerHTML=html;document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',((parts[0]||'home')==='article'?'home':parts[0]||'home')===el.dataset.nav));const heading=$('main h1');document.title=(heading?heading.textContent+' | ':'')+'나솔위키';window.scrollTo({top:0,behavior:'instant'});}
function refreshCurrent(){const p=location.hash.replace(/^#/, '')||'/';if(p==='/'||p==='/saved'){$('#app').innerHTML=homePage();}else if(p.startsWith('/article/')){$('#app').innerHTML=articlePage(p.split('/')[2]);}else if(p==='/column'){$('#app').innerHTML=columnPage();}else route()}
async function shareArticle(id){const a=ARTICLES.find(x=>x.id===id);if(!a)return;const url=new URL('#/article/'+id,location.href).href;try{if(navigator.share){await navigator.share({title:a.title,text:a.desc,url});return}if(navigator.clipboard){await navigator.clipboard.writeText(url);toast('기사 링크를 복사했어요.');return}}catch(err){if(err.name==='AbortError')return}const input=document.createElement('textarea');input.value=url;document.body.appendChild(input);input.select();document.execCommand('copy');input.remove();toast('기사 링크를 복사했어요.')}
window.addEventListener('hashchange',()=>{if(!location.hash.startsWith('#/saved'))onlySaved=false;route()});
document.addEventListener('click',evt=>{const save=evt.target.closest('[data-save]');if(save){const id=save.dataset.save;let ids=saved();ids=ids.includes(id)?ids.filter(x=>x!==id):[...ids,id];store.setItem(keySaved,JSON.stringify(ids));toast(ids.includes(id)?'읽기 목록에 저장했어요.':'저장을 취소했어요.');refreshCurrent();return}const share=evt.target.closest('[data-share]');if(share){shareArticle(share.dataset.share);return}const tag=evt.target.closest('[data-tag]');if(tag){activeTag=tag.dataset.tag;onlySaved=false;refreshCurrent();return}if(evt.target.id==='interestButton'){const next=store.getItem(keyInterest)!=='yes';store.setItem(keyInterest,next?'yes':'no');refreshCurrent();toast(next?'이 기기에 관심 표시했어요.':'관심 표시를 취소했어요.');return}});
$('#searchToggle').addEventListener('click',()=>{const el=$('#searchBar');el.hidden=!el.hidden;if(!el.hidden){location.hash='#/';$('#searchInput').focus()}});
$('#savedToggle').addEventListener('click',()=>{location.hash='#/saved';if(location.hash==='#/saved')route()});
$('#searchInput').addEventListener('input',event=>{searchTerm=event.target.value;onlySaved=false;if(location.hash!=='#/'){location.hash='#/'}else refreshCurrent()});
$('#clearSearch').addEventListener('click',()=>{$('#searchInput').value='';searchTerm='';refreshCurrent();$('#searchInput').focus()});
if(!location.hash)location.hash='#/';route();
