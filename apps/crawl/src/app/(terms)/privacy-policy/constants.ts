import { TermsData } from "../../../components/Terms/types";

export const data: TermsData[] = [
    {
        type: 'title',
        title: '개인정보처리방침',
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제1조(목적)',
            },
            {
                type: 'contents',
                contents:
                    "CRAWL(이하 ‘크롤'라고 함)는 크롤이 제공하고자 하는 서비스(이하 ‘서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.",
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제2조(개인정보 처리의 원칙)',
            },
            {
                type: 'contents',
                contents:
                    '개인정보 관련 법령 및 본 방침에 따라 크롤은 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 크롤은 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.',
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제3조(본 방침의 변경)',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.',
                    },
                    {
                        contents: '크롤은 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.',
                        children: {
                            contents: [
                                '크롤이 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법',
                            ],
                        },
                    },
                    {
                        contents:
                            '크롤은 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.',
                    },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제4조(회원 가입을 위한 정보)',
            },
            {
                type: 'contents',
                contents: '크롤은 이용자의 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.',
            },
            {
                type: 'list',
                list: [{ contents: '필수 수집 정보: 닉네임' }],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제5조(서비스 이용 및 부정 이용 확인을 위한 정보)',
            },
            {
                type: 'contents',
                contents:
                    '크롤은 이용자의 서비스 이용에 따른 통계∙분석 및 부정이용의 확인∙분석을 위하여 다음과 같은 정보를 수집합니다. (부정이용이란 이용약관 등에서 금지하고 있는 행위, 명의도용 등의 불·편법행위 등을 말합니다.)',
            },
            {
                type: 'list',
                list: [{ contents: '필수 수집 정보: 서비스 이용기록, 쿠키 및 기기정보' }],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제6조(개인정보 수집 방법)',
            },
            {
                type: 'contents',
                contents: '크롤은 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.',
            },
            {
                type: 'list',
                list: [
                    { contents: '이용자가 크롤의 홈페이지에 자신의 개인정보를 입력하는 방식' },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제7조(개인정보의 이용)',
            },
            {
                type: 'contents',
                contents: '크롤은 개인정보를 다음 각 호의 경우에 이용합니다.',
            },
            {
                type: 'list',
                list: [
                    { contents: '공지사항의 전달 등 크롤운영에 필요한 경우' },
                    { contents: '이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을 위한 경우' },
                    { contents: '크롤의 서비스를 제공하기 위한 경우' },
                    {
                        contents:
                            '법령 및 크롤 약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재를 위한 경우',
                    },
                    { contents: '신규 서비스 개발을 위한 경우' },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제8조(개인정보의 보유 및 이용기간)',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '크롤은 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을 위한 기간 동안 개인정보를 보유 및 이용합니다.',
                    },
                    {
                        contents:
                            '회원 탈퇴 후 최대 7일 이내에는 삭제한 사용자 계정을 복원할 수 있습니다. 7일 후에는 데이터가 완전히 삭제되어 복원할 수 없습니다.',
                    },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제9조(법령에 따른 개인정보의 보유 및 이용기간)',
            },
            {
                type: 'contents',
                contents: '크롤은 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '회원 탈퇴 후 7일 이내에는 삭제된 사용자 계정을 복원할 수 있으며, 해당 계정은 회원 탈퇴 시점으로부터 최대 1주일간 보관됩니다.',
                    },
                    {
                        contents: '통신비밀보호법에 따른 보유정보 및 보유기간',
                        children: {
                            contents: ['로그 기록 자료 : 3개월'],
                        },
                    },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제10조(개인정보의 파기원칙)',
            },
            {
                type: 'contents',
                contents:
                    '크롤은 원칙적으로 이용자의 개인정보 처리 목적의 달성, 보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당 정보를 지체 없이 파기합니다.',
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제11조(개인정보파기절차)',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기 되어집니다.',
                    },
                    { contents: '크롤은 파기 사유가 발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.' },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제13조(개인정보파기방법)',
            },
            {
                type: 'contents',
                contents:
                    '크롤은 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로 분쇄하거나 소각 등을 통하여 파기합니다.',
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제14조(이용자의 의무)',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게 있습니다.',
                    },
                    {
                        contents:
                            '타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.',
                    },
                    {
                        contents:
                            '이용자는 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.',
                    },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제15조(크롤의 개인정보 보호 책임자 지정)',
            },
            {
                type: 'contents',
                contents:
                    '크롤은 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를 지정하고 있습니다.',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '크롤은 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를 지정하고 있습니다.',
                        children: {
                            contents: ['개인정보 보호 책임자'],
                            children: {
                                contents: [
                                    '성명: 박윤찬',
                                    '소속: 크롤',
                                    '전화번호: 010-4024-3752',
                                    '이메일: yongp98@naver.com',
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    {
        type: 'article',
        articleContents: [
            {
                type: 'article-title',
                title: '제16조(권익침해에 대한 구제방법)',
            },
            {
                type: 'list',
                list: [
                    {
                        contents:
                            '정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.',
                        children: {
                            contents: [
                                '개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)',
                                '개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)',
                                '대검찰청 : (국번없이) 1301 (www.spo.go.kr)',
                                '경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)',
                            ],
                        },
                    },
                    {
                        contents:
                            '크롤은 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 제1항의 담당부서로 연락해주시기 바랍니다.',
                    },
                    {
                        contents:
                            '개인정보 보호법 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.',
                        children: {
                            contents: ['중앙행정심판위원회 : (국번없이) 110 (www.simpan.go.kr)'],
                        },
                    },
                ],
            },
        ],
    },
    {
        type: 'effective-date',
        date: '2023.01.15',
    },
];