use crate::telegram_client::TelegramClient;

#[test]
pub fn test_new() {
    let url = "https://example.com/";
    let bot_api_token = "123456789:AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq";
    let bot_chat_id = "-123456789";
    let client = TelegramClient::new(bot_api_token, bot_chat_id, Some(url));

    assert_eq!(client.bot_api_token(), bot_api_token);
    assert_eq!(client.bot_chat_id(), bot_chat_id);
    assert_eq!(client.base_url(), url);

    let client = TelegramClient::new(bot_api_token, bot_chat_id, None);
    assert_eq!(client.bot_api_token(), bot_api_token);
    assert_eq!(client.bot_chat_id(), bot_chat_id);
    assert_eq!(client.base_url(), "https://api.telegram.org/");
}

#[tokio::test]
pub async fn test_send_message() {
    use httptest::{
        matchers::{all_of, eq, json_decoded, request},
        responders::status_code,
        Expectation, Server,
    };
    use serde_json::json;

    let _ = pretty_env_logger::try_init();
    let server = Server::run();

    let message = "test message";
    let telegram_bot_api_token = "123456789:AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQq";
    let telegram_bot_chat_id = "-123456789";
    let path = &format!("/bot{}/sendMessage", telegram_bot_api_token);

    server.expect(
        Expectation::matching(all_of![
            request::method("POST"),
            request::path(path.to_string()),
            request::body(json_decoded(eq(json!(
				{"chat_id": telegram_bot_chat_id, "text": message } )))),
        ])
        .times(1)
        .respond_with(status_code(200)),
    );
    let url: &str = &server.url_str("");
    let client = TelegramClient::new(telegram_bot_api_token, telegram_bot_chat_id, Some(url));
    let result = client.send_message(&message).await;
    assert!(result);
}
