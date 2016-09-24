struct Message {
    1: i64 timestamp,
    2: string user_id,
    3: string text,
    4: bool is_private,
}

service LoggerService {
    void logMessage(1: Message message)
}

service SaveMessageService {
    void saveMessage(1: Message message)
}
