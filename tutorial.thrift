struct Message {
    1: i64 timestamp,
    2: string user,
    3: string text,
    4: bool share,
}

service LoggerService {
    void get(1: list<Message> messages)
}

service SaveMessageService {
    void save(1: Message message)
}
