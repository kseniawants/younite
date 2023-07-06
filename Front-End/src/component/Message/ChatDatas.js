// 暫時資料庫

export const ChatDatas = [
  {
    id: 'chat1',
    userInfo: {
      uid: 'user1',
      displayName: 'David',
      state: '目前在線上',
      photoURL:
        'https://images.unsplash.com/photo-1579225663317-c0251b4369bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    messages: [
      {
        id: 'message1',
        text: 'Hello Cindy!',
        isOwner: false,
        imageURL: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=422&q=80',
      },
      // Add more messages as needed
    ],
    lastMessage: {
      id: 'message1',
      text: 'Hello David!',
      isOwner: true,
      timestamp: new Date(),
    },
  },
  {
    id: 'chat2',
    userInfo: {
      uid: 'user2',
      displayName: 'Jason',
      state: '2小時前上線',
      photoURL:
        'https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
    },
    messages: [
      {
        id: 'message2',
        text: 'Hello Jason!',
        isOwner: true,
        imageURL: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      },
      // Add more messages as needed
    ],
    lastMessage: {
      id: 'message2',
      text: 'Hi Cindy!',
      isOwner: false,
      timestamp: new Date(),
    },
  },
  {
    id: 'chat3',
    userInfo: {
      uid: 'user3',
      displayName: 'Cherry',
      state: '30分鐘前上線',
      photoURL:
        'https://images.unsplash.com/photo-1604004215236-0d9c37cf4376?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    messages: [
      {
        id: 'message3',
        text: 'Hello Cherry!',
        isOwner: true,
        imageURL: 'https://images.unsplash.com/photo-1615735487485-e52b9af610c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      },
      // Add more messages as needed
    ],
    lastMessage: {
      id: 'message3',
      text: 'How are you?',
      isOwner: false,
      timestamp: new Date(),
    },
  },
];

export const MessageDatas = [
  // 聊天訊息資料
  {
    id: 'message1',
    chatId: 'chat1',
    content: 'Hi John, how are you?',
    sender: 'user1',
    timestamp: '2022-01-01T10:00:00',
  },
  {
    id: 'message2',
    chatId: 'chat1',
    content: "I'm doing great, thanks!",
    sender: 'user2',
    timestamp: '2022-01-01T10:05:00',
  },
  {
    id: 'message3',
    chatId: 'chat2',
    content: "Hey Jane, what's up?",
    sender: 'user1',
    timestamp: '2022-01-01T11:00:00',
  },
  {
    id: 'message4',
    chatId: 'chat2',
    content: 'Not much, just chilling!',
    sender: 'user2',
    timestamp: '2022-01-01T11:05:00',
  },
  // 新增的聊天訊息資料
  {
    id: 'message5',
    chatId: 'chat3',
    content: "Hi Alice, how's your day going?",
    sender: 'user1',
    timestamp: '2022-01-01T12:00:00',
  },
  {
    id: 'message6',
    chatId: 'chat3',
    content: "It's going well, thank you!",
    sender: 'user3',
    timestamp: '2022-01-01T12:05:00',
  },
];
