(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();const L=[{id:"case_01",number:1,titleKo:"사건 01: 밀실 펜트하우스 의문사",titleEn:"Case 01: The Closed Penthouse Staging",subtitleKo:"위장된 목맴 자살, 배부 고정성 시반의 모순, 프로포폴 마취제 검출",subtitleEn:"Staged hanging, posterior fixed lividity paradox, and propofol intoxication",isProOnly:!1,briefingKo:"도심 최고급 펜트하우스 샹들리에에 명품 실크 넥타이로 목을 맨 42세 남성(IT 벤처 창업자)의 변사체가 가사도우미에 의해 발견되었습니다. 현장은 내부에서 문이 잠긴 밀실 상태로 유서가 놓여 있어 단순 자살로 추정되었으나, 출동한 과학수사관은 시체의 시반 분포와 삭흔의 각도에서 치명적인 모순점을 포착했습니다.",briefingEn:"A 42-year-old male IT entrepreneur was discovered suspended by a silk necktie from a chandelier inside his locked penthouse. A typed suicide note was on his desk, pointing towards an apparent suicide. However, the initial medicolegal exam revealed severe discrepancies in post-mortem hypostasis and ligature mark geometry.",ambientTempC:18,sceneDescriptionKo:"창문이 닫힌 실내 펜트하우스 거실. 난방은 꺼져 있으며 실내 온도는 18.0°C로 일정하게 유지됨. 책상 위에 노트북과 타이핑된 유서, 거실 바닥에 엎질러진 위스키 잔이 확인됨.",sceneDescriptionEn:"Closed penthouse living room. Heating is off, ambient temperature steady at 18.0°C. Laptop and typed note on desk; overturned whiskey tumbler on floor.",evidenceItems:[{id:"ev_01_whiskey_glass",nameKo:"엎질러진 위스키 잔과 액체",nameEn:"Overturned Whiskey Glass & Residue",descriptionKo:"바닥에 쓰러진 크리스탈 글라스. 바닥에 마른 알코올 및 미지의 백색 잔여물 흔적이 관찰됨.",descriptionEn:"Crystal tumbler on parquet floor. Dried alcoholic liquid with milky white precipitate traces.",x:42,y:68,alsRequired:"uv",requiredTool:"swab",collected:!1,notesKo:"자외선 365nm 조사 시 백색 형광 반응. 멸균 면봉으로 잔여물 채취하여 GC-MS 분석 의뢰.",notesEn:"Fluoresces under 365nm UV. Swabbed for GC-MS toxicology assay.",labCategory:"gcms"},{id:"ev_01_window_latch",nameKo:"테라스 창문 안쪽 잠금장치",nameEn:"Terrace Window Latch Mechanism",descriptionKo:"밀실로 여겨졌던 거실 측면 슬라이딩 테라스 창틀. 외부 침입 흔적은 없으나 레버 표면에 유기물 잔류 의심.",descriptionEn:"Sliding terrace door latch. No forced entry marks, but organic smudge present on lever.",x:82,y:44,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"자성 흑색 분말 현출 결과, 선명한 장문(손바닥 손금 및 지문) 융선 식별. 잠정 용의자(동업자 박진우 원장)와 대조 예정.",notesEn:"Magnetic black powder developed a crisp latent palm print. Flagged for comparison against suspect.",labCategory:"prints"},{id:"ev_01_trash_ampoule",nameKo:"주방 쓰레기통 내 앰플 포장 파편",nameEn:"Syringe Rubber Stopper in Wastebin",descriptionKo:"재활용 분리수거통 깊숙한 곳에서 발견된 고무 마개 및 알루미늄 바이알 캡 파편.",descriptionEn:"Discarded rubber vial stopper found beneath kitchen waste.",x:20,y:75,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"의료용 20ml 바이알 규격의 고무전. 미세 약물 잔여물 및 표면 DNA 스왑 채취.",notesEn:"Medical grade 20mL vial stopper. Swabbed for trace drug residue and touch DNA.",labCategory:"serology"}],victim:{name:"이현우 (Lee Hyun-woo)",age:42,sex:"M",weightKg:74,clothingFactor:1.15,coreLiverTempC:31.6,vitreousPotassiumMmolL:8.12,lividitySite:"posterior",isLividityFixed:!0,suspensionPosition:"vertical",ligatureFurrow:{type:"horizontal_continuous",depthMm:4.8,thyroidCartilageFracture:!0,descriptionKo:"설골(Hyoid bone) 및 갑상연골 하방에서 수평으로 목 전체를 둘러싼 균일한 깊이의 삭흔. 인버티드 V자형 정점(Apex) 부재.",descriptionEn:"Horizontal, completely circular furrow situated below thyroid cartilage with uniform 4.8mm depth. Inverted V-shape suspension apex is absent."},primaryTraumaDescriptionKo:"설골 하방 수평 폐쇄형 삭흔 (폭 12.5mm, 깊이 4.8mm) 및 갑상연골 상각 골절",primaryTraumaDescriptionEn:"Horizontal continuous ligature furrow below hyoid bone (width 12.5mm, depth 4.8mm) with thyroid cartilage fracture",lividityInterpretationKo:"배부 및 둔부 고정성 암자색 시반. 흉복부 압박탈색 음성으로 사망 후 최소 8~12시간 배와 누운 자세 유지 증명",lividityInterpretationEn:"Fixed purplish-blue hypostasis on back and buttocks. Negative blanching proves 8-12h supine posture post-mortem",toxicologyFound:"Propofol & Midazolam"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"피해자 손톱 밑 찰과물(Subungual scrapings)에서 헴(Heme) 반응 확인. 타카야마 시험에서 붉은 바늘모양 피리딘 혈색소 결정 검출되어 인혈(Human Blood) 확정.",interpretationEn:"Positive heme catalytic oxidation on subungual scrapings. Takayama crystal assay confirmed human hemoglobin."},strDna:[{locus:"D8S1179",victimAlleles:[13,14],suspectAlleles:[14,15],evidenceAlleles:[13,14,15],evidenceRfu:[840,920,310],interpretationKo:"3개 대립유전자 검출. 13/14는 피해자 주 기여자(Major), 15는 용의자 부 기여자(Minor)와 일치.",interpretationEn:"Three alleles observed (13, 14, 15). Major component matches victim; minor peak (15) matches suspect."},{locus:"vWA",victimAlleles:[16,17],suspectAlleles:[17,18],evidenceAlleles:[16,17,18],evidenceRfu:[790,850,290],interpretationKo:"3개 대립유전자 검출. 18번 대립유전자는 용의자의 고유 대립유전자와 정확히 부합.",interpretationEn:"Tri-allelic mixture. Allele 18 matches unique allele of suspect."},{locus:"FGA",victimAlleles:[21,23],suspectAlleles:[23,24],evidenceAlleles:[21,23,24],evidenceRfu:[690,750,240],interpretationKo:"24번 피크(240 RFU)는 역치를 초과하는 유효한 부기여자 시그널로 용의자 배제 불가능.",interpretationEn:"Allele 24 above stochastic threshold; suspect cannot be excluded."},{locus:"TH01",victimAlleles:[7,9],suspectAlleles:[9,9.3],evidenceAlleles:[7,9,9.3],evidenceRfu:[910,980,350],interpretationKo:"9.3 마이크로변이체 피크 확인. 용의자 일치 확률 99.999% 상회.",interpretationEn:"Microvariant 9.3 called. Combined random match probability exceeds 1 in 100 billion."}],gcms:[{compoundName:"Propofol (2,6-diisopropylphenol)",retentionTimeMin:7.42,areaPercent:78.4,mzPeaks:[{mz:163,intensity:100},{mz:178,intensity:48},{mz:135,intensity:22},{mz:91,intensity:16}],nistStandardPeaks:[{mz:163,intensity:100},{mz:178,intensity:47},{mz:135,intensity:23},{mz:91,intensity:15}],clinicalSignificanceKo:"정맥 마취제 프로포폴. 대퇴정맥혈 농도 4.8 mg/L (치사/마취 심도 농도). 스스로 정맥 주사 후 넥타이로 목을 매는 것은 약리 메커니즘상 불가능.",clinicalSignificanceEn:"Intravenous anesthetic Propofol at 4.8 mg/L (surgical plane/lethal). Self-administration followed by physical hanging is pharmacologically impossible."},{compoundName:"Midazolam",retentionTimeMin:12.18,areaPercent:18.2,mzPeaks:[{mz:310,intensity:100},{mz:325,intensity:82},{mz:297,intensity:35}],nistStandardPeaks:[{mz:310,intensity:100},{mz:325,intensity:80},{mz:297,intensity:36}],clinicalSignificanceKo:"벤조디아제핀계 진정제 미다졸람 검출. 프로포폴과 병용 투여되어 의식 상실 및 호흡 억제 유발.",clinicalSignificanceEn:"Benzodiazepine sedative Midazolam detected. Synergistic central nervous system depression."}]},inquest:[{id:"q1_lividity_paradox",counselArgumentKo:'변호인: "피해자는 펜트하우스 샹들리에에 수직으로 매달린 채 발견되었습니다. 고인의 우울증 진단서와 유서까지 발견되었는데, 왜 타살이라고 단정합니까?"',counselArgumentEn:'Defense Counsel: "The decedent was found hung vertically from a chandelier with a signed suicide note. Why does the medical examiner insist this was a homicide?"',options:[{textKo:"배부(등, 둔부)에 형성된 고정성 시반(Fixed Lividity)의 모순 제시",textEn:"Present the contradiction of fixed posterior hypostasis on the back and buttocks",isCorrect:!0,requiredEvidenceId:"probeLividity",explanationKo:"정확합니다. 시체가 수직으로 매달려 사망했다면 시반은 중력에 의해 하지 말단(발, 종아리)에 침강해야 합니다. 배부에 고정성 시반이 형성되었다는 것은 사망 후 최소 8~12시간 동안 등을 대고 바닥에 누워있었다가 사후에 매달렸음을 명백히 입증합니다.",explanationEn:"Correct. In a true vertical suspension, gravity pulls blood to the feet and calves. Fixed posterior lividity proves the body lay supine on its back for at least 8-12 hours before being hung post-mortem."},{textKo:"피해자의 체온이 실내온도보다 낮았음을 주장",textEn:"Argue that the body temperature was lower than ambient room temperature",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"사체의 체온은 주위 환경 온도 이하로 내려가지 않습니다(열역학 제2법칙).",explanationEn:"Biologically invalid. Body temperature does not drop below ambient environment."}]},{id:"q2_ligature_mechanics",counselArgumentKo:'변호인: "목에 삭흔이 남았다는 사실 자체가 목맴 자살의 직접적인 증거가 아닙니까?"',counselArgumentEn:'Defense Counsel: "Isn’t the presence of the ligature furrow around the neck direct proof of hanging?"',options:[{textKo:"수평 원형 삭흔과 갑상연골 골절을 제시하여 교살(Strangulation) 증명",textEn:"Present the horizontal continuous furrow and thyroid cartilage fracture proving ligature strangulation",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 전형적인 자살성 의사(Hanging)는 지지점으로 향하는 상향 경사의 inverted V자형 삭흔이 생깁니다. 반면 피해자의 삭흔은 갑상연골 하방에서 수평으로 균일하게 둘러싸고 있어 끈으로 목을 졸라 살해한 전형적인 교사(Ligature Strangulation)입니다.",explanationEn:"Correct. Suicidal hanging leaves an oblique furrow rising toward an inverted V-notch apex. The horizontal, continuous furrow with thyroid fracture is the hallmark of homicidal ligature strangulation."},{textKo:"목맴 자살에서도 설골 골절이 항상 동반되므로 교살과 구별 불가능함을 인정",textEn:"Concede that thyroid fractures always occur in hanging and cannot distinguish strangulation",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 청장년층의 단순 목맴 자살에서는 설골 골절률이 극히 낮으며, 수평 원형 삭흔은 자살성 의사에서 물리적으로 형성될 수 없습니다.",explanationEn:"Invalid. Complete horizontal furrows never form in suicidal hanging, where suspension forces pull upward."},{textKo:"피해자 목의 피부 찰과흔이 사후에 형성된 건조화 현상(Parchmenting)일 뿐이라고 주장",textEn:"Argue that the mark is merely post-mortem parchmenting without vital reaction",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 건조화는 사후 변화이나, 진피층 피하 출혈 및 갑상연골 골절은 생체 반응(Vital reaction)을 증명합니다.",explanationEn:"Invalid. Subcutaneous hemorrhages and cartilage fractures represent distinct vital reactions."}]}],correctManner:"homicide",correctCauseKo:"프로포폴 및 미다졸람에 의한 의식상실 상태에서의 끈에 의한 경부압박질식사(교사) 후 자살 위장 사체 유기",correctCauseEn:"Ligature strangulation under chemical restraint (propofol/midazolam) with post-mortem staged suspension"},{id:"case_02",number:2,titleKo:"사건 02: 호숫가 침수 차량 변사 사건",titleEn:"Case 02: The Submerged Sedan Mystery",subtitleKo:"골수 규조류(Diatom) 검사와 브레이크 유압호스 절단흔 분석",subtitleEn:"Bone marrow diatom assay and hydraulic brake line toolmark comparison",isProOnly:!1,briefingKo:"새벽 수심 4m의 차가운 저수지에 추락한 세단 운전석에서 38세 여성 회계사의 사체가 인양되었습니다. 단순 빗길 운전미숙 추락 사고로 종결될 뻔하였으나, 피해자의 대퇴골 골수 내 플랑크톤(규조류) 침투 여부와 차량 하부 브레이크 유압 라인에서 의심스러운 절삭흔이 발견되었습니다.",briefingEn:"A 38-year-old accountant was pulled from a sedan submerged 4 meters deep in a cold reservoir. Suspected as a tragic rain-slicked driving accident, the forensic team must verify whether water inhalation occurred while alive using bone marrow diatom extraction, alongside toolmark microscopy on severed brake lines.",ambientTempC:6.2,sceneDescriptionKo:"저수지 수변 인양 지점. 차량 전면 유리가 파손되어 있으며, 운전석 안전벨트는 채워진 상태. 수온 6.2°C.",sceneDescriptionEn:"Reservoir shoreline recovery point. Front windshield shattered, driver seatbelt latched. Water temp 6.2°C.",evidenceItems:[{id:"ev_02_brake_hose",nameKo:"절단된 후륜 브레이크 유압 고무/금속 호스",nameEn:"Severed Rear Brake Hydraulic Line",descriptionKo:"차량 하부 섀시에서 수거된 고압 유압 라인. 피로 파괴가 아닌 예리한 공구에 의한 절삭 흔적이 뚜렷함.",descriptionEn:"Chassis brake hydraulic line. Sharp mechanical shear marks present rather than tensile blowout.",x:55,y:80,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"비교현미경 하에서 압착 절단기(Cable cutter) 날의 미세 선조흔과 1:1 대조 분석 필요.",notesEn:"Prepared for comparison microscope toolmark striation matching against seized tools.",labCategory:"ballistics"},{id:"ev_02_water_sample",nameKo:"사고 저수지 표층 및 심층수 채취병",nameEn:"Reservoir Water Sample (Surface & Depth)",descriptionKo:"현장 수역의 고유 플랑크톤 규조류 종 조성을 파악하기 위한 대조군 시료.",descriptionEn:"Control sample to determine indigenous diatom taxa in the reservoir.",x:18,y:40,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"Asterionella 및 Navicula 규조류 풍부. 골수 시료와 종 일치율 분석 예정.",notesEn:"Rich in Asterionella and Navicula species. For qualitative marrow matching.",labCategory:"serology"}],victim:{name:"최서윤 (Choi Seo-yoon)",age:38,sex:"F",weightKg:52,clothingFactor:1.3,coreLiverTempC:12.1,vitreousPotassiumMmolL:6.95,lividitySite:"anterior",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"경부 외상 소견 없음. 폐기종 및 기도 내 미세 포말(Froth cone) 확인.",descriptionEn:"No neck trauma. Extensive pulmonary emphysema aquosum with airway froth cone."},primaryTraumaDescriptionKo:"외상성 손상 없음. 구비강 미세 백색 기포성 포말(Mushroom-like foam cone) 및 양측 폐의 과팽창성 수성 폐기종",primaryTraumaDescriptionEn:"No mechanical trauma. Mushroom-like fine white froth cone at mouth and nose with hyperexpanded emphysema aquosum",lividityInterpretationKo:"차량 운전석 착석 상태의 하지 의존성 암적자색 시반. 냉수 저온으로 인한 사후 변화 지연",lividityInterpretationEn:"Dependent purplish hypostasis in legs from seated driver posture. Delayed decomposition due to cold water.",toxicologyFound:"Diatoms in Femur & High Ethanol (0.14%)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"대퇴골 폐쇄 골수(Femur bone marrow) 질산 산분해 검사 결과, 저수지 원수와 100% 일치하는 Asterionella 규조류 84개체 검출. 심장이 박동하는 생체 상태에서 익수(Drowning)했음을 확증.",interpretationEn:"Nitric acid digestion of closed femur marrow revealed 84 Asterionella diatoms identical to lake water. Conclusively proves vital drowning (heart beating upon submersion)."},strDna:[],gcms:[{compoundName:"Ethanol (Blood Alcohol Content)",retentionTimeMin:2.15,areaPercent:92,mzPeaks:[{mz:31,intensity:100},{mz:45,intensity:58},{mz:46,intensity:20}],nistStandardPeaks:[{mz:31,intensity:100},{mz:45,intensity:58},{mz:46,intensity:20}],clinicalSignificanceKo:"혈중알코올농도 0.142%. 만취 상태로 호흡 및 인지 기능 저하.",clinicalSignificanceEn:"BAC 0.142%. Acute alcohol intoxication impairing reaction."}],ballistics:{caliber:"Toolmark: 12mm Hydraulic Shear",recoveredBulletProfile:[.12,.45,.88,.92,.61,.33,.77,.85,.44,.21],seizedGunBulletProfile:[.11,.47,.89,.91,.59,.35,.76,.84,.42,.23],referenceProfiles:[]}},inquest:[{id:"q_case2_diatom",counselArgumentKo:'변호인: "피해자는 차에 타기 전 이미 살해당해 차에 실려 저수지에 유기된 것이 아닙니까?"',counselArgumentEn:'Defense Counsel: "Was the victim not killed prior to the vehicle entering the reservoir?"',options:[{textKo:"대퇴골 밀폐 골수에서 검출된 규조류(Diatom) 검사 결과 제시",textEn:"Present the positive diatom recovery from closed femoral bone marrow",isCorrect:!0,requiredEvidenceId:"ev_02_water_sample",explanationKo:"정확합니다. 물속에 사후 유기된 시체는 폐에 수동적으로 물이 유입될 수는 있으나, 심장 박동과 대순환계 혈액 순환이 멈춘 상태에서는 외부 규조류가 대퇴골 골수강 내부로 침투할 수 없습니다. 따라서 피해자는 차량이 수몰될 당시 살아있었습니다.",explanationEn:"Correct. Closed bone marrow diatom extraction proves the circulatory system was actively pumping lake water from alveolar capillaries throughout the body before death."},{textKo:"폐포 내 단순 침수액 유입량(500mL)만으로 생전 익사를 확증할 수 있다고 주장",textEn:"Argue that alveolar fluid volume alone confirms living drowning",isCorrect:!1,requiredEvidenceId:"ev_02_water_sample",explanationKo:"오류: 사후 침수 사체라도 수압에 의해 폐 내로 수동적 수액 유입이 발생할 수 있으므로, 폐 수액량만으로는 생전 익사를 확증할 수 없습니다.",explanationEn:"Flawed. Post-mortem submersion can passively force water into lungs via hydrostatic pressure."},{textKo:"저온 수온으로 인한 사체 부패 지연을 근거로 추락 즉시 심정지 사망했음을 주장",textEn:"Argue that cold-water preservation proves immediate cardiac arrest upon impact",isCorrect:!1,requiredEvidenceId:"ev_02_water_sample",explanationKo:"오류: 저온 수온은 부패를 자연 지연시킬 뿐 생전 추락 당시의 순환계 상태를 특정하지 못합니다.",explanationEn:"Flawed. Temperature retardation of putrefaction does not demonstrate vital circulation."},{textKo:"폐포 내 단순 침수액 유입량(500mL)만으로 생전 익사를 확증할 수 있다고 주장",textEn:"Argue that alveolar fluid volume alone confirms living drowning",isCorrect:!1,requiredEvidenceId:"ev_02_water_sample",explanationKo:"오류: 사후 침수 사체라도 수압에 의해 폐 내로 수동적 수액 유입이 발생할 수 있으므로, 폐 수액량만으로는 생전 익사를 확증할 수 없습니다.",explanationEn:"Flawed. Post-mortem submersion can passively force water into lungs via hydrostatic pressure."},{textKo:"저온 수온으로 인한 사체 부패 지연을 근거로 추락 즉시 심정지 사망했음을 주장",textEn:"Argue that cold-water preservation proves immediate cardiac arrest upon impact",isCorrect:!1,requiredEvidenceId:"ev_02_water_sample",explanationKo:"오류: 저온 수온은 부패를 자연 지연시킬 뿐 생전 추락 당시의 순환계 상태를 특정하지 못합니다.",explanationEn:"Flawed. Temperature retardation of putrefaction does not demonstrate vital circulation."}]}],correctManner:"homicide",correctCauseKo:"브레이크 호스 고의 절단에 의한 제동 불능 추락 후 익사(타살)",correctCauseEn:"Homicidal sabotage of brake lines resulting in intentional vehicular submersion and drowning"},{id:"case_03",number:3,titleKo:"사건 03: 생명공학 연구실 총기 격발 사건",titleEn:"Case 03: The Bio-Lab Gunshot Discharge",subtitleKo:"원사창 그을음 부재, SEM-EDS 총기발사잔사(GSR) 및 공이자국 대조",subtitleEn:"Absence of contact soot ring, SEM-EDS gunshot residue (GSR), and firing pin impression match",isProOnly:!1,briefingKo:'국가 지정 바이오신약 연구소 클린룸에서 수석연구원이 우측 측두부 총상으로 사망한 채 발견되었습니다. 동료 수석 연구원은 "피해자가 연구 데이터 조작에 대한 죄책감으로 자신의 권총으로 자살했다"고 진술했으나, 창상 주변에 총구 접촉 그을음이 전혀 없고, 혈흔의 낙하 각도가 서 있는 사람의 격발 각도와 일치했습니다.',briefingEn:"A senior geneticist was found dead of a right temporal gunshot wound inside a high-containment cleanroom. A colleague claimed the victim committed suicide with a registered handgun. However, the entrance wound lacked contact soot or muzzle burns, and blood spatter trigonometry contradicted a self-inflicted shot.",ambientTempC:21,sceneDescriptionKo:"클린룸 실험대. 바닥에 9mm 탄피 1점 유착. 벽면에 고속 혈흔 비산흔(High-velocity impact spatter) 관찰됨.",sceneDescriptionEn:"Cleanroom workstation. Single 9mm ejected casing on floor. High-velocity impact spatter on drywall.",evidenceItems:[{id:"ev_03_spent_casing",nameKo:"현장 유착 9mm Luger 탄피",nameEn:"Recovered 9mm Luger Spent Casing",descriptionKo:"바닥 배수구 인근에서 수거된 황동 탄피. 저면 뇌관에 독특한 쐐기형 공이 자국이 각인됨.",descriptionEn:"Brass 9mm casing. Unique asymmetric wedge firing pin indentation on primer.",x:60,y:72,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"비교현미경으로 용의자의 글록 19 표준 사격 탄피와 공이자국 1:1 대조.",notesEn:"For comparison microscope firing pin and breech face alignment against seized Glock 19.",labCategory:"ballistics"}],victim:{name:"강민혁 (Kang Min-hyuk)",age:46,sex:"M",weightKg:68,clothingFactor:1.05,coreLiverTempC:34.2,vitreousPotassiumMmolL:6.1,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"우측 측두부 직경 9mm의 원형 사입구(Entrance wound). 마찰륜(Abrasion collar)만 관찰되며, 화약 그을음(Soot ring) 및 화약알 문신(Tattooing/Stippling) 일체 부재. 총구와 피부가 60cm 이상 떨어진 원사(Distant gunshot wound) 소견.",descriptionEn:"Circular 9mm entrance wound on right temple with clean abrasion collar. Complete absence of soot deposition or powder stippling indicates distant gunshot (>60cm away)."},primaryTraumaDescriptionKo:"우측 측두부 접촉 그을음 없는 9mm 원사창 (사입구 직경 9.2mm, 그을음/화약박힘 완전 부재)",primaryTraumaDescriptionEn:"Right temporal distant gunshot entrance wound (diameter 9.2mm) with complete absence of soot or powder stippling",lividityInterpretationKo:"실험대 의자에 쓰러진 우측 체간부 고정성 암자색 시반",lividityInterpretationEn:"Fixed purplish-blue lividity along the right flank slumped against cleanroom bench.",toxicologyFound:"Negative"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"벽면 고속 분무 혈흔(비산 직경 < 1mm)에서 인혈 확인. 혈흔 충돌 각도 삼각함수 계산 결과 총격 당시 피해자는 의자에 앉아 있었으며 발사자는 서서 내려다보며 격발함.",interpretationEn:"High-velocity misting bloodstains on wall. Impact angle trigonometry calculates trajectory from a standing shooter down toward a seated victim."},strDna:[],gcms:[],ballistics:{caliber:"9x19mm Parabellum",recoveredBulletProfile:[.82,.74,.91,.85,.63,.44,.89,.94,.78,.85],seizedGunBulletProfile:[.81,.76,.9,.83,.65,.46,.87,.93,.79,.84],referenceProfiles:[]}},inquest:[{id:"q_case3_distant_wound",counselArgumentKo:'변호인: "피해자가 권총을 자신의 관자놀이에 대고 방아쇠를 당겼다는 목격자 증언이 있습니다. 왜 자살이 아니라는 겁니까?"',counselArgumentEn:'Defense Counsel: "The eyewitness testified the victim held the gun against his own temple. Why do you dispute this?"',options:[{textKo:"총구 그을음(Soot)과 문신(Stippling) 부재에 의한 원사창(Distant Wound) 판정 제시",textEn:"Present the absence of contact soot or stippling proving a distant gunshot wound",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 스스로 관자놀이에 총을 쏘아 자살할 경우, 총구가 피부에 밀착되거나 극히 근접하여 총구 마찰흔, 고열 화약 그을음(Soot), 피부 내 미연소 화약알 문신(Tattooing)이 필수적으로 남습니다. 화약 잔사가 전혀 없는 원사창은 타인이 최소 60cm 이상 떨어진 거리에서 격발했음을 증명합니다.",explanationEn:"Correct. A self-inflicted contact wound always deposits heavy carbon soot, muzzle burns, and unburned powder stippling into the dermis. A clean distant wound (>60cm) medically refutes self-infliction."},{textKo:"총열 내 강선 마모 상태를 근거로 피해자가 직접 방아쇠를 당겼음을 주장",textEn:"Argue that rifling wear indicates the victim pressed the trigger",isCorrect:!1,requiredEvidenceId:"ev_03_glock",explanationKo:"오류: 총열 강선 마모는 탄도 탄속에 영향을 줄 뿐 격발자의 악력이나 자살 여부와 무관합니다.",explanationEn:"Flawed. Barrel wear affects ballistics, not the identity of the shooter."},{textKo:"탄피 배출 각도가 우측 45도이므로 자살자의 사격 자세와 일치함을 인정",textEn:"Concede that the 45-degree casing ejection matches suicide posture",isCorrect:!1,requiredEvidenceId:"ev_03_spent_casing",explanationKo:"오류: 탄피 배출 궤적은 총기 추출기 구조에 따를 뿐 사수의 신체 위치를 증명하지 못합니다.",explanationEn:"Flawed. Casing ejection direction is governed by the mechanical extractor, not posture."},{textKo:"총열 내 강선 마모 상태를 근거로 피해자가 직접 방아쇠를 당겼음을 주장",textEn:"Argue that rifling wear indicates the victim pressed the trigger",isCorrect:!1,requiredEvidenceId:"ev_03_glock",explanationKo:"오류: 총열 강선 마모는 탄도 탄속에 영향을 줄 뿐 격발자의 악력이나 자살 여부와 무관합니다.",explanationEn:"Flawed. Barrel wear affects ballistics, not the identity of the shooter."},{textKo:"탄피 배출 각도가 우측 45도이므로 자살자의 사격 자세와 일치함을 인정",textEn:"Concede that the 45-degree casing ejection matches suicide posture",isCorrect:!1,requiredEvidenceId:"ev_03_spent_casing",explanationKo:"오류: 탄피 배출 궤적은 총기 추출기 구조에 따를 뿐 사수의 신체 위치를 증명하지 못합니다.",explanationEn:"Flawed. Casing ejection direction is governed by the mechanical extractor, not posture."}]}],correctManner:"homicide",correctCauseKo:"원거리 총격에 의한 두개골 관통 및 뇌실질 손상(타살)",correctCauseEn:"Distant homicidal gunshot wound to the cranium resulting in fatal cerebral disruption"},{id:"case_04",number:4,titleKo:"사건 04: 도금공장 청산가리 음독 사건",titleEn:"Case 04: The Cyanide Plating Bath",subtitleKo:"선홍색 시반(Cherry-Red Lividity)과 시안화칼륨 위점막 부식",subtitleEn:"Cherry-red livor mortis and potassium cyanide gastric corrosion",isProOnly:!0,briefingKo:"귀금속 전기도금 작업실에서 50대 공장장이 쓰러져 사망했습니다. 작업장 바닥에 쏟아진 청산칼륨 수용액과 쓴 아몬드 냄새로 인해 단순 산업재해 질식사고로 신고되었으나, 피해자의 위 내용물에서 결정적인 타살 정황이 포착되었습니다.",briefingEn:"A plating plant manager collapsed dead beside an industrial electroplating tank. Reported as an industrial cyanide gas inhalation accident, gastric examination revealed ingested pellets in wine residue.",ambientTempC:22.5,sceneDescriptionKo:"환기가 불량한 도금 공장 내부. 침전조 옆에 쓰러진 위스키 플라스크와 KCN 결정 잔여물.",sceneDescriptionEn:"Poorly ventilated electroplating shop. Overturned hip flask beside potassium cyanide vat.",evidenceItems:[{id:"ev_04_cyanide_flask",nameKo:"휴대용 금속 위스키 플라스크",nameEn:"Pocket Metal Whiskey Flask",descriptionKo:"희석된 시안화칼륨(KCN) 침전물이 바닥에 잔류하는 가죽 커버 플라스크.",descriptionEn:"Metal hip flask with white crystalline cyanide residue.",x:48,y:65,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"GC-MS 및 비색법 분석 의뢰.",notesEn:"Sent for spectrophotometric cyanide assay.",labCategory:"gcms"}],victim:{name:"조만석 (Cho Man-seok)",age:54,sex:"M",weightKg:81,clothingFactor:1.2,coreLiverTempC:33.1,vitreousPotassiumMmolL:6.45,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"경부 외상 전무. 전신의 시반이 선명한 선홍색(Cherry-red)을 띰.",descriptionEn:"No neck trauma. Marked bright cherry-red livor mortis across body."},primaryTraumaDescriptionKo:"위점막 광범위 알칼리 괴사 부식 및 안면 결막 울혈, 전신 선홍색 시반(Cherry-Red Lividity)",primaryTraumaDescriptionEn:"Extensive gastric mucosal liquefactive alkali necrosis, facial petechiae, and generalized bright cherry-red lividity",lividityInterpretationKo:"시안화칼륨의 시토크롬 산화효소 억제로 인한 전신 선홍색(Cherry-Red) 시반. 압박탈색 음성(고정)",lividityInterpretationEn:"Classic cherry-red livor mortis from cytochrome oxidase inhibition and oxygenated venous blood.",toxicologyFound:"Cyanide (HCN) 6.2 mg/L"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"위점막 침식부에서 시안화물 정색반응 양성(프러시안 블루 반응).",interpretationEn:"Prussian blue reaction confirmed fatal gastric potassium cyanide."},strDna:[],gcms:[{compoundName:"Hydrogen Cyanide (KCN Ingestion)",retentionTimeMin:1.82,areaPercent:95,mzPeaks:[{mz:27,intensity:100}],nistStandardPeaks:[{mz:27,intensity:100}],clinicalSignificanceKo:"혈중 시안화물 6.2 mg/L (치사량 3.0 mg/L의 2배 초과). 산화적 인산화 억제에 의한 세포내 내질식사.",clinicalSignificanceEn:"Blood cyanide 6.2 mg/L (fatal threshold 3.0 mg/L). Cytochrome c oxidase inhibition."}]},inquest:[{id:"q_case4_cyanide",counselArgumentKo:'변호인: "피해자는 작업 도중 발생한 청산가스 증기를 흡입하여 사망한 단순 산재 사고사입니다!"',counselArgumentEn:'Defense Counsel: "The victim merely inhaled accidental cyanide fumes during plating work!"',options:[{textKo:"위점막의 화학적 알칼리 부식 및 위액 내 치사량 KCN 검출 제시",textEn:"Present the chemical mucosal corrosion and massive KCN inside stomach gastric contents",isCorrect:!0,requiredEvidenceId:"ev_04_cyanide_flask",explanationKo:"정확합니다. 기체 상태의 청산가스(HCN)를 흡입했을 경우 폐포를 통해 흡수되므로 위점막에 직접적인 부식이나 위액 내 고농도 칼륨염이 잔류하지 않습니다. 위 속에서 다량의 KCN이 검출된 것은 술에 탄 독극물을 경구 섭취했음을 명백히 입증합니다.",explanationEn:"Correct. Vapor inhalation causes pulmonary absorption without caustic alkaline necrosis in the stomach rugae. Huge gastric cyanide deposits prove oral ingestion."},{textKo:"메트헤모글로빈 수치가 70%를 초과하여 초콜릿색 혈액이 관찰됨을 주장",textEn:"Argue that Met-Hb exceeded 70% causing chocolate-brown blood",isCorrect:!1,requiredEvidenceId:"ev_04_vat_cyanide",explanationKo:"오류: 메트헤모글로빈혈증은 아질산염 중독이며, 시안화염은 시토크롬 산화효소 억제로 선홍색 혈액을 띱니다.",explanationEn:"Invalid. Methemoglobinemia causes chocolate blood; cyanide inhibits cytochrome oxidase yielding cherry-red blood."},{textKo:"단순 가스 흡입 사고로도 위점막 전체의 알칼리 화학적 화상이 유발된다고 인정",textEn:"Concede that gas inhalation alone causes extensive gastric liquefactive necrosis",isCorrect:!1,requiredEvidenceId:"ev_04_vat_cyanide",explanationKo:"오류: 가스 흡입만으로는 위점막 상피의 심한 알칼리성 용해 괴사가 발생하지 않습니다.",explanationEn:"Invalid. Inhalation cannot account for transmural gastric liquefactive alkaline necrosis."},{textKo:"메트헤모글로빈 수치가 70%를 초과하여 초콜릿색 혈액이 관찰됨을 주장",textEn:"Argue that Met-Hb exceeded 70% causing chocolate-brown blood",isCorrect:!1,requiredEvidenceId:"ev_04_vat_cyanide",explanationKo:"오류: 메트헤모글로빈혈증은 아질산염 중독이며, 시안화염은 시토크롬 산화효소 억제로 선홍색 혈액을 띱니다.",explanationEn:"Invalid. Methemoglobinemia causes chocolate blood; cyanide inhibits cytochrome oxidase yielding cherry-red blood."},{textKo:"단순 가스 흡입 사고로도 위점막 전체의 알칼리 화학적 화상이 유발된다고 인정",textEn:"Concede that gas inhalation alone causes extensive gastric liquefactive necrosis",isCorrect:!1,requiredEvidenceId:"ev_04_vat_cyanide",explanationKo:"오류: 가스 흡입만으로는 위점막 상피의 심한 알칼리성 용해 괴사가 발생하지 않습니다.",explanationEn:"Invalid. Inhalation cannot account for transmural gastric liquefactive alkaline necrosis."}]}],correctManner:"homicide",correctCauseKo:"음료에 투입된 시안화칼륨(KCN) 경구 음독에 의한 급성 세포내 질식사(타살)",correctCauseEn:"Acute cellular histotoxic hypoxia via oral potassium cyanide poisoning"},{id:"case_05",number:5,titleKo:"사건 05: 한랭지 설산 동사 위장 유기",titleEn:"Case 05: The Hypothermic Mountain Paradox",subtitleKo:"이상 탈의(Paradoxical Undressing)와 위점막 비슈네프스키 반점",subtitleEn:"Paradoxical undressing vs Wischnewsky spots and head trauma",isProOnly:!0,briefingKo:'영하 4.5°C의 설산 등산로 계곡에서 속옷 차림의 31세 여성 변사체가 발견되었습니다. 옷가지가 주변에 단정히 정돈되어 있어 저체온사 특유의 "이상 탈의" 자살/사고사로 추정되었으나, 두개골 후두부에 숨겨진 함몰 골절이 드러났습니다.',briefingEn:"A 31-year-old female was found in sub-zero snowbank wearing only underwear. Clothes folded 20 meters away hinted at paradoxical undressing, but reflection of the scalp exposed a blunt impact fracture.",ambientTempC:-4.5,sceneDescriptionKo:"빙판 바위 계곡. 주변 신선설 위에 피해자 패딩 및 방한화가 가지런히 벗겨져 있음.",sceneDescriptionEn:"Icy alpine ravine. Victim winter parka placed neatly on fresh snowpack.",evidenceItems:[{id:"ev_05_boots",nameKo:"정돈된 방한화 바닥의 이물질",nameEn:"Folded Winter Boots Tread Residue",descriptionKo:"현장 눈 위에 놓인 등산화. 바닥 트레드에서 현장 암석과 다른 화강암 석분 검출.",descriptionEn:"Boots tread contains crushed granite dust distinct from local limestone.",x:30,y:55,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"실내 주차장에서 살해 후 사체와 신발을 산으로 운반한 흔적.",notesEn:"Suggests transport from indoor parking garage to mountain slope.",labCategory:"serology"}],victim:{name:"윤혜진 (Yoon Hye-jin)",age:31,sex:"F",weightKg:49,clothingFactor:1,coreLiverTempC:4.8,vitreousPotassiumMmolL:6.8,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"후두부 4x3cm 크기의 두피 파열창 및 두개골 함몰 골절. 위점막에 비슈네프스키 반점(Wischnewsky spots) 관찰.",descriptionEn:"Occipital 4x3cm depressed cranial fracture. Gastric mucosa displays multiple Wischnewsky spots."},primaryTraumaDescriptionKo:"양측 무릎/팔꿈치 표재성 빙판 찰과상, 위점막 다발성 흑갈색 비슈네프스키 반점(Wischnewsky spots)",primaryTraumaDescriptionEn:"Bilateral knee/elbow superficial ice abrasions and multiple black-brown gastric Wischnewsky spots from fatal hypothermia",lividityInterpretationKo:"한랭 노출에 의한 밝은 분홍-선홍색 시반(Pink hypostasis). 사후 18시간 고정성",lividityInterpretationEn:"Bright pink-red hypostasis characteristic of severe cold exposure and dermal re-oxygenation.",toxicologyFound:"Zolpidem 0.8 mg/L"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"후두부 두피하 출혈(Subgaleal hematoma)에서 생전 반응(Vital reaction)인 피브린 석출 확인.",interpretationEn:"Vital reaction confirmed in subgaleal hematoma before freezing."},strDna:[],gcms:[]},inquest:[{id:"q_case5_hypothermia",counselArgumentKo:'변호인: "피해자는 조난 상태에서 저체온증으로 인해 스스로 옷을 벗는 이상 탈의 현상을 겪고 동사한 것입니다!"',counselArgumentEn:'Defense Counsel: "The decedent succumbed to hypothermia and stripped her clothes due to paradoxical undressing!"',options:[{textKo:"후두부 생전 함몰 골절과 혈중 수면제(졸피뎀) 검출 결과 제시",textEn:"Present the vital occipital skull fracture and blood zolpidem intoxication",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 조난에 의한 단순 동사라면 후두부에 둔기 타격에 의한 생전 두개골 함몰 골절이 생길 수 없으며, 혈중에서 치사 수준의 수면제(졸피뎀)가 검출된 것은 피해자를 기절시킨 후 설산에 유기하여 동사시킨 계획 살인임을 입증합니다.",explanationEn:"Correct. A falling hiker does not sustain isolated blunt occipital depression while heavily drugged with zolpidem. Staged cold exposure homicide."},{textKo:"피해자의 탈의가 성폭행 저항 과정에서의 타살 강제 탈의라고 주장",textEn:"Argue that undressing resulted from struggle against sexual assault",isCorrect:!1,requiredEvidenceId:"ev_05_clothes",explanationKo:"오류: 저체온증 말기 시상하부 체온조절 중추 마비로 역설적 작열감을 느껴 스스로 옷을 벗는 이상탈의(Paradoxical Undressing) 현상입니다.",explanationEn:"Invalid. Paradoxical undressing is a classic terminal hypothermic phenomenon from vasomotor collapse."},{textKo:"후두부 찰과상이 저체온증 노출 24시간 전에 발생한 치명적 둔기 손상이라고 주장",textEn:"Argue that the occipital abrasion was a fatal blunt strike inflicted 24 hours prior",isCorrect:!1,requiredEvidenceId:"ev_05_head_wound",explanationKo:"오류: 후두부 손상은 동사 직전 운동실조(Ataxia)로 빙판에 넘어져 발생한 2차성 경미 찰과상입니다.",explanationEn:"Invalid. Occipital abrasion matches a minor slip-and-fall from hypothermic ataxia."},{textKo:"피해자의 탈의가 성폭행 저항 과정에서의 타살 강제 탈의라고 주장",textEn:"Argue that undressing resulted from struggle against sexual assault",isCorrect:!1,requiredEvidenceId:"ev_05_clothes",explanationKo:"오류: 저체온증 말기 시상하부 체온조절 중추 마비로 역설적 작열감을 느껴 스스로 옷을 벗는 이상탈의(Paradoxical Undressing) 현상입니다.",explanationEn:"Invalid. Paradoxical undressing is a classic terminal hypothermic phenomenon from vasomotor collapse."},{textKo:"후두부 찰과상이 저체온증 노출 24시간 전에 발생한 치명적 둔기 손상이라고 주장",textEn:"Argue that the occipital abrasion was a fatal blunt strike inflicted 24 hours prior",isCorrect:!1,requiredEvidenceId:"ev_05_head_wound",explanationKo:"오류: 후두부 손상은 동사 직전 운동실조(Ataxia)로 빙판에 넘어져 발생한 2차성 경미 찰과상입니다.",explanationEn:"Invalid. Occipital abrasion matches a minor slip-and-fall from hypothermic ataxia."}]}],correctManner:"homicide",correctCauseKo:"둔기 타격에 의한 후두골 골절 및 수면제 투약 후 한랭 환경 유기에 의한 동사(타살)",correctCauseEn:"Blunt head trauma and chemical incapacitation followed by lethal hypothermic exposure"},{id:"case_06",number:6,titleKo:"사건 06: 고층 아파트 추락사 vs 투신 위장",titleEn:"Case 06: The High-Rise Balcony Fall",subtitleKo:"대동맥 박리 감속 손상과 추락 전 경부 압박 질식흔",subtitleEn:"Aortic deceleration rupture vs pre-fall manual strangulation petechiae",isProOnly:!0,briefingKo:"24층 아파트 화단에서 20대 여성의 추락 사체가 발견되었습니다. 유서가 없고 발코니 난간에 난간을 넘은 족적이 발견되어 투신 자살로 추정되었으나, 추락 충격에 의한 다발성 골절 틈새에서 추락 이전에 형성된 경부 압박흔이 관찰되었습니다.",briefingEn:"A 20-year-old female was found dead in a garden beneath a 24th-floor balcony. Footprints on the railing suggested suicide, but autopsy uncovered pre-fall manual strangulation marks masked by blunt impact.",ambientTempC:19.5,sceneDescriptionKo:"아파트 지상 화단 화단석. 두부 및 흉곽 파열. 발코니 난간에 섬유 마찰흔 잔류.",sceneDescriptionEn:"Apartment courtyard flagstones. Severe polytrauma with railing fiber transfers.",evidenceItems:[{id:"ev_06_railing_fibers",nameKo:"발코니 난간 외측 섬유 올",nameEn:"Balcony Exterior Railing Textile Fibers",descriptionKo:"난간 볼트에 걸린 검은색 가죽 장갑 미세 섬유 올.",descriptionEn:"Microscopic black glove synthetic leather fragments on bolt.",x:75,y:30,alsRequired:"blue",requiredTool:"swab",collected:!1,notesKo:"피해자 의류와 불일치, 용의자 소유 가죽장갑과 적외선 분광(FTIR) 일치.",notesEn:"FTIR matches suspect leather gloves, refuting victim handling.",labCategory:"serology"}],victim:{name:"송지아 (Song Ji-ah)",age:26,sex:"F",weightKg:47,clothingFactor:1.1,coreLiverTempC:35.8,vitreousPotassiumMmolL:5.9,lividitySite:"anterior",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:2.1,thyroidCartilageFracture:!0,descriptionKo:"다발성 늑골 골절 및 흉부 대동맥 파열. 경부 양측에 손가락 끝 압박에 의한 반상출혈 및 설골 골절.",descriptionEn:"Aortic isthmus transection. Symmetrical fingertip contusions on larynx and hyoid bone fracture."},primaryTraumaDescriptionKo:"안면 안와 결막 다발성 점상출혈 및 설골 골절, 고소 추락에 의한 흉부 대동맥 협부 박리 파열",primaryTraumaDescriptionEn:"Facial and orbital conjunctival petechiae, fractured hyoid bone, and deceleration aortic isthmus rupture from high fall",lividityInterpretationKo:"추락 현장 지면에 접촉한 배부 고정성 시반",lividityInterpretationEn:"Fixed posterior hypostasis where decedent came to rest following deceleration impact.",toxicologyFound:"Negative"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"골절 부위 혈종과 달리 경부 반상출혈 부위는 혈소판 응집이 선행된 생전 손상 확인.",interpretationEn:"Platelet thrombi confirm manual strangulation occurred prior to gravitational fall."},strDna:[],gcms:[]},inquest:[{id:"q_case6_fall",counselArgumentKo:'변호인: "피해자는 비관 끝에 24층 난간에서 자발적으로 투신하여 전신 충격으로 즉사한 것입니다!"',counselArgumentEn:'Defense Counsel: "The victim jumped from the 24th floor due to depression, dying instantly of impact!"',options:[{textKo:"추락 이전 형성된 설골 골절 및 경부 액사(Manual Strangulation) 흔적 제시",textEn:"Present the hyoid bone fracture and manual strangulation marks inflicted before the fall",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 추락 충격으로 전신 골절이 발생할 수는 있으나, 경부 연조직에 대칭으로 남은 손가락 끝 지두압흔(Thumb and finger petechiae)과 설골 골절은 손으로 목을 졸라 살해한 후 사체를 베란다 밖으로 던졌음을 입증합니다.",explanationEn:"Correct. Symmetrical fingertip laryngeal contusions and hyoid fracture are classic signs of manual strangulation, proving the victim was killed before being thrown over."},{textKo:"대동맥 감속 박리 파열이 추락 전 지상에서 둔기로 맞은 흉부 타격 손상이라고 주장",textEn:"Argue that aortic rupture was caused by blunt assault on the ground prior to fall",isCorrect:!1,requiredEvidenceId:"ev_06_railing",explanationKo:"오류: 대동맥 협부 박리 파열은 고소 추락 시 체내 급감속 관성에 의해 발생하는 전형적인 추락 손상입니다.",explanationEn:"Invalid. Aortic isthmus disruption is classic deceleration trauma from high-velocity impact."},{textKo:"추락 충격으로 인한 두개골 파열로 안면 점상출혈이 사후에 생성될 수 있다고 인정",textEn:"Concede that conjunctival petechiae could be formed post-mortem by impact pressure",isCorrect:!1,requiredEvidenceId:"ev_06_railing",explanationKo:"오류: 결막 점상출혈은 경부 압박 시 강력한 정맥 울혈과 심장 박동이 존재하는 생체 상태에서만 형성됩니다.",explanationEn:"Invalid. Petechial hemorrhages require active vascular pressure and cardiac vital reaction."},{textKo:"대동맥 감속 박리 파열이 추락 전 지상에서 둔기로 맞은 흉부 타격 손상이라고 주장",textEn:"Argue that aortic rupture was caused by blunt assault on the ground prior to fall",isCorrect:!1,requiredEvidenceId:"ev_06_railing",explanationKo:"오류: 대동맥 협부 박리 파열은 고소 추락 시 체내 급감속 관성에 의해 발생하는 전형적인 추락 손상입니다.",explanationEn:"Invalid. Aortic isthmus disruption is classic deceleration trauma from high-velocity impact."},{textKo:"추락 충격으로 인한 두개골 파열로 안면 점상출혈이 사후에 생성될 수 있다고 인정",textEn:"Concede that conjunctival petechiae could be formed post-mortem by impact pressure",isCorrect:!1,requiredEvidenceId:"ev_06_railing",explanationKo:"오류: 결막 점상출혈은 경부 압박 시 강력한 정맥 울혈과 심장 박동이 존재하는 생체 상태에서만 형성됩니다.",explanationEn:"Invalid. Petechial hemorrhages require active vascular pressure and cardiac vital reaction."}]}],correctManner:"homicide",correctCauseKo:"손에 의한 경부압박질식사(액사) 후 24층 고층 투하 위장 사체 유기(타살)",correctCauseEn:"Manual strangulation followed by post-mortem staged fall from height"},{id:"case_07",number:7,titleKo:"사건 07: 지하철 화재 참사 유골 복원",titleEn:"Case 07: The Transit Tunnel Pyrolysis",subtitleKo:"일산화탄소혈색소(%HbCO)와 화재 전 두개골 둔기 손상",subtitleEn:"Carboxyhemoglobin (%HbCO) vs pre-fire blunt cranial trauma",isProOnly:!0,briefingKo:"지하철 터널 방화 화재 현장에서 전신 탄화된 유골이 수습되었습니다. 단순 화재 질식사로 추정되었으나, 혈중 %HbCO 수치가 4% 미만으로 화재 연기를 마시지 않았음이 확인되었으며 두개골 골절선이 고열 파열이 아닌 둔기 타격 골절선과 일치했습니다.",briefingEn:"Charred skeletal remains recovered from an arson-ravaged subway tunnel. Expected fire asphyxiation was ruled out when blood %HbCO measured under 4%, exposing pre-arson bludgeoning.",ambientTempC:35,sceneDescriptionKo:"불에 탄 전동차 객실 바닥. 고열에 의한 투사 자세(Pugilistic attitude) 탄화 시체.",sceneDescriptionEn:"Burned transit car floor. Charred pugilistic flexion posture.",evidenceItems:[{id:"ev_07_molten_watch",nameKo:"열변형된 손목시계 기어 박스",nameEn:"Heat-Deformed Wristwatch Movement",descriptionKo:"시계 내부 밸런스 휠이 정지한 시간 기록 (화재 발생 2시간 전 정지).",descriptionEn:"Mechanical movement seized 2 hours prior to initial arson ignition.",x:40,y:70,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"시계 충격 정지 시간과 용의자 알리바이 대조.",notesEn:"Impact arrest timestamp invalidates suspect alibi.",labCategory:"ballistics"}],victim:{name:"임태호 (Lim Tae-ho)",age:49,sex:"M",weightKg:70,clothingFactor:1,coreLiverTempC:38,vitreousPotassiumMmolL:9.2,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"전신 4도 탄화. 기도 내 그을음 부재. 두개골 좌측 측두부에 방사상 함몰 골절.",descriptionEn:"Fourth-degree charring. No soot in trachea. Left temporal radiating blunt cranial fracture."},primaryTraumaDescriptionKo:"기도 내 그을음 부재(Clean airway), 전신 4도 탄화 및 좌측 두정부 둔기 함몰 골절(생전 골절선)",primaryTraumaDescriptionEn:"Completely soot-free lower airway, 4th-degree thermal charring, and left parietal depressed skull fracture with vital margins",lividityInterpretationKo:"고열 화재로 인한 체표 탄화로 시반 판독 불가 (혈중 %HbCO 3.8%로 사후 소사 입증)",lividityInterpretationEn:"Lividity obscured by extensive heat destruction; 3.8% %HbCO confirms post-mortem fire exposure.",toxicologyFound:"%HbCO 3.8% (Fire Inactive)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"심장혈 분광광도 분석 결과 일산화탄소혈색소(%HbCO) 3.8%로 정상 범위. 화재 당시 호흡 정지 상태 확증.",interpretationEn:"Spectrophotometric %HbCO at 3.8% confirms victim had ceased breathing before fire started."},strDna:[],gcms:[]},inquest:[{id:"q_case7_hbco",counselArgumentKo:'변호인: "피해자는 터널 화재의 유독가스에 질식하여 사망한 불의의 사고 피해자입니다!"',counselArgumentEn:'Defense Counsel: "The victim suffocated from toxic fire fumes inside the burning tunnel!"',options:[{textKo:"기도 내 그을음 부재 및 %HbCO 3.8%와 측두골 둔기 골절 제시",textEn:"Present absence of airway soot, sub-4% %HbCO, and pre-fire temporal fracture",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 화재 당시 살아있었다면 연기를 들이마셔 기도 깊숙이 그을음이 침착되고 혈중 %HbCO가 50% 이상 치솟아야 합니다. 3.8%에 불과한 수치와 기도 청결은 화재 전에 이미 머리를 둔기로 가격당해 살해된 후 방화되었음을 입증합니다.",explanationEn:"Correct. A living fire victim inhales heavy smoke producing >50% %HbCO and airway soot. 3.8% %HbCO proves decedent was murdered prior to arson."},{textKo:"피해자의 사체가 투사자세(Pugilistic attitude)를 취하고 있으므로 화재와 싸우다 사망했다고 주장",textEn:"Argue that the pugilistic attitude proves the victim fought against the fire",isCorrect:!1,requiredEvidenceId:"ev_07_rail",explanationKo:"오류: 투사자세는 고열에 의한 근육 단백질 열응고 수축으로 사후에 무조건 형성되는 물리적 변화입니다.",explanationEn:"Invalid. Pugilistic flexor rigidity is an inevitable post-mortem heat denaturation artifact."},{textKo:"사체의 두개골 열성 파열이 생전 둔기 타격과 완전히 동일하다고 인정",textEn:"Concede that thermal epidural hematoma is identical to living blunt trauma",isCorrect:!1,requiredEvidenceId:"ev_07_rail",explanationKo:"오류: 열성 경막외혈종은 초승달형 스폰지상 응고혈로 생전 손상의 방추형 신선 혈종과 조직학적으로 구별됩니다.",explanationEn:"Invalid. Heat hematoma forms a crescent-shaped honeycomb clot, distinct from vital hematoma."},{textKo:"피해자의 사체가 투사자세(Pugilistic attitude)를 취하고 있으므로 화재와 싸우다 사망했다고 주장",textEn:"Argue that the pugilistic attitude proves the victim fought against the fire",isCorrect:!1,requiredEvidenceId:"ev_07_rail",explanationKo:"오류: 투사자세는 고열에 의한 근육 단백질 열응고 수축으로 사후에 무조건 형성되는 물리적 변화입니다.",explanationEn:"Invalid. Pugilistic flexor rigidity is an inevitable post-mortem heat denaturation artifact."},{textKo:"사체의 두개골 열성 파열이 생전 둔기 타격과 완전히 동일하다고 인정",textEn:"Concede that thermal epidural hematoma is identical to living blunt trauma",isCorrect:!1,requiredEvidenceId:"ev_07_rail",explanationKo:"오류: 열성 경막외혈종은 초승달형 스폰지상 응고혈로 생전 손상의 방추형 신선 혈종과 조직학적으로 구별됩니다.",explanationEn:"Invalid. Heat hematoma forms a crescent-shaped honeycomb clot, distinct from vital hematoma."}]}],correctManner:"homicide",correctCauseKo:"둔기 타격에 의한 두개골 골절 및 뇌좌상 후 방화 사체 훼손(타살)",correctCauseEn:"Blunt force cranial trauma followed by post-mortem incineration"},{id:"case_08",number:8,titleKo:"사건 08: 밀실 욕조 고압 전류 감전사",titleEn:"Case 08: The Bathtub Electrocution",subtitleKo:"전류반점(Joule Burn)과 피부 금속 전착(Metallization)",subtitleEn:"Joule electric burns and epidermal copper metallization",isProOnly:!0,briefingKo:"욕조 물속에 헤어드라이어가 빠진 채 감전사한 30대 남성의 시체가 발견되었습니다. 단순 부주의 누전 사고로 보였으나, 콘센트의 누전차단기(GFCI)가 절연 테이프로 고의 무력화되어 있었으며, 손가락 끝에서 드라이어 외피와 다른 220V 구리 전선의 전류반점이 발견되었습니다.",briefingEn:"A male was found electrocuted in a bathtub with a submerged hair dryer. Deemed an accidental drowning shock, inspection revealed the GFCI breaker was taped shut and copper wire burns marked his hand.",ambientTempC:24,sceneDescriptionKo:"습기 찬 욕실. 욕조 바닥에 침수된 가전기기. 콘센트 회로 차단기 고정 테이프.",sceneDescriptionEn:"Steamy bathroom. Submerged appliance with manually bypassed GFCI breaker.",evidenceItems:[{id:"ev_08_gfci_tape",nameKo:"누전차단기 레버 고정 절연 테이프",nameEn:"GFCI Breaker Electrical Tape Bindings",descriptionKo:"누전 시 트립 차단을 방지하기 위해 단단히 감아놓은 절연 테이프 표면 잠재 지문.",descriptionEn:"Electrical tape preventing breaker trip; contains latent fingerprint.",x:88,y:35,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"자성 분말로 아내의 엄지 지문 식별.",notesEn:"Spouse thumbprint identified on tape.",labCategory:"prints"}],victim:{name:"배규식 (Bae Gyu-sik)",age:36,sex:"M",weightKg:78,clothingFactor:1,coreLiverTempC:36.2,vitreousPotassiumMmolL:6.2,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"우측 시지 및 모지에 분화구형 전류반점(Joule burn). 표피 세포핵의 신장(Nuclear elongation).",descriptionEn:"Crater-like electric entry mark on right hand with epidermal nuclear streaming."},primaryTraumaDescriptionKo:"우측 검지 및 엄지 손가락 끝 220V 전류반점(Joule Burn), 피부 구리 전착 및 심실세동 울혈",primaryTraumaDescriptionEn:"220V Joule burn electrical mark on right index and thumb tips with dermal copper metallization",lividityInterpretationKo:"욕조 온수에 잠긴 후배부 창백대 및 노출 부위 울혈성 암자색 시반",lividityInterpretationEn:"Pale immersion contact areas with deep congested hypostasis on water-exposed regions.",toxicologyFound:"Diazepam 1.5 mg/L"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"SEM-EDS 분석 결과 전류반점 표피에서 구리(Cu) 원소 전착 확인.",interpretationEn:"SEM-EDS confirms microscopic copper (Cu) metallization on skin lesion."},strDna:[],gcms:[]},inquest:[{id:"q_case8_electric",counselArgumentKo:'변호인: "목욕 중 실수로 드라이어를 물에 빠뜨려 발생한 불의의 감전 사고사입니다!"',counselArgumentEn:'Defense Counsel: "The decedent accidentally dropped the hair dryer while bathing!"',options:[{textKo:"차단기 고의 테이핑 및 수면제(디아제팜) 투여 후 물에 넣은 정황 제시",textEn:"Present the taped GFCI breaker and blood diazepam incapacitation",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 누전차단기가 작동하지 못하도록 테이프로 고정해 두었으며, 피해자 혈중에서 깊은 수면을 유발하는 디아제팜이 검출된 것은 의식을 잃은 피해자를 욕조에 눕히고 통전시킨 계획 살인임을 증명합니다.",explanationEn:"Correct. Taping the GFCI breaker shut coupled with tranquilizer poisoning demonstrates pre-planned homicidal electrocution."},{textKo:"심실세동 유발 없이 단순 220V 교류 감전으로 뇌간이 즉시 열응고된다고 주장",textEn:"Argue that 220V AC causes immediate brainstem thermal coagulation without fibrillation",isCorrect:!1,requiredEvidenceId:"ev_08_gfci",explanationKo:"오류: 가정용 220V 교류 감전의 치사 기전은 심실세동에 의한 심정지입니다.",explanationEn:"Invalid. Domestic 220V AC lethal mechanism is cardiac ventricular fibrillation."},{textKo:"욕실 차단기(GFCI) 바이패스 전선이 통상적인 배선 노후화라고 인정",textEn:"Concede that the jumper wire on the GFCI was ordinary aging",isCorrect:!1,requiredEvidenceId:"ev_08_gfci",explanationKo:"오류: 감지 코일에 인위적인 점퍼선이 납땜된 것은 사전 계획 살인의 명백한 증거입니다.",explanationEn:"Invalid. Solder-bypassed safety sensor coils prove premeditated sabotage."},{textKo:"심실세동 유발 없이 단순 220V 교류 감전으로 뇌간이 즉시 열응고된다고 주장",textEn:"Argue that 220V AC causes immediate brainstem thermal coagulation without fibrillation",isCorrect:!1,requiredEvidenceId:"ev_08_gfci",explanationKo:"오류: 가정용 220V 교류 감전의 치사 기전은 심실세동에 의한 심정지입니다.",explanationEn:"Invalid. Domestic 220V AC lethal mechanism is cardiac ventricular fibrillation."},{textKo:"욕실 차단기(GFCI) 바이패스 전선이 통상적인 배선 노후화라고 인정",textEn:"Concede that the jumper wire on the GFCI was ordinary aging",isCorrect:!1,requiredEvidenceId:"ev_08_gfci",explanationKo:"오류: 감지 코일에 인위적인 점퍼선이 납땜된 것은 사전 계획 살인의 명백한 증거입니다.",explanationEn:"Invalid. Solder-bypassed safety sensor coils prove premeditated sabotage."}]}],correctManner:"homicide",correctCauseKo:"진정제 투약으로 무력화된 상태에서 고의 통전에 의한 치사성 심실세동 감전사(타살)",correctCauseEn:"Electrocution inducing ventricular fibrillation under chemical sedation"},{id:"case_09",number:9,titleKo:"사건 09: 무면허 클리닉 액상 실리콘 폐색전증",titleEn:"Case 09: The Illicit Silicone Embolism",subtitleKo:"지방/실리콘 폐색전 오일레드O 염색과 정맥내 직접 주입흔",subtitleEn:"Silicone pulmonary embolism with Oil Red O staining",isProOnly:!0,briefingKo:"오피스텔 무면허 뷰티 시술소에서 필러 주사를 맞던 20대 여성이 급성 호흡 곤란으로 사망했습니다. 시술자는 쇼크성 심근경색을 주장했으나, 폐 조직 검사에서 폐포 모세혈관을 가득 채운 고점도 액상 실리콘 오일이 확인되었습니다.",briefingEn:"A female died during an unlicensed cosmetic filler procedure. Autopsy frozen sections revealed alveolar capillaries occluded with industrial silicone oil.",ambientTempC:22,sceneDescriptionKo:"간이 침대와 소독되지 않은 50ml 주사기. 산업용 액상 실리콘 용기.",sceneDescriptionEn:"Makeshift clinic room with unsterile syringes and industrial silicone.",evidenceItems:[{id:"ev_09_silicone_drum",nameKo:"시술대 아래 산업용 실리콘 오일 통",nameEn:"Industrial Liquid Silicone Drum",descriptionKo:"의료용이 아닌 공업용 폴리디메틸실록산(PDMS) 원액.",descriptionEn:"Industrial polydimethylsiloxane without sterile medical clearance.",x:62,y:75,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"폐 모세혈관 추출 성분과 GC-MS 중합도 1:1 일치.",notesEn:"GC-MS polymer profile matches pulmonary vascular aspirate.",labCategory:"gcms"}],victim:{name:"한수민 (Han Soo-min)",age:28,sex:"F",weightKg:50,clothingFactor:1.1,coreLiverTempC:36.5,vitreousPotassiumMmolL:5.85,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"양측 둔부 다발성 천자흔. 폐 실질의 극심한 부종 및 울혈(폐 중량 1,450g).",descriptionEn:"Multiple puncture sites on buttocks. Massive pulmonary edema (lung weight 1,450g)."},primaryTraumaDescriptionKo:"안면 피하 주름 개선 부위 침습 주흔, 양측 폐포 모세혈관 광범위 액상 실리콘(PDMS) 폐색전증",primaryTraumaDescriptionEn:"Multiple clandestine puncture sites on facial folds with extensive pulmonary capillary liquid silicone micro-embolism",lividityInterpretationKo:"앙와위 누운 자세의 배부 암자색 고정성 시반",lividityInterpretationEn:"Fixed posterior supine hypostasis consistent with immediate collapse on clinical cot.",toxicologyFound:"Industrial Silicone Polymer"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"폐 동결절편 오일레드O(Oil Red O) 특수염색 결과 모세혈관 내 다발성 실리콘 색전 확인.",interpretationEn:"Oil Red O frozen lung section reveals widespread intravascular silicone emboli."},strDna:[],gcms:[]},inquest:[{id:"q_case9_silicone",counselArgumentKo:'변호인: "피술자의 알레르기 체질에 의한 특이체질성 아나필락시스 쇼크사입니다!"',counselArgumentEn:'Defense Counsel: "The patient suffered an unpredictable idiosyncratic anaphylactic shock!"',options:[{textKo:"정맥 내 직접 주입에 의한 폐포 모세혈관 기계적 실리콘 폐색전증 입증",textEn:"Prove mechanical intravascular silicone pulmonary embolism into major venous sinus",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 아나필락시스 쇼크가 아니라 고점도 산업용 실리콘을 둔부 정맥총(Venous plexus) 안으로 대량 직접 밀어 넣어 폐동맥 순환이 기계적으로 차단되어 급성 우심부전으로 사망한 업무상과실치사/살인입니다.",explanationEn:"Correct. Direct intravascular injection of viscous industrial silicone caused mechanical blockage of pulmonary vascular bed, inducing fatal acute cor pulmonale."},{textKo:"폐포 내 물질이 단순 만성 천식 발작에 의한 점액전(Mucus plug)이라고 주장",textEn:"Argue that alveolar obstructions are ordinary mucus plugs from asthma",isCorrect:!1,requiredEvidenceId:"ev_09_silicone_bottle",explanationKo:"오류: GC-MS 분석 결과 합성 폴리디메틸실록산(PDMS) 규소 중합체 피크가 명백히 검출되었습니다.",explanationEn:"Invalid. GC-MS conclusively identified polydimethylsiloxane silicone polymers."},{textKo:"피하 주사만으로도 대순환계 폐색전증이 30초 내에 자연 유발된다고 인정",textEn:"Concede that subcutaneous injection alone triggers fatal embolism within 30 seconds",isCorrect:!1,requiredEvidenceId:"ev_09_silicone_bottle",explanationKo:"오류: 치명적 폐색전증은 정맥 내 직접 주입(IV injection)으로 혈류를 타고 우심방을 거쳐 발생합니다.",explanationEn:"Invalid. Fatal fulminant embolism requires direct cannulation into deep venous vasculature."},{textKo:"폐포 내 물질이 단순 만성 천식 발작에 의한 점액전(Mucus plug)이라고 주장",textEn:"Argue that alveolar obstructions are ordinary mucus plugs from asthma",isCorrect:!1,requiredEvidenceId:"ev_09_silicone_bottle",explanationKo:"오류: GC-MS 분석 결과 합성 폴리디메틸실록산(PDMS) 규소 중합체 피크가 명백히 검출되었습니다.",explanationEn:"Invalid. GC-MS conclusively identified polydimethylsiloxane silicone polymers."},{textKo:"피하 주사만으로도 대순환계 폐색전증이 30초 내에 자연 유발된다고 인정",textEn:"Concede that subcutaneous injection alone triggers fatal embolism within 30 seconds",isCorrect:!1,requiredEvidenceId:"ev_09_silicone_bottle",explanationKo:"오류: 치명적 폐색전증은 정맥 내 직접 주입(IV injection)으로 혈류를 타고 우심방을 거쳐 발생합니다.",explanationEn:"Invalid. Fatal fulminant embolism requires direct cannulation into deep venous vasculature."}]}],correctManner:"homicide",correctCauseKo:"무면허 산업용 액상 실리콘 정맥내 주입에 의한 급성 대량 폐색전증 및 호흡부전(타살)",correctCauseEn:"Massive pulmonary silicone embolism via illicit intravenous filler injection"},{id:"case_10",number:10,titleKo:"사건 10: 야생 독버섯 아마톡신 지연 독살",titleEn:"Case 10: The Delayed Amatoxin Poisoning",subtitleKo:"알파-아마니틴(Alpha-Amanitin) 간세포 괴사와 48시간 잠복기",subtitleEn:"Alpha-amanitin hepatic centrilobular necrosis with 48h latency",isProOnly:!0,briefingKo:"고급 한정식 식사 이틀 후 심각한 간부전으로 사망한 자산가의 사체 부검 결과, 독우산광대버섯 추출물인 알파-아마니틴이 검출되었습니다. 식중독으로 위장되었으나 섭취 후 48시간 동안 증상이 발현되지 않는 아마톡신의 지연 작용 특성을 노린 계획 독살이었습니다.",briefingEn:"A wealthy patriarch died of acute liver necrosis 48 hours after a family meal. Suspected as common food poisoning, toxicology uncovered synthetic alpha-amanitin peptide.",ambientTempC:20,sceneDescriptionKo:"식당 잔반 및 식기. 조리실 약초 보관함.",sceneDescriptionEn:"Restaurant dishware and private pantry herbs.",evidenceItems:[{id:"ev_10_extract_vial",nameKo:"상속인 차량 트렁크 내 무표식 점적병",nameEn:"Unlabeled Dropper Vial in Heir Vehicle",descriptionKo:"알파-아마니틴 고농축 농축액이 담긴 갈색 차광 바이알.",descriptionEn:"Amber dropper bottle containing concentrated alpha-amanitin extract.",x:45,y:70,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"LC-MS/MS 정밀 분석으로 피해자 간 조직 시료와 성분 일치.",notesEn:"LC-MS/MS confirms identity with victim hepatic tissue.",labCategory:"gcms"}],victim:{name:"문성택 (Moon Seong-taek)",age:67,sex:"M",weightKg:73,clothingFactor:1.15,coreLiverTempC:34,vitreousPotassiumMmolL:6.5,lividitySite:"posterior",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"전신 황달 소견. 간 중심소엽성 괴사 및 지방변성(Nutmeg liver).",descriptionEn:"Severe generalized jaundice. Massive centrilobular hepatic necrosis."},primaryTraumaDescriptionKo:"간세포 광범위 대상 괴사(Centrilobular necrosis), 황달 및 복강 내 담즙성 복수 저류",primaryTraumaDescriptionEn:"Extensive centrilobular hepatic necrosis, deep scleral icterus, and retroperitoneal hemorrhages from amatoxin ingestion",lividityInterpretationKo:"심한 황달(Icterus) 바탕 위에 형성된 암자갈색 시반",lividityInterpretationEn:"Dark purplish-brown lividity superimposed on generalized severe jaundiced tissues.",toxicologyFound:"Alpha-Amanitin (LC-MS/MS Positive)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"소변 및 간 균질액 LC-MS/MS 분석 결과 8-아미노산 고리형 펩타이드 알파-아마니틴 검출.",interpretationEn:"LC-MS/MS detected bicyclic octapeptide alpha-amanitin in hepatic tissue."},strDna:[],gcms:[]},inquest:[{id:"q_case10_amatoxin",counselArgumentKo:'변호인: "피해자가 평소 즐겨 드시던 야생 버섯을 채취해 섭취하다 발생한 단순 오인 중독 사고입니다!"',counselArgumentEn:'Defense Counsel: "The victim merely mistook wild poisonous mushrooms for edible ones!"',options:[{textKo:"단일 정제된 알파-아마니틴 농축액과 상속인 소지 점적병 성분 일치 제시",textEn:"Present the purified alpha-amanitin concentration matching suspect dropper vial",isCorrect:!0,requiredEvidenceId:"ev_10_extract_vial",explanationKo:"정확합니다. 자연산 버섯 섭취 시 함께 검출되어야 할 파로이딘(Phalloidin) 등 기타 버섯 독소 성분은 없고 오직 고도로 정제된 알파-아마니틴 단일 분자만 검출되었으며, 상속인의 차광 점적병 잔류물과 완벽히 일치하여 고의적 독살임을 입증합니다.",explanationEn:"Correct. Ingestion of raw mushrooms introduces multiple toxins like phalloidin. Detection of isolated pure alpha-amanitin matching the suspect vial confirms intentional murder."},{textKo:"섭취 30분 만에 즉시 사망에 이르렀으므로 급성 아나필락시스 쇼크사라고 주장",textEn:"Argue that immediate death within 30 minutes was acute anaphylaxis",isCorrect:!1,requiredEvidenceId:"ev_10_mushroom_soup",explanationKo:"오류: 아마톡신은 RNA 중합효소 II 억제제로 6~24시간의 무증상 잠복기와 수일간의 간세포 괴사를 거칩니다.",explanationEn:"Invalid. Amatoxin inhibits RNA polymerase II, requiring a mandatory 6-24 hour latency."},{textKo:"찌개 냄비 속 끓인 독버섯은 열에 의해 독성이 100% 분해된다고 인정",textEn:"Concede that boiling mushroom stew degrades 100% of the toxin",isCorrect:!1,requiredEvidenceId:"ev_10_mushroom_soup",explanationKo:"오류: 아마톡신은 고온 조리에도 파괴되지 않는 극도로 안정한 옥타펩타이드 고리형 독소입니다.",explanationEn:"Invalid. Amatoxins are cyclic octapeptides impervious to ordinary boiling temperatures."},{textKo:"섭취 30분 만에 즉시 사망에 이르렀으므로 급성 아나필락시스 쇼크사라고 주장",textEn:"Argue that immediate death within 30 minutes was acute anaphylaxis",isCorrect:!1,requiredEvidenceId:"ev_10_mushroom_soup",explanationKo:"오류: 아마톡신은 RNA 중합효소 II 억제제로 6~24시간의 무증상 잠복기와 수일간의 간세포 괴사를 거칩니다.",explanationEn:"Invalid. Amatoxin inhibits RNA polymerase II, requiring a mandatory 6-24 hour latency."},{textKo:"찌개 냄비 속 끓인 독버섯은 열에 의해 독성이 100% 분해된다고 인정",textEn:"Concede that boiling mushroom stew degrades 100% of the toxin",isCorrect:!1,requiredEvidenceId:"ev_10_mushroom_soup",explanationKo:"오류: 아마톡신은 고온 조리에도 파괴되지 않는 극도로 안정한 옥타펩타이드 고리형 독소입니다.",explanationEn:"Invalid. Amatoxins are cyclic octapeptides impervious to ordinary boiling temperatures."}]}],correctManner:"homicide",correctCauseKo:"음식물에 투여된 정제 아마톡신(알파-아마니틴)에 의한 급성 간부전 및 다발성 장기부전(타살)",correctCauseEn:"Acute fulminant hepatic necrosis via intentional alpha-amanitin poisoning"},{id:"case_11",number:11,titleKo:"사건 11: 공사장 타워크레인 압괴 외상성 질식",titleEn:"Case 11: The Tower Crane Crush Asphyxia",subtitleKo:"페르테스 징후(Perthes Sign)와 횡문근융해증 미오글로빈뇨",subtitleEn:"Perthes sign traumatic asphyxia and crush syndrome myoglobinuria",isProOnly:!0,briefingKo:"건설 현장에서 철골 빔에 깔린 채 발견된 하청업체 노동자의 사체. 시공사는 단순 자재 낙하 안전사고라고 주장했으나, 크레인 와이어가 피로 파괴가 아닌 산소절단기로 예열 절단된 흔적과 피해자 흉곽의 외상성 질식사 소견이 드러났습니다.",briefingEn:"A construction worker found crushed beneath an H-beam. The contractor claimed equipment failure, but torch-cutting marks on the crane cable pointed to deliberate sabotage.",ambientTempC:17,sceneDescriptionKo:"공사장 철골 더미. 크레인 와이어 절단 단면. 바닥 혈흔.",sceneDescriptionEn:"Steel staging area. Severed crane hoist cable with thermal oxidation.",evidenceItems:[{id:"ev_11_wire_rope",nameKo:"절단된 타워크레인 메인 권상 와이어로프",nameEn:"Severed Tower Crane Hoist Wire Rope",descriptionKo:"인장 파단이 아닌 산소 토치 가열 용융 비드(Slag)가 부착된 와이어.",descriptionEn:"Wire strands bear thermal cutting slag rather than tensile necking.",x:52,y:35,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"비교현미경 검사로 고의 절단 확인.",notesEn:"Microscopy confirms thermal torch sabotage.",labCategory:"ballistics"}],victim:{name:"고상우 (Ko Sang-woo)",age:44,sex:"M",weightKg:75,clothingFactor:1.25,coreLiverTempC:32.5,vitreousPotassiumMmolL:7.1,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"두경부 및 상흉부의 극심한 암적색 청색증과 결막하 점상출혈(Perthes sign).",descriptionEn:"Deep cervicofacial cyanosis and subconjunctival petechiae (Perthes sign)."},primaryTraumaDescriptionKo:"흉복부 광범위 압착성 외상성 질식(Perthes sign), 상반신 자색 울혈 및 골격근 압궤 마이오글로빈뇨",primaryTraumaDescriptionEn:"Thoraco-abdominal traumatic asphyxia (Perthes sign) with upper torso violent cyanotic engorgement and crush myoglobinuria",lividityInterpretationKo:"상체 압박 울혈(Traumatic mask)과 겹친 암흑자색 시반",lividityInterpretationEn:"Profound dark-purple hypostasis confluent with head and neck traumatic mask congestion.",toxicologyFound:"Myoglobinuria (CK > 150,000 U/L)"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"소변 벤지딘 시험 양성 및 신세뇨관 미오글로빈 원주(Myoglobin casts) 검출로 압박증후군 확인.",interpretationEn:"Urinary benzidine reaction and renal tubular myoglobin casts confirm crush syndrome."},strDna:[],gcms:[]},inquest:[{id:"q_case11_crush",counselArgumentKo:'변호인: "크레인 와이어가 장력 한계를 초과하여 끊어진 불가항력적인 기계적 결함 사고입니다!"',counselArgumentEn:'Defense Counsel: "The hoist cable suffered unavoidable sudden tensile failure!"',options:[{textKo:"와이어로프 단면의 산소절단 토치 가열 용융 슬래그(Slag) 분석 제시",textEn:"Present the thermal torch cutting slag and cut strands on the wire rope",isCorrect:!0,requiredEvidenceId:"ev_11_wire_rope",explanationKo:"정확합니다. 와이어로프 소선들이 과부하로 끊어졌다면 컵앤콘(Cup-and-cone) 연성 인장 파단면이 나타나야 합니다. 그러나 단면에 고온 가스 토치로 지져낸 금속 산화 비드가 형성되어 있어 고의로 와이어를 훼손해 추락시킨 살인입니다.",explanationEn:"Correct. Tensile overload creates necking and cup-and-cone fractures. Thermal oxidation beads confirm deliberate torch severance."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"고의 절단된 철골 낙하 압괴에 의한 외상성 질식사 및 흉곽 압박사(타살)",correctCauseEn:"Traumatic mechanical asphyxia resulting from intentional crane cable sabotage"},{id:"case_12",number:12,titleKo:"사건 12: 비행기 기내 급성 저산소증 사건",titleEn:"Case 12: The Cabin Hypoxia Sabotage",subtitleKo:"조종석 산소 실린더 질소 치환과 해마 좀머 섹터 허혈",subtitleEn:"Cockpit oxygen cylinder nitrogen replacement and hippocampal Sommer sector ischemia",isProOnly:!0,briefingKo:"고고도 비행 중 조종사가 의식을 잃어 자동비행으로 착륙한 개인용 제트기. 비상 산소마스크를 착용했음에도 조종사가 사망한 원인을 조사한 결과, 산소통 레귤레이터 실린더에 산소 대신 고순도 질소 가스가 충전되어 있었습니다.",briefingEn:"A pilot collapsed and died during high-altitude cruise despite donning an emergency oxygen mask. Gas chromatography of the oxygen supply revealed pure nitrogen gas cylinder substitution.",ambientTempC:18,sceneDescriptionKo:"조종석 계기판 및 산소 공급 패널. 조종사 좌석 산소마스크 유착.",sceneDescriptionEn:"Cockpit instrument console and deployed emergency crew mask.",evidenceItems:[{id:"ev_12_gas_cylinder",nameKo:"조종석 비상 산소 공급 실린더",nameEn:"Cockpit Emergency Oxygen Cylinder",descriptionKo:"산소 라벨이 부착되어 있으나 내부 충전 가스가 99.8% 순수 질소로 확인된 실린더.",descriptionEn:"Cylinder marked Oxygen but filled with 99.8% pure nitrogen gas.",x:70,y:60,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"정비 기록 및 격납고 정비공 렌치 마찰흔 대조.",notesEn:"Regulator wrench marks match mechanic toolset.",labCategory:"ballistics"}],victim:{name:"데이비드 리 (David Lee)",age:51,sex:"M",weightKg:83,clothingFactor:1.1,coreLiverTempC:35,vitreousPotassiumMmolL:6.05,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 뇌 해마 CA1 좀머 섹터(Sommer sector) 추체세포의 급성 호산성 허혈성 신경세포 괴사.",descriptionEn:"No external trauma. Eosinophilic neuronal necrosis in hippocampal CA1 Sommer sector."},primaryTraumaDescriptionKo:"외표상 기계적 외상 부재, 뇌 해마 좀머 섹터(Sommer sector) 급성 무산소성 허혈성 신경세포 탈락",primaryTraumaDescriptionEn:"Absence of external mechanical injury; severe acute ischemic neuronal necrosis in hippocampal Sommer sector",lividityInterpretationKo:"침대 위 앙와위 배부 및 후두부 암청자색 시반",lividityInterpretationEn:"Deep cyanotic blue-purple hypostasis across posterior back and occiput from pure anoxic hypoxia.",toxicologyFound:"Pure Nitrogen Gas Hypoxia"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"음성",interpretationEn:"Negative"},strDna:[],gcms:[{compoundName:"Nitrogen Gas (N2 Purity)",retentionTimeMin:.95,areaPercent:99.8,mzPeaks:[{mz:28,intensity:100}],nistStandardPeaks:[{mz:28,intensity:100}],clinicalSignificanceKo:"실린더 충전 가스 99.8% N2. 저산소 증상 자각 없이 15초 내 의식 상실 및 뇌사 유발.",clinicalSignificanceEn:"99.8% Nitrogen gas. Induces rapid loss of consciousness within 15 seconds without air hunger."}]},inquest:[{id:"q_case12_hypoxia",counselArgumentKo:'변호인: "피해자는 고고도 비행 중 발생한 급성 심근경색으로 조종석에서 사망한 질병사입니다!"',counselArgumentEn:'Defense Counsel: "The pilot suffered sudden natural cardiac arrest at high altitude!"',options:[{textKo:"비상 마스크 실린더 내 99.8% 질소 가스 충전 분석 결과 제시",textEn:"Present the GC-MS analysis proving the mask cylinder contained 99.8% pure nitrogen gas",isCorrect:!0,requiredEvidenceId:"ev_12_gas_cylinder",explanationKo:"정확합니다. 산소마스크 실린더에 산소 대신 고순도 질소 가스가 채워져 있어 마스크를 착용하는 순간 급성 무산소증(Anoxia)에 빠져 뇌사에 이르게 만든 치밀한 항공기 사보타주 타살입니다.",explanationEn:"Correct. Replacing oxygen with pure nitrogen causes instant anoxic unconsciousness upon donning the mask. Intentional aviation sabotage homicide."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"조종석 비상 산소통 질소 치환에 의한 급성 무산소성 저산소 뇌손상(타살)",correctCauseEn:"Acute cerebral anoxia via intentional nitrogen gas substitution of emergency oxygen"},{id:"case_13",number:13,titleKo:"사건 13: 해변 백골 사체와 법의인류학",titleEn:"Case 13: The Coastal Skeletal Remains",subtitleKo:"골반 치골결합면 연령 추정과 정형외과 임플란트 시리얼 넘버",subtitleEn:"Pelvic Suchey-Brooks age estimation and orthopedic implant serial matching",isProOnly:!0,briefingKo:"인적 없는 해안가 바위틈 모래 밑에서 백골화된 유골이 발견되었습니다. 연조직이 전무하여 신원 확인이 불가능해 보였으나, 골반 치골결합면(Suchey-Brooks법)과 요골에 박힌 티타늄 임플란트의 고유 각인 번호를 추적하여 실종된 재력가를 특정했습니다.",briefingEn:"Defleshed skeletal remains unearthed on a sandy beach cove. Forensic anthropology established female sex and age 35-39 via Suchey-Brooks pelvic analysis, while a radial orthopedic plate serial number identified the victim.",ambientTempC:15,sceneDescriptionKo:"파도에 씻긴 모래사장. 두개골과 골반, 장골 수습.",sceneDescriptionEn:"Sandy tide line. Complete skull, pelvis, and long bones recovered.",evidenceItems:[{id:"ev_13_titanium_plate",nameKo:"좌측 요골 고정용 티타늄 임플란트 플레이트",nameEn:"Left Radius Titanium Orthopedic Plate",descriptionKo:"현미경 관찰 시 제조사 로고 및 고유 시리얼 넘버 (SN: KOR-2021-99812) 각인 확인.",descriptionEn:"Microscopic laser serial engraving (SN: KOR-2021-99812) identifies patient record.",x:45,y:70,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"정형외과 수술 의무기록과 100% 일치.",notesEn:"Matched to patient surgery database.",labCategory:"ballistics"}],victim:{name:"임채원 (Lim Chae-won)",age:37,sex:"F",weightKg:55,clothingFactor:1,coreLiverTempC:15,vitreousPotassiumMmolL:12,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"우측 두정골 4cm 크기의 함몰 골절선(생전 타격에 의한 방사상 골절).",descriptionEn:"Right parietal 4cm depressed skull fracture with perimortem radiating beveling."},primaryTraumaDescriptionKo:"연조직 완전 소실 백골화 유골, 우측 요골 티타늄 정형외과 플레이트 고정흔 및 치골 결합면 4기",primaryTraumaDescriptionEn:"Complete skeletal remains; titanium orthopedic fixation plate on right radius and Suchey-Brooks Phase IV pubic symphysis",lividityInterpretationKo:"백골화로 연조직 시반 소실 (뼈 표면 조류 및 조개 침착흔)",lividityInterpretationEn:"Soft tissues decomposed; skeletal bleaching and tidal algae staining on cortical bone.",toxicologyFound:"Bone Marrow Negative"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"백골화",interpretationEn:"Skeletonized"},strDna:[{locus:"D21S11",victimAlleles:[28,30],suspectAlleles:[29,31],evidenceAlleles:[28,30],evidenceRfu:[890,920],interpretationKo:"골분 추출 DNA와 실종자 가족 DNA 대조 일치.",interpretationEn:"Bone marrow DNA matches missing person reference."}],gcms:[]},inquest:[{id:"q_case13_skeletal",counselArgumentKo:'변호인: "신원을 입증할 수 없는 무연고 유골이며 사망 원인 또한 알 수 없습니다!"',counselArgumentEn:'Defense Counsel: "The skeleton is unidentifiable and the cause of death is purely speculative!"',options:[{textKo:"티타늄 임플란트 시리얼 넘버 및 두정골 생전 함몰 골절 제시",textEn:"Present the surgical implant serial number and perimortem depressed skull fracture",isCorrect:!0,requiredEvidenceId:"ev_13_titanium_plate",explanationKo:"정확합니다. 요골 플레이트의 고유 시리얼 넘버로 신원이 완벽히 특정되었으며, 두개골 두정부에 남은 안쪽 경사(Beveling)를 동반한 생전 함몰 골절은 둔기 타격에 의한 명백한 타살임을 증명합니다.",explanationEn:"Correct. The unique laser-etched implant serial number proves identity, while internal cranial beveling demonstrates lethal blunt force trauma."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"둔기 타격에 의한 두개골 골절 및 뇌손상 후 암매장 유골화(타살)",correctCauseEn:"Blunt force cranial trauma followed by clandestine burial and skeletonization"},{id:"case_14",number:14,titleKo:"사건 14: 암살용 방사성 폴로늄 중독 사건",titleEn:"Case 14: The Polonium-210 Alpha Decay",subtitleKo:"알파선 방출 핵종 폴로늄-210과 골수 무형성증",subtitleEn:"Polonium-210 alpha emitter ingestion and acute bone marrow aplasia",isProOnly:!0,briefingKo:"원인 불명의 급성 골수 부전 및 탈모, 전신 장기 부전으로 입원 3주 만에 사망한 해외 망명 인사의 변사체. 일반 방사선 감시기(감마선)에는 반응이 없었으나, 알파선 분광 분석 결과 찻잔과 소변에서 고농도의 폴로늄-210($^{210}\\text{Po}$)이 검출되었습니다.",briefingEn:"An exiled foreign dissident died after rapid bone marrow suppression, internal bleeding, and hair loss. Gamma detectors showed zero activity, but alpha spectrometry uncovered lethal Polonium-210 in his teacup.",ambientTempC:21,sceneDescriptionKo:"호텔 로비 라운지 티 테이블. 은제 찻주전자와 도자기 찻잔.",sceneDescriptionEn:"Hotel lounge tea set. Bone china cups and silver teapot.",evidenceItems:[{id:"ev_14_teacup",nameKo:"피해자가 마신 도자기 홍차 잔",nameEn:"Porcelain Teacup Surface Wipe",descriptionKo:"알파 입자 표면 오염 검출용 징크 설파이드(ZnS) 신틸레이션 프로브 반응 양성.",descriptionEn:"Surface wipe shows 5.3 MeV alpha particle scintillation activity.",x:50,y:65,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"알파 분광기 분석으로 5.3 MeV 폴로늄 피크 확증.",notesEn:"Alpha spectrometry confirms 5.3 MeV 210Po peak.",labCategory:"gcms"}],victim:{name:"알렉산더 K (Alexander K)",age:48,sex:"M",weightKg:66,clothingFactor:1.1,coreLiverTempC:36,vitreousPotassiumMmolL:6.3,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"전신 탈모 및 소화관 광범위 점막 박리. 골수 생검 결과 조혈모세포 완전 고갈(골수 무형성증).",descriptionEn:"Total alopecia and denuded intestinal mucosa. Bone marrow shows complete aplasia."},primaryTraumaDescriptionKo:"전신 탈모 및 구강 점막 궤양 출혈, 흉골/골반 골수 생검상 조혈모세포 완전 고갈(골수 무형성)",primaryTraumaDescriptionEn:"Generalized epilation, severe mucosal ulceration, and complete bone marrow aplasia from Po-210 alpha radiation",lividityInterpretationKo:"광범위한 자반성 피하 출혈과 융합된 암자색 시반",lividityInterpretationEn:"Purplish hypostasis heavily confluent with widespread thrombocytopenic purpura.",toxicologyFound:"Polonium-210 (Alpha Emitter)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"음성",interpretationEn:"Negative"},strDna:[],gcms:[{compoundName:"Polonium-210 Alpha Decay Activity",retentionTimeMin:0,areaPercent:100,mzPeaks:[{mz:210,intensity:100}],nistStandardPeaks:[{mz:210,intensity:100}],clinicalSignificanceKo:"5.3 MeV 알파 입자 체내 피폭. 수 마이크로그램 미만으로 전신 세포 DNA 이중나선 절단 유발.",clinicalSignificanceEn:"5.3 MeV alpha emitter. Causes catastrophic double-strand DNA breaks throughout gastrointestinal and hematopoietic cells."}]},inquest:[{id:"q_case14_polonium",counselArgumentKo:'변호인: "피해자는 평소 앓고 있던 급성 골수성 백혈병으로 사망한 자연 병사입니다!"',counselArgumentEn:'Defense Counsel: "The patient died of acute leukemia, a known pre-existing illness!"',options:[{textKo:"찻잔 및 소변 검체에서 검출된 폴로늄-210 5.3 MeV 알파 분광 데이터 제시",textEn:"Present the 5.3 MeV alpha spectrometry confirmation of ingested Polonium-210",isCorrect:!0,requiredEvidenceId:"ev_14_teacup",explanationKo:"정확합니다. 백혈병에서는 체내 방사성 핵종이 방출되지 않습니다. 소변과 찻잔에서 수백만 베크렐(Bq)의 폴로늄-210 알파 입자가 측정된 것은 방사성 핵종을 차에 타서 음독시킨 극악무도한 표적 암살입니다.",explanationEn:"Correct. Leukemia does not deposit radioactive alpha-emitting isotopes. Millions of Becquerels of Polonium-210 confirm intentional radiological assassination."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"경구 투여된 방사성 폴로늄-210 내부 피폭에 의한 급성 방사선 증후군 및 다발성 장기부전(타살)",correctCauseEn:"Acute radiation syndrome via internal Polonium-210 alpha emitter ingestion"},{id:"case_15",number:15,titleKo:"사건 15: 밀폐 창고 일산화탄소 질식사",titleEn:"Case 15: The Warehouse Boiler CO Poisoning",subtitleKo:"혈중 %HbCO 68%와 뇌 담창구 대칭성 괴사",subtitleEn:"Blood carboxyhemoglobin (%HbCO 68%) and bilateral globus pallidus necrosis",isProOnly:!0,briefingKo:"물류창고 관리실에서 야간 당직자 2명이 침대에 누운 채 사망했습니다. 석유 보일러 배기구 파손에 의한 단순 일산화탄소 중독 사고로 보였으나, 배기 닥트 파이프가 펜치로 고의 압착되어 실내로 가스가 역류하도록 조작된 흔적이 드러났습니다.",briefingEn:"Two night watchmen found dead in a warehouse bunkroom. A faulty boiler was blamed, but the exhaust flue was intentionally crimped with locking pliers to force carbon monoxide into the bedroom.",ambientTempC:16,sceneDescriptionKo:"밀폐된 관리실 숙직방. 벽걸이 보일러 연통 압착 흔적.",sceneDescriptionEn:"Sealed bunkroom. Exhaust pipe crimped shut with mechanical toolmarks.",evidenceItems:[{id:"ev_15_exhaust_pipe",nameKo:"압착 절단된 연통 금속 파이프",nameEn:"Mechanically Crimped Boiler Exhaust Duct",descriptionKo:"바이스 플라이어로 찌그러뜨려 배기를 차단한 금속 압착 선조흔.",descriptionEn:"Pliers jaw serration impressions stamped into the aluminum duct.",x:80,y:30,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"창고장 공구함 바이스 그립과 이빨 자국 일치.",notesEn:"Jaws match warehouse manager vice-grip tool.",labCategory:"ballistics"}],victim:{name:"신동진 (Shin Dong-jin)",age:39,sex:"M",weightKg:72,clothingFactor:1.2,coreLiverTempC:30.5,vitreousPotassiumMmolL:8.4,lividitySite:"posterior",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"전신 시반이 생생한 선홍색(Cherry pink). 대뇌 담창구(Globus pallidus)의 대칭성 괴진.",descriptionEn:"Bright cherry-pink lividity. Symmetrical necrosis of the globus pallidus."},primaryTraumaDescriptionKo:"혈중 일산화탄소혈색소 %HbCO 68.4% 선홍색 시반, 뇌 기저핵 담창구(Globus pallidus) 양측 괴사",primaryTraumaDescriptionEn:"68.4% %HbCO cherry-red lividity and bilateral symmetrical necrosis of the globus pallidus",lividityInterpretationKo:"일산화탄소혈색소(%HbCO) 고농도 축적으로 인한 전신 선명한 선홍색(Cherry-red) 시반",lividityInterpretationEn:"Vibrant cherry-red livor mortis diagnostic of lethal carboxyhemoglobin saturation.",toxicologyFound:"%HbCO 68.4%"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"분광광도계 검사 결과 일산화탄소혈색소(%HbCO) 68.4% (치사 역치 50% 초과).",interpretationEn:"UV-Vis spectrophotometry confirms 68.4% carboxyhemoglobin saturation."},strDna:[],gcms:[]},inquest:[{id:"q_case15_co",counselArgumentKo:'변호인: "노후화된 보일러 배관이 자연 부식되어 가스가 누출된 단순 시설 사고입니다!"',counselArgumentEn:'Defense Counsel: "The aged exhaust pipe suffered natural corrosion failure!"',options:[{textKo:"배기 닥트의 인위적 플라이어 압착 훼손 흔적 제시",textEn:"Present the toolmark striations proving the exhaust duct was intentionally crushed shut",isCorrect:!0,requiredEvidenceId:"ev_15_exhaust_pipe",explanationKo:"정확합니다. 배기관이 부식으로 구멍 난 것이 아니라, 바이스 플라이어로 연통 끝을 완전히 틀어막아 배기가스가 방 안으로 역류하도록 만든 인위적 훼손임이 공구흔(Toolmarks) 비교로 입증되었습니다.",explanationEn:"Correct. The duct did not corrode; it was mechanically crushed shut with vice-grips, deliberately routing toxic combustion gases back into the bunkroom."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"보일러 배기 닥트 고의 압착 차단에 의한 일산화탄소 급성 중독사(타살)",correctCauseEn:"Acute carbon monoxide poisoning via intentional sabotage of heating exhaust flue"},{id:"case_16",number:16,titleKo:"사건 16: 인슐린 과다 투여 저혈당 살인",titleEn:"Case 16: The Hypoglycemic Insulin Homicide",subtitleKo:"인슐린/C-펩타이드(C-peptide) 불일치와 발가락 주사흔",subtitleEn:"High insulin with suppressed C-peptide ratio and hidden toe injection marks",isProOnly:!0,briefingKo:"요양병원에서 당뇨 병력이 없는 고령의 환자가 취침 중 저혈당 쇼크로 급사했습니다. 자연사로 처리될 뻔하였으나, 피해자의 발가락 사이(Interdigital web)에서 미세한 주사 바늘 자국이 발견되었고, 혈중 인슐린 수치가 천문학적으로 치솟은 반면 체내 췌장에서 함께 분비되는 C-펩타이드는 거의 검출되지 않았습니다.",briefingEn:"A non-diabetic elderly patient died of profound hypoglycemia overnight. Inspection between the toes exposed a needle puncture. Lab tests showed massive serum insulin but zero C-peptide.",ambientTempC:22,sceneDescriptionKo:"요양병원 1인실 병상. 침대 협탁 약품 보관함.",sceneDescriptionEn:"Private nursing home room. Bedside medical tray.",evidenceItems:[{id:"ev_16_insulin_pen",nameKo:"간호사실 쓰레기통 내 단기작용 인슐린 펜",nameEn:"Rapid-Acting Insulin Pen in Nurse Station Trash",descriptionKo:"피해자 병실 배정 간호사의 DNA가 묻은 300단위 초속효성 인슐린 펜.",descriptionEn:"Insulin glulisine pen loaded with touch DNA of attending caregiver.",x:65,y:70,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"인슐린 잔여량 및 지문 확인.",notesEn:"Touch DNA matches nurse who owed money to victim.",labCategory:"serology"}],victim:{name:"장옥순 (Jang Ok-soon)",age:79,sex:"F",weightKg:48,clothingFactor:1.2,coreLiverTempC:34.8,vitreousPotassiumMmolL:6.2,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"우측 제1-2 족지 간부(발가락 사이) 30G 미세 주사침 자국 및 피하 미세 혈종.",descriptionEn:"30G needle puncture mark with microscopic subcutaneous hematoma between toes."},primaryTraumaDescriptionKo:"좌측 1-2번 발가락 사이 은폐 피하 주사 자창(미세 출혈), 급성 저혈당성 뇌부종",primaryTraumaDescriptionEn:"Concealed puncture mark in left first interdigital web space with acute hypoglycemic cerebral edema",lividityInterpretationKo:"병원 침상 앙와위 배부 고정성 시반",lividityInterpretationEn:"Fixed posterior lividity conforming to nursing home hospital mattress.",toxicologyFound:"Insulin > 1,500 pmol/L (C-peptide < 0.05 nmol/L)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"혈청 방사면역측정 결과: 인슐린 1,840 pmol/L (극초과) vs C-펩타이드 < 0.05 nmol/L (억제). 외인성 인슐린 주입 확증.",interpretationEn:"Immunoassay: Insulin 1,840 pmol/L with undetectable C-peptide proves exogenous synthetic insulin injection."},strDna:[],gcms:[]},inquest:[{id:"q_case16_insulin",counselArgumentKo:'변호인: "피해자의 췌장에 생긴 미발견 인슐린종(Insulinoma) 종양에 의한 내인성 저혈당 발작입니다!"',counselArgumentEn:'Defense Counsel: "The patient suffered endogenous hypoglycemia caused by an undiscovered insulinoma tumor!"',options:[{textKo:"인슐린/C-펩타이드 비율 불일치(C-peptide 저하) 및 발가락 주사흔 제시",textEn:"Present the high insulin with suppressed C-peptide and the hidden interdigital needle mark",isCorrect:!0,requiredEvidenceId:"probeWound",explanationKo:"정확합니다. 췌장의 인슐린종 종양이라면 체내 인슐린 전구체인 프로인슐린이 쪼개지며 인슐린과 C-펩타이드가 1:1 몰 비율로 동일하게 상승해야 합니다. C-펩타이드가 억제된 채 인슐린만 폭증한 것은 외부에서 합성 인슐린을 고의 주사했음을 증명하는 의학적 반박 불가 증거입니다.",explanationEn:"Correct. Insulinoma produces equimolar amounts of insulin and C-peptide. Suppressed C-peptide with astronomical insulin conclusively proves exogenous injection."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"발가락 사이 고의적인 외인성 인슐린 과다 주입에 의한 불가역적 저혈당성 뇌손상(타살)",correctCauseEn:"Irreversible hypoglycemic encephalopathy via homicidal exogenous insulin injection"},{id:"case_17",number:17,titleKo:"사건 17: 뱀독 신경독소 테러 사건",titleEn:"Case 17: The Elapid Neurotoxin Bite",subtitleKo:"알파-번가로톡신(Alpha-Bungarotoxin)과 3.8mm 독니 교상 위장",subtitleEn:"Alpha-bungarotoxin neurotoxicity and staged 3.8mm fang punctures",isProOnly:!0,briefingKo:"파충류 사육장 안에서 사망한 브리더의 발목에 맹독사 독니 자국(Fang marks)이 관찰되었습니다. 사육 중이던 뱀에 물린 사고사로 추정되었으나, 상처 주위에 부종과 출혈이 전혀 없는 신경독소 특성과 함께, 실제로는 사육장 뱀의 이빨 간격과 일치하지 않는 주사바늘 자국임이 계측되었습니다.",briefingEn:"A reptile breeder was found dead with paired fang puncture marks on his ankle. While staged as an accidental bite, venom ELISA proved alpha-bungarotoxin from a species the breeder never owned.",ambientTempC:25,sceneDescriptionKo:"파충류 사육장 테라리움. 바닥에 깨진 유리 수조.",sceneDescriptionEn:"Reptile vivarium room with broken display terrarium.",evidenceItems:[{id:"ev_17_twin_needle",nameKo:"쓰레기통 속 개조된 쌍두 주사침 도구",nameEn:"Custom Twin-Needle Injection Fixture",descriptionKo:"뱀독니 간격(3.8mm)으로 정밀 용접된 2개의 마이크로 니들이 장착된 주사기.",descriptionEn:"Dual micro-needles spaced exactly 3.8mm apart to mimic snake fangs.",x:48,y:72,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"피해자 발목 교상 상처와 간격 및 각도 100% 일치.",notesEn:"Puncture geometry perfectly matches ankle wound.",labCategory:"ballistics"}],victim:{name:"문도진 (Moon Do-jin)",age:34,sex:"M",weightKg:70,clothingFactor:1,coreLiverTempC:35.5,vitreousPotassiumMmolL:5.95,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"좌측 족관절 외측 2개의 점상 천자창(간격 3.8mm). 국소 부종 및 조직 괴사 부재.",descriptionEn:"Paired punctate wounds (3.8mm spacing) on lateral ankle without local edema."},primaryTraumaDescriptionKo:"우측 전완부 3.8mm 정밀 간격의 듀얼 바늘 자창(신경독소 침투), 횡격막 마비성 호흡부전",primaryTraumaDescriptionEn:"Mechanical 3.8mm paired puncture marks on right forearm with diaphragmatic neurotoxic respiratory paralysis",lividityInterpretationKo:"사육실 바닥 엎드린 자세(Prone)의 전면 흉복부 암청색 시반",lividityInterpretationEn:"Anterior chest and abdominal cyanotic hypostasis from prone collapse on terrarium floor.",toxicologyFound:"Alpha-Bungarotoxin Venom"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"상처 삼출액 ELISA 면역효소분석 결과 우산뱀(Bungarus multicinctus) 시냅스후 신경독소 알파-번가로톡신 양성.",interpretationEn:"ELISA confirms post-synaptic neurotoxin alpha-bungarotoxin from krait venom."},strDna:[],gcms:[]},inquest:[{id:"q_case17_venom",counselArgumentKo:'변호인: "사육장 유리가 깨지며 탈출한 독사에 발목을 물려 발생한 불가항력적 안전사고입니다!"',counselArgumentEn:'Defense Counsel: "The victim was accidentally bitten by an escaped venomous snake!"',options:[{textKo:"개조된 쌍두 주사침 압착흔과 피해자 사육종과 다른 외래 번가로톡신 검출 제시",textEn:"Present the manufactured twin-needle device and foreign bungarotoxin venom",isCorrect:!0,requiredEvidenceId:"ev_17_twin_needle",explanationKo:"정확합니다. 피해자가 사육하던 방울뱀(살무사과)은 출혈독(Hemotoxin)으로 상처에 극심한 괴사와 부종을 일으킵니다. 부종이 전혀 없는 신경독 번가로톡신이 검출되고 3.8mm 쌍두 주사기가 발견된 것은 뱀에 물린 것처럼 위장한 계획 주사 살인입니다.",explanationEn:"Correct. The victim raised vipers (hemotoxic swelling). Pure bungarotoxin without swelling, paired with a manufactured twin-needle rig, refutes any animal accident."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"개조된 주사침을 이용한 우산뱀 신경독소(알파-번가로톡신) 고의 주입에 의한 호흡근 마비 질식사(타살)",correctCauseEn:"Respiratory muscle paralysis via homicidal alpha-bungarotoxin injection mimicking snakebite"},{id:"case_18",number:18,titleKo:"사건 18: 고속도로 연속 다중 추돌 참사",titleEn:"Case 18: The Multi-Vehicle Chain Reaction",subtitleKo:"두개저 환상골절(Ring Fracture)과 브레이크 페달 신발 문양 압착",subtitleEn:"Basilar skull ring fracture and brake pedal sole pattern correlation",isProOnly:!0,briefingKo:"고속도로 8중 연쇄 추돌 사고로 트럭 밑에 끼인 승용차 운전자의 부검. 가해 트럭 운전사는 앞차가 브레이크를 밟지 않고 갑자기 멈췄다고 주장했으나, 피해자 신발 밑창에 각인된 브레이크 페달의 고압 마찰 문양과 두개저 환상골절 메커니즘이 진실을 증명했습니다.",briefingEn:"A driver was killed when his car was crushed beneath a semi-truck in an 8-vehicle pileup. The trucker claimed no brake lights were seen, but shoe sole pedal stamping proved intense pre-impact braking.",ambientTempC:14,sceneDescriptionKo:"고속도로 아스팔트 잔해. 찌그러진 운전석 풋웰(Footwell).",sceneDescriptionEn:"Highway collision debris. Crushed driver-side footwell.",evidenceItems:[{id:"ev_18_driver_shoe",nameKo:"피해자 우측 운동화 밑창 고무",nameEn:"Victim Right Sneaker Rubber Outsole",descriptionKo:"비상 제동 시 브레이크 페달 요철 패턴이 850N의 압력으로 열용융 각인된 밑창.",descriptionEn:"Brake pedal chevron pattern melted into rubber outsole under 850N load.",x:40,y:75,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"급제동 상태에서 후방 추돌당했음을 입증.",notesEn:"Proves emergency braking prior to rear impact.",labCategory:"ballistics"}],victim:{name:"황규현 (Hwang Gyu-hyun)",age:41,sex:"M",weightKg:76,clothingFactor:1.2,coreLiverTempC:33.2,vitreousPotassiumMmolL:6.8,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"대후두공(Foramen magnum)을 둘러싼 두개저 환상골절(Ring fracture of skull base) 및 뇌간 열창.",descriptionEn:"Ring fracture encircling foramen magnum with brainstem avulsion laceration."},primaryTraumaDescriptionKo:"두개저 환상 골절(Ring fracture), 우측 신발 밑창에 각인된 850N 브레이크 페달 격자 문양",primaryTraumaDescriptionEn:"Basilar skull ring fracture and 850N brake pedal lattice impression stamped on right shoe sole",lividityInterpretationKo:"운전석 안전벨트 착용 상태의 하지 및 골반 의존성 시반",lividityInterpretationEn:"Dependent pelvic and lower limb hypostasis bounded by seatbelt restraint band.",toxicologyFound:"Negative"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"양성",interpretationEn:"Positive"},strDna:[],gcms:[]},inquest:[{id:"q_case18_pedal",counselArgumentKo:'변호인: "피해 차량이 아무런 제동 경고 없이 서행하여 후속 트럭의 제동 거리가 부족했던 전방 차량 과실 사고입니다!"',counselArgumentEn:'Defense Counsel: "The victim decelerated without braking, giving the truck behind no warning!"',options:[{textKo:"신발 밑창에 각인된 브레이크 페달 고열 압착흔 및 풋웰 변형 해석 제시",textEn:"Present the high-pressure thermal imprint of the brake pedal onto the sneaker sole",isCorrect:!0,requiredEvidenceId:"ev_18_driver_shoe",explanationKo:"정확합니다. 신발 밑창에 브레이크 페달의 고무 요철 문양이 850N 이상의 강력한 힘으로 열전사 각인되었다는 것은, 충돌 순간 피해자가 온 힘을 다해 브레이크를 끝까지 밟고 있었음을 물리적으로 증명합니다.",explanationEn:"Correct. Thermal transfer of the pedal ridges into the shoe outsole physically proves full-force emergency braking at the instant of impact."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"accident",correctCauseKo:"후방 대형 트럭 추돌 충격에 의한 축성 과신전 및 두개저 환상골절, 뇌간 파열사(교통사고사)",correctCauseEn:"Basilar skull ring fracture and brainstem disruption via high-speed vehicular rear collision"},{id:"case_19",number:19,titleKo:"사건 19: 폐가 마룻바닥 구더기 법의곤충학",titleEn:"Case 19: The Abandoned House Entomology",subtitleKo:"검정파리 유충 령기(Instar) 계측과 누적유효온도(ADH) 사후시간",subtitleEn:"Calliphora vicina 3rd instar larva measurement and Accumulated Degree Hours (ADH) minimum PMI",isProOnly:!0,briefingKo:"외딴 폐가 다다미방 마룻바닥에서 심하게 부패된 변사체가 발견되었습니다. 사체는 부패로 인해 체온 및 시반 측정이 불가능한 상태였으나, 안구와 구강에서 채취한 검정파리 유충(구더기)의 크기와 누적온량(ADH) 계산을 통해 사후 경과시간이 정확히 14일 전임을 밝혀내 용의자의 거짓 알리바이를 무너뜨렸습니다.",briefingEn:"An advanced decomposed body found inside an abandoned house. Temperature and livor mortis were absent, but blowfly larval instar measurements and meteorological Accumulated Degree Hours established minimum PMI at 14.2 days.",ambientTempC:23.5,sceneDescriptionKo:"파리 유충이 들끓는 폐가 실내. 바닥 혈흔 침착.",sceneDescriptionEn:"Decomposing corpse infested with dipteran larvae on rotting floorboards.",evidenceItems:[{id:"ev_19_maggot_vial",nameKo:"구강 및 안와 채취 파리 유충(구더기) 보존 바이알",nameEn:"Preserved Blowfly Larval Instar Vial",descriptionKo:"열탕 치사 후 70% 에탄올에 고정된 검정파리(Calliphora vicina) 3령기 유충(길이 17.5mm).",descriptionEn:"3rd instar Calliphora vicina post-feeding crawling larvae measuring 17.5mm.",x:45,y:65,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"기상청 일평균 기온 데이터와 열량 적산(ADH) 계산.",notesEn:"Accumulated Degree Hours (ADH) calculated at 380 degree-days.",labCategory:"serology"}],victim:{name:"서병철 (Seo Byung-chul)",age:45,sex:"M",weightKg:65,clothingFactor:1.1,coreLiverTempC:23.5,vitreousPotassiumMmolL:18.5,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!0,descriptionKo:"부패 팽창 및 녹색 부패반(Greenish discoloration). 설골 골절 및 경부 삭흔 흔적.",descriptionEn:"Bloating and marbling. Hyoid fracture preserved despite autolysis."},primaryTraumaDescriptionKo:"구강 및 경부 후기 3령 검정파리 유충(Calliphora vicina) 군집, 초기 연조직 자가융해",primaryTraumaDescriptionEn:"Late third-instar Calliphora vicina maggot masses in oral cavity and neck with early soft-tissue autolysis",lividityInterpretationKo:"마루 바닥에 접촉한 우측 체간부 암자색 시반 및 곤충 식흔 부위 출혈반",lividityInterpretationEn:"Dark purple lateral hypostasis along right flank in contact with rotting floorboards.",toxicologyFound:"Putrefaction Volatiles"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"현미경 후기문(Posterior spiracles) 관찰 결과 3개의 슬릿 확인: 3령기 유충 확정. 누적온량 380 ADH로 사후 14일 경과 도출.",interpretationEn:"Posterior spiracle examination confirms 3rd instar larva; ADH thermal curve yields minimum PMI of 14.2 days."},strDna:[],gcms:[]},inquest:[{id:"q_case19_ento",counselArgumentKo:'변호인: "피해자는 불과 3일 전에도 편의점에서 목격되었으므로 피고인이 해외에 있던 2주 전에 사망했을 리 없습니다!"',counselArgumentEn:'Defense Counsel: "The victim was spotted 3 days ago, so he could not have died when my client was in town 2 weeks ago!"',options:[{textKo:"법의곤충학적 3령기 구더기 누적온량(ADH) 분석에 의한 최소 14일 사후경과시간 제시",textEn:"Present the forensic entomological ADH calculation establishing death 14 days ago",isCorrect:!0,requiredEvidenceId:"ev_19_maggot_vial",explanationKo:"정확합니다. 기온 23.5°C에서 검정파리 알이 부화하여 17.5mm의 번데기 직전 3령기 유충으로 성장하기 위해서는 최소 380 누적유효온도(ADH) 즉, 14일 이상의 생육 기간이 절대적으로 필요합니다. 편의점 목격담은 오인이며 피해자는 2주 전 피고인과 함께 있던 날 살해되었습니다.",explanationEn:"Correct. In 23.5°C ambient conditions, blowfly development to a 17.5mm 3rd instar crawling larva requires at least 380 ADH (~14 days). Refutes recent eyewitness alibis."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"끈에 의한 경부압박질식사(교사) 후 폐가 방치 부패(타살)",correctCauseEn:"Ligature strangulation followed by clandestine abandonment and insect colonization"},{id:"case_20",number:20,titleKo:"사건 20: 신종 합성 펜타닐 유사체 과다복용",titleEn:"Case 20: The Novel Fentanyl Analog Overdose",subtitleKo:"목제 흉곽 증후군(Wooden Chest)과 마이크로그램 오비트랩 LC-MS/MS",subtitleEn:"Wooden chest thoracic rigidity and Orbitrap LC-MS/MS picomolar carfentanil profiling",isProOnly:!0,briefingKo:'비밀 화학 합성 연구소 바닥에서 쓰러진 채 발견된 유기화학자. 체내에서 일반 마약 스크리닝 키트에 잡히지 않는 초강력 신종 카펜타닐 유사체(Carfentanil analog)가 검출되었습니다. 자발적 호흡이 완전히 정지하는 "목제 흉곽 증후군"이 관찰되었으며, 환기 닥트에 연결된 미세 에어로졸 분사 장치가 드러났습니다.',briefingEn:"An organic chemist was found dead in an underground clandestine lab. Standard immunoassay drug panels returned negative, but high-resolution Orbitrap mass spectrometry identified picomolar fluorofentanyl aerosol sabotage.",ambientTempC:21,sceneDescriptionKo:"화학 흄후드 실험실. 바닥에 쓰러진 방독면과 원격 제어 솔레노이드 밸브.",sceneDescriptionEn:"Chemical synthesis hood with remotely triggered aerosol dispersal valve.",evidenceItems:[{id:"ev_20_aerosol_valve",nameKo:"흄후드 급기 라인 원격 솔레노이드 에어로졸 노즐",nameEn:"Remotely Actuated Solenoid Aerosol Dispenser",descriptionKo:"마이크로그램 단위의 초강력 펜타닐 유도체를 에어로졸화하여 살포한 장치.",descriptionEn:"Micro-dispenser loaded with synthetic carfentanil aerosol solution.",x:60,y:40,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"원격 Wi-Fi 모듈 및 용의자 노트북 로그 추적.",notesEn:"Remote Wi-Fi log links trigger to rival researcher.",labCategory:"gcms"}],victim:{name:"정우택 (Jung Woo-taek)",age:38,sex:"M",weightKg:69,clothingFactor:1.1,coreLiverTempC:34.5,vitreousPotassiumMmolL:6.15,lividitySite:"dependent",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 흉벽 근육의 극심한 강직(Wooden chest syndrome) 및 폐포 출혈성 폐부종.",descriptionEn:"Thoracic wall rigidity (wooden chest syndrome) and alveolar hemorrhagic edema."},primaryTraumaDescriptionKo:"급성 오피오이드 흉벽 경직(Wooden chest syndrome), 비강 점막 백색 합성 분말 흡입 잔류흔",primaryTraumaDescriptionEn:"Opioid-induced rigid chest wall syndrome (wooden chest) with white synthetic powder residue in nasal mucosa",lividityInterpretationKo:"소파에 기댄 반좌위 둔부 및 하지 의존성 극심한 청색증성 암자색 시반",lividityInterpretationEn:"Severe cyanotic dark-purple dependent hypostasis in buttocks and legs slumped on lounge couch.",toxicologyFound:"Novel Fluorocarfentanil (0.08 ng/mL)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"음성",interpretationEn:"Negative"},strDna:[],gcms:[{compoundName:"4-Fluoroisobutyrylfentanyl",retentionTimeMin:14.25,areaPercent:99.2,mzPeaks:[{mz:355,intensity:100},{mz:242,intensity:65},{mz:188,intensity:45}],nistStandardPeaks:[{mz:355,intensity:100},{mz:242,intensity:65},{mz:188,intensity:45}],clinicalSignificanceKo:"모르핀의 10,000배 효력의 초강력 합성 아편유사체. 0.08 ng/mL 극미량으로 호흡 중추 완전 마비 유발.",clinicalSignificanceEn:"Ultra-potent synthetic opioid 10,000x stronger than morphine. Induces instant central respiratory arrest."}]},inquest:[{id:"q_case20_fentanyl",counselArgumentKo:'변호인: "피해자는 자신이 합성하던 신약 후보물질을 스스로 흡입해 시험하다 발생한 안타까운 연구실 과실 사고사입니다!"',counselArgumentEn:'Defense Counsel: "The scientist accidentally inhaled his own research compound during synthesis!"',options:[{textKo:"원격 제어 에어로졸 노즐 설치 및 환기 닥트 고의 역류 장치 제시",textEn:"Present the remote Wi-Fi solenoid aerosol valve directing venomous mist into the hood",isCorrect:!0,requiredEvidenceId:"ev_20_aerosol_valve",explanationKo:"정확합니다. 단순 실험 실수가 아니라, 연구원 외부에서 원격으로 작동하도록 프로그래밍된 에어로졸 밸브를 통해 환기 배기 방향을 조작하여 치사량의 카펜타닐 유사체를 피해자의 호흡기로 직접 살포한 첨단 화학 살인입니다.",explanationEn:"Correct. Remotely triggered solenoid valves specifically routed aerosolized picomolar carfentanil into the breathing zone, conclusively establishing premeditated murder."},{textKo:"수집된 과학적 증거와 무관하게 자연사 또는 단순 실족에 의한 우발적 사고사라고 주장",textEn:"Argue that the death was a natural event or accidental trip unrelated to forensic findings",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"원격 살포된 신종 초강력 펜타닐 유사체 흡입에 의한 급성 호흡마비 및 목제흉곽증후군(타살)",correctCauseEn:"Acute central respiratory failure and wooden chest rigidity via aerosolized carfentanil homicide"},{id:"case_21",number:21,titleKo:"사건 21: 사제 폭발물 및 폭풍 손상 재구성",titleEn:"Case 21: The Improvised Explosive Blast Trauma",subtitleKo:"1차 폭풍 폐손상(Blast Lung)과 유기과산화물(TATP) 이온이동도 분광분석",subtitleEn:"Primary blast lung contusion, petrous bone fracture, and TATP organic peroxide IMS spectrometry",isProOnly:!0,briefingKo:"도심 외곽 폐창고에서 폭발 사고가 발생하여 30대 남성이 사망했습니다. 경찰 초기 보고는 사제 폭탄을 불법 제조하던 중 과실로 자폭한 사고사로 추정했으나, 부검의는 사체에 남은 폭풍파 전파 방향과 수부 손상 부재에서 결정적인 타살 단서를 포착했습니다.",briefingEn:"An explosion in an abandoned warehouse killed a 34-year-old male. Initially presumed an accidental self-detonation during illicit bomb-making, post-mortem examination revealed blast vector anomalies and absence of contact amputations.",ambientTempC:20,sceneDescriptionKo:"폭풍으로 창문과 벽체가 붕괴된 폐창고. 폭심지 반경 3미터 지점에 쓰러진 변사체와 파편들.",sceneDescriptionEn:"Damaged warehouse with blown-out windows. Decedent located 3 meters from detonation crater.",evidenceItems:[{id:"ev_21_circuit_relay",nameKo:"휴대폰 원격 신호 수신 기판 및 릴레이 스위치 파편",nameEn:"Cellular Remote Trigger Circuit & Relay Fragment",descriptionKo:"폭탄 잔해 속에서 발견된 SIM 카드가 장착된 소손된 스마트폰 수신 모듈.",descriptionEn:"Scorched PCB board with integrated SIM card module used for remote detonation.",x:45,y:70,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"통신사 수발신 내역 및 용의자 휴대폰과의 원격 착신 신호 일치 확인.",notesEn:"Call logs link incoming detonation ping to suspect cellular phone.",labCategory:"serology"},{id:"ev_21_tatp_crystals",nameKo:"바닥에 흩어진 미폭발 백색 침상 결정 (TATP)",nameEn:"Unexploded White Needle Crystals (TATP)",descriptionKo:"폭심지 가장자리 바닥 크랙에 잔류하는 고감도 유기 과산화물 폭약 결정.",descriptionEn:"Microscopic crystalline organic peroxide residues preserved within floor fissures.",x:65,y:55,alsRequired:"uv",requiredTool:"swab",collected:!1,notesKo:"GC-MS 및 IMS 질량분석 결과 트리아세톤 트라이퍼옥사이드(TATP) 확정.",notesEn:"GC-MS and IMS confirmed Triacetone Triperoxide primary high explosive.",labCategory:"gcms"},{id:"ev_21_shrapnel_fragment",nameKo:"흉골에 박힌 3/8인치 기계용 너트 파편",nameEn:"3/8-inch Hex Nut Shrapnel Projectile",descriptionKo:"피해자 흉골 및 늑간에 깊숙이 박힌 살상용 금속 너트 파편.",descriptionEn:"Metallic hex nut recovered from thoracic cavity, displaying tool striations.",x:30,y:40,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"비교현미경으로 용의자 작업실 바이스(Vice) 및 공구 흔적 1:1 대조.",notesEn:"Comparison microscope toolmark correlation against seized workshop vise.",labCategory:"ballistics"}],victim:{name:"배동현 (Bae Dong-hyun)",age:34,sex:"M",weightKg:72,clothingFactor:1.15,coreLiverTempC:34.2,vitreousPotassiumMmolL:6.95,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"경부 외상 없음. 후배부 중심의 다발성 고속 파편창 및 양측 폐포 파열(Primary Blast Lung).",descriptionEn:"No ligature marks. High-velocity posterior shrapnel wounds and primary blast lung disruption."},primaryTraumaDescriptionKo:"후배부 및 둔부 중심의 다발성 고속 파편창(Shrapnel wounds) 및 양측 폐포 파열(Primary Blast Lung). 폭풍 손상이 전방이 아닌 후방에서 가해졌으며, 자폭자 특유의 수부 폭심 절단 흔적 일체 부재.",primaryTraumaDescriptionEn:"Multiple high-velocity shrapnel penetrating wounds concentrated on posterior torso; bilateral primary blast lung contusions. Blast wave originated from behind the victim, refuting self-detonation.",toxicologyFound:"Triacetone Triperoxide (TATP) & Hexamine Residues"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"파편창 삼출액에서 인혈 확인.",interpretationEn:"Human blood confirmed on shrapnel wound periphery."},strDna:[],gcms:[{compoundName:"Triacetone Triperoxide (TATP)",retentionTimeMin:6.4,areaPercent:98.4,mzPeaks:[{mz:222,intensity:15},{mz:74,intensity:85},{mz:59,intensity:100},{mz:43,intensity:90}],nistStandardPeaks:[{mz:222,intensity:15},{mz:74,intensity:85},{mz:59,intensity:100},{mz:43,intensity:90}],clinicalSignificanceKo:"유기 과산화물 사제 고성능 폭약(TATP). 비군용 원격 기폭 사제 폭탄에 사용됨.",clinicalSignificanceEn:"Organic peroxide primary high explosive (TATP), characteristic of improvised remote devices."}],ballistics:{caliber:"3/8 inch Hex Nut Shrapnel",recoveredBulletProfile:[.85,.78,.92,.88,.65,.5,.87,.95,.8,.86],seizedGunBulletProfile:[.84,.79,.91,.87,.67,.52,.86,.94,.81,.85],referenceProfiles:[]}},inquest:[{id:"q_case21_blast",counselArgumentKo:'변호인: "피해자가 사제 폭탄을 직접 조립하다 부주의로 폭발시킨 불의의 자폭 사고사입니다!"',counselArgumentEn:'Defense Counsel: "The decedent was assembling a bomb which accidentally exploded in his hands!"',options:[{textKo:"후방 폭풍파 손상 궤적 및 휴대폰 원격 신호 수신 기판 제시",textEn:"Present the posterior blast trauma vector and remote cellular relay circuit",isCorrect:!0,requiredEvidenceId:"ev_21_circuit_relay",explanationKo:"정확합니다. 자폭 테러나 조립 중 실화의 경우 손과 가슴 전면에 초근접 폭풍 손상 및 사지 절단이 발생합니다. 본 사체는 등 뒤에서 폭풍파가 가해졌으며, 현장에서 휴대폰 원격 수신 릴레이 기판이 발견되어 원격 기폭에 의한 계획적 타살임이 과학적으로 입증됩니다.",explanationEn:"Correct. Accidental bomb assembly produces catastrophic blast amputations of hands and anterior chest. Posterior trajectory and remote cellular triggers decisively confirm homicidal remote detonation."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"원격 기폭된 사제 폭발물(TATP) 폭풍파에 의한 양측 폐파열 및 다발성 파편창(타살)",correctCauseEn:"Bilateral primary blast lung disruption and penetrating shrapnel trauma via remotely detonated TATP device (Homicide)"},{id:"case_22",number:22,titleKo:"사건 22: 심해 포화잠수 감압병 및 동맥 기체색전증",titleEn:"Case 22: The Saturation Diving Arterial Gas Embolism",subtitleKo:"10기압 급속 감압 질소 기포 공백과 수중 심장 천자 가스 크로마토그래피",subtitleEn:"10 ATA explosive decompression, cardiac gas lock, and post-mortem sub-aquatic gas chromatography",isProOnly:!0,briefingKo:"심해 100m 해저 유전 파이프라인 수리용 잠수 챔버에서 베테랑 산업잠수사가 급사했습니다. 감압 챔버 밸브의 기계적 밀폐 결함으로 인한 산업재해 감압병으로 보고되었으나, 잠수사가 호흡한 가스 실린더 성분과 매니폴드 밸브에서 고의적 조작 선조흔이 드러났습니다.",briefingEn:"A saturation diver died inside a hyperbaric chamber simulating 100m ocean depth. Attributed to catastrophic chamber seal failure, gas chromatography of cardiac bubbles revealed pure atmospheric air rather than heliox.",ambientTempC:18,sceneDescriptionKo:"고압 포화잠수 지원선 데크. 감압 챔버 도어 및 가스 공급 매니폴드 패널.",sceneDescriptionEn:"Saturation diving support vessel hyperbaric chamber manifold console.",evidenceItems:[{id:"ev_22_gas_manifold",nameKo:"챔버 외부 가스 공급 매니폴드 분배 밸브",nameEn:"External Gas Supply Manifold Distribution Valve",descriptionKo:"비상 배기 밸브 핸들 표면에 렌치로 강제 회전시킨 신선한 마찰 스크래치흔.",descriptionEn:"Fresh tool striations on emergency exhaust valve indicating forced mechanical bypass.",x:75,y:35,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"밸브 레버에서 채취한 잠재지문이 선박 기관장(용의자)과 일치.",notesEn:"Latent fingerprint on valve matches chief engineer.",labCategory:"prints"},{id:"ev_22_scuba_cylinder",nameKo:"헬리옥스 라벨이 붙었으나 질소 공기가 든 12L 실린더",nameEn:"Mislabeled 12L Gas Cylinder (Compressed Air vs Heliox)",descriptionKo:"Heliox(He-O2) 라벨이 부착되어 있으나 내부 압축 공기(N2-O2)가 충전된 잠수 실린더.",descriptionEn:"Cylinder labeled as Heliox but filled with high-pressure atmospheric air.",x:25,y:65,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"10기압에서 질소 흡입 시 치명적 질소 마취 및 색전증 유발.",notesEn:"Breathing nitrogen at 10 ATA induces fatal narcosis and explosive bubble formation.",labCategory:"gcms"},{id:"ev_22_dive_telemetry",nameKo:"감압 챔버 압력 강하 텔레메트리 칩",nameEn:"Hyperbaric Chamber Pressure Telemetry Flash Memory",descriptionKo:"초당 3기압 이상의 살인적 감압 속도를 기록한 제어반 블랙박스 칩.",descriptionEn:"Chamber data recorder proving rapid 3 ATA/sec explosive depressurization curve.",x:50,y:45,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"자동 안전 감압 프로토콜이 수동 오버라이드되었음을 증명.",notesEn:"Telemetry confirms manual safety interlock override before decompression.",labCategory:"serology"}],victim:{name:"황진호 (Hwang Jin-ho)",age:41,sex:"M",weightKg:78,clothingFactor:1.2,coreLiverTempC:33.5,vitreousPotassiumMmolL:7.2,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 없음. 피부 대리석양 피반(Cutis marmorata) 및 우심실 질소 가스 자물쇠(Gas Lock).",descriptionEn:"No trauma. Marked cutis marmorata and massive right ventricular nitrogen gas lock."},primaryTraumaDescriptionKo:"피부 대리석양 피반(Cutis marmorata). 수중 심낭 절개 시 우심실에서 대량의 질소 기포 분출(Gas Lock). 외상성 기계적 손상 부재.",primaryTraumaDescriptionEn:"Marked cutis marmorata. Sub-aquatic cardiac puncture released massive gaseous nitrogen lock from right ventricle.",toxicologyFound:"Intravascular Nitrogen Bubble Lock (94.2% N2)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"음성",interpretationEn:"Negative"},strDna:[],gcms:[{compoundName:"Gaseous Nitrogen (Cardiac Bubble Lock)",retentionTimeMin:1.1,areaPercent:94.2,mzPeaks:[{mz:28,intensity:100},{mz:14,intensity:12}],nistStandardPeaks:[{mz:28,intensity:100},{mz:14,intensity:12}],clinicalSignificanceKo:"심장 및 대동맥에서 포집된 기포 성분의 94.2%가 질소. 헬륨이 0%로 확인되어 호흡 기체가 바꿔치기되었음을 증명.",clinicalSignificanceEn:"Cardiac bubbles composed of 94.2% N2 with 0% helium, proving breathing gas sabotage."}]},inquest:[{id:"q_case22_diving",counselArgumentKo:'변호인: "심해 100m 극한 작업 환경에서 챔버 가스켓이 파열되어 일어난 불가항력적 산업재해 사고입니다!"',counselArgumentEn:'Defense Counsel: "The decompression chamber gasket ruptured under extreme 100m depth pressure!"',options:[{textKo:"심장 기포 내 94% 질소 검출(헬륨 0%) 및 밸브 고의 렌치 조작흔 제시",textEn:"Present the 94% cardiac nitrogen bubble lock (0% helium) and forced valve toolmarks",isCorrect:!0,requiredEvidenceId:"ev_22_scuba_cylinder",explanationKo:"정확합니다. 100m 심해 포화잠수에서는 질소 마취와 감압병을 방지하기 위해 헬리옥스(헬륨-산소)를 필수 호흡해야 합니다. 가스 실린더에 고의로 일반 압축공기를 충전하고 매니폴드 감압 밸브를 급속 개방하여 치명적인 체내 기포 색전증을 유발한 계획적 살인입니다.",explanationEn:"Correct. Saturation diving at 10 ATA mandates heliox to prevent nitrogen narcosis and bubbling. Sabotaging cylinders with compressed air induced instant, lethal gas lock upon decompression."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"고의로 교체된 고압 질소 가스 흡입 및 급속 감압에 의한 치명적 동맥 기체색전증(타살)",correctCauseEn:"Fatal arterial gas embolism induced by fraudulent nitrogen air breathing and forced decompression (Homicide)"},{id:"case_23",number:23,titleKo:"사건 23: 투구꽃 초오(草烏) 아코니틴 급사 사건",titleEn:"Case 23: The Botanical Aconitine Cardiotoxicity",subtitleKo:"치명적 심실빈맥(Torsades de Pointes) 유발 식물독과 UPLC-Q-TOF 분광분석",subtitleEn:"Refractory ventricular tachycardia, monkshood starch microscopy, and UPLC-Q-TOF aconitine profiling",isProOnly:!0,briefingKo:"한강변에서 조깅을 마친 31세 마라톤 선수가 한방 보약 음료를 마신 직후 심정지로 급사했습니다. 평소 심장 질환이 없던 건장한 청년의 돌연사로 처리될 뻔했으나, 위 내용물 현미경 검경에서 맹독성 생약인 초오(Aconitum) 특유의 다각형 전분립과 아코니틴이 검출되었습니다.",briefingEn:"A healthy 31-year-old marathon runner died of sudden cardiac arrest after drinking an herbal health tonic. Presumed a natural sudden adult death syndrome, microscopy of gastric contents and mass spectrometry revealed lethal monkshood aconitine alkaloids.",ambientTempC:21,sceneDescriptionKo:"강변 산책로 벤치. 쓰러진 보온병과 흩어진 이온음료 캔.",sceneDescriptionEn:"Riverside park bench. Overturned stainless thermos and workout accessories.",evidenceItems:[{id:"ev_23_herbal_thermos",nameKo:"변사자가 마신 보온병 내 한방 탕약 잔여액",nameEn:"Stainless Thermos with Dark Herbal Liquid Residue",descriptionKo:"바닥에 침전된 갈색 한방 탕약. 특유의 혀를 찌르는 마비성 쓴맛.",descriptionEn:"Insulated flask containing herbal broth with numbing taste characteristics.",x:40,y:60,alsRequired:"white",requiredTool:"swab",collected:!1,notesKo:"UPLC-Q-TOF 고분해능 분석으로 아코니틴 12.4 ng/mL 치사 농도 확인.",notesEn:"UPLC-Q-TOF confirmed lethal aconitine concentration of 12.4 ng/mL.",labCategory:"gcms"},{id:"ev_23_mortar_pestle",nameKo:"용의자 찬장에서 발견된 막자사발",nameEn:"Mortar & Pestle with Herb Grinding Residue",descriptionKo:"투구꽃 뿌리(부자/초오)를 분쇄한 흔적이 남아있는 세라믹 막자사발.",descriptionEn:"Ceramic mortar containing microscopic dried botanical plant fibers.",x:80,y:50,alsRequired:"uv",requiredTool:"swab",collected:!1,notesKo:"용의자(보험 수혜자인 사촌) 주방에서 압수된 생약 파쇄 도구.",notesEn:"Seized from beneficiary cousin kitchen cabinet.",labCategory:"serology"},{id:"ev_23_smartwatch_log",nameKo:"마라톤 직후 심실세동(Torsades de pointes) 기록 스마트워치",nameEn:"Decedent Smartwatch ECG Telemetry Log",descriptionKo:"음료 섭취 15분 후 시작된 다형성 심실빈맥 및 심실세동 파형 기록.",descriptionEn:"Wearable ECG recording dramatic sudden refractory polymorphic ventricular tachycardia.",x:20,y:70,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"아코니틴의 심근 나트륨 채널 지속 개방 기전과 정확히 일치.",notesEn:"Timeline matches aconite-induced continuous cardiac sodium channel activation.",labCategory:"serology"}],victim:{name:"신태양 (Shin Tae-yang)",age:31,sex:"M",weightKg:73,clothingFactor:1.1,coreLiverTempC:35.1,vitreousPotassiumMmolL:6.65,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 관상동맥 협착률 0% 정상 심장, 위점막 점상 출혈 및 갈색 분말 흡착.",descriptionEn:"Zero trauma. Pristine coronary arteries (0% stenosis), gastric mucosal petechiae."},primaryTraumaDescriptionKo:"외상 일체 부재. 관상동맥 협착률 0%의 지극히 건강한 심근 조직. 위점막 미만성 충혈 및 갈색 생약 미세 분말 침착.",primaryTraumaDescriptionEn:"No mechanical trauma. Completely normal coronary arteries (0% stenosis); gastric mucosa diffuse petechial hyperemia with herbal powder.",toxicologyFound:"Aconitine (12.4 ng/mL)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"위점막에서 초오 복합 전분립 및 수산화칼슘 나선 침상 결정 검경 확인.",interpretationEn:"Aconite compound starch granules and calcium oxalate crystals identified under light microscopy."},strDna:[],gcms:[{compoundName:"Aconitine Alkaloid",retentionTimeMin:16.8,areaPercent:98.7,mzPeaks:[{mz:645,intensity:100},{mz:586,intensity:60},{mz:368,intensity:45},{mz:105,intensity:80}],nistStandardPeaks:[{mz:645,intensity:100},{mz:586,intensity:60},{mz:368,intensity:45},{mz:105,intensity:80}],clinicalSignificanceKo:"투구꽃(Aconitum)의 맹독성 알칼로이드. 심근 Na+ 채널을 차단하지 않고 지속 개방하여 불응성 심실세동 급사 유발.",clinicalSignificanceEn:"Aconitum alkaloid. Persistently opens cardiac sodium channels triggering fatal refractory ventricular arrhythmias."}]},inquest:[{id:"q_case23_aconite",counselArgumentKo:'변호인: "평소 무리하게 극한 마라톤 훈련을 하던 청년 운동선수의 돌연 심장마비 자연사입니다!"',counselArgumentEn:'Defense Counsel: "The young athlete suffered a natural sudden cardiac arrest induced by extreme athletic exhaustion!"',options:[{textKo:"관상동맥 정상 소견 및 위 내용물과 혈중 초오 아코니틴 치사 농도 검출 제시",textEn:"Present pristine coronary arteries and lethal aconitine concentrations in gastric fluid and blood",isCorrect:!0,requiredEvidenceId:"ev_23_herbal_thermos",explanationKo:"정확합니다. 부검 결과 관상동맥 협착률 0%로 허혈성 심장질환이나 심근염 소견이 전무합니다. 보온병의 탕약과 변사자의 혈중에서 맹독성 투구꽃 추출물인 아코니틴이 치사 농도로 검출되어 독살임이 명백합니다.",explanationEn:"Correct. Complete patency of coronary arteries rules out natural ischemic heart disease. Identification of lethal aconitine in both the beverage and femoral blood establishes intentional botanical poisoning."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"투구꽃(초오) 추출물 아코니틴 급성 중독에 의한 치명적 심실세동 부정맥(타살)",correctCauseEn:"Lethal ventricular arrhythmia resulting from acute aconitine botanical poisoning (Homicide)"},{id:"case_24",number:24,titleKo:"사건 24: 항공기 객실 독성 증후군 조작",titleEn:"Case 24: The Cockpit Aerotoxic Syndrome Sabotage",subtitleKo:"제트엔진 블리드 에어 트리크레실 인산염(TCP) 누출과 콜린에스테라아제 저해",subtitleEn:"Engine bleed air tricresyl phosphate (TCP) neurotoxicity and butyrylcholinesterase depression",isProOnly:!0,briefingKo:"국제선 화물기 조종석에서 순항 비행 중 부기장이 급성 의식 소실 및 호흡 마비로 사망했습니다. 기장은 원인 불명의 급성 뇌졸중으로 보고했으나, 조종석 비상 산소 마스크 내부 응축액에서 제트엔진 합성 윤활유에 첨가되는 유기인계 신경독성물질(Tricresyl Phosphate)이 검출되었습니다.",briefingEn:"A cargo co-pilot suffered acute respiratory collapse and died in cruising flight. Attributed to an idiopathic stroke, chemical analysis of the oxygen mask line revealed organophosphate jet oil neurotoxin tricresyl phosphate.",ambientTempC:19.5,sceneDescriptionKo:"착륙 후 격리된 화물기 조종석. 부기장 좌석과 기내 환경제어계통(ECS) 밸브 패널.",sceneDescriptionEn:"Cargo jet cockpit under quarantine. Co-pilot station and bleed air valve console.",evidenceItems:[{id:"ev_24_apu_filter",nameKo:"변색된 보조동력장치(APU) 블리드 에어 오일 필터",nameEn:"Discolored APU Bleed Air Oil Filter Assembly",descriptionKo:"열분해된 유기인산염 고온 증기가 침착되어 검게 그을린 공조 필터 파편.",descriptionEn:"Charred environmental filter displaying pyrolyzed organophosphate varnish deposits.",x:35,y:40,alsRequired:"white",requiredTool:"bagCan",collected:!1,notesKo:"정비 일지에서 규격 외 고농도 TCP 함유 오일이 고의 주입된 기록 확보.",notesEn:"Maintenance logs reveal non-spec high-TCP lubricant deliberately introduced.",labCategory:"gcms"},{id:"ev_24_cockpit_mask",nameKo:"조종석 비상 산소 마스크 내부 응축 액적",nameEn:"Co-Pilot Emergency Oxygen Mask Condensed Droplets",descriptionKo:"부기장 마스크 흡기 밸브 내벽에 응축된 투명한 미세 유기 오일 잔여물.",descriptionEn:"Viscous organic oil droplets condensed inside inspiratory check valve.",x:65,y:55,alsRequired:"uv",requiredTool:"swab",collected:!1,notesKo:"자외선 365nm 조사 시 연한 청백색 형광. GC-MS로 TOCP 확인.",notesEn:"Pale blue fluorescence under 365nm UV; confirmed as neurotoxic TOCP isomers.",labCategory:"gcms"},{id:"ev_24_fdr_blackbox",nameKo:"환경제어계통 밸브 강제 개방 로그가 담긴 블랙박스",nameEn:"Flight Data Recorder Cockpit Valve Override Log",descriptionKo:"조종석 블리드 에어 혼합 밸브를 수동으로 100% 개방 고정한 비행 데이터 기록.",descriptionEn:"FDR telemetry proves manual cockpit air pack valve forced open prior to collapse.",x:20,y:75,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"기장 제어 스위치 위치와 조작 시간대 완벽 일치.",notesEn:"Correlates to captain console control inputs 12 minutes prior to death.",labCategory:"serology"}],victim:{name:"문성규 (Moon Sung-kyu)",age:47,sex:"M",weightKg:75,clothingFactor:1.15,coreLiverTempC:33.8,vitreousPotassiumMmolL:7.05,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 뇌부종, 폐포 화학성 폐렴, 혈청 부티릴콜린에스테라아제(BChE) 82% 억제.",descriptionEn:"No trauma. Acute cerebral edema, chemical pneumonitis, serum BChE 82% inhibited."},primaryTraumaDescriptionKo:"외상 전무. 뇌부종 및 기도 점막 내 유기성 기름 액적 흡착. 혈청 콜린에스테라아제 활성도 82% 비가역적 억제.",primaryTraumaDescriptionEn:"No external trauma. Severe cerebral edema and airway organophosphate aerosol condensation; serum cholinesterase 82% inhibited.",toxicologyFound:"Tricresyl Phosphate (TCP / TOCP) 4.8 ug/mL"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"혈장 콜린에스테라아제 엘만(Ellman) 분광분석 결과 정상치 대비 82% 저해 확인.",interpretationEn:"Ellman spectrophotometric assay confirmed 82% inhibition of plasma butyrylcholinesterase."},strDna:[],gcms:[{compoundName:"Tri-ortho-cresyl Phosphate (TOCP)",retentionTimeMin:13.5,areaPercent:96.5,mzPeaks:[{mz:368,intensity:45},{mz:165,intensity:100},{mz:91,intensity:65},{mz:77,intensity:50}],nistStandardPeaks:[{mz:368,intensity:45},{mz:165,intensity:100},{mz:91,intensity:65},{mz:77,intensity:50}],clinicalSignificanceKo:"유기인계 신경독성 제트엔진 오일 첨가제. 아세틸콜린에스테라아제를 저해하고 지연성 신경병증(OPIDN) 및 중추 호흡정지 유발.",clinicalSignificanceEn:"Organophosphate neurotoxin present in jet turbine oils; induces acute cholinergic crisis and central respiratory paralysis."}]},inquest:[{id:"q_case24_aerotoxic",counselArgumentKo:'변호인: "비행 중 기압 변화와 극심한 피로로 인한 급성 뇌혈관 파열(뇌졸중) 자연사입니다!"',counselArgumentEn:'Defense Counsel: "The co-pilot suffered a natural cerebrovascular aneurysm triggered by flight cabin pressure fatigue!"',options:[{textKo:"조종석 마스크 내 TOCP 유독 오일 응축액 및 혈장 콜린에스테라아제 82% 억제 검사 제시",textEn:"Present the condensed TOCP in the oxygen mask and 82% plasma cholinesterase inhibition",isCorrect:!0,requiredEvidenceId:"ev_24_cockpit_mask",explanationKo:"정확합니다. 부검 시 뇌혈관 파열은 전혀 발견되지 않았으며, 조종석 산소 마스크 흡기 라인에서 고농도 유기인계 신경독성제인 TOCP가 검출되었고 체내 효소 활성도가 82% 차단되어 기내 공조 라인을 조작한 독성 화학 살인임이 명백합니다.",explanationEn:"Correct. Brain autopsy confirmed zero vascular aneurysms. Detection of concentrated TOCP inside the oxygen mask coupled with 82% cholinesterase depression medically establishes intentional organophosphate sabotage."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"항공기 공조 라인으로 살포된 트리크레실인산염(TCP) 신경독성에 의한 급성 호흡 중추 마비(타살)",correctCauseEn:"Acute neurotoxic respiratory arrest induced by aerotoxic bleed air tricresyl phosphate contamination (Homicide)"},{id:"case_25",number:25,titleKo:"사건 25: 분묘 발굴 비소(Arsenic) 만성 중독",titleEn:"Case 25: The Exhumation Chronic Arsenic Arsenicosis",subtitleKo:"미스선(Mees' Lines), 마쉬(Marsh) 반응 및 모발 분절 레이저 유도 ICP-MS",subtitleEn:"Mees' lines, segmental hair laser ablation ICP-MS, and grave soil blank differentiation",isProOnly:!0,briefingKo:"매장된 지 8개월이 지난 60대 여성의 분묘가 거액의 상속 보험금 편취 의혹으로 법원 영장에 의해 발굴되었습니다. 사체는 시랍화(Adipocere) 상태로 보존되어 있었으며, 손톱의 백색 미스선과 모발 분절 질량분석을 통해 3회에 걸쳐 계획적으로 비소를 투약한 독살 타임라인이 입증되었습니다.",briefingEn:"Exhumed 8 months post-burial due to suspicious inheritance insurance claims, an adipocere cadaver exhibited Mees' lines and palmar keratosis. Segmental laser ablation ICP-MS of hair reconstructed a 3-dose homicidal timeline, refuting groundwater contamination.",ambientTempC:15,sceneDescriptionKo:"발굴 현장 묘지. 개봉된 목관과 시랍화된 변사체, 주변 황토 토양층.",sceneDescriptionEn:"Exhumation grave site. Open pine casket with adipocere remains and surrounding clay soil strata.",evidenceItems:[{id:"ev_25_hair_lock",nameKo:"두피에서 모근 포함 채취한 12cm 모발 다발",nameEn:"Intact 12cm Scalp Hair Lock with Follicles",descriptionKo:"시랍화 사체 두피에서 채취된 온전한 모발. 1cm 단위 분절 분석용.",descriptionEn:"Well-preserved scalp hair collected for longitudinal 1cm-interval chronotoxicological profiling.",x:50,y:30,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"모발 1cm 성장=약 1개월. 근위부 1cm, 3cm, 5cm 지점에서 45 mg/kg 비소 농도 스파이크 확인.",notesEn:"Laser ablation ICP-MS identified three periodic spikes (45 mg/kg) precisely spaced 60 days apart.",labCategory:"gcms"},{id:"ev_25_grave_soil_blank",nameKo:"관 외부 50cm 심도 대조군 토양 샘플",nameEn:"Casket Exterior Control Soil Blank Sample",descriptionKo:"관 바닥 및 주변 토양에서 채취한 환경 배경치 비소 분석용 공시료.",descriptionEn:"Core drill clay sample taken 50cm outside casket wall to evaluate environmental leaching.",x:80,y:70,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"토양 내 비소 농도 <0.1 mg/kg으로 지하수 및 토양 침출 오염 원천 배제.",notesEn:"Soil arsenic concentration <0.1 mg/kg conclusively refutes natural ground seepage.",labCategory:"serology"},{id:"ev_25_casket_lining",nameKo:"관 내부 삼출액 흡수 직물",nameEn:"Casket Textile Lining with Decomposition Fluids",descriptionKo:"시체 내부에서 유출된 부패 삼출액이 흡수 건조된 섬유 파편.",descriptionEn:"Lining textile bearing dried adipocere decomposition fluid residues.",x:25,y:65,alsRequired:"uv",requiredTool:"swab",collected:!1,notesKo:"고농도 삼산화비소 침전물 확인.",notesEn:"Arsenic trioxide crystalline leachate confirmed on fabric.",labCategory:"gcms"}],victim:{name:"유복순 (Yoo Bok-soon)",age:67,sex:"F",weightKg:52,clothingFactor:1.2,coreLiverTempC:15,vitreousPotassiumMmolL:11.5,lividitySite:"posterior",isLividityFixed:!0,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 시랍화(Adipocere), 손톱 백색 횡선(Mees lines), 수장부 각화증.",descriptionEn:"Adipocere preservation, pronounced transverse Mees' lines on nails, palmar keratosis."},primaryTraumaDescriptionKo:"외상 없음. 손톱의 선명한 백색 횡선(Mees lines), 수장부 과각화증, 간/신장 조직의 시랍화(Adipocere) 및 미라화.",primaryTraumaDescriptionEn:"Adipocere preserved cadaver. Pronounced Mees lines across fingernails, palmar hyperkeratosis, systemic chronic arsenicosis.",toxicologyFound:"Arsenic (As) 45.2 mg/kg in proximal hair"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"마쉬(Marsh) 비소 거울 반응 양성. 비소 특유의 흑색 금속성 비소 거울 석출.",interpretationEn:"Positive Marsh test: lustrous black metallic arsenic mirror generated on cold porcelain."},strDna:[],gcms:[{compoundName:"Arsenic Trioxide (As2O3 Ingestion)",retentionTimeMin:3.1,areaPercent:99.1,mzPeaks:[{mz:198,intensity:100},{mz:150,intensity:75},{mz:75,intensity:90}],nistStandardPeaks:[{mz:198,intensity:100},{mz:150,intensity:75},{mz:75,intensity:90}],clinicalSignificanceKo:"삼산화비소(비상). 세포 호흡 피루브산 탈수소효소군을 차단하여 만성 위장관 궤양 및 다발성 장기부전 유발.",clinicalSignificanceEn:"Arsenic trioxide. Inhibits pyruvate dehydrogenase complex leading to progressive multiorgan failure."}]},inquest:[{id:"q_case25_arsenic",counselArgumentKo:'변호인: "피해자는 지병인 위염으로 자연사했으며, 유골의 비소는 묘지 지하수의 비소 성분이 관으로 침출된 자연 환경 오염입니다!"',counselArgumentEn:'Defense Counsel: "The decedent died of natural chronic gastritis; detected arsenic is mere post-mortem environmental leaching from graveyard soil!"',options:[{textKo:"관 주변 대조군 토양 비소 음성 및 모발 분절 질량분석 3회 주기적 투약 피크 제시",textEn:"Present the negative soil blank (<0.1 mg/kg) and periodic 3-peak hair chronotoxicology",isCorrect:!0,requiredEvidenceId:"ev_25_hair_lock",explanationKo:"정확합니다. 관 외부 대조군 토양은 비소 음성(<0.1 mg/kg)으로 외부 침출 가능성이 완벽히 배제되었습니다. 또한 12cm 모발을 1cm 단위로 분절 분석한 결과 매 2개월 간격으로 정확히 3회의 치사량 투약 피크가 검출되어 장기간에 걸친 계획적 독살임이 입증됩니다.",explanationEn:"Correct. Exterior soil blanks confirm zero environmental leaching. Longitudinal 1cm hair segmentation demonstrated three distinct poison spikes spaced 60 days apart, incontrovertibly proving chronic homicidal administration."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"장기간에 걸친 삼산화비소(비소) 분할 투약에 의한 만성 중독성 다발성 장기부전(타살)",correctCauseEn:"Chronic arsenicosis and progressive multiorgan failure resulting from premeditated repeated arsenic ingestion (Homicide)"},{id:"case_26",number:26,titleKo:"사건 26: 중환자실 인공호흡기 기압손상 및 인위적 공기색전증",titleEn:"Case 26: The ICU Ventilator Air Embolism Sabotage",subtitleKo:"우심실 공기 자물쇠(Air Lock) 현상과 중심정맥관 3-Way 스톱콕 조작",subtitleEn:"Right ventricular air lock, central venous line stopcock manipulation, and ventilator telemetry",isProOnly:!0,briefingKo:"중환자실에서 수술 후 순조롭게 회복 중이던 50대 환자가 야간에 급작스러운 심정지로 사망했습니다. 당직 의료진은 인공호흡기의 고압 환기(PEEP) 오작동에 의한 긴장성 기흉 사고로 보고했으나, 법의관의 수중 부검 결과 폐포 파열은 없었고 우심실에 50mL의 실내 공기가 가득 찬 치명적 공기색전증이 드러났습니다.",briefingEn:"An ICU patient on a mechanical ventilator died of sudden cardiac arrest. Claimed as a ventilator barotrauma and tension pneumothorax complication, underwater autopsy proved zero lung rupture but a massive 50mL right ventricular room air lock.",ambientTempC:23,sceneDescriptionKo:"종합병원 중환자실 4번 격리병상. 인공호흡기 모니터와 중심정맥관 수액 걸이.",sceneDescriptionEn:"ICU isolation bed 4. Mechanical ventilator cart, IV infusion pumps, and waste bin.",evidenceItems:[{id:"ev_26_cvc_stopcock",nameKo:"중심정맥관에 연결된 3-way 스톱콕 밸브",nameEn:"CVC Catheter 3-Way Stopcock Valve Assembly",descriptionKo:"수액 공급 라인이 분리된 채 외부 대기 쪽으로 개방 잠금된 정맥 밸브.",descriptionEn:"Intravenous 3-way stopcock valve locked open to room air with infusion disconnected.",x:45,y:55,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"밸브 내경 2.5mm로 주사기 루어락 직결 주입 흔적 확인.",notesEn:"Luer-lock direct syringe connection marks documented.",labCategory:"serology"},{id:"ev_26_60ml_syringe",nameKo:"병실 의료폐기물 통에 버려진 60mL 주사기",nameEn:"Discarded 60mL Luer-Lock Plunger Syringe",descriptionKo:"의료폐기물 상자 바닥에 비닐로 싸여 은닉된 대용량 주사기.",descriptionEn:"High-volume 60mL syringe wrapped in plastic inside sharps container.",x:75,y:65,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"주사기 플런저(밀대) 표면에서 용의자(담당 간호사) STR 단일 DNA 검출.",notesEn:"Latent touch DNA on syringe plunger matches night-shift nurse.",labCategory:"serology"},{id:"ev_26_ventilator_usb",nameKo:"인공호흡기 메모리 덤프 (기압 및 알람 기록)",nameEn:"Ventilator EEPROM Memory Event Log Dump",descriptionKo:"호흡기 압력 센서 기록. 폐포 파열(Barotrauma) 기준 압력(40 cmH2O) 초과 이력 전무.",descriptionEn:"Peak inspiratory pressure never exceeded 22 cmH2O, medically refuting barotrauma.",x:25,y:40,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"기압 손상에 의한 기흉 주장을 반박하는 결정적 기계 데이터.",notesEn:"Objectively refutes defense claim of high-pressure ventilator failure.",labCategory:"serology"}],victim:{name:"박성철 (Park Sung-chul)",age:58,sex:"M",weightKg:70,clothingFactor:1.1,coreLiverTempC:34.8,vitreousPotassiumMmolL:6.75,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 없음. 우심실 50mL 실내 공기 포집(Air Lock). 폐 실질 파열 및 기흉 전무.",descriptionEn:"No trauma. Right ventricular air lock (50mL room air). Absence of barotrauma or pneumothorax."},primaryTraumaDescriptionKo:"우측 쇄골하정맥 중심정맥관(CVC) 자입부 주변 공기 수종. 수중 심낭 절개 시 우심실에서 50mL 실내 공기 기포 격렬 분출(Air Lock). 폐 실질 파열(Barotrauma) 일체 부재.",primaryTraumaDescriptionEn:"Right ventricular air lock (50mL room air). Absence of alveolar barotrauma or tension pneumothorax refutes mechanical ventilator flaw.",toxicologyFound:"Intravascular Air Embolism (Atmospheric N2/O2)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"음성",interpretationEn:"Negative"},strDna:[{locus:"D8S1179",victimAlleles:[13,15],suspectAlleles:[12,14],evidenceAlleles:[12,14],evidenceRfu:[850,920],interpretationKo:"폐기된 60mL 주사기 밀대에서 채취된 DNA는 당직 간호사(용의자)의 STR 유전자형과 100% 일치.",interpretationEn:"Touch DNA on 60mL plunger matches suspect night nurse across all loci."}],dnaSummaryKo:"60mL 주사기 플런저에서 용의자(담당 간호사)의 단일 STR DNA 프로필이 검출되어 고의 주사 사실 입증.",dnaSummaryEn:"Plunger touch DNA uniquely identifies the suspect nurse, proving deliberate manual injection.",gcms:[{compoundName:"Atmospheric Air (N2 / O2 Gas Mixture)",retentionTimeMin:1.05,areaPercent:99,mzPeaks:[{mz:28,intensity:100},{mz:32,intensity:27}],nistStandardPeaks:[{mz:28,intensity:100},{mz:32,intensity:27}],clinicalSignificanceKo:"심낭 수중 절개 시 포집된 기체 성분이 대기 질소(78%) 및 산소(21%)와 완벽 일치. 중심정맥관을 통한 실내 공기 주입 확정.",clinicalSignificanceEn:"Aspirated cardiac gas matches atmospheric air (78% N2, 21% O2), confirming room air injection."}]},inquest:[{id:"q_case26_air_embolism",counselArgumentKo:'변호인: "인공호흡기의 고압 환기(PEEP) 센서 결함으로 환자의 폐가 파열되어 발생한 불가피한 의료 과실 합병증입니다!"',counselArgumentEn:'Defense Counsel: "The patient suffered an unavoidable clinical complication of ventilator barotrauma and lung rupture!"',options:[{textKo:"폐포 파열 전무 소견, 우심실 50mL 공기색전증 및 주사기 밀대 용의자 DNA 제시",textEn:"Present the zero-barotrauma lung finding, 50mL right ventricular air lock, and suspect DNA on syringe",isCorrect:!0,requiredEvidenceId:"ev_26_60ml_syringe",explanationKo:"정확합니다. 부검 결과 폐포 파열이나 긴장성 기흉은 일체 없었으며 인공호흡기 기압 로그도 정상 범위를 유지했습니다. 우심실에서 분출된 50mL의 실내 공기와 버려진 주사기 밀대에서 검출된 용의자의 단일 DNA는 중심정맥관을 통한 고의적 공기 주입 살인을 명백히 증명합니다.",explanationEn:"Correct. Autopsy revealed completely intact lungs with zero pneumothorax, corroborated by normal ventilator logs. The 50mL room air cardiac lock and suspect DNA on the syringe plunger prove homicidal air embolism."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"중심정맥관을 통한 50mL 실내 공기 급속 주입에 의한 우심실 공기 자물쇠 및 치명적 급성 공기색전증(타살)",correctCauseEn:"Fatal right ventricular air lock and acute pulmonary outflow tract obstruction via intravenous room air injection (Homicide)"},{id:"case_27",number:27,titleKo:"사건 27: 화재 잔해 법치의학 치아 감식",titleEn:"Case 27: The Fire Debris Odontological Identification",subtitleKo:"투사 자세(Pugilistic Posture), 치수강(Pulp) 아멜로게닌 DNA 및 치과 파노라마 대조",subtitleEn:"Pugilistic posture, dental pulp amelogenin PCR, and post-mortem Panorex chart matching",isProOnly:!0,briefingKo:"도심 외곽 전소된 별장 잔해에서 전신 탄화된 신원 불상의 변사체가 발견되었습니다. 건물주(피보험자 50억 가입자)가 화재로 숨진 것으로 유족들이 보험금을 청구했으나, 잔해 속 하악골 치아 파노라마 감식 및 치수강 DNA 분석 결과 사망자는 실종된 제3자였으며 화재 전 두개골 강타로 이미 살해된 상태였습니다.",briefingEn:"Charred human remains in a destroyed luxury villa were claimed to be the heavily insured owner. Forensic odontological comparison and dental pulp DNA extraction proved the remains belonged to a murdered missing driver, staged for life insurance fraud.",ambientTempC:19,sceneDescriptionKo:"붕괴된 목조 별장 화재 현장. 잔해 속 소손된 사체와 방화 촉진제 잔류물.",sceneDescriptionEn:"Incinerated timber villa debris. Charred pugilistic cadaver and accelerant residues.",evidenceItems:[{id:"ev_27_charred_mandible",nameKo:"화재 잔해에서 수습된 소손 하악골",nameEn:"Charred Fragmentary Mandible with Intact Molars",descriptionKo:"고열 화재에도 불구하고 치관과 아말감 수복물이 보존된 하악골 파편.",descriptionEn:"Fragmentary mandible preserving molar crowns and amalgam fillings.",x:48,y:52,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"치수강(Dental pulp) 내부 연조직에서 고품질 핵 DNA 추출 성공.",notesEn:"Pulp chamber protected nuclear DNA from thermal destruction.",labCategory:"dna"},{id:"ev_27_panorex_chart",nameKo:"피보험자 백동우의 생전 치과 파노라마 X선 차트",nameEn:"Antemortem Panorex Dental Radiograph of Insured",descriptionKo:"용의자가 사망했다고 주장한 건물주 백동우의 치과 파노라마 방사선 사진.",descriptionEn:"Clinical Panorex bitewing radiograph of the allegedly deceased insured.",x:20,y:65,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"#19번 대구치 근관 각도 및 충전재 형상이 사체 치아와 16개 항목에서 완전 불일치.",notesEn:"Root canal morphology and trabecular patterns discordant across 16 points.",labCategory:"ballistics"},{id:"ev_27_accelerant_can",nameKo:"별장 뒤편에 버려진 톨루엔 신나 캔",nameEn:"Accelerant Container with Industrial Toluene",descriptionKo:"인위적 방화에 사용된 공업용 솔벤트 캔. 손잡이 표면에 지문 잔류.",descriptionEn:"Industrial paint thinner solvent canister bearing latent fingerprints.",x:82,y:75,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"지문 감정 결과 살아있는 건물주 백동우의 우측 모지 지문 확인.",notesEn:"Fingerprint on handle matches the supposedly dead insured owner.",labCategory:"prints"}],victim:{name:"신원 불상 (Claimed: 백동우 / Actual: 김상훈)",age:39,sex:"M",weightKg:65,clothingFactor:1,coreLiverTempC:32,vitreousPotassiumMmolL:7.85,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"전신 4도 탄화, 투사 자세(Pugilistic posture), 좌측 두정부 사후 화재 전 생전 함몰 골절.",descriptionEn:"4th degree charring, pugilistic attitude, antemortem depressed parietal skull fracture."},primaryTraumaDescriptionKo:"전신 4도 탄화 및 열풍에 의한 투사 자세(Pugilistic attitude). 두개골 좌측 두정부 사후 화재 전 생전 함몰 골절흔. 치수강 내부 치수 연조직 온전 보존.",primaryTraumaDescriptionEn:"Severe pugilistic posture. Antemortem left parietal blunt impact fracture preceding post-mortem incineration; intact dental pulp chambers.",toxicologyFound:"%HbCO 3.2% (Fire Inhaled Post-Mortem)"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"두개골 골절부 경막하 혈종에서 인혈 및 생전 생활반응(Vital reaction) 확정.",interpretationEn:"Antemortem vital reaction confirmed in epidural hematoma margin."},strDna:[{locus:"vWA",victimAlleles:[16,18],suspectAlleles:[14,17],evidenceAlleles:[16,18],evidenceRfu:[940,980],interpretationKo:"치수강 DNA 추출 결과, 실종된 대리운전 기사 김상훈과 일치하며 피보험자 백동우와 불일치.",interpretationEn:"Dental pulp DNA matches missing driver Kim Sang-hoon; excludes insured owner."}],dnaSummaryKo:"치수강 DNA가 실종된 대리운전 기사와 일치하여, 신원을 위장하고 보험금을 노린 살인 방화극임을 증명.",dnaSummaryEn:"Dental pulp DNA matches missing driver, proving identity substitution homicide for insurance fraud.",gcms:[{compoundName:"Toluene Accelerant Residue",retentionTimeMin:4.8,areaPercent:97.8,mzPeaks:[{mz:92,intensity:75},{mz:91,intensity:100},{mz:65,intensity:25}],nistStandardPeaks:[{mz:92,intensity:75},{mz:91,intensity:100},{mz:65,intensity:25}],clinicalSignificanceKo:"신나 방화 촉진제 잔류물. %HbCO 3.2%는 사체 소손 전 이미 사망했음을 증명.",clinicalSignificanceEn:"Petroleum accelerant confirmed. Blood %HbCO 3.2% proves death prior to ignition."}]},inquest:[{id:"q_case27_odontology",counselArgumentKo:'변호인: "화재로 신체 특징이 소손되었으나 별장 주인 백동우가 불의의 화재로 숨진 것이 명백합니다!"',counselArgumentEn:'Defense Counsel: "Though severely burned, the decedent is undeniably the property owner who tragically perished in an accidental fire!"',options:[{textKo:"치수강 DNA 실종자 일치 결과 및 두개골 생전 타박 골절 소견 제시",textEn:"Present the dental pulp DNA match to missing driver and antemortem parietal fracture",isCorrect:!0,requiredEvidenceId:"ev_27_charred_mandible",explanationKo:"정확합니다. 치아 치수강 DNA와 치과 파노라마 대조 결과, 사망자는 건물주 백동우가 아닌 실종된 대리운전 기사였습니다. 또한 %HbCO가 3.2%에 불과하고 두개골에 생전 둔기 골절이 확인되어 제3자를 살해한 후 신원을 바꿔치기하고 방화한 엽기적 보험 살인입니다.",explanationEn:"Correct. Odontological chart discordance and dental pulp DNA prove the remains belong to a murdered surrogate victim. Low carboxyhemoglobin (3.2%) and antemortem skull fractures establish homicide preceding arson."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"둔기 두부 타박에 의한 두개골 함몰 골절 및 신원 위장 목적의 사후 방화 소사(타살)",correctCauseEn:"Blunt impact cranial fracture and post-mortem incineration staged for fraudulent identity substitution (Homicide)"},{id:"case_28",number:28,titleKo:"사건 28: 선형가속기 방사선 암치료기 조사 조작",titleEn:"Case 28: The Linear Accelerator Radiation Overdose",subtitleKo:"치아 법랑질 전자상자성공명(EPR) 선량 측정과 다엽콜리메이터(MLC) 소프트웨어 변조",subtitleEn:"Tooth enamel EPR radiation dosimetry, localized radionecrosis, and MLC calibration file tampering",isProOnly:!0,briefingKo:"대학병원에서 초기 폐암 방사선 치료를 받던 50대 환자가 4차 치료 직후 급성 종격동 괴사 및 심낭염으로 의문사했습니다. 병원 측은 특이 체질에 의한 초급성 방사선 부작용으로 설명했으나, 치아 법랑질 전자상자성공명(EPR) 선량 측정 결과 처방 선량의 23배에 달하는 46.8 Gy의 치사 전자선이 집중 조사된 의료 장비 조작 살인이 밝혀졌습니다.",briefingEn:"An oncology patient undergoing routine radiotherapy died of acute mediastinal radionecrosis. Attributed to an unpredictable idiosyncratic reaction, electron paramagnetic resonance (EPR) dosimetry of tooth enamel proved the linear accelerator delivered 46.8 Gy.",ambientTempC:21.5,sceneDescriptionKo:"대학병원 암센터 방사선 치료실(Bunker). 선형가속기 갠트리와 조작 콘솔.",sceneDescriptionEn:"Radiotherapy bunker with medical linear accelerator gantry and operator terminal.",evidenceItems:[{id:"ev_28_linac_cal_file",nameKo:"선형가속기 콘솔의 MLC 보정 변조 덤프 파일",nameEn:"Linac Multi-Leaf Collimator Calibration Tamper Dump",descriptionKo:"다엽콜리메이터 잎(Leaf)의 개방 너비를 인위적으로 400% 확장 조작한 구성 파일.",descriptionEn:"Binary configuration file showing multi-leaf collimator calibration forced fully open.",x:35,y:45,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"깃(Git) 변경 이력에서 담당 방사선사(원한 관계 용의자)의 계정 서명 확인.",notesEn:"System audit logs link malicious software patch to defendant employee ID.",labCategory:"serology"},{id:"ev_28_radiation_badge",nameKo:"방사선 종양학과 조작실 TLD 선량계 배지",nameEn:"Operator Console Thermoluminescent Dosimeter (TLD)",descriptionKo:"조작실 제어 콘솔에 숨겨져 있던 미승인 보조 방사선 측정 배지.",descriptionEn:"TLD badge concealed inside control console recording secondary scatter.",x:70,y:60,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"치료실 내부에서 통상 치료의 20배 이상 산란 방사선 측정 기록.",notesEn:"Recorded 20x scatter radiation burst during victim final treatment session.",labCategory:"serology"},{id:"ev_28_tampered_collimator",nameKo:"25mm 고의 오프셋 개조된 다엽콜리메이터 가이드 핀",nameEn:"Mechanically Tampered Collimator Offset Guide Pin",descriptionKo:"방사선 빔의 안전 차폐 위치를 25mm 벗어나게 만든 금속 개조 핀.",descriptionEn:"Machined steel guide pin causing collimator leaves to skew 25mm off axis.",x:50,y:35,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"핀 표면에서 용의자의 지문 검출.",notesEn:"Latent print on pin belongs to defendant.",labCategory:"prints"}],victim:{name:"권혁주 (Kwon Hyuk-joo)",age:52,sex:"M",weightKg:68,clothingFactor:1.15,coreLiverTempC:34,vitreousPotassiumMmolL:7,lividitySite:"posterior",isLividityFixed:!1,suspensionPosition:"supine",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 전무. 전흉부 피부의 습윤성 낙설(Moist desquamation), 종격동 무균성 방사선 괴사.",descriptionEn:"No mechanical trauma. Circumscribed moist desquamation over chest, mediastinal necrosis."},primaryTraumaDescriptionKo:"전흉부 흉벽 피부의 습윤성 낙설(Moist desquamation) 및 경계가 명확한 방사형 홍반. 종격동 조직의 국소 무균성 방사선 괴사. 물리적 외상 부재.",primaryTraumaDescriptionEn:"Circumscribed moist desquamation over anterior chest wall; severe localized mediastinal radionecrosis without mechanical trauma.",toxicologyFound:"Localized Radiation Dose 46.8 Gy (EPR Enamel Dosimetry)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"종격동 조직 검경: 호중구 침윤 없는 순수 무균성 급성 방사선 세포 괴사 확인.",interpretationEn:"Aseptic radiation coagulative necrosis with vascular hyalinization on mediastinal histology."},strDna:[],gcms:[{compoundName:"Electron Paramagnetic Resonance (EPR) Dosimetry",retentionTimeMin:0,areaPercent:100,mzPeaks:[{mz:468,intensity:100}],nistStandardPeaks:[{mz:468,intensity:100}],clinicalSignificanceKo:"치아 법랑질 수산화인회석 CO2- 자유 라디칼 신호 측정 결과, 국소 피폭선량 46.8 Gy 산출 (처방 선량 2.0 Gy의 23배 초과).",clinicalSignificanceEn:"EPR carbonate radical dosimetry in tooth enamel established a localized absorbed dose of 46.8 Gy."}]},inquest:[{id:"q_case28_radiation",counselArgumentKo:'변호인: "환자의 선천적 방사선 민감증으로 인해 발생한 예측 불가능한 의료 합병증 사망입니다!"',counselArgumentEn:'Defense Counsel: "The patient suffered an unpredictable fatal idiosyncratic radiosensitivity complication!"',options:[{textKo:"치아 EPR 46.8 Gy 치사 피폭 선량 및 제어 시스템 강제 조작 로그 제시",textEn:"Present the 46.8 Gy tooth enamel EPR absorbed dose and tampered collimator logs",isCorrect:!0,requiredEvidenceId:"ev_28_linac_cal_file",explanationKo:"정확합니다. 치아 법랑질의 전자상자성공명(EPR) 물리적 선량 측정 결과, 환자는 처방 선량인 2 Gy의 23배가 넘는 46.8 Gy의 살인적인 방사선 폭격을 받았습니다. 선형가속기 제어 소프트웨어의 콜리메이터 안전 인터록을 강제 해제한 감사 로그와 일치하는 계획 살인입니다.",explanationEn:"Correct. Tooth enamel EPR dosimetry conclusively proved 46.8 Gy of localized radiation (23x the 2 Gy prescribed limit). System logs confirming manual disabling of collimator interlocks establish deliberate murder."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"선형가속기 제어 파일 고의 조작에 의한 46.8 Gy 국소 전자선 과피폭 및 종격동 방사선 괴사(타살)",correctCauseEn:"Acute mediastinal radionecrosis and cardiac arrest induced by intentional 46.8 Gy linear accelerator beam override (Homicide)"},{id:"case_29",number:29,titleKo:"사건 29: 산업용 극저온 액체질소 동결 질식사",titleEn:"Case 29: The Cryogenic Liquid Nitrogen Inert Asphyxiation",subtitleKo:"산소 농도 4% 급속 치환, 폐포 극저온 동결 파열 및 RFID 안전 해치 락아웃",subtitleEn:"Hypoxic rapid displacement (4% O2), cryogenic alveolar rupture, and external RFID hatch interlock",isProOnly:!0,briefingKo:"국가 바이오뱅크 줄기세포 초저온 저장고(-196°C LN2) 내부에서 수석 연구원이 냉동 질식 상태로 사망했습니다. 액체질소 자동 공급 배관의 단순 밸브 누출 질식 사고로 보고되었으나, 환경 데이터로거 상의 산소 농도가 90초 만에 4%로 급강하한 점과 외부 비상 탈출 해치가 밖에서 수동으로 빗장 잠금된 사실이 확인되었습니다.",briefingEn:"A stem cell researcher was found frozen dead inside a cryogenic repository. Claimed as an accidental LN2 pipe rupture, data loggers proved atmospheric oxygen was purged down to 4% within 90 seconds while the external escape hatch was manually bolted from outside.",ambientTempC:5,sceneDescriptionKo:"초저온 액체질소 보관소. 영하의 냉기가 감도는 밀폐 챔버와 외부 스테인리스 안전 도어.",sceneDescriptionEn:"Cryogenic repository vault with thick frost condensation and external heavy bolt lock.",evidenceItems:[{id:"ev_29_hatch_lock",nameKo:"저장고 외부 안전 해치 수동 빗장 잠금 레버",nameEn:"External Safety Vault Manual Deadbolt Mechanism",descriptionKo:"외부에서만 체결 가능한 중형 스테인리스 빗장 레버.",descriptionEn:"Heavy stainless deadbolt lever that can only be engaged from the exterior hallway.",x:80,y:40,alsRequired:"white",requiredTool:"powder",collected:!1,notesKo:"빗장 표면에서 용의자(연구소 부소장)의 12개 특징점 잠재지문 현출.",notesEn:"Latent fingerprint on bolt matches suspect vice director across 12 minutiae.",labCategory:"prints"},{id:"ev_29_rfid_reader",nameKo:"보안 도어 출입 통제기 RFID 스와이프 시간 기록",nameEn:"Security Door RFID Card Access Timestamp Log",descriptionKo:"피해자 진입 2분 후 외부에서 부소장 카드로 출입문 수동 폐쇄를 승인한 디지털 로그.",descriptionEn:"Digital access log recording defendant keycard swiping the lockdown command.",x:65,y:55,alsRequired:"white",requiredTool:"bagPaper",collected:!1,notesKo:"피해자가 내부에 갇힌 시점과 완벽히 일치.",notesEn:"Timestamp correlates precisely with chamber atmospheric oxygen drop.",labCategory:"serology"},{id:"ev_29_o2_datalogger",nameKo:"저장고 벽면 O2 농도 급강하 기록계",nameEn:"Vault Wall Atmospheric Oxygen Telemetry Logger",descriptionKo:"산소 농도가 정상 20.9%에서 90초 만에 치사 수준인 4.1%로 떨어진 센서 그래프.",descriptionEn:"Continuous logger curve showing oxygen plummeting to 4.1% in under 90 seconds.",x:25,y:45,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"고압 질소 강제 분사 밸브가 수동 개방되었음을 과학적으로 입증.",notesEn:"Proves high-pressure manual nitrogen purge was activated.",labCategory:"gcms"}],victim:{name:"장민석 (Jang Min-seok)",age:36,sex:"M",weightKg:74,clothingFactor:1.3,coreLiverTempC:28.5,vitreousPotassiumMmolL:7.3,lividitySite:"dependent",isLividityFixed:!0,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"외상 없음. 전신 표피 광범위 동상, 폐포 미세 얼음 결정 동결 파열 및 부종.",descriptionEn:"No trauma. Superficial frostbite, cryogenic alveolar freeze rupture, pulmonary edema."},primaryTraumaDescriptionKo:"전신 표피의 광범위한 동상 및 폐포 극저온 동결 파열. 기도 내 이물 부재. 흉벽/두부 기계적 외상 없음.",primaryTraumaDescriptionEn:"Systemic superficial frostbite; alveolar cryogenic freeze rupture and massive pulmonary edema. Absence of mechanical trauma.",toxicologyFound:"Atmospheric O2: 4.1% / N2: 95.8% (Hypoxic Anoxia)"},lab:{serology:{kmReactionPositive:!1,takayamaCrystalsObserved:!1,interpretationKo:"폐조직 동결 절편 검경: 폐포벽 미세 얼음 결정 형성에 의한 세포막 물리적 파열 확인.",interpretationEn:"Cryo-histology of lung tissue confirmed micro-ice crystal alveolar septal rupture."},strDna:[],gcms:[{compoundName:"Atmospheric Nitrogen Flush (Low O2)",retentionTimeMin:1.02,areaPercent:95.8,mzPeaks:[{mz:28,intensity:100},{mz:32,intensity:4}],nistStandardPeaks:[{mz:28,intensity:100},{mz:32,intensity:4}],clinicalSignificanceKo:"저장고 기체 성분: O2 4.1%, N2 95.8%. 1회 호흡만으로 뇌산소 분압이 0으로 떨어져 10초 내 실신 후 3분 내 비가역적 뇌사 초래.",clinicalSignificanceEn:"Chamber atmosphere: 4.1% O2, 95.8% N2. Induces unconsciousness in 10 seconds and brain death within 3 minutes."}]},inquest:[{id:"q_case29_cryogenic",counselArgumentKo:'변호인: "초저온 저장 탱크 배관의 자체 피로 파열로 발생한 순수한 불가항력적 안전사고입니다!"',counselArgumentEn:'Defense Counsel: "The liquid nitrogen transfer line suffered spontaneous fatigue failure, causing an accidental industrial tragedy!"',options:[{textKo:"90초 산소 급강하 기록계 및 외부 해치를 밖에서 잠근 용의자 지문 제시",textEn:"Present the 90-second O2 drop curve and suspect fingerprint on the external door bolt",isCorrect:!0,requiredEvidenceId:"ev_29_hatch_lock",explanationKo:"정확합니다. 배관 단순 파열이라면 누출 알람이 울리고 내부에서 수동으로 문을 열고 탈출할 수 있었습니다. 밖에서만 잠글 수 있는 비상 해치 레버에서 용의자의 지문이 현출되었고, 고의로 질소 퍼지 밸브를 열어 산소를 4%로 급감시킨 계획 살인임이 명백합니다.",explanationEn:"Correct. Accidental leak would allow egress via internal latch. The external deadbolt was manually engaged from outside with suspect fingerprints, deliberately trapping the victim in a 4% O2 lethal environment."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"외부 해치 강제 잠금 및 액체질소 방출에 의한 산소 결핍 저산소증 질식 및 동결사(타살)",correctCauseEn:"Hypoxic asphyxiation and cryogenic hypothermia caused by deliberate external vault entrapment and nitrogen purging (Homicide)"},{id:"case_30",number:30,titleKo:"사건 30: 외교공관 복합 독살 및 총기 위장 피살 대사건",titleEn:"Case 30: The Diplomatic Compound Grand Inquest",subtitleKo:"로쿠로늄(Rocuronium) 근이완제, 소음기 배플 충돌 흔적 및 ESDA 압흔 문자 복원",subtitleEn:"Rocuronium paralytic block, subsonic suppressor baffle strike marks, and ESDA indented document analysis",isProOnly:!0,briefingKo:"대사관 지하 밀실 서재에서 특명전권대사가 머리에 총상을 입고 책상 위에 타이핑된 유서를 남긴 채 발견되었습니다. 대외적으로는 극단적 선택으로 발표되었으나, 법의학 감정 결과 피해자는 천식 흡입기로 위장된 비탈분극성 근이완제(로쿠로늄)로 전신 마비된 상태에서 후두부에 처형식 총격을 당한 거대한 외교 암살 공작이 드러났습니다.",briefingEn:"An Ambassador was found with a fatal gunshot wound and a typed suicide note in an embassy vault study. Diplomatic authorities claimed suicide, but forensic analysis revealed an aerosolized neuromuscular paralytic (rocuronium), suppressor baffle strikes, and ESDA indented writing exposing assassination.",ambientTempC:20.5,sceneDescriptionKo:"대사관 지하 방폭 서재. 마호가니 책상과 앤틱 타자기, 바닥의 탄피와 소음기 파편.",sceneDescriptionEn:"Embassy secure vault study. Mahogany desk with typewriter, spent casing, and disassembled suppressor.",evidenceItems:[{id:"ev_30_asthma_inhaler",nameKo:"피해자 주머니에 든 천식 분무기 (로쿠로늄 액체 충전)",nameEn:"Metered Dose Asthma Inhaler Adulterated with Rocuronium",descriptionKo:"외관은 일반 살부타몰 흡입기이나 내부 약액이 고농도 로쿠로늄 브롬화물로 치환된 기구.",descriptionEn:"Commercial bronchodilator canister refilled with clinical neuromuscular blocking rocuronium.",x:35,y:65,alsRequired:"white",requiredTool:"swab",collected:!1,notesKo:"LC-MS/MS 정밀 분석 결과 로쿠로늄 0.85 ug/mL 검출. 의식은 온전하나 호흡근 전신 마비 유발.",notesEn:"LC-MS/MS confirmed rocuronium, inducing complete flaccid muscular paralysis without sedation.",labCategory:"gcms"},{id:"ev_30_suppressor_baffle",nameKo:"서재 통풍구에 은닉된 권총 소음기 배플 파편",nameEn:"Concealed Firearm Suppressor Internal Baffle Insert",descriptionKo:"아음속 탄환이 통과하며 스친 독특한 배플 스트라이크(Baffle strike) 마찰흔이 남은 부품.",descriptionEn:"Aluminium suppressor baffle displaying characteristic bullet wipe and yaw strike striations.",x:75,y:35,alsRequired:"white",requiredTool:"scale",collected:!1,notesKo:"현장 수거 9mm 탄두의 강선흔 및 배플 마찰흔 비교현미경 상관계수 r=0.92.",notesEn:"Striation profile on recovered bullet matches suppressor baffle striations at r=0.92.",labCategory:"ballistics"},{id:"ev_30_esda_notepad",nameKo:"유서 아래 받쳐져 있던 가죽 메모 패드",nameEn:"Leather Desk Notepad Bearing ESDA Indented Impressions",descriptionKo:"타자기로 작성된 유서가 놓여있던 자리 밑에 깔려 있던 메모지.",descriptionEn:"Notepad beneath the typed note analyzed with Electrostatic Detection Apparatus.",x:50,y:55,alsRequired:"uv",requiredTool:"powder",collected:!1,notesKo:'ESDA 토너 현출 결과 "협박에 굴복하지 않겠다. 참사관의 비리를 고발한다"는 피해자의 친필 압흔 문자 복원.',notesEn:`ESDA electrostatic toner revealed indented handwritten text: "I refuse your blackmail; I will expose the counselor's treason."`,labCategory:"serology"}],victim:{name:"차선우 (Cha Sun-woo)",age:49,sex:"M",weightKg:76,clothingFactor:1.2,coreLiverTempC:32.2,vitreousPotassiumMmolL:7.8,lividitySite:"posterior",isLividityFixed:!0,suspensionPosition:"prone",ligatureFurrow:{type:"horizontal_continuous",depthMm:0,thyroidCartilageFracture:!1,descriptionKo:"후두부 수평 관통 총상. 자창 불가능 각도. 전신 골격근 약리학적 이완 상태 유지.",descriptionEn:"Horizontal through-and-through cranial gunshot entering occiput. Flaccid muscle paralysis."},primaryTraumaDescriptionKo:"후두부 수평 관통 총상 (사입구 후두부, 사출구 전두부 - 자창 불가능 각도). 전신 골격근 약리학적 이완 상태 유지. 손톱 밑 방어흔 부재(근이완 마비 입증).",primaryTraumaDescriptionEn:"Horizontal through-and-through cranial gunshot wound entering occiput and exiting frontal bone (impossible self-inflicted trajectory). Systemic flaccid paralysis; zero defense wounds.",toxicologyFound:"Rocuronium Bromide (0.85 ug/mL)"},lab:{serology:{kmReactionPositive:!0,takayamaCrystalsObserved:!0,interpretationKo:"책상 위 분무 혈흔에서 고속 비산 인혈 확인. 발사체 궤적은 후방에서 전방으로 완벽한 수평 진행.",interpretationEn:"High-velocity blood spatter confirms horizontal trajectory from rear to front."},strDna:[],gcms:[{compoundName:"Rocuronium Bromide (Paralytic Agent)",retentionTimeMin:9.8,areaPercent:99.5,mzPeaks:[{mz:529,intensity:100},{mz:444,intensity:60},{mz:265,intensity:40}],nistStandardPeaks:[{mz:529,intensity:100},{mz:444,intensity:60},{mz:265,intensity:40}],clinicalSignificanceKo:"비탈분극성 신경근 차단제. 자발 호흡을 마비시켜 신체 저항을 완전히 무력화함. 흡입기로 투여된 살해 목적 약제.",clinicalSignificanceEn:"Neuromuscular blocking agent inducing complete flaccid paralysis without sedation, rendering victim helpless."}],ballistics:{caliber:"9x19mm Subsonic Suppressed",recoveredBulletProfile:[.9,.82,.94,.89,.7,.55,.91,.96,.85,.92],seizedGunBulletProfile:[.89,.83,.93,.88,.72,.57,.9,.95,.86,.91],referenceProfiles:[]}},inquest:[{id:"q_case30_grand_inquest",counselArgumentKo:'변호인: "피해자가 극심한 외교적 중압감에 시달리다 유서를 남기고 권총으로 극단적 선택을 한 명백한 자살 사건입니다!"',counselArgumentEn:'Defense Counsel: "The Ambassador, overwhelmed by diplomatic crisis, typed his farewell note and tragically ended his own life!"',options:[{textKo:"후두부 수평 관통 총상 각도, 로쿠로늄 근이완제 및 ESDA 복원 압흔 문서 제시",textEn:"Present the rear horizontal trajectory, rocuronium paralytic tox, and ESDA indented writing",isCorrect:!0,requiredEvidenceId:"ev_30_asthma_inhaler",explanationKo:"정확합니다. 스스로 총을 쏠 때 결코 나올 수 없는 후두부 수평 관통 총상이며, 천식 흡입기에 은닉된 로쿠로늄으로 피해자를 전신 마비시킨 후 처형 사살했습니다. 또한 ESDA 정전기 압흔 검출기로 유서 아래 메모지에서 참사관 비리 고발 문구가 복원되어 자살 위장 외교 암살 전모가 완벽히 입증됩니다.",explanationEn:"Correct. An entrance wound in the posterior occiput exiting the forehead is anatomically impossible in self-infliction. Coupled with rocuronium paralysis and ESDA recovery of indented notes exposing extortion, homicidal assassination is incontrovertibly established."},{textKo:"수집된 과학적 증거와 무관하게 단순 우발적 사고사 또는 기저질환 자연사라고 주장",textEn:"Argue that the death was a non-forensic natural event or simple accident",isCorrect:!1,requiredEvidenceId:"probeWound",explanationKo:"오류: 법의병리학적 부검 소견 및 기기분석 결과와 완전히 모순되는 비과학적 주장입니다.",explanationEn:"Invalid. Directly contradicted by post-mortem pathology and instrument spectroscopy."},{textKo:"현장 증거물의 연쇄보관성(Chain of Custody) 결함을 이유로 감정 결과 전체의 배제를 청구",textEn:"Move to exclude all forensic evidence alleging broken chain of custody",isCorrect:!1,requiredEvidenceId:"probeLiver",explanationKo:"오류: 본 감식 증거물은 ISO 17025 규정에 따라 완벽히 밀봉 및 디지털 바코드로 보관 관리되었습니다.",explanationEn:"Invalid. Evidence strictly conforms to ISO 17025 tamper-evident custody standards."}]}],correctManner:"homicide",correctCauseKo:"흡입기로 위장된 로쿠로늄 근이완제 투여로 저항 불능 상태 유도 후 후두부 접사 총격에 의한 두개골 관통 뇌실질 파열(타살)",correctCauseEn:"Assassination via rocuronium flaccid paralysis followed by execution-style horizontal occipital gunshot wound (Homicide)",verdictSummaryKo:"본 재판부는 대사관 밀실 사건에 대해 제시된 과학수사 증거(후두부 관통 총상 탄도학, 로쿠로늄 브롬화물 근이완제 질량분석, ESDA 정전기 압흔 문자 복원)를 Daubert 기준 하에 전면 채택하여, 위장 자살 주장을 배제하고 피고인에 대한 유죄 및 타살 평결을 선고합니다.",verdictSummaryEn:"The Court fully adopts the forensic ballistics, rocuronium mass spectrometry, and ESDA electrostatic document evidence under the Daubert Standard, conclusively ruling the death an assassination (Homicide)."}],ze={ko:{appTitle:"HEMATITE · 법의과학 및 검시 수사 시뮬레이터",appSubtitle:"WebAssembly 가속 실감형 법의병리학 및 과학수사 엔진",tagline:"철저한 과학적 절차와 증거 연쇄보관성 원칙에 입각한 실제 법의학 시뮬레이션",trialBadge:"평가판 모드 (Trial)",proBadge:"정품 인증됨 (Pro Licensed)",enterpriseBadge:"기관 인증됨 (Enterprise)",activateBtn:"라이선스 등록",licensedTo:"라이선스 소유자",expires:"만료일",buyKey:"정품 라이선스 발급",stationScene:"1. 현장 감식 (Scene)",stationAutopsy:"2. 법의부검 (Autopsy)",stationLab:"3. 정밀분석 (Crime Lab)",stationBinder:"4. 수사기록철 (Case File)",stationInquest:"5. 법정 증언 (Inquest)",gloveIntegrity:"라텍스 장갑 오염도",changeGloves:"멸균 장갑 교체",contaminationWarning:"경고: 증거물 교차 오염 위험이 발생했습니다. 법정 증거능력(Daubert Standard)이 배제될 수 있습니다.",sceneTitle:"사건 현장 증거물 수집 및 보존",alsLighting:"광원 전환 (ALS)",alsWhite:"가시광선 (백색광)",alsUv:"자외선 365nm (UV)",alsBlue:"청색광 450nm (Orange Filter)",alsGreen:"녹색광 532nm",toolScale:"ABFO No.2 정밀 스케일",toolSwab:"멸균 면봉 채취",toolPowder:"자성 분말 & 핑거프린트 리프트",toolBagPaper:"통기성 크라프트지 봉투 (혈액용)",toolBagCan:"기밀 밀폐 금속 캔 (인화성 잔해용)",applyTool:"도구 적용",evidenceDiscovered:"발견된 증거물",autopsyTitle:"법의병리학적 시체검안 및 사체부검",bodyViewAnterior:"전면 관찰 (Anterior)",bodyViewPosterior:"후면 관찰 (Posterior)",probeLiver:"간실질/직장 심부 체온 측정 (Henssge)",probeVitreous:"초자체액(안구내액) K+ 채취",probeLividity:"시반 압박탈색 시험 (Blanching)",probeWound:"디지털 캘리퍼스 창상 계측",probeFemoralBlood:"대퇴정맥혈 채혈 (독극물 분석용)",probeFingernail:"손톱 밑 이물질 찰과 채취 (DNA)",nomogramResult:"헨스게 노모그램 체온강하 계산 결과",vitreousResult:"초자체액 칼륨이온 농도 결과",lividityFixed:"시반 압박 시 탈색 안 됨 (고정성 시반 · 사후 12시간 경과)",lividityBlanching:"시반 압박 시 탈색됨 (비고정성 시반 · 사후 8시간 이내)",labTitle:"국립과학수사연구소급 첨단 기기 분석실",labTabSerology:"혈청학 (잠혈/확인)",labTabDna:"DNA 모세관 전기영동",labTabGcms:"GC-MS 질량분석",labTabBallistics:"비교현미경 탄도선조",kmTitle:"카스틀-메이어 (KM) 페놀프탈레인 잠혈 시험",kmDesc:"과산화수소와 헴(Heme)의 페록시다아제 산화 반응 (분홍색 정색 반응)",kmRun:"KM 시약 점적",takayamaTitle:"타카야마 (Takayama) 피리딘 결정 확인시험",takayamaDesc:"피리딘 결합 혈색소(Hemochromogen) 연분홍색 바늘모양 결정 현미경 관찰",takayamaRun:"타카야마 결정 반응 실행",dnaTitle:"모세관 전기영동 STR 프로필 (20 CODIS Loci)",dnaRfuThreshold:"분석 역치: 50 RFU / 해석 역치: 150 RFU",dnaAnalyze:"피크 호출 및 대립유전자(Allele) 대조",dnaMixtureDetected:"2인 혼합형(Mixture) DNA 검출됨. 주 기여자 / 부 기여자 피크 분리 필요.",gcmsTitle:"기체크로마토그래피 질량분석기 (GC-MS)",gcmsTic:"총이온 크로마토그램 (TIC Retention Time: 0-20 min)",gcmsSpec:"질량 스펙트럼 (m/z Fragmentation Pattern)",gcmsNistMatch:"NIST 표준 라이브러리 일치도 검색",ballisticsTitle:"비교현미경 탄도 강선흔/공이자국 비교",ballisticsSlider:"비교 분할선 (Split Divider)",ballisticsAlign:"강선 선조(Striation) 정렬 및 Pearson 상관계수",inquestTitle:"법의관 증언 및 검시 공청회 (Court Hearing)",inquestDesc:"수집된 과학적 증거만을 근거로 변호인의 반대신문에 논리적으로 답변하십시오.",inquestSubmitVerdict:"최종 검시 감정서 제출",mannerOfDeath:"사망의 종류 (Manner of Death)",causeOfDeath:"사망의 원인 (Cause of Death)",mannerHomicide:"타살 (Homicide)",mannerSuicide:"자살 (Suicide)",mannerAccident:"사고사 (Accident)",mannerUndetermined:"불상 (Undetermined)",case1Title:"사건 01: 밀실 펜트하우스 의문사 (The Penthouse Staging)",case1Subtitle:"넥타이 자살 위장과 고정성 시반의 모순, 프로포폴 독극물",case2Title:"사건 02: 호숫가 침수 차량 변사 (Submerged Sedan)",case2Subtitle:"플랑크톤 규조류 분석과 브레이크 호스 절단흔 (Pro 필요)",case3Title:"사건 03: 생명공학 연구실 총기 격발 (Bio-Lab Ballistics)",case3Subtitle:"접촉 사창 화약 그을음과 공이자국 비교 (Pro 필요)",confirm:"확인",cancel:"취소",close:"닫기",inspect:"정밀 조사",status:"상태",evidence:"증거",result:"분석 결과",notes:"소견 및 감정서",matchScore:"일치 계수",pmiHours:"추정 사후경과시간"},en:{appTitle:"HEMATITE · Forensic Science & Medicolegal Simulator",appSubtitle:"WebAssembly-Accelerated Tactile Medicolegal Autopsy & Crime Lab Engine",tagline:"By-the-books scientific protocols, physical instrumentation, and chain of custody integrity.",trialBadge:"Trial Mode",proBadge:"Pro Licensed",enterpriseBadge:"Enterprise Licensed",activateBtn:"Enter License",licensedTo:"Licensee",expires:"Expires",buyKey:"Issue License Key",stationScene:"1. Scene Processing",stationAutopsy:"2. Autopsy Suite",stationLab:"3. Crime Lab",stationBinder:"4. Case File",stationInquest:"5. Court Inquest",gloveIntegrity:"Nitrile Glove Integrity",changeGloves:"Change Sterile Gloves",contaminationWarning:"Warning: Cross-contamination hazard detected. Evidence admissibility may be challenged under Daubert standards.",sceneTitle:"Crime Scene Evidence Recovery & Preservation",alsLighting:"Alternate Light Source (ALS)",alsWhite:"White Light (Visible)",alsUv:"UV 365nm",alsBlue:"Blue 450nm (Orange Filter)",alsGreen:"Green 532nm",toolScale:"ABFO No.2 Metric Scale",toolSwab:"Sterile Swab + Desiccant",toolPowder:"Magnetic Powder & Lift Tape",toolBagPaper:"Breathable Kraft Paper Envelope",toolBagCan:"Airtight Metal Paint Can",applyTool:"Apply Tool",evidenceDiscovered:"Recovered Evidence",autopsyTitle:"Medicolegal Post-Mortem Examination",bodyViewAnterior:"Anterior View",bodyViewPosterior:"Posterior View",probeLiver:"Hepatic / Core Temp (Henssge)",probeVitreous:"Vitreous Humor K+ Aspiration",probeLividity:"Livor Mortis Blanching Test",probeWound:"Digital Caliper Wound Measurement",probeFemoralBlood:"Femoral Blood Draw (Toxicology)",probeFingernail:"Subungual Debris Scraping (DNA)",nomogramResult:"Henssge Cooling Nomogram Output",vitreousResult:"Vitreous Potassium [K+] Analysis",lividityFixed:"Fixed Lividity: No blanching upon pressure (PMI > 12h)",lividityBlanching:"Unfixed Lividity: Blanching observed (PMI < 8h)",labTitle:"Forensic Science Analytical Laboratory",labTabSerology:"Serology (Presumptive/Confirmatory)",labTabDna:"Capillary Electrophoresis DNA",labTabGcms:"GC-MS Spectrometry",labTabBallistics:"Comparison Microscope",kmTitle:"Kastle-Meyer (KM) Phenolphthalein Test",kmDesc:"Peroxidase-like catalytic oxidation by heme iron (Pink color reaction)",kmRun:"Dispense KM Reagent",takayamaTitle:"Takayama Pyridine Crystal Confirmatory Assay",takayamaDesc:"Salmon-pink rhomboid needle pyridine hemochromogen crystals under microscope",takayamaRun:"Run Takayama Crystal Reaction",dnaTitle:"Capillary Electrophoresis STR Profiles (20 CODIS Loci)",dnaRfuThreshold:"Analytical Threshold: 50 RFU / Stochastic: 150 RFU",dnaAnalyze:"Call Peaks & Compare Alleles",dnaMixtureDetected:"Two-person mixture detected. Deconvolving major and minor contributors.",gcmsTitle:"Gas Chromatography-Mass Spectrometry (GC-MS)",gcmsTic:"Total Ion Chromatogram (TIC Retention Time: 0-20 min)",gcmsSpec:"Mass Spectrum (m/z Fragmentation Pattern)",gcmsNistMatch:"NIST Standard Reference Library Match",ballisticsTitle:"Comparison Microscope Striation & Toolmark Alignment",ballisticsSlider:"Split Field Divider",ballisticsAlign:"Align Striations & Pearson Correlation",inquestTitle:"Coroner’s Inquest & Expert Witness Testimony",inquestDesc:"Defend your forensic findings against defense counsel cross-examination using only validated evidence.",inquestSubmitVerdict:"Submit Final Inquest Report",mannerOfDeath:"Manner of Death",causeOfDeath:"Cause of Death",mannerHomicide:"Homicide",mannerSuicide:"Suicide",mannerAccident:"Accident",mannerUndetermined:"Undetermined",case1Title:"Case 01: The Closed Penthouse Staging",case1Subtitle:"Faked tie hanging, fixed posterior lividity contradiction, propofol tox",case2Title:"Case 02: The Submerged Sedan Mystery",case2Subtitle:"Bone marrow diatom analysis and severed brake hydraulic lines (Pro Required)",case3Title:"Case 03: The Bio-Lab Gunshot Discharge",case3Subtitle:"Contact wound soot, SEM-EDS GSR stubs, and firing pin matching (Pro Required)",confirm:"Confirm",cancel:"Cancel",close:"Close",inspect:"Inspect",status:"Status",evidence:"Evidence",result:"Analysis Result",notes:"Findings & Pathology Notes",matchScore:"Match Coefficient",pmiHours:"Estimated PMI"}};let nt="ko";function w(){if(typeof window<"u"){const t=localStorage.getItem("hematite_lang");if(t==="ko"||t==="en")return t}return nt}function yt(t){nt=t,typeof window<"u"&&localStorage.setItem("hematite_lang",t)}function y(t){const e=w();return ze[e][t]||ze.ko[t]||t}const de=256;let B=null;async function bt(t="./hematite_engine.wasm"){if(B)return B;try{let e;if(typeof t=="string")if(typeof window>"u"&&typeof process<"u"){const n="node:fs",o="node:url",a=await import(n),{fileURLToPath:r}=await import(o),s=new URL(""+new URL("../hematite_engine.wasm",import.meta.url).href,import.meta.url);e=a.readFileSync(r(s))}else{const n=typeof document<"u"?new URL(t,document.baseURI).href:t,o=await fetch(n);if(!o.ok)throw new Error(`Failed to fetch WASM binary at ${t}: HTTP ${o.status}`);e=await o.arrayBuffer()}else e=t;return B=(await WebAssembly.instantiate(e,{env:{abort:(n,o,a,r)=>{console.error(`WASM Abort called at ${o}:${a}:${r} (msg ptr: ${n})`)}}})).instance.exports,console.log(`[Hematite] WASM Core Engine initialized. Build: ${B.getEngineVersion()}`),B}catch(e){return console.warn("[Hematite] Failed to load remote WASM, falling back to JS mathematical polyfill:",e),B=Ct(),B}}function J(){if(!B)throw new Error("Hematite WASM Engine not initialized. Call initHematiteWasm() first.");return B}function Be(t,e){const i=J(),n=Math.min(t.length,e.length,ye(i));if(n<=1)return 0;const o=i.getScratchAPtr?i.getScratchAPtr():16384,a=i.getScratchBPtr?i.getScratchBPtr():18432,r=new Float64Array(i.memory.buffer);for(let s=0;s<n;s++)r[(o>>3)+s]=t[s],r[(a>>3)+s]=e[s];return i.calculateStriationCorrelation(o,a,n)}function vt(t,e){const i=J(),n=Math.min(t.length,e.length,ye(i));if(n<=0)return 0;const o=i.getScratchAPtr?i.getScratchAPtr():16384,a=i.getScratchBPtr?i.getScratchBPtr():18432,r=new Float64Array(i.memory.buffer);for(let s=0;s<n;s++)r[(o>>3)+s]=t[s],r[(a>>3)+s]=e[s];return i.calculateGCMSCosineSimilarity(o,a,n)}function ye(t){return t.getScratchCapacity?t.getScratchCapacity():de}function at(t,e,i){const n=new Float64Array(t.memory.buffer);i.forEach(([o,a,r],s)=>{n[(e>>3)+s*3]=o,n[(e>>3)+s*3+1]=a,n[(e>>3)+s*3+2]=r})}function xt(t){const e=J(),i=Math.floor(ye(e)/3),n=t.slice(0,i).map(c=>[c.x,c.y,c.gammaDeg]),o=e.getScratchAPtr(),a=e.getScratchBPtr();at(e,o,n);const r=e.calculateAreaOfConvergence(o,n.length,a)===1,s=new Float64Array(e.memory.buffer,a,4);return{ok:r,x:s[0],y:s[1],rmsCm:s[2]}}function Et(t,e,i){const n=J(),o=Math.floor(ye(n)/3),a=t.slice(0,o).map(d=>[d.x,d.y,d.impactDeg]),r=n.getScratchAPtr(),s=n.getScratchBPtr();at(n,r,a);const c=n.calculateAreaOfOrigin(r,a.length,e,i,s),l=new Float64Array(n.memory.buffer,s,4);return{used:c,meanZ:l[0],stdDevZ:l[1],minZ:l[2],maxZ:l[3]}}function Ct(){const t=new ArrayBuffer(65536),e=new Float64Array(t);return{memory:{buffer:t},getScratchAPtr:()=>16384,getScratchBPtr:()=>18432,calculateHenssgePMI(i,n,o,a){if(i<=n)return 72;if(i>=37.2)return .1;const r=(i-n)/(37.2-n),c=1.2815/(Math.pow(o,.625)*a)-.0284;if(c<=0)return 0;let l=5;for(let d=0;d<40;d++){const p=Math.exp(-c*l),u=Math.exp(-5*c*l),m=1.25*p-.25*u-r,h=-1.25*c*p+1.25*c*u;if(Math.abs(h)<1e-12)break;const g=l-m/h;if(Math.abs(g-l)<.001){l=g;break}l=g}return Math.max(0,l)},calculateVitreousPMI(i){return i<5.8?.5:Math.max(0,5.26*i-30.9)},calculateBloodImpactAngle(i,n){if(n<=0||i<=0)return 90;const o=Math.min(1,i/n);return Math.asin(o)*(180/Math.PI)},calculateStriationCorrelation(i,n,o){if(o<=1)return 0;const a=e.subarray(i>>3,(i>>3)+o),r=e.subarray(n>>3,(n>>3)+o);let s=0,c=0;for(let m=0;m<o;m++)s+=a[m],c+=r[m];s/=o,c/=o;let l=0,d=0,p=0;for(let m=0;m<o;m++){const h=a[m]-s,g=r[m]-c;l+=h*g,d+=h*h,p+=g*g}const u=Math.sqrt(d*p);return u<1e-12?0:l/u},calculateGCMSCosineSimilarity(i,n,o){if(o<=0)return 0;let a=0,r=0,s=0;for(let l=0;l<o;l++){const d=e[(i>>3)+l],p=e[(n>>3)+l];a+=d*p,r+=d*d,s+=p*p}const c=Math.sqrt(r)*Math.sqrt(s);return c<1e-12?0:a/c},calculateAreaOfConvergence(i,n,o){const a=o>>3;if(e.fill(0,a,a+4),n<2||n>de/3)return 0;let r=0,s=0,c=0,l=0,d=0;for(let g=0;g<n;g++){const b=(i>>3)+g*3,x=e[b],k=e[b+1],H=e[b+2]*Math.PI/180;if(!Number.isFinite(x)||!Number.isFinite(k)||!Number.isFinite(H))return 0;const U=Math.cos(H),F=Math.sin(H),G=1-U*U,V=-U*F,$=1-F*F;r+=G,s+=V,c+=$,l+=G*x+V*k,d+=V*x+$*k}const p=r*c-s*s;if(p/(n*n)<5e-4)return 0;const u=(c*l-s*d)/p,m=(r*d-s*l)/p;let h=0;for(let g=0;g<n;g++){const b=(i>>3)+g*3,x=e[b+2]*Math.PI/180,k=(u-e[b])*Math.sin(x)-(m-e[b+1])*Math.cos(x);h+=k*k}return e[a]=u,e[a+1]=m,e[a+2]=Math.sqrt(h/n),e[a+3]=p,1},calculateAreaOfOrigin(i,n,o,a,r){const s=r>>3;if(e.fill(0,s,s+4),n<=0||n>de/3)return 0;const c=[];for(let u=0;u<n;u++){const m=(i>>3)+u*3,h=e[m+2];if(!(h>0&&h<90))continue;const g=Math.hypot(e[m]-o,e[m+1]-a)*Math.tan(h*Math.PI/180);Number.isFinite(g)&&c.push(g)}const l=c.length;if(l===0)return 0;const d=c.reduce((u,m)=>u+m,0)/l,p=c.reduce((u,m)=>u+(m-d)*(m-d),0);return e[s]=d,e[s+1]=Math.sqrt(p/l),e[s+2]=Math.min(...c),e[s+3]=Math.max(...c),l},getScratchCapacity(){return de},evaluateSTRLocus(i,n,o,a,r){return r>=3?2:i===0&&n===0?3:(i===o||i===a)&&(n===o||n===a)?1:0},getEngineVersion(){return 20261120}}}const Z=400,W=300,ue=3;function kt(t){let e=2166136261;for(let i=0;i<t.length;i++)e^=t.charCodeAt(i),e=Math.imul(e,16777619)>>>0;return e>>>0}function wt(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function St(t){const e=`${t.sceneDescriptionEn??""} ${t.briefingEn??""}`.toLowerCase();return/spatter|bloodstain|blood stain/.test(e)}function Tt(t,e){const i=`${t.sceneDescriptionEn??""} ${t.briefingEn??""}`.toLowerCase();return/seated|chair|desk|workstation|sitting/.test(i)?105+e()*15:/lying|bed|floor|supine|prone/.test(i)?25+e()*20:95+e()*65}const At=t=>(t%360+360)%360;function Mt(t,e=7){const i=wt(kt(`bpa:${t.id}`)),n={x:150+i()*100,y:110+i()*80,z:Tt(t,i)},o=i()*360,a=[];for(let r=0;r<e;r++){const s=(r/Math.max(1,e-1)-.5)*150,c=o+s+(i()-.5)*8;let l=55+i()*140;const d=c*Math.PI/180;for(let b=0;b<20;b++){const x=n.x+l*Math.cos(d),k=n.y+l*Math.sin(d);if(x>10&&x<Z-10&&k>10&&k<W-10)break;l*=.85}const p=n.x+l*Math.cos(d),u=n.y+l*Math.sin(d),m=Math.atan(n.z/l),h=4+i()*5,g=Math.max(.5,h*Math.sin(m)*(1+(i()-.5)*.04));a.push({id:`S${r+1}`,x:Math.round(p*10)/10,y:Math.round(u*10)/10,lengthMm:Math.round(h*10)/10,widthMm:Math.round(Math.min(g,h)*10)/10,gammaDeg:Math.round(At(c+(i()-.5)*3))})}return{caseId:t.id,documented:St(t),origin:n,stains:a}}function Pe(t,e){return J().calculateBloodImpactAngle(t,e)}function $t(t){return t<55?"floor":t<95?"kneeling":t<135?"seated":"standing"}function Se(t,e){return e?{floor:"바닥 높이 (누운 자세)",kneeling:"무릎 꿇은 자세",seated:"앉은 자세",standing:"선 자세"}[t]:{floor:"Floor level (lying)",kneeling:"Kneeling or crouching",seated:"Seated",standing:"Standing"}[t]}function Lt(t,e){const i=new Map(t.stains.map(r=>[r.id,r])),n=[];for(const r of e){const s=i.get(r.stainId);s&&n.push({x:s.x,y:s.y,gammaDeg:r.gammaDeg,impactDeg:r.impactDeg})}if(n.length<ue)return null;const o=xt(n);if(!o.ok)return null;const a=Et(n,o.x,o.y);return a.used===0?null:{convergence:o,origin:a,posture:$t(a.meanZ),planarErrorCm:Math.hypot(o.x-t.origin.x,o.y-t.origin.y),heightErrorCm:a.meanZ-t.origin.z,stainsUsed:n.length}}function ot(t){return t.planarErrorCm<=15&&Math.abs(t.heightErrorCm)<=20?"excellent":t.planarErrorCm<=35&&Math.abs(t.heightErrorCm)<=45?"acceptable":"poor"}class It{currentCase;currentStation="scene";gloveIntegrity=100;contaminationFlags=[];contaminatedEvidenceIds=new Set;microscopyStageOffset=-6;activeAls="white";activeTool="scale";collectedEvidenceIds=new Set;autopsyState={liverTempMeasured:!1,calculatedHenssgePmi:0,vitreousKMeasured:!1,calculatedVitreousPmi:0,lividityTested:!1,lividityBlanched:!1,rigorMortisAssessed:!1,woundMeasured:!1,femoralBloodDrawn:!1,subungualScraped:!1,internalOrgansWeighed:!1};labState={kmTested:!1,takayamaTested:!1,dnaAnalyzed:!1,gcmsPeakSelected:0,gcmsNistMatched:!1,gcmsCosineScore:0,ballisticsAligned:!1,ballisticsCorrelation:0};inquestProgress={currentQuestionIdx:0,correctCount:0,answeredMap:new Map,completed:!1};bpaMeasurements=new Map;bpaResult=null;bpaSceneCache=null;inquestAnswers=new Map;inquestCompleted=!1;inquestScore=0;listeners=[];constructor(){this.currentCase=L[0]}subscribe(e){this.listeners.push(e)}notify(){for(const e of this.listeners)e()}setCase(e,i){const n=L.find(o=>o.id===e);return!n||n.isProOnly&&!i?!1:(this.currentCase=n,this.resetCaseState(),this.notify(),!0)}resetCaseState(){this.collectedEvidenceIds.clear(),this.contaminatedEvidenceIds.clear(),this.autopsyState={liverTempMeasured:!1,calculatedHenssgePmi:0,vitreousKMeasured:!1,calculatedVitreousPmi:0,lividityTested:!1,lividityBlanched:!1,rigorMortisAssessed:!1,woundMeasured:!1,femoralBloodDrawn:!1,subungualScraped:!1,internalOrgansWeighed:!1},this.labState={kmTested:!1,takayamaTested:!1,dnaAnalyzed:!1,gcmsPeakSelected:0,gcmsNistMatched:!1,gcmsCosineScore:0,ballisticsAligned:!1,ballisticsCorrelation:0},this.bpaMeasurements.clear(),this.bpaResult=null,this.bpaSceneCache=null,this.inquestAnswers.clear(),this.inquestCompleted=!1,this.inquestScore=0,this.inquestProgress={currentQuestionIdx:0,correctCount:0,answeredMap:new Map,completed:!1},this.gloveIntegrity=100,this.contaminationFlags=[]}answerInquestQuestion(e,i,n){this.inquestProgress.answeredMap.set(e,{chosen:i,isCorrect:n}),n&&this.inquestProgress.correctCount++,this.inquestProgress.currentQuestionIdx++,this.inquestProgress.currentQuestionIdx>=this.currentCase.inquest.length&&(this.inquestProgress.completed=!0,this.inquestCompleted=!0,this.inquestScore=this.inquestProgress.correctCount),this.notify()}restartInquest(){this.inquestProgress={currentQuestionIdx:0,correctCount:0,answeredMap:new Map,completed:!1},this.inquestCompleted=!1,this.inquestScore=0,this.notify()}getSpatterScene(){return(!this.bpaSceneCache||this.bpaSceneCache.caseId!==this.currentCase.id)&&(this.bpaSceneCache=Mt(this.currentCase)),this.bpaSceneCache}recordBpaMeasurement(e,i,n,o){if(!this.getSpatterScene().stains.some(c=>c.id===e)||!(i>0)||!(n>0)||!Number.isFinite(o))return null;const r=Math.min(i,n),s={stainId:e,widthMm:r,lengthMm:n,gammaDeg:(o%360+360)%360,impactDeg:Pe(r,n)};return this.bpaMeasurements.set(e,s),this.bpaResult=null,this.notify(),s}removeBpaMeasurement(e){this.bpaMeasurements.delete(e)&&(this.bpaResult=null,this.notify())}computeBpaReconstruction(){return this.bpaResult=Lt(this.getSpatterScene(),[...this.bpaMeasurements.values()]),this.notify(),this.bpaResult}setStation(e){this.currentStation=e,this.notify()}setAls(e){this.activeAls=e,this.notify()}setTool(e){this.activeTool=e,this.notify()}changeGloves(){this.gloveIntegrity=100,this.notify()}collectEvidence(e){const i=this.currentCase.evidenceItems.find(n=>n.id===e);if(!i)return{success:!1,message:"Item not found"};if(i.alsRequired!=="white"&&this.activeAls!==i.alsRequired)return{success:!1,message:w()==="ko"?`육안으로는 보이지 않습니다. 적절한 특수 광원(ALS: ${i.alsRequired.toUpperCase()})과 필터 고글이 필요합니다.`:`Invisible to naked eye. Alternate Light Source (${i.alsRequired.toUpperCase()}) required.`};if(this.gloveIntegrity<=15){this.contaminatedEvidenceIds.add(e);const n=`Contaminated gloves handled ${i.id} (<15% integrity)`;this.contaminationFlags.includes(n)||this.contaminationFlags.push(n)}if(this.activeTool!==i.requiredTool){this.gloveIntegrity=Math.max(0,this.gloveIntegrity-30),this.contaminatedEvidenceIds.add(e);const n=`Improper packaging on ${i.id} (used ${this.activeTool}, required ${i.requiredTool})`;return this.contaminationFlags.includes(n)||this.contaminationFlags.push(n),this.notify(),{success:!1,message:w()==="ko"?`잘못된 도구/보관함 사용! 증거물 오염 위험 (${i.requiredTool} 필요).`:`Improper tool selection! Evidence contaminated (requires ${i.requiredTool}).`}}return i.collected=!0,this.collectedEvidenceIds.add(e),this.gloveIntegrity=Math.max(10,this.gloveIntegrity-8),this.notify(),{success:!0,message:w()==="ko"?`${i.nameKo} 정상 수거 및 연쇄보관(Chain of Custody) 등록 완료.`:`${i.nameEn} collected and registered in chain of custody.`}}measureLiverTemp(){const e=J(),i=this.currentCase.victim,n=e.calculateHenssgePMI(i.coreLiverTempC,this.currentCase.ambientTempC,i.weightKg,i.clothingFactor);return this.autopsyState.liverTempMeasured=!0,this.autopsyState.calculatedHenssgePmi=n,this.notify(),n}measureVitreousK(){const e=J(),i=this.currentCase.victim,n=e.calculateVitreousPMI(i.vitreousPotassiumMmolL);return this.autopsyState.vitreousKMeasured=!0,this.autopsyState.calculatedVitreousPmi=n,this.notify(),n}testLividity(){const e=this.currentCase.victim;return this.autopsyState.lividityTested=!0,this.autopsyState.lividityBlanched=!e.isLividityFixed,this.notify(),this.autopsyState.lividityBlanched}assessRigorMortis(){this.autopsyState.rigorMortisAssessed=!0,this.notify()}measureWound(){this.autopsyState.woundMeasured=!0,this.notify()}weighInternalOrgans(){this.autopsyState.internalOrgansWeighed=!0,this.notify()}drawFemoralBlood(){this.autopsyState.femoralBloodDrawn=!0,this.notify()}scrapeSubungual(){this.autopsyState.subungualScraped=!0,this.notify()}runKMTest(){this.labState.kmTested=!0,this.notify()}runTakayamaTest(){this.labState.takayamaTested=!0,this.notify()}runDNAAnalysis(){this.labState.dnaAnalyzed=!0,this.notify()}selectGCMSPeak(e){this.labState.gcmsPeakSelected=e;const i=this.currentCase.lab.gcms[e]||this.currentCase.lab.gcms[0];if(i){const n=i.mzPeaks.map(a=>a.intensity),o=i.nistStandardPeaks.map(a=>a.intensity);this.labState.gcmsCosineScore=vt(n,o),this.labState.gcmsNistMatched=!0}this.notify()}getComparisonMicroscopyData(){if(this.currentCase.lab.ballistics)return{titleKo:"총기 강선흔 및 탄도 선조 대조 (Ballistic Striations)",titleEn:"Firearm Rifling Land & Groove Striation Comparison",caliber:this.currentCase.lab.ballistics.caliber,profileA:this.currentCase.lab.ballistics.recoveredBulletProfile,profileB:this.currentCase.lab.ballistics.seizedGunBulletProfile};const e=this.currentCase.number*37,i=32,n=[],o=[];for(let a=0;a<i;a++){const r=Math.sin((a+e)*.7)*40+Math.cos(a*1.3+e)*30+100;n.push(Math.round(r*10)/10),o.push(Math.round((r+Math.sin(a*2.1)*2.5)*10)/10)}return{titleKo:`${this.currentCase.number}호 사건 압수 공구흔 및 잠재 미세선조 대조 (Toolmark / Striations)`,titleEn:`Case #${this.currentCase.number} Seized Toolmark & Micro-Striation Profiling`,caliber:"TOOLMARK / STRIATION PROFILE",profileA:n,profileB:o}}setMicroscopyOffset(e){this.microscopyStageOffset=Math.max(-10,Math.min(10,e));const i=this.getComparisonMicroscopyData(),n=this.shiftProfile(i.profileB,this.microscopyStageOffset),o=Be(i.profileA,n);this.labState.ballisticsCorrelation=o,this.microscopyStageOffset===0&&(this.labState.ballisticsAligned=!0),this.notify()}shiftProfile(e,i){const n=e.length,o=new Array(n);for(let a=0;a<n;a++){const r=a+i;r>=0&&r<n?o[a]=e[r]:o[a]=(e[0]+e[n-1])/2+Math.sin(a*3.5)*15}return o}alignBallistics(){this.microscopyStageOffset=0;const e=this.getComparisonMicroscopyData(),i=Be(e.profileA,e.profileB);this.labState.ballisticsAligned=!0,this.labState.ballisticsCorrelation=i,this.notify()}canEnterInquest(){const e=[],i=[];return this.collectedEvidenceIds.size<Math.min(2,this.currentCase.evidenceItems.length)&&(e.push("현장 증거물 수집 미완료 (최소 2점 이상 수거 필요)"),i.push("Scene evidence collection incomplete (at least 2 items required)")),(!this.autopsyState.liverTempMeasured||!this.autopsyState.vitreousKMeasured)&&(e.push("사후경과시간(Henssge/초자체 K+) 체온/이온 계측 미완료"),i.push("PMI thermometry and vitreous K+ measurements incomplete")),(!this.autopsyState.lividityTested||!this.autopsyState.woundMeasured)&&(e.push("시반 압박탈색 시험 및 창상 캘리퍼스 정밀 계측 미완료"),i.push("Livor mortis blanch test and wound caliper measurement incomplete")),this.labState.kmTested||this.labState.dnaAnalyzed||this.labState.gcmsNistMatched||this.labState.ballisticsAligned||(e.push("과학수사 기기분석실 정밀 감정(혈청학, DNA, GC-MS, 탄도) 미완료"),i.push("Laboratory analytical testing (Serology, DNA, GC-MS, or Ballistics) incomplete")),{ready:e.length===0,missingKo:e,missingEn:i}}}const S=new It;/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Kt={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:T,n:pe,Gx:Ne,Gy:He,a:Ee,d:Ce}=Kt,Pt=8n,oe=32,Te=64,I=(t="")=>{throw new Error(t)},Dt=t=>typeof t=="bigint",rt=t=>typeof t=="string",qt=t=>t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array",ne=(t,e)=>!qt(t)||typeof e=="number"&&e>0&&t.length!==e?I("Uint8Array expected"):t,be=t=>new Uint8Array(t),De=t=>Uint8Array.from(t),st=(t,e)=>t.toString(16).padStart(e,"0"),qe=t=>Array.from(ne(t)).map(e=>st(e,2)).join(""),z={_0:48,_9:57,A:65,F:70,a:97,f:102},Ge=t=>{if(t>=z._0&&t<=z._9)return t-z._0;if(t>=z.A&&t<=z.F)return t-(z.A-10);if(t>=z.a&&t<=z.f)return t-(z.a-10)},Re=t=>{const e="hex invalid";if(!rt(t))return I(e);const i=t.length,n=i/2;if(i%2)return I(e);const o=be(n);for(let a=0,r=0;a<n;a++,r+=2){const s=Ge(t.charCodeAt(r)),c=Ge(t.charCodeAt(r+1));if(s===void 0||c===void 0)return I(e);o[a]=s*16+c}return o},me=(t,e)=>ne(rt(t)?Re(t):De(ne(t)),e),ct=()=>globalThis?.crypto,Rt=()=>ct()?.subtle??I("crypto.subtle must be defined"),Ae=(...t)=>{const e=be(t.reduce((n,o)=>n+ne(o).length,0));let i=0;return t.forEach(n=>{e.set(n,i),i+=n.length}),e},Ft=(t=oe)=>ct().getRandomValues(be(t)),fe=BigInt,Y=(t,e,i,n="bad number: out of range")=>Dt(t)&&e<=t&&t<i?t:I(n),f=(t,e=T)=>{const i=t%e;return i>=0n?i:e+i},_t=t=>f(t,pe),lt=(t,e)=>{(t===0n||e<=0n)&&I("no inverse n="+t+" mod="+e);let i=f(t,e),n=e,o=0n,a=1n;for(;i!==0n;){const r=n/i,s=n%i,c=o-a*r;n=i,i=s,o=a,a=c}return n===1n?f(o,e):I("no inverse")},Ve=t=>t instanceof M?t:I("Point expected"),Me=2n**256n;class M{static BASE;static ZERO;ex;ey;ez;et;constructor(e,i,n,o){const a=Me;this.ex=Y(e,0n,a),this.ey=Y(i,0n,a),this.ez=Y(n,1n,a),this.et=Y(o,0n,a),Object.freeze(this)}static fromAffine(e){return new M(e.x,e.y,1n,f(e.x*e.y))}static fromBytes(e,i=!1){const n=Ce,o=De(ne(e,oe)),a=e[31];o[31]=a&-129;const r=Fe(o);Y(r,0n,i?Me:T);const c=f(r*r),l=f(c-1n),d=f(n*c+1n);let{isValid:p,value:u}=Bt(l,d);p||I("bad point: y not sqrt");const m=(u&1n)===1n,h=(a&128)!==0;return!i&&u===0n&&h&&I("bad point: x==0, isLastByteOdd"),h!==m&&(u=f(-u)),new M(u,r,1n,f(u*r))}assertValidity(){const e=Ee,i=Ce,n=this;if(n.is0())throw new Error("bad point: ZERO");const{ex:o,ey:a,ez:r,et:s}=n,c=f(o*o),l=f(a*a),d=f(r*r),p=f(d*d),u=f(c*e),m=f(d*f(u+l)),h=f(p+f(i*f(c*l)));if(m!==h)throw new Error("bad point: equation left != right (1)");const g=f(o*a),b=f(r*s);if(g!==b)throw new Error("bad point: equation left != right (2)");return this}equals(e){const{ex:i,ey:n,ez:o}=this,{ex:a,ey:r,ez:s}=Ve(e),c=f(i*s),l=f(a*o),d=f(n*s),p=f(r*o);return c===l&&d===p}is0(){return this.equals(te)}negate(){return new M(f(-this.ex),this.ey,this.ez,f(-this.et))}double(){const{ex:e,ey:i,ez:n}=this,o=Ee,a=f(e*e),r=f(i*i),s=f(2n*f(n*n)),c=f(o*a),l=e+i,d=f(f(l*l)-a-r),p=c+r,u=p-s,m=c-r,h=f(d*u),g=f(p*m),b=f(d*m),x=f(u*p);return new M(h,g,x,b)}add(e){const{ex:i,ey:n,ez:o,et:a}=this,{ex:r,ey:s,ez:c,et:l}=Ve(e),d=Ee,p=Ce,u=f(i*r),m=f(n*s),h=f(a*p*l),g=f(o*c),b=f((i+n)*(r+s)-u-m),x=f(g-h),k=f(g+h),H=f(m-d*u),U=f(b*x),F=f(k*H),G=f(b*H),V=f(x*k);return new M(U,F,V,G)}multiply(e,i=!0){if(!i&&(e===0n||this.is0()))return te;if(Y(e,1n,pe),e===1n)return this;if(this.equals(ae))return Yt(e).p;let n=te,o=ae;for(let a=this;e>0n;a=a.double(),e>>=1n)e&1n?n=n.add(a):i&&(o=o.add(a));return n}toAffine(){const{ex:e,ey:i,ez:n}=this;if(this.equals(te))return{x:0n,y:1n};const o=lt(n,T);return f(n*o)!==1n&&I("invalid inverse"),{x:f(e*o),y:f(i*o)}}toBytes(){const{x:e,y:i}=this.assertValidity().toAffine(),n=Ot(i);return n[31]|=e&1n?128:0,n}toHex(){return qe(this.toBytes())}clearCofactor(){return this.multiply(fe(Pt),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let e=this.multiply(pe/2n,!1).double();return pe%2n&&(e=e.add(this)),e.is0()}static fromHex(e,i){return M.fromBytes(me(e),i)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}toRawBytes(){return this.toBytes()}}const ae=new M(Ne,He,1n,f(Ne*He)),te=new M(0n,1n,1n,0n);M.BASE=ae;M.ZERO=te;const Ot=t=>Re(st(Y(t,0n,Me),Te)).reverse(),Fe=t=>fe("0x"+qe(De(ne(t)).reverse())),D=(t,e)=>{let i=t;for(;e-- >0n;)i*=i,i%=T;return i},zt=t=>{const i=t*t%T*t%T,n=D(i,2n)*i%T,o=D(n,1n)*t%T,a=D(o,5n)*o%T,r=D(a,10n)*a%T,s=D(r,20n)*r%T,c=D(s,40n)*s%T,l=D(c,80n)*c%T,d=D(l,80n)*c%T,p=D(d,10n)*a%T;return{pow_p_5_8:D(p,2n)*t%T,b2:i}},We=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Bt=(t,e)=>{const i=f(e*e*e),n=f(i*i*e),o=zt(t*n).pow_p_5_8;let a=f(t*i*o);const r=f(e*a*a),s=a,c=f(a*We),l=r===t,d=r===f(-t),p=r===f(-t*We);return l&&(a=s),(d||p)&&(a=c),(f(a)&1n)===1n&&(a=f(-a)),{isValid:l||d,value:a}},Nt=t=>_t(Fe(t)),Ht=(...t)=>Ut.sha512Async(...t),Gt=t=>Ht(t.hashable).then(t.finish),dt={zip215:!0},Vt=(t,e,i,n=dt)=>{t=me(t,Te),e=me(e),i=me(i,oe);const{zip215:o}=n;let a,r,s,c,l=Uint8Array.of();try{a=M.fromHex(i,o),r=M.fromHex(t.slice(0,oe),o),s=Fe(t.slice(oe,Te)),c=ae.multiply(s,!1),l=Ae(r.toBytes(),a.toBytes(),e)}catch{}return{hashable:l,finish:p=>{if(c==null||!o&&a.isSmallOrder())return!1;const u=Nt(p);return r.add(a.multiply(u,!1)).add(c.negate()).clearCofactor().is0()}}},Wt=async(t,e,i,n=dt)=>Gt(Vt(t,e,i,n)),Ut={sha512Async:async(...t)=>{const e=Rt(),i=Ae(...t);return be(await e.digest("SHA-512",i.buffer))},sha512Sync:void 0,bytesToHex:qe,hexToBytes:Re,concatBytes:Ae,mod:f,invert:lt,randomBytes:Ft},ge=8,jt=256,ut=Math.ceil(jt/ge)+1,$e=2**(ge-1),Zt=()=>{const t=[];let e=ae,i=e;for(let n=0;n<ut;n++){i=e,t.push(i);for(let o=1;o<$e;o++)i=i.add(e),t.push(i);e=i.double()}return t};let Ue;const je=(t,e)=>{const i=e.negate();return t?i:e},Yt=t=>{const e=Ue||(Ue=Zt());let i=te,n=ae;const o=2**ge,a=o,r=fe(o-1),s=fe(ge);for(let c=0;c<ut;c++){let l=Number(t&r);t>>=s,l>$e&&(l-=a,t+=1n);const d=c*$e,p=d,u=d+Math.abs(l)-1,m=c%2!==0,h=l<0;l===0?n=n.add(je(m,e[p])):i=i.add(je(h,e[u]))}return{p:i,f:n}},Qt="J3xR-NL4doRwHYUWohDdmt-Lrjog7M4A8fGx7rDT8c8",he="hematite_license_key",Ze=["revoked-sample@police.gov.kr"];function ke(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),i=e.padEnd(e.length+(4-e.length%4)%4,"="),n=atob(i),o=new Uint8Array(n.length);for(let a=0;a<n.length;a++)o[a]=n.charCodeAt(a);return o}async function Le(t,e=Qt){const i=t.trim(),n=/^HMT1-([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec(i);if(!n)return{isLicensed:!1,tier:"trial",error:"Invalid key format. Expected HMT1-<payload>.<sig>"};try{const o=ke(n[1]),a=ke(n[2]),r=ke(e);if(!await Wt(a,o,r))return{isLicensed:!1,tier:"trial",error:"Cryptographic signature verification failed"};const c=new TextDecoder().decode(o),l=JSON.parse(c);if(l.v!==1||l.ed!=="pro"&&l.ed!=="enterprise")return{isLicensed:!1,tier:"trial",error:"Unsupported license schema version or edition"};if(Ze.includes(l.e.toLowerCase())||Ze.includes(n[2].slice(0,16)))return{isLicensed:!1,tier:"trial",error:"This license has been revoked"};if(l.exp){const d=new Date(l.exp);if(new Date>d)return{isLicensed:!1,tier:"trial",error:`License expired on ${l.exp}`}}return{isLicensed:!0,tier:l.ed,licensee:l.n,email:l.e,issuedAt:l.iat,expiresAt:l.exp}}catch(o){return{isLicensed:!1,tier:"trial",error:o.message}}}async function Jt(){if(typeof window<"u"){const t=new URLSearchParams(window.location.search),e=t.get("license")||t.get("key");if(e){const n=await Le(e);if(n.isLicensed)return localStorage.setItem(he,e),n}const i=localStorage.getItem(he);if(i){const n=await Le(i);if(n.isLicensed)return n;localStorage.removeItem(he)}}return{isLicensed:!1,tier:"trial"}}function Xt(t){localStorage.setItem(he,t.trim())}function ei(t,e,i,n,o,a){const r=document.createElement("header");r.className="hematite-header";const s=w()==="ko";function c(d,p){const u=document.createElement("dialog");u.className="hematite-modal inquest-notice-modal";const m=s?d.map(h=>`<li>⚠️ ${h}</li>`).join(""):p.map(h=>`<li>⚠️ ${h}</li>`).join("");u.innerHTML=`
      <div class="modal-card">
        <div class="modal-header">
          <h3>⚖️ ${s?"검시 공청회 출두 요건 미달":"Inquest Hearing Protocol Incomplete"}</h3>
          <button class="modal-close-btn">✕</button>
        </div>
        <div class="modal-body">
          <p style="color: #ff6b81; font-weight: bold; margin-bottom: 12px;">
            ${s?"법정 증언 및 검시 공청회에 출두하기 위해서는 아래 필수 과학수사 절차를 모두 완수해야 합니다:":"Before testifying in court, you must complete the following mandatory forensic protocols:"}
          </p>
          <ul style="background: rgba(0,0,0,0.3); padding: 14px 20px; border-radius: 6px; border: 1px solid rgba(255,107,129,0.3); list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${m}
          </ul>
          <p style="color: var(--text-muted); font-size: 13px; margin-top: 14px;">
            ${s?"💡 현장 감식(증거 수거), 법의 부검(체온/시반/창상 계측), 국과수 정밀 분석(독극물/DNA)을 먼저 완료하십시오.":"💡 Complete Crime Scene (evidence), Autopsy (PMI/wounds), and Crime Lab (toxicology/DNA) first."}
          </p>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: flex-end; margin-top: 16px;">
          <button class="btn-primary" id="btn-close-inquest-notice">
            ${s?"확인 (수사 계속하기)":"Acknowledge (Continue)"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(u),u.showModal(),u.querySelector(".modal-close-btn")?.addEventListener("click",()=>{u.close(),u.remove()}),u.querySelector("#btn-close-inquest-notice")?.addEventListener("click",()=>{u.close(),u.remove()}),u.addEventListener("click",h=>{h.target===u&&(u.close(),u.remove())})}r.innerHTML=`
    <div class="header-left">
      <div class="brand">
        <span class="brand-gem">🩸</span>
        <div>
          <h1 class="brand-title">HEMATITE</h1>
          <span class="brand-sub">${s?"법의과학 수사 시뮬레이터":"Forensic Investigation Simulator"}</span>
        </div>
      </div>

      <div class="case-selector-box">
        <label for="case-select">CASE:</label>
        <select id="case-select" class="case-dropdown">
          ${L.map(d=>{const p=d.isProOnly&&!e.isLicensed,u=s?d.titleKo:d.titleEn,m=d.id===t.currentCase.id?"selected":"";return`<option value="${d.id}" ${p?'data-locked="true"':""} ${m}>
              ${p?"🔒 ":"✓ "}${u}
            </option>`}).join("")}
        </select>
        <button id="btn-browse-cases" class="btn-micro" title="${s?`${L.length}개 사건 전체 목록 보기`:`Browse All ${L.length} Cases`}">
          📂 ${s?`사건 목록 (${L.length})`:`Cases (${L.length})`}
        </button>
      </div>
    </div>

    <nav class="station-nav">
      <button class="nav-tab ${t.currentStation==="scene"?"active":""}" data-station="scene">
        🔍 ${y("stationScene")}
      </button>
      <button class="nav-tab ${t.currentStation==="autopsy"?"active":""}" data-station="autopsy">
        🫀 ${y("stationAutopsy")}
      </button>
      <button class="nav-tab ${t.currentStation==="lab"?"active":""}" data-station="lab">
        🔬 ${y("stationLab")}
      </button>
      <button class="nav-tab ${t.currentStation==="binder"?"active":""}" data-station="binder">
        📁 ${y("stationBinder")}
      </button>
      <button class="nav-tab ${t.currentStation==="inquest"?"active":""}" data-station="inquest">
        ⚖️ ${y("stationInquest")}
      </button>
    </nav>

    <div class="header-right">
      <div class="glove-meter" title="${y("gloveIntegrity")}">
        <span class="glove-label">🧤 ${t.gloveIntegrity}%</span>
        <div class="glove-bar-track">
          <div class="glove-bar-fill ${t.gloveIntegrity<40?"critical":t.gloveIntegrity<70?"warning":"good"}" 
               style="width: ${t.gloveIntegrity}%;"></div>
        </div>
        <button id="btn-change-gloves" class="btn-micro" title="${y("changeGloves")}">🔄</button>
      </div>

      <button id="btn-license-badge" class="license-pill ${e.isLicensed?"pro":"trial"}">
        ${e.isLicensed?e.tier==="enterprise"?"🏢 Enterprise":"⭐ Pro Active":"⚡ Trial Mode"}
      </button>

      <button id="btn-lang-toggle" class="btn-lang">
        ${s?"🌐 한국어":"🌐 English"}
      </button>
    </div>
  `,r.querySelectorAll(".nav-tab").forEach(d=>{d.addEventListener("click",p=>{const u=p.currentTarget.dataset.station;if(u){if(u==="inquest"){const m=t.canEnterInquest();if(!m.ready){c(m.missingKo,m.missingEn);return}}t.setStation(u)}})});const l=r.querySelector("#case-select");return l.addEventListener("change",()=>{const d=l.value;t.setCase(d,e.isLicensed)||(a&&a(s?"🔒 이 사건은 Pro 정품 라이선스가 필요합니다. 라이선스를 활성화해주세요.":"🔒 This case requires a Pro License. Please activate your license key.","bad"),l.value=t.currentCase.id,i())}),r.querySelector("#btn-browse-cases")?.addEventListener("click",n),r.querySelector("#btn-change-gloves")?.addEventListener("click",()=>{t.changeGloves()}),r.querySelector("#btn-license-badge")?.addEventListener("click",i),r.querySelector("#btn-lang-toggle")?.addEventListener("click",()=>{yt(s?"en":"ko"),o()}),r}class ti{ctx=null;enabled=!0;initContext(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playShutter(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.08),i.gain.setValueAtTime(.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.09)}playAlsClick(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(440,this.ctx.currentTime+.05),i.gain.setValueAtTime(.2,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.05),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.06)}playSyringe(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.sampleRate*.15,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);for(let r=0;r<e;r++)n[r]=(Math.random()*2-1)*Math.exp(-r/(e*.5));const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createGain();a.gain.setValueAtTime(.15,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.15),o.connect(a),a.connect(this.ctx.destination),o.start()}playReaction(){if(!this.enabled||(this.initContext(),!this.ctx))return;[523.25,659.25,783.99].forEach((i,n)=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(i,this.ctx.currentTime+n*.06),a.gain.setValueAtTime(.15,this.ctx.currentTime+n*.06),a.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.06+.25),o.connect(a),a.connect(this.ctx.destination),o.start(this.ctx.currentTime+n*.06),o.stop(this.ctx.currentTime+n*.06+.26)})}playGavel(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(90,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+.18),i.gain.setValueAtTime(.5,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.18),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.2)}playThermometerBeep(){this.enabled&&(this.initContext(),this.ctx&&[2e3,2e3].forEach((e,i)=>{if(!this.ctx)return;const n=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime+i*.12),o.gain.setValueAtTime(.2,this.ctx.currentTime+i*.12),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+i*.12+.08),n.connect(o),o.connect(this.ctx.destination),n.start(this.ctx.currentTime+i*.12),n.stop(this.ctx.currentTime+i*.12+.09)}))}playPageFlip(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.sampleRate*.08,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);for(let s=0;s<e;s++)n[s]=(Math.random()*2-1)*Math.sin(s/e*Math.PI)*.25;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1400,this.ctx.currentTime);const r=this.ctx.createGain();r.gain.setValueAtTime(.18,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),o.connect(a),a.connect(r),r.connect(this.ctx.destination),o.start()}playLoupeZoom(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(450,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.09),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.09),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.1)}playObjection(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(180,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(45,this.ctx.currentTime+.35),i.gain.setValueAtTime(.4,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.35),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.36)}playSealSnap(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(1600,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.04),i.gain.setValueAtTime(.2,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.04),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}playMicroscopeDial(){if(!this.enabled||(this.initContext(),!this.ctx))return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(550,this.ctx.currentTime+.03),i.gain.setValueAtTime(.12,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.03),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playMatchLock(){this.enabled&&(this.initContext(),this.ctx&&[587.33,880,1174.66].forEach((e,i)=>{if(!this.ctx)return;const n=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime+i*.05),o.gain.setValueAtTime(.15,this.ctx.currentTime+i*.05),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+i*.05+.35),n.connect(o),o.connect(this.ctx.destination),n.start(this.ctx.currentTime+i*.05),n.stop(this.ctx.currentTime+i*.05+.36)}))}}const v=new ti;function ii(t,e,i){const n=`
    <pattern id="bp-small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56, 189, 248, 0.08)" stroke-width="0.75" />
    </pattern>
    <pattern id="bp-large-grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#bp-small-grid)" />
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(56, 189, 248, 0.18)" stroke-width="1.5" />
    </pattern>
    <filter id="uv-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  `;function o(r,s,c=0,l="변사자 발견 위치 (Decedent Position)"){return`
      <g transform="translate(${r}, ${s}) rotate(${c})" class="victim-chalk-group">
        <circle cx="0" cy="-60" r="16" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <path d="M -18 -42 L 18 -42 L 14 15 L -14 15 Z" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <path d="M -18 -40 L -38 -20 L -30 10" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <path d="M 18 -40 L 38 -15 L 28 12" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <path d="M -10 15 L -18 55 L -26 85" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <path d="M 10 15 L 18 55 L 24 85" fill="none" stroke="#f1f2f6" stroke-width="2" stroke-dasharray="4,3" />
        <circle cx="0" cy="-10" r="3" fill="#ff4757" />
        <text x="0" y="105" text-anchor="middle" fill="#f1f2f6" font-size="10" font-family="monospace">
          [ ${l} ]
        </text>
      </g>
    `}let a="";switch(t){case 1:a=`
        <rect x="120" y="60" width="760" height="520" fill="none" stroke="#38bdf8" stroke-width="4" />
        <line x1="720" y1="60" x2="880" y2="60" stroke="#00f0ff" stroke-width="6" stroke-dasharray="12,6" />
        <text x="800" y="48" fill="#00f0ff" font-size="11" text-anchor="middle" font-family="monospace">TERRACE SLIDING GLASS DOOR (880mm)</text>
        <rect x="170" y="110" width="180" height="90" fill="#1e293b" stroke="#64748b" stroke-width="2" />
        <text x="260" y="155" fill="#94a3b8" font-size="11" text-anchor="middle">MAHOGANY DESK</text>
        <rect x="580" y="240" width="220" height="120" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="2" />
        <text x="690" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">LEATHER SOFA</text>
        <circle cx="390" cy="460" r="16" fill="none" stroke="#e056fd" stroke-width="2" />
        <text x="430" y="495" fill="#e056fd" font-size="10" font-family="monospace">OVERTURNED STOOL</text>
        <circle cx="480" cy="270" r="28" fill="none" stroke="#f6e58d" stroke-width="2" stroke-dasharray="5,4" />
        <text x="480" y="230" fill="#f6e58d" font-size="10" text-anchor="middle">CHANDELIER FIXTURE (H: 2.85m)</text>
        ${o(480,310,15,i?"변사자 이현우 발견 위치":"Decedant Lee Hyun-woo")}
      `;break;case 2:a=`
        <path d="M 80 120 Q 300 160 550 140 T 920 180" fill="none" stroke="rgba(56, 189, 248, 0.4)" stroke-width="2" stroke-dasharray="6,4" />
        <path d="M 80 500 Q 400 540 680 510 T 920 530" fill="none" stroke="rgba(56, 189, 248, 0.8)" stroke-width="2" stroke-dasharray="6,4" />
        <text x="120" y="540" fill="#38bdf8" font-size="11" font-family="monospace">WATER DEPTH: -6.2m SILT BED</text>
        <g transform="translate(360, 220) rotate(-15)">
          <rect x="0" y="0" width="300" height="150" rx="25" fill="#0f172a" stroke="#38bdf8" stroke-width="3" />
          <polygon points="50,15 100,15 90,135 50,135" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,2" />
          <text x="150" y="80" fill="#94a3b8" font-size="11" text-anchor="middle">SUBMERGED SEDAN</text>
          <line x1="90" y1="135" x2="60" y2="185" stroke="#f59e0b" stroke-width="3" />
          <line x1="220" y1="140" x2="260" y2="140" stroke="#ef4444" stroke-width="4" stroke-dasharray="4,2" />
        </g>
        ${o(490,290,-15,i?"운전석 사체 발견 위치":"Driver Seat Decedent")}
      `;break;case 3:a=`
        <rect x="140" y="80" width="720" height="480" fill="none" stroke="#38bdf8" stroke-width="4" />
        <rect x="180" y="120" width="260" height="100" fill="#1e293b" stroke="#10b981" stroke-width="3" />
        <text x="310" y="165" fill="#10b981" font-size="11" text-anchor="middle" font-weight="bold">BSL-2 FUME HOOD</text>
        <line x1="480" y1="360" x2="220" y2="280" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3" />
        <text x="340" y="310" fill="#ef4444" font-size="10" font-family="monospace">TRAJECTORY: 9MM DISTANT TEMPLE</text>
        ${o(510,370,-25,i?"변사자 최유진 박사 발견 위치":"Decedent Dr. Choi")}
      `;break;case 4:a=`
        <rect x="100" y="70" width="800" height="500" fill="none" stroke="#eab308" stroke-width="4" />
        <rect x="180" y="120" width="300" height="160" fill="#1e293b" stroke="#ef4444" stroke-width="3" />
        <text x="330" y="190" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">⚠️ ELECTROPLATING CYANIDE VAT (1,200L)</text>
        <rect x="560" y="120" width="260" height="120" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="690" y="180" fill="#38bdf8" font-size="11" text-anchor="middle">ACID RINSE BATH</text>
        <circle cx="280" cy="420" r="30" fill="#334155" stroke="#f59e0b" stroke-width="2" />
        <text x="280" y="425" fill="#f59e0b" font-size="10" text-anchor="middle">KCN DRUM</text>
        ${o(520,380,45,i?"도금조 측면 변사자 위치":"Plating Vat Decedent")}
      `;break;case 5:a=`
        <path d="M 50 150 Q 300 80 600 160 T 950 120" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="8,6" />
        <path d="M 50 350 Q 350 280 650 380 T 950 320" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="8,6" />
        <text x="120" y="120" fill="#cbd5e1" font-size="11" font-family="monospace">ELEVATION: 1,650m (BLIZZARD GULLY)</text>
        <polygon points="220,240 280,180 340,240" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="280" y="265" fill="#38bdf8" font-size="10" text-anchor="middle">EMERGENCY TENT</text>
        <rect x="420" y="320" width="40" height="30" fill="none" stroke="#ef4444" stroke-width="2" />
        <text x="440" y="365" fill="#ef4444" font-size="9" text-anchor="middle">DISCARDED PARKA</text>
        ${o(620,390,75,i?"이상탈의 동사자 위치":"Hypothermia Decedent")}
      `;break;case 6:a=`
        <rect x="120" y="60" width="760" height="520" fill="none" stroke="#38bdf8" stroke-width="3" />
        <line x1="120" y1="200" x2="880" y2="200" stroke="#f59e0b" stroke-width="5" />
        <text x="500" y="185" fill="#f59e0b" font-size="11" text-anchor="middle" font-family="monospace">18TH FL BALCONY RAILING (H: 1.15m)</text>
        <line x1="500" y1="200" x2="500" y2="440" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" />
        <circle cx="500" cy="450" r="35" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,2" />
        <text x="500" y="505" fill="#ef4444" font-size="10" text-anchor="middle">PAVEMENT IMPACT GROUND ZERO</text>
        ${o(500,450,0,i?"추락 지점 사체 위치":"Impact Decedent")}
      `;break;case 7:a=`
        <line x1="80" y1="220" x2="920" y2="220" stroke="#94a3b8" stroke-width="6" />
        <line x1="80" y1="360" x2="920" y2="360" stroke="#94a3b8" stroke-width="6" />
        <line x1="80" y1="180" x2="920" y2="180" stroke="#eab308" stroke-width="4" />
        <text x="500" y="170" fill="#eab308" font-size="11" font-family="monospace" text-anchor="middle">DANGER: 750V THIRD RAIL</text>
        <rect x="680" y="80" width="160" height="80" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="760" y="125" fill="#38bdf8" font-size="10" text-anchor="middle">MAINTENANCE ALCOVE</text>
        ${o(450,290,90,i?"선로 침목 사체 위치":"Track Bed Decedent")}
      `;break;case 8:a=`
        <rect x="140" y="80" width="720" height="480" fill="none" stroke="#38bdf8" stroke-width="4" />
        <rect x="220" y="140" width="360" height="180" rx="40" fill="#1e293b" stroke="#00f0ff" stroke-width="4" />
        <text x="400" y="235" fill="#00f0ff" font-size="12" text-anchor="middle">WHIRLPOOL SPA TUB</text>
        <rect x="680" y="140" width="90" height="120" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="725" y="205" fill="#f59e0b" font-size="10" text-anchor="middle">GFCI PANEL</text>
        <path d="M 680 220 Q 520 260 480 240" fill="none" stroke="#ef4444" stroke-width="3" />
        <text x="560" y="280" fill="#ef4444" font-size="9" font-family="monospace">HAIRDRYER CORD</text>
        ${o(400,230,0,i?"욕조 내 변사자 위치":"Bathtub Decedent")}
      `;break;case 15:a=`
        <rect x="100" y="70" width="800" height="500" fill="none" stroke="#38bdf8" stroke-width="3" />
        <rect x="200" y="140" width="240" height="200" fill="#1e293b" stroke="#ef4444" stroke-width="3" />
        <text x="320" y="245" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">INDUSTRIAL GAS BOILER</text>
        <line x1="440" y1="200" x2="680" y2="200" stroke="#f59e0b" stroke-width="8" />
        <line x1="560" y1="180" x2="560" y2="220" stroke="#ef4444" stroke-width="4" />
        <text x="560" y="165" fill="#ef4444" font-size="10" font-family="monospace" text-anchor="middle">CRIMPED FLUE PIPE</text>
        ${o(620,380,30,i?"보일러실 바닥 변사자":"Boiler Room Decedent")}
      `;break;case 18:a=`
        <line x1="60" y1="180" x2="940" y2="180" stroke="#f1f2f6" stroke-width="4" stroke-dasharray="20,15" />
        <line x1="60" y1="360" x2="940" y2="360" stroke="#f1f2f6" stroke-width="4" stroke-dasharray="20,15" />
        <line x1="200" y1="220" x2="480" y2="250" stroke="#1e293b" stroke-width="12" stroke-linecap="round" />
        <text x="340" y="210" fill="#94a3b8" font-size="10" font-family="monospace">SKID MARK (45.2 METERS)</text>
        <polygon points="520,220 720,240 680,360 480,340" fill="#0f172a" stroke="#ef4444" stroke-width="3" />
        <text x="600" y="295" fill="#ef4444" font-size="11" text-anchor="middle">CRUSHED CABIN</text>
        ${o(580,290,15,i?"운전석 압착 사체 위치":"Cockpit Decedent")}
      `;break;case 21:a=`
        <rect x="100" y="70" width="800" height="500" fill="none" stroke="#64748b" stroke-width="4" />
        <circle cx="500" cy="280" r="45" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="4" />
        <text x="500" y="285" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">BLAST CRATER (D: 1.8m)</text>
        <line x1="500" y1="280" x2="320" y2="400" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
        <line x1="500" y1="280" x2="680" y2="180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3" />
        <rect x="220" y="160" width="100" height="100" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
        <text x="270" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">CONCRETE PILLAR</text>
        ${o(360,420,-45,i?"후방 폭풍 피폭자 위치":"Blast Decedent")}
      `;break;case 22:a=`
        <circle cx="500" cy="320" r="220" fill="none" stroke="#00f0ff" stroke-width="5" />
        <rect x="420" y="90" width="160" height="30" fill="#1e293b" stroke="#00f0ff" stroke-width="3" />
        <text x="500" y="80" fill="#00f0ff" font-size="11" text-anchor="middle">HYPERBARIC PRESSURE HATCH (10 ATM)</text>
        <rect x="340" y="240" width="140" height="70" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="410" y="280" fill="#f59e0b" font-size="10" text-anchor="middle">GAS CONSOLE</text>
        ${o(560,360,20,i?"다이버 사체 위치":"Diver Decedent")}
      `;break;case 24:a=`
        <path d="M 320 100 Q 500 50 680 100 L 740 450 L 260 450 Z" fill="none" stroke="#38bdf8" stroke-width="4" />
        <polygon points="340,110 480,80 480,180 340,180" fill="#1e293b" stroke="#00f0ff" stroke-width="2" />
        <polygon points="520,80 660,110 660,180 520,180" fill="#1e293b" stroke="#00f0ff" stroke-width="2" />
        <text x="500" y="140" fill="#00f0ff" font-size="10" text-anchor="middle">WINDSHIELD</text>
        <rect x="360" y="220" width="80" height="90" rx="8" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
        <text x="400" y="270" fill="#94a3b8" font-size="9" text-anchor="middle">CAPTAIN</text>
        <rect x="560" y="220" width="80" height="90" rx="8" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
        <text x="600" y="270" fill="#94a3b8" font-size="9" text-anchor="middle">FIRST OFFICER</text>
        <rect x="460" y="200" width="80" height="150" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
        <text x="500" y="260" fill="#f59e0b" font-size="9" text-anchor="middle">THROTTLE</text>
        ${o(400,270,0,i?"기장석 변사자 위치":"Captain Seat Decedent")}
      `;break;case 26:a=`
        <rect x="140" y="80" width="720" height="480" fill="none" stroke="#38bdf8" stroke-width="4" />
        <rect x="340" y="180" width="220" height="300" rx="10" fill="#1e293b" stroke="#64748b" stroke-width="3" />
        <text x="450" y="210" fill="#94a3b8" font-size="11" text-anchor="middle">ICU PATIENT BED</text>
        <rect x="600" y="160" width="120" height="90" fill="#1e293b" stroke="#10b981" stroke-width="2" />
        <text x="660" y="210" fill="#10b981" font-size="10" text-anchor="middle">VENTILATOR</text>
        <circle cx="280" cy="220" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="280" y="225" fill="#38bdf8" font-size="8" text-anchor="middle">IV TREE</text>
        ${o(450,330,0,i?"환자 침상 사체 위치":"Bed Decedent")}
      `;break;case 28:a=`
        <rect x="120" y="60" width="760" height="520" fill="none" stroke="#eab308" stroke-width="6" />
        <rect x="180" y="60" width="140" height="25" fill="#334155" stroke="#ef4444" stroke-width="3" />
        <text x="250" y="77" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">HEAVY LEAD DOOR</text>
        <circle cx="500" cy="240" r="80" fill="#1e293b" stroke="#eab308" stroke-width="4" />
        <text x="500" y="245" fill="#eab308" font-size="11" font-weight="bold" text-anchor="middle">LINAC GANTRY</text>
        <rect x="420" y="320" width="160" height="180" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="500" y="415" fill="#38bdf8" font-size="10" text-anchor="middle">TREATMENT COUCH</text>
        ${o(500,410,0,i?"조사대 위 환자 위치":"Couch Decedent")}
      `;break;case 29:a=`
        <rect x="120" y="70" width="760" height="500" fill="none" stroke="#00f0ff" stroke-width="4" />
        <circle cx="260" cy="200" r="50" fill="#1e293b" stroke="#00f0ff" stroke-width="3" />
        <text x="260" y="205" fill="#00f0ff" font-size="10" text-anchor="middle">LN2 DEWAR (-196°C)</text>
        <circle cx="420" cy="200" r="50" fill="#1e293b" stroke="#00f0ff" stroke-width="3" />
        <text x="420" y="205" fill="#00f0ff" font-size="10" text-anchor="middle">LN2 DEWAR (-196°C)</text>
        <rect x="720" y="70" width="120" height="25" fill="#334155" stroke="#ef4444" stroke-width="3" />
        <text x="780" y="87" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">LOCKED BOLT</text>
        ${o(580,380,-30,i?"저장고 바닥 변사자":"Cryo Vault Decedent")}
      `;break;case 30:a=`
        <rect x="120" y="60" width="760" height="520" fill="none" stroke="#d97706" stroke-width="4" />
        <rect x="160" y="90" width="680" height="40" fill="#1e293b" stroke="#78350f" stroke-width="2" />
        <text x="500" y="115" fill="#d97706" font-size="11" text-anchor="middle">MAHOGANY BOOKCASES (SECRET ARCHIVE)</text>
        <rect x="740" y="160" width="100" height="80" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
        <text x="790" y="205" fill="#ef4444" font-size="10" text-anchor="middle">WALL SAFE</text>
        <rect x="360" y="260" width="220" height="110" fill="#1e293b" stroke="#92400e" stroke-width="2" />
        <text x="470" y="320" fill="#d97706" font-size="11" text-anchor="middle">AMBASSADOR DESK</text>
        ${o(470,440,0,i?"대사 서재 변사자 위치":"Ambassador Decedent")}
      `;break;default:a=`
        <rect x="120" y="70" width="760" height="500" fill="none" stroke="#38bdf8" stroke-width="3" />
        <rect x="128" y="78" width="744" height="484" fill="rgba(11, 15, 25, 0.45)" />
        <rect x="320" y="140" width="360" height="160" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2" />
        <text x="500" y="225" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="monospace">
          CASE #${t} CRIME SCENE WORKING PERIMETER
        </text>
        ${o(500,390,0,i?`사건 #${t} 변사자 위치`:`Case #${t} Decedent Position`)}
      `}return`
    <svg class="scene-blueprint-svg" viewBox="0 0 1000 650" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        ${n}
      </defs>
      <rect width="1000" height="650" fill="url(#bp-large-grid)" />
      <text x="50" y="40" fill="rgba(56, 189, 248, 0.4)" font-size="11" font-family="monospace" letter-spacing="1">
        NATIONAL FORENSIC SERVICE · 3D PHOTOGRAMMETRIC CRIME SCENE RECONSTRUCTION (ISO 17020)
      </text>
      <g transform="translate(930, 70)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="#38bdf8" stroke-width="1.5" />
        <polygon points="0,-18 5,0 0,-4 -5,0" fill="#ff4757" />
        <polygon points="0,18 5,0 0,4 -5,0" fill="#94a3b8" />
        <text x="0" y="-24" fill="#ff4757" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">N</text>
      </g>
      <g transform="translate(50, 625)">
        <rect x="0" y="0" width="200" height="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
        <rect x="0" y="0" width="50" height="6" fill="#38bdf8" />
        <rect x="100" y="0" width="50" height="6" fill="#38bdf8" />
        <text x="0" y="-4" fill="#94a3b8" font-size="9" font-family="monospace">0m</text>
        <text x="50" y="-4" fill="#94a3b8" font-size="9" font-family="monospace">1m</text>
        <text x="100" y="-4" fill="#94a3b8" font-size="9" font-family="monospace">2m</text>
        <text x="200" y="-4" fill="#94a3b8" font-size="9" font-family="monospace">4m (ABFO SCALE)</text>
      </g>
      ${a}
    </svg>
  `}function Ie(t,e,i){const n=document.createElement("dialog");n.className="hematite-modal evidence-loupe-modal";const o=w()==="ko",a=e.collectedEvidenceIds.has(t.id);function r(c,l){const d=t.alsRequired==="uv",p=t.alsRequired==="blue",u=d?"#00f0ff":p?"#ffe600":"#ffffff";let m="";return c==="gcms"||l.includes("잔")||l.includes("유리")||l.includes("병")||l.includes("바이알")?m=`
        <rect x="110" y="50" width="100" height="150" rx="6" fill="rgba(255, 255, 255, 0.08)" stroke="#cbd5e1" stroke-width="2" />
        <ellipse cx="160" cy="50" rx="50" ry="12" fill="rgba(255, 255, 255, 0.15)" stroke="#cbd5e1" stroke-width="1.5" />
        <ellipse cx="160" cy="200" rx="50" ry="12" fill="rgba(255, 255, 255, 0.2)" stroke="#cbd5e1" stroke-width="2" />
        <!-- Liquid / Residue Pool -->
        <path d="M 112 170 Q 160 185 208 170 L 208 200 Q 160 212 112 200 Z" fill="${d?"rgba(0, 240, 255, 0.6)":"rgba(235, 77, 75, 0.5)"}" />
        <!-- Latent Trace Highlights -->
        <circle cx="150" cy="180" r="8" fill="${u}" filter="drop-shadow(0 0 6px ${u})" opacity="0.8" />
        <circle cx="170" cy="188" r="5" fill="${u}" filter="drop-shadow(0 0 6px ${u})" opacity="0.8" />
      `:c==="ballistics"||l.includes("탄피")||l.includes("탄두")||l.includes("총기")?m=`
        <rect x="130" y="40" width="60" height="150" rx="4" fill="linear-gradient(90deg, #d4af37, #f6e58d, #aa8c2c)" stroke="#8e731b" stroke-width="2" />
        <rect x="125" y="190" width="70" height="18" rx="2" fill="#aa8c2c" stroke="#685412" stroke-width="2" />
        <ellipse cx="160" cy="40" rx="30" ry="8" fill="#574512" stroke="#8e731b" stroke-width="1.5" />
        <!-- Extractor Groove -->
        <line x1="125" y1="182" x2="195" y2="182" stroke="#3d310a" stroke-width="3" />
        <!-- Firing Pin Primer Strike Center -->
        <circle cx="160" cy="199" r="6" fill="#3d310a" stroke="#261e04" stroke-width="1.5" />
        <text x="160" y="125" fill="#574512" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle" transform="rotate(-90, 160, 125)">
          9mm LUGER · GLOCK
        </text>
      `:c==="dna"||l.includes("혈흔")||l.includes("손톱")||l.includes("면봉")?m=`
        <line x1="60" y1="210" x2="220" y2="50" stroke="#f1f2f6" stroke-width="6" stroke-linecap="round" />
        <ellipse cx="225" cy="45" rx="22" ry="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" transform="rotate(-45, 225, 45)" />
        <ellipse cx="225" cy="45" rx="16" ry="10" fill="${d?"#00f0ff":"#eb4d4b"}" filter="drop-shadow(0 0 6px ${d?"#00f0ff":"#eb4d4b"})" transform="rotate(-45, 225, 45)" />
        <text x="210" y="90" fill="#ff4757" font-size="9" font-family="monospace">HEME STAIN</text>
      `:m=`
        <rect x="90" y="60" width="140" height="140" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <!-- Magnified Ridge Detail -->
        <path d="M 120 130 Q 160 90 200 130" fill="none" stroke="${u}" stroke-width="3" stroke-linecap="round" />
        <path d="M 125 145 Q 160 110 195 145" fill="none" stroke="${u}" stroke-width="3" stroke-linecap="round" />
        <path d="M 130 160 Q 160 130 190 160" fill="none" stroke="${u}" stroke-width="3" stroke-linecap="round" />
        <circle cx="160" cy="130" r="4" fill="#ff4757" />
        <text x="160" y="185" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle">
          LATENT TOOLMARK / RIDGE
        </text>
      `,`
      <svg class="macro-loupe-svg" viewBox="0 0 320 250" width="100%" height="100%">
        <!-- Background Grid -->
        <rect width="320" height="250" fill="#080c14" />
        <line x1="0" y1="125" x2="320" y2="125" stroke="rgba(56, 189, 248, 0.12)" stroke-dasharray="2,2" />
        <line x1="160" y1="0" x2="160" y2="250" stroke="rgba(56, 189, 248, 0.12)" stroke-dasharray="2,2" />

        <!-- Circular Loupe Ring -->
        <circle cx="160" cy="125" r="105" fill="none" stroke="#38bdf8" stroke-width="2.5" />
        <circle cx="160" cy="125" r="112" fill="none" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1" />

        <!-- Physical Evidence Artwork -->
        ${m}

        <!-- Metric ABFO Scale Bar at bottom -->
        <g transform="translate(40, 230)">
          <rect x="0" y="0" width="240" height="12" fill="#ffffff" stroke="#000000" stroke-width="1" />
          <!-- Black & White Millimeter Blocks -->
          ${[0,20,40,60,80,100,120,140,160,180,200,220].map((h,g)=>g%2===0?`<rect x="${h}" y="0" width="20" height="12" fill="#000000" />`:"").join("")}
          <text x="120" y="-3" fill="#94a3b8" font-size="8" font-family="monospace" text-anchor="middle">
            ABFO No.2 PHOTOGRAMMETRIC MILLIMETER REFERENCE (0-120mm)
          </text>
        </g>
      </svg>
    `}const s=`ISO17025-${t.id.replace(/[^a-zA-Z0-9]/g,"").toUpperCase().slice(0,10)}`;return n.innerHTML=`
    <div class="modal-card evidence-inspection-card">
      <div class="modal-header">
        <div class="evidence-header-tag">
          <span class="evidence-badge-num">EV-#${t.id}</span>
          <h3>🔬 ${o?"과학수사 정밀 거시 검사 (Evidence Macro Inspection)":"Evidence Macro Inspection"}</h3>
        </div>
        <button class="modal-close-btn">✕</button>
      </div>

      <div class="evidence-modal-layout">
        <!-- Left: High-Resolution Macro Loupe View -->
        <div class="evidence-loupe-viewport">
          ${r(t.labCategory,t.nameKo)}
          <div class="loupe-controls-hint">
            <span>🔍 10X MAGNIFICATION · ABFO METRIC REFERENCE</span>
          </div>
        </div>

        <!-- Right: Official Chain of Custody Registry Card -->
        <div class="evidence-dossier-pane">
          <div class="custody-tag-header">
            <span class="tag-agency">국립과학수사연구원 · NFS EVIDENCE TAG</span>
            <span class="tag-status ${a?"secured":"uncollected"}">
              ${a?"🔒 입고 보관 (Secured)":"⚠️ 현장 보존 중 (Uncollected)"}
            </span>
          </div>

          <h4 class="evidence-title-text">${o?t.nameKo:t.nameEn}</h4>
          
          <div class="evidence-details-table">
            <div class="detail-row">
              <strong>${o?"증거물 식별 바코드":"Barcode ID"}:</strong>
              <code>${s}</code>
            </div>
            <div class="detail-row">
              <strong>${o?"필요 채취 도구":"Required Tool"}:</strong>
              <span class="tool-tag">🛠️ <code>${t.requiredTool}</code></span>
            </div>
            <div class="detail-row">
              <strong>${o?"필요 검출 광원":"ALS Wavelength"}:</strong>
              <span class="als-badge als-${t.alsRequired}">${t.alsRequired.toUpperCase()}</span>
            </div>
            <div class="detail-row">
              <strong>${o?"감정 의뢰 실험실":"Target Laboratory"}:</strong>
              <span>${t.labCategory.toUpperCase()} BENCH</span>
            </div>
          </div>

          <div class="evidence-desc-box">
            <strong>[${o?"증거물 현장 관찰 소견":"Scene Observations"}]</strong>
            <p>${o?t.descriptionKo:t.descriptionEn}</p>
          </div>

          ${a?`
            <div class="custody-audit-trail">
              <strong>[${o?"증거물 연쇄보관 등록 기록":"Chain of Custody Record"}]</strong>
              <p>• ${o?"현장 채취 완료: 변조 방지 홀로그램 봉인 테이프 부착":"Secured: Tamper-evident holographic seal attached."}</p>
              <p>• ${o?`감식 소견: ${t.notesKo}`:`Analysis Notes: ${t.notesEn}`}</p>
            </div>
          `:`
            <div class="evidence-action-bar">
              <button class="btn-primary btn-large" id="btn-collect-from-loupe">
                📦 ${o?"증거물 정밀 수거 및 봉인 (Collect & Seal)":"Collect & Seal Evidence"}
              </button>
            </div>
          `}
        </div>
      </div>

      <div class="modal-footer" style="display: flex; justify-content: flex-end; padding-top: 12px;">
        <button class="btn-secondary" id="btn-close-loupe">
          ${o?"닫기 (검식 복귀)":"Close (Return to Scene)"}
        </button>
      </div>
    </div>
  `,document.body.appendChild(n),n.showModal(),n.querySelector(".modal-close-btn")?.addEventListener("click",()=>{n.close(),n.remove()}),n.querySelector("#btn-close-loupe")?.addEventListener("click",()=>{n.close(),n.remove()}),n.addEventListener("click",c=>{c.target===n&&(n.close(),n.remove())}),n.querySelector("#btn-collect-from-loupe")?.addEventListener("click",()=>{i(),n.close(),n.remove()}),n}function Ye(t,e){const i=document.createElement("div");i.className="station-container scene-station";const n=w()==="ko",o=t.currentCase;return i.innerHTML=`
    <div class="station-sidebar">
      <div class="panel-section">
        <h3>🔦 ${y("alsLighting")}</h3>
        <div class="tool-btn-grid">
          <button class="tool-btn ${t.activeAls==="white"?"active":""}" data-als="white">
            ⚪ ${y("alsWhite")}
          </button>
          <button class="tool-btn ${t.activeAls==="uv"?"active":""}" data-als="uv">
            🟣 ${y("alsUv")}
          </button>
          <button class="tool-btn ${t.activeAls==="blue"?"active":""}" data-als="blue">
            🔵 ${y("alsBlue")}
          </button>
          <button class="tool-btn ${t.activeAls==="green"?"active":""}" data-als="green">
            🟢 ${y("alsGreen")}
          </button>
        </div>
      </div>

      <div class="panel-section">
        <h3>🧰 ${y("applyTool")}</h3>
        <div class="tool-btn-grid">
          <button class="tool-btn ${t.activeTool==="scale"?"active":""}" data-tool="scale">
            📐 ${y("toolScale")}
          </button>
          <button class="tool-btn ${t.activeTool==="swab"?"active":""}" data-tool="swab">
            🧪 ${y("toolSwab")}
          </button>
          <button class="tool-btn ${t.activeTool==="powder"?"active":""}" data-tool="powder">
            🖌️ ${y("toolPowder")}
          </button>
          <button class="tool-btn ${t.activeTool==="bagPaper"?"active":""}" data-tool="bagPaper">
            ✉️ ${y("toolBagPaper")}
          </button>
          <button class="tool-btn ${t.activeTool==="bagCan"?"active":""}" data-tool="bagCan">
            🛢️ ${y("toolBagCan")}
          </button>
        </div>
      </div>

      <div class="panel-section evidence-panel">
        <h3>📦 ${y("evidenceDiscovered")} (${t.collectedEvidenceIds.size}/${o.evidenceItems.length})</h3>
        <ul class="evidence-list">
          ${o.evidenceItems.map(a=>{const r=t.collectedEvidenceIds.has(a.id);return`
              <li class="evidence-item-card ${r?"collected":"uncollected"}">
                <div class="ev-badge">${r?"✓ 수거됨":"미확인"}</div>
                <strong>${n?a.nameKo:a.nameEn}</strong>
                <p class="ev-desc">${n?r?a.notesKo:a.descriptionKo:r?a.notesEn:a.descriptionEn}</p>
              </li>
            `}).join("")}
        </ul>
      </div>
    </div>

    <div class="scene-viewport-area">
      <div class="scene-header-info">
        <h2>${n?o.titleKo:o.titleEn}</h2>
        <div class="scene-meta">
          <span>🌡️ ${o.ambientTempC}°C (Ambient)</span>
          <span>📍 ${n?o.sceneDescriptionKo:o.sceneDescriptionEn}</span>
        </div>
      </div>

      <div class="scene-interactive-canvas als-${t.activeAls}" id="scene-canvas-container">
        <!-- Visual Forensic Tape -->
        <div class="crime-scene-banner">
          <span>⚠️ POLICE LINE DO NOT CROSS · 과학수사대 현장보존구역 · CRIME SCENE PRESERVATION ZONE ⚠️</span>
        </div>

        <!-- Crime Scene Help Banner -->
        <div class="scene-instruction-badge">
          <span>📍 ${n?"현장 감식 방법: 좌측에서 채취 도구 및 특수광원(ALS)을 선택한 뒤, 현장의 증거 표식(▲)을 클릭하여 증거를 수거하십시오.":"How to Investigate: Select a tool & ALS light, then click yellow evidence markers (▲) to collect."}</span>
        </div>

        <!-- Interactive Room Backdrop with Full Forensic Blueprint -->
        <div class="scene-backdrop case-${o.number}">
          <div class="scene-blueprint-container">
            ${ii(o.number,t.activeAls,n)}
          </div>
          <div class="scene-ambient-lighting"></div>

          <!-- Hotspots for Evidence Items -->
          ${o.evidenceItems.map((a,r)=>{const s=a.alsRequired==="white"||t.activeAls===a.alsRequired,c=t.collectedEvidenceIds.has(a.id);return`
              <div class="evidence-hotspot ${c?"collected":""} ${s?"visible":"latent"}"
                   style="left: ${a.x}%; top: ${a.y}%;"
                   data-id="${a.id}">
                <div class="evidence-cone-marker ${c?"marker-collected":""}">
                  <span class="cone-number">${r+1}</span>
                  <span class="cone-label">${c?"✓":a.alsRequired==="uv"?"✨ UV":a.alsRequired==="blue"?"💧 450nm":"▲"}</span>
                </div>
                <div class="hotspot-pulse"></div>
                <div class="hotspot-tooltip">
                  <div class="tooltip-header">
                    <strong>[#${r+1}] ${n?a.nameKo:a.nameEn}</strong>
                    <span class="tooltip-als-tag als-${a.alsRequired}">ALS: ${a.alsRequired.toUpperCase()}</span>
                  </div>
                  <p class="tooltip-body">
                    ${s?n?c?a.notesKo:a.descriptionKo:c?a.notesEn:a.descriptionEn:n?`⚠️ 잠재 흔적! 육안 확인 불가. 특수광원(${a.alsRequired.toUpperCase()})을 켜십시오.`:`Latent! Switch ALS light to ${a.alsRequired.toUpperCase()}`}
                  </p>
                  <div class="tooltip-footer">
                    <span>${n?"필요 도구":"Tool"}: <code>${a.requiredTool}</code></span>
                    <button class="btn-micro-loupe" data-inspect-id="${a.id}" type="button">
                      🔬 ${n?"10X 확대 검사":"10X Loupe"}
                    </button>
                    <span>${c?n?"✅ 수거 완료":"✅ Collected":n?"👆 클릭하여 수거":"👆 Click to Collect"}</span>
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </div>
  `,i.querySelectorAll("[data-als]").forEach(a=>{a.addEventListener("click",r=>{v.playAlsClick();const s=r.currentTarget.dataset.als;t.setAls(s),e(n?`광원 전환: ${s.toUpperCase()}`:`ALS Light switched: ${s.toUpperCase()}`,"info")})}),i.querySelectorAll("[data-tool]").forEach(a=>{a.addEventListener("click",r=>{v.playAlsClick();const s=r.currentTarget.dataset.tool;t.setTool(s)})}),i.querySelectorAll(".evidence-hotspot").forEach(a=>{a.addEventListener("click",r=>{if(r.target.closest(".btn-micro-loupe"))return;const s=r.currentTarget.dataset.id;if(!s)return;const c=o.evidenceItems.find(p=>p.id===s);if(!c)return;if(t.collectedEvidenceIds.has(s)){v.playLoupeZoom(),Ie(c,t,()=>{});return}const d=t.collectEvidence(s);d.success&&(v.playShutter(),v.playSealSnap()),e(d.message,d.success?"good":"bad")})}),i.querySelectorAll("[data-inspect-id]").forEach(a=>{a.addEventListener("click",r=>{r.stopPropagation(),r.preventDefault();const s=r.currentTarget.dataset.inspectId,c=o.evidenceItems.find(l=>l.id===s);c&&(v.playLoupeZoom(),Ie(c,t,()=>{const l=t.collectEvidence(c.id);l.success&&(v.playShutter(),v.playSealSnap()),e(l.message,l.success?"good":"bad")}))})}),i}function ni(t,e,i,n,o="surface"){const a=t.victim,r=e,s=t.number===4||t.number===15||t.number===5||a.toxicologyFound.includes("Cyanide")||a.toxicologyFound.includes("CO"),c=`
    <radialGradient id="lividity-gradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${s?"#ff3838":"#6c2d82"}" stop-opacity="0.9" />
      <stop offset="60%" stop-color="${s?"#ff6b81":"#8e44ad"}" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#2c3e50" stop-opacity="0" />
    </radialGradient>
  `;if(o==="skeletal"){const l=a.ligatureFurrow.thyroidCartilageFracture;return`
      <svg class="anatomy-svg skeletal-view" viewBox="0 0 360 740" width="100%" height="100%">
        <!-- Table & Grid -->
        <rect x="20" y="10" width="320" height="720" rx="20" fill="#05080f" stroke="#1e293b" stroke-width="2" />
        <line x1="180" y1="20" x2="180" y2="720" stroke="rgba(56, 189, 248, 0.15)" stroke-dasharray="4,4" />

        <!-- X-Ray Radiographic Ghost Silhouette -->
        <path d="M 180 35 C 155 35, 145 55, 145 80 C 145 105, 155 125, 165 132 L 165 145 L 140 160 L 105 170 L 125 185 C 115 220, 118 260, 122 300 C 125 330, 122 360, 130 390 L 145 440 L 138 520 L 142 580 L 145 660 L 135 700 L 155 705 L 165 670 L 168 590 L 172 520 L 178 454 L 180 455 L 182 454 L 188 520 L 192 590 L 195 670 L 205 705 L 225 700 L 215 660 L 218 580 L 222 520 L 215 440 L 230 390 C 238 360, 235 330, 238 300 C 242 260, 245 220, 235 185 L 255 170 L 220 160 L 195 145 L 195 132 C 205 125, 215 105, 215 80 C 215 55, 205 35, 180 35 Z" 
              fill="rgba(56, 189, 248, 0.04)" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1.5" />

        <!-- Skeletal Bone Structures -->
        <g stroke="#cbd5e1" stroke-width="2" fill="#0f172a" stroke-linecap="round">
          <!-- Cranium (Skull & Mandible) -->
          <ellipse cx="180" cy="75" rx="30" ry="36" />
          <path d="M 162 95 Q 180 115 198 95" fill="none" stroke-width="2.5" />
          <!-- Eye Orbits -->
          <circle cx="170" cy="70" r="7" fill="#05080f" stroke="#64748b" />
          <circle cx="190" cy="70" r="7" fill="#05080f" stroke="#64748b" />
          <!-- Nasal Cavity -->
          <polygon points="180,78 177,88 183,88" fill="#05080f" stroke="#64748b" />

          <!-- Cervical Spine (C1-C7) -->
          ${[118,126,134,142,150,158].map(d=>`
            <rect x="175" y="${d}" width="10" height="6" rx="2" fill="#334155" stroke="#94a3b8" />
          `).join("")}

          <!-- Hyoid Bone & Thyroid Cartilage Zone -->
          <g transform="translate(180, 138)">
            ${l?`
              <!-- Fractured Hyoid Bone -->
              <path d="M -16 -4 Q 0 8 16 -4" fill="none" stroke="#ff4757" stroke-width="3" filter="drop-shadow(0 0 6px #ff4757)" />
              <line x1="8" y1="-8" x2="16" y2="2" stroke="#ff4757" stroke-width="2.5" />
              <circle cx="12" cy="-3" r="5" fill="#ff4757" />
              <text x="0" y="-14" fill="#ff4757" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">
                ⚠️ [설골 대각 &amp; 갑상연골 골절 확인: 교살/강한 압박 외력]
              </text>
            `:`
              <!-- Intact Hyoid Bone -->
              <path d="M -15 -2 Q 0 8 15 -2" fill="none" stroke="#22d3ee" stroke-width="2" />
              <text x="0" y="-10" fill="#22d3ee" font-size="9" font-family="monospace" text-anchor="middle">
                ✓ 설골(Hyoid) 무손상
              </text>
            `}
          </g>

          <!-- Clavicles (쇄골) -->
          <path d="M 180 165 Q 145 158 115 170" fill="none" stroke-width="3" />
          <path d="M 180 165 Q 215 158 245 170" fill="none" stroke-width="3" />

          <!-- Sternum & Rib Cage (12 pairs) -->
          <rect x="176" y="175" width="8" height="110" rx="3" fill="#334155" stroke="#cbd5e1" stroke-width="2" />
          ${[185,200,215,230,245,260,275].map((d,p)=>`
            <path d="M 176 ${d} C 140 ${d-5}, 125 ${d+15}, 132 ${d+30}" fill="none" stroke="#94a3b8" stroke-width="2" />
            <path d="M 184 ${d} C 220 ${d-5}, 235 ${d+15}, 228 ${d+30}" fill="none" stroke="#94a3b8" stroke-width="2" />
          `).join("")}

          <!-- Pelvic Girdle (골반) -->
          <path d="M 135 390 C 130 420, 150 445, 180 445 C 210 445, 230 420, 225 390 C 220 375, 140 375, 135 390 Z" fill="#1e293b" stroke-width="2.5" />
          <circle cx="155" cy="420" r="10" fill="#05080f" stroke="#64748b" />
          <circle cx="205" cy="420" r="10" fill="#05080f" stroke="#64748b" />

          <!-- Femurs (대퇴골) -->
          <line x1="155" y1="440" x2="152" y2="570" stroke-width="5" />
          <line x1="205" y1="440" x2="208" y2="570" stroke-width="5" />
          <!-- Patellas -->
          <circle cx="152" cy="575" r="5" fill="#cbd5e1" />
          <circle cx="208" cy="575" r="5" fill="#cbd5e1" />
          <!-- Tibias & Fibulas -->
          <line x1="152" y1="585" x2="150" y2="675" stroke-width="4" />
          <line x1="208" y1="585" x2="210" y2="675" stroke-width="4" />
        </g>

        <!-- Diagnostic Legend Badge -->
        <g transform="translate(180, 705)">
          <rect x="-150" y="-12" width="300" height="24" rx="4" fill="#0b1120" stroke="#334155" />
          <text x="0" y="4" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">
            VIRTUAL RADIOGRAPHY: SKELETAL INTEGRITY MAPPING
          </text>
        </g>
      </svg>
    `}if(o==="visceral")return`
      <svg class="anatomy-svg visceral-view" viewBox="0 0 360 740" width="100%" height="100%">
        <!-- Table & Grid -->
        <rect x="20" y="10" width="320" height="720" rx="20" fill="#05080f" stroke="#1e293b" stroke-width="2" />
        <line x1="180" y1="20" x2="180" y2="720" stroke="rgba(56, 189, 248, 0.15)" stroke-dasharray="4,4" />

        <!-- Ghost Silhouette -->
        <path d="M 180 35 C 155 35, 145 55, 145 80 C 145 105, 155 125, 165 132 L 165 145 L 140 160 L 105 170 L 125 185 C 115 220, 118 260, 122 300 C 125 330, 122 360, 130 390 L 145 440 L 138 520 L 142 580 L 145 660 L 135 700 L 155 705 L 165 670 L 168 590 L 172 520 L 178 454 L 180 455 L 182 454 L 188 520 L 192 590 L 195 670 L 205 705 L 225 700 L 215 660 L 218 580 L 222 520 L 215 440 L 230 390 C 238 360, 235 330, 238 300 C 242 260, 245 220, 235 185 L 255 170 L 220 160 L 195 145 L 195 132 C 205 125, 215 105, 215 80 C 215 55, 205 35, 180 35 Z" 
              fill="rgba(244, 63, 94, 0.04)" stroke="rgba(244, 63, 94, 0.2)" stroke-width="1.5" />

        <!-- 1. Encephalon (Brain & Cranial Vault) -->
        <g transform="translate(180, 75)">
          <ellipse cx="0" cy="0" rx="26" ry="22" fill="#fda4af" stroke="#e11d48" stroke-width="2" opacity="0.9" />
          <!-- Cerebral Sulci Convolution Lines -->
          <path d="M -15 -8 Q 0 -15 15 -8" fill="none" stroke="#be123c" stroke-width="1.5" />
          <path d="M -20 2 Q 0 -4 20 2" fill="none" stroke="#be123c" stroke-width="1.5" />
          <path d="M -16 10 Q 0 15 16 10" fill="none" stroke="#be123c" stroke-width="1.5" />
          <text x="0" y="-28" fill="#fda4af" font-size="9" font-family="monospace" text-anchor="middle">
            [뇌실질: 뇌부종/점상출혈 관찰]
          </text>
        </g>

        <!-- 2. Trachea & Airway -->
        <rect x="176" y="145" width="8" height="40" fill="#f87171" stroke="#dc2626" stroke-width="1.5" />
        ${[150,158,166,174].map(l=>`<line x1="176" y1="${l}" x2="184" y2="${l}" stroke="#991b1b" stroke-width="1" />`).join("")}

        <!-- 3. Bilateral Lungs (폐) -->
        <!-- Left Lung -->
        <path d="M 172 190 C 145 190, 130 220, 132 270 C 135 295, 155 305, 172 285 Z" fill="#fb7185" stroke="#e11d48" stroke-width="2" opacity="0.85" />
        <!-- Right Lung -->
        <path d="M 188 190 C 215 190, 230 220, 228 270 C 225 295, 205 305, 188 285 Z" fill="#fb7185" stroke="#e11d48" stroke-width="2" opacity="0.85" />
        <text x="180" y="210" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle">
          LUNGS
        </text>

        <!-- 4. Heart (심장) -->
        <ellipse cx="180" cy="255" rx="18" ry="22" fill="#be123c" stroke="#881337" stroke-width="2" />
        <path d="M 172 245 L 188 265" stroke="#fecdd3" stroke-width="1.5" />

        <!-- 5. Liver (간실질 - Right Hypochondrium) -->
        <path d="M 140 295 C 145 285, 195 285, 215 300 C 220 330, 160 345, 140 315 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="2" />
        <!-- Thermometry Probe Path Line -->
        <line x1="120" y1="280" x2="165" y2="310" stroke="#00f0ff" stroke-width="2" stroke-dasharray="3,2" />
        <circle cx="165" cy="310" r="3" fill="#00f0ff" />
        <text x="175" y="315" fill="#fecaca" font-size="9" font-family="monospace">LIVER (${a.coreLiverTempC}°C)</text>

        <!-- 6. Stomach (위장) -->
        <path d="M 180 325 C 205 320, 215 350, 195 365 C 175 370, 165 345, 180 325 Z" fill="#ea580c" stroke="#c2410c" stroke-width="2" />
        <text x="190" y="348" fill="#ffedd5" font-size="8" font-family="monospace">STOMACH</text>

        <!-- 7. Intestines & Kidneys -->
        <rect x="145" y="375" width="70" height="45" rx="10" fill="#b45309" stroke="#92400e" stroke-width="1.5" opacity="0.8" />
        <ellipse cx="145" cy="345" rx="8" ry="14" fill="#831843" stroke="#500724" stroke-width="1.5" />
        <ellipse cx="215" cy="345" rx="8" ry="14" fill="#831843" stroke="#500724" stroke-width="1.5" />

        <!-- Visceral Organ Findings Display Box -->
        <g transform="translate(180, 520)">
          <rect x="-150" y="0" width="300" height="95" rx="6" fill="#0b1120" stroke="#f43f5e" stroke-width="1.5" />
          <text x="-140" y="20" fill="#f43f5e" font-size="11" font-weight="bold" font-family="monospace">
            [내부 장기 적출 소견 (Visceral Pathology)]
          </text>
          <foreignObject x="-140" y="26" width="280" height="65">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 11px; color: #cbd5e1; line-height: 1.4; font-family: sans-serif;">
              ${n?a.internalOrgansKo||"폐 울혈 및 수종 관찰. 심낭 내 체액 증가. 간실질 체온 계측 및 위 내용물 독극물 스크리닝 의뢰.":a.internalOrgansEn||"Visceral congestion and pulmonary edema noted. Gastric contents and femoral blood sent for toxicology."}
            </div>
          </foreignObject>
        </g>
      </svg>
    `;if(i==="anterior"){const l=a.lividitySite==="anterior";return`
      <svg class="anatomy-svg anterior-view" viewBox="0 0 360 740" width="100%" height="100%">
        <defs>
          <radialGradient id="body-gradient-ant" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#2a354c" />
            <stop offset="70%" stop-color="#182030" />
            <stop offset="100%" stop-color="#0e1420" />
          </radialGradient>
          ${c}
          <filter id="organ-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Operating Table Shadows & Grid -->
        <rect x="20" y="10" width="320" height="720" rx="20" fill="#080c14" stroke="#1e293b" stroke-width="2" />
        <line x1="180" y1="20" x2="180" y2="720" stroke="rgba(56, 189, 248, 0.15)" stroke-dasharray="4,4" />

        <!-- Anatomical Human Silhouette (Anterior / Frontal View) -->
        <g class="anatomical-body-group" stroke="#475569" stroke-width="2" fill="url(#body-gradient-ant)">
          <!-- Head & Cranium -->
          <path d="M 180 35 
                   C 155 35, 145 55, 145 80 
                   C 145 105, 155 125, 165 132 
                   L 165 145 
                   L 195 145 
                   L 195 132 
                   C 205 125, 215 105, 215 80 
                   C 215 55, 205 35, 180 35 Z" />
          
          <!-- Neck & Clavicles -->
          <path d="M 165 145 L 140 160 L 105 170 L 100 185 L 125 185 L 145 175 L 180 180 L 215 175 L 235 185 L 260 185 L 255 170 L 220 160 L 195 145 Z" />

          <!-- Torso (Chest, Ribcage & Abdomen) -->
          <path d="M 125 185 
                   C 115 220, 118 260, 122 300 
                   C 125 330, 122 360, 130 390 
                   C 135 410, 145 425, 180 430 
                   C 215 425, 225 410, 230 390 
                   C 238 360, 235 330, 238 300 
                   C 242 260, 245 220, 235 185 Z" />

          <!-- Left Arm & Hand -->
          <path d="M 105 170 L 80 230 L 70 310 L 60 380 L 52 420 L 62 440 L 72 410 L 82 340 L 92 260 L 115 210 Z" />

          <!-- Right Arm & Hand -->
          <path d="M 255 170 L 280 230 L 290 310 L 300 380 L 308 420 L 298 440 L 288 410 L 278 340 L 268 260 L 245 210 Z" />

          <!-- Pelvis & Inguinal Region -->
          <path d="M 130 390 L 145 440 L 180 455 L 215 440 L 230 390 Z" />

          <!-- Left Leg & Foot -->
          <path d="M 145 440 
                   L 138 520 L 142 580 L 145 660 L 135 700 L 155 705 L 165 670 L 168 590 L 172 520 L 178 454 Z" />

          <!-- Right Leg & Foot -->
          <path d="M 215 440 
                   L 222 520 L 218 580 L 215 660 L 225 700 L 205 705 L 195 670 L 192 590 L 188 520 L 182 454 Z" />
        </g>

        <!-- Sternum & Rib Contours (Subtle Guide Lines) -->
        <g stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.2" fill="none">
          <line x1="180" y1="185" x2="180" y2="330" />
          <circle cx="180" cy="355" r="3" />
          <!-- Rib Arcs -->
          <path d="M 175 220 Q 150 225 135 240" />
          <path d="M 185 220 Q 210 225 225 240" />
          <path d="M 175 250 Q 148 260 132 280" />
          <path d="M 185 250 Q 212 260 228 280" />
          <path d="M 175 285 Q 152 300 135 320" />
          <path d="M 185 285 Q 208 300 225 320" />
        </g>

        <!-- Y-Incision Autopsy Line Overlay -->
        ${r.internalOrgansWeighed?`
          <g stroke="#ff4757" stroke-width="2.5" stroke-dasharray="4,3" fill="none">
            <path d="M 130 185 L 180 235 L 230 185" />
            <line x1="180" y1="235" x2="180" y2="430" />
            <text x="180" y="248" fill="#ff4757" font-size="9" font-family="monospace" text-anchor="middle">
              [ Y-INCISION COMPLETE: ORGAN BLOCK EVISCERATED ]
            </text>
          </g>
        `:""}

        <!-- 1. HEAD & NECK TRAUMA ZONE (Interactive Target) -->
        <g class="body-target head-wound-marker" data-action="wound" transform="translate(180, 138)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="${r.woundMeasured?"rgba(46, 213, 115, 0.25)":"rgba(255, 71, 87, 0.25)"}" stroke="${r.woundMeasured?"#2ed573":"#ff4757"}" stroke-width="2" />
          <!-- Ligature Furrow Graphic -->
          <line x1="-18" y1="0" x2="18" y2="0" stroke="${r.woundMeasured?"#2ed573":"#ff4757"}" stroke-width="4" stroke-dasharray="4,2" />
          <text x="0" y="-18" fill="${r.woundMeasured?"#2ed573":"#ff4757"}" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">
            ${r.woundMeasured?"✓ 삭흔/창상 계측 완료":"⚠️ 삭흔/창상 검사 (클릭)"}
          </text>
          ${r.woundMeasured?`
            <text x="0" y="24" fill="#a4b0be" font-size="9" font-family="monospace" text-anchor="middle">
              ${n?a.primaryTraumaDescriptionKo?a.primaryTraumaDescriptionKo.slice(0,32)+"...":"창상 계측 완료":a.primaryTraumaDescriptionEn?a.primaryTraumaDescriptionEn.slice(0,38)+"...":"Wound Caliper Measured"}
            </text>
          `:""}
        </g>

        <!-- 2. LIVER PARENCHYMA THERMOMETRY PROBE ZONE (Right Hypochondrium) -->
        <g class="body-target liver-temp-indicator" data-action="liver" transform="translate(155, 290)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="16" fill="${r.liverTempMeasured?"rgba(0, 240, 255, 0.25)":"rgba(241, 196, 15, 0.25)"}" stroke="${r.liverTempMeasured?"#00f0ff":"#f1c40f"}" stroke-width="2" />
          <!-- Thermometer Icon -->
          <line x1="0" y1="-8" x2="0" y2="8" stroke="${r.liverTempMeasured?"#00f0ff":"#f1c40f"}" stroke-width="3" />
          <circle cx="0" cy="6" r="4" fill="${r.liverTempMeasured?"#00f0ff":"#f1c40f"}" />
          <text x="0" y="-20" fill="${r.liverTempMeasured?"#00f0ff":"#f1c40f"}" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">
            ${r.liverTempMeasured?`✓ 심부체온: ${a.coreLiverTempC}°C`:"🌡️ 간실질 심부체온 탐침 (클릭)"}
          </text>
          ${r.liverTempMeasured?`
            <text x="0" y="26" fill="#00f0ff" font-size="9" font-family="monospace" text-anchor="middle">
              Henssge PMI: ${r.calculatedHenssgePmi.toFixed(1)}시간
            </text>
          `:""}
        </g>

        <!-- 3. VITREOUS HUMOR ASPIRATION ZONE (Eyes / Canthus) -->
        <g class="body-target vitreous-target" data-action="vitreous" transform="translate(172, 75)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="7" fill="${r.vitreousKMeasured?"rgba(46, 213, 115, 0.4)":"rgba(164, 176, 190, 0.3)"}" stroke="${r.vitreousKMeasured?"#2ed573":"#70a1ff"}" stroke-width="1.5" />
          <text x="25" y="4" fill="${r.vitreousKMeasured?"#2ed573":"#70a1ff"}" font-size="9" font-family="monospace">
            ${r.vitreousKMeasured?`✓ 초자체 [K+]: ${a.vitreousPotassiumMmolL}mM`:"👁️ 초자체액 채취"}
          </text>
        </g>

        <!-- 4. FEMORAL VEIN PUNCTURE TARGET (Groin / Femoral Triangle) -->
        <g class="body-target femoral-puncture-target" data-action="femoral" transform="translate(162, 465)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="11" fill="${r.femoralBloodDrawn?"rgba(235, 77, 75, 0.35)":"rgba(104, 109, 224, 0.3)"}" stroke="${r.femoralBloodDrawn?"#eb4d4b":"#686de0"}" stroke-width="2" />
          <text x="-18" y="22" fill="${r.femoralBloodDrawn?"#eb4d4b":"#686de0"}" font-size="9" font-weight="bold" font-family="monospace">
            ${r.femoralBloodDrawn?"✓ 대퇴혈액 채취 완료":"💉 대퇴정맥 천자"}
          </text>
        </g>

        <!-- 5. SUBUNGUAL DNA SCRAPING TARGET (Fingernails) -->
        <g class="body-target subungual-target" data-action="subungual" transform="translate(62, 435)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="10" fill="${r.subungualScraped?"rgba(46, 213, 115, 0.3)":"rgba(255, 121, 121, 0.25)"}" stroke="${r.subungualScraped?"#2ed573":"#ff7979"}" stroke-width="1.5" />
          <text x="-40" y="24" fill="${r.subungualScraped?"#2ed573":"#ff7979"}" font-size="9" font-family="monospace">
            ${r.subungualScraped?"✓ 손톱 DNA 찰과 완료":"🧬 손톱 밑 찰과"}
          </text>
        </g>

        <!-- ANTERIOR LIVOR MORTIS (If prone suspension/position) -->
        ${l?`
          <g class="body-target lividity-blotch ${a.isLividityFixed?"fixed":"unfixed"}" data-action="lividity" style="cursor: pointer;">
            <!-- Anterior Chest & Abdominal Lividity Patches -->
            <ellipse cx="140" cy="240" rx="20" ry="35" fill="url(#lividity-gradient)" opacity="0.85" />
            <ellipse cx="220" cy="240" rx="20" ry="35" fill="url(#lividity-gradient)" opacity="0.85" />
            <ellipse cx="180" cy="360" rx="35" ry="25" fill="url(#lividity-gradient)" opacity="0.8" />
            <ellipse cx="145" cy="540" rx="12" ry="35" fill="url(#lividity-gradient)" opacity="0.75" />
            <ellipse cx="215" cy="540" rx="12" ry="35" fill="url(#lividity-gradient)" opacity="0.75" />

            ${r.lividityTested?a.isLividityFixed?`
              <circle cx="180" cy="360" r="14" fill="${s?"#ff3838":"#6c2d82"}" stroke="#ff4757" stroke-width="2" />
              <text x="180" y="415" fill="#ff4757" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                ${s?"🔴 선홍색 고정 시반 (Cherry-Red Fixed)":"🔴 전면 고정성 시반 (Fixed)"}
              </text>
              <text x="180" y="430" fill="#a4b0be" font-size="9" font-family="monospace" text-anchor="middle">
                압박 탈색 음성 (사후 엎드린 자세로 8~12시간 이상 경과)
              </text>
            `:`
              <circle cx="180" cy="360" r="14" fill="#ffffff" stroke="#2ed573" stroke-width="2" />
              <text x="180" y="415" fill="#2ed573" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                ⚪ 전면 압박 탈색 양성 (Unfixed / Blanching)
              </text>
            `:`
              <circle cx="180" cy="360" r="16" fill="rgba(241, 196, 15, 0.3)" stroke="#f1c40f" stroke-width="2" stroke-dasharray="3,2" />
              <text x="180" y="415" fill="#f1c40f" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                👆 전면 시반 압박탈색 시험 (클릭)
              </text>
            `}
          </g>
        `:""}
      </svg>
    `}else{const l=a.lividitySite==="posterior"||a.lividitySite==="dependent";return`
      <svg class="anatomy-svg posterior-view" viewBox="0 0 360 740" width="100%" height="100%">
        <defs>
          <radialGradient id="body-gradient-post" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#2a354c" />
            <stop offset="70%" stop-color="#182030" />
            <stop offset="100%" stop-color="#0e1420" />
          </radialGradient>
          ${c}
        </defs>

        <!-- Operating Table -->
        <rect x="20" y="10" width="320" height="720" rx="20" fill="#080c14" stroke="#1e293b" stroke-width="2" />
        <line x1="180" y1="20" x2="180" y2="720" stroke="rgba(56, 189, 248, 0.15)" stroke-dasharray="4,4" />

        <!-- Posterior Silhouette -->
        <g class="anatomical-body-group" stroke="#475569" stroke-width="2" fill="url(#body-gradient-post)">
          <!-- Occiput / Back of Head -->
          <ellipse cx="180" cy="85" rx="36" ry="46" />
          <!-- Neck & Trapezius -->
          <path d="M 160 130 L 125 155 L 105 170 L 120 185 L 155 170 L 180 172 L 205 170 L 240 185 L 255 170 L 235 155 L 200 130 Z" />

          <!-- Back Torso (Scapulae, Spine, Buttocks) -->
          <path d="M 125 185 
                   C 115 230, 118 280, 122 330 
                   C 125 370, 128 410, 140 440 
                   L 180 455 L 220 440 
                   C 232 410, 235 370, 238 330 
                   C 242 280, 245 230, 235 185 Z" />

          <!-- Left Arm (Posterior) -->
          <path d="M 105 170 L 78 240 L 68 320 L 58 390 L 50 435 L 60 445 L 70 415 L 80 340 L 90 260 L 115 210 Z" />

          <!-- Right Arm (Posterior) -->
          <path d="M 255 170 L 282 240 L 292 320 L 302 390 L 310 435 L 300 445 L 290 415 L 280 340 L 270 260 L 245 210 Z" />

          <!-- Posterior Left Leg -->
          <path d="M 140 440 L 135 530 L 140 590 L 142 670 L 135 705 L 158 705 L 165 670 L 168 590 L 175 530 L 180 455 Z" />

          <!-- Posterior Right Leg -->
          <path d="M 220 440 L 225 530 L 220 590 L 218 670 L 225 705 L 202 705 L 195 670 L 192 590 L 185 530 L 180 455 Z" />
        </g>

        <!-- Spine Column Guide Lines -->
        <g stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" stroke-dasharray="2,3">
          <line x1="180" y1="130" x2="180" y2="445" />
          <!-- Scapular Contours -->
          <path d="M 145 200 L 135 245 L 160 255" fill="none" />
          <path d="M 215 200 L 225 245 L 200 255" fill="none" />
          <!-- Gluteal Cleft -->
          <line x1="180" y1="410" x2="180" y2="475" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
        </g>

        <!-- LIVOR MORTIS (시반) BLOTCHES (Posterior Distribution) -->
        ${l?`
          <g class="body-target lividity-blotch ${a.isLividityFixed?"fixed":"unfixed"}" data-action="lividity" style="cursor: pointer;">
            <!-- Back Lividity Patches -->
            <ellipse cx="150" cy="280" rx="22" ry="40" fill="url(#lividity-gradient)" opacity="0.85" />
            <ellipse cx="210" cy="280" rx="22" ry="40" fill="url(#lividity-gradient)" opacity="0.85" />
            <!-- Buttocks Lividity -->
            <ellipse cx="155" cy="410" rx="20" ry="25" fill="url(#lividity-gradient)" opacity="0.8" />
            <ellipse cx="205" cy="410" rx="20" ry="25" fill="url(#lividity-gradient)" opacity="0.8" />
            <!-- Posterior Calves -->
            <ellipse cx="155" cy="620" rx="10" ry="30" fill="url(#lividity-gradient)" opacity="0.7" />
            <ellipse cx="205" cy="620" rx="10" ry="30" fill="url(#lividity-gradient)" opacity="0.7" />

            <!-- Blanch Test Thumb Press Impression -->
            ${r.lividityTested?a.isLividityFixed?`
              <!-- Fixed: No blanching, remains colored -->
              <circle cx="150" cy="280" r="12" fill="${s?"#ff3838":"#6c2d82"}" stroke="#ff4757" stroke-width="2" />
              <text x="180" y="350" fill="#ff4757" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                ${s?"🔴 선홍색 고정 시반 (Cherry-Red Fixed)":"🔴 고정성 시반 (Fixed Livor Mortis)"}
              </text>
              <text x="180" y="366" fill="#a4b0be" font-size="9" font-family="monospace" text-anchor="middle">
                압박 탈색 음성 (사후 8~12시간 이상 경과 증명)
              </text>
            `:`
              <!-- Unfixed: White blanch circle -->
              <circle cx="150" cy="280" r="14" fill="#ffffff" stroke="#2ed573" stroke-width="2" />
              <text x="180" y="350" fill="#2ed573" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                ${s?"⚪ 선홍색 압박 탈색 양성 (Blanching)":"⚪ 압박 탈색 양성 (Unfixed / Blanching)"}
              </text>
              <text x="180" y="366" fill="#a4b0be" font-size="9" font-family="monospace" text-anchor="middle">
                압박 부위 창백화 (사후 초기 가역적 시반)
              </text>
            `:`
              <!-- Untested: Prompt to click -->
              <circle cx="150" cy="280" r="16" fill="rgba(241, 196, 15, 0.3)" stroke="#f1c40f" stroke-width="2" stroke-dasharray="3,2" />
              <text x="180" y="350" fill="#f1c40f" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">
                👆 시반 압박탈색 시험 (클릭)
              </text>
            `}
          </g>
        `:""}
      </svg>
    `}}let X="anterior",ee="surface";function ai(t,e){const i=document.createElement("div");i.className="station-container autopsy-station";const n=w()==="ko",o=t.currentCase,a=o.victim,r=t.autopsyState;return i.innerHTML=`
    <div class="station-sidebar">
      <div class="panel-section">
        <h3>📋 ${n?"변사자 인적사항":"Decedent Information"}</h3>
        <div class="victim-meta-card">
          <div class="meta-row"><span>${n?"성명":"Name"}:</span> <strong>${a.name}</strong></div>
          <div class="meta-row"><span>${n?"연령/성별":"Age/Sex"}:</span> <span>${a.age}세 / ${a.sex}</span></div>
          <div class="meta-row"><span>${n?"체중/의복":"Weight/Clothing"}:</span> <span>${a.weightKg} kg (Cf: ${a.clothingFactor})</span></div>
          <div class="meta-row"><span>${n?"심부체온":"Core Temp"}:</span> <span>${a.coreLiverTempC}°C</span></div>
          <div class="meta-row"><span>${n?"환경온도":"Ambient Temp"}:</span> <span>${o.ambientTempC}°C</span></div>
        </div>
      </div>

      <div class="panel-section">
        <h3>🛠️ ${n?"법의병리 검사 프로토콜":"Medicolegal Protocols"}</h3>
        <div class="action-btn-list">
          <button class="action-btn ${r.liverTempMeasured?"done":""}" id="btn-autopsy-liver">
            🌡️ ${y("probeLiver")}
          </button>
          <button class="action-btn ${r.vitreousKMeasured?"done":""}" id="btn-autopsy-vitreous">
            👁️ ${y("probeVitreous")}
          </button>
          <button class="action-btn ${r.lividityTested?"done":""}" id="btn-autopsy-lividity">
            👆 ${y("probeLividity")}
          </button>
          <button class="action-btn ${r.rigorMortisAssessed?"done":""}" id="btn-autopsy-rigor">
            🦴 ${n?"시강(Rigor Mortis) 관절 경직도 검사":"Assess Rigor Mortis Rigidity"}
          </button>
          <button class="action-btn ${r.woundMeasured?"done":""}" id="btn-autopsy-wound">
            📏 ${y("probeWound")}
          </button>
          <button class="action-btn ${r.internalOrgansWeighed?"done":""}" id="btn-autopsy-organs">
            ⚖️ ${n?"Y자 절개 및 내부 장기 중량 측정":"Y-Incision & Organ Weights"}
          </button>
          <button class="action-btn ${r.femoralBloodDrawn?"done":""}" id="btn-autopsy-femoral">
            🩸 ${y("probeFemoralBlood")}
          </button>
          <button class="action-btn ${r.subungualScraped?"done":""}" id="btn-autopsy-subungual">
            💅 ${y("probeFingernail")}
          </button>
        </div>
      </div>
    </div>

    <div class="autopsy-main-area">
      <div class="autopsy-top-controls">
        <div class="orientation-switch">
          <button class="btn-toggle ${X==="anterior"?"active":""}" id="btn-orient-ant">
            ${y("bodyViewAnterior")}
          </button>
          <button class="btn-toggle ${X==="posterior"?"active":""}" id="btn-orient-post">
            ${y("bodyViewPosterior")}
          </button>
        </div>

        <div class="anatomy-layer-switch">
          <button class="btn-layer ${ee==="surface"?"active":""}" data-layer="surface">
            👤 ${n?"표피/시반 (Skin)":"Skin"}
          </button>
          <button class="btn-layer ${ee==="skeletal"?"active":""}" data-layer="skeletal">
            🦴 ${n?"골격/외상 (Skeletal)":"Skeletal"}
          </button>
          <button class="btn-layer ${ee==="visceral"?"active":""}" data-layer="visceral">
            🫀 ${n?"내장 장기 (Visceral)":"Visceral"}
          </button>
        </div>

        <div class="autopsy-headline">
          <h2>${y("autopsyTitle")}</h2>
        </div>
      </div>

      <div class="autopsy-examination-deck">
        <!-- Interactive Medical-Grade Human Anatomical Visualizer -->
        <div class="autopsy-table-surface">
          <div class="body-canvas-container orient-${X} layer-${ee}">
            <div class="cadavre-anatomy-wrapper">
              ${ni(o,r,X,n,ee)}
            </div>
          </div>
        </div>

        <!-- Pathology Diagnostic Monitor & WASM Result Readout -->
        <div class="autopsy-monitor">
          <div class="monitor-header">
            <span>🔬 BIO-MORTEM DIAGNOSTIC TELEMETRY</span>
            <span class="pulse-dot"></span>
          </div>
          
          <div class="monitor-body">
            <!-- Henssge Nomogram WASM Box -->
            <div class="calc-box ${r.liverTempMeasured?"active":"idle"}">
              <div class="calc-title">📊 ${y("nomogramResult")} (WASM)</div>
              ${r.liverTempMeasured?`
                <div class="calc-value">${r.calculatedHenssgePmi.toFixed(1)} <span class="unit">Hours Post-Mortem</span></div>
                <div class="calc-formula">
                  (T_rect - T_amb)/(37.2 - T_amb) = 1.25·e^(-kt) - 0.25·e^(-5kt)<br>
                  k = 1.2815 / (${a.weightKg}^0.625 · ${a.clothingFactor}) - 0.0284<br>
                  <strong>사망 추정 시각: 약 ${r.calculatedHenssgePmi.toFixed(1)}시간 전</strong>
                </div>
              `:'<div class="idle-text">간실질 심부 체온을 측정하여 열역학적 헨스게 방정식을 실행하십시오.</div>'}
            </div>

            <!-- Vitreous Potassium Box -->
            <div class="calc-box ${r.vitreousKMeasured?"active":"idle"}">
              <div class="calc-title">🧪 ${y("vitreousResult")} (WASM)</div>
              ${r.vitreousKMeasured?`
                <div class="calc-value">${r.calculatedVitreousPmi.toFixed(1)} <span class="unit">Hours Post-Mortem</span></div>
                <div class="calc-formula">
                  Sturner Formula: PMI = 5.26 · [K+] - 30.9<br>
                  검출 농도: [K+] = ${a.vitreousPotassiumMmolL} mmol/L<br>
                  <strong>사망 추정 시각: 약 ${r.calculatedVitreousPmi.toFixed(1)}시간 전 (Henssge 값과 상호 교차 검증)</strong>
                </div>
              `:'<div class="idle-text">안구 초자체액을 천자하여 칼륨 이온 농도를 측정하십시오.</div>'}
            </div>

            <!-- Lividity & Wound Findings -->
            <div class="calc-box ${r.lividityTested||r.woundMeasured?"active alert":"idle"}">
              <div class="calc-title">⚖️ 법의병리 종합 소견 (Pathology Telemetry)</div>
              ${r.lividityTested?`
                <div class="pathology-finding-text">
                  <strong>[시반 검사]</strong> ${a.isLividityFixed?y("lividityFixed"):y("lividityBlanching")}<br>
                  <span class="finding-critical">
                    ℹ️ ${a.lividityInterpretationKo?n?a.lividityInterpretationKo:a.lividityInterpretationEn||a.lividityInterpretationKo:a.suspensionPosition==="vertical"&&a.lividitySite==="posterior"?n?"치명적 체위 모순: 시체는 수직(Hanging)으로 현수되어 있었으나 시반은 배부(등쪽)에 고정됨. 사망 후 최소 8~10시간 반듯이 누워있다가 사후에 현수된 위장 소견.":"Severe Postural Contradiction: Found suspended vertically, but lividity fixed on posterior plane. Decedent lay supine for >8h before post-mortem suspension.":a.suspensionPosition==="prone"&&a.lividitySite==="posterior"?n?"체위 반전 모순: 엎드린 복와위로 발견되었으나 배부에 시반이 형성됨. 사후 시체 이동/위장 증거.":"Postural Contradiction: Found prone, but hypostasis fixed on dorsal aspect. Indicates post-mortem movement.":n?`시반 분포: ${a.lividitySite==="posterior"?"배부":a.lividitySite==="anterior"?"복부":"하지 저류성"} (${a.isLividityFixed?"완전 고정":"압박 탈색 가능"})`:`Livor distribution: ${a.lividitySite} aspect (${a.isLividityFixed?"Fully fixed":"Blanchable upon pressure"})`}
                  </span>
                </div>
              `:""}

              ${r.rigorMortisAssessed?`
                <div class="pathology-finding-text mt-2">
                  <strong>[시강 검사]</strong> ${n?"악관절 및 경부, 주관절 완전 경직 상태 (Nysten 법칙에 부합, 체온 강하 PMI와 일치)":"Full rigor mortis across jaw, neck, and upper extremities (consistent with Nysten rule and core PMI)."}
                </div>
              `:""}

              ${r.woundMeasured?`
                <div class="pathology-finding-text mt-2">
                  <strong>[창상 계측]</strong> ${n?a.primaryTraumaDescriptionKo||a.ligatureFurrow.descriptionKo:a.primaryTraumaDescriptionEn||a.ligatureFurrow.descriptionEn}<br>
                  <span class="finding-critical">
                    ⚠️ ${n?a.ligatureFurrow.depthMm>0?a.ligatureFurrow.type==="horizontal_continuous"?"수평 삭흔 및 갑상연골 손상: 끈으로 목을 조른 전형적인 교사(Ligature Strangulation) 의심.":"사선형 불완전 삭흔.":"기계적/물리적 창상 정밀 캘리퍼스 계측 및 사진 채증 완료.":a.ligatureFurrow.depthMm>0?"Trauma evaluation complete: furrow depth and mechanical characteristics documented.":"Calipers measurement completed."}
                  </span>
                </div>
              `:""}

              ${r.internalOrgansWeighed?`
                <div class="pathology-finding-text mt-2">
                  <strong>[장기 중량 및 해부]</strong> ${n?a.internalOrgansKo||`뇌: 1,380g, 심장: ${Math.round(a.weightKg*4.5)}g, 폐: 좌 450g / 우 520g (급성 울혈), 간실질/신장 병변 정밀 절제.`:a.internalOrgansEn||`Brain: 1,380g, Heart: ${Math.round(a.weightKg*4.5)}g, Lungs: L 450g / R 520g (acute congestion).`}
                </div>
              `:""}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,i.querySelector("#btn-orient-ant")?.addEventListener("click",()=>{X="anterior",v.playAlsClick(),t.notify()}),i.querySelector("#btn-orient-post")?.addEventListener("click",()=>{X="posterior",v.playAlsClick(),t.notify()}),i.querySelectorAll("[data-layer]").forEach(s=>{s.addEventListener("click",c=>{v.playAlsClick(),ee=c.currentTarget.dataset.layer,t.notify()})}),i.querySelector("#btn-autopsy-liver")?.addEventListener("click",()=>{v.playReaction();const s=t.measureLiverTemp();e(n?`간실질 체온 측정 완료: 헨스게 PMI = ${s.toFixed(1)}시간`:`Liver temp measured: Henssge PMI = ${s.toFixed(1)}h`,"good")}),i.querySelector("#btn-autopsy-vitreous")?.addEventListener("click",()=>{v.playSyringe();const s=t.measureVitreousK();e(n?`초자체액 [K+] 채취 완료: Sturner PMI = ${s.toFixed(1)}시간`:`Vitreous potassium drawn: Sturner PMI = ${s.toFixed(1)}h`,"good")}),i.querySelector("#btn-autopsy-lividity")?.addEventListener("click",()=>{v.playReaction(),t.testLividity(),e(n?"시반 압박탈색 시험 완료 (고정성 확인)":"Livor mortis blanch test completed","good")}),i.querySelector("#btn-autopsy-rigor")?.addEventListener("click",()=>{v.playReaction(),t.assessRigorMortis(),e(n?"시강(Rigor Mortis) 관절 굴신 검사 완료":"Rigor mortis examination completed","good")}),i.querySelector("#btn-autopsy-wound")?.addEventListener("click",()=>{v.playShutter(),t.measureWound(),e(n?"디지털 캘리퍼스 창상 계측 완료":"Wound measured with digital calipers","good")}),i.querySelector("#btn-autopsy-organs")?.addEventListener("click",()=>{v.playReaction(),t.weighInternalOrgans(),e(n?"내부 장기 적출 및 전자저울 중량 측정 완료":"Internal organs dissected and weighed","good")}),i.querySelector("#btn-autopsy-femoral")?.addEventListener("click",()=>{v.playSyringe(),t.drawFemoralBlood(),e(n?"독극물 분석용 대퇴정맥혈 채취 완료":"Femoral blood drawn for GC-MS toxicology","good")}),i.querySelector("#btn-autopsy-subungual")?.addEventListener("click",()=>{v.playSyringe(),t.scrapeSubungual(),e(n?"손톱 밑 DNA 찰과물 수거 완료":"Subungual scrapings collected for STR DNA","good")}),i.querySelectorAll(".body-target").forEach(s=>{s.addEventListener("click",c=>{const l=c.currentTarget.dataset.action;l==="wound"&&i.querySelector("#btn-autopsy-wound")?.click(),l==="liver"&&i.querySelector("#btn-autopsy-liver")?.click(),l==="vitreous"&&i.querySelector("#btn-autopsy-vitreous")?.click(),l==="lividity"&&i.querySelector("#btn-autopsy-lividity")?.click(),l==="femoral"&&i.querySelector("#btn-autopsy-femoral")?.click(),l==="subungual"&&i.querySelector("#btn-autopsy-subungual")?.click()})}),i}let N=null;const oi=1.6,ri=6;function si(t){return t.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}function ve(t){const e=t.getSpatterScene();return(!N||N.caseId!==e.caseId||!e.stains.some(i=>i.id===N.stainId))&&(N=xe(t,e.stains[0])),N}function xe(t,e){const i=t.bpaMeasurements.get(e.id);return{caseId:t.currentCase.id,stainId:e.id,lengthMm:i?i.lengthMm:6,widthMm:i?i.widthMm:6,gammaDeg:i?Math.round(i.gammaDeg):0}}function ci(t,e){const i=t.getSpatterScene().stains,n=ve(t),o=i.findIndex(r=>r.id===n.stainId),a=i[(o+e+i.length)%i.length];N=xe(t,a)}function pt(t,e,i,n,o,a=""){const r=t.lengthMm*n/2,s=t.widthMm*n/2;return`
    <g transform="translate(${e.toFixed(2)} ${i.toFixed(2)}) rotate(${(-t.gammaDeg).toFixed(1)})" ${a}>
      <ellipse cx="0" cy="0" rx="${r.toFixed(2)}" ry="${s.toFixed(2)}" fill="${o}" />
      <path d="M ${r.toFixed(2)} ${(-s*.35).toFixed(2)} Q ${(r*1.7).toFixed(2)} 0 ${r.toFixed(2)} ${(s*.35).toFixed(2)} Z" fill="${o}" />
      <circle cx="${(r*2.05).toFixed(2)}" cy="0" r="${Math.max(.6,s*.18).toFixed(2)}" fill="${o}" />
    </g>`}function li(t,e){const i=t.getSpatterScene(),n=t.bpaResult,o=W;let a="";for(const c of t.bpaMeasurements.values()){const l=i.stains.find(u=>u.id===c.stainId);if(!l)continue;const d=(c.gammaDeg+180)*Math.PI/180,p=600;a+=`<line x1="${l.x}" y1="${o-l.y}" x2="${(l.x+p*Math.cos(d)).toFixed(1)}" y2="${(o-(l.y+p*Math.sin(d))).toFixed(1)}" class="bpa-string" />`}const r=i.stains.map(c=>{const l=t.bpaMeasurements.has(c.id);return`
        <g class="bpa-stain ${c.id===e?"selected":""} ${l?"measured":""}" data-stain="${c.id}" role="button" tabindex="0" aria-label="Stain ${c.id}">
          <circle cx="${c.x}" cy="${o-c.y}" r="9" class="bpa-hit" />
          ${pt(c,c.x,o-c.y,oi,"#9f1239")}
          <text x="${c.x+8}" y="${o-c.y-8}" class="bpa-stain-label">${c.id}${l?" ✓":""}</text>
        </g>`}).join("");let s="";if(n){const c=Math.max(6,n.convergence.rmsCm);s=`
      <circle cx="${n.convergence.x.toFixed(1)}" cy="${(o-n.convergence.y).toFixed(1)}" r="${c.toFixed(1)}" class="bpa-convergence" />
      <circle cx="${i.origin.x.toFixed(1)}" cy="${(o-i.origin.y).toFixed(1)}" r="5" class="bpa-reference" />
      <text x="${(n.convergence.x+c+4).toFixed(1)}" y="${(o-n.convergence.y+4).toFixed(1)}" class="bpa-stain-label">AOC</text>`}return`
    <svg class="bpa-floorplan" viewBox="-10 -10 ${Z+20} ${W+20}" width="100%" role="img" aria-label="Floor plan with bloodstains">
      <defs>
        <clipPath id="bpa-room"><rect x="0" y="0" width="${Z}" height="${W}" /></clipPath>
        <pattern id="bpa-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1e293b" stroke-width="0.6" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="${Z}" height="${W}" fill="#0b1220" />
      <rect x="0" y="0" width="${Z}" height="${W}" fill="url(#bpa-grid)" stroke="#475569" stroke-width="2" />
      <g clip-path="url(#bpa-room)">${a}</g>
      ${r}
      ${s}
      <text x="4" y="${W-4}" class="bpa-axis">0</text>
      <text x="${Z-4}" y="${W-4}" class="bpa-axis" text-anchor="end">${Z} cm</text>
    </svg>`}function mt(t,e,i){const n=t.getSpatterScene().stains.find(l=>l.id===e.stainId),o=ri,a=e.lengthMm*o/2,r=Math.min(e.widthMm,e.lengthMm)*o/2,s=Pe(Math.min(e.widthMm,e.lengthMm),e.lengthMm),c=Math.min(e.widthMm,e.lengthMm)/e.lengthMm;return`
    <div class="bpa-loupe-wrap">
      <svg class="bpa-loupe" viewBox="-80 -80 160 160" width="100%" role="img" aria-label="Measuring loupe for stain ${n.id}">
        <circle cx="0" cy="0" r="78" fill="#f5f0e6" stroke="#334155" stroke-width="3" />
        <line x1="-78" y1="0" x2="78" y2="0" stroke="#cbd5e1" stroke-width="0.4" />
        <line x1="0" y1="-78" x2="0" y2="78" stroke="#cbd5e1" stroke-width="0.4" />
        ${Array.from({length:13},(l,d)=>`<line x1="${-72+d*12}" y1="70" x2="${-72+d*12}" y2="${d%5===0?62:66}" stroke="#64748b" stroke-width="0.6" />`).join("")}
        <text x="-72" y="58" font-size="5" fill="#64748b" font-family="monospace">2 mm/tick</text>
        ${pt(n,0,0,o,"#7f1d1d")}
        <g transform="rotate(${(-e.gammaDeg).toFixed(1)})">
          <ellipse cx="0" cy="0" rx="${a.toFixed(2)}" ry="${r.toFixed(2)}" fill="none" stroke="#0ea5e9" stroke-width="0.9" stroke-dasharray="3 2" />
          <line x1="0" y1="0" x2="${(a+14).toFixed(2)}" y2="0" stroke="#0ea5e9" stroke-width="0.9" marker-end="url(#bpa-arrow)" />
        </g>
        <defs>
          <marker id="bpa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0ea5e9" />
          </marker>
        </defs>
      </svg>
      <div class="bpa-controls">
        <div class="bpa-readout">
          <strong>${n.id}</strong> · ${i?"위치":"position"} (${n.x.toFixed(0)}, ${n.y.toFixed(0)}) cm
        </div>
        <label>${i?"장축 길이 L":"Length L"} <output id="bpa-out-len">${e.lengthMm.toFixed(1)} mm</output>
          <input type="range" id="bpa-len" min="1" max="12" step="0.1" value="${e.lengthMm}" />
        </label>
        <label>${i?"단축 폭 W":"Width W"} <output id="bpa-out-wid">${e.widthMm.toFixed(1)} mm</output>
          <input type="range" id="bpa-wid" min="0.5" max="12" step="0.1" value="${e.widthMm}" />
        </label>
        <label>${i?"방향각 γ (진행 방향)":"Directional angle γ (travel)"} <output id="bpa-out-gam">${e.gammaDeg.toFixed(0)}°</output>
          <input type="range" id="bpa-gam" min="0" max="359" step="1" value="${e.gammaDeg}" />
        </label>
        <div class="bpa-formula">
          sin α = W / L = ${c.toFixed(3)} → α = <strong id="bpa-out-alpha">${s.toFixed(1)}°</strong> <span class="bpa-muted">(WASM)</span>
        </div>
        <div class="inst-controls">
          <button class="btn-primary" id="btn-bpa-record">${i?"측정값 기록":"Record measurement"}</button>
          <button class="btn-secondary" id="btn-bpa-remove" ${t.bpaMeasurements.has(n.id)?"":"disabled"}>${i?"삭제":"Remove"}</button>
        </div>
        <p class="bpa-muted">${i?"점선 타원을 혈흔의 몸체(꼬리 제외)에 맞추고, 화살표를 꼬리 방향(비행 방향)으로 돌리세요. 단축키: , . 혈흔 전환, Enter 기록, R 재구성.":"Fit the dashed ellipse to the stain body (exclude the tail) and turn the arrow toward the tail (direction of travel). Keys: , and . switch stain, Enter records, R reconstructs."}</p>
      </div>
    </div>`}function di(t,e){const i=[...t.bpaMeasurements.values()].sort((n,o)=>n.stainId.localeCompare(o.stainId,void 0,{numeric:!0})).map(n=>`
      <tr>
        <td>${si(n.stainId)}</td>
        <td>${n.widthMm.toFixed(1)}</td>
        <td>${n.lengthMm.toFixed(1)}</td>
        <td>${(n.widthMm/n.lengthMm).toFixed(3)}</td>
        <td>${n.impactDeg.toFixed(1)}°</td>
        <td>${n.gammaDeg.toFixed(0)}°</td>
      </tr>`).join("");return`
    <table class="bpa-table">
      <thead><tr><th>${e?"혈흔":"Stain"}</th><th>W (mm)</th><th>L (mm)</th><th>W/L</th><th>α</th><th>γ</th></tr></thead>
      <tbody>${i||`<tr><td colspan="6" class="bpa-muted">${e?"기록된 측정값 없음":"No measurements recorded"}</td></tr>`}</tbody>
    </table>`}function ui(t,e){const i=t.bpaMeasurements.size,n=t.bpaResult,o=t.getSpatterScene(),a=`<button class="btn-primary" id="btn-bpa-reconstruct" ${i<ue?"disabled":""}>
      ${e?`기원 영역 재구성 (${i}/${ue}+)`:`Reconstruct area of origin (${i}/${ue}+)`}
    </button>`;if(!n)return`<div class="bpa-result">${a}
      <p class="bpa-muted">${e?"최소 3개 혈흔의 측정값이 필요합니다. 방향선이 거의 평행하면 수렴 영역을 계산할 수 없습니다.":"At least three measured stains are needed. Nearly parallel trace lines have no unique convergence point."}</p></div>`;const r=ot(n),s={excellent:e?"우수: 기준 재구성과 일치":"Excellent: matches the reference reconstruction",acceptable:e?"허용 범위: 측정 정밀도 개선 여지 있음":"Acceptable: measurements could be tighter",poor:e?"부정확: 타원 맞춤과 방향각을 다시 확인하세요":"Poor: re-check ellipse fits and directional angles"}[r],c=200,l=d=>Math.max(0,Math.min(c,d));return`
    <div class="bpa-result">
      ${a}
      <div class="bpa-result-grid">
        <div>
          <div class="bpa-kv"><span>${e?"수렴 영역 (AOC)":"Area of convergence"}</span><strong>(${n.convergence.x.toFixed(1)}, ${n.convergence.y.toFixed(1)}) cm</strong></div>
          <div class="bpa-kv"><span>${e?"방향선 RMS 잔차":"Trace RMS residual"}</span><strong>${n.convergence.rmsCm.toFixed(1)} cm</strong></div>
          <div class="bpa-kv"><span>${e?"기원 높이 (탄젠트법)":"Origin height (tangent method)"}</span><strong>${n.origin.meanZ.toFixed(0)} ± ${n.origin.stdDevZ.toFixed(0)} cm</strong></div>
          <div class="bpa-kv"><span>${e?"범위":"Range"}</span><strong>${n.origin.minZ.toFixed(0)} – ${n.origin.maxZ.toFixed(0)} cm</strong></div>
          <div class="bpa-kv"><span>${e?"추정 자세":"Estimated posture"}</span><strong>${Se(n.posture,e)}</strong></div>
          <div class="bpa-kv"><span>${e?"기준 대비 오차":"Error vs reference"}</span><strong>${n.planarErrorCm.toFixed(1)} cm / ${n.heightErrorCm>=0?"+":""}${n.heightErrorCm.toFixed(0)} cm</strong></div>
          <p class="bpa-grade bpa-grade-${r}">${s}</p>
          <p class="bpa-muted">${e?"탄젠트법은 중력과 공기저항을 무시하므로 실제 기원 높이의 상한값입니다.":"The tangent method ignores gravity and drag, so it gives an upper bound on the true source height."}
            ${o.documented?"":e?" 이 사건 기록에는 충격 비산흔이 없어 훈련용 기준 패턴을 사용합니다.":" This case file records no impact spatter, so a training reference pattern is used."}</p>
        </div>
        <svg class="bpa-elevation" viewBox="0 0 120 220" role="img" aria-label="Elevation view">
          <rect x="0" y="0" width="120" height="220" fill="#0b1220" />
          ${[50,100,150,200].map(d=>`<line x1="20" x2="118" y1="${210-d}" y2="${210-d}" stroke="#1e293b" /><text x="2" y="${213-d}" class="bpa-axis">${d}</text>`).join("")}
          <rect x="40" y="${(210-l(n.origin.maxZ)).toFixed(1)}" width="24" height="${Math.max(1,l(n.origin.maxZ)-l(n.origin.minZ)).toFixed(1)}" fill="#0ea5e955" />
          <line x1="34" x2="70" y1="${(210-l(n.origin.meanZ)).toFixed(1)}" y2="${(210-l(n.origin.meanZ)).toFixed(1)}" stroke="#0ea5e9" stroke-width="2.5" />
          <line x1="76" x2="112" y1="${(210-l(o.origin.z)).toFixed(1)}" y2="${(210-l(o.origin.z)).toFixed(1)}" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4 2" />
          <line x1="20" x2="118" y1="210" y2="210" stroke="#64748b" />
          <text x="52" y="218" class="bpa-axis" text-anchor="middle">AOO</text>
          <text x="94" y="218" class="bpa-axis" text-anchor="middle">REF</text>
        </svg>
      </div>
    </div>`}function pi(t,e){const i=ve(t);return`
    <div class="bpa-bench">
      <div class="instrument-card bpa-card-plan">
        <h3>🩸 ${e?"혈흔 형태 분석 (BPA): 평면도":"Bloodstain Pattern Analysis: Floor Plan"}</h3>
        <p class="inst-desc">${e?"혈흔을 선택해 확대경에서 측정하세요. 각 혈흔의 방향선이 만나는 지점이 수렴 영역이며, 충돌각으로 기원 높이를 계산합니다.":"Select a stain and measure it under the loupe. Trace lines meet at the area of convergence, and impact angles give the height of the area of origin."}</p>
        ${li(t,i.stainId)}
        ${di(t,e)}
      </div>
      <div class="instrument-card bpa-card-loupe">
        <h3>🔍 ${e?"측정 확대경 (10배)":"Measuring Loupe (10x)"}</h3>
        ${mt(t,i,e)}
        ${ui(t,e)}
      </div>
    </div>`}function mi(t,e,i,n,o){const a=ve(e);t.querySelectorAll(".bpa-stain").forEach(s=>{const c=()=>{const l=e.getSpatterScene().stains.find(d=>d.id===s.dataset.stain);l&&(N=xe(e,l),o())};s.addEventListener("click",c),s.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),c())})});const r=(s,c)=>{const l=t.querySelector(`#${s}`);l?.addEventListener("input",()=>{a[c]=Number(l.value);const d=t.querySelector(".bpa-loupe-wrap");if(d){const p=document.createElement("div");p.innerHTML=mt(e,a,i);const u=p.querySelector(".bpa-loupe"),m=d.querySelector(".bpa-loupe");u&&m&&m.replaceWith(u);const h=Math.min(a.widthMm,a.lengthMm);t.querySelector("#bpa-out-len").textContent=`${a.lengthMm.toFixed(1)} mm`,t.querySelector("#bpa-out-wid").textContent=`${a.widthMm.toFixed(1)} mm`,t.querySelector("#bpa-out-gam").textContent=`${a.gammaDeg.toFixed(0)}°`,t.querySelector("#bpa-out-alpha").textContent=`${Pe(h,a.lengthMm).toFixed(1)}°`;const g=t.querySelector(".bpa-formula");g?.firstChild&&(g.firstChild.textContent=`sin α = W / L = ${(h/a.lengthMm).toFixed(3)} → α = `)}})};r("bpa-len","lengthMm"),r("bpa-wid","widthMm"),r("bpa-gam","gammaDeg"),t.querySelector("#btn-bpa-record")?.addEventListener("click",()=>ht(e,i,n)),t.querySelector("#btn-bpa-remove")?.addEventListener("click",()=>{e.removeBpaMeasurement(a.stainId)}),t.querySelector("#btn-bpa-reconstruct")?.addEventListener("click",()=>{const s=e.computeBpaReconstruction();s?n(i?`기원 높이 ${s.origin.meanZ.toFixed(0)} cm: ${Se(s.posture,!0)}`:`Origin height ${s.origin.meanZ.toFixed(0)} cm: ${Se(s.posture,!1)}`,ot(s)==="poor"?"bad":"good"):n(i?"방향선이 수렴하지 않습니다. 방향각을 다시 측정하세요.":"Trace lines do not converge. Re-measure the directional angles.","bad")})}function ht(t,e,i){const n=ve(t),a=t.getSpatterScene().stains.find(s=>s.id!==n.stainId&&!t.bpaMeasurements.has(s.id));a&&(N=xe(t,a));const r=t.recordBpaMeasurement(n.stainId,n.widthMm,n.lengthMm,n.gammaDeg);if(!r){N=n;return}i(e?`${r.stainId}: 충돌각 α = ${r.impactDeg.toFixed(1)}° 기록`:`${r.stainId}: impact angle α = ${r.impactDeg.toFixed(1)}° recorded`,"info")}const ce=["serology","dna","gcms","ballistics","bpa"];let q="serology";function hi(t){q=t}function Qe(){return q}function fi(t,e){const i=document.createElement("div");i.className="station-container lab-station";const n=w()==="ko";function o(){i.innerHTML=`
      <div class="lab-instrument-header">
        <div class="lab-tabs">
          <button class="lab-tab-btn ${q==="serology"?"active":""}" data-labtab="serology">
            🧪 ${y("labTabSerology")}
          </button>
          <button class="lab-tab-btn ${q==="dna"?"active":""}" data-labtab="dna">
            🧬 ${y("labTabDna")}
          </button>
          <button class="lab-tab-btn ${q==="gcms"?"active":""}" data-labtab="gcms">
            📉 ${y("labTabGcms")}
          </button>
          <button class="lab-tab-btn ${q==="ballistics"?"active":""}" data-labtab="ballistics">
            🔬 ${n?"비교현미경·선조흔 (Microscopy)":"Comparison Microscopy"}
          </button>
          <button class="lab-tab-btn ${q==="bpa"?"active":""}" data-labtab="bpa">
            🩸 ${n?"혈흔 형태 분석 (BPA)":"Bloodstain Pattern Analysis"}
          </button>
        </div>
        <div class="lab-title-badge">
          <span>ISO/IEC 17025 ACCREDITED FORENSIC LABORATORY</span>
        </div>
      </div>

      <div class="lab-workbench-body">
        ${yi(q,t,n)}
      </div>
    `,i.querySelectorAll("[data-labtab]").forEach(a=>{a.addEventListener("click",r=>{v.playAlsClick(),q=r.currentTarget.dataset.labtab,o()})}),q==="bpa"?mi(i,t,n,e,o):bi(i,t,n,e,o)}return o(),i}function gi(t,e,i,n){const r=t.length,s=180/Math.max(1,r);let c="";for(let d=0;d<r;d++){const p=20+d*s,u=Math.min(1,Math.max(.25,(t[d]-30)/120)),m=t[d]%3.5+1.8;c+=`<line x1="45" y1="${p.toFixed(1)}" x2="258" y2="${p.toFixed(1)}" stroke="rgba(245, 158, 11, ${u.toFixed(2)})" stroke-width="${m.toFixed(1)}" />`}let l="";for(let d=0;d<r;d++){const p=d+i,u=p>=0&&p<r?e[p]:(e[0]+e[r-1])/2+Math.sin(d*3.5)*15,m=20+d*s,h=Math.min(1,Math.max(.25,(u-30)/120)),g=u%3.5+1.8,b=i===0||n?"rgba(34, 197, 94, ":"rgba(56, 189, 248, ";l+=`<line x1="262" y1="${m.toFixed(1)}" x2="475" y2="${m.toFixed(1)}" stroke="${b}${h.toFixed(2)})" stroke-width="${g.toFixed(1)}" />`}return`
    <svg class="comparison-microscope-svg" viewBox="0 0 520 220" width="100%" height="100%">
      <defs>
        <radialGradient id="brass-specimen-left" cx="40%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#451a03" />
          <stop offset="70%" stop-color="#1e1005" />
          <stop offset="100%" stop-color="#080402" />
        </radialGradient>
        <radialGradient id="brass-specimen-right" cx="60%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#14532d" />
          <stop offset="70%" stop-color="#052e16" />
          <stop offset="100%" stop-color="#021208" />
        </radialGradient>
      </defs>

      <!-- Background Double Ocular Mask -->
      <rect x="0" y="0" width="520" height="220" fill="#080c14" rx="8" />
      <circle cx="150" cy="110" r="100" fill="url(#brass-specimen-left)" stroke="#334155" stroke-width="2" />
      <circle cx="370" cy="110" r="100" fill="url(#brass-specimen-right)" stroke="#334155" stroke-width="2" />

      <!-- Left Striations (Evidence) -->
      ${c}

      <!-- Right Striations (Standard, with offset) -->
      ${l}

      <!-- Central Optical Split Hairline (Leica Optical Split Prism) -->
      <line x1="260" y1="0" x2="260" y2="220" stroke="#38bdf8" stroke-width="2.5" />
      <line x1="260" y1="0" x2="260" y2="220" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2" />

      <!-- Labels inside Oculars -->
      <text x="60" y="28" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold">
        [LEFT] 현장 증거물 (Evidence)
      </text>
      <text x="460" y="28" fill="${i===0||n?"#22c55e":"#38bdf8"}" font-size="10" font-family="monospace" font-weight="bold" text-anchor="end">
        [RIGHT] 압수 표준시편 (Standard)
      </text>
    </svg>
  `}function yi(t,e,i){const o=e.currentCase.lab,a=e.labState;switch(t){case"bpa":return pi(e,i);case"serology":return`
        <div class="serology-deck">
          <!-- KM Test Bench -->
          <div class="instrument-card">
            <h3>🧪 ${y("kmTitle")}</h3>
            <p class="inst-desc">${y("kmDesc")}</p>
            <div class="reaction-chamber km-chamber ${a.kmTested?"reacted":""}">
              <div class="filter-paper">
                <div class="stain-spot ${a.kmTested?"pink-glow":""}">
                  ${a.kmTested?"💖 분홍색 정색 반응 (KM Positive)":"시료 점적 대기"}
                </div>
              </div>
            </div>
            <div class="inst-controls">
              <button class="btn-primary" id="btn-run-km" ${a.kmTested?"disabled":""}>
                ${a.kmTested?"✓ KM 잠혈반응 양성 확정":y("kmRun")}
              </button>
            </div>
          </div>

          <!-- Takayama Confirmatory Test Bench -->
          <div class="instrument-card">
            <h3>🔬 ${y("takayamaTitle")}</h3>
            <p class="inst-desc">${y("takayamaDesc")}</p>
            <div class="microscope-ocular takayama-ocular ${a.takayamaTested?"crystals-visible":""}">
              <div class="ocular-reticle"></div>
              <div class="crystal-field">
                ${a.takayamaTested?`
                  <div class="crystal c1"></div>
                  <div class="crystal c2"></div>
                  <div class="crystal c3"></div>
                  <span class="ocular-label">피리딘 헤모크로모겐 바늘 결정 (인혈 확증)</span>
                `:'<span class="ocular-label">슬라이드 글라스 가온 대기 중</span>'}
              </div>
            </div>
            <div class="inst-controls">
              <button class="btn-primary" id="btn-run-takayama" ${a.takayamaTested?"disabled":""}>
                ${a.takayamaTested?"✓ 타카야마 혈색소 결정 확인":y("takayamaRun")}
              </button>
            </div>
          </div>
        </div>
      `;case"dna":return o.strDna.length===0?`
          <div class="dna-electropherogram-deck">
            <div class="dna-toolbar">
              <h3>🧬 ${y("dnaTitle")}</h3>
            </div>
            <div class="empty-state-card" style="padding: 2.5rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: 8px; border: 1px dashed var(--border-color); margin-top: 1rem;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧬</div>
              <p>${i?"본 사건은 생체 접촉 흔적(DNA) 채취 대상 시료가 부재하거나, 독물학(GC-MS)·기기분석 또는 이학적 외상 감정이 주 감정 과제입니다.":"No biological touch samples or STR DNA exhibits required for this case; toxicological (GC-MS) or physical trauma analysis takes precedence."}</p>
            </div>
          </div>
        `:`
        <div class="dna-electropherogram-deck">
          <div class="dna-toolbar">
            <h3>🧬 ${y("dnaTitle")}</h3>
            <span class="rfu-threshold">${y("dnaRfuThreshold")}</span>
            <button class="btn-primary btn-sm" id="btn-analyze-dna" ${a.dnaAnalyzed?"disabled":""}>
              ${a.dnaAnalyzed?"✓ 모세관 전기영동 피크 호출 완료":y("dnaAnalyze")}
            </button>
          </div>

          <div class="electropherogram-grid">
            ${o.strDna.map(c=>`
              <div class="locus-card">
                <div class="locus-header">
                  <strong>${c.locus}</strong>
                  <span class="locus-alleles">
                    Victim: [${c.victimAlleles.join(", ")}] | Suspect: [${c.suspectAlleles.join(", ")}]
                  </span>
                </div>
                <div class="chart-container">
                  <svg class="electropherogram-svg" viewBox="0 0 500 120">
                    <!-- Grid & Threshold Line (150 RFU) -->
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#ff4757" stroke-dasharray="4" stroke-width="1" />
                    <text x="5" y="86" fill="#ff4757" font-size="10">150 RFU (Threshold)</text>
                    
                    <!-- Peaks -->
                    ${c.evidenceAlleles.map((l,d)=>{const p=c.evidenceRfu[d]||500,u=80+d*110,h=110-Math.min(80,p/1e3*80);return`
                        <path d="M ${u-20} 110 Q ${u} ${h} ${u+20} 110" fill="rgba(0, 210, 211, 0.25)" stroke="#00d2d3" stroke-width="2" />
                        <text x="${u}" y="${h-8}" fill="#ffffff" font-size="11" text-anchor="middle" font-weight="bold">
                          Allele ${l}
                        </text>
                        <text x="${u}" y="${h+12}" fill="#00d2d3" font-size="9" text-anchor="middle">
                          ${p} RFU
                        </text>
                      `}).join("")}
                    <line x1="0" y1="110" x2="500" y2="110" stroke="#485460" stroke-width="1" />
                  </svg>
                </div>
                <div class="locus-interpretation">
                  ${a.dnaAnalyzed?i?c.interpretationKo:c.interpretationEn:"피크 해석 대기"}
                </div>
              </div>
            `).join("")}
          </div>

          ${a.dnaAnalyzed?`
            <div class="dna-mixture-summary">
              <h4>⚖️ CODIS 혼합 프로필 감정 결론</h4>
              <p>${i?o.dnaSummaryKo||"수거된 증거물의 STR 유전자형 분석 결과, 15개 상염색체 좌위에서 주요 대립유전자 일치 및 용의자 대립유전자 포함 확인.":o.dnaSummaryEn||"STR profiling exhibits conclusive allelic concordances across tested CODIS loci."}</p>
            </div>
          `:""}
        </div>
      `;case"gcms":if(o.gcms.length===0)return`
          <div class="gcms-deck">
            <div class="empty-state-card" style="padding: 2.5rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: 8px; border: 1px dashed var(--border-color); margin-top: 1rem; width: 100%;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📉</div>
              <p>${i?"본 사건에서는 기체크로마토그래피 질량분석(GC-MS) 대상 휘발성 독극물 시료가 부재하거나, 혈청학·DNA 또는 물리적 탄도 분석이 주요 감정 항목입니다.":"No volatile toxicology samples required for GC-MS profiling in this case."}</p>
            </div>
          </div>
        `;const r=o.gcms[a.gcmsPeakSelected]||o.gcms[0],s=a.gcmsCosineScore>0?(a.gcmsCosineScore*100).toFixed(1):r?"99.4":"0";return`
        <div class="gcms-deck">
          <div class="gcms-left-pane">
            <h3>📈 ${y("gcmsTic")}</h3>
            <div class="tic-chart">
              <svg viewBox="0 0 450 160" class="tic-svg">
                <line x1="40" y1="140" x2="440" y2="140" stroke="#747d8c" stroke-width="1.5" />
                <line x1="40" y1="20" x2="40" y2="140" stroke="#747d8c" stroke-width="1.5" />
                
                <!-- Baseline -->
                <path d="M 40 138 Q 100 136 150 138" fill="none" stroke="#2ed573" stroke-width="2" />
                
                <!-- Peaks -->
                ${o.gcms.map((c,l)=>{const d=50+c.retentionTimeMin*24,p=30+(l===0?0:40),u=l===a.gcmsPeakSelected;return`
                    <g class="tic-peak-group" data-peak-index="${l}" style="cursor: pointer;">
                      <path d="M ${d-12} 138 Q ${d} ${p} ${d+12} 138" 
                            fill="${u?"rgba(46, 213, 115, 0.4)":"rgba(46, 213, 115, 0.15)"}" 
                            stroke="${u?"#ffa502":"#2ed573"}" 
                            stroke-width="${u?3:2}" />
                      <text x="${d}" y="${p-6}" fill="${u?"#ffa502":"#ffffff"}" font-size="10" text-anchor="middle">
                        ${c.retentionTimeMin}m
                      </text>
                    </g>
                  `}).join("")}
              </svg>
            </div>
            <div class="peak-select-pills">
              ${o.gcms.map((c,l)=>`
                <button class="pill-btn ${l===a.gcmsPeakSelected?"active":""}" data-peak="${l}">
                  Peak ${l+1}: ${c.retentionTimeMin} min (${c.compoundName.split(" ")[0]})
                </button>
              `).join("")}
            </div>
          </div>

          <div class="gcms-right-pane">
            <div class="spectrum-card">
              <div class="spec-header">
                <h4>${r?r.compoundName:"Compound"}</h4>
                <span class="nist-match-badge">NIST Cosine Match: ${s}% (WASM)</span>
              </div>
              <div class="mass-spectrum-chart">
                <svg viewBox="0 0 450 150" class="spec-svg">
                  <line x1="30" y1="130" x2="430" y2="130" stroke="#747d8c" />
                  ${r?r.mzPeaks.map(c=>{const l=30+c.mz/350*380,d=c.intensity/100*90;return`
                      <line x1="${l}" y1="130" x2="${l}" y2="${130-d}" stroke="#ff4757" stroke-width="3" />
                      <text x="${l}" y="${125-d}" fill="#ffffff" font-size="9" text-anchor="middle">m/z ${c.mz}</text>
                    `}).join(""):""}
                </svg>
              </div>
              <div class="clinical-note-box">
                <strong>[임상독성학적 의의]</strong>
                <p>${i?r.clinicalSignificanceKo:r.clinicalSignificanceEn}</p>
              </div>
            </div>
          </div>
        </div>
      `;case"ballistics":{const c=e.getComparisonMicroscopyData(),l=e.microscopyStageOffset,d=a.ballisticsCorrelation,p=a.ballisticsAligned||d>=.95;return`
        <div class="ballistics-deck">
          <div class="microscope-top-meta">
            <div class="microscope-branding">
              <span class="microscope-model">🔬 LEICA FS4000 M · 광학 비교현미경 (Forensic Comparison Microscope)</span>
              <h4>${i?c.titleKo:c.titleEn} [${c.caliber}]</h4>
            </div>
            <div class="microscope-mag-tag">
              <span>MAG: 40X · TELECENTRIC DUAL STAGE</span>
            </div>
          </div>

          <!-- Split-Ocular Visualizer -->
          <div class="microscope-ocular-frame">
            ${gi(c.profileA,c.profileB,l,a.ballisticsAligned)}
          </div>

          <!-- Vernier Micrometer Stage & Pearson Correlation Controls -->
          <div class="microscope-vernier-controls">
            <div class="stage-dial-card">
              <div class="dial-header">
                <strong>⚙️ 재물대 마이크로미터 미세 이송 노브 (Micrometer Stage Dial)</strong>
                <span class="offset-display">위치 변위: <code>Δx = ${l>0?`+${l}`:l} μm</code></span>
              </div>
              <div class="dial-action-row">
                <button class="btn-vernier-step" data-microscope-step="-5">⏪ -5</button>
                <button class="btn-vernier-step" data-microscope-step="-1">◀ -1</button>
                <input type="range" class="vernier-slider" id="microscope-stage-slider" min="-10" max="10" value="${l}" />
                <button class="btn-vernier-step" data-microscope-step="1">+1 ▶</button>
                <button class="btn-vernier-step" data-microscope-step="5">+5 ⏩</button>
              </div>
              <p class="vernier-hint">
                ${i?"💡 좌우 시편의 미세 선조(Striation lines)가 중앙 분할선(Split line)을 기준으로 수평 일치할 때까지 재물대를 조절하십시오.":"Adjust stage dial until striation lines horizontally align across the central optical split-line."}
              </p>
            </div>

            <div class="correlation-score-card">
              <div class="score-header">
                <span>피어슨 상관계수 (Pearson r via WASM):</span>
                <strong class="score-display ${p?"match":Math.abs(l)<=2?"close":""}">
                  r = ${d>0?d.toFixed(3):l===0?"0.984":"0.214"}
                </strong>
              </div>

              <div class="match-verdict-indicator ${p?"verified":""}">
                ${p?i?"✅ [일치 확정] 동일 공구/총기 발사흔 입증 (Daubert 충족)":"✅ [Match Confirmed] Positive Identification (Daubert Standard)":i?"⚠️ 미정렬 (불일치) - 재물대 위치를 조정하십시오":"⚠️ Misaligned - Adjust micrometer stage"}
              </div>

              <button class="btn-primary btn-large" id="btn-align-ballistics" ${a.ballisticsAligned?"disabled":""}>
                ${a.ballisticsAligned?i?"✓ 미세선조 동일성 감정 확정 완료":"✓ Striation Match Admitted into Evidence":i?"🔒 일치점 잠금 및 동일성 확정 (Lock Match)":"🔒 Lock Identification Match"}
              </button>
            </div>
          </div>
        </div>
      `}}}function bi(t,e,i,n,o){t.querySelector("#btn-run-km")?.addEventListener("click",()=>{v.playReaction(),e.runKMTest(),n(i?"카스틀-메이어 잠혈반응 검사 완료 (Heme Peroxidase Confirmation)":"Kastle-Meyer presumptive test positive for heme","good"),o()}),t.querySelector("#btn-run-takayama")?.addEventListener("click",()=>{v.playReaction(),e.runTakayamaTest(),n(i?"타카야마 피리딘 결정 확인: 인혈(Human Blood) 확정":"Takayama crystal assay confirms human blood","good"),o()}),t.querySelector("#btn-analyze-dna")?.addEventListener("click",()=>{v.playReaction(),e.runDNAAnalysis(),n(i?"CODIS STR 전기영동 분석 완료":"STR DNA electropherogram analyzed","good"),o()}),t.querySelectorAll("[data-peak], [data-peak-index]").forEach(r=>{r.addEventListener("click",s=>{v.playAlsClick();const c=s.currentTarget,l=parseInt(c.dataset.peak||c.dataset.peakIndex||"0",10);e.selectGCMSPeak(l),o()})}),t.querySelectorAll("[data-microscope-step]").forEach(r=>{r.addEventListener("click",s=>{v.playMicroscopeDial();const c=parseInt(s.currentTarget.dataset.microscopeStep||"0",10),l=e.microscopyStageOffset+c;e.setMicroscopyOffset(l),o()})}),t.querySelector("#microscope-stage-slider")?.addEventListener("input",r=>{v.playMicroscopeDial();const s=parseInt(r.target.value,10);e.setMicroscopyOffset(s),o()}),t.querySelector("#btn-align-ballistics")?.addEventListener("click",()=>{v.playShutter(),v.playMatchLock(),e.alignBallistics(),n(i?"비교현미경 선조흔 대조 완료: 피어슨 r > 0.95 동일물 확정!":"Microscopic striation match confirmed (r > 0.95)!","good"),o()})}function vi(t,e){const i=document.createElement("div");i.className="station-container binder-station";const n=w()==="ko",o=t.currentCase,a=o.victim,r=t.autopsyState,s=t.labState;let c=1;function l(){const F=Math.max(5,Math.floor(o.ambientTempC-2)),G=40,V=1.2815/Math.pow(Math.max(30,a.weightKg),.625)/Math.max(.8,a.clothingFactor),$=Math.max(.04,Math.min(.25,V));function A(E){return 45+E/30*390}function P(E){return 20+(G-E)/(G-F)*150}let re="";for(let E=0;E<=30;E+=.5){const j=1.25*Math.exp(-$*E)-.25*Math.exp(-5*$*E),C=o.ambientTempC+(37.2-o.ambientTempC)*Math.max(0,j),_=A(E),O=P(C);re+=E===0?`M ${_.toFixed(1)} ${O.toFixed(1)}`:` L ${_.toFixed(1)} ${O.toFixed(1)}`}let se="";if(r.liverTempMeasured){const E=r.calculatedHenssgePmi,j=A(E),C=P(a.coreLiverTempC),_=A(Math.max(0,E-1.5)),O=A(Math.min(30,E+1.5));se=`
        <!-- 95% Confidence Interval Error Bar -->
        <line x1="${_.toFixed(1)}" y1="${C.toFixed(1)}" x2="${O.toFixed(1)}" y2="${C.toFixed(1)}" stroke="#ff4757" stroke-width="3" stroke-linecap="round" />
        <line x1="${_.toFixed(1)}" y1="${(C-5).toFixed(1)}" x2="${_.toFixed(1)}" y2="${(C+5).toFixed(1)}" stroke="#ff4757" stroke-width="2" />
        <line x1="${O.toFixed(1)}" y1="${(C-5).toFixed(1)}" x2="${O.toFixed(1)}" y2="${(C+5).toFixed(1)}" stroke="#ff4757" stroke-width="2" />
        
        <!-- Measured Point -->
        <circle cx="${j.toFixed(1)}" cy="${C.toFixed(1)}" r="6" fill="#ff4757" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 0 6px #ff4757)" />
        <text x="${j.toFixed(1)}" y="${(C-10).toFixed(1)}" fill="#ff6b81" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">
          PMI: ${E.toFixed(1)}h (±1.5h, 95% CI)
        </text>
      `}return`
      <svg class="dossier-chart-svg" viewBox="0 0 460 200" width="100%" height="100%">
        <rect width="460" height="200" fill="#0f172a" rx="6" />
        
        <!-- Grid lines -->
        ${[0,5,10,15,20,25,30].map(E=>`
          <line x1="${A(E)}" y1="20" x2="${A(E)}" y2="170" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="${A(E)}" y="188" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">${E}h</text>
        `).join("")}
        ${[40,35,30,25,20,15,10].filter(E=>E>=F).map(E=>`
          <line x1="45" y1="${P(E)}" x2="435" y2="${P(E)}" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="39" y="${P(E)+3}" fill="#64748b" font-size="9" font-family="monospace" text-anchor="end">${E}°</text>
        `).join("")}

        <!-- Ambient Temp Reference Line -->
        <line x1="45" y1="${P(o.ambientTempC)}" x2="435" y2="${P(o.ambientTempC)}" stroke="#38bdf8" stroke-dasharray="3,3" stroke-width="1.5" />
        <text x="431" y="${P(o.ambientTempC)-4}" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="end">
          Ta: ${o.ambientTempC.toFixed(1)}°C
        </text>

        <!-- Henssge Dual-Exponential Curve -->
        <path d="${re}" fill="none" stroke="#22d3ee" stroke-width="2.5" />
        
        ${se}
      </svg>
    `}function d(){function $(C){return 45+(C-4)/14*390}function A(C){return 130-(C-0)/80*110}const P=$(4),re=A(Math.max(0,5.26*4-30.9)),se=$(18),E=A(Math.min(80,5.26*18-30.9));let j="";if(r.vitreousKMeasured){const C=a.vitreousPotassiumMmolL,_=r.calculatedVitreousPmi,O=$(C),Oe=A(_);j=`
        <circle cx="${O.toFixed(1)}" cy="${Oe.toFixed(1)}" r="6" fill="#a855f7" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 0 6px #a855f7)" />
        <text x="${O.toFixed(1)}" y="${(Oe-10).toFixed(1)}" fill="#c084fc" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">
          [K+]: ${C.toFixed(1)} mmol/L (${_.toFixed(1)}h)
        </text>
      `}return`
      <svg class="dossier-chart-svg" viewBox="0 0 460 160" width="100%" height="100%">
        <rect width="460" height="160" fill="#0f172a" rx="6" />

        <!-- Grid Lines -->
        ${[4,7,10,13,16].map(C=>`
          <line x1="${$(C)}" y1="20" x2="${$(C)}" y2="130" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="${$(C)}" y="148" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">${C}</text>
        `).join("")}
        ${[0,20,40,60,80].map(C=>`
          <line x1="45" y1="${A(C)}" x2="435" y2="${A(C)}" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="39" y="${A(C)+3}" fill="#64748b" font-size="9" font-family="monospace" text-anchor="end">${C}h</text>
        `).join("")}

        <!-- Linear Regression Line -->
        <line x1="${P.toFixed(1)}" y1="${re.toFixed(1)}" x2="${se.toFixed(1)}" y2="${E.toFixed(1)}" stroke="#ec4899" stroke-width="2" />
        
        ${j}
      </svg>
    `}function p(){i.innerHTML=`
      <div class="binder-wrapper">
        <!-- Physical Forensic Manila Header -->
        <div class="dossier-cover-bar">
          <div class="agency-emblem-group">
            <span class="agency-crest">⚖️</span>
            <div>
              <div class="agency-title-ko">대한민국 경찰청 과학수사대 · 국립과학수사연구원</div>
              <div class="agency-title-en">NATIONAL FORENSIC SERVICE &amp; FORENSIC CRIME SCENE DOSSIER</div>
            </div>
          </div>
          <div class="dossier-stamp-group">
            <button class="btn-print-dossier" id="btn-print-dossier" title="${n?"수사 기록철 전체 인쇄 및 PDF 저장":"Print / Save as PDF"}">
              🖨️ ${n?"기록철 인쇄 (Print)":"Print Dossier"}
            </button>
            <span class="dossier-stamp stamp-top-secret">CONFIDENTIAL</span>
            <span class="dossier-stamp stamp-iso">ISO/IEC 17025</span>
          </div>
        </div>

        <div class="dossier-meta-strip">
          <div class="meta-item">
            <span class="meta-label">CASE FILE ID</span>
            <span class="meta-val">HMT-2026-${o.number.toString().padStart(3,"0")}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">CASE TITLE</span>
            <span class="meta-val">${n?o.titleKo:o.titleEn}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">LEAD PATHOLOGIST</span>
            <span class="meta-val">FORENSIC EXAMINER (YOU)</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">INQUEST READINESS</span>
            <span class="meta-val ${t.canEnterInquest().ready?"val-ready":"val-pending"}">
              ${t.canEnterInquest().ready?"✓ READY (출석 가능)":"⚠️ PENDING (추가 검식 필요)"}
            </span>
          </div>
        </div>

        <!-- 5 Authentic Manila Dossier Tabs -->
        <div class="dossier-tabs-nav">
          <button class="dossier-tab-btn ${c===1?"active":""}" data-tab="1">
            <span class="tab-index">01</span>
            <span class="tab-label">📋 ${n?"112 최초 출동 보고서":"Incident Dispatch"}</span>
          </button>
          <button class="dossier-tab-btn ${c===2?"active":""}" data-tab="2">
            <span class="tab-index">02</span>
            <span class="tab-label">📦 ${n?"증거물 연쇄보관 등록부":"Chain of Custody"}</span>
          </button>
          <button class="dossier-tab-btn ${c===3?"active":""}" data-tab="3">
            <span class="tab-index">03</span>
            <span class="tab-label">🔬 ${n?"국과수 사체부검 감정서":"Autopsy Protocol"}</span>
          </button>
          <button class="dossier-tab-btn ${c===4?"active":""}" data-tab="4">
            <span class="tab-index">04</span>
            <span class="tab-label">👤 ${n?"피의자 신문 및 알리바이":"Suspect Dossier"}</span>
          </button>
          <button class="dossier-tab-btn ${c===5?"active":""}" data-tab="5">
            <span class="tab-index">05</span>
            <span class="tab-label">📊 ${n?"첨단기기 종합 감정서":"Instrumental Report"}</span>
          </button>
        </div>

        <!-- Tab Content Body -->
        <div class="dossier-page-sheet">
          ${u()}
        </div>
      </div>
    `,i.querySelectorAll(".dossier-tab-btn").forEach(h=>{h.addEventListener("click",g=>{v.playPageFlip(),c=parseInt(g.currentTarget.dataset.tab||"1",10),p()})}),i.querySelectorAll("[data-inspect-evidence]").forEach(h=>{h.addEventListener("click",g=>{g.stopPropagation();const b=g.currentTarget.dataset.inspectEvidence,x=o.evidenceItems.find(k=>k.id===b);x&&(v.playLoupeZoom(),Ie(x,t,()=>{t.collectEvidence(x.id).success&&(v.playShutter(),v.playSealSnap()),p()}))})}),i.querySelector("#btn-dossier-proceed-inquest")?.addEventListener("click",()=>{const h=t.canEnterInquest();if(!h.ready){v.playObjection(),m(h.missingKo,h.missingEn);return}v.playGavel(),e()}),i.querySelector("#btn-print-dossier")?.addEventListener("click",()=>{v.playShutter(),window.print()})}function u(){switch(c){case 1:return`
          <div class="dossier-section-header">
            <h3>📋 SECTION I: 112 최초 신고 및 현장 초동 조치 보고서 (Incident Dispatch Log)</h3>
            <span class="doc-tag">POLICE FIRST-RESPONDER PROTOCOL</span>
          </div>

          <div class="dispatch-grid">
            <div class="dispatch-card">
              <h4>📞 112 신고 접수 및 초동 출동 일지</h4>
              <table class="dossier-sub-table">
                <tr>
                  <td><strong>신고 접수 일시</strong></td>
                  <td>2026년 11월 09일 03:22 (CODE 0 긴급출동)</td>
                </tr>
                <tr>
                  <td><strong>최초 신고자</strong></td>
                  <td>현장 관계자 / 최초 목격자</td>
                </tr>
                <tr>
                  <td><strong>관할 지구대</strong></td>
                  <td>광역수사대 과학수사계 초동감식팀</td>
                </tr>
                <tr>
                  <td><strong>현장 보존 조치</strong></td>
                  <td>폴리스라인 1선·2선 설치 완료, 외부인 출입 엄격 통제</td>
                </tr>
              </table>
            </div>

            <div class="dispatch-card">
              <h4>🌡️ 현장 환경 및 미기후(Microclimate) 계측</h4>
              <table class="dossier-sub-table">
                <tr>
                  <td><strong>현장 외기/실내 온도 (Ta)</strong></td>
                  <td><code>${o.ambientTempC.toFixed(1)} °C</code> (디지털 건습구 계측)</td>
                </tr>
                <tr>
                  <td><strong>실내 공조/난방 상태</strong></td>
                  <td>밀폐 격리, 환기 차단 확인</td>
                </tr>
                <tr>
                  <td><strong>환경 소견 요약</strong></td>
                  <td>${n?o.sceneDescriptionKo:o.sceneDescriptionEn}</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="dossier-text-block mt-3">
            <h4>📝 초동 감식 개요 (Initial Scene Reconnaissance)</h4>
            <p>${n?o.briefingKo:o.briefingEn}</p>
          </div>

          <div class="scene-status-summary mt-3">
            <div class="summary-box">
              <span class="summary-num">${t.collectedEvidenceIds.size} / ${o.evidenceItems.length}</span>
              <span class="summary-label">${n?"증거물 수거 현황":"Evidence Secured"}</span>
            </div>
            <div class="summary-box">
              <span class="summary-num">${o.ambientTempC.toFixed(1)}°C</span>
              <span class="summary-label">${n?"환경 기준 온도":"Ambient Temp"}</span>
            </div>
            <div class="summary-box">
              <span class="summary-num">${a.weightKg} kg</span>
              <span class="summary-label">${n?"변사체 추정 체중":"Estimated Weight"}</span>
            </div>
          </div>
        `;case 2:return`
          <div class="dossier-section-header">
            <h3>📦 SECTION II: 증거물 연쇄보관 등록부 (ISO 17025 Chain of Custody)</h3>
            <span class="doc-tag">EVIDENCE INTEGRITY LOG</span>
          </div>

          <p class="tab-intro-p">
            ${n?"모든 수거된 증거물은 미국 연방대법원 Daubert 기준 및 형사소송법 제310조의2 연쇄보관 규정에 따라 무균 봉인되어 국과수 전산에 등록됩니다.":"All seized evidence is cataloged under ISO/IEC 17025 and Daubert legal admissibility standards with tamper-evident seals."}
          </p>

          <table class="custody-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>증거물명 (Evidence Item)</th>
                <th>필요 도구</th>
                <th>광원</th>
                <th>보관 상태</th>
                <th>봉인 번호 (ISO 17025)</th>
                <th>정밀 검사</th>
              </tr>
            </thead>
            <tbody>
              ${o.evidenceItems.map((g,b)=>{const x=t.collectedEvidenceIds.has(g.id),k=`ISO17025-${g.id.replace(/[^a-zA-Z0-9]/g,"").toUpperCase().slice(0,8)}`;return`
                  <tr class="${x?"row-secured":"row-pending"}">
                    <td><code>#${b+1}</code></td>
                    <td><strong>${n?g.nameKo:g.nameEn}</strong></td>
                    <td><code>${g.requiredTool}</code></td>
                    <td><span class="als-pill als-${g.alsRequired}">${g.alsRequired.toUpperCase()}</span></td>
                    <td>
                      <span class="status-pill ${x?"secured":"missing"}">
                        ${x?"🔒 입고 완료 (Secured)":"⚠️ 현장 미수거"}
                      </span>
                    </td>
                    <td><code>${x?k:"---"}</code></td>
                    <td>
                      <button class="btn-table-inspect" data-inspect-evidence="${g.id}">
                        🔍 ${n?"10X 확대":"Inspect"}
                      </button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>

          <div class="contamination-audit-box mt-3">
            <strong>🛡️ 증거물 무균 취급 및 오염 감사 보고서 (Contamination Audit):</strong>
            <p>${t.contaminationFlags.length===0?"✓ 교차 오염 없음. 라텍스 무균 장갑 및 봉인 봉투 프로토콜 엄격 준수 확인됨.":`⚠️ 오염 경고 발생: ${t.contaminationFlags.join(", ")} (법정 탄핵 위험)`}</p>
          </div>
        `;case 3:return`
          <div class="dossier-section-header">
            <h3>🔬 SECTION III: 국립과학수사연구원 사체부검 감정서 (Medicolegal Autopsy Protocol)</h3>
            <span class="doc-tag">PATHOLOGY &amp; PMI SYNTHESIS</span>
          </div>

          <div class="autopsy-dual-grid">
            <!-- Left: Henssge Cooling Graph -->
            <div class="dossier-graph-box">
              <div class="graph-box-header">
                <h4>[1] 헨스게(Henssge) 사체 체온강하 냉각 곡선</h4>
                <span class="formula-tag">θ = 1.25e^(-kt) - 0.25e^(-5kt)</span>
              </div>
              <div class="svg-graph-wrapper">
                ${l()}
              </div>
              <div class="graph-status-legend">
                <span>간온도: <strong>${r.liverTempMeasured?`${a.coreLiverTempC}°C`:"미측정"}</strong></span>
                <span>체온강하 PMI: <strong style="color: #22d3ee;">${r.liverTempMeasured?`${r.calculatedHenssgePmi.toFixed(1)} 시간 전 (±1.5h)`:"미측정"}</strong></span>
              </div>
            </div>

            <!-- Right: Sturner Vitreous Potassium Graph -->
            <div class="dossier-graph-box">
              <div class="graph-box-header">
                <h4>[2] 스터너(Sturner) 안구 초자체 칼륨 농도 곡선</h4>
                <span class="formula-tag">PMI = 5.26 × [K+] - 30.9</span>
              </div>
              <div class="svg-graph-wrapper">
                ${d()}
              </div>
              <div class="graph-status-legend">
                <span>초자체 [K+]: <strong>${r.vitreousKMeasured?`${a.vitreousPotassiumMmolL} mmol/L`:"미측정"}</strong></span>
                <span>칼륨 PMI: <strong style="color: #a855f7;">${r.vitreousKMeasured?`${r.calculatedVitreousPmi.toFixed(1)} 시간 전`:"미측정"}</strong></span>
              </div>
            </div>
          </div>

          <div class="autopsy-findings-grid mt-3">
            <div class="findings-card">
              <h4>🩸 시반(Livor Mortis) 및 시강(Rigor Mortis) 법의학 소견</h4>
              <p>• <strong>시반 부위 및 형태:</strong> ${a.lividitySite.toUpperCase()} 부위 형성 (${a.isLividityFixed?"고정성 Fixed - 체위 변경 불능":"비고정성 Blanchable - 압박 시 퇴색"})</p>
              <p>• <strong>시반 색조 및 의미:</strong> ${n?a.lividityInterpretationKo||"암적색 일반 시반":a.lividityInterpretationEn||"Standard hypostatic purple"}</p>
              <p>• <strong>사체 현장 체위:</strong> ${a.suspensionPosition.toUpperCase()} (경부 현수 / 복와위 / 앙와위)</p>
            </div>

            <div class="findings-card">
              <h4>🩹 이학적 외상 및 삭흔(Ligature Furrow) 정밀 계측</h4>
              <p>• <strong>계측 상태:</strong> ${r.woundMeasured?"✓ 버니어 캘리퍼스 정밀 계측 완료":"⚠️ 미계측 (부검실 외상 탭에서 계측 필요)"}</p>
              <p>• <strong>외상/삭흔 형태학적 소견:</strong> ${r.woundMeasured?n?a.primaryTraumaDescriptionKo||a.ligatureFurrow.descriptionKo:a.primaryTraumaDescriptionEn||a.ligatureFurrow.descriptionEn:"미계측"}</p>
              <p>• <strong>설골/갑상연골 골절 여부:</strong> ${a.ligatureFurrow.thyroidCartilageFracture?"⚠️ 갑상연골 및 설골 대각 골절 확인 (교살/강한 외력 의심)":"골절 없음 (체중 분산형 삭조 흔적)"}</p>
              <p>• <strong>내부 장기 소견:</strong> ${n?a.internalOrgansKo||"주요 장기 울혈 및 급성 허탈 소견":a.internalOrgansEn||"Visceral congestion and collapse"}</p>
            </div>
          </div>
        `;case 4:return`
          <div class="dossier-section-header">
            <h3>👤 SECTION IV: 피의자·참고인 진술 조서 및 알리바이 타임라인 (Suspect Dossier)</h3>
            <span class="doc-tag">INTERROGATION &amp; TIMELINE</span>
          </div>

          <div class="suspect-alibi-card">
            <div class="suspect-avatar-header">
              <div class="suspect-photo">👤</div>
              <div>
                <h4>상대측 및 피의자 주장 진술 요약 (Defense Claims)</h4>
                <span class="suspect-status">형사사법 피의자 진술 조서</span>
              </div>
            </div>
            <div class="suspect-quote-box">
              <p>"${n?o.inquest[0].counselArgumentKo:o.inquest[0].counselArgumentEn}"</p>
            </div>
          </div>

          <div class="timeline-comparison-matrix mt-3">
            <h4>⚖️ 과학적 사후경과시간(PMI) vs 피의자 알리바이 탄핵 대조표</h4>
            <table class="custody-table">
              <thead>
                <tr>
                  <th>구분 (Category)</th>
                  <th>피의자/변호인 주장 알리바이</th>
                  <th>국과수 과학수사 계측치</th>
                  <th>법의학적 판정 (Verdict)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>사망 추정 시각</strong></td>
                  <td>당일 심야 또는 자살 주장</td>
                  <td>
                    ${r.liverTempMeasured?`${r.calculatedHenssgePmi.toFixed(1)}시간 전 (오차범위 ±1.5h)`:"부검실 계측 대기 중"}
                  </td>
                  <td>
                    <span class="verdict-tag ${r.liverTempMeasured?"tag-refuted":"tag-pending"}">
                      ${r.liverTempMeasured?"❌ 알리바이 탄핵 (Refuted)":"계측 대기"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><strong>사체 체위 모순</strong></td>
                  <td>발견 당시 자세 그대로 사망 주장</td>
                  <td>
                    ${a.isLividityFixed?`${a.lividitySite.toUpperCase()} 부위 고정성 시반 (사후 이동 입증)`:"시반 이동 가능성 존재"}
                  </td>
                  <td>
                    <span class="verdict-tag ${a.isLividityFixed?"tag-refuted":"tag-caution"}">
                      ${a.isLividityFixed?"❌ 사후 시체 이동 증명":"추가 분석"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td><strong>약물 및 독극물</strong></td>
                  <td>약물 복용 사실 부인</td>
                  <td>
                    ${s.gcmsNistMatched||s.gcmsPeakSelected>=0?`${a.toxicologyFound} 정밀 검출`:"GC-MS 분석 진행 중"}
                  </td>
                  <td>
                    <span class="verdict-tag ${s.gcmsNistMatched||s.gcmsPeakSelected>=0?"tag-refuted":"tag-pending"}">
                      ${s.gcmsNistMatched||s.gcmsPeakSelected>=0?"❌ 독극물 투여 입증":"분석 필요"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;case 5:const h=t.canEnterInquest();return`
          <div class="dossier-section-header">
            <h3>📊 SECTION V: 첨단 기기분석 감정서 및 법정 증언 적격 심사</h3>
            <span class="doc-tag">DAUBERT STANDARDS ADMISSIBILITY</span>
          </div>

          <div class="lab-instruments-summary-grid">
            <div class="inst-card">
              <h4>🧪 GC-MS 기체크로마토그래피 질량분석</h4>
              <p>• <strong>검출 물질:</strong> ${a.toxicologyFound}</p>
              <p>• <strong>NIST 스펙트럼 대조:</strong> ${s.gcmsNistMatched?"✓ 98.4% 코사인 유사도 일치 입증":s.gcmsPeakSelected>=0?"피크 선택 완료":"미분석"}</p>
            </div>

            <div class="inst-card">
              <h4>🧬 STR DNA 15개 유전자 좌위 분석</h4>
              <p>• <strong>CODIS 프로파일:</strong> ${s.dnaAnalyzed?n?o.lab.dnaSummaryKo||"15 loci 완벽 대립유전자 일치":o.lab.dnaSummaryEn||"15 loci profile matched":"미분석"}</p>
              <p>• <strong>일치 확률:</strong> ${s.dnaAnalyzed?"1 / 1.4 × 10^17 (무작위 일치 배제)":"---"}</p>
            </div>

            <div class="inst-card">
              <h4>🩸 법의혈청학 (Serology / KM &amp; Takayama)</h4>
              <p>• <strong>KM 헤모글로빈:</strong> ${s.kmTested?o.lab.serology.kmReactionPositive?"✓ 진홍색 양성 반응":"음성":"미시험"}</p>
              <p>• <strong>타카야마 결정:</strong> ${s.takayamaTested?o.lab.serology.takayamaCrystalsObserved?"✓ 연분홍 능형 피리딘헤모크로모겐 확인":"음성":"미시험"}</p>
            </div>
          </div>

          <!-- Courtroom Gatekeeper Box -->
          <div class="inquest-gatekeeper-box mt-3">
            <div class="gate-status-header">
              <div class="gate-seal">⚖️</div>
              <div>
                <h4>검시 공청회(Inquest) 출석을 위한 필수 감식 요건 감사</h4>
                <p>미국 연방대법원 Daubert 표준 및 형사소송법 엄격 증명 요건</p>
              </div>
            </div>

            <div class="gatekeeper-checklist">
              <div class="check-item ${t.collectedEvidenceIds.size>=o.evidenceItems.length?"checked":"missing"}">
                <span class="check-icon">${t.collectedEvidenceIds.size>=o.evidenceItems.length?"✅":"❌"}</span>
                <span>현장 증거물 수거 완료 (${t.collectedEvidenceIds.size} / ${o.evidenceItems.length})</span>
              </div>
              <div class="check-item ${r.liverTempMeasured?"checked":"missing"}">
                <span class="check-icon">${r.liverTempMeasured?"✅":"❌"}</span>
                <span>사체 간온도(Henssge) 계측 완료</span>
              </div>
              <div class="check-item ${r.vitreousKMeasured?"checked":"missing"}">
                <span class="check-icon">${r.vitreousKMeasured?"✅":"❌"}</span>
                <span>안구 초자체 칼륨([K+]) 계측 완료</span>
              </div>
              <div class="check-item ${r.woundMeasured&&r.lividityTested?"checked":"missing"}">
                <span class="check-icon">${r.woundMeasured&&r.lividityTested?"✅":"❌"}</span>
                <span>이학적 외상 계측 및 시반 압박 검사 완료</span>
              </div>
              <div class="check-item ${s.gcmsNistMatched||s.gcmsPeakSelected>=0||s.dnaAnalyzed||s.kmTested?"checked":"missing"}">
                <span class="check-icon">${s.gcmsNistMatched||s.gcmsPeakSelected>=0||s.dnaAnalyzed||s.kmTested?"✅":"❌"}</span>
                <span>실험실 기기분석(GC-MS/DNA/혈청) 최소 1종 완료</span>
              </div>
            </div>

            <div class="gate-proceed-bar mt-3">
              <button class="btn-primary btn-large ${h.ready?"btn-ready-pulse":""}" id="btn-dossier-proceed-inquest">
                🏛️ ${n?"검시 공청회 및 법정 증언 출석하기 (Proceed to Inquest)":"Proceed to Courtroom Inquest"}
              </button>
            </div>
          </div>
        `;default:return""}}function m(h,g){const b=document.createElement("dialog");b.className="hematite-modal inquest-blocked-modal";const x=n?h.map(k=>`<li>• ${k}</li>`).join(""):g.map(k=>`<li>• ${k}</li>`).join("");b.innerHTML=`
      <div class="modal-card">
        <div class="modal-header">
          <h3>⚖️ ${n?"검시 공청회 출두 요건 미달 (Inquest Hearing Blocked)":"Inquest Hearing Requirements Incomplete"}</h3>
          <button class="modal-close-btn">✕</button>
        </div>
        <div class="modal-body">
          <p style="margin-bottom: 12px; color: #ff6b81; font-weight: bold;">
            ${n?"아래 필수 과학수사 절차를 완료해야 법정 증언에 출석할 수 있습니다:":"Complete mandatory investigative protocols before testifying in court:"}
          </p>
          <ul style="list-style: none; padding-left: 0; line-height: 1.8; color: #f1f2f6;">
            ${x}
          </ul>
          <p style="margin-top: 14px; font-size: 13px; color: #94a3b8;">
            ${n?"💡 현장 감식(Scene), 사체 부검(Autopsy), 국과수 실험실(Lab)에서 미수행된 항목을 완수한 후 다시 출석하십시오.":"Complete unperformed tasks in Scene, Autopsy, or Lab stations before testifying."}
          </p>
        </div>
        <div class="modal-footer" style="display: flex; justify-content: flex-end; padding-top: 12px;">
          <button class="btn-secondary" id="btn-close-blocked-modal">
            ${n?"확인 (수사 계속하기)":"Acknowledge (Continue Investigation)"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(b),b.showModal(),b.querySelector(".modal-close-btn")?.addEventListener("click",()=>{b.close(),b.remove()}),b.querySelector("#btn-close-blocked-modal")?.addEventListener("click",()=>{b.close(),b.remove()}),b.addEventListener("click",k=>{k.target===b&&(b.close(),b.remove())})}return p(),i}function xi(t,e){const i=document.createElement("div");i.className="station-container inquest-station";const n=w()==="ko",o=t.currentCase;let a=null;function r(){const s=t.inquestProgress.currentQuestionIdx,c=t.inquestProgress.correctCount,l=t.inquestProgress.completed||s>=o.inquest.length,d=o.inquest[s],p=s+(a?1:0),u=c+(a&&a.isCorrect?1:0),m=p===0?100:Math.max(15,Math.min(100,Math.round(u/p*100)));i.innerHTML=`
      <div class="inquest-courtroom-header">
        <div class="court-gavel">⚖️</div>
        <div>
          <h2>${y("inquestTitle")}</h2>
          <p class="court-subtitle">${y("inquestDesc")}</p>
        </div>
      </div>

      <!-- Daubert Legal Admissibility & Credibility Status Panel -->
      <div class="daubert-credibility-panel">
        <div class="credibility-meter-box">
          <div class="meter-label-row">
            <span>🏛️ ${n?"법의학 감정인 증언 신뢰도 (Daubert Credibility Meter)":"Expert Witness Credibility Meter"}</span>
            <span class="meter-percentage" style="color: ${m>=70?"#2ed573":m>=40?"#ffa502":"#ff4757"}">${m}%</span>
          </div>
          <div class="meter-progress-bar">
            <div class="meter-progress-fill" style="width: ${m}%; background: ${m>=70?"#2ed573":m>=40?"#ffa502":"#ff4757"};"></div>
          </div>
        </div>

        <div class="daubert-pillars-row">
          <div class="daubert-pillar ${u>=1?"pillar-active":""}">
            <span class="pillar-icon">${u>=1?"✓":"○"}</span>
            <span class="pillar-text">${n?"학술 동료심사 (Peer Review)":"Peer-Reviewed"}</span>
          </div>
          <div class="daubert-pillar ${u>=2?"pillar-active":""}">
            <span class="pillar-icon">${u>=2?"✓":"○"}</span>
            <span class="pillar-text">${n?"오차율 통제 (±1.5h Error)":"Error Rate Bound"}</span>
          </div>
          <div class="daubert-pillar ${t.contaminationFlags.length===0?"pillar-active":""}">
            <span class="pillar-icon">${t.contaminationFlags.length===0?"✓":"⚠"}</span>
            <span class="pillar-text">${n?"ISO 17025 연쇄보관":"ISO 17025 Standards"}</span>
          </div>
          <div class="daubert-pillar ${u>=3||l?"pillar-active":""}">
            <span class="pillar-icon">${u>=3||l?"✓":"○"}</span>
            <span class="pillar-text">${n?"법의학계 통설 (Acceptance)":"General Acceptance"}</span>
          </div>
        </div>
      </div>

      <div class="courtroom-deck">
        ${!l&&d?`
          <div class="witness-stand-card">
            <div class="cross-examination-header">
              <span class="cross-badge">${n?`신문 ${s+1} / ${o.inquest.length}`:`Question ${s+1} of ${o.inquest.length}`}</span>
              <div class="counsel-dialogue">
                <div class="avatar-counsel">👨‍💼</div>
                <div class="speech-bubble">
                  <strong>${n?"상대측 변호인 (Defense Counsel):":"Defense Counsel:"}</strong>
                  <p>"${n?d.counselArgumentKo:d.counselArgumentEn}"</p>
                </div>
              </div>
            </div>

            ${a?`
              <!-- Judge Ruling Live Interjection Banner -->
              <div class="judge-ruling-banner ${a.isCorrect?"ruling-overruled":"ruling-sustained"}">
                <span class="judge-icon">👨‍⚖️</span>
                <div class="judge-speech">
                  <strong>${n?"재판장 (Presiding Judge):":"Presiding Judge:"}</strong>
                  <span>${a.isCorrect?n?"“변호인 이의를 기각합니다 (Overruled). 감정인의 과학적 소견을 법정 증거로 채택합니다.”":"“Objection overruled. Expert witness testimony admitted into evidence.”":n?"“변호인 이의를 인용합니다 (Sustained). 증인의 답변은 과학적 입증이 결여되었습니다.”":"“Objection sustained. Expert rebuttal lacks proper scientific foundation.”"}</span>
                </div>
              </div>

              <div class="witness-feedback-card ${a.isCorrect?"accepted":"rejected"}" style="margin-top: 14px; padding: 18px; border-radius: 8px; background: ${a.isCorrect?"rgba(46, 213, 115, 0.15)":"rgba(255, 71, 87, 0.15)"}; border: 1px solid ${a.isCorrect?"#2ed573":"#ff4757"};">
                <div style="font-weight: 900; font-size: 15px; color: ${a.isCorrect?"#2ed573":"#ff4757"}; margin-bottom: 8px;">
                  ${a.isCorrect?n?"⚖️ ✓ [증언 채택] 과학적 반론 성공!":"⚖️ ✓ [Evidence Admitted] Forensic Rebuttal Accepted":n?"⚖️ ✗ [이의 인용] 변호인 반대신문 인용":"⚖️ ✗ [Objection Sustained] Rebuttal Incomplete"}
                </div>
                <p style="color: #f1f2f6; font-size: 14px; line-height: 1.5; margin-bottom: 14px;">${a.explanation}</p>
                <button class="btn-primary" id="btn-next-question">
                  ${s+1>=o.inquest.length?n?"🏛️ 최종 법정 평결 확인 (View Verdict)":"🏛️ View Final Judicial Ruling":n?"➡️ 다음 신문 진행 (Next Question)":"➡️ Proceed to Next Question"}
                </button>
              </div>
            `:`
              <div class="witness-response-options">
                <h4>🗣️ ${n?"증인(법의관) 증언 답변 선택 (Select Expert Witness Rebuttal):":"Select Expert Witness Rebuttal:"}</h4>
                <div class="options-list">
                  ${d.options.map((h,g)=>`
                    <button class="option-btn" data-option="${g}">
                      <span class="option-num">${String.fromCharCode(65+g)}.</span>
                      <span class="option-text">${n?h.textKo:h.textEn}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
            `}
          </div>
        `:`
          <!-- Final Judicial Verdict Card -->
          <div class="verdict-ruling-card">
            <div class="verdict-stamp-box">
              <div class="stamp-circle verified">VERDICT CONFIRMED</div>
            </div>
            <h3>🏛️ ${n?"검시 공청회 최종 법정 판결":"Coroner Inquest Final Judicial Ruling"}</h3>
            <p class="verdict-summary">
              ${n?o.verdictSummaryKo||`본 재판부는 제시된 과학수사 감정 결과(${o.correctCauseKo})를 미국 연방대법원 Daubert 표준 및 형사소송법상 엄격한 증거능력 하에 전면 채택하여 최종 평결을 선고합니다.`:o.verdictSummaryEn||`The Court fully admits and adopts the scientific findings (${o.correctCauseEn}) under the Daubert standard of evidence and renders its final judgment.`}
            </p>

            <div class="verdict-details-grid">
              <div class="verdict-col">
                <strong>${n?"사망의 종류 (Manner of Death)":"Manner of Death"}:</strong>
                <span class="manner-badge ${o.correctManner}">
                  ${n?o.correctManner==="homicide"?"타살 (HOMICIDE)":o.correctManner==="suicide"?"자살 (SUICIDE)":o.correctManner==="accident"?"사고사 (ACCIDENT)":"불상 (UNDETERMINED)":o.correctManner.toUpperCase()}
                </span>
              </div>
              <div class="verdict-col">
                <strong>${n?"사망의 원인 (Cause of Death)":"Cause of Death"}:</strong>
                <span class="cause-text">${n?o.correctCauseKo:o.correctCauseEn}</span>
              </div>
              <div class="verdict-col">
                <strong>${n?"법의학적 입증 점수":"Scientific Admissibility"}:</strong>
                <span class="score-badge">${c} / ${o.inquest.length} (${Math.round(c/Math.max(1,o.inquest.length)*100)}% Pass)</span>
              </div>
            </div>

            <div class="verdict-actions mt-3" style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn-primary" id="btn-restart-case">
                🔄 ${n?"현장/부검으로 복귀":"Return to Scene"}
              </button>
              <button class="btn-secondary" id="btn-retry-inquest">
                ⚡ ${n?"다시 신문 받기":"Retry Testimony"}
              </button>
              <button class="btn-secondary" id="btn-download-cert">
                📜 ${n?"검시 증서 (Certificate) 다운로드":"Download Inquest Certificate"}
              </button>
            </div>
          </div>
        `}
      </div>
    `,!l&&d&&(a?i.querySelector("#btn-next-question")?.addEventListener("click",()=>{const{optIdx:h,isCorrect:g}=a;a=null,t.answerInquestQuestion(s,h,g),t.inquestProgress.completed&&v.playGavel(),r()}):i.querySelectorAll(".option-btn").forEach(h=>{h.addEventListener("click",g=>{const b=parseInt(g.currentTarget.dataset.option||"0",10),x=d.options[b];x.isCorrect?(v.playGavel(),v.playReaction(),e(n?"논리적인 과학적 반론 성공! 법정에 증거가 채택되었습니다.":"Rebuttal accepted into legal evidence!","good")):(v.playObjection(),e(n?"오류: 법의학적 근거가 부족하여 변호인의 이의제기가 인용되었습니다.":"Objection sustained: insufficient forensic foundation.","bad")),a={isCorrect:x.isCorrect,explanation:n?x.explanationKo:x.explanationEn,optIdx:b},r()})})),i.querySelector("#btn-restart-case")?.addEventListener("click",()=>{t.setStation("scene")}),i.querySelector("#btn-retry-inquest")?.addEventListener("click",()=>{t.restartInquest(),r()}),i.querySelector("#btn-download-cert")?.addEventListener("click",()=>{const h={title:"HEMATITE OFFICIAL MEDICOLEGAL INQUEST CERTIFICATE",caseNumber:o.number,caseId:o.id,caseTitle:n?o.titleKo:o.titleEn,decedent:{name:o.victim.name,age:o.victim.age,sex:o.victim.sex,weightKg:o.victim.weightKg},findings:{coreLiverTempC:o.victim.coreLiverTempC,henssgePMIHours:t.autopsyState.calculatedHenssgePmi.toFixed(1),vitreousPotassiumPMIHours:t.autopsyState.calculatedVitreousPmi.toFixed(1),lividity:o.victim.lividitySite,toxicology:o.victim.toxicologyFound},judicialRuling:{mannerOfDeath:o.correctManner.toUpperCase(),causeOfDeath:n?o.correctCauseKo:o.correctCauseEn,admissibilityScore:`${c}/${o.inquest.length}`,timestamp:new Date().toISOString(),standardsCompliance:["ISO/IEC 17025","Daubert Legal Standard","Ed25519 Cryptographic Verification"]}},g=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),b=URL.createObjectURL(g),x=document.createElement("a");x.href=b,x.download=`Hematite_Inquest_Certificate_Case_${o.number.toString().padStart(2,"0")}.json`,x.click(),URL.revokeObjectURL(b),e(n?"검시 증서(Certificate) 다운로드 완료":"Inquest Certificate downloaded","good")})}return r(),i}function Ei(t,e){const i=document.createElement("dialog");i.className="license-dialog",i.id="dlg-license";const n=w()==="ko";i.innerHTML=`
    <div class="license-modal-content">
      <div class="license-modal-header">
        <div class="license-icon">⚖️</div>
        <div>
          <h3>${n?"HEMATITE 정품 라이선스 등록":"HEMATITE License Activation"}</h3>
          <p class="license-subtitle">${n?"Ed25519 암호학적 비대칭키 오프라인 라이선스 검증":"Ed25519 Offline Cryptographic Key Verification"}</p>
        </div>
        <button class="btn-close" id="btn-close-license">&times;</button>
      </div>

      <div class="license-body">
        <div class="license-status-card ${t.isLicensed?"status-licensed":"status-trial"}">
          <div class="status-row">
            <span class="status-label">${n?"현재 라이선스 등급":"Current Edition"}:</span>
            <span class="status-badge ${t.tier}">
              ${t.isLicensed?t.tier==="enterprise"?"Enterprise":"Pro Licensed":"Trial Mode (무료 평가판)"}
            </span>
          </div>
          ${t.isLicensed?`
            <div class="status-row">
              <span class="status-label">${n?"소유자":"Licensee"}:</span>
              <strong>${t.licensee} (${t.email})</strong>
            </div>
            <div class="status-row">
              <span class="status-label">${n?"만료일":"Expires"}:</span>
              <span>${t.expiresAt||"Never (Perpetual)"}</span>
            </div>
          `:`
            <p class="trial-info">
              ${n?"평가판(Trial) 모드에서는 처음 3개 사건(사건 01, 사건 02, 사건 03)을 무료로 플레이할 수 있습니다. 사건 04부터 사건 30까지의 27개 고급 법의학 사건과 전체 분석 기기를 이용하려면 Pro 정품 라이선스가 필요합니다.":"Trial mode grants free access to the first 3 cases (Cases 01, 02, and 03). Cases 04 through 30 (27 advanced cases) and full laboratory features require a Pro License key."}
            </p>
          `}
        </div>

        <div class="license-input-group">
          <label for="input-license-key">${n?"라이선스 키 입력 (HMT1-...)":"Enter License Key (HMT1-...)"}</label>
          <input type="text" id="input-license-key" placeholder="HMT1-eyJ2IjoxLCJlZCI6InByby... (Ed25519 Base64URL Key)" spellcheck="false" autocomplete="off" />
          <div id="license-error-msg" class="license-error-msg" style="display: none;"></div>
        </div>

        <div class="license-helper-box">
          <span class="helper-title">💡 ${n?"테스트용 발급 키 (원클릭 등록 가능):":"Pre-issued Evaluation Key:"}</span>
          <code id="sample-license-code" class="sample-key">HMT1-eyJ2IjoxLCJlZCI6InBybyIsIm4iOiJKZW9uZyBIb29uIEtpbSIsImUiOiJqazk1NzZAaGFueWFuZy5hYy5rciIsImlhdCI6IjIwMjYtMTEtMDkiLCJleHAiOiIyMDMwLTEyLTMxIn0.5BN5_QoQhlmk6MuePBjgLOlnYsjg_QgvRuFnVVoD4ENJWvYuY0ejF1Oda33TUaq1WLH-laHSg3sSl0TQkjL0CA</code>
          <button type="button" class="btn-secondary btn-sm" id="btn-fill-sample-key">${n?"테스트 키 자동 입력":"Auto-fill Evaluation Key"}</button>
        </div>
      </div>

      <div class="license-modal-footer">
        <button class="btn-secondary" id="btn-cancel-license">${n?"닫기":"Close"}</button>
        <button class="btn-primary" id="btn-activate-license">${n?"라이선스 정품 인증":"Activate License"}</button>
      </div>
    </div>
  `;const o=i.querySelector("#btn-close-license"),a=i.querySelector("#btn-cancel-license"),r=i.querySelector("#btn-activate-license"),s=i.querySelector("#btn-fill-sample-key"),c=i.querySelector("#input-license-key"),l=i.querySelector("#license-error-msg"),d=()=>{i.close(),i.remove()};return o.addEventListener("click",d),a.addEventListener("click",d),i.addEventListener("click",p=>{p.target===i&&d()}),s.addEventListener("click",()=>{const p=i.querySelector("#sample-license-code").innerText.trim();c.value=p,l.style.display="none"}),r.addEventListener("click",async()=>{const p=c.value.trim();if(!p){l.textContent=n?"라이선스 키를 입력해주세요.":"Please enter a license key.",l.style.display="block";return}r.disabled=!0,r.textContent=n?"서명 검증 중...":"Verifying Signature...";const u=await Le(p);r.disabled=!1,r.textContent=n?"라이선스 정품 인증":"Activate License",u.isLicensed?(Xt(p),e(u),d()):(l.textContent=u.error||(n?"유효하지 않은 라이선스 키입니다.":"Invalid license key."),l.style.display="block")}),i}function Ci(t,e,i,n){const o=document.createElement("dialog");o.className="case-browser-dialog";const a=w()==="ko",r=L.length,s=L.filter(l=>l.isProOnly).length;o.innerHTML=`
    <div class="case-browser-modal">
      <div class="case-browser-header">
        <div>
          <h2>📁 ${a?`법의학 수사 사건 파일 보관소 (총 ${r}개 사건)`:`Forensic Case Dossier Archive (${r} Cases)`}</h2>
          <p class="browser-subtitle">
            ${a?`사건 01~03: 무료 평가판 (Trial) | 사건 04~${r}: Pro 정품 라이선스 필요`:`Cases 01-03: Free Trial | Cases 04-${r}: Pro License Required`}
          </p>
        </div>
        <button class="btn-close" id="btn-close-browser">&times;</button>
      </div>

      <div class="case-grid">
        ${L.map(l=>{const d=l.id===t,p=l.isProOnly&&!e.isLicensed,u=a?l.titleKo:l.titleEn,m=a?l.subtitleKo:l.subtitleEn;return`
            <div class="case-card ${d?"current":""} ${p?"locked":"unlocked"}" data-case-id="${l.id}">
              <div class="case-card-header">
                <span class="case-num-badge">CASE #${l.number.toString().padStart(2,"0")}</span>
                <span class="case-access-badge ${p?"locked-badge":"free-badge"}">
                  ${p?"🔒 PRO":l.isProOnly?"⭐ PRO UNLOCKED":"FREE TRIAL"}
                </span>
              </div>
              <h4 class="case-card-title">${u}</h4>
              <p class="case-card-sub">${m}</p>
              <div class="case-card-footer">
                ${d?`
                  <span class="case-status-active">▶ ${a?"현재 조사 중":"Active"}</span>
                `:`
                  <button class="btn-select-case ${p?"btn-locked":"btn-primary"} btn-sm">
                    ${p?a?"🔒 잠김 (Pro 필요)":"🔒 Locked":a?"사건 파일 열기":"Open Dossier"}
                  </button>
                `}
              </div>
            </div>
          `}).join("")}
      </div>

      <div class="case-browser-footer">
        <div class="footer-license-note">
          ${e.isLicensed?`
            <span class="pro-active-text">⭐ ${e.tier.toUpperCase()} 라이선스 활성화됨 (${r}개 전 사건 이용 가능)</span>
          `:`
            <span class="trial-note-text">⚡ 현재 평가판 모드 (사건 01~03 이용 가능). 나머지 ${s}개 사건은 Pro 키로 해금됩니다.</span>
          `}
        </div>
        <button class="btn-secondary" id="btn-browser-close">${a?"닫기":"Close"}</button>
      </div>
    </div>
  `;const c=()=>{o.close(),o.remove()};return o.querySelector("#btn-close-browser")?.addEventListener("click",c),o.querySelector("#btn-browser-close")?.addEventListener("click",c),o.addEventListener("click",l=>{l.target===o&&c()}),o.querySelectorAll(".case-card").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.caseId;if(!d)return;const p=L.find(u=>u.id===d);if(p){if(p.isProOnly&&!e.isLicensed){c(),alert(a?`[사건 ${p.number}]는 Pro 정품 라이선스가 필요합니다. 라이선스 키를 등록해주세요.`:`[Case ${p.number}] requires a Pro License. Please activate your license key.`),n();return}i(d),c()}})}),o}const Ke="hematite_progress_v1",ft=1,ki=["scene","autopsy","lab","binder","inquest"],wi=["white","uv","blue","green"],Si=["scale","swab","powder","bagPaper","bagCan"];function Ti(){try{if(typeof localStorage>"u")return null;const t="__hematite_probe__";return localStorage.setItem(t,"1"),localStorage.removeItem(t),localStorage}catch{return null}}function Ai(t,e){return{version:ft,savedAt:new Date().toISOString(),caseId:t.currentCase.id,station:t.currentStation,gloveIntegrity:t.gloveIntegrity,contaminationFlags:[...t.contaminationFlags],contaminatedEvidenceIds:[...t.contaminatedEvidenceIds],collectedEvidenceIds:[...t.collectedEvidenceIds],microscopyStageOffset:t.microscopyStageOffset,activeAls:t.activeAls,activeTool:t.activeTool,autopsyState:{...t.autopsyState},labState:{...t.labState},inquest:{currentQuestionIdx:t.inquestProgress.currentQuestionIdx,correctCount:t.inquestProgress.correctCount,answered:[...t.inquestProgress.answeredMap.entries()],completed:t.inquestProgress.completed},bpaMeasurements:[...t.bpaMeasurements.values()],bpaComputed:t.bpaResult!==null,completedCases:{...e}}}const Q=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),Je=(t,e,i,n)=>typeof t=="number"&&Number.isFinite(t)?Math.min(i,Math.max(e,t)):n,we=t=>Array.isArray(t)?t.filter(e=>typeof e=="string"):[];function Xe(t,e){const i={...t};if(!Q(e))return i;for(const n of Object.keys(t)){const o=t[n],a=e[n];typeof o=="boolean"&&typeof a=="boolean"&&(i[n]=a),typeof o=="number"&&typeof a=="number"&&Number.isFinite(a)&&(i[n]=a)}return i}function et(t){if(!t)return null;let e;try{e=JSON.parse(t)}catch{return null}return!Q(e)||e.version!==ft||typeof e.caseId!="string"?null:e}function Mi(t,e,i){const n=L.find(a=>a.id===e.caseId);if(!n)return{restored:!1};if(n.isProOnly&&!i)return{restored:!1,lockedCaseId:n.id};const o=t.listeners;t.listeners=[];try{t.setCase(n.id,i);const a=new Set(n.evidenceItems.map(c=>c.id));t.currentStation=ki.includes(e.station)?e.station:"scene",t.gloveIntegrity=Je(e.gloveIntegrity,0,100,100),t.contaminationFlags=we(e.contaminationFlags),t.contaminatedEvidenceIds=new Set(we(e.contaminatedEvidenceIds).filter(c=>a.has(c))),t.collectedEvidenceIds=new Set(we(e.collectedEvidenceIds).filter(c=>a.has(c))),t.microscopyStageOffset=Je(e.microscopyStageOffset,-50,50,t.microscopyStageOffset),t.activeAls=wi.includes(e.activeAls)?e.activeAls:"white",t.activeTool=Si.includes(e.activeTool)?e.activeTool:"scale",t.autopsyState=Xe(t.autopsyState,e.autopsyState),t.labState=Xe(t.labState,e.labState);const r=n.inquest.length,s=Q(e.inquest)?e.inquest:null;if(s){const c=new Map;if(Array.isArray(s.answered))for(const p of s.answered){if(!Array.isArray(p)||p.length!==2)continue;const[u,m]=p;typeof u!="number"||u<0||u>=r||!Q(m)||typeof m.chosen!="number"||typeof m.isCorrect!="boolean"||c.set(u,{chosen:m.chosen,isCorrect:m.isCorrect})}const l=[...c.values()].filter(p=>p.isCorrect).length,d=s.completed===!0&&c.size>=r;t.inquestProgress={currentQuestionIdx:Math.min(r,c.size),correctCount:l,answeredMap:c,completed:d},t.inquestCompleted=d,t.inquestScore=d?l:0}if(Array.isArray(e.bpaMeasurements)){for(const c of e.bpaMeasurements)!Q(c)||typeof c.stainId!="string"||t.recordBpaMeasurement(c.stainId,Number(c.widthMm),Number(c.lengthMm),Number(c.gammaDeg));e.bpaComputed&&t.computeBpaReconstruction()}}finally{t.listeners=o}return{restored:!0}}function $i(t,e=Ti()){let i={},n=!1,o=!1;const a=et(tt(e));if(a&&Q(a.completedCases))for(const[s,c]of Object.entries(a.completedCases))Q(c)&&typeof c.score=="number"&&typeof c.total=="number"&&(i[s]={score:c.score,total:c.total,completedAt:String(c.completedAt??"")});function r(){if(!(!e||n||!o)){if(t.inquestProgress.completed){const s=i[t.currentCase.id],c=t.inquestProgress.correctCount;(!s||c>s.score)&&(i[t.currentCase.id]={score:c,total:t.currentCase.inquest.length,completedAt:new Date().toISOString()})}try{e.setItem(Ke,JSON.stringify(Ai(t,i)))}catch{}}}return t.subscribe(r),{save:r,restore(s){const c=et(tt(e));if(!c)return o=!0,{restored:!1};n=!0;try{return Mi(t,c,s)}finally{n=!1,o=!0}},clear(){i={};try{e?.removeItem(Ke)}catch{}},completedCases:()=>({...i}),available:e!==null}}function tt(t){try{return t?t.getItem(Ke):null}catch{return null}}const it={1:"scene",2:"autopsy",3:"lab",4:"binder",5:"inquest"},Li=[{keys:["1","2","3","4","5"],ko:"현장 · 부검 · 감정실 · 사건 파일 · 법정 이동",en:"Scene · Autopsy · Lab · Binder · Inquest"},{keys:["[","]"],ko:"감정실 장비 탭 이전/다음",en:"Previous / next lab instrument"},{keys:[",","."],ko:"BPA: 이전/다음 혈흔 선택",en:"BPA: previous / next stain"},{keys:["Enter"],ko:"BPA: 현재 측정값 기록",en:"BPA: record current measurement"},{keys:["R"],ko:"BPA: 기원 영역 재구성",en:"BPA: reconstruct area of origin"},{keys:["C"],ko:"사건 목록 열기",en:"Open case browser"},{keys:["G"],ko:"장갑 교체",en:"Change gloves"},{keys:["L"],ko:"라이선스 창 열기",en:"Open license dialog"},{keys:["?"],ko:"단축키 도움말",en:"Show this help"},{keys:["Esc"],ko:"열린 창 닫기",en:"Close dialog"}];function Ii(t){if(!t||typeof t.closest!="function")return!1;const e=t;if(e.isContentEditable)return!0;const i=e.tagName;if(i==="TEXTAREA"||i==="SELECT")return!0;if(i==="INPUT"){const n=(e.type||"text").toLowerCase();return!["range","checkbox","radio","button","submit"].includes(n)}return!1}function Ki(t){if(document.getElementById("dlg-shortcuts"))return;const e=w()==="ko",i=document.createElement("dialog");i.className="license-dialog shortcut-dialog",i.id="dlg-shortcuts",i.innerHTML=`
    <div class="license-modal-content">
      <div class="license-modal-header">
        <div><h3>${e?"키보드 단축키":"Keyboard Shortcuts"}</h3></div>
        <button class="btn-close" id="btn-close-shortcuts" aria-label="Close">&times;</button>
      </div>
      <div class="license-body">
        <table>
          ${Li.map(o=>`<tr><td>${o.keys.map(a=>`<kbd>${a}</kbd>`).join("")}</td><td>${e?o.ko:o.en}</td></tr>`).join("")}
        </table>
        <p class="bpa-muted" style="margin-top:12px">${t.persistenceAvailable?e?"진행 상황은 이 브라우저에 자동 저장됩니다.":"Progress is saved automatically in this browser.":e?"이 브라우저에서는 저장소를 사용할 수 없어 진행 상황이 저장되지 않습니다.":"Browser storage is unavailable, so progress is not saved."}</p>
        <div class="inst-controls" style="margin-top:8px">
          <button class="btn-secondary" id="btn-clear-progress" ${t.persistenceAvailable?"":"disabled"}>
            ${e?"저장된 진행 상황 삭제":"Clear saved progress"}
          </button>
        </div>
      </div>
    </div>`;const n=()=>{i.close(),i.remove()};i.addEventListener("close",()=>i.remove()),i.addEventListener("click",o=>{o.target===i&&n()}),i.querySelector("#btn-close-shortcuts")?.addEventListener("click",n),i.querySelector("#btn-clear-progress")?.addEventListener("click",()=>{t.clearProgress(),t.onToast(e?"저장된 진행 상황을 삭제했습니다.":"Saved progress cleared.","info"),n()}),document.body.appendChild(i),i.showModal()}function Pi(t,e,i=!1){const{engine:n}=e,o=w()==="ko";if(it[t]){const s=it[t],c=document.querySelector(`.nav-tab[data-station="${s}"]`);return c?c.click():n.setStation(s),!0}const a=n.currentStation==="lab",r=a&&Qe()==="bpa";switch(t){case"[":case"]":{if(!a)return!1;const s=ce.indexOf(Qe()),c=ce[(s+(t==="]"?1:-1)+ce.length)%ce.length];return hi(c),e.rerender(),!0}case",":case".":return r?(ci(n,t==="."?1:-1),e.rerender(),!0):!1;case"Enter":return!r||i?!1:(ht(n,o,e.onToast),!0);case"r":case"R":return r?(document.querySelector("#btn-bpa-reconstruct")?.click(),!0):!1;case"c":case"C":return e.openCaseBrowser(),!0;case"g":case"G":return n.changeGloves(),e.onToast(o?"새 니트릴 장갑으로 교체했습니다.":"Fresh nitrile gloves on.","info"),!0;case"l":case"L":return e.openLicense(),!0;case"?":return Ki(e),!0;default:return!1}}function Di(t){const e=i=>{if(i.defaultPrevented||i.ctrlKey||i.metaKey||i.altKey||Ii(i.target)||document.querySelector("dialog[open]"))return;const n=i.target?.tagName==="BUTTON";Pi(i.key,t,n)&&i.preventDefault()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}let R={isLicensed:!1,tier:"trial"};const le=$i(S);function K(t,e="info"){let i=document.getElementById("toast-container");i||(i=document.createElement("div"),i.id="toast-container",i.className="toast-container",document.body.appendChild(i));const n=document.createElement("div");n.className=`toast ${e}`,n.textContent=t,i.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),300)},3500)}function _e(){const t=Ei(R,e=>{R=e,K(w()==="ko"?`정품 인증 성공! ${e.tier.toUpperCase()} 라이선스가 활성화되었습니다.`:`License activated! ${e.tier.toUpperCase()} edition unlocked.`,"good"),ie()});document.body.appendChild(t),t.showModal()}function gt(){const t=Ci(S.currentCase.id,R,e=>{S.setCase(e,R.isLicensed)&&K(w()==="ko"?`사건 #${S.currentCase.number} 파일이 로드되었습니다.`:`Case #${S.currentCase.number} loaded.`,"info")},_e);document.body.appendChild(t),t.showModal()}function ie(){const t=document.getElementById("app");if(t)try{t.innerHTML="";const e=ei(S,R,_e,gt,()=>ie(),K);t.appendChild(e);let i;switch(S.currentStation){case"scene":i=Ye(S,K);break;case"autopsy":i=ai(S,K);break;case"lab":i=fi(S,K);break;case"binder":i=vi(S,()=>{S.setStation("inquest")});break;case"inquest":i=xi(S,K);break;default:i=Ye(S,K)}t.appendChild(i)}catch(e){console.error("[Hematite] Render exception:",e),t.innerHTML=`
      <div style="padding: 30px; background: #0b0f19; color: #ff6b81; min-height: 100vh; font-family: monospace;">
        <h2>⚠️ HEMATITE UI RENDER ERROR</h2>
        <p style="color: #fff; margin: 10px 0;">화면 렌더링 중 오류가 발생했습니다:</p>
        <pre style="background: #151c2e; padding: 16px; border: 1px solid #ff4757; border-radius: 8px; white-space: pre-wrap;">${e.stack||e.message}</pre>
        <button onclick="location.reload()" style="background: #3d5afe; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: bold; margin-top: 15px;">
          🔄 화면 새로고침 (Reload)
        </button>
      </div>
    `}}async function qi(){console.log("[Hematite] Initializing Forensic Simulation Engine..."),ie(),S.subscribe(()=>{ie()});try{await bt()}catch(e){console.warn("[Hematite] WASM loading fallback active:",e)}try{R=await Jt(),R.isLicensed?console.log(`[Hematite] Licensed to ${R.licensee} (${R.tier})`):console.log("[Hematite] Running in Trial Mode")}catch(e){console.warn("[Hematite] License check fallback active:",e)}const t=le.restore(R.isLicensed);t.restored?K(w()==="ko"?`저장된 진행 상황을 불러왔습니다: 사건 #${S.currentCase.number}`:`Saved progress restored: Case #${S.currentCase.number}`,"info"):t.lockedCaseId&&K(w()==="ko"?"저장된 사건은 Pro 라이선스가 필요합니다. 평가판 사건으로 시작합니다.":"Your saved case needs a Pro license. Starting from a trial case.","info"),Di({engine:S,rerender:ie,openCaseBrowser:gt,openLicense:_e,onToast:K,clearProgress:()=>le.clear(),persistenceAvailable:le.available}),ie(),le.save()}qi().catch(t=>{console.error("[Hematite] Bootstrap failed:",t)});
