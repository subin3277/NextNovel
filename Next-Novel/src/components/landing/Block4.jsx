import style from './Block4.module.css';

export default function Block4(){

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    return(
        <div className={style.block}>
           <div className={style.title}>이용가이드</div>

           <div className={style.container}>
                <div className={style.steps}>
                    <div className={style.vs}>
                        <img src={process.env.PUBLIC_URL+'/icon/logo.svg'} className={style.sicon} alt='vector_step1'></img>
                        <div className={style.num}>
                            1
                        </div>
                    </div>
                    <div className={style.name}>
                        장르 선택
                    </div>
                    <div className={style.context}>
                        <img src={process.env.PUBLIC_URL+'/img/snoopy2rm.png'} className={style.banner} alt='NN_LOGO_text'></img>
                    </div>
                </div>
                <div className={style.steps}>
                    <div className={style.vs}>
                        <img src={process.env.PUBLIC_URL+'/icon/logo.svg'} className={style.sicon} alt='vector_step1'></img>
                        <div className={style.num}>
                            2
                        </div>
                    </div>
                    <div className={style.name}>
                        소재 그리기
                    </div>
                    <div className={style.context}>
                        <img src={process.env.PUBLIC_URL+'/img/snoopy2rm.png'} className={style.banner} alt='NN_LOGO_text'></img>
                    </div>
                </div>
                <div className={style.steps}>
                    <div className={style.vs}>
                        <img src={process.env.PUBLIC_URL+'/icon/logo.svg'} className={style.sicon} alt='vector_step1'></img>
                        <div className={style.num}>
                            3
                        </div>
                    </div>
                    <div className={style.name}>
                        소설 진행
                    </div>
                    <div className={style.context}>

                    </div>
                </div>
                <div className={style.steps}>
                    <div className={style.vs}>
                        <img src={process.env.PUBLIC_URL+'/icon/logo.svg'} className={style.sicon} alt='vector_step1'></img>
                        <div className={style.num}>
                            4
                        </div>
                    </div>
                    <div className={style.name}>
                        완성 & 공유
                    </div>
                    <div className={style.context}>
                        <img src={process.env.PUBLIC_URL+'/img/snoopy4rm.png'} className={style.banner} alt='NN_LOGO_text'></img>
                        <div className={style.circle}></div>
                    </div> 
                </div>

                <div className={style.explain}>
                    <div className={style.exp}>
                        로맨스 / 판타지 / 추리 / SF / 자유 <br />
                        장르 중에서 한가지를 선택합니다
                    </div>
                </div>
                <div className={style.explain}>
                    <div className={style.exp}>
                        소설을 구성할 6가지 소재를 그립니다
                    </div>
                </div>
                <div className={style.explain}>
                    <div className={style.exp}>
                        소설을 이어나가거나(최대 5번),<br />
                        작성을 끝마칩니다
                    </div>
                </div>
                <div className={style.explain}>
                    <div className={style.exp}>
                        표지를 완성하고 공유합니다
                    </div>
                </div>
           </div>
           <div className={style.bonus}>
                가입하고 나만의 소설을 만들어보세요.<br />
                <span className={style.under}>소설 제작, 감상평, 즐겨찾기 등 다양한 기능들을 체험하세요.</span>
           </div>
           <div>
                <img src={process.env.PUBLIC_URL+'/img/NN_LOGO_text.svg'} className={style.under2} alt='NN_LOGO_text'></img>
           </div>
           <div className={style.bonus}>
                <span className={style.under3}>Next Novel</span><br />
                <span className={style.under4}>넥스트노벨</span>
           </div>
           <div className={style.next} onClick={goTop}>
                <div className={style.slide}></div>
            </div>
            <div className={style.top}>
                top
            </div>
        </div>
    )
}