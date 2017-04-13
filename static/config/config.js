// 角色座位配置
window.ROLE_SEAT = {
  'n6': {w: ',1,3,5,11,13,15,', h: ',1,3,7,9,13,15,'}
};

// 角色属性： name 角色名称、type 角色类型、sequence 角色出场顺序、maxNum 角色最大数量
window.ALL_ROLE = {
  DOPPELGANGER: {
    name: '化身幽灵',
    type: 'DOPPELGANGER',
    sequence: 1,
    maxNum: 1,
    image: '../img/DOPPELGANGER_2c66060.png'
  },
  WEREWOLF: {
    name: '狼人',
    type: 'WEREWOLF',
    sequence: 2,
    assignment: {'n6': 2},
    maxNum: 2,
    image: '../img/WEREWOLF_9917238.png'
  },
  MINION: {
    name: '爪牙',
    type: 'MINION',
    sequence: 3,
    maxNum: 1,
    image: '../img/MINION_fd3e4e6.png'
  },
  MASON: {
    name: '守夜人',
    type: 'MASON',
    sequence: 4,
    assignment: {'n6': 2},
    maxNum: 2,
    image: '../img/MASON_89adee9.png'
  },
  SEER: {
    name: '预言家',
    type: 'SEER',
    sequence: 5,
    assignment: {'n6': 1},
    maxNum: 1,
    image: '../img/SEER_e06eec6.png'
  },
  ROBBER: {
    name: '强盗',
    type: 'ROBBER',
    sequence: 6,
    assignment: {'n6': 1},
    maxNum: 1,
    image: '../img/ROBBER_2cd3553.png'
  },
  TROUBLEMAKER: {
    name: '捣蛋鬼',
    type: 'TROUBLEMAKER',
    sequence: 7,
    assignment: {'n6': 1},
    maxNum: 1,
    image: '../img/TROUBLEMAKER_314c7da.png'
  },
  DRUNK: {
    name: '酒鬼',
    type: 'DRUNK',
    sequence: 8,
    maxNum: 1,
    image: '../img/DRUNK_a97819f.png'
  },
  INSOMNIAC: {
    name: '失眠者',
    type: 'INSOMNIAC',
    sequence: 9,
    maxNum: 1,
    image: '../img/INSOMNIAC_82588d7.png'
  },
  HUNTER: {
    name: '猎人',
    type: 'HUNTER',
    sequence: 0,
    maxNum: 1,
    image: '../img/HUNTER_98a5d37.png'
  },
  VILLAGER: {
    name: '村民',
    type: 'VILLAGER',
    sequence: 0,
    assignment: {'n6': 2},
    maxNum: 3,
    image: '../img/VILLAGER_6390e42.png'
  },
  TANNER: {
    name: '皮匠',
    type: 'TANNER',
    sequence: 0,
    maxNum: 1,
    image: '../img/TANNER_8eda1c2.png'
  }

};


